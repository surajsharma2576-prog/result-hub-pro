import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { ResultForm } from "@/components/ResultForm";
import { InstructionsPanel } from "@/components/InstructionsPanel";
import { SiteFooter } from "@/components/SiteFooter";
import { HeroCarousel } from "@/components/HeroCarousel";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "CBSE Results 2026 — Check Class 10th & 12th Results" },
      {
        name: "description",
        content:
          "Check your CBSE Class 10th and 12th Examination Results 2026 securely. Fast, reliable access to Central Board of Secondary Education results.",
      },
      { property: "og:title", content: "CBSE Examination Results Portal 2026" },
      {
        property: "og:description",
        content: "Check your Class 10th & 12th Results securely through our portal.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <HeroCarousel />

      {/* Main Content */}
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <ResultForm />
          </div>
          <div className="lg:col-span-3">
            <InstructionsPanel />
          </div>
        </div>

        <div className="mt-8 rounded-lg border border-border bg-muted/50 p-4 text-center text-xs text-muted-foreground">
          <strong>Disclaimer:</strong> This is an informational portal. Official results are hosted on CBSE servers.
          We do not store any examination data. Your personal information is handled securely.
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
