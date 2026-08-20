import React, { useRef, useState } from "react";

export default function DrawingPractice({ changeKanji, paths, setPaths }) {
  const svgRef = useRef(null);

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
    const svg = e.currentTarget;
    const point = getSvgPoint(e.clientX, e.clientY);
    const d = `M ${point.x} ${point.y}`;

    drawingRef.current = {
      isDrawing: true,
      pointerId: e.pointerId,
      currentD: d,
    };

    svg.setPointerCapture(e.pointerId);

    setPaths((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        d,
        _temp: true,
      },
    ]);
  }

  function moveDraw(e) {
    const drawing = drawingRef.current;

    if (!drawing.isDrawing || drawing.pointerId !== e.pointerId) {
      return;
    }

    const point = getSvgPoint(e.clientX, e.clientY);
    drawing.currentD += ` L ${point.x} ${point.y}`;

    const newD = drawing.currentD;

    setPaths((prev) => {
      const updated = [...prev];
      const lastIndex = updated.length - 1;

      if (lastIndex < 0 || !updated[lastIndex]._temp) {
        return prev;
      }

      updated[lastIndex] = {
        ...updated[lastIndex],
        d: newD,
      };

      return updated;
    });
  }

  function endDraw(e) {
    const drawing = drawingRef.current;

    if (!drawing.isDrawing || drawing.pointerId !== e.pointerId) {
      return;
    }

    drawingRef.current = {
      isDrawing: false,
      pointerId: null,
      currentD: "",
    };

    setPaths((prev) => {
      const updated = [...prev];
      const lastIndex = updated.length - 1;

      if (lastIndex >= 0 && updated[lastIndex]._temp) {
        updated[lastIndex] = {
          ...updated[lastIndex],
          _temp: false,
        };
      }

      return updated;
    });

    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  }

  return (
    <div className="drawingPractice">
      <svg
        ref={svgRef}
        style={{
          //border: "1px solid #ccc",
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
            stroke="blue"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}
      </svg>
      <div style={{ marginTop: 8 }}>
        <button onClick={() => changeKanji(0)} className="kanjiButton">
          Clear
        </button>
      </div>
    </div>
  );
}
