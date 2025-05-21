import Activites from "./Activities";
import Video from "./Video.jsx";
import { alphabets } from "../Utils/Alphabets";
import { useState } from "react";

function Alphabet() {
  const [pressed, setPressed] = useState("");
  function press(pressed) {
    console.log(pressed);
    setPressed(pressed);
  }

  return (
    <div className=" flex justify-center">
      <div className="bg-blue-100  w-130 h-120 m-10 p-4 rounded-2xl">
        <div className=" grid grid-cols-6 gap-4 mt-10 ">
          {alphabets.map(({ letter }) => (
            <div className="bg-white rounded-2xl shadow p-4 text-center hover:shadow-emerald-950 transition">
              <h2
                className="text-2xl font-bold text-blue-700"
                onClick={() => press(letter)}
              >
                {letter}
              </h2>
            </div>
          ))}
        </div>
      </div>
      <Activites detail={pressed} />
      <Video detail={pressed} />
    </div>
  );
}

export default Alphabet;
