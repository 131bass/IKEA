import { useEffect, useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import categoriesArr from "../../utils/categories"
import Login, { LoginMode } from "../Login/Login"
import cameraIcon from '../../assets/icons/camera.png'
import cancelIcon from '../../assets/icons/cancel.png'
import heartIcon from '../../assets/icons/heart.png'
import profileIcon from '../../assets/icons/profile.png'
import searchIcon from '../../assets/icons/search.png'
import "./navBar.scss"
import { useGetProductsByName, useGetSearch, useRenderNav, useRenderSubCategories, useScrollBar, useShowSideBar } from './navBarHooks'
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { setUserLoggedIn, userLoggedInSelector } from "../../features/loggedInUser/userSlice"
import axios from "axios"

const NavBar = () => {

    const { backward, forward, scroll } = useScrollBar()

    const { search, setSearch } = useGetSearch()

    const { arrToRender, showCategories } = useRenderNav()

    const { sideBarVisiable, changeSideBarVisiable, setSideBarVisiable } = useShowSideBar()

    const { subCatArr, subCatVisiable, setSubCatVisiable, showSubCategories } = useRenderSubCategories()

    const { productsOfSearch, handleGetProductsByName } = useGetProductsByName()

    const [showSearchBox, setShowSearchBox] = useState(false)

    const [searching, setSearching] = useState(false)

    const navigate = useNavigate()

    const userRedux = useAppSelector(userLoggedInSelector)

    const dispatch = useAppDispatch()


    const getUser = async () => {
        try {
            const { data } = await axios.get(`/api/users/user`)
            dispatch(setUserLoggedIn(data.userDB))

        } catch (error) {
            console.error(error)

        }
    }
    let [xPosition, setXPosition] = useState<number>(0)
    const getCursorPosition = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const x = event.clientX
        console.log(x)
        { x < 200 ? setXPosition(xPosition = x) : x > 1000 ? setXPosition(xPosition = x - 350) : setXPosition(xPosition = x - 200) }
    }

    useEffect(() => {
        showCategories("מוצרים")
    }, [])

    useEffect(() => {
        const searchRequest = setTimeout(() => { handleGetProductsByName(search) }, 1500);
        return () => clearTimeout(searchRequest);
    }, [search]);

    useEffect(() => {
        getUser()
    }, [])

    return (
        <div style={{}}>
            {sideBarVisiable ?
                <div className="side">
                    <div className="formLogin">
                        <img className="cancelSideLogin" src={cancelIcon} alt="cancel" onClick={changeSideBarVisiable} />
                        <Login loginMode={LoginMode.SIDEBAR} />
                        <button className="toRegister" onClick={changeSideBarVisiable}><Link to="/register">צרו חשבון</Link></button>
                    </div>
                </div>
                : null}
            <nav >
                <div className="topNav">
                    <Link to="/">
                        <img src="https://www.ikea.com/il/he/static/ikea-logo.f7d9229f806b59ec64cb.svg" alt="ikea logo" />
                    </Link>
                    <div className={!showSearchBox ? "navSearchBox" : "navSearchBox open"}>
                        {searching && search ? null : <img src={searchIcon} alt="search" />}
                        <input type="text" name='navSearch' id='navSearch' value={search} placeholder='מה לחפש לך?' onClick={() => {
                            setShowSearchBox(!showSearchBox)
                        }} onInput={(ev) => {
                            setSearch((ev.target as HTMLInputElement).value)
                            setSearching(true)
                        }} />
                        {searching && search ? <><button><img style={{ width: "15px", height: "15px" }} src={cancelIcon} /></button><button><img style={{ paddingRight: "10px", borderRight: "1px solid gray" }} src={searchIcon} /></button></> : <button><img src={cameraIcon} /></button>}
                        {showSearchBox ?
                            <div style={{ backgroundColor: "white", paddingRight: "20px", width: "46%", height: "450px", position: "absolute", top: "100px", zIndex: "3", border: "2px solid grey", borderRadius: "10px", overflow: "auto", cursor: "default" }}>
                                {productsOfSearch && productsOfSearch.length > 0 ?
                                    productsOfSearch.map((product) => {
                                        return (
                                            <div onClick={() => {
                                                navigate(`/product/${product.itemNumber}`)
                                                setShowSearchBox(false)
                                                setSearch('')
                                            }} style={{ display: "flex", height: "55px", gap: "20px", margin: "20px", alignContent: "center", cursor: "pointer" }}>
                                                <div style={{ width: "50px", height: "50px", backgroundImage: `url(${product.imgUrl})`, backgroundSize: "contain" }}></div>
                                                <div style={{ height: "50px" }}>
                                                    <h5 style={{ marginBottom: "0px", marginTop: "0px" }}>{product.series}</h5>
                                                    <p style={{ marginBottom: "0px", marginTop: "0px" }}>{product.name}</p>
                                                </div>
                                            </div>
                                        )
                                    }) : <p>לא נמצאו תוצאות מתאימות</p>}
                            </div>
                            : null}
                    </div>
                    {!userRedux.email ?
                        <button className="loginOrRegister" onClick={changeSideBarVisiable} ><span><img src={profileIcon} alt="profile" /> </span>היי! התחברו או הירשמו</button>
                        :
                        <button style={{ display: "flex", justifyContent: "space-between", width: "fit-content" }} className="loginOrRegister" onClick={() => { navigate('/profile') }} ><p style={{ backgroundColor: "black", color: "white", width: "40px", padding: "12px 0px", borderRadius: "50%", fontWeight: "bold", marginRight: "-10px" }}>{userRedux.firstName.charAt(0) + " " + userRedux.lastName.charAt(0)}</p><p style={{ marginLeft: "10px" }}>{`היי ${userRedux.firstName}!`}</p></button>
                    }
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
                                    {arrToRender.name == "חדרים" ?
                                        <>
                                            <button className="backward" style={scroll == 0 ? { display: "none" } : { display: "block" }} onClick={() => { backward(165) }}>&lt;</button>
                                            <button className='forward' style={scroll > 750 ? { display: "none" } : { display: "block" }} onClick={() => { forward(165) }}>&gt;</button>
                                        </>
                                        :
                                        <>
                                            <button className="backward" style={scroll == 0 ? { display: "none" } : { display: "block" }} onClick={() => {
                                                backward(140)
                                                setSubCatVisiable(false)
                                            }}>&lt;</button>
                                            <button className='forward' style={scroll > outerWidth + 140 ? { display: "none" } : { display: "block" }} onClick={() => {
                                                forward(140)
                                                setSubCatVisiable(false)
                                            }}>&gt;</button>
                                        </>
                                    }
                                </div>
                                <div className="navCategories" onMouseDown={(ev) => { getCursorPosition(ev) }} style={arrToRender.name == "חדרים" ? { left: `${scroll}px`, gap: "55px", width: "700px" } : { left: `${scroll}px` }}>
                                    {arrToRender.categories.map((item) => {
                                        return (
                                            <>
                                                <div className="category" onClick={item.subCategories != subCatArr && subCatVisiable ? () => {
                                                    if (item.subCategories) {
                                                        showSubCategories(item.subCategories)
                                                        setSubCatVisiable(true)
                                                    }
                                                } : () => {
                                                    if (item.subCategories) {
                                                    showSubCategories(item.subCategories)
                                                    setSubCatVisiable(!subCatVisiable)
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
                            {arrToRender.name == "חדרים" ?
                                <div className="scrollbar" style={{ right: `${scroll}px` }}></div>
                                :
                                <div className="scrollbar" style={{ right: `${scroll / 2.3}px` }}></div>
                            }
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
                <div className={subCatVisiable ? "subCategories" : "subCategories hide"} style={subCatArr && subCatArr.length > 10 ? { columnCount: "2", left: xPosition + 'px', width: "380px" } : { left: xPosition + 'px', width: "250px" }}>
                    {subCatArr ?
                        <>
                            <h4 onClick={() => {
                                setSubCatVisiable(false)
                            }} style={{ columnSpan: "all" }}>
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
                                        <Link to={`/subcategory/${subCat}`}>{subCat}</Link>
                                    </p>
                                )
                            })}
                        </>
                        : null}
                </div>

            </nav>
        </div>
    )
}

export default NavBar