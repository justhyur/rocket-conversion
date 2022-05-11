import {BsStar, BsStarFill, BsStarHalf} from "react-icons/bs";
import moment from 'moment';
import 'moment-timezone';

export function Cta() {
  return (
        <a className="cta" href="#">
            <span>Get my Rocket Conversion List Now!</span>
        </a>
  )
}

export function ProfilePic({colored, href}){
  const imgURL = "/images/jacopo.jpg";
  const Pic = () => {
    return (
      <div className={`profile-pic-container ${colored? 'colored' : ''} ${href? 'link' : ''}`}>
        <img src={imgURL}/>
      </div>
    )
  }
  return(href?
    <div><a href={href}><Pic/></a></div>
    : <Pic/>
  )
}

export function SpecialTitle({h, size, imagePath, pretitle, title, noPadding}) {
  const HTag = `h${h? h : 2}`;
  return (
    <div className={`special-title ${size? size: ''} ${noPadding? 'no-padding' : ''}`}>
      {imagePath &&
        <img src={imagePath}/>
      }
      {pretitle &&
        <div className="pretitle">{pretitle}</div>
      }
      <HTag dangerouslySetInnerHTML={{__html:title}}></HTag>
    </div>
  )
}

export function Testimonial({stars, username, date, comment, imagePath, name, profession}) {
  return (
     <div className="box testimonial">
      <div className="rate">
        <div className="stars">
          {Array.from({length: Math.floor(stars)}).map(()=><BsStarFill className="star"/>)}
          {!Number.isInteger(stars) &&
            <BsStarHalf className="star"/>
          }
          {stars < 5 &&
            Array.from({length: 5-stars}).map(()=><BsStar className="star"/>)
          }
        </div>
        <div className="signature">
          <span className="username">{username}</span> · {date}
          </div>
      </div>
      <div className="comment">{comment}</div>
      <div className="user">
        <img src={imagePath}/>
        <div className="author">
          <div className="name">{name}</div>
          <div className="profession">{profession}</div>
        </div>
      </div>
    </div>
  )
}

export function PricingTable({original, current}){
  const perc = Math.floor(100 - ( (current * 100) / original ));
  const now = new Date();
  const dayName = moment(now).format("dddd").toUpperCase();
  return (
    <div className="pricing-table">
      <div className="original">${original}</div>
      <div className="current">${current}</div>
      <div className="sale">
        <span>{perc}% OFF - But only TODAY, ON {dayName}</span>
      </div>
    </div>
  )
}