import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './css/index.css';
import MainPage from './router/MainPage';
import ErrorPage from './router/ErrorPage';
import MovieLis from './components/MovieLis';
import {nowPlayingData} from './router/load/MainSlData';


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <ErrorPage />,
    loader : nowPlayingData,
    children: [
      {
        path: 'popular',
        element: <MovieLis/>,
      },
      {
        path: 'top_rate',
        element: <MovieLis/>,
      },
      {
        path: 'upcoming',
        element: <MovieLis/>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);