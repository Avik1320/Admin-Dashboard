import React, { useContext } from 'react'
import { ThemeContext } from '../../Theme'
import Header from './Header/Header';
import Content from './Content/Content';

const Main = () => {

    const { DarkTheme } = useContext(ThemeContext);

    return (
        <div className={`main-part ${DarkTheme && "dark"}`}>
            <Header />
            <Content/>
        </div>
    )
}

export default Main
