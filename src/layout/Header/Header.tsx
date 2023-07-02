import React from 'react'
import s from './Header.module.scss'

type Props = {
    children: React.ReactNode,
}

const Header = ({ children }: Props) => {
    return (
        <header className={s.header__wrapper}>
            {children}
        </header>
    )
}

export default Header