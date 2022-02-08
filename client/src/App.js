import Header from "./components/Header";
import Page from "./components/Page";
import GlobalStyle from "./ui/global";
import { ProductContextProvider } from "./components/useProductContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from "./components/404";

function App() {
  return (
    <>
      <Router>
        <ProductContextProvider>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/pagenotfound" element={<PageNotFound />}></Route>
            <Route path="/" element={<Page />} />
            <Route path="/:gender" element={<Page />} />
          </Routes>
        </ProductContextProvider>
      </Router>
    </>
  );
}

export default App;
