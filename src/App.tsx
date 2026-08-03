import { Routes, Route, Navigate } from 'react-router-dom';
import InvitationPage from './InvitationPage';

export default function App() {
  return (
    <Routes>
      {/* Halaman utama */}
      <Route
        path="/"
        element={<Navigate to="/mepandes-dayutirta-dan-dayuami" replace />}
      />

      {/* Semua undangan */}
      <Route
        path="/:slug"
        element={<InvitationPage />}
      />
    </Routes>
  );
}