import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface AddProps {
  onAdd: (name: string, date: string) => void;
}

export const AddCompetitionDialog = ({ onAdd }: AddProps) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", date: "" });

  const handleSubmit = () => {
    if (formData.name && formData.date) {
      onAdd(formData.name, formData.date);
      setFormData({ name: "", date: "" });
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-[#E9A218] hover:bg-[#E9A218]/90 font-bold gap-2">
          <Plus className="w-4 h-4" /> Tambah Lomba
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Daftar Lomba Baru</DialogTitle>
          <DialogDescription>Masukkan detail kompetisi baru.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label>Nama Kompetisi</Label>
            <Input
              placeholder="UI/UX Design"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="grid gap-2">
            <Label>Tanggal</Label>
            <Input
              type="date"
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Batal
          </Button>
          <Button className="bg-[#E9A218]" onClick={handleSubmit}>
            Simpan
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
