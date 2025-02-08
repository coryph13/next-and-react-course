import { Route, Routes } from "react-router";
import AllMeetupsPage from "./pages/AllMeetups.jsx";
import FavoritesPage from "./pages/Favorites.jsx";
import NewMeetupPage from "./pages/NewMeetup.jsx";
import Layout from "./components/layout/Layout.jsx";

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
