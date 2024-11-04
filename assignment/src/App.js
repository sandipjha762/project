import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useContext } from 'react';
import UserTable from './Components/UserTable';
import ThemeContext from './Components/ThemeContext';

function App() {
  const [data, setData] = useState([]);
  const [theme, toggleTheme] = useContext(ThemeContext);
  const [filteredData, setFilterData] = useState([]);

  const getUserData = async() => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const response = await data.json();
    setData(response);
    setFilterData(response);
  }

  useEffect(() => {
    getUserData();
  }, []);

  const getSearchValue = (e) => {
    console.log(e.target.value);
    let searchedText = e.target.value;
    let filteredData = data.filter(user => user.name.includes(searchedText) || user.email.includes(searchedText));
    setFilterData(filteredData);
  }

  return (
    <div className="">
      <input placeholder='Search Name or Email' onChange={getSearchValue}/>
      <button
        onClick={toggleTheme}
        style={{background: theme === 'light' ? '#fff': 'black', color: theme === 'light' ? 'black' : 'white', cursor: 'pointer', float: 'right'}}>
        Toggle Theme
      </button>
      {
        data.length > 0 ? <UserTable usersData = {filteredData} /> : <p>Fetching...</p>
      }
    </div>
  );
}

export default App;
