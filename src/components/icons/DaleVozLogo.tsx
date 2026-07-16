import React from "react";
import { useTranslation } from "react-i18next";

interface DaleVozLogoProps {
  width?: number;
  height?: number;
  className?: string;
  compact?: boolean;
}

const DaleVozMark = ({ size = 38 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 128 128"
    aria-hidden="true"
    className="shrink-0"
  >
    <rect width="128" height="128" rx="30" fill="var(--color-ink)" />
    <path
      d="M29 38 51 64 29 90"
      fill="none"
      stroke="var(--color-volt)"
      strokeWidth="11"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="60"
      y="51"
      width="10"
      height="26"
      rx="5"
      fill="var(--color-bone)"
    />
    <rect
      x="78"
      y="39"
      width="10"
      height="50"
      rx="5"
      fill="var(--color-coral)"
    />
    <rect
      x="96"
      y="47"
      width="10"
      height="34"
      rx="5"
      fill="var(--color-bone)"
    />
  </svg>
);

const DaleVozLogo: React.FC<DaleVozLogoProps> = ({
  width = 144,
  height,
  className = "",
  compact = false,
}) => {
  const { t } = useTranslation();
  const markSize = height ?? Math.max(32, Math.round(width * 0.27));

  return (
    <div
      className={`dale-voz-logo ${className}`}
      style={{ width: compact ? markSize : width }}
      aria-label="Dale Voz"
    >
      <DaleVozMark size={markSize} />
      {!compact && (
        <span className="dale-voz-wordmark">
          <span>{t("brand.nameFirst")}</span>
          <span>{t("brand.nameSecond")}</span>
        </span>
      )}
    </div>
  );
};

export { DaleVozMark };
export default DaleVozLogo;
