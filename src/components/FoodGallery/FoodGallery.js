import './foodgallery.css'


const FoodGallery = ({
    data,
}) => {
  return(
      <div className='food-gallery'>
           <div className="food-gallery-image-container">
               <div className="food-image-inner-container container1">
                   <img src="/images/food-gallery/chiken1.jpg" alt="" />
                   <div className='food-gallery-content'>
                       <h3 className='food-gallery-title'>Crunchy Chicken</h3>
                       <p className='food-gallery-price'>14.00</p>
                   </div>
               </div>
               <div className="food-image-inner-container container2">
                   <img src="/images/food-gallery/chiken2.jpg" alt="" />
                   <div className='food-gallery-content'>
                       <h3 className='food-gallery-title'>Lemon Grilled</h3>
                       <p className='food-gallery-price'>14.00</p>
                   </div>
                </div>
               <div className="food-image-inner-container container3">
                   <img src="/images/food-gallery/chiken3.jpg" alt="" />
                   <div className='food-gallery-content'>
                       <h3 className='food-gallery-title'>Crispy Chicken Balls</h3>
                       <p className='food-gallery-price'>14.00</p>
                   </div>
               </div>
               <div className="food-image-inner-container container4">
                   <img src="/images/food-gallery/chiken4.jpg" alt="" />
                   <div className='food-gallery-content'>
                       <h3 className='food-gallery-title'>Tandoori Chicken</h3>
                       <p className='food-gallery-price'>14.00</p>
                   </div>
               </div>
            </div>
      </div>
  )
};

export default FoodGallery;
