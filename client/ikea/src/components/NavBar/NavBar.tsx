import { useEffect } from "react"
import { Link } from 'react-router-dom'
import categoriesArr from "../../utils/categories"
import Login, { LoginMode } from "../Login/Login"
import cameraIcon from './images/camera.png'
import cancelIcon from './images/cancel.png'
import heartIcon from './images/heart.png'
import profileIcon from './images/profile.png'
import searchIcon from './images/search.png'
import "./navBar.scss"
import { useGetSearch, useRenderNav, useRenderSubCategories, useScrollBar, useShowSideBar } from './navBarHooks'

const NavBar = () => {

    const { backward, forward, scroll } = useScrollBar()

    const { search, getSearch } = useGetSearch()

    const { arrToRender, showCategories } = useRenderNav()

    const { sideBarVisiable, changeSideBarVisiable } = useShowSideBar()

    const { subCatArr, subCatVisiable, setSubCatVisiable, showSubCategories } = useRenderSubCategories()

    useEffect(() => {
        showCategories("מוצרים")
    }, [])


    return (
        <>
            {sideBarVisiable ?
                <div className="side">
                    <div className="formLogin">
                        <img src={cancelIcon} alt="cancel" onClick={changeSideBarVisiable} />
                        <Login loginMode={LoginMode.SIDEBAR} />
                    </div>
                </div>
                : null}
            <nav onClick={() => {

            }}>
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
                        {categoriesArr.map((element) => {
                            return (
                                <div className={arrToRender.name == element.name ? "link action" : "link"} >
                                    {element.imgURL ?
                                        <span onClick={() => { showCategories(element.name) }}>
                                            <img src={element.imgURL} alt={element.name} />{element.name}</span>
                                        :
                                        <span onClick={() => { showCategories(element.name) }}>{element.name}</span>}
                                </div>
                            )
                        })}
                    </div>
                    {arrToRender.imgURL ?
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
                                                <div className="category" onClick={() => {
                                                    if (item.subCategories) {
                                                        showSubCategories(item.subCategories)
                                                    }

                                                }} >
                                                    <img className={item.subCategories != subCatArr && subCatVisiable ? "blur" : ""} src={item.imgURL} alt={item.name} />
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
                <div className={subCatVisiable ? "subCategories" : "subCategories hide"} style={subCatArr && subCatArr.length > 10 ? { columnCount: "2" } : {}}>
                    {subCatArr ?
                        <>
                            <h4 style={{ columnSpan: "all" }}>
                                <Link to={`/category/${arrToRender.categories.find((catArr) => catArr.subCategories == subCatArr)?.name}`}>

                                    <span>לכל קטגוריית </span>
                                    {arrToRender.categories.find((catArr) => catArr.subCategories == subCatArr)?.name}
                                </Link>
                            </h4>
                            {subCatArr.map((subCat) => {
                                return (
                                    <p onClick={() => {
                                        setSubCatVisiable(false)
                                    }}>
                                        <Link to={`/category/${subCat}`}>{subCat}</Link>
                                    </p>
                                )
                            })}
                        </>
                        : null}
                </div>

            </nav>
        </>
    )
}

export default NavBar