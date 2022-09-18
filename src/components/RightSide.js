import { loremIpsum } from "react-lorem-ipsum";

export default function RightSide() {
  const style={
    backgroundColor: "#f7fafc",
    color: "#1a202c",
    fontFamily: "sans-serif",
    padding: "1rem",
    margin: "1rem",
    borderRadius: "0.5rem",
    border: "2px solid #edf2f7",
    boxShadow: "0 5px 10px rgba(0, 0, 0, 0.12)",
  }
  return (
    <div className="text-wrapper">
      {loremIpsum({ p: 3 }).map((text,index) => (
      <div className="text" key={index} style={style}>
        {text}
      </div>
    ))}
    </div>
  );
}
