import clsx from 'clsx';
import styles from './DefaultLayout.module.scss';
import Header from '../components/Header/Header'
import Carousel from '../components/carousel-inner/Carousel'
import MainContent from '../components/MainContent/MainContent'
import Footer from '../components/Footer/Footer'


function DefaultLayout() {
    return ( 
        <div className={clsx(styles.wrapper)}>
            <Header />
            <Carousel />
            <div className={clsx(styles.container)}>
                <MainContent />
            </div>
            <Footer />
        </div>
     );
}

export default DefaultLayout;
