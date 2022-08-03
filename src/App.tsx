import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Login/>}
        />
        <Route 
          path="/post"  
          element={<div>Hi</div>}   
        />
      </Routes>
    </Router>
  );
}

export default App;
