"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "News",
    href: "/blog",
    children: [
      { label: "News", href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland" },
      { label: "Archive", href: "https://www.bitcoinassociation.ch/archive" },
    ],
  },
  {
    label: "Events",
    href: "/events",
    children: [
      { label: "Roadshow 2025", href: "https://www.bitcoinassociation.ch/roadshow-2025" },
      { label: "Bitcoin Meetup (Zurich)", href: "https://www.meetup.com/Bitcoin-Meetup-Switzerland/", external: true },
      { label: "Bitcoin Meetup Geneva", href: "https://www.meetup.com/Bitcoin-Meetup-Geneva", external: true },
      { label: "Bitcoin Meetup Luzern", href: "https://www.meetup.com/Bitcoin-Meetup-Luzern/", external: true },
      { label: "Bitcoin Meetup Neuchatel", href: "https://www.meetup.com/Bitcoin-Meetup-Neuchatel/", external: true },
      { label: "Bitcoin Meetup Basel", href: "https://www.meetup.com/bitcoin-meetup-basel/", external: true },
    ],
  },
  {
    label: "membership",
    href: "/membership",
    children: [
      { label: "Private", href: "https://www.bitcoinassociation.ch/private" },
      { label: "Corporate", href: "https://www.bitcoinassociation.ch/corporate" },
      { label: "Our Corporate Members", href: "https://www.bitcoinassociation.ch/our-corporate-members" },
    ],
  },
  {
    label: "Participate",
    href: "/participate",
    children: [
      { label: "Meetups & Events", href: "https://www.bitcoinassociation.ch/meetups-events" },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About", href: "https://www.bitcoinassociation.ch/about-1" },
      { label: "Board", href: "https://www.bitcoinassociation.ch/board" },
      { label: "Finances", href: "https://www.bitcoinassociation.ch/finances" },
      { label: "Statutes", href: "https://www.bitcoinassociation.ch/statutes" },
      { label: "Media Kit", href: "https://www.bitcoinassociation.ch/media-kit" },
      { label: "Contact", href: "https://www.bitcoinassociation.ch/contact-1" },
    ],
  },
];

// Logo SVG with triangle and Bitcoin symbol
function Logo() {
  return (
    <svg width="120" height="55" viewBox="0 0 120 55" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Triangle with Bitcoin symbol */}
      <g transform="translate(0, 0)">
        <polygon points="20,5 5,35 35,35" fill="#C41E3A" stroke="#C41E3A" strokeWidth="1"/>
        <text x="20" y="28" fill="white" fontSize="14" fontFamily="proxima-nova, sans-serif" fontWeight="700" textAnchor="middle" style={{ fontStyle: 'normal' }}>₿</text>
      </g>
      {/* Text */}
      <text x="42" y="14" fill="white" fontSize="8" fontFamily="proxima-nova, sans-serif" fontWeight="600" letterSpacing="0.08em">BITCOIN</text>
      <text x="42" y="24" fill="white" fontSize="8" fontFamily="proxima-nova, sans-serif" fontWeight="600" letterSpacing="0.08em">ASSOCIATION</text>
      <text x="42" y="34" fill="white" fontSize="8" fontFamily="proxima-nova, sans-serif" fontWeight="600" letterSpacing="0.08em">SWITZERLAND</text>
    </svg>
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header id="header" className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-[1200px] mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.children ? (
                  <>
                    <button className="nav-link text-white flex items-center gap-1">
                      {item.label}
                    </button>
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 ${
                        openDropdown === item.label ? "block" : "hidden group-hover:block"
                      }`}
                    >
                      <div className="bg-white rounded shadow-lg py-2 min-w-[220px]">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            target={child.external ? "_blank" : undefined}
                            rel={child.external ? "noopener noreferrer" : undefined}
                            className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-primary transition-colors whitespace-nowrap"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="nav-link text-white"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-white transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white fixed inset-0 top-[72px] z-40 overflow-y-auto">
          <nav className="p-6">
            {navItems.map((item) => (
              <div key={item.label} className="mb-4">
                {item.children ? (
                  <>
                    <div className="text-dark font-semibold mb-2 text-sm uppercase tracking-wider">{item.label}</div>
                    <div className="pl-4 space-y-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          target={child.external ? "_blank" : undefined}
                          rel={child.external ? "noopener noreferrer" : undefined}
                          className="block text-gray-600 hover:text-primary transition-colors text-sm"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block text-dark font-semibold hover:text-primary transition-colors text-sm uppercase tracking-wider"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
