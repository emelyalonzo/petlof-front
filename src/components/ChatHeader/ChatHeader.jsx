import { useNavigate } from "react-router-dom";

const ChatHeader = ({ user }) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="chatHeader">
      <div className="chatHeader__profile">
        <div className="chatHeader__img">
          <img
            src={user.imageURL}
            alt={"photo of " + user.first_name}
            className="chatHeader__img--photo"
          />
        </div>
        <h3>{user.first_name}</h3>
      </div>
      <div className="log-out-icon" onClick={logout}>
        
      </div>
    </div>
  );
};

export default ChatHeader;
