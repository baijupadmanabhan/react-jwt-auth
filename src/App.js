import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './pages/Login';
import Nav from './components/nav';
import Home from './pages/Home';
import Register from './pages/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  const [name, setName] = useState('');
    
    async function fetchData(){
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify({})
      };

      const response = await fetch(
          'http://localhost:8000/user', requestOptions
      );

      const content = await response.json();
      
      console.log("Output of fetchdata")
      console.log(content)
      setName(content.name);
    };

    useEffect(() => {

        fetchData();

    }, []);



  return (
    <div className="App">        
      <BrowserRouter forceRefresh>
          <Nav name={name} updateName={setName}/>
          <Routes>
              <Route path="/" exact element={<Home name={name} />}/>
              <Route path="/login" element={<Login updateName={setName} />}/>
              <Route path="/register" element={<Register />}/>
          </Routes>
          
      </BrowserRouter>
    </div>
  );
}

export default App;
