import { Route, Routes } from "react-router";
import Post from "./components/post/Post";
import NewPost from "./routes/NewPost";
import RootLayout from "./routes/RootLayout";
import Posts from "./routes/Posts";

function App() {


  return (
    <>
      <RootLayout>
        <Routes>
          <Route index element={<Posts />} />
          <Route path={`/create`} element={<NewPost />} />
          <Route path={`/:id`} element={<Post />} />
        </Routes>
      </RootLayout>
    </>
  );
}

export default App;
