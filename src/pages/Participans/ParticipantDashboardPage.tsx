/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import SidebarParticipans from "@/components/user/SidebarParticipans";
import HeaderParticipans from "@/components/user/HeadarParticipans";
import { CompetitionCard } from "@/components/user/CompetitionCard";

import { Trophy, CreditCard, Loader2, Upload } from "lucide-react";
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
import { toast } from "sonner"; //

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
  const [competitions, setCompetitions] = useState<Competition[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // State Modal & Loading biasa
  const [selectedComp, setSelectedComp] = useState<Competition | null>(null);
  const [isRegistering, setIsRegistering] = useState<boolean>(false); //

  // State Form Pendaftaran
  const [teamName, setTeamName] = useState<string>("");
  const [isSolo, setIsSolo] = useState<string>("1"); //
  const [paymentProof, setPaymentProof] = useState<File | null>(null); //

  useEffect(() => {
    const fetchCompetitions = async () => {
      try {
        const response = await axiosInstance.get("/events");
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

  //
  const resetForm = () => {
    setSelectedComp(null);
    setTeamName("");
    setIsSolo("1");
    setPaymentProof(null);
  };

  //

  const handleConfirmRegister = async () => {
    if (!selectedComp) return;

    if (!teamName) {
      toast.warning("Harap isi Nama Tim / Partisipan.");
      return;
    }

    if (!paymentProof) {
      toast.warning("Harap unggah bukti pembayaran terlebih dahulu.");
      return;
    }

    setIsRegistering(true);

    try {
      const formData = new FormData();
      formData.append("event_id", selectedComp.id.toString());
      formData.append("team_name", teamName);
      formData.append("is_solo", isSolo);
      formData.append("payment_proof", paymentProof);

      const response = await axiosInstance.post("/registrations", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setCompetitions((prev) =>
        prev.map((comp) =>
          comp.id === selectedComp.id ? { ...comp, isRegistered: true } : comp,
        ),
      );

      toast.success("Pendaftaran Berhasil!", {
        description: response.data.message || "Menunggu verifikasi admin.",
      });

      resetForm();
    } catch (err: any) {
      console.error("Error pendaftaran:", err);
      const errorMessage =
        err.response?.data?.message || "Terjadi kesalahan saat mendaftar.";

      toast.error("Pendaftaran Gagal", {
        description: errorMessage,
      });

      console.log(errorMessage);
    } finally {
      setIsRegistering(false);
    }
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
              Oopss! {error}. Pastikan server backend Laravel berjalan.
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

      <Dialog
        open={!!selectedComp}
        onOpenChange={(isOpen) => {
          if (!isOpen && !isRegistering) resetForm();
        }}
      >
        <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
          {selectedComp && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-black mb-1">
                  {selectedComp.title}
                </DialogTitle>
                <DialogDescription className="text-slate-500 text-sm">
                  Silakan lengkapi form di bawah ini.
                </DialogDescription>
              </DialogHeader>

              <div className="bg-[#E9A218]/10 text-[#E9A218] p-3 rounded-lg border border-[#E9A218]/20 flex items-center justify-between mt-2">
                <span className="text-sm font-semibold flex items-center gap-2">
                  <CreditCard size={16} /> Biaya Pendaftaran:
                </span>
                <span className="font-bold">
                  {selectedComp.price === 0
                    ? "Gratis"
                    : formatRupiah(selectedComp.price)}
                </span>
              </div>

              {/* Kembali bersih tanpa fieldset lock atau hack pointer-events */}
              <div className="space-y-4 py-2 w-full">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700">
                    Nama Tim / Peserta <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: Raja Langit"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E9A218] transition-all"
                    disabled={isRegistering}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700">
                    Tipe Partisipasi <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={isSolo}
                    onChange={(e) => setIsSolo(e.target.value)}
                    className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#E9A218] transition-all"
                    disabled={isRegistering}
                  >
                    <option value="1">Individu (Solo)</option>
                    <option value="0">Berkelompok (Tim)</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700">
                    Bukti Pembayaran <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center justify-center w-full">
                    <label
                      className={`flex flex-col items-center justify-center w-full h-32 border-2 border-slate-300 border-dashed rounded-lg transition-colors ${isRegistering ? "bg-slate-100 cursor-not-allowed" : "bg-slate-50 hover:bg-slate-100 cursor-pointer"}`}
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-8 h-8 mb-2 text-slate-400" />
                        <p className="mb-2 text-sm text-slate-500">
                          {paymentProof ? (
                            <span className="font-semibold text-emerald-600 truncate max-w-[200px] block text-center">
                              {paymentProof.name}
                            </span>
                          ) : (
                            <>
                              <span className="font-semibold">
                                Klik untuk upload
                              </span>{" "}
                              gambar
                            </>
                          )}
                        </p>
                        <p className="text-xs text-slate-500">
                          JPG, PNG, atau JPEG
                        </p>
                      </div>
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        disabled={isRegistering}
                        onChange={(e) => {
                          if (e.target.files && e.target.files.length > 0) {
                            setPaymentProof(e.target.files[0]);
                          }
                        }}
                      />
                    </label>
                  </div>
                </div>
              </div>

              <DialogFooter className="gap-2 sm:gap-0 pt-2">
                <Button
                  variant="outline"
                  onClick={resetForm}
                  disabled={isRegistering}
                >
                  Batal
                </Button>
                <Button
                  className="bg-[#E9A218] hover:bg-[#E9A218]/90 text-white flex items-center gap-2"
                  onClick={handleConfirmRegister}
                  disabled={isRegistering}
                >
                  {isRegistering && (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  )}
                  {isRegistering ? "Mengirim..." : "Kirim Pendaftaran"}
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
