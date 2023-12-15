
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Properties from './pages/Properties';
import PropertyDetails from './pages/PropertyDetails';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/properties' element={<Properties/>}/>
      <Route path='/propertydetails' element={<PropertyDetails/>}/>
    </Route>
  )
);

function App() {

  return (
    <RouterProvider
      router={router}
      fallbackElement={<BigSpinner />}
    />
  )
}

export default App
