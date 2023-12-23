import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Homepage from './components/homepage';
import NotFound from './components/not-found';
import Root from './components/root';
import ProjectsPage from './components/projects';
import Blog from './components/blog';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <NotFound />,
      children: [
        {
          path: '/',
          element: <Homepage />
        },
        {
          path: 'projects',
          element: <ProjectsPage />
        },
        {
          path: 'blog',
          element: <Blog />
        }
      ]
    },
    {
      path: '*',
      element: <NotFound/>
    }
  ]);

  return <RouterProvider router={router} />;
};

export default App;
