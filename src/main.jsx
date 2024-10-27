import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import App from './App';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <div>This is Error Page 404</div>,
    children:[
      {
        path: '/',
        element: <App/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
