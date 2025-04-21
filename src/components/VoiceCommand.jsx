import React, { useEffect } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

const VoiceCommandApp = () => {
    const commands = [
        { command: "Go to home", callback: () => (window.location.href = "/") },
        { command: "Enable dark mode", callback: () => (document.body.style.backgroundColor = "black") },
        { command: "Enable light mode", callback: () => (document.body.style.backgroundColor = "white") },
        { command: "Open Google", callback: () => window.open("https://www.google.com", "_blank") },
        { command: "Show alert", callback: () => alert("This is a voice command alert!") },
        { command: "thank you", callback: () => alert("You're welcome! 😊") },
    ];

    const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } =
        useSpeechRecognition({ commands });

    useEffect(() => {
        SpeechRecognition.startListening({ continuous: true, language: "en-US" });
    }, []);

    if (!browserSupportsSpeechRecognition) {
        return <p className="text-red-500 text-center text-xl">❌ Browser does not support speech recognition.</p>;
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-400 " >
            <div className="bg-white shadow-lg rounded-2xl p-6 w-96 text-center w-[50%]">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">🎤 Voice Command App</h2>

                <p className={`text-lg font-medium mb-4 ${listening ? "text-green-600" : "text-red-600"}`}>
                    🎙️ Microphone: {listening ? "On ✅" : "Off ❌"}
                </p>

                <div className="flex flex-wrap justify-center gap-2">
                    <button
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition-all"
                        onClick={() => SpeechRecognition.startListening({ continuous: true, language: "en-US" })}
                    >
                        🎧 Start Listening
                    </button>
                    <button
                        className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-lg transition-all"
                        onClick={SpeechRecognition.stopListening}
                    >
                        ⏹️ Stop Listening
                    </button>
                    <button
                        className="bg-gray-600 hover:bg-gray-700 text-white font-semibold px-4 py-2 rounded-lg transition-all"
                        onClick={resetTranscript}
                    >
                        🔄 Reset
                    </button>
                </div>

                <p className="mt-6 text-lg font-semibold text-gray-700">🗣️ You said: <span className="text-blue-600">{transcript || "..."}</span></p>
            </div>
        </div>
    );
};

export default VoiceCommandApp;
