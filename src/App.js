import './App.css';

function App() {
  fetch('https://www.mrsoft.by/data.json')
    .then(response => response.json())
    .then(json => console.log(json))
  return (
    <div className="App">
      <div className="container">
        <h1>Search</h1>
        <form className="search">
          <input type="text" placeholder="Enter symbols" className="enter"/>
          <div className="checkbox-container">
            <input type="checkbox" className="checkbox"/>
            <span>Case sensitivity</span>
          </div>
          <div className="btn-container">
            <button type="submit" className="btn">Filter by length</button>
            <button type="submit" className="btn">Substring filter</button>
          </div>
          <div className="output">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et excepturi veniam sapiente ratione debitis facere a. Ipsa ducimus quod, possimus modi consectetur inventore excepturi harum? Rerum qui enim libero praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus illum asperiores modi iste illo voluptatum voluptatibus labore, praesentium doloremque eveniet corporis iure, sequi quo natus optio alias quaerat veritatis nisi! Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae corrupti non? Dolores quod minus repudiandae. Consectetur asperiores, eum ratione distinctio tempora iusto cupiditate expedita quae sequi minus provident voluptates! lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam eos maxime ut voluptas fugiat aspernatur sed deleniti impedit, rerum nulla molestias voluptatem recusandae repellat. Architecto dolores corporis vel harum illum? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur quod placeat nam soluta qui saepe id distinctio pariatur obcaecati culpa, sit accusantium magni impedit, debitis error! Autem natus maiores totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, iure molestiae. Odit, optio! Doloremque, suscipit modi provident aut autem neque voluptas voluptatum assumenda beatae a quaerat unde quidem officiis eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolor facilis odio quisquam ut et sed at officia autem, nobis fugiat ea laboriosam numquam minima dicta commodi dignissimos mollitia vel!
          Lorem ipsum dolor sit amet lorem consectetur, adipisicing elit. Ratione nulla nesciunt natus necessitatibus, nemo sint? Maiores, ut accusantium. Molestias dolorem cum veritatis nulla vel quis corporis labore amet voluptatem quos! . Eligendi magni, deserunt, dignissimos velit at earum exercitationem fugiat eum iure hic voluptate! Itaque voluptates quae illum nisi reprehenderit quasi, voluptatem cumque.</div>
        </form>
        <footer>by Olga Rozhkova</footer>
      </div>
    </div>
  );
}

export default App;
