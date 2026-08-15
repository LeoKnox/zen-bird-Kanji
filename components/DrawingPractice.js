import React, { useMemo, useRef, useState } from "react";

export default DrawingPractice = () => {
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
    const evt = e.nativeEvent ?? e;
    const p = getSvgPoint(evt.clientX, evt.clientY);

    drawingRef.current.isDrawing = true;
    drawingRef.current.points = [p];
    drawingRef.current.currentD = `M ${p.x} ${p.y}`;
  }

  function moveDraw(e) {
    const { isDrawing, points } = drawingRef.current;
    if (!isDrawing) return;

    const evt = e.nativeEvent ?? e;
    const p = getSvgPoint(evt.clientX, evt.clientY);

    points.push(p);
    drawingRef.current.currentD = `${drawingRef.current.currentD} L ${p.x} ${p.y}`;

    setPaths((prev) => {
      const last = prev[prev.length - 1];
      if (!last || last._temp !== true) {
        return [...prev, { d: drawingRef.current.currentD, _temp: true }];
      }
      const updated = [...prev];
      updated[updated.length - 1] = {
        d: drawingRef.current.currentD,
        _temp: true,
      };
      return updated;
    });
  }

  function endDraw() {
    const { isDrawing } = drawingRef.current;
    if (!isDrawing) return;

    drawingRef.current.isDrawing = false;
    drawingRef.current.points = [];
    drawingRef.current.currentD = "";

    setPaths((prev) => {
      if (!prev.length) return prev;
      const last = prev[prev.length - 1];
      if (!last?._temp) return prev;
      const updated = [...prev];
      updated[updated.length - 1] = { d: last.d };
      return updated;
    });
  }

  return (
    <div className="drawingPractice">
      <svg
        style={{
          border: "1px solid #ccc",
          touchAction: "none",
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
};
