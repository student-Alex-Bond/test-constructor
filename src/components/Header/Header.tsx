import React from 'react';
import styles from './Header.module.css'
import { UserMenu } from '../UserMenu/UserMenu';



const Header = () => {
    const isAuth = true

    return (
        <div className={styles.header}>
            {isAuth ? <UserMenu /> :
                <label>
                    <a>Регистрация</a>
                    <a>Войти</a></label>}
        </div>

    );
};

export default Header;