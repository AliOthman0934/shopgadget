import "./header.css"
const Header = ()=> {
    return (<header className="header">
        <div className="top-header">
            <div className="top-header-menu">
                <i className="bi bi-list"></i>
            </div>
            <div className="top-headre-log">
                <i className="bi bi-basket2"></i>
                ShopGad
            </div>
            <div className="top-header-text">
                Welcom To
            </div>
            <div className="top-header-phone">
                0031 638 970 170
                <i className="bi bi-telephone"></i>
            </div>
        </div>
    </header>)
}

export default Header