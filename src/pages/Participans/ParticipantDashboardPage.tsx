/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import SidebarParticipans from "@/components/user/SidebarParticipans";
import HeaderParticipans from "@/components/user/HeadarParticipans";
import { CompetitionCard } from "@/components/user/CompetitionCard";
import { Trophy, Calendar, Users, CreditCard, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import axiosInstance from "@/api/axiosInstance";

// Interface untuk data kompetisi agar TypeScript tidak komplain
interface Competition {
  id: number;
  title: string;
  description: string;
  max_teams: number;
  price: number;
  registration_start: string;
  registration_deadline: string;
  event_date: string;
  is_open: boolean;
  isRegistered?: boolean;
}

const ParticipantDashboardPage = () => {
  // Data lomba yang tersedia di sistem
  const [competitions, setCompetitions] = useState<Competition[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // State untuk mengontrol Modal Dialog Shadcn
  const [selectedComp, setSelectedComp] = useState<Competition | null>(null);

  useEffect(() => {
    const fetchCompetitions = async () => {
      try {
        const response = await axiosInstance.get(
          "http://127.0.0.1:8000/api/events",
        );

        const result = response.data;
        const dataFromApi = result.data ? result.data : result;

        const formattedData = dataFromApi.map((item: any) => ({
          ...item,
          isRegistered: false,
        }));

        setCompetitions(formattedData);
      } catch (err: any) {
        setError(err.message || "Terjadi kesalahan pada server");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCompetitions();
  }, []);

  const formatRupiah = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const handleOpenModal = (id: number) => {
    const comp = competitions.find((c) => c.id === id);
    if (comp) setSelectedComp(comp);
  };

  // Fungsi konfirmasi pendaftaran di dalam Modal
  const handleConfirmRegister = () => {
    if (!selectedComp) return;

    setCompetitions((prev) =>
      prev.map((comp) =>
        // Perbaikan: Ubah state isRegistered menjadi true, bukan is_open
        comp.id === selectedComp.id ? { ...comp, isRegistered: true } : comp,
      ),
    );

    setSelectedComp(null);
  };

  return (
    <div className="flex min-h-screen bg-slate-50/50 dark:bg-slate-950 text-slate-900">
      <SidebarParticipans />

      <main className="flex-1 lg:ml-64 p-6 lg:p-10">
        <HeaderParticipans />

        <div className="mt-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-[#E9A218] rounded-lg text-white shadow-lg shadow-[#E9A218]/20">
              <Trophy size={20} />
            </div>
            <div>
              <h2 className="text-2xl font-black tracking-tight">
                Eksplorasi Kompetisi
              </h2>
              <p className="text-sm text-slate-500">
                Pilih dan ikuti kompetisi yang sesuai dengan keahlian Anda.
              </p>
            </div>
          </div>

          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-20 text-slate-400">
              <Loader2 className="w-8 h-8 animate-spin mb-4 text-[#E9A218]" />
              <p>Memuat data lomba...</p>
            </div>
          ) : error ? (
            <div className="bg-red-50 text-red-600 p-4 rounded-lg border border-red-100 font-medium">
              Oopss! {error}. Pastikan server backend Laravel (localhost:8000)
              sudah berjalan.
            </div>
          ) : competitions.length === 0 ? (
            <div className="text-center py-20 text-slate-400">
              Belum ada data kompetisi yang tersedia saat ini.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {competitions.map((comp) => (
                <CompetitionCard
                  key={comp.id}
                  {...comp}
                  onRegister={handleOpenModal}
                />
              ))}
            </div>
          )}
        </div>
      </main>

      {/* MODAL DETAIL & KONFIRMASI (SHADCN DIALOG) */}
      <Dialog
        open={!!selectedComp}
        onOpenChange={(isOpen) => {
          if (!isOpen) setSelectedComp(null);
        }}
      >
        <DialogContent className="sm:max-w-125">
          {selectedComp && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-black mb-2">
                  {selectedComp.title}
                </DialogTitle>
                <DialogDescription className="text-slate-500">
                  {selectedComp.description}
                </DialogDescription>
              </DialogHeader>

              <div className="bg-slate-50 p-4 rounded-lg my-4 space-y-3 border border-slate-100">
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-slate-500">
                    <Calendar size={16} className="text-[#E9A218]" /> Tanggal
                    Pelaksanaan
                  </span>
                  <span className="font-bold text-slate-900">
                    {selectedComp.event_date}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-slate-500">
                    <Users size={16} className="text-[#E9A218]" /> Kuota
                    Maksimal
                  </span>
                  <span className="font-bold text-slate-900">
                    {selectedComp.max_teams} Tim
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-slate-500">
                    <CreditCard size={16} className="text-[#E9A218]" /> Biaya
                    Pendaftaran
                  </span>
                  <span className="font-bold text-slate-900">
                    {selectedComp.price === 0
                      ? "Gratis"
                      : formatRupiah(selectedComp.price)}
                  </span>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-200">
                  <p className="text-xs text-red-500 font-medium">
                    * Pendaftaran ditutup pada:{" "}
                    {selectedComp.registration_deadline}
                  </p>
                </div>
              </div>

              <DialogFooter className="gap-2 sm:gap-0">
                <Button variant="outline" onClick={() => setSelectedComp(null)}>
                  Batal
                </Button>
                <Button
                  className="bg-[#E9A218] hover:bg-[#E9A218]/90 text-white"
                  onClick={handleConfirmRegister}
                >
                  Konfirmasi Pendaftaran
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ParticipantDashboardPage;
