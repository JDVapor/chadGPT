<<<<<<< HEAD
import { DocumentData } from "firebase/firestore";

type Props = {
  message: DocumentData;
};

function Message({ message }: Props) {
  const isChatGPT = message.user.name === "chadGPT"

  return (
    <div className={`py-5 text-white ${isChatGPT && "bg-[#434654]"}`}>
      <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
        <img src={message.user.avatar} alt="" className="h-8 w-8" />
        <p className="pt-1 text-sm">{message.text}</p>
      </div>
    </div>
  );
}

export default Message;
=======
import { DocumentData } from "firebase/firestore";


type Props = {
  message: DocumentData;
};

function Message({ message }: Props) {
  const isChatGPT = message.user.name === "ChadGPT"

  return (
    <div className={`py-5 text-white ${isChatGPT && "bg-[#434654]"}`}>
      <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
        <img src={message.user.avatar} alt="" className="h-8 w-8" />
        <p className="pt-1 text-sm">{message.text}</p>
      </div>
    </div>
  );
}

export default Message;
>>>>>>> 421c2282719b9b0f77f834eba5707ad5c046a92e
