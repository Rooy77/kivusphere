import React from "react";

interface VisionBadgeProps {
  label: string;
  /** Surcharge de la position left (défaut: 30px) */
  left?: number | string;
  /** Surcharge de la position top (défaut: 30px) */
  top?: number | string;
}

/**
 * Badge glassmorphisme pixel-perfect — specs Figma DA
 * Dimensions: 81×23px | border-radius: 30px
 * Fond: rgba(255,255,255,0.08) | backdrop-filter: blur(50px)
 * Bordure: dégradé 135.64deg simulé via webkit-mask
 * Typo: Gotham 8px, weight 325, letter-spacing 0.295em
 */
export const VisionBadge: React.FC<VisionBadgeProps> = ({
  label,
  left = 30,
  top = 30,
}) => {
  const leftVal = typeof left === "number" ? `${left}px` : left;
  const topVal = typeof top === "number" ? `${top}px` : top;

  return (
    <div
      style={{
        position: "absolute",
        width: "81px",
        height: "23px",
        left: leftVal,
        top: topVal,
        boxSizing: "border-box",
        background: "rgba(255, 255, 255, 0.08)",
        backdropFilter: "blur(50px)",
        WebkitBackdropFilter: "blur(50px)",
        borderRadius: "30px",
      }}
    >
      {/* Bordure dégradée — border-image incompatible avec border-radius, on utilise webkit-mask */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "30px",
          padding: "0.7px",
          background:
            "linear-gradient(135.64deg, rgba(163, 187, 255, 0.2835) 5.15%, rgba(241, 247, 255, 0.81) 50.01%, rgba(163, 187, 255, 0.81) 94.85%)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          pointerEvents: "none",
        }}
      />
      {/* Texte centré */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontFamily: "'Gotham', 'Inter', sans-serif",
            fontStyle: "normal",
            fontWeight: 325,
            fontSize: "8px",
            lineHeight: "10px",
            textAlign: "center",
            letterSpacing: "0.295em",
            color: "#FFFFFF",
            whiteSpace: "nowrap",
          }}
        >
          {label}
        </span>
      </div>
    </div>
  );
};
