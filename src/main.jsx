import './App'
import App from './App'
import Home from './Home';
import Contact from './components/Contact/contact';
import About from './components/About/About';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Users from './components/Users/Users';
import UserDetails from './components/UserDetails/UserDetails';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';
import ErrorPage from './components/ErrorPage/ErrorPage';

const  router= createBrowserRouter([

  {
path:'/',
element:<Home/>,
errorElement:<ErrorPage></ErrorPage>,
children:[
  {
    path:'about',
    element:<About/>,
  },{
    path:'contact',
    element:<Contact/>
  },
  {
path: '/users',
loader:()=> fetch('https://jsonplaceholder.typicode.com/users'),
element: <Users></Users>
  },
  {
    path: '/user/:userId',
    loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
    element:<UserDetails></UserDetails>
  },
  {
    path: '/posts',
    loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
    element:<Posts></Posts>
  },{
    path:'/post/:postId',
    loader:(params)=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
    element: <PostDetails></PostDetails>

  }
]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
