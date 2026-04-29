import { useEffect, useRef, useState } from "react";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Casting", href: "#casting" },
  { label: "Quiénes Somos", href: "#equipo" },
  { label: "Ensayos", href: "#ensayos" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      lastScrollY.current = window.scrollY;
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = links.map((l) => l.href.replace("#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background-color 0.3s ease",
        backgroundColor: scrolled ? "rgba(13,13,13,0.95)" : "transparent",
        borderBottom: scrolled ? "0.5px solid #2C2C2C" : "none",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 32px",
      }}
    >
      <a
        href="#inicio"
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "22px",
          color: "#F5F0EB",
          letterSpacing: "2px",
          textDecoration: "none",
        }}
      >
        El <span style={{ color: "#C0392B" }}>Favor</span>
      </a>

      <nav>
        <ul
          style={{
            display: "flex",
            gap: "32px",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {links.map(({ label, href }) => {
            const isActive = activeSection === href.replace("#", "");
            return (
              <li key={href}>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "12px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: isActive ? "#F5F0EB" : "#4A4A4A",
                    textDecoration: "none",
                    paddingBottom: "3px",
                    borderBottom: isActive
                      ? "1px solid #C0392B"
                      : "1px solid transparent",
                    transition: "color 0.2s ease, border-color 0.2s ease",
                  }}
                >
                  {label}
                </div>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
