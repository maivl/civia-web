import { FC } from 'react';
import Image from 'next/image';
import classnames from 'classnames/bind';
import styles from './index.module.css';

import VideoCom from '../video';

import CiviaLogo from 'public/images/civia-logo.svg';
import CiviaIcon from 'public/images/civia-icon.svg';

const cls = classnames.bind(styles);

const Header: FC<any> = () => {

    return (
        <div className={cls('head')}>
            <div className={cls('content', 'nav', 'lg:container', 'lg:mx-auto', 'relative')}>
                <div className={cls('flex', 'justify-between')}>
                    <div className={cls('w-8', 'py-3')}>
                        <Image src={CiviaIcon} alt='' />
                    </div>
                    <div className={cls('w-8', 'py-3')}>
                        <Image src={CiviaLogo} alt='' />
                    </div>
                </div>
                <VideoCom />
                <div className={cls('descriptioin', 'absolute', 'align-center')}>
                    <div>CIVIA the Social Wallet</div>
                    <div>Opening of the Decentralized Society</div>
                </div>
            </div>
        </div>
    );
};

export default Header;