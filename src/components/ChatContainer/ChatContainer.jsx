import { useState } from "react";
import ChatHeader from "../ChatHeader/ChatHeader";
import MatchesDisplay from "../MatchesDisplay/MatchesDisplay";
import ChatDisplay from "../ChatDisplay/ChatDisplay";

const ChatContainer = ({ user }) => {
  const [clickedUser, setClickedUser] = useState(null);

  return (
    <div className="chatContainer">
      <ChatHeader user={user} />

      <div>
        <button
          className="chatContainer__btn--option"
          onClick={() => setClickedUser(null)}
        >
          Matches
        </button>
        <button className="chatContainer__btn--option" disabled={!clickedUser}>
          Chats
        </button>
      </div>

      {!clickedUser && (
        <MatchesDisplay
          matches={user.matches}
          setClickedUser={setClickedUser}
        />
      )}

      {clickedUser && <ChatDisplay />}
    </div>
  );
};

export default ChatContainer;
