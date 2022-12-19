import { lazy } from 'react';
import { Outlet } from 'react-router-dom';

const NavbarLazy = lazy(() => import('./NavbarApp'));
export default function Root() {
  return (
    <div>
      <NavbarLazy />
      <Outlet />
    </div>
  );
}
