import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="gov-footer">
      <div className="gov-gradient-bar" />
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h4 className="mb-2 text-sm font-semibold text-primary-foreground">
              Disclaimer
            </h4>
            <p className="text-xs leading-relaxed opacity-70">
              This is an informational portal. Official results are hosted on CBSE servers at cbseresults.nic.in.
              This website is not affiliated with CBSE or the Government of India.
            </p>
          </div>
          <div>
            <h4 className="mb-2 text-sm font-semibold text-primary-foreground">
              Quick Links
            </h4>
            <ul className="space-y-1 text-xs opacity-70">
              <li>
                <Link to="/faq" className="transition-opacity hover:opacity-100">FAQ &amp; Help</Link>
              </li>
              <li>
                <a href="#" className="transition-opacity hover:opacity-100">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="transition-opacity hover:opacity-100">Terms of Service</a>
              </li>
              <li>
                <a href="https://cbse.gov.in" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-100">
                  Official CBSE Website
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 text-sm font-semibold text-primary-foreground">
              Contact
            </h4>
            <p className="text-xs leading-relaxed opacity-70">
              For any queries regarding results, please contact your respective school or visit the official CBSE helpline.
            </p>
          </div>
        </div>
        <div className="mt-6 border-t border-primary-foreground/10 pt-4 text-center text-xs opacity-50">
          © 2026 CBSE Examination Results Portal. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
