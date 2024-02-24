import './index.css';

function SkillCard({iconUrl, skillTitle, skillRating}) {
  return (
      <div className="skill-card">
          <img src={iconUrl} alt={skillTitle} className='skill-icon' />
          <div className='skill-info'>
              <div className='skill-title'>{skillTitle}</div>
              <div className='skill-rating'>
                  {
                      (function () {
                          const starsArray = []
                          for (let index = 0; index < skillRating; index++) {
                            starsArray.push(<img className='star' src="./Resources/Ratings/fill-star.svg" alt="1"/>)  
                          }
                          return starsArray
                      }())
                  }
                  {
                      (function () {
                          const starsArray = []
                          for (let index = 0; index < 5-skillRating; index++) {
                            starsArray.push(<img className='star' src="./Resources/Ratings/empty-star.svg" alt="1"/>)  
                          }
                          return starsArray
                      }())
                  }
              </div>
          </div>
    </div>
  );
}

export default SkillCard;
