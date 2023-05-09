import Home from "./components/Home";
import AddNew from "./components/AddNew";
import Details from "./components/Details";
import Main from "./components/Main";


import { Outlet , Link } from "react-router-dom"

import { RouterProvider, createBrowserRouter } from 'react-router-dom';


function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Main /> ,children:[
      { path: '', element: <Home /> },
      { path: '/users', element: <Home /> },
      { path: '/add', element: <AddNew /> },
      { path: '/update/:id', element: <AddNew /> },
      { path: '/users/:id', element: <Details /> }
    ] }
    
  
  ]);
  return (
    <>
      <RouterProvider router={router} ></RouterProvider>
    </>


  );
}

export default App;
