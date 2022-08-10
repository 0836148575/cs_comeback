import clsx from 'clsx';
import styles from './DefaultLayout.module.scss';
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'


function DefaultLayout( {children} ) {
    return ( 
        <div className={clsx(styles.wrapper)}>
            <Header />
            <div className={clsx(styles.container)}>
                {children}
            </div>
            <Footer />
        </div>
     );
}

export default DefaultLayout;
