import Speak from "./Speak";
import { Sentences } from "../Utils/Sentence";

// const letters = [
//   { letter: "A for Apple" },
//   //   { letter: "B", word: "Ball" },
//   //   { letter: "C", word: "Cat" },
//   //   { letter: "D", word: "Dog" },
// ];

function Activites(props) {
  const match = Sentences.find((items) => items.letter == props.detail);

  const speak = (text) => {
    if (window.responsiveVoice) {
      window.responsiveVoice.speak(text, "UK English Male");
    } else {
      alert("ResponsiveVoice not loaded.");
    }
  };

  return (
    <div className="flex justify-center">
      <div className="bg-blue-100  w-120 h-120 m-10 rounded-2xl">
        <h1 className="text-8xl font-extrabold text-center mb-8 text-blue-800">
          {props.detail}
        </h1>

        {match && (
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl shadow w-80 p-4 text-center hover:shadow-lg transition">
              <h2 className="text-4xl font-bold text-blue-700">
                {match.letter} for {match.word}
              </h2>

              <div className="flex  m-10 space-x-2   ">
                <div>
                  <button
                    onClick={() => speak(`${match.letter} for ${match.word}`)}
                    className="bg-blue-500 text-white px-10 py-4 rounded-full hover:bg-blue-600"
                  >
                    🔊 Play
                  </button>
                </div>
                <Speak say={match} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Activites;
