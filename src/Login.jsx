import React from 'react'
import './login.css'
import logo from "./logo-pelirank-blanco-05.png"
import icon_user from "./icon_user.png"
import logo_facebook from "./logo_facebook.png"
import logo_instagram from "./logo_instagram.png"
import logo_twitter from "./logo_twitter.png"
//import {Footer, HeaderHome, NavbarHome} from './Home'
//import {HeaderLogin, SectionLogin, FooterLogin} from './Login'

function Login(){
    return (
        <div>
            <header className="header">
                <div className="header-box-img">
                    <a href="login.html"><img src={logo} alt="Logo-Pelirank" className="header-box-imagen"/></a>
                </div>
            </header>
            <section className="sectionLogin">
                <form onsubmit="get_data_form(event)" id="form">
                    <div className="login_icon">
                        <img src={icon_user} alt="icon_user" className="icon_user_img"/>
                    </div>
                    <div className="login_container">
                        <label for="login_usuario">Usuario</label>
                        <input id="login_usuario" name="login_usuario"/>
                        <label for="login_contrasena">Contraseña</label>
                        <input id="login_contrasena" type="password" name="login_contrasena"/>
                    </div>
                    <div class="login_footer">
                        <input type="submit" value="Iniciar"/>
                        <a href="registro.html">Crear cuenta</a>
                    </div>
                </form>
            </section>
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
    )
}

export default Login