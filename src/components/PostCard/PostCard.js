import './postcard.css'
import { Link } from 'react-router-dom';
import { Button } from '..';

const PostCard = ({
        image,
        title,
        username,
        comment,
        description,
        link,
        day,
        mmYYYY,

}) => {
  return(
      <div className='post-card'>
            <div className="postcard-image-container">
                <img src={image} alt={title} />
            </div>
            <div className="postcard-content-container">
                <div className="postcard-content-heading-container">
                    <div className="date">
                        <p className="day">{day}</p>
                        <p className="month-year">{mmYYYY}</p>
                    </div>
                    <div className="source-details">
                        <div className='user-details'>
                            <p className="username"><i className="far fa-user"></i> {username} | <i className="far fa-comment"></i> {comment} Comments</p>
                        </div>
                        <Link to={link} className="title">{title}</Link>
                    </div>
                </div>

                <div className="postcard-description">
                    <p className='description'>{description}</p>
                </div>
                <Button 
                    label="Read more"
                    containerStyle={{
                        width: "120px",
                        height: "40px",
                    }}
                />
            </div>
      </div>
  )
};

export default PostCard;
