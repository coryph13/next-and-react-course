import Link from "next/link";

export default function MealPage({ params }) {
  return (
    <>
      <h1>Meal Page</h1>
      <h2>Meal slug is: {params.slug}</h2>
      <p><Link href={`..`}>Back</Link></p>
    </>
  )
}