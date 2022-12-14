import { FC } from 'react';
import Head from 'next/head';
import classnames from 'classnames/bind';
import styles from './index.module.css';

const cls = classnames.bind(styles);

import Header from '../header';

const Layout:FC<any> = ({ children }) => {

    return (
        <div className={cls('wrapper')}>
            <Head>
                <title>Civia</title>
                <meta name="description" content="Civia" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <Header />
                {
                    children
                }
            </main>
            <footer className={styles.footer}>

            </footer>
        </div>
    );
};

export default Layout;