import { useState } from "react";
import SidebarParticipans from "@/components/user/SidebarParticipans";
import HeaderParticipans from "@/components/user/HeadarParticipans";
import { CompetitionCard } from "@/components/user/CompetitionCard";
import { Trophy } from "lucide-react";

const ParticipantDashboardPage = () => {
  // Data lomba yang tersedia di sistem
  const [competitions, setCompetitions] = useState([
    {
      id: "C1",
      name: "Global UI/UX Design Sprint",
      category: "Design",
      date: "20 Okt 2024",
      description:
        "Tantangan desain antarmuka 48 jam untuk solusi berkelanjutan.",
      isRegistered: false,
    },
    {
      id: "C2",
      name: "Cyber Security Hackathon",
      category: "Security",
      date: "15 Nov 2024",
      description:
        "Uji kemampuan penetration testing Anda dalam skenario nyata.",
      isRegistered: true,
    },
    {
      id: "C3",
      name: "Mobile App Innovation",
      category: "Development",
      date: "05 Des 2024",
      description:
        "Bangun aplikasi mobile yang berdampak sosial bagi masyarakat.",
      isRegistered: false,
    },
  ]);

  const handleRegister = (id: string) => {
    setCompetitions((prev) =>
      prev.map((comp) =>
        comp.id === id ? { ...comp, isRegistered: true } : comp,
      ),
    );
    // Integrasikan API pendaftaran di sini
  };

  return (
    <div className="flex min-h-screen bg-slate-50/50 dark:bg-slate-950 text-slate-900">
      <SidebarParticipans />

      <main className="flex-1 lg:ml-64 p-6 lg:p-10">
        <HeaderParticipans />

        <div className="mt-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-[#E9A218] rounded-lg text-white">
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

          {/* GRID LAYOUT */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {competitions.map((comp) => (
              <CompetitionCard
                key={comp.id}
                {...comp}
                onRegister={handleRegister}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ParticipantDashboardPage;
