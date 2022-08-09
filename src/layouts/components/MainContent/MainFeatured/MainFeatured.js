import clsx from "clsx";
import styles from './MainFeatured.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

function MainFeatured() {
    return ( 
        <div className={clsx(styles.main_featured_inner)}>
            <h1 className={clsx(styles.featured_title)}>TOP FEATURED</h1>
            <div className={clsx(styles.featured_content)}>
                <div className={clsx(styles.featured_content_wrapper)}>
                    <div className={clsx(styles.content_nav)}>
                        <span className={clsx(styles.content_nav_item, styles.active)}>POPULAR</span>
                        <span className={clsx(styles.content_nav_item)}>NEW ARRIVAL</span>
                        <span className={clsx(styles.content_nav_item)}>BEST SELLER</span>
                    </div>
                </div>
                
                <div className={clsx(styles.featured_product)}>
                    <div className={clsx(styles.product_wrapper)}>
                        <div className={clsx(styles.product_image)}>
                            <img className={clsx(styles.img_default)} src="https://cdn.shopify.com/s/files/1/1357/1399/products/2_large.jpg?v=1466753683" alt="img"></img>
                            <img className={clsx(styles.img_hover)} src="https://cdn.shopify.com/s/files/1/1357/1399/products/7_large.jpg?v=1466753683" alt="img"></img>
                        </div>

                        <div className={clsx(styles.product_info)}>
                            <h3>Chanel, the cheetah</h3>
                            <div className={clsx(styles.product_price)}>
                                <span className={clsx(styles.price_sale)}>$259.00</span>
                                <span className={clsx(styles.price_compare)}>$300.00</span>
                            </div>
                            <div className={clsx(styles.product_start)}>
                                <span className={clsx(styles.stating)}><FontAwesomeIcon icon={solid('star')}/></span>                                   
                                <span className={clsx(styles.stating)}><FontAwesomeIcon icon={solid('star')}/></span>                                   
                                <span className={clsx(styles.stating)}><FontAwesomeIcon icon={solid('star')}/></span>                                   
                                <span className={clsx(styles.stating)}><FontAwesomeIcon icon={solid('star')}/></span>                                   
                                <span className={clsx(styles.stating)}><FontAwesomeIcon icon={solid('star')}/></span>                                   
                            </div>
                        </div>

                        <div className={clsx(styles.product_icons)}>
                            <span className={clsx(styles.bars_icon)}><FontAwesomeIcon icon={solid('bars')}/></span>
                            <span className={clsx(styles.search_icon)}><FontAwesomeIcon icon={solid('magnifying-glass')}/></span>
                            <span className={clsx(styles.heart_icon)}><FontAwesomeIcon icon={solid('heart')}/></span>
                        </div>

                        <span className={clsx(styles.product_sale)}><p>SALE</p></span>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default MainFeatured;