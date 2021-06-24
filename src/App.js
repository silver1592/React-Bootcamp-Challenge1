import React from "react";
import { PokeCard } from "./components/PokeCard";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Welcome to your first mini challenge!</h1>
      <PokeCard />
    </div>
  );
}
