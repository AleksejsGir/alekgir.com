'use client';

import { useCallback } from 'react';
import ReactFlow, {
  Node,
  Edge,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  MarkerType,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { THEME } from '@/config/theme.config';

const { accents, semantic } = THEME.colors;
const gray = '#6b7280';
const grayLight = '#9ca3af';

const nodeStyle = {
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '16px',
  padding: '16px 24px',
  color: 'white',
  fontWeight: '600',
  fontSize: '14px',
  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
};

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'input',
    data: { label: '🚀 Application' },
    position: { x: 250, y: 0 },
    style: {
      ...nodeStyle,
      border: `2px solid ${accents.emerald}80`,
      boxShadow: `0 0 30px ${accents.emerald}4D`,
    },
  },
  {
    id: '2',
    data: { label: '🗄️ PostgreSQL' },
    position: { x: 100, y: 120 },
    style: {
      ...nodeStyle,
      border: `2px solid ${accents.blue}80`,
      boxShadow: `0 0 30px ${accents.blue}4D`,
    },
  },
  {
    id: '3',
    data: { label: '⚡ Redis Cache' },
    position: { x: 400, y: 120 },
    style: {
      ...nodeStyle,
      border: `2px solid ${semantic.error}80`,
      boxShadow: `0 0 30px ${semantic.error}4D`,
    },
  },
  {
    id: '4',
    data: { label: '📍 PostGIS Extensions' },
    position: { x: 100, y: 240 },
    style: nodeStyle,
  },
  {
    id: '5',
    data: { label: '🔍 Indexes & Constraints' },
    position: { x: 100, y: 340 },
    style: nodeStyle,
  },
  {
    id: '6',
    data: { label: '💾 Session Storage' },
    position: { x: 400, y: 240 },
    style: nodeStyle,
  },
  {
    id: '7',
    data: { label: '📊 Query Cache' },
    position: { x: 400, y: 340 },
    style: nodeStyle,
  },
  {
    id: '8',
    data: { label: '🐳 Docker Compose' },
    position: { x: 250, y: 460 },
    style: {
      ...nodeStyle,
      border: `2px solid ${accents.cyan}80`,
      boxShadow: `0 0 30px ${accents.cyan}4D`,
    },
  },
  {
    id: '9',
    type: 'output',
    data: { label: '✅ pytest (75%+ Coverage)' },
    position: { x: 250, y: 580 },
    style: {
      ...nodeStyle,
      border: `2px solid ${accents.amber}80`,
      boxShadow: `0 0 30px ${accents.amber}4D`,
    },
  },
];

const initialEdges: Edge[] = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    label: 'SQL Queries',
    animated: true,
    style: { stroke: accents.blue, strokeWidth: 3 },
    markerEnd: { type: MarkerType.ArrowClosed, color: accents.blue },
    labelStyle: { fill: accents.blue, fontWeight: 600, fontSize: 12 },
    labelBgStyle: { fill: 'rgba(0, 0, 0, 0.7)', fillOpacity: 0.9 },
  },
  {
    id: 'e1-3',
    source: '1',
    target: '3',
    label: 'Cache Ops',
    animated: true,
    style: { stroke: semantic.error, strokeWidth: 3 },
    markerEnd: { type: MarkerType.ArrowClosed, color: semantic.error },
    labelStyle: { fill: semantic.error, fontWeight: 600, fontSize: 12 },
    labelBgStyle: { fill: 'rgba(0, 0, 0, 0.7)', fillOpacity: 0.9 },
  },
  {
    id: 'e2-4',
    source: '2',
    target: '4',
    label: 'Geo Queries',
    animated: true,
    style: { stroke: accents.purple, strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: accents.purple },
    labelStyle: { fill: accents.purple, fontWeight: 600, fontSize: 12 },
    labelBgStyle: { fill: 'rgba(0, 0, 0, 0.7)', fillOpacity: 0.9 },
  },
  {
    id: 'e2-5',
    source: '2',
    target: '5',
    label: 'Optimized',
    animated: true,
    style: { stroke: accents.emerald, strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: accents.emerald },
    labelStyle: { fill: accents.emerald, fontWeight: 600, fontSize: 12 },
    labelBgStyle: { fill: 'rgba(0, 0, 0, 0.7)', fillOpacity: 0.9 },
  },
  {
    id: 'e3-6',
    source: '3',
    target: '6',
    label: 'Sessions',
    animated: true,
    style: { stroke: accents.amber, strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: accents.amber },
    labelStyle: { fill: accents.amber, fontWeight: 600, fontSize: 12 },
    labelBgStyle: { fill: 'rgba(0, 0, 0, 0.7)', fillOpacity: 0.9 },
  },
  {
    id: 'e3-7',
    source: '3',
    target: '7',
    label: 'Cache',
    animated: true,
    style: { stroke: accents.cyan, strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: accents.cyan },
    labelStyle: { fill: accents.cyan, fontWeight: 600, fontSize: 12 },
    labelBgStyle: { fill: 'rgba(0, 0, 0, 0.7)', fillOpacity: 0.9 },
  },
  {
    id: 'e2-8',
    source: '2',
    target: '8',
    label: 'Container',
    style: { stroke: gray, strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: gray },
    labelStyle: { fill: grayLight, fontWeight: 600, fontSize: 12 },
    labelBgStyle: { fill: 'rgba(0, 0, 0, 0.7)', fillOpacity: 0.9 },
  },
  {
    id: 'e3-8',
    source: '3',
    target: '8',
    label: 'Container',
    style: { stroke: gray, strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: gray },
    labelStyle: { fill: grayLight, fontWeight: 600, fontSize: 12 },
    labelBgStyle: { fill: 'rgba(0, 0, 0, 0.7)', fillOpacity: 0.9 },
  },
  {
    id: 'e8-9',
    source: '8',
    target: '9',
    label: 'Test Suite',
    animated: true,
    style: { stroke: accents.amber, strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: accents.amber },
    labelStyle: { fill: accents.amber, fontWeight: 600, fontSize: 12 },
    labelBgStyle: { fill: 'rgba(0, 0, 0, 0.7)', fillOpacity: 0.9 },
  },
];

export default function DatabaseDevOpsFlow({ embedded = false }: { embedded?: boolean }) {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div className={`relative w-full rounded-xl overflow-hidden border border-white/10 bg-background ${embedded ? 'h-full' : 'h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl'}`}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        fitViewOptions={{ padding: embedded ? 0.6 : 0.2 }}
        attributionPosition="bottom-left"
        className="bg-background"
        panOnDrag={!embedded}
        zoomOnScroll={!embedded}
        nodesDraggable={!embedded}
        nodesConnectable={false}
        elementsSelectable={!embedded}
      >
        <Background
          color="rgba(255, 255, 255, 0.03)"
          gap={20}
          size={1}
        />
        {!embedded && (
          <>
            <Controls
              className="!bg-white/5 !border !border-white/10 !rounded-lg [&>button]:!bg-white/5 [&>button]:!border-white/10 [&>button:hover]:!bg-white/10 [&>button]:!text-white"
              position="top-left"
            />
            <MiniMap
              className="!hidden sm:!block !bg-white/5 !border !border-white/10 !rounded-lg"
              nodeColor={(node) => {
                if (node.id === '2' || node.id === '4' || node.id === '5') return accents.blue;
                if (node.id === '3' || node.id === '6' || node.id === '7') return semantic.error;
                if (node.id === '8') return accents.cyan;
                return accents.emerald;
              }}
              maskColor="rgba(0, 0, 0, 0.6)"
              position="bottom-right"
            />
          </>
        )}
      </ReactFlow>

      {!embedded && (
        <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg sm:rounded-xl p-2 sm:p-4 text-[10px] sm:text-xs text-white/80 space-y-1 sm:space-y-2 max-w-[280px] sm:max-w-xs z-10">
          <div className="font-bold text-white text-xs sm:text-sm mb-2 sm:mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            Database & DevOps Flow
          </div>
          <div className="space-y-1 sm:space-y-1.5 text-white/70">
            <div className="flex items-start gap-2">
              <span className="text-blue-400 mt-0.5">🗄️</span>
              <span>PostgreSQL with PostGIS extensions</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-400 mt-0.5">⚡</span>
              <span>Redis for caching & session storage</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-cyan-400 mt-0.5">🐳</span>
              <span>Docker Compose orchestration</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-amber-400 mt-0.5">✅</span>
              <span>pytest with 75%+ test coverage</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
