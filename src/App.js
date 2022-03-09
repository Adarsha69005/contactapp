import {React, useState, useEffect, useCallback} from 'react';
import _ from 'lodash';

import Content from "./Components/Pages/Content";
import HeaderComponent from "./Components/Header/Header";
import FooterComponent from "./Components/Footer/Footer";
import UserContact from './Components/Pages/UserContact';
import { Container } from 'semantic-ui-react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  const [users, setUsers] = useState([]);
  const [value, setText] = useState("");
  const [result, setResult] = useState([]);

  const API_URL = 'https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
    loadData();
  },[])



  const handleSearchChange = useCallback((e, data) => {
    
  
    setText(data.value)
    // let userData = JSON.parse(localStorage.getItem('userdata'))
    setTimeout(() => {
      if(data.value.length === 0){
        setUsers(JSON.parse(localStorage.getItem('userdata')))
        setText('');
        return
      } 
      const re = new RegExp(_.escapeRegExp(data.value), 'i')
      const isMatch = (result) => re.test(result.name)

  
      let results =_.filter(JSON.parse(localStorage.getItem('userdata')), isMatch)
      setUsers(results);
      setResult(results)

    },3000)
    
  },[users,value])


  const loadData = async() => {
    
    const response = await fetch(API_URL);
    const data = await response.json();
    let sorteddata = data.sort(sortByName);
    setUsers(sorteddata);
    localStorage.setItem("userdata", JSON.stringify(sorteddata));
  }

  function sortByName(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if(a.name > b.name){
      return 1;
    }
    return 0;
  }

  return (
    <Container>
      <Router>
      <HeaderComponent value={value} results={result} searchSubmit={handleSearchChange} />
      
          <Routes>
            <Route exact path="/" element={<Content users={users} />} />
            <Route exact path="/:id" element={<UserContact />} />
          </Routes>
      
      
      <FooterComponent />
      </Router>
    </Container>
  );  
}

export default App;
