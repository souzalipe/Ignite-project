import { PencilLine } from "phosphor-react"
import SideBarStylesModule from "../../styles/SideBar.module.css"

function SideBar(){
    return(
        <aside className={SideBarStylesModule.sidebar}>
            <img 
                className={SideBarStylesModule.cover}
                src="https://images.unsplash.com/photo-1515405295579-ba7b45403062?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            />
           
            <div className={SideBarStylesModule.profile}>
                <img 
                    className={SideBarStylesModule.avatar}
                    src="https://avatars.githubusercontent.com/u/153876497?v=4"
                />
                <strong>Felipe Souza</strong>
                <span>Web Developer</span>
            </div>

            <footer>
               
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}

export default SideBar