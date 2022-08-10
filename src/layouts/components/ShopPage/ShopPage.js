import clsx from "clsx";
import styles from './ShopPage.module.scss';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

function ShopPage() {
    return (
        <div className={clsx(styles.main_content)}>
            <section className={clsx(styles.collection_heading)}>
                <div className={clsx(styles.collection_heading_inner)}>
                    <h1 className={clsx(styles.page_title)}>PRODUCTS</h1>
                    <div className={clsx(styles.page_desc)}>
                        <Link to='/' className={clsx(styles.desc_btn)}>Home</Link>
                        <FontAwesomeIcon className={clsx(styles.desc_icon)} icon={solid('angle-right')} />
                        <Link to='/' className={clsx(styles.desc_btn)}>Products</Link>
                        <FontAwesomeIcon className={clsx(styles.desc_icon)} icon={solid('angle-right')} />
                        <Link to='/' className={clsx(styles.desc_btn)}>Page 1 of 2</Link>
                        <FontAwesomeIcon className={clsx(styles.desc_icon)} icon={solid('angle-right')} />
                    </div>
                </div>
            </section>
        </div>
    );
}


export default ShopPage;