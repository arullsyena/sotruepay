import "./Cards.css";
import chess from "../../assets/chess.jpg";
import chessKing from "../../assets/chessKing.png";
import chessFont from "../../assets/chessFont.png";
const Cards = () => {
  return (
    <>
      <a
        href='https://www.mythrillfiction.com/the-dark-rider'
        alt='Mythrill'
        target='_blank'
      >
        <div className='card'>
          <div className='wrapper'>
            <img src={chess} className='cover-image' />
          </div>
          <img src={chessFont} className='title' />
          {/* CHESS */}
          <img src={chessKing} className='character' />
        </div>
      </a>

      {/* <a
        href='https://www.mythrillfiction.com/force-mage'
        alt='Mythrill'
        target='_blank'
      >
        <div className='card'>
          <div className='wrapper'>
            <img
              src='https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg'
              className='cover-image'
            />
          </div>
          <img
            src='https://ggayane.github.io/css-experiments/cards/force_mage-title.png'
            className='title'
          />
          <img
            src='https://ggayane.github.io/css-experiments/cards/force_mage-character.webp'
            className='character'
          />
        </div>
      </a> */}
    </>
  );
};
export default Cards;
