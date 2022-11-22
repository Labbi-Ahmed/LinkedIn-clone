import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import PhotoIcon from "@mui/icons-material/Photo";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";
import { db } from "../../firebase";
import firebase from "firebase/compat/app";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: "Labbi Ahmed",
      discription: "this is a test",
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");

    // setPosts([])
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOption">
          <InputOption Icon={PhotoIcon} title="Photo" color="lightblue" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="green" />
          <InputOption Icon={EventNoteIcon} title="Event" color="gray" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="lightgreen"
          />
        </div>
      </div>

      {/* posts */}
      {posts.map(({ id, data: { name, discription, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          discription={discription}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
      {/* <Post
        name="Labbi Ahmed"
        discription="This is my won linked in clone project"
        photoUrl="Images/me.jpg"
        messae=" Wow This work"
      /> */}
    </div>
  );
}

export default Feed;