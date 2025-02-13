import Link from "next/link";

export default function MealsPage() {
  return (
    <>
      <h1>Meals Page</h1>
      <div className="card-container">
        <div className={`card`}>
          <h2>
            <Link href={`/meals/meal-1`}>Meal 1</Link>
          </h2>
          <p>
            <Link href={`/meals/share`}>Share Meal</Link>
          </p>
        </div>
        <div className={`card`}>
          <h2>
            <Link href={`/meals/meal-2`}>Meal 2</Link>
          </h2>
          <p>
            <Link href={`/meals/share`}>Share Meal</Link>
          </p>
        </div>
      </div>
    </>
  )
}