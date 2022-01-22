import { animals } from "./animals";
import React from "react";
import style from "./App.module.css";
import backImage from "./ocean.jpg";

function App() {
  const title = ``;
  const images = [];
  const background = (
    <img className={style.background} src={backImage} alt="ocean" />
  );
  function myFunction(e) {
    const selectAnimal = e.target.alt;
    const animalInfo = animals[selectAnimal];
    const randomIndex = Math.floor(Math.random() * animalInfo.facts.length);
    const funFact = animalInfo.facts[randomIndex];
    document.getElementById("fact").innerHTML = funFact;
  }

  for (const animal in animals) {
    <div className={style.fact}>
      {images.push(
        <img
          key={animal}
          className={style.animal}
          alt={animal}
          src={animals[animal].image}
          aria-label={animal}
          role="button"
          onClick={myFunction}
        />
      )}
    </div>;
  }

  return (
    <div>
      <h1>{title === `` ? `Click an animal for a fun fact` : title}</h1>
      {background}
      <p id="fact"></p>
      <div className={style.animals}>{images}</div>
    </div>
  );
}

export default App;
