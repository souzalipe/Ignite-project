import PostStyleModule from "../../styles/Post.module.css";
import { Comment } from "../Comment/Comment";

function Post(porps) {
  return (
    <article className={PostStyleModule.post}>
      <header>
        <div className={PostStyleModule.author}>
          <img
            src="https://github.com/souzalipe.png"
            className={PostStyleModule.avatar}
          />
          <div className={PostStyleModule.authorInfo}>
            <strong>Felipe Souza</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="Publicado em 06 de Dezembro" dateTime="06/12/24">
          Publicado hà 1
        </time>
      </header>

      <div className={PostStyleModule.content}>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          👉 <a href="#"> jane.design/doctorcare</a>
        </p>

        <p>
          <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{" "}
          <a href="#">#rocketseat</a>{" "}
        </p>
      </div>

      <form className={PostStyleModule.comentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={PostStyleModule.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}

export default Post;
