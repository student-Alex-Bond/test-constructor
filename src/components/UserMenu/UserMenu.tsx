import { userInfo } from "os";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import avatar from '../../date/user-icon-4.png'
import styles from './UserMenu.module.css';

type UserMenuType = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const UserMenu = (props: UserMenuType) => {

    const [viewMenu, setViewMenu] = React.useState<boolean>(true)

    const collapse = () => {
        setViewMenu(!viewMenu)
    }

    let finalClass = `${styles.menu}`

    if (viewMenu) {
        finalClass = `${styles.menu} ${styles.menuCollapsed}`
    }

    return (
        <div className={styles.wrapper}>
            <img className={styles.ava}
                src={avatar} alt={'avatar photo'}
                onClick={collapse} />
            <div className={finalClass} onClick={collapse}>
                <div>Профиль</div>
                <div>Мои тесты</div>
                <div>Завершенные</div>
                <div>Выйти</div>
            </div>
        </div>
    )
}

export { UserMenu }