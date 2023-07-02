import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes.jsx';
import { ThemeProvider } from './Provider/Context';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <div className='max-w-screen-xl mx-auto'>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </div>
    </div>
  </React.StrictMode>,
)
