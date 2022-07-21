import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
// import Newsitem from './components/Newsitem';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

 const App =(props)=> {
  const [progress, setProgress] = useState(0); 
    return (
      <>
      <div>
        <Router>
      <Navbar/>
      <LoadingBar
        color='#f11946'
        height='3px'
      progress={progress}
      />
      <Routes>
      <Route exact path="/" element={<News setProgress={setProgress} pageSize= {5} key= "general" country ="in" category="general"/>}/>
      <Route exact path="/business" element={<News setProgress={setProgress} pageSize= {5} key= "business" country ="in" category="business"/>}/>
      <Route exact path="/entertainment" element={<News setProgress={setProgress} pageSize= {5} key= "entertainment" country ="in" category="entertainment"/>}/>
      <Route exact path="/health" element={<News setProgress={setProgress} pageSize= {5} key= "health" country ="in" category="health"/>}/>
      <Route exact path="/science" element={<News setProgress={setProgress} pageSize= {5} key= "science" country ="in" category="science"/>}/>
      <Route exact path="/sports" element={<News setProgress={setProgress} pageSize= {5} key= "sports" country ="in" category="sports"/>}/>
      <Route exact path="/technology" element={<News setProgress={setProgress} pageSize= {5} key= "technology" country ="in" category="technology"/>}/>

      

      </Routes>
      </Router>
      </div>
      </>
  
    )
}
export default App;


