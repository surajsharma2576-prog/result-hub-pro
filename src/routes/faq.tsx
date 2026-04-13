import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/faq")({
  component: FaqPage,
  head: () => ({
    meta: [
      { title: "CBSE Results 2026 FAQ — Frequently Asked Questions" },
      {
        name: "description",
        content:
          "Find answers to frequently asked questions about CBSE Class 10th and 12th Results 2026. Learn how to check results, download marksheets, apply for re-evaluation and more.",
      },
      { property: "og:title", content: "CBSE Results 2026 — FAQ & Help" },
      {
        property: "og:description",
        content:
          "Frequently asked questions about CBSE Board Exam Results 2026. Step-by-step guides and expert answers.",
      },
    ],
  }),
});

const faqs = [
  {
    q: "How can I check my CBSE Class 10th Result 2026?",
    a: "Visit our portal and fill in the lead form with your name, contact number, school name, and class. After submission, you will be redirected to the official CBSE results page where you can enter your roll number and date of birth to view your result.",
  },
  {
    q: "How can I check my CBSE Class 12th Result 2026?",
    a: "Follow the same process — fill in the lead form on our homepage, select Class 12th, choose your stream (Science, Commerce, or Arts), and submit. You will be redirected to the official CBSE 12th result page instantly.",
  },
  {
    q: "When will CBSE Results 2026 be declared?",
    a: "CBSE typically declares Class 10th and 12th results in May-June every year. The exact date is announced on the official CBSE website. Keep checking our portal for the latest updates.",
  },
  {
    q: "What details do I need to check my CBSE result?",
    a: "You need your Roll Number, School Number, and Date of Birth to access your result on the official CBSE portal. On our lead form, we collect your name and contact details to assist you.",
  },
  {
    q: "How to download CBSE marksheet from DigiLocker?",
    a: "After results are declared, log in to DigiLocker (digilocker.gov.in) using your Aadhaar-linked mobile number. Your CBSE marksheet and passing certificate will be available under the 'Issued Documents' section automatically.",
  },
  {
    q: "What is the CBSE re-evaluation process for 2026?",
    a: "Students can apply for verification of marks or re-evaluation within 15 days of result declaration. Visit the official CBSE website, fill in the online application, and pay the prescribed fee. Results of re-evaluation are usually declared within 30 days.",
  },
  {
    q: "Is this the official CBSE results website?",
    a: "No, this is an informational portal that helps students access their results quickly. We redirect you to the official CBSE results page (cbseresults.nic.in) after collecting basic details. Official results are hosted only on CBSE servers.",
  },
  {
    q: "What to do if the CBSE result website is not working?",
    a: "Due to heavy traffic on result day, the server may be slow. Try these tips: (1) Clear your browser cache, (2) Use a different browser, (3) Try during off-peak hours, (4) Use DigiLocker as an alternative, (5) Check via UMANG app.",
  },
  {
    q: "How to calculate CBSE percentage from marksheet?",
    a: "For Class 10th, add marks of all 5 main subjects and divide by 5. For Class 12th, add marks of all subjects (excluding additional subject unless it improves your score) and divide by 5. The result is your percentage.",
  },
  {
    q: "Can I get my CBSE result via SMS?",
    a: "Yes, CBSE provides result via SMS. For Class 12th, type: CBSE12 <RollNumber> <SchoolNumber> <CentreNumber> and send to 7738299899. For Class 10th, type: CBSE10 <RollNumber> <SchoolNumber> <CentreNumber> and send to the same number.",
  },
  {
    q: "What is the passing criteria for CBSE Board Exams 2026?",
    a: "Students need to score a minimum of 33% marks in each subject (both theory and practical combined) to pass. For subjects with practical exams, students must pass in both theory and practical separately.",
  },
  {
    q: "How to apply for CBSE compartment exam 2026?",
    a: "If a student fails in one or two subjects, they can appear for compartment exams. The application is available on the CBSE website within a few days of result declaration. Fill in the form, pay the fee, and appear for the exam as per the schedule.",
  },
];

function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />

      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
            Frequently Asked Questions — CBSE Results 2026
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Find answers to all your queries about CBSE Board Examination Results 2026.
            Can't find what you're looking for?{" "}
            <Link to="/" className="font-medium text-primary hover:underline">
              Check your result now →
            </Link>
          </p>
        </div>

        {/* CTA Banner */}
        <div className="mb-8 rounded-lg bg-primary px-6 py-5 text-center">
          <p className="text-lg font-semibold text-primary-foreground">
            Ready to check your CBSE Result 2026?
          </p>
          <p className="mt-1 text-sm text-primary-foreground/80">
            Fill in your details and get instant access to the official results page.
          </p>
          <Link
            to="/"
            className="mt-3 inline-block rounded-md bg-primary-foreground px-6 py-2.5 text-sm font-semibold text-primary transition-transform hover:scale-105"
          >
            Check Result Now
          </Link>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="gov-card overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium text-foreground transition-colors hover:bg-muted/50"
              >
                <span>{faq.q}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="border-t border-border px-5 py-4 text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 rounded-lg border border-border bg-muted/50 p-6 text-center">
          <h2 className="text-lg font-bold text-foreground">
            Still have questions? Check your result first!
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Our portal redirects you to the official CBSE results page in seconds.
          </p>
          <Link
            to="/"
            className="gov-btn-primary mt-4 inline-block"
          >
            Go to Result Form →
          </Link>
        </div>

        {/* SEO content */}
        <section className="mt-10 text-sm leading-relaxed text-muted-foreground">
          <h2 className="mb-3 text-lg font-bold text-foreground">
            About CBSE Board Examination Results 2026
          </h2>
          <p>
            The Central Board of Secondary Education (CBSE) conducts Class 10th and Class 12th board examinations every year for lakhs of students across India and abroad. CBSE Results 2026 for both Class X and Class XII are declared on the official websites — cbseresults.nic.in and results.cbse.nic.in. Students can also access their digital marksheets through DigiLocker and the UMANG app.
          </p>
          <p className="mt-3">
            This portal provides a quick and easy way for students to navigate to the official result page. We help students by providing important instructions, FAQs, and direct links so they can check their CBSE board exam results without any confusion. Whether you are looking for CBSE 10th result 2026, CBSE 12th result 2026, CBSE compartment result, or CBSE re-evaluation process, our FAQ section covers all the important topics.
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
