import { useContext, useEffect, useState } from "react";

import CommentList from "./comment-list";
import NewComment from "./new-comment";
import classes from "./comments.module.css";
import NotificationContext from "@/store/notification-context";

export default function Comments(props) {
  const { eventId } = props;
  const [comments, setComments] = useState([])
  const [showComments, setShowComments] = useState(false);
  const notificationCtx = useContext(NotificationContext)

  useEffect(() => {
    if (showComments) {
      fetch(`/api/comments/${eventId}`)
        .then((response) => response.json())
        .then((data) => setComments(data.comments));
    }
  }, [showComments, eventId]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    // send data to API

    notificationCtx.showNotification({
      title: 'New Comment',
      message: "Adding new comment",
      status: 'pending'
    })

    fetch(`/api/comments/${eventId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...commentData }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        return response.json().then((data) => {
          throw new Error(data.message || 'Something went wrong')
        })
      })
      .then((data) => {
        notificationCtx.showNotification({
          title: 'Success',
          message: "Comment added successfully",
          status: 'success'
        })
      }).catch((error) => {
        notificationCtx.showNotification({
          title: 'Error!!',
          message: error.message || 'Something went wrong',
          status: 'error'
        })
      }).finally(() => {
        setShowComments(false)
      })
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList items={comments} />}
    </section>
  );
}
