import { Route, Routes } from "react-router";
import Header from "./components/Header";
import Home from "./components/Home";
import AddForm from "./components/AddForm";
import NotFound from "./components/NotFound";
import Blog from "./components/Blog";

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/blogs/:blogId" element={<Blog />}></Route>
      <Route path="/add-blogs" element={<AddForm />}></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
}

export default App;
