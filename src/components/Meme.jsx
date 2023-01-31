import "../styles/Meme.css";
import memesData from "./memesData";
import { useState } from "react";

const Meme = () => {
  const [memeImage, setMemeImage] = useState("");

  const getMemeImage = () => {
    const memes = memesData.data.memes;
    const randMeme = Math.floor(Math.random() * memes.length);
    setMemeImage(memes[randMeme].url);
  };

  return (
    <section className="meme--form_container">
      <div className="meme--form">
        <div className="meme--inputs">
          <input type="text" placeholder="Shut up" />
          <input type="text" placeholder="and take my money" />
        </div>
        <button className="meme--button" type="submit" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>

      <div className="meme--image_container">
        <img src={memeImage} />
      </div>
    </section>
  );
};

export default Meme;
