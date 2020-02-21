import React, {useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import StarCard from "./components/StarCard"

const App = () => {
  const [people, setPeople] = useState([]);


  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/1/")
      .then(response => {
        console.log(response.data)
        setPeople(response.data)
      })
      .catch(error => [
        console.log(error)
      ])
  }, []);

  
  return ( 
  <div className ="persons"> 
  
      {people.map(persons => {
        return ( 
          <StarCard />
        )
      })} 
      </div>
  );

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    </div>
  );
}

export default App;
