import { notFound } from "next/navigation";
import { LeasingModule } from "@/components/modules/LeasingModule";
import type { LeasingType } from "@/components/modules/LeasingModule";

const VALID_TYPES: LeasingType[] = ["luxury", "retail", "fnb", "popup"];

interface LeasingTypePageProps {
  params: Promise<{ type: string }>;
}

export function generateStaticParams() {
  return VALID_TYPES.map((type) => ({ type }));
}

export async function generateMetadata({ params }: LeasingTypePageProps) {
  const { type } = await params;
  const titles: Record<string, string> = {
    luxury: "Luxury Leasing | American Dream",
    retail: "Flagship Retail Leasing | American Dream",
    fnb: "F&B & Restaurant Leasing | American Dream",
    popup: "Pop-Up & Temporary Leasing | American Dream",
  };
  return {
    title: titles[type] ?? "Leasing | American Dream",
  };
}

export default async function LeasingTypePage({
  params,
}: LeasingTypePageProps) {
  const { type } = await params;

  if (!VALID_TYPES.includes(type as LeasingType)) {
    notFound();
  }

  return <LeasingModule type={type as LeasingType} />;
}
