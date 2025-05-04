import classes from './comment-list.module.css';

export default function CommentList({
  items
}) {

  return (
    <ul className={classes.comments}>
      {/* Render list of comments - fetched from API */}
      {items.map(({ _id, name, comment }) => (
        <li key={_id}>
          <p>{comment}</p>
          <div>
            By <address>{name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}
