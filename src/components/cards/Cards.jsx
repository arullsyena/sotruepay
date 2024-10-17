import "./Cards.css";

const Cards = ({ imgs1, imgs2, titleImg }) => {
  return (
    <div className='card-wrapper'>
      <div className='a'>
        <div className='card'>
          <div className='wrapper'>
            <img src={imgs1} className='cover-image' />
          </div>
          <img src={titleImg} className='title' />
          <img src={imgs2} className='character' />
        </div>
      </div>
    </div>
  );
};
export default Cards;
