
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>

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
