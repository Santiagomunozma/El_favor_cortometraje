import { useState } from "react";
// Importamos los datos mock que ya tienes configurados en src/Data/mediaData.ts
import { projectMedia } from "../../Data/mediaData";
import "./FotoFijaPage.css";

export default function FotoFijaPage() {
  // Estado para controlar qué foto o video estamos viendo
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentItem = projectMedia[currentIndex];

  // Funciones de navegación con aritmética modular para el bucle infinito
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projectMedia.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + projectMedia.length) % projectMedia.length,
    );
  };

  // Safe-guard por si no hay datos cargados
  if (!currentItem)
    return <div className="loading">Cargando bitácora de producción...</div>;

  return (
    // Ya no hay botón flotante. La navegación depende del Navbar unificado.
    <section className="foto-fija-layout">
      {/* SECCIÓN IZQUIERDA: Visor Principal con animación fadeInUp */}
      <div className="main-viewer-section">
        <div className="media-wrapper">
          {/* Renderizado condicional según tipo de media */}
          {currentItem.type === "image" ? (
            <img
              src={currentItem.url}
              alt={`Bitácora Visual - ${currentIndex + 1}`}
              className="focused-media"
            />
          ) : (
            // Añadimos 'key' al video para forzar el re-render cuando cambia la URL
            <video
              key={currentItem.url}
              controls
              autoPlay
              className="focused-media"
            >
              <source src={currentItem.url} type="video/mp4" />
              Tu navegador no soporta videos.
            </video>
          )}

          {/* Flechas de navegación con estilos industriales */}
          <button
            className="arrow-nav prev-arrow"
            onClick={handlePrev}
            aria-label="Anterior"
          >
            ❮
          </button>
          <button
            className="arrow-nav next-arrow"
            onClick={handleNext}
            aria-label="Siguiente"
          >
            ❯
          </button>

          {/* Contador abajo a la derecha con tipografía técnica (Monospace) */}
          <div className="counter-badge">
            <span style={{ color: "#F5F0EB" }}>REC:</span> {currentIndex + 1}{" "}
            <span style={{ opacity: 0.5 }}>//</span> {projectMedia.length}
          </div>
        </div>
      </div>

      {/* SECCIÓN DERECHA: Barra Lateral con animación fadeInUp staggered */}
      <div className="sidebar-gallery-section">
        <h3 className="sidebar-title">
          BITÁCORA <span style={{ color: "#C0392B" }}>|</span> MATERIAL
        </h3>

        <div className="thumbnails-vertical-grid">
          {projectMedia.map((item, index) => (
            <div
              key={item.id}
              // Clase dinámica si la miniatura es la activa
              className={`thumb-container ${index === currentIndex ? "active-thumb" : ""}`}
              onClick={() => setCurrentIndex(index)}
            >
              <img
                // Si es video, mostramos un thumbnail predefinido (puedes cambiarlo luego por tus fotos reales)
                src={
                  item.type === "image"
                    ? item.url
                    : "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=300&h=110&fit=crop"
                }
                alt={`Miniatura bitácora ${index + 1}`}
              />
              {/* Superposición del icono de play si es un video */}
              {item.type === "video" && (
                <div className="play-icon-overlay">▶</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
