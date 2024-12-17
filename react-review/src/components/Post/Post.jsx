import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import PostStyleModule from "../../styles/Post.module.css";
import { Comment } from "../Comment/Comment";
import { Avatar } from "../Avatar/Avatar";
import { useState } from "react";


function Post({ author, publishedAt, content }) {

  const [comments,setComments] = useState([
    "Post maravilhoso!!!"
  ])

  const [newCommentText, setNewCommentText] = useState('')

  function handleCreateNewComment()  {
    const newCommentText = event.target.coment.value

    event.preventDefault()

    setComments([...comments, newCommentText]);
    setNewCommentText("")

  }

  function handleCreateNewCommentChange() {
    setNewCommentText(event.target.value)
  }

  const publishedDateFormated = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  return (
    <article className={PostStyleModule.post}>
      <header>
        <div className={PostStyleModule.author}>
          <Avatar src={author.avatarUrl} />

          <div className={PostStyleModule.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormated}
          dateTime={publishedAt.toISOString()}
        >
          {publishDateRelativeToNow}
        </time>
      </header>

      <div className={PostStyleModule.content}>
        {content.map((line) => {
          if (line.type === "pharagraph") {
            return <p>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form
        onSubmit={handleCreateNewComment}
        className={PostStyleModule.comentForm}
      >
        <strong>Deixe seu feedback</strong>

        <textarea
          name="coment"
          value={newCommentText}
          placeholder="Deixe um comentário"
          onChange={handleCreateNewCommentChange}
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={PostStyleModule.commentList}>
        {comments.map((comment) => {
          return <Comment content={comment} />;
        })}
      </div>
    </article>
  );
}

export default Post;