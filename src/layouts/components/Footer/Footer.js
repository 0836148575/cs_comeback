import clsx from 'clsx';
import styles from './Footer.module.scss';
import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

function Footer() {
    const footerTop = useRef()
    
    useEffect(() => {
        const a = footerTop.current
        setInterval(
            a.classList.add(clsx(styles.active))
            
        ,1000)

        setInterval(
            a.classList.remove(clsx(styles.active))
        , 1000)
            
        })
    
    return (
        <div className={clsx(styles.wrapper_footer)}>
            <div ref={footerTop} className={clsx(styles.footer_top)}>
                <a href="/" className={clsx(styles.item_link)}>
                    <img src='https://cdn.shopify.com/s/files/1/1357/1399/t/4/assets/home3_partners_logo_1.png?v=89816583231161494021467607063' alt='img'></img>
                </a>
                <a href="/" className={clsx(styles.item_link)}>
                    <img src='https://cdn.shopify.com/s/files/1/1357/1399/t/4/assets/home3_partners_logo_2.png?v=62348993879487218271467607063' alt='img'></img>
                </a>
                <a href="/" className={clsx(styles.item_link)}>
                    <img src='https://cdn.shopify.com/s/files/1/1357/1399/t/4/assets/home3_partners_logo_3.png?v=36324222135291836581467607063' alt='img'></img>
                </a>
                <a href="/" className={clsx(styles.item_link)}>
                    <img src='https://cdn.shopify.com/s/files/1/1357/1399/t/4/assets/home3_partners_logo_4.png?v=101900402769331104281467607063' alt='img'></img>
                </a>
                <a  href="/"className={clsx(styles.item_link)}>
                    <img src='https://cdn.shopify.com/s/files/1/1357/1399/t/4/assets/home3_partners_logo_5.png?v=123149318417937501291467607063' alt='img'></img>
                </a>
                <a  href="/"className={clsx(styles.item_link)}>
                    <img src='https://cdn.shopify.com/s/files/1/1357/1399/t/4/assets/home3_partners_logo_6.png?v=145146172359666420491467607063' alt='img'></img>
                </a>
                <a  href="/"className={clsx(styles.item_link)}>
                    <img src='https://cdn.shopify.com/s/files/1/1357/1399/t/4/assets/home3_partners_logo_1.png?v=89816583231161494021467607063' alt='img'></img>
                </a>
            </div>  

            <div className={clsx(styles.footer_newsletter)}>
                <div className={clsx(styles.newsletter_title)}>
                    <h5>Subscribe Newsletter And Get Discount !</h5>
                </div>
                <form className={clsx(styles.newsletter_form)}>
                    <input className={clsx(styles.newsletter_input)} placeholder='Email address...'></input>
                    <button type='submit' className={clsx(styles.btn_newsletter_send)}>
                        <FontAwesomeIcon icon={solid('paper-plane')} />
                    </button>
                </form>
            </div>

            <div className={clsx(styles.footer_copyright)}>
                <span className={clsx(styles.cr_info)}>
                    Copyright © 2022 Comeback For Mediacenter. All Rights Reserved
                </span>
                <div className={clsx(styles.footer_social)}>
                    <a href="https://www.facebook.com/shopify" className={clsx(styles.social_link)} target='blank'>
                        <FontAwesomeIcon icon={brands('facebook-f')} />
                    </a>   
                    <a href="https://twitter.com/shopify" className={clsx(styles.social_link)} target='blank'>
                        <FontAwesomeIcon icon={brands('twitter')} />
                    </a>  
                    <a href="https://plus.google.com/+shopify" className={clsx(styles.social_link)} target='blank'>
                        <FontAwesomeIcon icon={brands('google')} />
                    </a>   
                    <a href="https://www.pinterest.com/shopify/" className={clsx(styles.social_link)} target='blank'>
                        <FontAwesomeIcon icon={brands('pinterest')} />
                    </a>
                    <a href="https://www.instagram.com/shopify/" className={clsx(styles.social_link)} target='blank'>
                        <FontAwesomeIcon icon={brands('instagram')} />
                    </a>   
                    <a href="https://www.youtube.com/user/shopify" className={clsx(styles.social_link)} target='blank'>
                        <FontAwesomeIcon icon={brands('youtube')} />
                    </a> 
                    <a href="https://wordpress.org/" className={clsx(styles.social_link)} target='blank'>
                        <FontAwesomeIcon icon={brands('wordpress')} />
                    </a> 
                </div>
            </div>
        </div>
    )
};

export default Footer;