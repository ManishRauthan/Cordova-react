const letters = [
  { letter: "A", word: "Apple" },
  { letter: "B", word: "Ball" },
  { letter: "C", word: "Cat" },
  { letter: "D", word: "Dog" },
  { letter: "E", word: "Elephant" },
  { letter: "F", word: "Fish" },
  { letter: "G", word: "Grapes" },
  { letter: "H", word: "Hat" },
  { letter: "I", word: "Ice" },
  { letter: "J", word: "Jug" },
  { letter: "K", word: "Kite" },
  { letter: "L", word: "Lion" },
  { letter: "M", word: "Monkey" },
  { letter: "N", word: "Nest" },
  { letter: "O", word: "Orange" },
  { letter: "P", word: "Parrot" },
  { letter: "Q", word: "Queen" },
  { letter: "R", word: "Rabbit" },
  { letter: "S", word: "Sun" },
  { letter: "T", word: "Tiger" },
  { letter: "U", word: "Umbrella" },
  { letter: "V", word: "Violin" },
  { letter: "W", word: "Watch" },
  { letter: "X", word: "Xylophone" },
  { letter: "Y", word: "Yacht" },
  { letter: "Z", word: "Zebra" },
];

const Phonic = () => {
  const speak = (text) => {
    if (window.responsiveVoice) {
      window.responsiveVoice.speak(text, "UK English Male");
    } else {
      alert("ResponsiveVoice not loaded.");
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">
        A-Z Phonics Sounds 🔤
      </h1>
      <div className="grid grid-cols-6 gap-4">
        {letters.map(({ letter, word }) => (
          <div
            key={letter}
            className="bg-white rounded-2xl shadow p-4 text-center hover:shadow-lg transition"
          >
            <h2 className="text-4xl font-bold text-blue-700">{letter}</h2>
            <p className="text-lg text-gray-600 mb-2">{word}</p>
            <button
              onClick={() => speak(`${letter} for ${word}`)}
              className="bg-blue-500 text-white px-4 py-1 rounded-full hover:bg-blue-600"
            >
              🔊 Play
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Phonic;
