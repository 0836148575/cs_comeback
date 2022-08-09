import clsx from "clsx";
import styles from './MainContent.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
// import { Link } from "react-router-dom";

import MainTopBanner from './MainTopBanner/MainTopBanner'
import MainFeatured from './MainFeatured/MainFeatured'

function MainContent() {
    return ( 
        <div className={clsx(styles.main_content)}>
                <MainTopBanner />
                <MainFeatured />
                
                <div className={clsx(styles.blog_container)}>
                    <h1 className={clsx(styles.blog_title)}>BLOG</h1>
                    <p>Philanthropy international development rural development, partnership, accessibility, network fundraise.</p>
                    <div className={clsx(styles.blog_wrapper)}>
                        <div className={clsx(styles.blog_item)}>
                            <div className={clsx(styles.blog_top)}>
                                <a className={clsx(styles.blog_img)} href="/blogs/news/playsuit-black-razor-pleats-1">
                                    <img src="//cdn.shopify.com/s/files/1/1357/1399/articles/1.jpg?v=1466755196" alt='img'></img>
                                </a>
                                <span className={clsx(styles.blog_date)}>23 Jun</span>
                            </div>
                            <div className={clsx(styles.blog_content)}>
                                <a className={clsx(styles.blog_name)} href="/blogs/news/playsuit-black-razor-pleats-1">Playsuit black razor pleats</a>
                                <div className={clsx(styles.blog_group)}>
                                    <span className={clsx(styles.blog_author)}>
                                        <FontAwesomeIcon icon={solid('user')} />
                                        <p className={clsx(styles.blog_author_icon)}>Blog_Author</p>
                                    </span>
                                    <span className={clsx(styles.blog_comment)}>
                                        <FontAwesomeIcon icon={solid('comment-dots')} />
                                        <p className={clsx(styles.blog_comment_icon)}>0</p>
                                    </span>
                                </div>
                                <span className={clsx(styles.blog_desc)}>Shoe street style leather tote oversized sweatshirt A.P.C. Prada Saffiano crop slipper denim shorts spearmint. Braid skirt round sunglasses seam leather vintage Levi plaited. Flats...</span>
                            </div>
                        </div>
                        <div className={clsx(styles.blog_item)}>
                            <div className={clsx(styles.blog_top)}>
                                <a className={clsx(styles.blog_img)} href="/blogs/news/playsuit-black-razor-pleats-1">
                                    <img src="//cdn.shopify.com/s/files/1/1357/1399/articles/2.jpg?v=1466755209" alt='img'></img>
                                </a>
                                <span className={clsx(styles.blog_date)}>23 Jun</span>
                            </div>
                            <div className={clsx(styles.blog_content)}>
                                <a className={clsx(styles.blog_name)} href="/blogs/news/playsuit-black-razor-pleats-1">Playsuit black razor pleats save lives</a>
                                <div className={clsx(styles.blog_group)}>
                                    <span className={clsx(styles.blog_author)}>
                                        <FontAwesomeIcon icon={solid('user')} />
                                        <p className={clsx(styles.blog_author_icon)}>Blog_Author</p>
                                    </span>
                                    <span className={clsx(styles.blog_comment)}>
                                        <FontAwesomeIcon icon={solid('comment-dots')} />
                                        <p className={clsx(styles.blog_comment_icon)}>0</p>
                                    </span>
                                </div>
                                <span className={clsx(styles.blog_desc)}>Shoe street style leather tote oversized sweatshirt A.P.C. Prada Saffiano crop slipper denim shorts spearmint. Braid skirt round sunglasses seam leather vintage Levi plaited. Flats...</span>
                            </div>
                        </div>
                        <div className={clsx(styles.blog_item)}>
                            <div className={clsx(styles.blog_top)}>
                                <a className={clsx(styles.blog_img)} href="/blogs/news/playsuit-black-razor-pleats-1">
                                    <img src="https://cdn.shopify.com/s/files/1/1357/1399/articles/3.jpg?v=1466755221" alt='img'></img>
                                </a>
                                <span className={clsx(styles.blog_date)}>23 Jun</span>
                            </div>
                            <div className={clsx(styles.blog_content)}>
                                <a className={clsx(styles.blog_name)} href="/blogs/news/playsuit-black-razor-pleats-1">Playsuit black razor pleats</a>
                                <div className={clsx(styles.blog_group)}>
                                    <span className={clsx(styles.blog_author)}>
                                        <FontAwesomeIcon icon={solid('user')} />
                                        <p className={clsx(styles.blog_author_icon)}>Blog_Author</p>
                                    </span>
                                    <span className={clsx(styles.blog_comment)}>
                                        <FontAwesomeIcon icon={solid('comment-dots')} />
                                        <p className={clsx(styles.blog_comment_icon)}>0</p>
                                    </span>
                                </div>
                                <span className={clsx(styles.blog_desc)}>Shoe street style leather tote oversized sweatshirt A.P.C. Prada Saffiano crop slipper denim shorts spearmint. Braid skirt round sunglasses seam leather vintage Levi plaited. Flats...</span>
                            </div>
                        </div>
                    </div>
                </div>
        </div> 
    );
}

export default MainContent;