import CommentStyle from "../../styles/Comment.module.css";
import { ThumbsUp, Trash } from "phosphor-react";

export function Comment() {
  return (
    <div className={CommentStyle.comment}>
      <img src="https://github.com/souzalipe.png" alt="" />

      <div className={CommentStyle.commentBox}>
        <div className={CommentStyle.commentContent}>
          <header>
            <div className={CommentStyle.authorAndTime}>
              <strong>Felipe Souza</strong>
              <time
                title="11 de Dezembro às 08:39h"
                datetime="2024-12-14  08:39:20"
              >
                Cerca de 1h a trás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash />
            </button>
          </header>

          <p>Muito bom Felipe, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
