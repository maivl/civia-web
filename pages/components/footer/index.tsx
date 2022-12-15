import { FC } from 'react';
import Image from 'next/image';
import classnames from 'classnames/bind';
import styles from './index.module.css';

import CiviaLogo from 'public/images/civia-logo2.svg';
import CiviaIcon from 'public/images/civia-icon2.svg';

const cls = classnames.bind(styles);

const Footer:FC<any> = () => {

    return (
        <div className={cls('footer')}>
            <div>
                <table className={cls('info-table')}>
                    <thead>
                        <tr>
                            <td>Contact Us</td>
                            <td>Common Problem</td>
                            <td>Terms & Agreements</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Civia.org</td>
                            <td>What is CIVIA?</td>
                            <td>Platform User Service Agreement</td>
                        </tr>
                        <tr>
                            <td>@CIVIA</td>
                            <td>What is $CIV?</td>
                            <td>Privacy Terms</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>How to join CIVIA?</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <ul className={cls('copy')}>
                    <li>| 沪ICP备2022019882</li>
                    <li>31010402009709</li>
                    <li>04-0104</li>
                    <li>Copyright @2022 Shanghai CIVIA Co., Ltd. All rights reserved</li>
                </ul>
            </div>
            <div>
                <div className={cls('icon-logo')}>
                    <Image src={CiviaIcon} alt='' />
                    <Image src={CiviaLogo} alt='' />
                </div>
            </div>
        </div>
    );
};

export default Footer;