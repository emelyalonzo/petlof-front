import { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import ChatContainer from "../../components/ChatContainer/ChatContainer";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const [user, setUser] = useState(null);
  const [genderedUsers, setGenderedUsers] = useState(null);
  const [lastDirection, setLastDirection] = useState();


  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const userId = localStorage.getItem("UserId");
      console.log("userId", userId);
      console.log("dentro de getUser en el useEffect")
      const {data: {data}} = await axios.get('http://localhost:3001/users', {
        params: {id: userId}
      })
      console.log("27",data)
      setUser(data.user)
    } catch (err) {
      console.log(err);
    }
  }

  const getGenderedUser = async (user) => {
    try {
      const { data: {data} } = await axios.get('http://localhost:3001/gender', {
        params: {gender_interest: user?.gender_interest}
      })
      console.log(data);
      setGenderedUsers(data.users)
    } catch (err) {
      console.log(err);
    }
  }
  
  useEffect(() => {
    console.log("use effect de user antes de getUser")
    getUser()
    console.log("update user")
  }, []);
  console.log('user', user);


  useEffect(() => {
    if (user && !genderedUsers) {
      getGenderedUser(user)
    }
  }, [user, genderedUsers]);

 

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  const logout = () => {
    localStorage.clear()
    setUser(null);
    navigate("/")
  };

  if (!user || !genderedUsers) {
    return "no existe el usuario"
  }
  return (
    <div className="dashboard">
      <ChatContainer />
      <button onClick={logout}>LOGOUT</button>
      <div className="swiper-container">
        <div className="card-container">

<<<<<<< HEAD
          {filteredGenderedUsers?.map((genderedUser) => (
=======


          {genderedUsers.map((genderedUser) => (
>>>>>>> 209cb48b931eddad90789fd1de427d9463608763
            <TinderCard
              className="swipe"
              key={genderedUser.user_id}
              onSwipe={(dir) => swiped(dir, genderedUser.user_id)}
              onCardLeftScreen={() => outOfFrame(genderedUser.first_name)}
            >
              <div
                style={{ backgroundImage: "url(" + genderedUser.imageURL + ")" }}
                className="card"
              >
                <h3>{genderedUser.first_name}</h3>
              </div>
            </TinderCard>
          ))}

          <div className="swipe-info">
            {lastDirection ? <p>You swiped {lastDirection}</p> : <p/>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
