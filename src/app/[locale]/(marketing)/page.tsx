import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Closing from "@/components/shared/Closing";
import Hero from "@/components/shared/Hero";
import Highlights from "@/components/shared/Highlights";
import Judgments from "@/components/shared/Judgments";
import Works from "@/components/shared/Works";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: { absolute: t("home.title") },
    description: t("home.description"),
  };
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Highlights />
      <Works />
      <Judgments />
      <Closing />
    </main>
  );
}
