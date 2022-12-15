import { FC } from 'react';
import Head from 'next/head';
import classnames from 'classnames/bind';
import styles from './index.module.css';

const cls = classnames.bind(styles);

import Header from '../header';
import Footer from '../footer';

const Layout:FC<any> = ({ children }) => {

    return (
        <div className={cls('wrapper')}>
            <Head>
                <title>Civia</title>
                <meta name="description" content="Civia" />
                <link rel="icon" href="/images/civia-icon.svg" />
            </Head>
            <main className={styles.main}>
                <Header />
                {
                    children
                }
                <Footer />
            </main>
        </div>
    );
};

export default Layout;