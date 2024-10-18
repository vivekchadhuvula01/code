import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import ArticleListPage from "./pages/ArticleListPage";
import ArticlePage from "./pages/ArticlePage";
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>

            <Route path='/about' element={<About />} />
            <Route path='/' element={<Homepage />} />
            <Route path='/articles' element={<ArticleListPage />} />
            <Route path='/articles/:articleId' element={<ArticlePage />} />
          </Routes>

        </div>
      </BrowserRouter>
    </>
  )
}
export default App;