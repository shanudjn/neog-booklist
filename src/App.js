import React, { useState } from "react";
import "./styles.css";

const bookListDB = {
  Javascript: [{ name: "Eloquent Javascript", author: "Marijn Haverbeke" }],
  Philosophy: [
    { name: "12 Rules For Life", author: "Jordan Peterson" },
    { name: "Crime and Punishment", author: "Fyodor Dostoevsky" }
  ],
  Mathematics: [
    { name: "Genius : The Game", author: "Leopoldo Gout" }
    // { name: "Dune", author: "Frank Herbert" }
  ],
  Fiction: [
    { name: "1984", author: "George Orwell" },
    { name: "Dune", author: "Frank Herbert" }
  ],
  NonFiction: [
    { name: "Range", author: "David Epstein" },
    { name: "AntiFragile", author: "Nassim N. Taleb" }
  ]
};
var bookList = Object.keys(bookListDB);

export default function App() {
  const [selectedGenre, setGenre] = useState("Mathematics");

  function clickHandler(genre) {
    console.log(genre);
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> Books List 📚</h1>
      <p>
        <strong>Below is my list of favorite books</strong>
      </p>
      <div className="genres">
        {bookList.map((genre, index) => {
          return (
            <button key={index} onClick={() => clickHandler(genre)}>
              {genre}
            </button>
          );
        })}
      </div>
      <hr></hr>
      <div className="list">
        <ul>
          {bookListDB[selectedGenre].map((book, index) => {
            return (
              <li key={index}>
                {" "}
                <p>{book.name}</p>
                <p>{book.author}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
