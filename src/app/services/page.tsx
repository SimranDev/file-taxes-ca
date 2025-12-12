import type { Metadata } from "next";
import UnderDevelopment from "@/src/components/UnderDevelopment";

export const metadata: Metadata = {
  title: "Services - FileTaxes.ca",
  description: "Professional Canadian tax filing and accounting services",
};

export default function ServicesPage() {
  return (
    <div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
        <UnderDevelopment />
      </main>
    </div>
  );
}
