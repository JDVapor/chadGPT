"use client";

import { collection, orderBy, query } from "firebase/firestore";
import { useSession, signOut } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import NewChat from "./NewChat";
import ChatRow from "./ChatRow";
import ModelSelection from "./ModelSelection";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";

function SideBar() {
  const { data: session } = useSession();
  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session?.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );

  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          <NewChat />

          {/*<div className="hidden sm:inline">
            <ModelSelection />
  </div>*/}

          <div className="flex flex-col space-y-2 my-2">
            {loading && (
              <div className="animate-pulse text-center text-white">
                <p>Loading Chats...</p>
              </div>
            )}
            {/*map thru chatRows */}
            {chats?.docs.map((chat) => (
              <ChatRow key={chat.id} id={chat.id} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between text-white">
        <a href="https://joshdluehosh.com">Home</a>
        <a href="https://joshdluehosh.com/postIt.html">PostIt</a>
      </div>

      {session && (
        <img
          onClick={() => signOut()}
          src={session?.user?.image!}
          alt="Logout"
          className="h-12 w-14 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
        />
      )}
      <ArrowUpCircleIcon className="h-5 w-5 mx-auto text-white justify-center" />

      <div className="flex justify-center text-white">Logout</div>
    </div>
  );
}

export default SideBar;
