import { useEffect, useState } from 'react';

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -500, y: -500 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const onLeave = () => setVisible(false);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseout', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseout', onLeave);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="pointer-events-none fixed z-[1] h-[400px] w-[400px] rounded-full opacity-50 blur-[100px] transition-opacity duration-500"
      style={{
        background: 'radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)',
        left: pos.x - 200,
        top: pos.y - 200,
      }}
      aria-hidden
    />
  );
}
