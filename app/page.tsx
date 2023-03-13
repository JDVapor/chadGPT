//import React from 'react'
import {
  ExclamationTriangleIcon,
  PaperClipIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      <h1 className="text-5xl font-bold mb-20">ChadGPT</h1>
      <div className="flex-shrink lg:flex space-x-2 text-center overflow-auto">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <StarIcon className="h-8 w-8 text-blue-500" />
            <h2>Features</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">Assistance with researching a topic.</p>
            <p className="infoText">Ask me to explain something.</p>
            <p className="infoText">Ask me for tips or advice.</p>
            <p className="infoText">Ask me a question.</p>
            <p className="infoText">Give me a task.</p>
            <p className="infoText">Have me code something for you.</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <PaperClipIcon className="h-8 w-8 text-blue-500" />
            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">
              "Explain like I'm five why the ocean has waves."
            </p>
            <p className="infoText">
              "What are some tips on getting started in professional game
              development?"
            </p>
            <p className="infoText">"What makes cryptocurrencies useful?"</p>
            <p className="infoText">
              "Write me a story about a janitor named Paul who is in love with
              the receptionist in the front office."
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className="h-8 w-8 text-blue-500" />
            <h2>Details</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">
              If the reponse isn't what you were looking for, rephrase it, or
              add in more specific details.
            </p>
            <p className="infoText">
              Allows user to provide follow-up corrections, or change/customize
              a response by defining a specific style.
            </p>
            <p className="infoText">
              ChadGPT will remember and be able to reference what the user said
              earlier in the conversation, while keeping it Chad.
            </p>
            <p className="infoText">
              ChadGPT will even talk to you and be your friend, if all you need
              is a conversation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
