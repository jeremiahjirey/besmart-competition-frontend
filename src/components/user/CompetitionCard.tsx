import {
  Calendar,
  ArrowRight,
  CheckCircle2,
  Users,
  CreditCard,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CompProps {
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
  onRegister: (id: number) => void;
}

const parseDateString = (dateStr: string) => {
  if (!dateStr) return new Date();
  const [datePart, timePart] = dateStr.split(" ");
  const [day, month, year] = datePart.split("-");
  const [hour, minute, second] = timePart.split(":");

  return new Date(
    Number(year),
    Number(month) - 1,
    Number(day),
    Number(hour),
    Number(minute),
    Number(second),
  );
};

export const CompetitionCard = ({
  id,
  title,
  description,
  max_teams,
  price,
  registration_start,
  registration_deadline,
  event_date,
  is_open,
  isRegistered = false,
  onRegister,
}: CompProps) => {
  const startDate = parseDateString(registration_start);
  const now = new Date();
  const isBeforeStart = now < startDate;

  const isButtonDisabled = isBeforeStart || !is_open || isRegistered;

  // Formatter Rupiah
  const formatRupiah = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  // Menentukan warna dan teks badge status
  const getBadgeStatus = () => {
    if (isBeforeStart) {
      return { text: "Belum Dibuka", className: "bg-slate-100 text-slate-500" }; // Warna abu-abu/netral
    }
    if (is_open) {
      return {
        text: "Pendaftaran Buka",
        className: "bg-green-100 text-green-700",
      };
    }
    return { text: "Ditutup", className: "bg-red-100 text-red-700" }; // Warna merah
  };

  const badgeStatus = getBadgeStatus();

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
            className={`font-bold uppercase text-[10px] ${badgeStatus.className}`}
          >
            {badgeStatus.text}
          </Badge>

          {isRegistered && (
            <Badge className="bg-[#E9A218] text-white gap-1">
              <CheckCircle2 size={12} /> Terdaftar
            </Badge>
          )}
        </div>
        <h3 className="text-xl font-black leading-tight text-slate-900 dark:text-white mb-2">
          {title}
        </h3>
      </CardHeader>

      <CardContent className="p-5 space-y-4">
        <p className="text-sm text-slate-500 line-clamp-2">{description}</p>

        <div className="grid grid-cols-2 gap-3 text-slate-500">
          <div className="flex items-center gap-2">
            <Calendar size={14} className="text-[#E9A218]" />
            <span className="text-xs font-bold">{event_date}</span>
          </div>
          <div className="flex items-center gap-2">
            <CreditCard size={14} className="text-[#E9A218]" />
            <span className="text-xs font-bold">
              {price === 0 ? "Gratis" : formatRupiah(price)}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Users size={14} className="text-[#E9A218]" />
            <span className="text-xs font-bold">Max {max_teams} Tim</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-[#E9A218]" />
            <span
              className="text-xs font-bold line-clamp-1"
              title={`Batas: ${registration_deadline}`}
            >
              Batas: {registration_deadline.split(" ")[0]}
            </span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-5 pt-0">
        <Button
          onClick={() => onRegister(id)}
          disabled={isButtonDisabled}
          className={`w-full font-bold transition-all ${
            isButtonDisabled
              ? "bg-slate-100 text-slate-400"
              : "bg-[#E9A218] hover:bg-[#E9A218]/90 shadow-lg shadow-[#E9A218]/20"
          }`}
        >
          {isRegistered
            ? "Sudah Terdaftar"
            : isBeforeStart
              ? "Belum Dibuka"
              : !is_open
                ? "Pendaftaran Ditutup"
                : "Daftar Sekarang"}
          {!isButtonDisabled && <ArrowRight className="ml-2 w-4 h-4" />}
        </Button>
      </CardFooter>
    </Card>
  );
};
