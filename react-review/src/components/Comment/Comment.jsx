import CommentStyle from "../../styles/Comment.module.css";
import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar/Avatar";

export function Comment({ content, onDeleteComment }) {

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  return (
    <div className={CommentStyle.comment}>
      <Avatar hasBorder={false} src="https://github.com/souzalipe.png" alt="" />

      <div className={CommentStyle.commentBox}>
        <div className={CommentStyle.commentContent}>
          <header>
            <div className={CommentStyle.authorAndTime}>
              <strong>Felipe Souza</strong>
              <time
                title="11 de Dezembro às 08:39h"
                dateTime="2024-12-14  08:39:20"
              >
                Cerca de 1h a trás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash />
            </button>
          </header>

          <p>{content}</p>
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
