import React from 'react'
import s from './Content.module.scss'

type Props = {
    children: React.ReactNode,
}

const Content = ({ children }: Props) => {
    return (
        <div className={s.content}>
            {children}
        </div>
    )
}

export default Content