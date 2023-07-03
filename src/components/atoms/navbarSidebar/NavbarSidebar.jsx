import "./NavbarSidebar.css"

import Virus from "../../../assets/images/coronavirus.png"
import Graphic from "../../../assets/images/grafico.png"
import Menu from "../../../assets/images/lista.png"
import MultiplyMenu from "../../../assets/images/menu (1).png"
import Folder from "../../../assets/images/file-and-folder.png"
import Labels from "../../../assets/images/capas.png"
import ArrowGraphic from "../../../assets/images/grafico-de-barras.png"
import Net from "../../../assets/images/web.png"
import Chat from "../../../assets/images/globo-de-chat.png"
import Pig from "../../../assets/images/cerdo.png"

function NavbarSidebar() {
  return (
    <section className="navbarBox">
        <div className="imgSidebar">
            <img src={Virus}/>
        </div>

        <div className="iconSidebarBox">
            <header className="ListContainer">
                <div className="iconSidebarList">
                    <div className="imgContainer"><a><img src={Graphic}/></a></div>
                    <div className="imgContainer"><a><img src={Menu}/></a></div>
                    <div className="imgContainer"><a><img src={MultiplyMenu}/></a></div>
                    <div className="imgContainer"><a><img src={Folder}/></a></div>
                    <div className="imgContainer"><a><img src={Labels}/></a></div>
                    <div className="imgContainer"><a><img src={ArrowGraphic}/></a></div>
                    <div className="imgContainer"><a><img src={Net}/></a></div>
                    <div className="imgContainer"><a><img src={Chat}/></a></div>
                </div>
            </header>
            <footer className="footerIcon">
                <article className="iconSidebarList">
                    <div className="imgContainer"><a><img src={Pig}/></a></div>
                </article>
            </footer>
        </div>
    </section>
  )
}

export default NavbarSidebar