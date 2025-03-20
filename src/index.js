import ReactDOM from 'react-dom/client';
import './styles/index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App';

const 페이지목록 = createBrowserRouter([
  { path: "/", element: <App /> }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={페이지목록}/>);