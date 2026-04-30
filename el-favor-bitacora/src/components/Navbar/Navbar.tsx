import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "../../Hooks/useIsMobile";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Casting", href: "#casting" },
  { label: "Quiénes Somos", href: "#equipo" },
  { label: "Ensayos", href: "#ensayos" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const isMobile = useIsMobile();

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
          if (entry.isIntersecting) setActiveSection(entry.target.id);
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
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "background-color 0.3s ease",
          backgroundColor:
            scrolled || menuOpen ? "rgba(13,13,13,0.97)" : "transparent",
          borderBottom: scrolled ? "0.5px solid #2C2C2C" : "none",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 24px",
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

        {isMobile ? (
          <button
            onClick={() => setMenuOpen((o) => !o)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: "22px",
                  height: "1.5px",
                  backgroundColor: "#F5F0EB",
                  transition: "transform 0.2s ease, opacity 0.2s ease",
                  transform: menuOpen
                    ? i === 0
                      ? "rotate(45deg) translate(4px, 4px)"
                      : i === 2
                        ? "rotate(-45deg) translate(4px, -4px)"
                        : "scaleX(0)"
                    : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        ) : (
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
                    <a
                      href={href}
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
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#F5F0EB")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = isActive
                          ? "#F5F0EB"
                          : "#4A4A4A")
                      }
                    >
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </header>

      {isMobile && menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "60px",
            left: 0,
            right: 0,
            zIndex: 49,
            backgroundColor: "rgba(13,13,13,0.97)",
            borderBottom: "0.5px solid #2C2C2C",
            padding: "16px 24px 24px",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: "0",
            }}
          >
            {links.map(({ label, href }) => {
              const isActive = activeSection === href.replace("#", "");
              return (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      display: "block",
                      padding: "14px 0",
                      borderBottom: "0.5px solid #1A1A1A",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "13px",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color: isActive ? "#C0392B" : "#4A4A4A",
                      textDecoration: "none",
                    }}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}
