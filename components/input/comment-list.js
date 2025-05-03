import { useEffect } from 'react';
import classes from './comment-list.module.css';

export default function CommentList({
  items
}) {

  return (
    <ul className={classes.comments}>
      {/* Render list of comments - fetched from API */}
      {items.map(({ id, name, comment }) => (
        <li key={id}>
          <p>{comment}</p>
          <div>
            By <address>{name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}
