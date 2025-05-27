import { BrowserRouter as Router, Routes, Route, } from "react-router-dom"
import HomePage from "./Pages/HomePage/HomePage"
import Nav from "./Pages/Nav/Nav"
import CreatePostPage from "./Pages/Create-Post_Page/CreatePostPage"
import SavePostPage from "./Pages/Save-Post_Page/SavePostPage"

function App() {
  

  return (
   
    <Router>
      <Nav/>
      <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path='/create-post'element={<CreatePostPage/>} />
          <Route path='/save-posts' element={<SavePostPage/>}/>
      </Routes>
    
    </Router>
    

    
  )
}

export default App
