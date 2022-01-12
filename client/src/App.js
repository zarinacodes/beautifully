import Header from "./components/Header";
import Page from "./components/Page";
import GlobalStyle from "./ui/global";
import { ProductContextProvider } from "./components/useProductContext";

function App() {
  return (
    <>
      <ProductContextProvider>
        <GlobalStyle />
        <Header />
        <Page />
      </ProductContextProvider>
    </>
  );
}

export default App;
