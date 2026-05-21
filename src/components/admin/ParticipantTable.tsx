import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { DeleteParticipantAlert } from "./DeleteParticipantAlert";

export interface Participant {
  id: string;
  name: string;
  email: string;
  institution: string;
  status: "Active" | "Inactive";
}

interface ParticipantTableProps {
  data: Participant[];
  onDelete: (id: string) => void;
}

export const ParticipantTable = ({ data, onDelete }: ParticipantTableProps) => {
  return (
    <div className="rounded-xl border bg-white dark:bg-slate-900 shadow-sm overflow-hidden">
      <Table>
        <TableHeader className="bg-slate-50/50 dark:bg-slate-800/50">
          <TableRow>
            <TableHead className="font-bold">Peserta</TableHead>
            <TableHead className="font-bold">Institusi</TableHead>
            <TableHead className="font-bold">Status</TableHead>
            <TableHead className="text-right font-bold">Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                <div className="flex flex-col">
                  <span className="font-bold text-slate-900 dark:text-white">
                    {user.name}
                  </span>
                  <span className="text-xs text-slate-500">{user.email}</span>
                </div>
              </TableCell>
              <TableCell className="text-sm">{user.institution}</TableCell>
              <TableCell>
                <Badge
                  variant={user.status === "Active" ? "default" : "secondary"}
                >
                  {user.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-blue-500"
                  >
                    <Mail size={16} />
                  </Button>
                  <DeleteParticipantAlert
                    compName={user.name}
                    onDelete={() => onDelete(user.id)}
                  />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
