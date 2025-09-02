
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App, { DashboardLayout } from './App.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router';
import { Outlet } from 'react-router';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import Invoice from './pages/Invoice.tsx';
import EditProfile from './pages/EditProfile.tsx';
import NotificationsPage from './pages/Notifications.tsx';

const router = createBrowserRouter([
  {
    element: <DashboardLayout><Outlet /></DashboardLayout>,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: 'projects', element: <Projects /> },
      { path: 'analytics', element: <Analytics /> },
      { path: 'settings', element: <Settings /> },
      { path: 'invoice', element: <Invoice /> },
      { path: 'edit-profile', element: <EditProfile /> },
      { path: 'notifications', element: <NotificationsPage /> },
    ],
  },
  {
    element: <App />, // fallback layout for non-dashboard pages
    children: [
      { path: 'signin', element: <SignIn /> },
      { path: 'signup', element: <SignUp /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
