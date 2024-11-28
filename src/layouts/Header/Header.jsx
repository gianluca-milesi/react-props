import style from "./Header.module.css"

function Header() {
    return (
        <header className={style.header}>
            <div className="container">
                <h1>Il mio blog</h1>
            </div>
        </header>
    )
}

export default Header