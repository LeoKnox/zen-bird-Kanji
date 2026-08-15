import React, { useMemo, useRef, useState } from "react";

export default function DrawingPractice() {
  const svgRef = useRef(null);
  const [paths, setPaths] = useState([]);

  const drawingRef = useRef({
    isDrawing: false,
    points: [],
    currentD: "",
  });

  function getSvgPoint(clientX, clientY) {
    const svg = svgRef.current;
    if (!svg) return { x: clientX, y: clientY };

    const rect = svg.getBoundingClientRect();
    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  }

  function startDraw(e) {
    const p = getSvgPoint(e.clientX, e.clientY);

    e.currentTarget?.setPointerCapture?.(e.pointerId);

    drawingRef.current.isDrawing = true;
    drawingRef.current.points = [p];
    drawingRef.current.currentD = `M ${p.x} ${p.y}`;

    setPaths((prev) => [
      ...prev,
      { d: drawingRef.current.currentD, _temp: true },
    ]);
  }

  function moveDraw(e) {
    if (!drawingRef.current.isDrawing) return;

    const p = getSvgPoint(e.clientX, e.clientY);
    drawingRef.current.points.push(p);
    drawingRef.current.currentD += ` L ${p.x} ${p.y}`;

    setPaths((prev) => {
      if (prev.length === 0) return prev;

      const last = prev[prev.length - 1];
      if (!last || !last._temp) {
        return [...prev, { d: drawingRef.current.currentD, _temp: true }];
      }

      const updated = [...prev];
      updated[updated.length - 1] = { ...last, d: drawingRef.current.currentD };
      return updated;
    });
  }

  function endDraw() {
    if (!drawingRef.current.isDrawing) return;

    drawingRef.current.isDrawing = false;
    drawingRef.current.points = [];
    drawingRef.current.currentD = "";

    setPaths((prev) => {
      if (prev.length === 0) return prev;

      const last = prev[prev.length - 1];
      if (!last?._temp) return prev;

      const updated = [...prev];
      updated[updated.length - 1] = { ...last, _temp: false };
      return updated;
    });
  }

  return (
    <div className="drawingPractice">
      <svg
        ref={svgRef}
        style={{
          border: "1px solid #ccc",
          touchAction: "none",
          display: "block",
          width: "100%",
        }}
        onPointerDown={startDraw}
        onPointerMove={moveDraw}
        onPointerUp={endDraw}
        onPointerCancel={endDraw}
        onLostPointerCapture={endDraw}
      >
        {paths.map((p, idx) => (
          <path
            key={idx}
            d={p.d}
            fill="none"
            stroke="#111"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}
      </svg>
    </div>
  );
}
