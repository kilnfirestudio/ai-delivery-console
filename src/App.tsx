import { Suspense, useEffect, type ComponentType } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import AppShell from './components/AppShell';
import { pages } from './pages';
import { DataProvider, devDataState } from './data';

function Titled({ title, page: Page }: { title: string; page: ComponentType }) {
  useEffect(() => {
    document.title = `${title} · AI 交付全局控制台`;
  }, [title]);
  return (
    <Suspense fallback={<main style={{ minHeight: '100vh' }} />}>
      <Page />
    </Suspense>
  );
}

function NotFound() {
  const { pathname } = useLocation();
  console.warn('Unknown route', pathname);
  return <Navigate to="/" replace />;
}

export default function App() {
  // Dev-mode ?data=loading|empty|error drives F-09 states; production always gets the ready state.
  const { search } = useLocation();
  return (
    <DataProvider value={devDataState(search)}>
      <Routes>
        <Route element={<AppShell />}>
          {pages.map((p) => (
            <Route key={p.path} path={p.path} element={<Titled title={p.title} page={p.component} />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </DataProvider>
  );
}
