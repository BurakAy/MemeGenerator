import "../styles/Meme.css";
import { useEffect, useState } from "react";

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((resp) => resp.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  const getMemeImage = () => {
    const randMeme = Math.floor(Math.random() * allMemes.length);
    const memeImg = allMemes[randMeme].url;

    setMeme((memeInfo) => {
      return {
        ...memeInfo,
        randomImage: memeImg,
      };
    });
  };

  const createMeme = (event) => {
    const { name, value } = event.target;
    setMeme((text) => {
      return {
        ...text,
        [name]: value,
      };
    });
  };

  return (
    <section className="meme--form_container">
      <div className="meme--form">
        <div className="meme--inputs">
          <input
            className="meme--t1"
            type="text"
            name="topText"
            value={meme.topText}
            onChange={createMeme}
            placeholder="Shut up"
          />
          <input
            className="meme--t2"
            type="text"
            name="bottomText"
            value={meme.bottomText}
            onChange={createMeme}
            placeholder="and take my money"
          />
        </div>
        <button className="meme--button" type="submit" onClick={getMemeImage}>
          Get a new meme image
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
