import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from "./components/Layout.tsx";
import {About} from "./components/About.tsx";
import {Counter} from "./components/Counter.tsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'about'} element={<About/>}/>
                    <Route path={'counter'} element={<Counter/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
