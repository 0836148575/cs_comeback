import clsx from "clsx";
import styles from './Carousel.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { useRef } from 'react'

function Carousel() {
    const slide1 = useRef()
    const slide2 = useRef()

    function handlePrevBtn({ currentIndex = 0}) {
        const slideShow1 = slide1.current 
        const slideShow2 = slide2.current 
        currentIndex++

        if(slideShow1) {
            console.log(currentIndex);
            slideShow2.classList.add(clsx(styles.active))
            slideShow1.classList.remove(clsx(styles.active))
           
        }
    }

    function handleNextBtn({ currentIndex = 0}) {
        const slideShow1 = slide1.current 
        const slideShow2 = slide2.current 
        currentIndex++

        if(slideShow2) {
            slideShow2.classList.remove(clsx(styles.active))
            slideShow1.classList.add(clsx(styles.active))
        }
    }

    return ( 
        <div className={clsx(styles.carousel_inner)}>
                    <div ref={slide1} className={clsx(styles.item_slideShow_1, styles.active)}>
                        <img className={clsx(styles.item_slideShow_img)} src="https://cdn.shopify.com/s/files/1/1357/1399/t/4/assets/home3_slide-image-2.jpg?v=144987999445446066611467607064" alt="slide"></img>
                        <div className={clsx(styles.slideshow_caption)}>
                            <div className={clsx(styles.slide_caption)}>
                                <p className={clsx(styles.title_name)}>Smart phone</p>
                                <p className={clsx(styles.title_description)}>Nokia lumia 630</p>
                                <p className={clsx(styles.title_content)}>Cross-cultural our ambitions social good, livelihoods, humanitarian relief public service crisis management. </p>
                                <p className={clsx(styles.title_price)}>$230.99</p>
                                <a href="/" className={clsx(styles.title_btn)}>SHOP NOW</a>
                            </div>
                        </div>
                    </div>
    
                    <div ref={slide2} className={clsx(styles.item_slideShow_2)}>
                        <div className={clsx(styles.slideshow_caption_2)}>
                            <div className={clsx(styles.slide_caption_2)}>
                                <p className={clsx(styles.title_name)}>The new iMac</p>
                                <p className={clsx(styles.title_description)}>iMac pro 2022</p>
                                <p className={clsx(styles.title_content_2)}>Cross-cultural our ambitions social good, livelihoods, humanitarian relief public service crisis management.</p>
                                <p className={clsx(styles.title_price)}>$230.99</p>
                                <a href="/" className={clsx(styles.title_btn)}>SHOP NOW</a>
                            </div>
                        </div>
                        <img className={clsx(styles.item_slideShow_img)} src="https://cdn.shopify.com/s/files/1/1357/1399/t/4/assets/home3_slide-image-1.jpg?v=89361364180657010791467607064" alt="slide"></img>
                    </div>
    
                    {/* btn_control */}
                    <button onClick={handlePrevBtn} className={clsx(styles.left_control)}>
                        <span><FontAwesomeIcon icon={solid('angle-left')} /></span>
                    </button>
    
                    <button onClick={handleNextBtn} className={clsx(styles.right_control)}>
                        <span><FontAwesomeIcon icon={solid('angle-right')} /></span>
                    </button>
    
                    {/* carousel-indicators */}
                    {/* <ol className={clsx(styles.carousel_indicators)}>
                        <li className={clsx(styles.indicators_item)}></li>
                    </ol> */}
            </div> 
     );
}

export default Carousel;