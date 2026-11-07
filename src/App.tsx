import { useEffect, type ComponentType } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import AppShell from './components/AppShell';
import { pages } from './pages';

function Titled({ title, page: Page }: { title: string; page: ComponentType }) {
  useEffect(() => {
    document.title = `${title} · AI 交付全局控制台`;
  }, [title]);
  return <Page />;
}

function NotFound() {
  const { pathname } = useLocation();
  console.warn('Unknown route', pathname);
  return <Navigate to="/" replace />;
}

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        {pages.map((p) => (
          <Route key={p.path} path={p.path} element={<Titled title={p.title} page={p.component} />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
