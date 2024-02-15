import Image from "next/image";
import MovieList from "./components/movieList";
import Movies from "./components/movies";

export default function Home() {
  return (
    <main className=" max-w-7xl mx-auto">
      <h1 className="flex justify-center text-slate-100 text-3xl   border-b border-blue-500 pb-3 pt-24 font-semibold">My Movie App</h1>
      <Movies/>
      
    </main>
  );
} 
