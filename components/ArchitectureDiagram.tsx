"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface ArchNode {
  id: string;
  label: string;
  sublabel?: string;
  icon: string;
  x: number;
  y: number;
  color: string;
}

interface ArchConnection {
  from: string;
  to: string;
  label?: string;
  animated?: boolean;
}

interface ArchitectureDiagramProps {
  title: string;
  nodes: ArchNode[];
  connections: ArchConnection[];
}

export const ArchitectureDiagram = ({ title, nodes, connections }: ArchitectureDiagramProps) => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const getNodePosition = (nodeId: string) => {
    const node = nodes.find(n => n.id === nodeId);
    return node ? { x: node.x, y: node.y } : { x: 0, y: 0 };
  };

  return (
    <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700/50">
      <h4 className="text-white font-bold text-lg mb-4 text-center">{title}</h4>
      <div className="relative w-full h-96 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg border border-gray-700/30 overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 800 400">
          {/* Connections */}
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
            >
              <polygon points="0 0, 10 3, 0 6" fill="#06B6D4" />
            </marker>

            {/* Animated gradient for data flow */}
            <linearGradient id="dataflow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0">
                <animate attributeName="offset" values="-2;1" dur="2s" repeatCount="indefinite" />
              </stop>
              <stop offset="50%" stopColor="#06B6D4" stopOpacity="1">
                <animate attributeName="offset" values="-1.5;1.5" dur="2s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0">
                <animate attributeName="offset" values="-1;2" dur="2s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
          </defs>

          {connections.map((conn, idx) => {
            const from = getNodePosition(conn.from);
            const to = getNodePosition(conn.to);
            const midX = (from.x + to.x) / 2;
            const midY = (from.y + to.y) / 2;

            return (
              <g key={idx}>
                {/* Connection line */}
                <line
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke={conn.animated ? "url(#dataflow)" : "#374151"}
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                  className="transition-all duration-300"
                />

                {/* Connection label */}
                {conn.label && (
                  <text
                    x={midX}
                    y={midY - 5}
                    fill="#9CA3AF"
                    fontSize="10"
                    textAnchor="middle"
                    className="select-none"
                  >
                    {conn.label}
                  </text>
                )}
              </g>
            );
          })}

          {/* Nodes */}
          {nodes.map((node) => (
            <g
              key={node.id}
              transform={`translate(${node.x}, ${node.y})`}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
              className="cursor-pointer"
            >
              {/* Node glow effect when hovered */}
              {hoveredNode === node.id && (
                <circle
                  r="45"
                  fill={node.color}
                  opacity="0.2"
                  className="animate-pulse"
                />
              )}

              {/* Node circle */}
              <circle
                r="35"
                fill={node.color}
                opacity="0.2"
                stroke={node.color}
                strokeWidth="2"
                className="transition-all duration-300"
              />

              {/* Node icon */}
              <text
                textAnchor="middle"
                dy="-5"
                fontSize="24"
                className="select-none"
              >
                {node.icon}
              </text>

              {/* Node label */}
              <text
                textAnchor="middle"
                dy="25"
                fill="white"
                fontSize="11"
                fontWeight="bold"
                className="select-none"
              >
                {node.label}
              </text>

              {/* Node sublabel */}
              {node.sublabel && (
                <text
                  textAnchor="middle"
                  dy="38"
                  fill="#9CA3AF"
                  fontSize="9"
                  className="select-none"
                >
                  {node.sublabel}
                </text>
              )}
            </g>
          ))}
        </svg>

        {/* Legend */}
        <div className="absolute bottom-2 right-2 bg-gray-800/80 backdrop-blur-sm rounded-lg p-2 text-xs">
          <div className="flex items-center gap-2 text-gray-300">
            <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-transparent"></div>
            <span>Data Flow</span>
          </div>
        </div>
      </div>

      {/* Tooltip for hovered node */}
      {hoveredNode && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-3"
        >
          <div className="text-cyan-300 font-semibold">
            {nodes.find(n => n.id === hoveredNode)?.label}
          </div>
          <div className="text-gray-400 text-sm mt-1">
            {nodes.find(n => n.id === hoveredNode)?.sublabel || "Hover over nodes to see details"}
          </div>
        </motion.div>
      )}
    </div>
  );
};
