import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { IconDefs } from '../ui/icons';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function AppShell() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="app base">
      <IconDefs />
      <Sidebar />
      <div className="app-content">
        <Topbar />
        <Outlet />
      </div>
    </div>
  );
}
