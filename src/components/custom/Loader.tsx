import React from "react";

interface CustomCSSProperties extends React.CSSProperties {
  [key: `--${string}`]: string | number;
}

export default function Loader() {
  const containerStyle: CustomCSSProperties = {
    "--uib-size": "35px",
    "--uib-color": "black",
    "--uib-speed": "1s",
    "--uib-stroke": "3.5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "var(--uib-size)",
    height: "calc(var(--uib-size) * 0.9)",
  };

  const barStyle: React.CSSProperties = {
    width: "var(--uib-stroke)",
    height: "100%",
    backgroundColor: "var(--uib-color)",
    transition: "background-color 0.3s ease",
  };

  const keyframes = `
    @keyframes grow {
      0%, 100% { transform: scaleY(0.3); }
      50% { transform: scaleY(1); }
    }
  `;

  const getBarStyleWithAnimation = (delay: number): React.CSSProperties => ({
    ...barStyle,
    animation: `grow var(--uib-speed) ease-in-out calc(var(--uib-speed) * ${delay}) infinite`,
  });

  return (
    <>
      <style>{keyframes}</style>
      <div style={containerStyle}>
        <div style={getBarStyleWithAnimation(-0.45)}></div>
        <div style={getBarStyleWithAnimation(-0.3)}></div>
        <div style={getBarStyleWithAnimation(-0.15)}></div>
        <div style={getBarStyleWithAnimation(0)}></div>
      </div>
    </>
  );
}
