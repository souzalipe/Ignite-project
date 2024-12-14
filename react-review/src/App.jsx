import Header from "./components/Header/Header";
import Post from "./components/Post/Post";
import SideBar from "./components/SideBar/SideBar";

import AppStylesModule from "./styles/App.module.css"
import "./styles/global.css"

function App() {
  return (
    <div>
      <Header />

      <div className={AppStylesModule.wrapper}>
        <SideBar />
        <main>
          <Post author="Felipe Nascimento" content="Meu primeiro post" />

          
        </main>
      </div>
    </div>
  );
}

export default App;
