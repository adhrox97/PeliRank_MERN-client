import './home.css'
import logo from "./logo-pelirank-blanco-05.png"
import icon_user from "./icon_user.png"
import logo_facebook from "./logo_facebook.png"
import logo_instagram from "./logo_instagram.png"
import logo_twitter from "./logo_twitter.png"
import { MoviesGrid } from './MoviesGrid'

function Home() {
    return <div>
        <header className="header">
            <div className="header-box-img">
                <a href="#"><img src={logo} alt="Logo-Pelirank" className="header-box-imagen" /></a>
            </div>
            <div className="header_search">
                <form className="header_search_container">
                    <input type="text" id="entrarT" placeholder="     Buscar peliculas, series y mas" />
                    <button className="search_lupa" type='button' onclick="entrarTitulo()">🔎</button>
                </form>
            </div>
            <div className="header_user">
                <div className="user_container">
                    <div className="user_name" id="nick">Usuario</div>
                    <div className="user_icon">
                        <img src={icon_user} alt="icon user" />
                    </div>
                </div>
            </div>
        </header>
        <nav className="navbar">
            <section className="aside">
                <div className="inicio">
                    <a href="home.html" className="a">Inicio</a>
                </div>
            <div className="cuenta">
                <a href="home.html" className="a">Cuenta</a>
            </div>
            <div className="salir">
                <a href="login.html" className="a">Salir</a>
            </div>
            </section>
            <section className="main">
                <div className="container_central" id="imatitulos">
                    <MoviesGrid/>
                </div>
            </section>
        </nav>
        <footer className="footer">
            <div className="footer-box">
                <div className="footer-box-img">
                    <a href="https://www.facebook.com" target="_blank"><img src={logo_facebook} alt="Logo-Facebook" className="footer-box-imagen"/></a>
                </div>
                <div className="footer-box-img">
                    <a href="https://www.instagram.com" target="_blank"><img src={logo_instagram} alt="Logo-Instagram" className="footer-box-imagen"/></a>
                </div>
                <div className="footer-box-img">
                    <a href="https://www.twitter.com" target="_blank"><img src={logo_twitter} alt="Logo_Twitter" className="footer-box-imagen"/></a>
                </div>
            </div>
        </footer>
    </div>
}

export default Home