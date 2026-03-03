import { useState } from "react";
import { UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const AddParticipantDialog = ({
  onAdd,
}: {
  onAdd: (data: any) => void;
}) => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", institution: "" });

  const handleSave = () => {
    onAdd({
      ...form,
      id: `USR-${Math.floor(Math.random() * 1000)}`,
      status: "Active",
    });
    setOpen(false);
    setForm({ name: "", email: "", institution: "" });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2 font-bold bg-slate-900 text-white hover:bg-slate-800">
          <UserPlus size={16} /> Tambah Peserta
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Tambah Peserta Baru</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label>Nama Lengkap</Label>
            <Input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label>Email</Label>
            <Input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label>Institusi</Label>
            <Input
              value={form.institution}
              onChange={(e) =>
                setForm({ ...form, institution: e.target.value })
              }
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSave} className="bg-[#E9A218]">
            Daftarkan
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
