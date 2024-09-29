import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <Navbar />
      <main className="grow">
        <TodoList />
      </main>
      <Footer />
    </>
  );
}

export default App;
