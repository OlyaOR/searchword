import React, {useState, useEffect} from 'react';
import './App.css';
import './media.css';

function App () {
  let fullarr = [];
  fetch('https://cors-anywhere.herokuapp.com/https://www.mrsoft.by/data.json') 
    .then(response => response.json())
    .then(res => res.data)
    .then(data => fullarr.push(...data))
    .catch(res => alert(`Something wrong. Failed to get data from https://www.mrsoft.by/data.json. Check console or try again`));

  const [arr, setArr] = useState([]);
  const [input, setInput] = useState('');
  const [upCase, setCase] = useState(false);

  useEffect(() => {
    setArr(localStorage.getItem('array') || [])
  }, []);
  useEffect(() => {
    setInput(localStorage.getItem('input') || '')
  }, []);

  function changeArr(event) {
    const inputnum = Number(input);
    let newarr = fullarr.filter((elem) => elem.length > inputnum);
    let newarrcase = newarr.filter(elem => elem === elem.toUpperCase());
    if (event.target.classList.contains('lenth')) {
      if (inputnum) {
        if (newarr.length === 0) {
          setArr(arr => ['Sorry, no data, please enter something new.'])
        } else {
          if (upCase && newarrcase.length === 0) {
            setArr(arr => ['Sorry, no data, please enter something new.'])
          } else if (upCase && newarrcase.length > 0){
            setArr(arr => newarrcase.join(', '))
          } else {
            setArr(arr => newarr.join(', '))
          }
        }
      } else if (inputnum === 0) {
        alert('Error! Please enter a number > 0');
      } else {
        alert('Error! Please use second button');
      }
    } else {
      newarr = fullarr.filter(elem => elem.toLowerCase().includes(input.toLowerCase()));
      newarrcase = fullarr.filter(elem => elem.includes(input.toUpperCase()));
      if (input === '') {
        alert('Error! Please enter some letters');
      } else if (inputnum || inputnum === 0) {
        alert('Error! Please use first button or enter letters');
      } else {
        if (newarr.length === 0) {
          setArr(arr => ['Sorry, no data, please enter something new.'])
        } else {
          if (upCase && newarrcase.length === 0) {
            setArr(arr => ['Sorry, no data, please enter something new.'])
          } else if (upCase && newarrcase.length > 0){
            setArr(arr => newarrcase.join(', '))
          } else {
            setArr(arr => newarr.join(', '))
          }
        }
      }
    }
  };
  useEffect(() => {
    localStorage.setItem('array', arr)
  }, [arr])
  useEffect(() => {
    localStorage.setItem('input', input);
  }, [input])

  return (
    <div className="App">
      <div className="container">
        <h1>Search</h1>
        <form className="search">
          <input type="text" placeholder="Enter symbols" className="enter" defaultValue={localStorage.getItem('input')} onInput={(input) => setInput(input.target.value)}/>
          <label className="checkbox-container">
            <input type="checkbox" className="checkbox" onChange={() => setCase(!upCase)}/> 
            Search upper case words
          </label>
          <div className="btn-container" onClick={changeArr}>
            <button type="button" className="btn lenth">Filter by length</button>
            <button type="button" className="btn">Substring filter</button>
          </div>
          <div className="output">{arr}</div>
        </form>
        <footer>by Olga Rozhkova</footer>
      </div>
    </div>
  );
}


export default App;
