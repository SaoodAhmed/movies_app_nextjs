import Image from "next/image";
import MovieList from "./components/movieList";
import Movies from "./components/movies";

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-purple-800 via-indigo-700 to-blue-500 h-screen text-slate-100">
      <h1 className="flex justify-center text-3xl pt-20 font-medium border-b border-blue-500 pb-3 ">My Movie App</h1>
      <Movies/>
      
    </main>
  );
}
