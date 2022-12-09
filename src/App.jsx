import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Component/layout/Navbar";
import Footer from "./Component/layout/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import User from "./pages/User";
import GithubProvider from "./context/Github/GithubProvider";
import { AlertProvider } from "./context/Alert/AlertContext";
function App() {
  return (
    <AlertProvider>
      <GithubProvider>
        <Router>
          <div className='flex flex-col justify-between h-screen'>
            <Navbar />

            <main className='container px-3 mb-12 mx-auto'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/user/:login' element={<User />} />
                <Route path='/NotFound' element={<NotFound />} />
                <Route path='/*' element={<NotFound />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
      </GithubProvider>
    </AlertProvider>
  );
}

export default App;

