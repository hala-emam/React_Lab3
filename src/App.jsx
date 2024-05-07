
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {createBrowserRouter,  RouterProvider } from 'react-router-dom';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import AppLayout from './appLayout';
import Movies from './Pages/Movies/Movies';
import Favorites from './Pages/Favorites/Favorites';
import Details from './Components/Details/Details';

const routes = createBrowserRouter([
  {path:"/",element:<AppLayout/>,children:[
    {path:"/",element:<Movies/>},
    {path:"/Favorites",element:<Favorites/>},
    {path:"/Details/:id",element:<Details/>},
    {path:"/Login",element:<Login/>},
    {path:"/Register",element:<Register/>},
    
  ]},
  {path:"*",element:<NotFound/>},
 
]);
function App() {
  return (
    <RouterProvider router={routes}>

    </RouterProvider>
  );
}

export default App;
