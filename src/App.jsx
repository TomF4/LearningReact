import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function getTitle(title) {
  return title;
}

const welcome = {
  title: "'title'",
  gretting: "'greeting'",
};

const numbers = [1, 2, 3, 4, 5];

const exponentialNumbers = numbers.map(function (number) {
  return number * number;
});
//
const App = () => {
  const testList = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "someone",
      numComments: 2,
      points: 4,
      objectID: 0,
    },
    {
      title: "React1",
      url: "https://reactjs.org/",
      author: "someone",
      numComments: 2,
      points: 4,
      objectID: 1,
    },
  ];

  const handleSearch = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <h1>
        {welcome.gretting} {welcome.title}
      </h1>
      <Search onSearch={handleSearch} />
      <hr />
      <List list={testList} />
    </div>
  );
};

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    props.onSearch(event);
  };

  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" onChange={handleChange} />
      <p>
        Searching for: <strong>{searchTerm}</strong>
      </p>
    </div>
  );
};

const List = (props) => (
  <ul>
    {props.list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);

const Item = (props) => (
  <li>
    <span>
      <a href={props.item.url}>{props.item.title}</a>
    </span>
    <span> {props.item.author} </span>
    <span> {props.item.numComments} </span>
    <span> {props.item.points} </span>
  </li>
);

export default App;
