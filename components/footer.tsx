import Link from "next/link";

const footerLinks = [
  { label: "Privacy Policy", href: "https://www.bitcoinassociation.ch/privacy" },
  { label: "Terms and Conditions", href: "https://www.bitcoinassociation.ch/terms" },
];

export function Footer() {
  return (
    <footer className="bg-[#111111] py-10">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back to Top */}
        <div className="text-center mb-6">
          <Link
            href="#header"
            className="text-[#999] text-xs uppercase tracking-widest hover:text-white transition-colors font-sans"
          >
            Back to Top
          </Link>
        </div>

        {/* Footer Links */}
        <nav className="flex justify-center items-center gap-6 flex-wrap">
          {footerLinks.map((link, index) => (
            <div key={link.label} className="flex items-center">
              <Link
                href={link.href}
                className="text-[#999] text-xs uppercase tracking-widest hover:text-white transition-colors font-sans"
              >
                {link.label}
              </Link>
              {index < footerLinks.length - 1 && (
                <span className="ml-6 text-[#999]">|</span>
              )}
            </div>
          ))}
        </nav>
      </div>
    </footer>
  );
}
