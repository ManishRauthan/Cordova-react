import { useState } from "react";

function Speak(props) {
  const [feedback, setFeedback] = useState("");
  const [isListening, setIsListening] = useState(false);

  const targetWord = `${props.say.letter} for ${props.say.word}`;

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    setIsListening(true);
    setFeedback("🎙️ Listening...");

    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.toLowerCase().trim();

      setIsListening(false);

      if (transcript === targetWord.toLowerCase()) {
        setFeedback("✅ Correct! Great job! 🎉");
      } else {
        setFeedback(`❌ You said "${transcript}". Try again.`);
      }
    };
  };

  return (
    <div>
      <button
        onClick={startListening}
        disabled={isListening}
        className="bg-blue-500 text-white px-8 py-4 rounded-full shadow hover:bg-blue-700 transition disabled:opacity-50"
      >
        {isListening ? "Listening..." : "🎤 Speak "}
      </button>

      <div className="mt-4 text-xl font-medium text-center">
        {feedback && <p> {feedback}</p>}
      </div>
    </div>
  );
}

export default Speak;
