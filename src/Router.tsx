import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '@/pages/Layout/Layout';
import ChatRoom from './components/ChatRoom/ChatRoom';
import Main from './components/Main/Main';
import SelectUsername from './components/SelectUsername/SelectUsername';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <SelectUsername /> },
      { path: 'room/:roomId', element: <ChatRoom /> },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
