import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './components/main';
import Detail from './components/detail';

function App() {
  const [Movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
    // console.log("1");
  };
  const test=()=>{
    // console.log(`Movies : ${Movies}`)
  }
  useEffect(() => {
    getMovies().then(test);
    
  }, [])
  return (
    
    <Router basename={process.env.PUBLIC_URL}>
    {/* <div>hi</div> */}
      <Routes>
        <Route path="/" element={<Main MoviesList={Movies}/>}></Route>
        <Route path="/movie/:id" element={<Detail movie={Movies}/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;