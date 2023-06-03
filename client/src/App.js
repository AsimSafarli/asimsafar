import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Blog from "./Pages/Blog/Blog";
import Error from "./Components/Error/Error";
import Project from "./Pages/Project/Project";
import About from "./Pages/About/About";
import Admin from "./Admin/Admin";
import BlogAdmin from "./Admin/Blog/BlogAdmin";
import ProjectAdmin from "./Admin/Project/ProjectAdmin";

function App() {
  return (
    <div >
     <Routes>
      <Route path='/' element={<Layout/>}>
      <Route path='/project' element={<Project/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/dashboard' element={<Admin/>}>
          <Route path='blog' element={<BlogAdmin/>}/>
          <Route path='project' element={<ProjectAdmin/>}/>
        </Route>
        <Route path='*' element={<Error/>}/>
      </Route>
     </Routes>
    </div>
  );
}

export default App;
