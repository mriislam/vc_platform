import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {

  const [room,setRoom] = useState("");
  const navigate = useNavigate();

  const joinMeeting = () => {
    if(!room) return alert("Enter meeting ID");
    navigate("/meeting/" + room);
  };

  return (
    <div style={{padding:40}}>
      <h1>VC Platform</h1>

      <input
        placeholder="Enter Meeting ID"
        value={room}
        onChange={(e)=>setRoom(e.target.value)}
      />

      <button onClick={joinMeeting}>
        Join Meeting
      </button>
    </div>
  );
}

export default Home;