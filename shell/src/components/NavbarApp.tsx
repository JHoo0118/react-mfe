import { mount } from 'navbar/NavbarApp';
import { useEffect, useRef } from 'react';

export default function NavbarApp() {
  const ref = useRef(null);
  useEffect(() => {
    mount(ref.current);
  }, []);
  return <div ref={ref} />;
}
