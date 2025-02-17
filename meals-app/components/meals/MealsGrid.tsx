import classes from "@/components/meals/MealsGrid.module.css";
import MealItem from "@/components/meals/MealItem";

export default function MealsGrid({
  meals
}: {
  meals: Array<{
    id: string;
    title: string;
    slug: string;
    image: string;
    summary: string;
    creator: string;
  }>
}
) {
  return (
    <ul className={classes.meals}>
      {meals.map(meal => <li key={meal.id}>
        <MealItem {...meal} />
      </li>)}
    </ul>
  );
}