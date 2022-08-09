import clsx from "clsx";
import styles from './MainTopBanner.module.scss';

function MainTopBanner() {
    return (  
        <div className={clsx(styles.main_top_banner)}>
            <div className={clsx(styles.container)}>
                <div className={clsx(styles.top_banner_item)}>
                    <div className={clsx(styles.item_left)}>
                        <img src="https://cdn.shopify.com/s/files/1/1357/1399/t/4/assets/home3_topbanner1.png?v=56078339517068976101467607064" alt="img"></img>
                    </div>
                    <div className={clsx(styles.item_right)}>
                        <p className={clsx(styles.item_title)}>Phones</p>
                        <p className={clsx(styles.item_content)}>The innovatively slim physique is an effortless</p>
                        <p className={clsx(styles.item_price)}>$259.25</p>
                    </div>
                </div>
                <div className={clsx(styles.top_banner_item)}>
                    <div className={clsx(styles.item_left)}>
                        <img src="https://cdn.shopify.com/s/files/1/1357/1399/t/4/assets/home3_topbanner2.png?v=63564258114458133071467607064" alt="img"></img>
                    </div>
                    <div className={clsx(styles.item_right)}>
                        <p className={clsx(styles.item_title)}>Accessories</p>
                        <p className={clsx(styles.item_content)}>Effortless fit for your hand and life.</p>
                        <p className={clsx(styles.item_price)}>$120.00</p>
                    </div>
                </div>
                <div className={clsx(styles.top_banner_item)}>
                    <div className={clsx(styles.item_left)}>
                        <img src="https://cdn.shopify.com/s/files/1/1357/1399/t/4/assets/home3_topbanner3.png?v=148190498955089273701467607064" alt="img"></img>
                    </div>
                    <div className={clsx(styles.item_right)}>
                        <p className={clsx(styles.item_title)}>Case</p>
                        <p className={clsx(styles.item_content)}>Innovatively slim physique is an effo</p>
                        <p className={clsx(styles.item_price)}>$30.00</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainTopBanner;
