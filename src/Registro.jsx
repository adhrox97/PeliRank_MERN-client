import React from "react";
import './registro.css'
import logo from "./logo-pelirank-blanco-05.png"
import icon_user from "./icon_user.png"
import logo_facebook from "./logo_facebook.png"
import logo_instagram from "./logo_instagram.png"
import logo_twitter from "./logo_twitter.png"

function Registro(){
    return(
        <div>
            <header className="headerReg">
                <div className="headerReg-box-img">
                    <a href="index.html"><img src={logo} alt="Logo-Pelirank" className="headerReg-box-imagen"/></a>
                </div>
            </header>
            <section className="sectionReg">
                <form onsubmit="get_data_form(event)" id="form">
                    <div className="loginReg_icon">
                        <h2>Formulario de registro</h2>
                    </div>
                    <div className="contenedorRegistro">
                        <div className="loginReg_container">
                            <label for="login_nombre">Nombre</label>
                            <input id="login_nombre" type="text" name="login_nombre" />
                            <label for="login_email">Email</label>
                            <input id="login_email" type="email" name="login_email" />
                            <label for="login_nick">Nickname</label>
                            <input id="login_nick" type="text" name="login_nick" />
                        </div>
                        <div className="loginReg_container">
                            <label for="login_apellido">Apellido</label>
                            <input id="login_apellido" type="text" name="login_apellido" />
                            <label for="login_pais">País</label>
                            <input id="login_pais" type="text" name="login_pais" />
                            <label for="login_contrasena">Contraseña</label>
                            <input id="login_contrasena" type="password" name="login_contrasena"/>
                        </div>
                    </div>
                    <div className="loginReg_footer">
                        <input type="submit" value="Registrar" />
                    </div>
                </form>
            </section>
            <footer className="footerReg">
                <div className="footerReg-box">
                    <div className="footerReg-box-img">
                        <a href="https://www.facebook.com" target="_blank"><img src={logo_facebook} alt="Logo-Facebook" className="footerReg-box-imagen"/></a>
                    </div>
                    <div className="footerReg-box-img">
                        <a href="https://www.instagram.com" target="_blank"><img src={logo_instagram} alt="Logo-Instagram" className="footerReg-box-imagen"/></a>
                    </div>
                    <div className="footerReg-box-img">
                        <a href="https://www.twitter.com" target="_blank"><img src={logo_twitter} alt="Logo_Twitter" className="footerReg-box-imagen"/></a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Registro