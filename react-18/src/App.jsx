
import Todo from "./components/Todo";

function App() {
  return (
    <>
      <header className="bg-gray-800 text-white text-center p-4">
        <h1 className="text-2xl font-bold">My Todos</h1>
      </header>

      <main className="p-4 flex flex-col items-center">
        <Todo title="Learn React." />
        <Todo title="Buy milk."/>
        <Todo title="Kill Hitler." />
        <Todo title="Explore universe." />
      </main>
    </>
  );
}

export default App;
