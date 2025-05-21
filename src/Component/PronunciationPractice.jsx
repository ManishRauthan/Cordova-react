import { useState } from "react";

const PronunciationPractice = () => {
  // const [spokenWord, setSpokenWord] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isListening, setIsListening] = useState(false);

  const targetWord = "I am Manish"; // 🔤 You can make this dynamic later

  const startListening = () => {
    // if (
    //   !("webkitSpeechRecognition" in window || "SpeechRecognition" in window)
    // ) {
    //   alert("Sorry, your browser does not support Speech Recognition 😔");
    //   return;
    // }

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    // recognition.lang = "en-US";
    // recognition.interimResults = false;
    // recognition.continuous = false;

    setIsListening(true);
    setFeedback("🎙️ Listening...");

    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.toLowerCase().trim();
      // setSpokenWord(transcript);
      setIsListening(false);

      if (transcript === targetWord.toLowerCase()) {
        setFeedback("✅ Correct! Great job! 🎉");
      } else {
        setFeedback(`❌ Oops! You said "${transcript}". Try again.`);
      }
    };

    // recognition.onerror = (event) => {
    //   console.error("Speech recognition error:", event.error);
    //   setFeedback("⚠️ Something went wrong. Please try again.");
    //   setIsListening(false);
    // };
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-blue-100 to-purple-100">
      <h1 className="text-3xl font-bold mb-4">🗣️ Pronunciation Practice</h1>

      <p className="mb-2 text-lg">
        🎯 Say the word: <strong>{targetWord}</strong>
      </p>

      <button
        onClick={startListening}
        disabled={isListening}
        className="bg-blue-600 text-white px-6 py-2 rounded-xl shadow hover:bg-blue-700 transition disabled:opacity-50"
      >
        {isListening ? "Listening..." : "🎤 Speak Now"}
      </button>

      <div className="mt-4 text-xl font-medium text-center">
        {feedback && <p>{feedback}</p>}
      </div>

      {/* {spokenWord && (
        <div className="mt-2 text-sm text-gray-600">
          You said: "<em>{spokenWord}</em>"
        </div>
      )} */}
    </div>
  );
};

export default PronunciationPractice;
