import Cards from "../cards/Cards";
import chess4 from "../../assets/chess4.jpg";
import chessKing from "../../assets/chessKing.png";
import rummy1 from "../../assets/rummy1.jpg";
import rummy3 from "../../assets/rummy3.png";
import ludo1 from "../../assets/ludo1.jpg";
import ludo2 from "../../assets/ludo2.png";
import rummy from "../../assets/rummy.png";
import ludo from "../../assets/ludo.png";
import chessFont2 from "../../assets/chessFont2.png";
const PopularGames = () => {
  const cardContent = [
    {
      coverImage: chess4,
      threeDImg: chessKing,
      titleImg: chessFont2,
    },
    {
      coverImage: rummy1,
      threeDImg: rummy3,
      titleImg: rummy,
    },
    {
      coverImage: ludo1,
      threeDImg: ludo2,
      titleImg: ludo,
    },
  ];
  return (
    <section className='home-page__section home-page__section--service'>
      <h2 className='section--title'>Popular Games</h2>
      <hr width='50%' color='#05e950' />
      <div className='spacer'></div>

      <div className='cards-container'>
        {cardContent.map((cardContent, index) => (
          <Cards
            key={index}
            imgs1={cardContent.coverImage}
            imgs2={cardContent.threeDImg}
            titleImg={cardContent.titleImg}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularGames;
