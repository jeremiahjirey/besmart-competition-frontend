import { Calendar, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CompProps {
  id: string;
  name: string;
  category: string;
  date: string;
  description: string;
  isRegistered: boolean;
  onRegister: (id: string) => void;
}

export const CompetitionCard = ({
  id,
  name,
  category,
  date,
  description,
  isRegistered,
  onRegister,
}: CompProps) => {
  return (
    <Card
      className={`overflow-hidden transition-all duration-300 border-none ring-1 ${
        isRegistered
          ? "ring-[#E9A218] bg-[#E9A218]/5"
          : "ring-slate-200 hover:ring-[#E9A218]/50 hover:shadow-xl hover:shadow-[#E9A218]/5"
      }`}
    >
      <CardHeader className="p-5 pb-0">
        <div className="flex justify-between items-start mb-3">
          <Badge
            variant="secondary"
            className="bg-slate-100 text-slate-600 font-bold uppercase text-[10px]"
          >
            {category}
          </Badge>
          {isRegistered && (
            <Badge className="bg-[#E9A218] text-white gap-1">
              <CheckCircle2 size={12} /> Registered
            </Badge>
          )}
        </div>
        <h3 className="text-xl font-black leading-tight text-slate-900 dark:text-white">
          {name}
        </h3>
      </CardHeader>

      <CardContent className="p-5">
        <p className="text-sm text-slate-500 line-clamp-2 mb-4">
          {description}
        </p>
        <div className="flex items-center gap-2 text-slate-400">
          <Calendar size={14} />
          <span className="text-xs font-bold">{date}</span>
        </div>
      </CardContent>

      <CardFooter className="p-5 pt-0">
        <Button
          onClick={() => onRegister(id)}
          disabled={isRegistered}
          className={`w-full font-bold transition-all ${
            isRegistered
              ? "bg-slate-100 text-slate-400"
              : "bg-[#E9A218] hover:bg-[#E9A218]/90 shadow-lg shadow-[#E9A218]/20"
          }`}
        >
          {isRegistered ? "Sudah Terdaftar" : "Daftar Sekarang"}
          {!isRegistered && <ArrowRight className="ml-2 w-4 h-4" />}
        </Button>
      </CardFooter>
    </Card>
  );
};
