import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './components/Login';
import { Layout } from './components/Layout';

const App = () => {
  return (
    <Router>
      <Routes>  
        <Route
          path="/posts"  
          element={<Layout />}   
        />
        <Route path="posts/:id" element={<Layout />}/>
        <Route
          path="/"
          element={<Login/>}
        />
      </Routes>
    </Router>
  );
}

export default App;
