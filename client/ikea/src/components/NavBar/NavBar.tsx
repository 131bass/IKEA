import { useEffect } from "react"
import { Link } from 'react-router-dom'
import cameraIcon from './images/camera.png'
import heartIcon from './images/heart.png'
import productsIcon from './images/products.png'
import profileIcon from './images/profile.png'
import roomsIcon from './images/rooms.png'
import searchIcon from './images/search.png'
import cancelIcon from './images/cancel.png'
import "./navBar.scss"
import { useGetSearch, useRenderNav, useScrollBar, useShowSideBar } from './navBarHooks'
import Login, { LoginMode } from "../Login/Login"

const NavBar = () => {

    const { backward, forward, scroll } = useScrollBar()

    const { search, getSearch } = useGetSearch()

    const { arrToRender, showCategories } = useRenderNav()

    const { visiable, changeSideBarVisiable } = useShowSideBar()

    const navLinksArr = [
        {
            name: "מוצרים",
            imgURL: productsIcon
        },
        {
            name: "חדרים",
            imgURL: roomsIcon
        },
        { name: "מוצרים חדשים וקולקציות" },
        { name: "השראה ורעיונות" },
        { name: "תאום פגישות" },
        { name: "שירות לקוחות" },
        { name: "שעות פעילות" },
        { name: "לאכול באיקאה" },
        { name: "עוד" }

    ]
    useEffect(() => {
        showCategories("מוצרים")
    }, [])


    return (
        <>
            {visiable ?
                <div className="side">
                    <div className="formLogin">
                        <img src={cancelIcon} alt="cancel" onClick={changeSideBarVisiable} />
                        <Login loginMode={LoginMode.SIDEBAR} />
                    </div>
                </div>
                : null}
            <nav>
                <div className="topNav">
                    <Link to="/">
                        <img src="https://www.ikea.com/il/he/static/ikea-logo.f7d9229f806b59ec64cb.svg" alt="ikea logo" />
                    </Link>
                    <div className="navSearchBox">
                        <img src={searchIcon} alt="search" />
                        <input type="text" name='navSearch' id='navSearch' value={search} placeholder='מה לחפש לך?' onInput={(ev) => { getSearch((ev.target as HTMLInputElement).value) }} />
                        <button><img src={cameraIcon} alt="camera" /></button>
                    </div>
                    <button className="loginOrRegister" onClick={changeSideBarVisiable} ><span><img src={profileIcon} alt="profile" /> </span>היי! התחברו או הירשמו</button>
                    <button className='addToWishList'><Link to="/favourites"><img src={heartIcon} alt="heart" /></Link></button>
                </div>
                <div className="navLinks">
                    <div className="links">
                        {navLinksArr.map((link) => {
                            return (
                                <div className="link">
                                    {link.imgURL ?
                                        <span onClick={() => { showCategories(link.name) }}>
                                            <img src={link.imgURL} alt={link.name} />{link.name}</span>
                                        :
                                        <span onClick={() => { showCategories(link.name) }}>{link.name}</span>}
                                </div>
                            )
                        })}
                    </div>
                    {arrToRender.withIMG ?
                        <>
                            <div className="navCategoriesWrapper">
                                <div className='arrowButtons'>
                                    <button className="backward" style={scroll == 0 ? { display: "none" } : { display: "block" }} onClick={backward}>&lt;</button>
                                    <button className='forward' style={scroll > outerWidth + 140 ? { display: "none" } : { display: "block" }} onClick={forward}>&gt;</button>
                                </div>
                                <div className="navCategories" style={{ left: `${scroll}px` }}>
                                    {arrToRender.categories.map((item) => {
                                        return (
                                            <>
                                                <div className='category'>
                                                    <img src={item.imgURL} alt={item.name} />
                                                    <p>{item.name}</p>
                                                </div>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="scrollbar" style={{ right: `${scroll / 2.3}px` }}></div>
                        </>
                        :
                        <div className="navCategoriesWrapper" style={{ borderBottom: "none" }}>
                            <div className="navCategories_withoutIMG" style={arrToRender.categories.length > 5 ? { columnCount: "2", width: "50%" } : {}}>
                                {arrToRender.name == "עוד" || arrToRender.name == "שעות פעילות" ? null : <p className="showAll" style={{ fontWeight: "bold" }}>הצג הכל - {arrToRender.name}</p>}
                                {arrToRender.categories.map((item) => {
                                    return (
                                        <>
                                            <div className='category'>
                                                <p>{item.name}</p>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    }
                </div>

            </nav>
        </>
    )
}

export default NavBar