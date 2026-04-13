import { createFileRoute } from "@tanstack/react-router";
import heroBg from "@/assets/hero-bg.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { ResultForm } from "@/components/ResultForm";
import { InstructionsPanel } from "@/components/InstructionsPanel";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "CBSE Results 2025 — Check Class 10th & 12th Results" },
      {
        name: "description",
        content:
          "Check your CBSE Class 10th and 12th Examination Results 2025 securely. Fast, reliable access to Central Board of Secondary Education results.",
      },
      { property: "og:title", content: "CBSE Examination Results Portal 2025" },
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

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <img
          src={heroBg}
          alt="Students in an exam hall"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={800}
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold leading-tight text-primary-foreground sm:text-3xl md:text-4xl">
              CBSE Examination Results Portal 2025
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-primary-foreground/80 sm:text-lg">
              Check your Class 10th &amp; 12th Results securely and instantly
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Form — prominent placement */}
          <div className="lg:col-span-2">
            <ResultForm />
          </div>
          {/* Instructions */}
          <div className="lg:col-span-3">
            <InstructionsPanel />
          </div>
        </div>

        {/* Disclaimer Banner */}
        <div className="mt-8 rounded-lg border border-border bg-muted/50 p-4 text-center text-xs text-muted-foreground">
          <strong>Disclaimer:</strong> This is an informational portal. Official results are hosted on CBSE servers.
          We do not store any examination data. Your personal information is handled securely.
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
