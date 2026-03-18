type Props = {
  total: number;
  current: number;
};

export default function ProgressBar({ total, current }: Props) {
  return (
    <div style={{ display: "flex", gap: 4 }}>
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} style={{ flex: 1, background: "#555", height: 3 }}>
          <div
            style={{
              height: "100%",
              background: "white",
              width: i === current ? "100%" : i < current ? "100%" : "0%",
              transition: "width 3s linear",
            }}
          />
        </div>
      ))}
    </div>
  );
}
