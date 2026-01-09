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

const { accents } = THEME.colors;

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
    data: { label: '🎨 Design System' },
    position: { x: 250, y: 0 },
    style: {
      ...nodeStyle,
      border: `2px solid ${accents.amber}80`,
      boxShadow: `0 0 30px ${accents.amber}4D`,
    },
  },
  {
    id: '2',
    data: { label: '💨 Tailwind CSS' },
    position: { x: 50, y: 120 },
    style: {
      ...nodeStyle,
      border: `2px solid ${accents.cyan}80`,
      boxShadow: `0 0 30px ${accents.cyan}4D`,
    },
  },
  {
    id: '3',
    data: { label: '🅱️ Bootstrap' },
    position: { x: 450, y: 120 },
    style: {
      ...nodeStyle,
      border: `2px solid ${accents.purple}80`,
      boxShadow: `0 0 30px ${accents.purple}4D`,
    },
  },
  {
    id: '4',
    data: { label: '⚛️ React Components' },
    position: { x: 250, y: 240 },
    style: nodeStyle,
  },
  {
    id: '5',
    data: { label: '🎭 Framer Motion' },
    position: { x: 100, y: 360 },
    style: nodeStyle,
  },
  {
    id: '6',
    data: { label: '🎪 Three.js' },
    position: { x: 400, y: 360 },
    style: nodeStyle,
  },
  {
    id: '7',
    data: { label: '📱 Responsive Grid' },
    position: { x: 100, y: 480 },
    style: nodeStyle,
  },
  {
    id: '8',
    data: { label: '🌈 Animations' },
    position: { x: 250, y: 480 },
    style: nodeStyle,
  },
  {
    id: '9',
    data: { label: '🎮 3D Experiences' },
    position: { x: 400, y: 480 },
    style: nodeStyle,
  },
  {
    id: '10',
    type: 'output',
    data: { label: '✨ Modern UI/UX' },
    position: { x: 250, y: 600 },
    style: {
      ...nodeStyle,
      border: `2px solid ${accents.emerald}80`,
      boxShadow: `0 0 30px ${accents.emerald}4D`,
    },
  },
];

// Gray color for connector lines
const gray = THEME.palette.graphite[600];

const initialEdges: Edge[] = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    label: 'Utility-first',
    animated: true,
    style: { stroke: accents.cyan, strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: accents.cyan },
    labelStyle: { fill: accents.cyan, fontWeight: 600, fontSize: 12 },
    labelBgStyle: { fill: 'rgba(0, 0, 0, 0.7)', fillOpacity: 0.9 },
  },
  {
    id: 'e1-3',
    source: '1',
    target: '3',
    label: 'Component-based',
    animated: true,
    style: { stroke: accents.purple, strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: accents.purple },
    labelStyle: { fill: accents.purple, fontWeight: 600, fontSize: 12 },
    labelBgStyle: { fill: 'rgba(0, 0, 0, 0.7)', fillOpacity: 0.9 },
  },
  {
    id: 'e2-4',
    source: '2',
    target: '4',
    label: 'Style',
    animated: true,
    style: { stroke: accents.emerald, strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: accents.emerald },
    labelStyle: { fill: accents.emerald, fontWeight: 600, fontSize: 12 },
    labelBgStyle: { fill: 'rgba(0, 0, 0, 0.7)', fillOpacity: 0.9 },
  },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
    label: 'Style',
    animated: true,
    style: { stroke: accents.emerald, strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: accents.emerald },
    labelStyle: { fill: accents.emerald, fontWeight: 600, fontSize: 12 },
    labelBgStyle: { fill: 'rgba(0, 0, 0, 0.7)', fillOpacity: 0.9 },
  },
  {
    id: 'e4-5',
    source: '4',
    target: '5',
    label: 'Animate',
    animated: true,
    style: { stroke: accents.pink, strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: accents.pink },
    labelStyle: { fill: accents.pink, fontWeight: 600, fontSize: 12 },
    labelBgStyle: { fill: 'rgba(0, 0, 0, 0.7)', fillOpacity: 0.9 },
  },
  {
    id: 'e4-6',
    source: '4',
    target: '6',
    label: '3D Render',
    animated: true,
    style: { stroke: accents.amber, strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: accents.amber },
    labelStyle: { fill: accents.amber, fontWeight: 600, fontSize: 12 },
    labelBgStyle: { fill: 'rgba(0, 0, 0, 0.7)', fillOpacity: 0.9 },
  },
  {
    id: 'e5-7',
    source: '5',
    target: '7',
    style: { stroke: gray, strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: gray },
  },
  {
    id: 'e5-8',
    source: '5',
    target: '8',
    label: 'Motion',
    animated: true,
    style: { stroke: accents.pink, strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: accents.pink },
    labelStyle: { fill: accents.pink, fontWeight: 600, fontSize: 12 },
    labelBgStyle: { fill: 'rgba(0, 0, 0, 0.7)', fillOpacity: 0.9 },
  },
  {
    id: 'e6-9',
    source: '6',
    target: '9',
    label: 'WebGL',
    animated: true,
    style: { stroke: accents.amber, strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: accents.amber },
    labelStyle: { fill: accents.amber, fontWeight: 600, fontSize: 12 },
    labelBgStyle: { fill: 'rgba(0, 0, 0, 0.7)', fillOpacity: 0.9 },
  },
  {
    id: 'e7-10',
    source: '7',
    target: '10',
    style: { stroke: gray, strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: gray },
  },
  {
    id: 'e8-10',
    source: '8',
    target: '10',
    style: { stroke: gray, strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: gray },
  },
  {
    id: 'e9-10',
    source: '9',
    target: '10',
    style: { stroke: gray, strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: gray },
  },
];

export default function UIUXFlow({ embedded = false }: { embedded?: boolean }) {
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
                if (node.id === '2') return accents.cyan;
                if (node.id === '3') return accents.purple;
                if (node.id === '5' || node.id === '8') return accents.pink;
                if (node.id === '6' || node.id === '9') return accents.amber;
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
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            Modern UI/UX Flow
          </div>
          <div className="space-y-1 sm:space-y-1.5 text-white/70">
            <div className="flex items-start gap-2">
              <span className="text-cyan-400 mt-0.5">💨</span>
              <span>Tailwind utility-first styling</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-purple-400 mt-0.5">🅱️</span>
              <span>Bootstrap component library</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-pink-400 mt-0.5">🎭</span>
              <span>Framer Motion animations</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-amber-400 mt-0.5">🎪</span>
              <span>Three.js 3D experiences</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
