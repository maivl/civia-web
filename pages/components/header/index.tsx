import { FC } from 'react';
import Image from 'next/image';
import classnames from 'classnames/bind';
import styles from './index.module.css';

import { useState, useEffect } from 'react';
import VideoCom from '../video';
import CiviaLogo from 'public/images/civia-logo.svg';
import CiviaIcon from 'public/images/civia-icon.svg';

const cls = classnames.bind(styles);

const Header: FC<any> = () => {
    const [ clientWidth, setWidth ] = useState(0);
    const [ clientHeight, setHeight ] = useState(0);
    useEffect(() => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth);
            console.log('----- width -----', window.innerWidth);
            setHeight(window.innerHeight);
            console.log('----- height -----', window.innerHeight);
        });
    }, []);

    return (
        <div className={cls('head')} style={{ height: clientHeight, width: clientWidth }}>
            <div className={cls('flex', 'justify-between')}>
                <div className={cls('logo-left')} style={{ marginLeft: 180 }}>
                    <Image src={CiviaIcon} alt='' />
                </div>
                <div className={cls('logo-right')} style={{ marginRight: 180 }}>
                    <Image src={CiviaLogo} alt='' />
                </div>
            </div>
            <div className={cls('content', 'nav', 'lg:container', 'lg:mx-auto', 'relative')}>
                
                <VideoCom />
                <div className={cls('descriptioin', 'align-center')}>
                    <div>CIVIA the Social Wallet</div>
                    <div>Opening of the Decentralized Society</div>
                </div>
            </div>
        </div>
    );
};

export default Header;