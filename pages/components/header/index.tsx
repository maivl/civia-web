import { FC } from 'react';
import classnames from 'classnames/bind';
import styles from './index.module.css';

const cls = classnames.bind(styles);

const Header: FC<any> = () => {

    return (
        <div className={styles.head}>
            <div className={styles.content}>
                
            </div>
        </div>
    );
};

export default Header;