import './animatedcounter.css'
import { useState } from 'react';
import { useEffect } from 'react';
import {counterData} from './AnimatedCounterData'

const AnimatedCounter = () => {
    const [pageOffset, setPageOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setPageOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const counters = document.querySelectorAll('.counter');
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            animateValue(counter, 100, target, 2200);
        })
    }, [pageOffset]);
    

    // const updateCounter = () => {
    //   const counters = document.querySelectorAll('.counter');
    //   const speed = 900;
    //   counters.forEach(counter => {
    //         const target = +counter.getAttribute('data-target');
    //         let count = +counter.innerHTML;
    //         if (count < target) {
    //             counter.innerHTML = count + 1;
    //             setInterval(updateCounter, speed)
    //         }else{
    //             counter.innerHTML = target;
    //         }
    //   })
    // }

    function animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          obj.innerHTML = Math.floor(progress * (end - start) + start);
          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };
        window.requestAnimationFrame(step);
      }
      

    return (
            <div className="counting-banner-section">
                <div className="counting-banner-container">
                    <div className="counting-banner-column">
                        <img src="/images/animated-counter/animated-counter-image-column1.jpg" alt="FRIED CHICKEN" />
                    </div>
                    <div className="counting-banner-column">
                        <h3>Feel The Sound Of Taste</h3>
                        <p>Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing.</p>
                        <ul className='counter-outer-container'>
                            {counterData.map((counter, index) => (
                                <li key={counter.id} className='counter-inner-container'>
                                    <img src={counter.image} alt={counter.name} />
                                    <p className='counter' data-target={counter.dataTarget}>0</p>
                                    <h5>{counter.name}</h5>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
    );
};

export default AnimatedCounter;
