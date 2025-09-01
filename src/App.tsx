import { Outlet } from 'react-router';


import { DashboardLayout } from './components/layouts/DashboardLayout';

// Default App just renders Outlet (for non-dashboard layout)
function App() {
  return <Outlet />;
}

export default App;
export { DashboardLayout };
