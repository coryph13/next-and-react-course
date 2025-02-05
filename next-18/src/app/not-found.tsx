import Link from "next/link";

function NotFoundPage() {
  return (
    <div>
      <h2>Not Found!</h2>
      <p>Page not found. Try again later.</p>
      <Link href={`/`}>Back Home</Link>
    </div>
  )
}

export default NotFoundPage;