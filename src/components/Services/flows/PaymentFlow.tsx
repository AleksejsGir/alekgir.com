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
const gray = THEME.palette.graphite[600];

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
    data: { label: '🛒 Customer Checkout' },
    position: { x: 250, y: 0 },
    style: {
      ...nodeStyle,
      border: `2px solid ${accents.indigo}80`,
      boxShadow: `0 0 30px ${accents.indigo}4D`,
    },
  },
  {
    id: '2',
    data: { label: '💳 Stripe API' },
    position: { x: 250, y: 120 },
    style: {
      ...nodeStyle,
      border: `2px solid ${accents.purple}80`,
      boxShadow: `0 0 30px ${accents.purple}4D`,
    },
  },
  {
    id: '3',
    data: { label: '🔒 Payment Intent' },
    position: { x: 100, y: 240 },
    style: nodeStyle,
  },
  {
    id: '4',
    data: { label: '🔑 Idempotency Key' },
    position: { x: 400, y: 240 },
    style: nodeStyle,
  },
  {
    id: '5',
    data: { label: '⚡ Webhook Event' },
    position: { x: 250, y: 360 },
    style: {
      ...nodeStyle,
      border: `2px solid ${accents.pink}80`,
      boxShadow: `0 0 30px ${accents.pink}4D`,
    },
  },
  {
    id: '6',
    data: { label: '✅ Verify Signature' },
    position: { x: 100, y: 480 },
    style: nodeStyle,
  },
  {
    id: '7',
    data: { label: '🗄️ Update Database' },
    position: { x: 250, y: 480 },
    style: nodeStyle,
  },
  {
    id: '8',
    data: { label: '📊 Reconciliation' },
    position: { x: 400, y: 480 },
    style: nodeStyle,
  },
  {
    id: '9',
    type: 'output',
    data: { label: '📧 Confirmation Email' },
    position: { x: 250, y: 600 },
    style: {
      ...nodeStyle,
      border: `2px solid ${accents.emerald}80`,
      boxShadow: `0 0 30px ${accents.emerald}4D`,
    },
  },
];

const initialEdges: Edge[] = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    label: 'Create Payment',
    animated: true,
    style: { stroke: accents.indigo, strokeWidth: 3 },
    markerEnd: { type: MarkerType.ArrowClosed, color: accents.indigo },
    labelStyle: { fill: accents.indigo, fontWeight: 600, fontSize: 12 },
    labelBgStyle: { fill: 'rgba(0, 0, 0, 0.7)', fillOpacity: 0.9 },
  },
  {
    id: 'e2-3',
    source: '2',
    target: '3',
    label: 'Intent',
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
    label: 'Dedup',
    animated: true,
    style: { stroke: accents.amber, strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: accents.amber },
    labelStyle: { fill: accents.amber, fontWeight: 600, fontSize: 12 },
    labelBgStyle: { fill: 'rgba(0, 0, 0, 0.7)', fillOpacity: 0.9 },
  },
  {
    id: 'e3-5',
    source: '3',
    target: '5',
    label: 'Success/Fail',
    animated: true,
    style: { stroke: accents.pink, strokeWidth: 3 },
    markerEnd: { type: MarkerType.ArrowClosed, color: accents.pink },
    labelStyle: { fill: accents.pink, fontWeight: 600, fontSize: 12 },
    labelBgStyle: { fill: 'rgba(0, 0, 0, 0.7)', fillOpacity: 0.9 },
  },
  {
    id: 'e5-6',
    source: '5',
    target: '6',
    label: 'HMAC',
    animated: true,
    style: { stroke: accents.emerald, strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: accents.emerald },
    labelStyle: { fill: accents.emerald, fontWeight: 600, fontSize: 12 },
    labelBgStyle: { fill: 'rgba(0, 0, 0, 0.7)', fillOpacity: 0.9 },
  },
  {
    id: 'e5-7',
    source: '5',
    target: '7',
    label: 'Process',
    animated: true,
    style: { stroke: accents.cyan, strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: accents.cyan },
    labelStyle: { fill: accents.cyan, fontWeight: 600, fontSize: 12 },
    labelBgStyle: { fill: 'rgba(0, 0, 0, 0.7)', fillOpacity: 0.9 },
  },
  {
    id: 'e5-8',
    source: '5',
    target: '8',
    label: 'Reconcile',
    animated: true,
    style: { stroke: accents.purple, strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: accents.purple },
    labelStyle: { fill: accents.purple, fontWeight: 600, fontSize: 12 },
    labelBgStyle: { fill: 'rgba(0, 0, 0, 0.7)', fillOpacity: 0.9 },
  },
  {
    id: 'e6-9',
    source: '6',
    target: '9',
    style: { stroke: gray, strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: gray },
  },
  {
    id: 'e7-9',
    source: '7',
    target: '9',
    label: 'Notify',
    animated: true,
    style: { stroke: accents.emerald, strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: accents.emerald },
    labelStyle: { fill: accents.emerald, fontWeight: 600, fontSize: 12 },
    labelBgStyle: { fill: 'rgba(0, 0, 0, 0.7)', fillOpacity: 0.9 },
  },
  {
    id: 'e8-9',
    source: '8',
    target: '9',
    style: { stroke: gray, strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: gray },
  },
];

export default function PaymentFlow({ embedded = false }: { embedded?: boolean }) {
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
                if (node.id === '1') return accents.indigo;
                if (node.id === '2' || node.id === '3') return accents.purple;
                if (node.id === '5') return accents.pink;
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
            <span className="w-2 h-2 rounded-full bg-indigo-400" />
            Payment Integration Flow
          </div>
          <div className="space-y-1 sm:space-y-1.5 text-white/70">
            <div className="flex items-start gap-2">
              <span className="text-purple-400 mt-0.5">💳</span>
              <span>Stripe API with Payment Intent</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-amber-400 mt-0.5">🔑</span>
              <span>Idempotency for duplicate prevention</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-pink-400 mt-0.5">⚡</span>
              <span>Webhook events with HMAC verification</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-400 mt-0.5">📊</span>
              <span>Order reconciliation & confirmation</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
