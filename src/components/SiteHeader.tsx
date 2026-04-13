import cbseLogo from "@/assets/cbse-logo.png";

export function SiteHeader() {
  return (
    <header>
      <div className="gov-gradient-bar" />
      <div className="gov-header">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-4 sm:px-6">
          <img
            src={cbseLogo}
            alt="CBSE Emblem"
            width={64}
            height={64}
            className="h-14 w-14 rounded-full bg-primary-foreground/10 object-contain sm:h-16 sm:w-16"
          />
          <div className="min-w-0 flex-1">
            <h1 className="text-lg font-bold leading-tight tracking-tight sm:text-xl md:text-2xl">
              CBSE Examination Results Portal 2025
            </h1>
            <p className="mt-0.5 text-sm opacity-80 sm:text-base">
              Central Board of Secondary Education
            </p>
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <div className="secure-badge flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span>Secure Portal</span>
            </div>
          </div>
        </div>
      </div>
      <div className="gov-gradient-bar" />
    </header>
  );
}
