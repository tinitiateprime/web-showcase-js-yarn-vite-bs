import React, { useEffect, useRef, useState } from "react";

export default function DiagramEditor() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [mode, setMode] = useState("select");
  const [selected, setSelected] = useState({ type: null, id: null });
  const [pendingSource, setPendingSource] = useState(null);
  const svgRef = useRef(null);
  const dragRef = useRef({ dragging: false, nodeId: null, offsetX: 0, offsetY: 0 });

  const nextId = () => Math.random().toString(36).slice(2, 9);

  const getSvgPoint = (evt) => {
    const svg = svgRef.current;
    const pt = svg.createSVGPoint();
    pt.x = evt.clientX;
    pt.y = evt.clientY;
    const ctm = svg.getScreenCTM();
    if (!ctm) return { x: 0, y: 0 };
    const ipt = pt.matrixTransform(ctm.inverse());
    return { x: ipt.x, y: ipt.y };
  };

  // --- Palette with symbols only ---
  const palette = [
    { type: "rect", defaultSize: { w: 80, h: 50 } },
    { type: "ellipse", defaultSize: { w: 80, h: 50 } },
    { type: "diamond", defaultSize: { w: 70, h: 70 } },
    { type: "parallelogram", defaultSize: { w: 80, h: 50 } },
    { type: "cylinder", defaultSize: { w: 70, h: 80 } },
    { type: "document", defaultSize: { w: 80, h: 60 } },
    { type: "text", defaultSize: { w: 60, h: 30 }, text: "T" },
  ];

  // --- Drag from palette ---
  const onPaletteDragStart = (e, item) => {
    e.dataTransfer.setData("application/x-shape", JSON.stringify(item));
    e.dataTransfer.effectAllowed = "copy";
  };

  const onCanvasDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
  };

  const onCanvasDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("application/x-shape");
    if (!data) return;
    const item = JSON.parse(data);
    const { x, y } = getSvgPoint(e);
    const id = nextId();
    setNodes((prev) => [
      ...prev,
      {
        id,
        type: item.type,
        x: x - item.defaultSize.w / 2,
        y: y - item.defaultSize.h / 2,
        w: item.defaultSize.w,
        h: item.defaultSize.h,
        text: item.text || "",
      },
    ]);
  };

  // --- Node drag logic ---
  const onNodeMouseDown = (e, node) => {
    e.stopPropagation();
    const { x, y } = getSvgPoint(e);
    dragRef.current = {
      dragging: true,
      nodeId: node.id,
      offsetX: x - node.x,
      offsetY: y - node.y,
    };
    setSelected({ type: "node", id: node.id });
  };

  const onSvgMouseMove = (e) => {
    const d = dragRef.current;
    if (!d.dragging || !d.nodeId) return;
    const { x, y } = getSvgPoint(e);
    setNodes((prev) =>
      prev.map((n) =>
        n.id === d.nodeId ? { ...n, x: x - d.offsetX, y: y - d.offsetY } : n
      )
    );
  };

  const onSvgMouseUp = () => {
    dragRef.current = { dragging: false, nodeId: null, offsetX: 0, offsetY: 0 };
  };

  const onSvgBackgroundClick = () => {
    setSelected({ type: null, id: null });
    setPendingSource(null);
  };

  // --- Connect mode ---
  const onNodeClick = (e, node) => {
    e.stopPropagation();
    if (mode === "connect") {
      if (!pendingSource) {
        setPendingSource(node.id);
        setSelected({ type: "node", id: node.id });
      } else if (pendingSource && pendingSource !== node.id) {
        const id = nextId();
        setEdges((prev) => [
          ...prev,
          { id, source: pendingSource, target: node.id },
        ]);
        setPendingSource(null);
        setSelected({ type: "edge", id });
      }
    } else {
      setSelected({ type: "node", id: node.id });
    }
  };

  // --- Delete with keyboard ---
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Delete" || e.key === "Backspace") {
        if (selected.type === "node") {
          setEdges((prev) =>
            prev.filter(
              (ed) => ed.source !== selected.id && ed.target !== selected.id
            )
          );
          setNodes((prev) => prev.filter((n) => n.id !== selected.id));
          setSelected({ type: null, id: null });
        } else if (selected.type === "edge") {
          setEdges((prev) => prev.filter((ed) => ed.id !== selected.id));
          setSelected({ type: null, id: null });
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  // --- Styling ---
  const styles = {
    app: {
      display: "grid",
      gridTemplateColumns: "80px 1fr",
      height: "100vh",
      fontFamily: "Inter, system-ui, Arial",
    },
    sidebar: {
      borderRight: "1px solid #e5e7eb",
      padding: 8,
      background: "#fafafa",
      display: "grid",
      gap: 12,
    },
    paletteItem: {
      padding: 8,
      border: "1px solid #cbd5e1",
      borderRadius: 8,
      background: "#fff",
      cursor: "grab",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: 60,
    },
    svg: { width: "100%", height: "calc(100vh - 54px)" },
  };

  const nodeCenter = (n) => ({ cx: n.x + n.w / 2, cy: n.y + n.h / 2 });
  const selectedStroke = (id, kind) =>
    selected.type === kind && selected.id === id ? "#2563eb" : "#111827";
  const pendingNode = nodes.find((n) => n.id === pendingSource);

  // --- Render ---
  return (
    <div style={styles.app}>
      {/* Palette */}
      <aside style={styles.sidebar}>
        {palette.map((p) => (
          <div
            key={p.type}
            draggable
            onDragStart={(e) => onPaletteDragStart(e, p)}
            style={styles.paletteItem}
          >
            {/* Mini SVG preview of the shape */}
            <svg width="40" height="40">
              {p.type === "rect" && (
                <rect width="40" height="25" rx="4" ry="4" stroke="#111827" fill="none" />
              )}
              {p.type === "ellipse" && (
                <ellipse cx="20" cy="20" rx="18" ry="12" stroke="#111827" fill="none" />
              )}
              {p.type === "diamond" && (
                <polygon points="20,2 38,20 20,38 2,20" stroke="#111827" fill="none" />
              )}
              {p.type === "parallelogram" && (
                <polygon points="8,2 38,2 30,38 0,38" stroke="#111827" fill="none" />
              )}
              {p.type === "cylinder" && (
                <>
                  <ellipse cx="20" cy="6" rx="18" ry="6" stroke="#111827" fill="none" />
                  <rect x="2" y="6" width="36" height="26" stroke="#111827" fill="none" />
                  <ellipse cx="20" cy="32" rx="18" ry="6" stroke="#111827" fill="none" />
                </>
              )}
              {p.type === "document" && (
                <path d="M2,2 H28 Q38,2 38,12 V38 H2 Z" stroke="#111827" fill="none" />
              )}
              {p.type === "text" && (
                <text x="20" y="24" textAnchor="middle" fontSize="16">T</text>
              )}
            </svg>
          </div>
        ))}
      </aside>

      {/* Canvas */}
      <section style={{ display: "grid", gridTemplateRows: "54px 1fr" }}>
        <div style={{ padding: 8, borderBottom: "1px solid #e5e7eb", background: "#fff" }}>
          <button onClick={() => setMode("select")}>Select</button>
          <button onClick={() => setMode("connect")}>Connect</button>
          <button onClick={() => { setNodes([]); setEdges([]); }}>Clear</button>
        </div>
        <svg
          ref={svgRef}
          style={styles.svg}
          onDragOver={onCanvasDragOver}
          onDrop={onCanvasDrop}
          onMouseMove={onSvgMouseMove}
          onMouseUp={onSvgMouseUp}
          onClick={onSvgBackgroundClick}
        >
          {/* Edges */}
          {edges.map((ed) => {
            const s = nodes.find((n) => n.id === ed.source);
            const t = nodes.find((n) => n.id === ed.target);
            if (!s || !t) return null;
            const { cx: x1, cy: y1 } = nodeCenter(s);
            const { cx: x2, cy: y2 } = nodeCenter(t);
            return (
              <line key={ed.id} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#111827" />
            );
          })}

          {/* Nodes */}
          {nodes.map((n) => (
            <g
              key={n.id}
              transform={`translate(${n.x},${n.y})`}
              onMouseDown={(e) => onNodeMouseDown(e, n)}
              onClick={(e) => onNodeClick(e, n)}
            >
              {n.type === "rect" && (
                <rect width={n.w} height={n.h} rx={10} ry={10} fill="#fff" stroke={selectedStroke(n.id, "node")} />
              )}
              {n.type === "ellipse" && (
                <ellipse cx={n.w / 2} cy={n.h / 2} rx={n.w / 2} ry={n.h / 2} fill="#fff" stroke={selectedStroke(n.id, "node")} />
              )}
              {n.type === "diamond" && (
                <polygon points={`${n.w / 2},0 ${n.w},${n.h / 2} ${n.w / 2},${n.h} 0,${n.h / 2}`} fill="#fff" stroke={selectedStroke(n.id, "node")} />
              )}
              {n.type === "parallelogram" && (
                <polygon points={`20,0 ${n.w},0 ${n.w - 20},${n.h} 0,${n.h}`} fill="#fff" stroke={selectedStroke(n.id, "node")} />
              )}
              {n.type === "cylinder" && (
                <>
                  <ellipse cx={n.w / 2} cy="20" rx={n.w / 2} ry="20" fill="#fff" stroke={selectedStroke(n.id,"node")} />
                  <rect x="0" y="20" width={n.w} height={n.h - 40} fill="#fff" stroke={selectedStroke(n.id,"node")} />
                  <ellipse cx={n.w / 2} cy={n.h - 20} rx={n.w / 2} ry="20" fill="#fff" stroke={selectedStroke(n.id,"node")} />
                </>
              )}
              {n.type === "document" && (
                <path d={`M0,0 H${n.w - 20} Q${n.w},0 ${n.w},20 V${n.h} H0 Z`} fill="#fff" stroke={selectedStroke(n.id,"node")} />
              )}
              <text
                x={n.w / 2}
                y={n.h / 2}
                dominantBaseline="middle"
                textAnchor="middle"
                fontSize="14"
              >
                {n.text}
              </text>
            </g>
          ))}
          {pendingNode && (
            <circle
              cx={pendingNode.x + pendingNode.w / 2}
              cy={pendingNode.y + pendingNode.h / 2}
              r={6}
              fill="#2563eb"
            />
          )}
        </svg>
      </section>
    </div>
  );
}
