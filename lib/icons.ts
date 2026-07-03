import {
  BadgeDollarSign,
  Briefcase,
  ChevronRight,
  FileText,
  FileWarning,
  Gavel,
  Handshake,
  Heart,
  Landmark,
  MapPin,
  Scale,
  Shield,
  Target,
  Users,
  Video,
  Zap,
  Map,
  Compass,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Shield,
  Users,
  BadgeDollarSign,
  MapPin,
  Search: Target,
  Scale,
  Gavel,
  Heart,
  Landmark,
  Briefcase,
  Target,
  ChevronRight,
  FileWarning,
  FileText,
  Handshake,
  Video,
  Zap,
  Map,
  Compass,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Shield;
}
