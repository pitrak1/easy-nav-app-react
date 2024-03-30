import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './views/Home'
import Search from './views/Search'
import Profile from './views/Profile'
import Register from './views/Register'
import Login from './views/Login'
import CreateBlog from './views/CreateBlog'
import ViewBlog from './views/ViewBlog'
import CreatePost from './views/CreatePost'
import ViewPost from './views/ViewPost'
import reportWebVitals from './reportWebVitals'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { UserProvider } from './views/utilities/UserProvider.js'

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/search',
    element: <Search />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/blogs/create',
    element: <CreateBlog />
  },
  {
    path: '/blogs/:blogId',
    element: <ViewBlog />
  },
  {
    path: '/blogs/:blogId/posts/create',
    element: <CreatePost />
  },
  {
    path: '/blogs/:blogId/posts/:postId',
    element: <ViewPost />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
