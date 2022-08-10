import clsx from 'clsx';
import styles from './Header.module.scss';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import { Wrapper as PopperWrapper } from '../../Popper';

function Header() {
    const[isVisible, setIsVisible] = useState(false);

    const logoRef = useRef()
    const mainHeader = useRef()
    const headerSearch = useRef()
    const mainHeaderLogo = useRef()
    const navTop = useRef()
    const navArea = useRef()
    const navAreaItem = useRef()
    const navCart = useRef()
    const templatesContainer = useRef()
    const megaContainer = useRef()
    const megaBoxItem = useRef()
    const menuMega = useRef()
    const menuMega1 = useRef()
    const menuMegaImg = useRef()
    const menuMegaImg1 = useRef()
    const floatRightIcon = useRef()

    useEffect(() => {
        window.onscroll = () => {
            const scroll = window.scrollY
            const topHeaderLogo = logoRef.current
            const mainHeaderBox = mainHeader.current
            const mainHeaderSearch = headerSearch.current
            const mainHeaderLogoScroll = mainHeaderLogo.current
            const navTopAffix = navTop.current
            const navAreaAffix = navArea.current
            const navAreaItemAffix = navAreaItem.current
            const navCartAffix = navCart.current
            const templatesContainerAffix = templatesContainer.current
            const megaContainerAffix = megaContainer.current
            const megaBoxItemAffix = megaBoxItem.current
            const menuMegaAffix = menuMega.current
            const menuMegaAffix1 = menuMega1.current
            const menuMegaImgAffix = menuMegaImg.current
            const menuMegaImgAffix1 = menuMegaImg1.current
            const floatRightIconAffix = floatRightIcon.current

            if(scroll === 0) {
                topHeaderLogo.classList.remove(clsx(styles.db))
                mainHeaderBox.classList.remove(clsx(styles.main_affix))
                mainHeaderSearch.classList.remove(clsx(styles.search_affix))
                mainHeaderLogoScroll.classList.remove(clsx(styles.logo_affix))
                navTopAffix.classList.remove(clsx(styles.nav_top_affix))
                navAreaAffix.classList.remove(clsx(styles.nav_area_affix))
                navAreaItemAffix.classList.remove(clsx(styles.nav_area_item_affix))
                navCartAffix.classList.remove(clsx(styles.nav_cart_affix))
                templatesContainerAffix.classList.remove(clsx(styles.templates_container_affix))
                megaContainerAffix.classList.remove(clsx(styles.mega_container_affix))
                megaBoxItemAffix.classList.remove(clsx(styles.mega_box_item_affix))
                menuMegaAffix.classList.remove(clsx(styles.menu_mega_affix))
                menuMegaAffix1.classList.remove(clsx(styles.menu_mega_affix))
                menuMegaImgAffix.classList.remove(clsx(styles.menu_mega_img_affix))
                menuMegaImgAffix1.classList.remove(clsx(styles.menu_mega_img_affix))
                floatRightIconAffix.classList.remove(clsx(styles.active))

            } else {
                topHeaderLogo.classList.add(clsx(styles.db))
                mainHeaderBox.classList.add(clsx(styles.main_affix))
                mainHeaderSearch.classList.add(clsx(styles.search_affix))
                mainHeaderLogoScroll.classList.add(clsx(styles.logo_affix))
                navTopAffix.classList.add(clsx(styles.nav_top_affix))
                navAreaAffix.classList.add(clsx(styles.nav_area_affix))
                navAreaItemAffix.classList.add(clsx(styles.nav_area_item_affix))
                navCartAffix.classList.add(clsx(styles.nav_cart_affix))
                templatesContainerAffix.classList.add(clsx(styles.templates_container_affix))
                megaContainerAffix.classList.add(clsx(styles.mega_container_affix))
                megaBoxItemAffix.classList.add(clsx(styles.mega_box_item_affix))
                menuMegaAffix.classList.add(clsx(styles.menu_mega_affix))
                menuMegaAffix1.classList.add(clsx(styles.menu_mega_affix))
                menuMegaImgAffix.classList.add(clsx(styles.menu_mega_img_affix))
                menuMegaImgAffix1.classList.add(clsx(styles.menu_mega_img_affix))
                floatRightIconAffix.classList.add(clsx(styles.active))
            }
        }

        // btn scroll top
        const toggleVisibility = () => {
            if(window.pageYOffset) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }

        window.addEventListener('scroll', toggleVisibility);
        
        return () => {
         window.removeEventListener('scroll', toggleVisibility);
        }
       
    }, []);

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
    
    return (
        <header className={clsx(styles.header)}>
            <section className={clsx(styles.top_header)}>
                <div className={clsx(styles.wrapper)}>
                    <div className={clsx(styles.container)}>
                        <div className={clsx(styles.group_left)}>
                            <a href='/' className={clsx(styles.btn_left)}>
                                <img className={clsx(styles.currency_img)} src="https://cdn.shopify.com/s/files/1/1357/1399/t/4/assets/USD.png?v=66819380326415948751467607071" alt="USA"></img>
                                <p className={clsx(styles.currency_code)}>USD</p>
                                <span className={clsx(styles.currency_icon)}>
                                     <FontAwesomeIcon icon={solid('caret-down')} />  
                                </span>
                            </a>
                        </div>

                        <div ref={logoRef} className={clsx(styles.group_center)}>
                            <a href="/" className={clsx(styles.group_center_logo)}>
                                <img src='https://cdn.shopify.com/s/files/1/1357/1399/t/4/assets/logo.png?v=41637290929376413641467683750' alt='logo'></img>
                            </a>
                        </div>

                        <div className={clsx(styles.group_right)}>
                            <Tippy
                                interactive
                                delay={[0, 40]}
                                offset={[12, 8]}
                                render={attrs => (
                                    <div className={clsx(styles.tippy_login)} tabIndex="-1" {...attrs}>
                                        <div className={clsx(styles.customer_login)}>
                                            <div className={clsx(styles.body_box)}>
                                                <div className={clsx(styles.box_content)}>
                                                    <label>Email Address *</label>
                                                    <input className={clsx(styles.box_input)} type="Email"></input>
                                                </div>

                                                <div className={clsx(styles.box_content)}>
                                                    <label>Email Address *</label>
                                                    <input className={clsx(styles.box_input)} type="Email"></input>
                                                </div>
                                                
                                                <div className={clsx(styles.box_content)}>
                                                    <p>*required field</p>
                                                    <a href="/">? Forgot your password</a>
                                                </div>
                                                
                                                <button className={clsx(styles.btn_login)} type="submit">LOGIN</button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            >
                                <div className={clsx(styles.list_right)}>
                                    <a href="/" className={clsx(styles.list_item)}>Login</a>
                                </div>
                            </Tippy>

                            <div className={clsx(styles.list_right)}>
                                <a href="/" className={clsx(styles.list_item)}>Register</a>
                            </div>

                            <div className={clsx(styles.list_right)}>
                                <a href="/" className={clsx(styles.list_item)}>Wishlist</a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>    

            <section ref={mainHeader} className={clsx(styles.main_header)}>
                <div className={clsx(styles.wrapper)}>
                    <div className={clsx(styles.container)}>
                        <div className={clsx(styles.main_header_inner)}>
                            <div ref={navTop} className={clsx(styles.nav_top)}>
                                <div className={clsx(styles.nav_search)}>
                                    <div ref={headerSearch} className={clsx(styles.search)}>
                                        <Tippy
                                            interactive
                                            placement='bottom-end'
                                            delay={[0, 40]}
                                            offset={[12, 8]}
                                            render={attrs => (
                                                <PopperWrapper><p>ket qua tim kiem</p></PopperWrapper>
                                            )}
                                        >
                                            <input className={clsx(styles.input_search)} placeholder="Search something ..."></input>
                                        </Tippy>
                                        
                                        <input className={clsx(styles.icon_search)} type="image" src="//cdn.shopify.com/s/files/1/1357/1399/t/4/assets/icon-search.png?v=142929352527412382471467607065" alt="search"></input>
                                    </div>
                                </div>
                                <div ref={mainHeaderLogo} className={clsx(styles.nav_logo)}>
                                    <a href="/">
                                        <img src="https://cdn.shopify.com/s/files/1/1357/1399/t/4/assets/logo.png?v=41637290929376413641467683750" alt='logo'></img>
                                    </a>
                                </div>

                                    <div ref={navCart} className={clsx(styles.nav_cart)}>
                                    <Tippy
                                        interactive
                                        placement='bottom-end'
                                        render={attrs => (
                                            <div className={clsx(styles.dropdown_menu)} tabIndex="-1" {...attrs}>
                                                <PopperWrapper>
                                                    <div className={clsx(styles.dropdown_box)}>
                                                        <p className={clsx(styles.heading)}> Your shopping cart is empty.</p>
                                                        <button href="/" className={clsx(styles.cart_btn)}>Continue Shopping</button>
                                                    </div>
                                                </PopperWrapper>
                                            </div>
                                        )}
                                    >
                                        <div className={clsx(styles.cart_info_group)}>
                                            <a className={clsx(styles.cart_group)} href="/">
                                                <img className={clsx(styles.cart_img)} src="https://cdn.shopify.com/s/files/1/1357/1399/t/4/assets/bg-cart1.png?v=40538808608174703871468291936" alt='cart'></img>
                                                <p><span className={clsx(styles.cart_info)}>MY CART 0</span></p>
                                            </a>
                                        </div>
                                    </Tippy>
                                </div>
                            </div>

                            <div ref={navArea} className={clsx(styles.navigation_area)}>
                                <div className={clsx(styles.navigation_links)}>     
                                    <Link ref={navAreaItem} to="/" className={clsx(styles.nav_item, styles.active)}>HOME</Link>

                                    {/* SHOP MENU */}
                                    <Tippy
                                        interactive
                                        placement='bottom-start'
                                        render={attrs => (
                                            <PopperWrapper>
                                                <ul className={clsx(styles.menu_shop)}>
                                                    <li className={clsx(styles.menu_shop_item)}>
                                                        <Tippy
                                                            interactive
                                                            placement='right'
                                                            render={attrs => (
                                                                <PopperWrapper tabIndex="-1" {...attrs}>
                                                                    <div className={clsx(styles.menu_shop_children)}>
                                                                        <div className={clsx(styles.menu_shop_children_item)}>
                                                                            <a className={clsx(styles.menu_shop_children_link, styles.primary)} href="/">Spring collection</a>
                                                                        </div>
                                                                        <div className={clsx(styles.menu_shop_children_item)}>
                                                                            <a className={clsx(styles.menu_shop_children_link)} href="/">Summer collection</a>
                                                                        </div>
                                                                        <div className={clsx(styles.menu_shop_children_item)}>
                                                                            <a className={clsx(styles.menu_shop_children_link)} href="/">Autumn collection</a>
                                                                        </div>
                                                                        <div className={clsx(styles.menu_shop_children_item)}>
                                                                            <a className={clsx(styles.menu_shop_children_link)} href="/">Winter collection</a>
                                                                        </div>
                                                                    </div>
                                                                </PopperWrapper>
                                                            )}
                                                        >
                                                            <a className={clsx(styles.menu_shop_link)} href="/">
                                                                Shorts
                                                                <FontAwesomeIcon className={clsx(styles.menu_link_icon)} icon={solid('angle-down')} />
                                                            </a>
                                                        </Tippy>
                                                    </li>
                                                    <li className={clsx(styles.menu_shop_item)}>
                                                        <a className={clsx(styles.menu_shop_link)} href="/">Dresses</a>
                                                    </li>
                                                    <li className={clsx(styles.menu_shop_item)}>
                                                        <a className={clsx(styles.menu_shop_link)} href="/">Trousers</a>
                                                    </li>
                                                    <li className={clsx(styles.menu_shop_item)}>
                                                        <a className={clsx(styles.menu_shop_link)} href="/">Skirts</a>
                                                    </li>
                                                    <li className={clsx(styles.menu_shop_item)}>
                                                        <a className={clsx(styles.menu_shop_link)} href="/">Jeans</a>
                                                    </li>
                                                </ul>
                                            </PopperWrapper>
                                        )}
                                    >
                                        <Link to="/shop" className={clsx(styles.nav_item)}>
                                            SHOP
                                            <span className={clsx(styles.nav_item_icon)}><FontAwesomeIcon icon={solid('angle-down')} /></span> 
                                        </Link>
                                    </Tippy>

                                    {/* templates menu */}
                                    <Tippy
                                        interactive
                                        render={attrs => (
                                                <div className={clsx(styles.Templates_menu)}>
                                                    <PopperWrapper >
                                                        <div ref={templatesContainer} className={clsx(styles.Templates_container)} tabIndex="-1" {...attrs}>
                                                            <div className={clsx(styles.box_item)}>
                                                                <ul className={clsx(styles.menu_item)}>
                                                                    <li className={clsx(styles.menu_title)}>Accessories</li>
                                                                    <li className={clsx(styles.menu_info)}>Jewellery</li>
                                                                    <li className={clsx(styles.menu_info)}>Sunglasses</li>
                                                                    <li className={clsx(styles.menu_info)}>Scarves</li>
                                                                    <li className={clsx(styles.menu_info)}>Headwear</li>
                                                                </ul>
                                                                <ul className={clsx(styles.menu_item)}>
                                                                    <li className={clsx(styles.menu_title)}>Sample</li>
                                                                    <li className={clsx(styles.menu_info)}>All Collections</li>
                                                                    <li className={clsx(styles.menu_info)}>All Products</li>
                                                                    <li className={clsx(styles.menu_info)}>Blog Post</li>
                                                                    <li className={clsx(styles.menu_info)}>Shopping Cart</li>
                                                                </ul>
                                                                <ul className={clsx(styles.menu_item)}>
                                                                    <li className={clsx(styles.menu_title)}>footer link 2</li>
                                                                    <li className={clsx(styles.menu_info)}>Store Location</li>
                                                                    <li className={clsx(styles.menu_info)}>Site map</li>
                                                                    <li className={clsx(styles.menu_info)}>Newsletter</li>
                                                                    <li className={clsx(styles.menu_info)}>Contact us</li>
                                                                </ul>
                                                                <ul className={clsx(styles.menu_item)}>
                                                                    <li className={clsx(styles.menu_title)}>Pages</li>
                                                                    <li className={clsx(styles.menu_info)}>About us</li>
                                                                    <li className={clsx(styles.menu_info)}>Contact us</li>
                                                                    <li className={clsx(styles.menu_info)}>LookBook</li>
                                                                    <li className={clsx(styles.menu_info)}>Faqs</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                     </PopperWrapper>
                                                </div>
                                        )}
                                    >
                                        <a href="/" className={clsx(styles.nav_item)}>
                                            TEMPLATES
                                            <span className={clsx(styles.nav_item_icon)}><FontAwesomeIcon icon={solid('angle-down')} /></span> 
                                        </a>
                                    </Tippy>
                                    
                                    {/* mega menu */}
                                    <Tippy
                                        interactive
                                        render={attrs => (
                                            <div className={clsx(styles.Templates_menu)}>
                                                <PopperWrapper >
                                                    <div ref={megaContainer} className={clsx(styles.Mega_container)} tabIndex="-1" {...attrs}>
                                                        <div ref={megaBoxItem} className={clsx(styles.mega_box_item)}>
                                                            <ul className={clsx(styles.menu_item)}>
                                                                <li className={clsx(styles.menu_title)}>Sample</li>
                                                                <li className={clsx(styles.menu_info_mega)}>All Collections</li>
                                                                <li className={clsx(styles.menu_info_mega)}>All Products</li>
                                                                <li className={clsx(styles.menu_info_mega)}>Blog Post</li>
                                                                <li className={clsx(styles.menu_info_mega)}>Shopping Cart</li>
                                                            </ul>

                                                            <div ref={menuMega} className={clsx(styles.menu_mega)}>
                                                                <div ref={menuMegaImg} className={clsx(styles.mega_img)}>
                                                                    <img src="https://cdn.shopify.com/s/files/1/1357/1399/t/4/assets/mega2-col1-img.jpg?v=38685815443228874031467607069" alt='img' ></img>
                                                                </div>
                                                                <div className={clsx(styles.mega_info)}>
                                                                    <p className={clsx(styles.mega_info_heading)}>End hunger lasting</p>
                                                                    <p className={clsx(styles.mega_info_title)}>Vaccines cause save the world beneficiaries agency global environmental public sector recognition.</p>
                                                                    <a className={clsx(styles.mega_info_btn)} href="/">Read more <FontAwesomeIcon icon={solid('angle-double-right')} /></a>
                                                                </div>
                                                            </div>  
                                                            
                                                            <div ref={menuMega1} className={clsx(styles.menu_mega)}>
                                                                <div ref={menuMegaImg1} className={clsx(styles.mega_img)}>
                                                                    <img src="https://cdn.shopify.com/s/files/1/1357/1399/t/4/assets/mega2-col2-img.jpg?v=134835624276111448941467607069" alt='img' ></img>
                                                                </div>
                                                                <div className={clsx(styles.mega_info)}>
                                                                    <p className={clsx(styles.mega_info_heading)}>End hunger lasting</p>
                                                                    <p className={clsx(styles.mega_info_title)}>Vaccines cause save the world beneficiaries agency global environmental public sector recognition.</p>
                                                                    <a className={clsx(styles.mega_info_btn)} href="/">Read more <FontAwesomeIcon icon={solid('angle-double-right')} /></a>
                                                                </div>
                                                            </div>  
                                                        </div>
                                                    </div>
                                                </PopperWrapper>
                                            </div>
                                        )}
                                    >
                                        <a href="/" className={clsx(styles.nav_item)}>
                                            MEGA MENU
                                            <span className={clsx(styles.nav_item_icon)}><FontAwesomeIcon icon={solid('angle-down')} /></span> 
                                        </a>
                                    </Tippy>

                                    <a href="/" className={clsx(styles.nav_item)}>DEAL</a>
                                    <a href="/" className={clsx(styles.nav_item)}>BLOG</a>
                                    <a href="/" className={clsx(styles.nav_item)}>LOOKBOOK</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>    

            <div ref={floatRightIcon} onClick={handleClick} className={clsx(styles.float_right_icon)}>
                    <FontAwesomeIcon icon={solid('angle-up')} />
            </div>      
        </header>
    );
}

export default Header;