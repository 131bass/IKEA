import "./navBar.scss"
import { useGetSearch, useRenderNav, useScrollBar } from './navBarHooks'
import searchIcon from './images/search.png'
import cameraIcon from './images/camera.png'
import heartIcon from './images/heart.png'
import profileIcon from './images/profile.png'
import productsIcon from './images/products.png'
import roomsIcon from './images/rooms.png'
import { useEffect } from "react"

const NavBar = () => {

    const { backward, forward, scroll } = useScrollBar()

    const { search, getSearch } = useGetSearch()

    const { arrToRender, showCategories } = useRenderNav()
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
        { name: "תיאום פגישות" },
        { name: "שירות לקוחות" },
        { name: "שעות פעילות" },
        { name: "לאכול באיקאה" },
        { name: "עוד" }

    ]

   

    return (
        <nav>
            <div className="topNav">
                <img src="https://www.ikea.com/il/he/static/ikea-logo.f7d9229f806b59ec64cb.svg" alt="ikea logo" />
                <div className="navSearchBox">
                    <img src={searchIcon} alt="search" />
                    <input type="text" name='navSearch' id='navSearch' value={search} placeholder='מה לחפש לך?' onInput={(ev) => { getSearch((ev.target as HTMLInputElement).value) }} />
                    <button><img src={cameraIcon} alt="camera" /></button>
                </div>
                <button><span><img src={profileIcon} alt="profile" /> </span>היי! התחברו או הירשמו</button>
                <button className='addToWishList'><img src={heartIcon} alt="heart" /></button>
            </div>
            <div className="navLinks">
                <div className="links">
                    {navLinksArr.map((link) => {
                        return (
                            <>
                                {link.imgURL ?
                                    <span onClick={() => {
                                        showCategories(link.name)
                                    }}>
                                        <img src={link.imgURL} alt={link.name} />{link.name}</span>
                                    : <span>{link.name}</span>}
                            </>
                        )
                    })}
                </div>
                <div className="navCategoriesWrapper">
                    <div className='arrowButtons'>

                        <button className="backward" style={scroll == 0 ? { display: "none" } : { display: "block" }} onClick={backward}>&lt;</button>
                        <button className='forward' style={scroll > outerWidth + 140 ? { display: "none" } : { display: "block" }} onClick={forward}>	&gt;</button>
                    </div>

                    <div className="navCategories" style={{ left: `${scroll}px` }}>
                        {arrToRender.map((item) => {
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
            </div>
        </nav>
    )
}

export default NavBar