import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

const FavoritesPage = () => {
  const favoriteCtx = useContext(FavoritesContext);

  let content = <p>You got no favorites yet. Start adding some?</p>;
  if (favoriteCtx.totalFavorites !== 0) {
    content = <MeetupList meetups={favoriteCtx.favorites} />;
  }
  
  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
};

export default FavoritesPage;
