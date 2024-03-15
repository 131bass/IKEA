import { RouterProvider } from "react-router-dom"
import "./App.scss"
import { router } from "./routes/routes"

const App = () => {
  
  return (<RouterProvider router={router}/>)
}

export default App
