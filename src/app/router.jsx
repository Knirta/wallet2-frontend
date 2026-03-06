import { createBrowserRouter, Navigate } from 'react-router-dom';
import RootLayout from '@/components/layout/RootLayout.jsx';
import AuthLayout from '@/components/layout/AuthLayout.jsx';
import MainLayout from '@/components/layout/MainLayout.jsx';
import RegisterPage from '@/pages/RegisterPage.jsx';
import LoginPage from '@/pages/LoginPage.jsx';
import RegisterSuccessPage from '@/pages/RegisterSuccesPage.jsx';
import VerifyEmailPage from '@/pages/VerifyEmail.Page.jsx';
import DashboardPage from '@/pages/DashboardPage.jsx';
import StatsPage from '@/pages/Stats.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Navigate to="/login" replace /> },
      {
        element: <AuthLayout />,
        children: [
          {
            path: 'register',
            element: <RegisterPage />,
          },
          {
            path: 'login',
            element: <LoginPage />,
          },
          { path: 'register-success', element: <RegisterSuccessPage /> },
          {
            path: 'verify-email',
            element: <VerifyEmailPage />,
          },
        ],
      },
      {
        element: <MainLayout />,
        children: [
          {
            path: 'dashboard',
            element: <DashboardPage />,
          },
          { path: 'stats', element: <StatsPage /> },
        ],
      },
    ],
  },
]);
