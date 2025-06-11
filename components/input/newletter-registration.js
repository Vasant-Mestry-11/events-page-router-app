import { useContext, useRef } from "react";
import classes from "./newletter-registration.module.css";
import NotificationContext from "@/store/notification-context";

export default function NewsletterRegistration() {
  const emailRef = useRef();
  const notificationCtx = useContext(NotificationContext);

  function registrationHandler(event) {
    event.preventDefault();

    const email = emailRef.current.value;

    notificationCtx.showNotification({
      title: 'Sign In',
      message: 'Signing in...',
      status: 'pending'
    })

    fetch("/api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
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
          message: 'Successfully registered for newsletter',
          status: 'success'
        })
      })
      .catch((error) => {
        notificationCtx.showNotification({
          title: 'Error!!',
          message: error.message || 'Something went wrong',
          status: 'error'
        })
      });
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}
