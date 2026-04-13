import { useState } from "react";
import { toast } from "sonner";

const REDIRECT_URL =
  "https://cbseresults.nic.in/2025/CBSE12th/CBSE12thLogin?ResultType=cbse12Sup";

export function ResultForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    schoolName: "",
    classLevel: "",
    stream: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = "Full name is required";
    if (!/^\d{10}$/.test(formData.contactNumber))
      errs.contactNumber = "Enter a valid 10-digit mobile number";
    if (!formData.schoolName.trim()) errs.schoolName = "School name is required";
    if (!formData.classLevel) errs.classLevel = "Please select your class";
    if (formData.classLevel === "class_12" && !formData.stream)
      errs.stream = "Please select your stream";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
    toast.success("Form submitted successfully! Redirecting to results...");

    setTimeout(() => {
      window.location.href = REDIRECT_URL;
    }, 2500);
  };

  if (isSuccess) {
    return (
      <div className="gov-card p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-success" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-foreground">Submission Successful!</h3>
        <p className="mt-2 text-muted-foreground">
          Redirecting you to the official CBSE Results page...
        </p>
        <div className="mx-auto mt-4 loading-spinner" />
      </div>
    );
  }

  return (
    <div className="gov-card overflow-hidden">
      <div className="bg-primary px-6 py-4">
        <h2 className="text-lg font-bold text-primary-foreground">
          Check Your Result
        </h2>
        <p className="mt-0.5 text-sm text-primary-foreground/80">
          Class 10th &amp; 12th Results 2026 — Enter your details below
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 p-6">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">
            Full Name <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            className="gov-input w-full"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={(e) => setFormData((p) => ({ ...p, fullName: e.target.value }))}
            maxLength={100}
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-destructive">{errors.fullName}</p>
          )}
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">
            Contact Number <span className="text-destructive">*</span>
          </label>
          <input
            type="tel"
            className="gov-input w-full"
            placeholder="10-digit mobile number"
            value={formData.contactNumber}
            onChange={(e) => {
              const val = e.target.value.replace(/\D/g, "").slice(0, 10);
              setFormData((p) => ({ ...p, contactNumber: val }));
            }}
          />
          {errors.contactNumber && (
            <p className="mt-1 text-xs text-destructive">{errors.contactNumber}</p>
          )}
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">
            School Name <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            className="gov-input w-full"
            placeholder="Enter your school name"
            value={formData.schoolName}
            onChange={(e) => setFormData((p) => ({ ...p, schoolName: e.target.value }))}
            maxLength={200}
          />
          {errors.schoolName && (
            <p className="mt-1 text-xs text-destructive">{errors.schoolName}</p>
          )}
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">
            Class <span className="text-destructive">*</span>
          </label>
          <select
            className="gov-input w-full"
            value={formData.classLevel}
            onChange={(e) =>
              setFormData((p) => ({ ...p, classLevel: e.target.value, stream: "" }))
            }
          >
            <option value="">— Select Class —</option>
            <option value="class_10">Class 10th</option>
            <option value="class_12">Class 12th</option>
          </select>
          {errors.classLevel && (
            <p className="mt-1 text-xs text-destructive">{errors.classLevel}</p>
          )}
        </div>

        {formData.classLevel === "class_12" && (
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">
              Stream <span className="text-destructive">*</span>
            </label>
            <select
              className="gov-input w-full"
              value={formData.stream}
              onChange={(e) => setFormData((p) => ({ ...p, stream: e.target.value }))}
            >
              <option value="">— Select Stream —</option>
              <option value="science">Science</option>
              <option value="commerce">Commerce</option>
              <option value="arts">Arts / Humanities</option>
            </select>
            {errors.stream && (
              <p className="mt-1 text-xs text-destructive">{errors.stream}</p>
            )}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="gov-btn-primary flex w-full items-center justify-center gap-2 disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <div className="loading-spinner !h-5 !w-5 !border-2" />
              Processing...
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              Check Result
            </>
          )}
        </button>

        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          Your data is secure &amp; encrypted
        </div>
      </form>
    </div>
  );
}
