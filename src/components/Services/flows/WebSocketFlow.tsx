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
    data: { label: '👤 Client Browser' },
    position: { x: 250, y: 0 },
    style: {
      ...nodeStyle,
      border: '2px solid rgba(6, 182, 212, 0.5)',
      boxShadow: '0 0 30px rgba(6, 182, 212, 0.3)',
    },
  },
  {
    id: '2',
    data: { label: '🔌 WebSocket Handshake' },
    position: { x: 250, y: 120 },
    style: {
      ...nodeStyle,
      border: '2px solid rgba(16, 185, 129, 0.5)',
      boxShadow: '0 0 30px rgba(16, 185, 129, 0.3)',
    },
  },
  {
    id: '3',
    data: { label: '⚡ Server Connection' },
    position: { x: 250, y: 240 },
    style: nodeStyle,
  },
  {
    id: '4',
    data: { label: '📊 Redis Pub/Sub' },
    position: { x: 100, y: 360 },
    style: nodeStyle,
  },
  {
    id: '5',
    data: { label: '💬 Message Queue' },
    position: { x: 400, y: 360 },
    style: nodeStyle,
  },
  {
    id: '6',
    data: { label: '🔄 Broadcast Events' },
    position: { x: 250, y: 480 },
    style: nodeStyle,
  },
  {
    id: '7',
    type: 'output',
    data: { label: '📱 Real-time Updates' },
    position: { x: 250, y: 600 },
    style: {
      ...nodeStyle,
      border: '2px solid rgba(245, 158, 11, 0.5)',
      boxShadow: '0 0 30px rgba(245, 158, 11, 0.3)',
    },
  },
];

const initialEdges: Edge[] = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    label: 'Upgrade HTTP',
    animated: true,
    style: { stroke: '#06b6d4', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#06b6d4' },
    labelStyle: { fill: '#06b6d4', fontWeight: 600, fontSize: 12 },
    labelBgStyle: { fill: 'rgba(0, 0, 0, 0.7)', fillOpacity: 0.9 },
  },
  {
    id: 'e2-3',
    source: '2',
    target: '3',
    label: 'Establish',
    animated: true,
    style: { stroke: '#10b981', strokeWidth: 3 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#10b981' },
    labelStyle: { fill: '#10b981', fontWeight: 600, fontSize: 12 },
    labelBgStyle: { fill: 'rgba(0, 0, 0, 0.7)', fillOpacity: 0.9 },
  },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
    label: 'Subscribe',
    animated: true,
    style: { stroke: '#8b5cf6', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#8b5cf6' },
    labelStyle: { fill: '#8b5cf6', fontWeight: 600, fontSize: 12 },
    labelBgStyle: { fill: 'rgba(0, 0, 0, 0.7)', fillOpacity: 0.9 },
  },
  {
    id: 'e3-5',
    source: '3',
    target: '5',
    label: 'Queue',
    animated: true,
    style: { stroke: '#ec4899', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#ec4899' },
    labelStyle: { fill: '#ec4899', fontWeight: 600, fontSize: 12 },
    labelBgStyle: { fill: 'rgba(0, 0, 0, 0.7)', fillOpacity: 0.9 },
  },
  {
    id: 'e4-6',
    source: '4',
    target: '6',
    label: 'Publish',
    animated: true,
    style: { stroke: '#f59e0b', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#f59e0b' },
    labelStyle: { fill: '#f59e0b', fontWeight: 600, fontSize: 12 },
    labelBgStyle: { fill: 'rgba(0, 0, 0, 0.7)', fillOpacity: 0.9 },
  },
  {
    id: 'e5-6',
    source: '5',
    target: '6',
    label: 'Process',
    animated: true,
    style: { stroke: '#3b82f6', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#3b82f6' },
    labelStyle: { fill: '#3b82f6', fontWeight: 600, fontSize: 12 },
    labelBgStyle: { fill: 'rgba(0, 0, 0, 0.7)', fillOpacity: 0.9 },
  },
  {
    id: 'e6-7',
    source: '6',
    target: '7',
    label: 'Push',
    animated: true,
    style: { stroke: '#f59e0b', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#f59e0b' },
    labelStyle: { fill: '#f59e0b', fontWeight: 600, fontSize: 12 },
    labelBgStyle: { fill: 'rgba(0, 0, 0, 0.7)', fillOpacity: 0.9 },
  },
  {
    id: 'e7-1',
    source: '7',
    target: '1',
    label: 'Live Update',
    animated: true,
    style: { stroke: '#10b981', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#10b981' },
    labelStyle: { fill: '#10b981', fontWeight: 600, fontSize: 12 },
    labelBgStyle: { fill: 'rgba(0, 0, 0, 0.7)', fillOpacity: 0.9 },
  },
];

export default function WebSocketFlow({ embedded = false }: { embedded?: boolean }) {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div className={`relative w-full rounded-xl overflow-hidden border border-white/10 bg-[#0a0a0f] ${embedded ? 'h-full' : 'h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl'}`}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        fitViewOptions={{ padding: embedded ? 0.6 : 0.2 }}
        attributionPosition="bottom-left"
        className="bg-[#0a0a0f]"
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
                if (node.id === '1') return '#06b6d4';
                if (node.id === '2') return '#10b981';
                if (node.id === '4' || node.id === '5') return '#8b5cf6';
                return '#f59e0b';
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
            <span className="w-2 h-2 rounded-full bg-teal-400" />
            Real-time WebSocket Flow
          </div>
          <div className="space-y-1 sm:space-y-1.5 text-white/70">
            <div className="flex items-start gap-2">
              <span className="text-cyan-400 mt-0.5">1.</span>
              <span>Client initiates WebSocket handshake</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-cyan-400 mt-0.5">2.</span>
              <span>Server establishes persistent connection</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-cyan-400 mt-0.5">3.</span>
              <span>Redis Pub/Sub for message distribution</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-cyan-400 mt-0.5">4.</span>
              <span>Broadcast events to all subscribers</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-cyan-400 mt-0.5">5.</span>
              <span>Push real-time updates to clients</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
