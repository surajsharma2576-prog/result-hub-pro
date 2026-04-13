export function InstructionsPanel() {
  return (
    <div className="space-y-6">
      {/* Notice */}
      <div className="notice-bar rounded-r-lg p-4">
        <p className="text-sm font-semibold text-success">
          📢 CBSE Results 2025 are now available
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          Students can check their Class 10th and 12th examination results through this portal.
        </p>
      </div>

      {/* Important Instructions */}
      <div className="gov-card p-6">
        <h3 className="mb-4 flex items-center gap-2 text-base font-bold text-foreground">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
          Important Instructions
        </h3>
        <ul className="space-y-2.5 text-sm text-muted-foreground">
          <li className="instruction-item">
            Keep your Roll Number, School Number, and Date of Birth ready before checking your result.
          </li>
          <li className="instruction-item">
            Results are subject to verification by the Board. In case of any discrepancy, the Board's decision shall be final.
          </li>
          <li className="instruction-item">
            Students are advised to collect their original mark sheet from their respective schools.
          </li>
          <li className="instruction-item">
            For re-evaluation or re-checking requests, visit the official CBSE website within 15 days of result declaration.
          </li>
          <li className="instruction-item">
            This portal provides quick access to results. Official results are hosted on CBSE servers.
          </li>
          <li className="instruction-item">
            In case of heavy traffic, please wait and try again after some time.
          </li>
        </ul>
      </div>

      {/* Quick Links */}
      <div className="gov-card p-6">
        <h3 className="mb-3 text-base font-bold text-foreground">Quick Links</h3>
        <div className="space-y-2">
          {[
            { label: "CBSE Official Website", url: "https://cbse.gov.in" },
            { label: "DigiLocker — Download Marksheet", url: "https://digilocker.gov.in" },
            { label: "CBSE Academic Portal", url: "https://cbseacademic.nic.in" },
          ].map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-primary transition-colors hover:underline"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" x2="21" y1="14" y2="3" />
              </svg>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
