import React from "react";

const HandyTextLogo = ({
  width,
  height,
  className,
}: {
  width?: number | string;
  height?: number | string;
  className?: string;
}) => {
  return (
    <div
      className={[
        "flex items-center justify-center select-none",
        className,
      ].filter(Boolean).join(" ")}
      style={{ width, height }}
      aria-label="Bolt"
    >
      <span className="text-3xl font-black tracking-tight text-logo-primary">
        Bolt
      </span>
    </div>
  );
};

export default HandyTextLogo;
