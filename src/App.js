import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from './components/Footer'
import {Home} from "./pages/Home";
import {NotFound} from "./pages/NotFound";
import {Category} from './pages/Category'
import { Recipe } from "./components/Recipe";


function App() {
  return <>
    <Header />
    <main className="container main-content">
      <Router basename="/react-food">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="category/:name" element={<Category/>} />
            <Route path="category/:name/:id" element={<Recipe/>}></Route>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </Router>
    </main>
    <Footer/>
  </>
}

export default App;
