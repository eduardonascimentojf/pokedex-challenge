import { Routes, Route } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { Login } from '../pages/Login';

export function AppRouter() {
  return (
    <Routes>
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/login' element={<Login />} />

      {/* <Route path='/cliente/:id' element={<P.Client />} /> */}
    </Routes>
  );
}
