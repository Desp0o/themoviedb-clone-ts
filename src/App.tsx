import { HashRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import Home from "./pages/Home";
import Navbar from "./components/navbar/navbar";
import SingleMoviePage from "./pages/singleMoviePage/SingleMoviePage";
import Footer from "./components/footer/Footer";
import PopularMovies from "./pages/PopularMovies";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/singleMoviePage/:id" element={<SingleMoviePage />} />
          <Route path="/pages/PopularMovies/" element={<PopularMovies />} />
        </Routes>
        <Footer />
      </HashRouter>
    </QueryClientProvider>
  );
}

export default App;
