import { useState } from "react";

export default function App() {
  const [hex, setHex] = useState("");
  const [rgb, setRgb] = useState("");

  function handleGenerateHex() {
    const chars = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
    ];
    let hex = "#";
    for (let i = 0; i <= 5; i++) {
      hex += chars[Math.floor(Math.random() * chars.length)];
    }
    setRgb("");
    setHex(hex);
  }

  function handleGenerateRgb() {
    let rgb = [];
    for (let i = 0; i < 3; i++) {
      rgb.push(Math.floor(Math.random() * 256));
    }
    setHex("");
    setRgb(`rgb(${rgb[0]},${rgb[1]},${rgb[2]})`);
  }

  return (
    <div
      className="w-full h-[100vh] flex justify-center items-center flex-col gap-2 bg-[]"
      style={{
        backgroundColor: hex || rgb,
      }}
    >
      <div className="w-full text-center h-[150px]">
        <h1 className="text-[100px]">{hex || rgb}</h1>
      </div>
      <div className="flex gap-3">
        <button
          className="border-2 bg-white p-2 rounded-lg"
          onClick={handleGenerateHex}
        >
          Generate Hex color
        </button>
        <button
          className="border-2 bg-white p-2 rounded-lg"
          onClick={handleGenerateRgb}
        >
          Generate RGB color
        </button>
      </div>
    </div>
  );
}
