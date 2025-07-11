import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Shop from "./pages/shop/Shop";
import About from "./pages/about/About";
import Collection from "./pages/collection/Collection";
import Haircare from "./pages/haircare/Haircare";
import Contact from "./pages/contact/Contact";
import SearchResults from "./pages/search/SearchResults";
import CollectionDetail from "./pages/collection/CollectionDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route
        path="/collection/:slug"
        element={
          <Layout>
            <CollectionDetail />
          </Layout>
        }
      />

      <Route
        path="/shop"
        element={<Layout><Shop /></Layout>}
      />
      <Route
        path="/collection"
        element={
          <Layout>
            <Collection />
          </Layout>
        }
      />
      <Route
        path="/haircare"
        element={
          <Layout>
            <Haircare />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />
      <Route
        path="/contact"
        element={
          <Layout>
            <Contact />
          </Layout>
        }
      />

      <Route
        path="/search-results"
        element={
          <Layout>
            <SearchResults />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
