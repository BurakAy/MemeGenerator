import "../styles/Meme.css";

const Meme = () => {
  return (
    <section className="meme--form_container">
      <div className="meme--form">
        <div className="meme--inputs">
          <input type="text" placeholder="Shut up" />
          <input type="text" placeholder="and take my money" />
        </div>
        <button className="meme--button" type="submit">
          Get a new meme image 🖼
        </button>
      </div>
    </section>
  );
};

export default Meme;
