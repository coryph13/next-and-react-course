import classes from "./NewPost.module.css";
import Modal from "../components/post/Modal";
import { Link, Form, redirect } from "react-router";

function NewPost() {
  return (
    <Modal>
      <Form method="POST" className={classes.form}>
        <p>
          <label htmlFor="body">Body</label>
          <textarea id="body" name="body" rows={3} required />
        </p>
        <p className={`mt-4`}>
          <label htmlFor="name">Author</label>
          <input type="text" id="name" name="author" required />
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData); // {body:'',author:''}
  fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return redirect('/');
}
