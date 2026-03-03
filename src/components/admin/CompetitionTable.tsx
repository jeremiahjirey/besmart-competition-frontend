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
import { FileDown, MoreHorizontal } from "lucide-react";
import { DeleteCompetitionAlert } from "./DeleteCompetitionAlert";

interface Submission {
  id: string;
  competition: string;
  date: string;
  status: string;
}

interface TableProps {
  data: Submission[];
  onDelete: (id: string) => void;
}

export const CompetitionTable = ({ data, onDelete }: TableProps) => {
  return (
    <div className="rounded-xl border bg-white dark:bg-slate-900 shadow-sm overflow-hidden">
      <Table>
        <TableHeader className="bg-slate-50/50 dark:bg-slate-800/50">
          <TableRow>
            <TableHead className="w-24 font-bold">ID</TableHead>
            <TableHead className="font-bold">Kompetisi</TableHead>
            <TableHead className="font-bold">Tanggal</TableHead>
            <TableHead className="font-bold">Status</TableHead>
            <TableHead className="text-right font-bold">Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="text-slate-500 font-medium">
                {item.id}
              </TableCell>
              <TableCell className="font-bold">{item.competition}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>
                <Badge
                  className={
                    item.status === "Verified" ? "bg-[#E9A218]" : "bg-slate-400"
                  }
                >
                  {item.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right flex justify-end gap-1">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <FileDown size={16} />
                </Button>
                <DeleteCompetitionAlert
                  compName={item.competition}
                  onDelete={() => onDelete(item.id)}
                />
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontal size={16} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
