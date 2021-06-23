import React, {useState, useEffect} from 'react';
import './App.css';
import './media.css';

const data = ["affenpinscher", "whippet", "african", "irish wolfhound", "pembroke", "airedale",  "NEWFOUNDLAND",  "OTTERHOUND",  "PAPILLON",  "PEKINESE",  "SWISS MOUNTAIN",  "weimaraner",  "MINIATURE PINSCHER",  "akita",  "GERMAN POINTER",  "vizsla",  "POMERANIAN",  "appenzeller",  "MINIATURE POODLE",  "yorkshire terrier",  "STANDARD POODLE",  "basenji",  "BERNESE MOUNTAIN",  "wheaten terrier",  "TOY POODLE",  "beagle",  "MEXICANHAIRLESS",  "westhighland terrier",  "PUG",  "bluetick",  "TIBETAN MASTIFF",  "toy terrier",  "PYRENEES",  "borzoi",  "BULL MASTIFF",  "tibetan terrier",  "REDBONE",  "bouvier",  "MALTESE",  "silky terrier",  "CHESAPEAKE RETRIEVER",  "boxer",  "MALINOIS",  "sealyham terrier",  "CURLY RETRIEVER",  "brabancon",  "MALAMUTE",  "scottish terrier",  "FLATCOATED RETRIEVER",  "briard",  "LHASA",  "patterdale terrier",  "GOLDEN RETRIEVER",  "boston bulldog",  "LEONBERG",  "norwich terrier",  "RHODESIAN RIDGEBACK",  "french bulldog",  "LABRADOR",  "norfolk terrier",  "ROTTWEILER",  "staffordshire bullterrier",  "KUVASZ",  "lakeland terrier",  "SALUKI",  "cairn",  "KOMONDOR",  "kerryblue terrier",  "SAMOYED",  "chihuahua",  "KELPIE",  "irish terrier",  "SCHIPPERKE",  "chow",  "KEESHOND",  "fox terrier",  "GIANT SCHNAUZER",  "clumber",  "HUSKY",  "dandie terrier",  "MINIATURE SCHNAUZER",  "border collie",  "WALKER HOUND",  "border terrier",  "ENGLISH SETTER",  "coonhound",  "ENGLISH HOUND",  "bedlington terrier",  "GORDON SETTER",  "cardigan corgi",  "BLOOD HOUND",  "australian terrier",  "IRISH SETTER",  "dachshund",  "BASSET HOUND",  "american terrier",  "ENGLISH SHEEPDOG",  "great dane",  "AFGHAN HOUND",  "stbernard",  "SHETLAND SHEEPDOG",  "scottish deerhound",  "IBIZAN HOUND",  "english springer",  "SHIBA",  "dhole",  "GROENENDAEL",  "welsh spaniel",  "SHIHTZU",  "dingo",  "ITALIAN GREYHOUND",  "sussex spaniel",  "BLENHEIM SPANIEL",  "doberman",  "GERMANSHEPHERD",  "japanese spaniel",  "BRITTANY SPANIEL",  "norwegian elkhound",  "ESKIMO",  "irish spaniel",  "COCKER SPANIEL",  "entlebucher",  "ENTLEBUCHER",  "cocker spaniel",  "IRISH SPANIEL",  "eskimo",  "NORWEGIAN ELKHOUND",  "brittany spaniel",  "JAPANESE SPANIEL",  "germanshepherd",  "DOBERMAN",  "blenheim spaniel",  "SUSSEX SPANIEL",  "italian greyhound",  "DINGO",  "shihtzu",  "WELSH SPANIEL",  "groenendael",  "DHOLE",  "shiba",  "ENGLISH SPRINGER",  "Ibizan hound",  "SCOTTISH DEERHOUND",  "shetland sheepdog",  "STBERNARD",  "afghan hound",  "GREAT DANE",  "english sheepdog",  "AMERICAN TERRIER",  "basset hound",  "DACHSHUND",  "irish setter",  "AUSTRALIAN TERRIER",  "blood hound",  "CARDIGAN CORGI",  "gordon setter",  "BEDLINGTON TERRIER",  "english hound",  "COONHOUND",  "english setter",  "BORDER TERRIER",  "walker hound",  "BORDER COLLIE",  "miniature schnauzer",  "DANDIE TERRIER",  "husky",  "CLUMBER",  "giant schnauzer",  "FOX TERRIER",  "keeshond",  "CHOW",  "schipperke",  "IRISH TERRIER",  "kelpie",  "CHIHUAHUA",  "samoyed",  "KERRYBLUE TERRIER",  "komondor",  "CAIRN",  "saluki",  "LAKELAND TERRIER",  "kuvasz",  "STAFFORDSHIRE BULLTERRIER",  "rottweiler",  "NORFOLK TERRIER",  "labrador",  "FRENCH BULLDOG",  "rhodesian ridgeback",  "NORWICH TERRIER",  "leonberg",  "BOSTON BULLDOG",  "golden retriever",  "PATTERDALE TERRIER",  "lhasa",  "BRIARD",  "flatcoated retriever",  "SCOTTISH TERRIER",  "malamute",  "BRABANCON",  "curly retriever",  "SEALYHAM TERRIER",  "malinois",  "BOXER",  "chesapeake retriever",  "SILKY TERRIER",  "maltese",  "BOUVIER",  "redbone",  "TIBETAN TERRIER",  "bull mastiff",  "BORZOI",  "pyrenees",  "TOY TERRIER",  "tibetan mastiff",  "BLUETICK",  "pug",  "WESTHIGHLAND TERRIER",  "mexicanhairless",  "BEAGLE",  "toy poodle",  "WHEATEN TERRIER",  "bernese mountain",  "BASENJI",  "standard poodle",  "YORKSHIRE TERRIER",  "miniature poodle",  "APPENZELLER",  "pomeranian",  "VIZSLA",  "german pointer",  "AKITA",  "miniature pinscher",  "WEIMARANER",  "swiss mountain",  "AIREDALE",  "pekinese",  "WHIPPET",  "papillon",  "AFRICAN",  "otterhound",  "IRISH WOLFHOUND",  "newfoundland",  "PEMBROKE",  "AFFENPINSCHER"  ]

function App () {
  let fullarr = [...data];
  // fetch('https://cors-anywhere.herokuapp.com/https://www.mrsoft.by/data.json') 
  //   .then(response => response.json())
  //   .then(res => res.data)
  //   .then(data => fullarr.push(...data))
  //   .catch(res => alert(`Something wrong. Failed to get data from https://www.mrsoft.by/data.json. Check console or try again`));

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
