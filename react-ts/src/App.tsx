import { useEffect } from "react";
import ConnectyCubeChatWidget from "@connectycube/chat-widget";
import connectycubeLogo from "/logo.png";
import "./App.css";
import { uniqueUsernameGenerator, Config } from "unique-username-generator";
import useStateRef from "react-usestateref";

function App() {
  const [userName, setUserName, userNameRef] = useStateRef<string | null>(
    localStorage.getItem("userName")
  );
  const [userAvatar, setUserAvatar, userAvatarRef] = useStateRef<string | null>(
    localStorage.getItem("userAvatar")
  );

  const userId = localStorage.getItem("userId") || "";

  useEffect(() => {
    if (!userNameRef.current) {
      const promptedName =
        prompt("What's your name?") ||
        uniqueUsernameGenerator(uniqueUsernameGeneratorConfig);
      localStorage.setItem("userName", promptedName);
      localStorage.setItem("userId", generateRandomID(10));
      setUserName(promptedName);
    }

    if (!userAvatarRef.current) {
      const avatar = `https://i.pravatar.cc/300?img=${
        Math.floor(Math.random() * 50) + 1
      }`;
      localStorage.setItem("userAvatar", avatar);
      setUserAvatar(avatar);
    }
  }, []);

  return (
    <>
      <div>
        <a href="https://connectycube.com" target="_blank">
          <img
            src={connectycubeLogo}
            className="logo"
            alt="ConnectyCube logo"
          />
        </a>
      </div>
      <h1>Chat Widget demo</h1>
      <br />
      <p>Click the blue Chat button bottom right to open a chat</p>
      {userName && (
        <ConnectyCubeChatWidget
          userName={userName}
          userId={userId}
          userAvatar={userAvatar!}
          appId="8095"
          authKey="83146458-4544-4D6A-A818-7882D4D8B3E6"
          config={{ debug: { mode: 1 } }}
          showOnlineUsersTab={true}
          splitView={true}
          quickActions={{
            title: "Quick Actions",
            description:
              "Select an action from the options below or type a first message to start a conversation.",
            actions: [
              "Hello there!",
              "How are you doing today?",
              "What features of the ConnectyCube SDK do you find most useful and how have they improved your development process?",
              "Goodbye and take care!",
            ],
          }}
          onOpenChange={(open) =>
            console.log("[@connectycube/chat-widget] open:", open)
          }
          onUnreadCountChange={(count) =>
            console.log(
              "[@connectycube/chat-widget] unread messages count:",
              count
            )
          }
          // // uncomment it if you want to place a Chat button bottom Left
          // buttonClassName={"left-2 right-auto"}
          // portalClassName={"left-2 right-auto"}
        />
      )}
    </>
  );
}

export default App;

const marvelCharacters = [
  "Spider-Man",
  "Iron Man",
  "Captain America",
  "Thor",
  "Hulk",
  "Black Widow",
  "Hawkeye",
  "Black Panther",
  "Doctor Strange",
  "Captain Marvel",
];

const uniqueUsernameGeneratorConfig: Config = {
  dictionaries: [marvelCharacters],
  separator: "",
  style: "capital",
  randomDigits: 3,
};

const generateRandomID = (length = 8) => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    // Pick a random character from the chars string
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};
