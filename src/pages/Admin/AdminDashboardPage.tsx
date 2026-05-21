import { useState } from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";
import { AddCompetitionDialog } from "@/components/admin/AddCompetitionDialog";
import { CompetitionTable } from "@/components/admin/CompetitionTable";
import { ParticipantTable } from "@/components/admin/ParticipantTable";
import { AddParticipantDialog } from "@/components/admin/AddParticipantDialog";

const AdminDashboardPage = () => {
  const [participants, setParticipants] = useState([
    {
      id: "USR-001",
      name: "Budi Santoso",
      email: "budi@example.com",
      institution: "Universitas Indonesia",
      status: "Active" as const,
    },
    {
      id: "USR-002",
      name: "Siti Aminah",
      email: "siti@example.com",
      institution: "ITB",
      status: "Active" as const,
    },
  ]);

  const [submissions, setSubmissions] = useState([
    {
      id: "SUB-001",
      competition: "Global Tech Challenge",
      date: "2024-03-10",
      status: "Verified",
    },
  ]);

  const addComp = (name: string, date: string) => {
    const newEntry = {
      id: `SUB-00${submissions.length + 1}`,
      competition: name,
      date: date,
      status: "Pending",
    };
    setSubmissions([...submissions, newEntry]);
  };

  const deleteComp = (id: string) => {
    setSubmissions(submissions.filter((s) => s.id !== id));
  };

  const addParticipant = (newVal: any) =>
    setParticipants([...participants, newVal]);
  const deleteParticipant = (id: string) =>
    setParticipants(participants.filter((p) => p.id !== id));

  return (
    <div className="flex min-h-screen bg-slate-50/50 dark:bg-slate-950">
      <AdminSidebar />
      <main className="flex-1 lg:ml-64 p-6 lg:p-10">
        <AdminHeader />

        <section className="gap-7 grid grid-cols-1 grid-rows-2">
          <div className="" id="competition">
            <div className="mt-8 flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold tracking-tight">
                Daftar Kompetisi
              </h2>
              <AddCompetitionDialog onAdd={addComp} />
            </div>

            <CompetitionTable data={submissions} onDelete={deleteComp} />
          </div>

          <div className="" id="participant">
            <div className="mt-8 flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold tracking-tight">
                Manajemen Peserta
              </h2>
              <AddParticipantDialog onAdd={addParticipant} />
            </div>

            <ParticipantTable
              data={participants}
              onDelete={deleteParticipant}
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboardPage;
