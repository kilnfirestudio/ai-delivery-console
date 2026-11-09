import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { IconDefs } from '../ui/icons';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function AppShell() {
  const { pathname } = useLocation();
  const [drawer, setDrawer] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Close the mobile drawer on navigation and on Escape.
  useEffect(() => {
    setDrawer(false);
  }, [pathname]);
  useEffect(() => {
    if (!drawer) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setDrawer(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [drawer]);

  return (
    <div className="app base" {...(drawer ? { 'data-drawer': '' } : {})}>
      <IconDefs />
      <Sidebar />
      <button type="button" className="scrim" aria-label="关闭导航" tabIndex={drawer ? 0 : -1} onClick={() => setDrawer(false)} />
      <div className="app-content">
        <Topbar onMenu={() => setDrawer(true)} />
        <Outlet />
      </div>
    </div>
  );
}
