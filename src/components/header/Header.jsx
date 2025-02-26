import "./header.css"
const Header = () => {
    return (<header className="header">
        <div className="top-header">
            {/* <div className="top-header-menu">
                <i className="bi bi-list"></i>
            </div> */}
            <div className="top-header-phone">
                0031 638 970 170
                <i className="bi bi-telephone"></i>
            </div>
            {/* <div className="top-header-text">
                Welcom To
            </div> */}
            <div className="top-headre-log">
                <i className="bi bi-basket2"> </i>
                
                Welcom To ShopGad
            </div>

        </div>
        <div className="middle-header">
            <div className="middle-header-search-box">
                <input type="search" name="" id="" placeholder="Find What You Want" />
                <button className="search-box-btn">Search</button>
            </div>
            <div className="middle-header-shoping-cart">
                Shoping Cart
                <i className="bi bi-cart3"></i>
                <sapn className="cart-notificcation">1</sapn>
            </div>
        </div>
        <div className="navbar">
            <ul className="navbar-linls">
                <li className="navbar-link">Home</li>
                <li className="navbar-link">Elekronic</li>
                <li className="navbar-link">Furnetuers</li>
                <li className="navbar-link">Man</li>
                <li className="navbar-link">Women</li>
            </ul>
        </div>
    </header>)
}

export default Header