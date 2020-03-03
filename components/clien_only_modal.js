import { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function ClientOnlyModal({ children, selector }) {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);
    setMounted(true);
  }, [selector]);

  return mounted ? createPortal(children, ref.current) : null;
}
