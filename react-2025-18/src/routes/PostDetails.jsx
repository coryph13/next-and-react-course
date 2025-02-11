import classes from "./PostDetails.module.css";
import Modal from "../components/post/Modal";
import { Link, useLoaderData } from "react-router";

function PostDetails() {
  const post = useLoaderData();

  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p className={classes.actions}>
            <Link to=".." className={classes.btn}>
              Okey
            </Link>
          </p>
        </main>
      </Modal>
    );
  }

  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.author}>{post.author}</p>
        <p className={classes.text}>{post.body}</p>
      </main>
    </Modal>
  );
}

export default PostDetails;

export async function loader({ params }) {
  const response = await fetch(`http://localhost:8080/posts/${params.id}`);
  const data = await response.json();
  return data.post;
}
