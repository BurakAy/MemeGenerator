import "../styles/Meme.css";
import memesData from "./memesData";
import { useState } from "react";

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = useState(memesData);

  const getMemeImage = () => {
    const memes = allMemeImages.data.memes;
    const randMeme = Math.floor(Math.random() * memes.length);
    const textOne = document.querySelector(".meme--t1").value;
    const textTwo = document.querySelector(".meme--t2").value;

    setMeme((memeInfo) => {
      return {
        ...memeInfo,
        topText: textOne,
        bottomText: textTwo,
        randomImage: memes[randMeme].url,
      };
    });
  };

  return (
    <section className="meme--form_container">
      <div className="meme--form">
        <div className="meme--inputs">
          <input className="meme--t1" type="text" placeholder="Shut up" />
          <input
            className="meme--t2"
            type="text"
            placeholder="and take my money"
          />
        </div>
        <button className="meme--button" type="submit" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme--image_container">
        <div className="meme--text">
          <p>{meme.topText}</p>
          <p>{meme.bottomText}</p>
        </div>
        <img src={meme.randomImage} />
      </div>
    </section>
  );
};

export default Meme;
