import { useState } from "react";
// import axios from "axios";

const Chatinput = ({
  // user,
  // clickedUser,
  // getUserMessages,
  // getClickedUsersMessages,
}) => {
  const [textArea, setTextArea] = useState(null);
  // const userId = user?.user_id;
  // const clickUserId = clickedUser?.user_id;

  // const addMessage = async () => {
  //   const message = {
  //     timestamp: new Date().toISOString(),
  //     from_userId: userId,
  //     to_userId: clickUserId,
  //     message: textArea,
  //   };

  //   try {
  //     await axios.post("http://localhost:3001/message", { message });
  //     getUsersMessages();
  //     getClickedUsersMessages();
  //     setTextArea("");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="chatInput">
      <textarea
        value={textArea}
        onChange={(e) => setTextArea(e.target.value)}
      />
      <button className="secondary-button">Submit</button>
    </div>
  );
};

export default Chatinput;
