import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import PageDesing from "./MainPageDesing/PageDesing";
import AboutUsPage  from "./AboutUs/AboutUsPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path='/' 
          element={<Home/>}
        >
          <Route index element={<PageDesing/>}/>
          <Route path="/nosotros" element={<AboutUsPage/>}/>
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
