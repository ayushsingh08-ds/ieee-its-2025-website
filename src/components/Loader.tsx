import { Html, useProgress } from "@react-three/drei";

export default function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div
        style={{
          color: "#10b981",
          fontFamily: "Inter, sans-serif",
          fontSize: "18px",
          fontWeight: "600",
          textAlign: "center",
          padding: "20px",
          background: "rgba(15, 23, 42, 0.8)",
          borderRadius: "12px",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(16, 185, 129, 0.3)",
        }}
      >
        <div style={{ marginBottom: "10px" }}>Loading 3D Model</div>
        <div
          style={{
            width: "200px",
            height: "4px",
            background: "rgba(16, 185, 129, 0.2)",
            borderRadius: "2px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              background: "linear-gradient(90deg, #10b981, #3b82f6)",
              transition: "width 0.3s ease",
            }}
          />
        </div>
        <div style={{ marginTop: "8px", fontSize: "14px" }}>
          {progress.toFixed(0)}%
        </div>
      </div>
    </Html>
  );
}
