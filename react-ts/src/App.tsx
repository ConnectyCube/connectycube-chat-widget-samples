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
      <h1>ConnectyCube Chat Widget</h1>
      <div className="card">
        <p>
          <code>{'< React + TypeScript >'}</code>
        </p>
      </div>
      {userName && (
        <ConnectyCubeChatWidget
          userName={userName}
          userId={userId}
          appId="8095"
          authKey="83146458-4544-4D6A-A818-7882D4D8B3E6"
          config={{ debug: { mode: 1 } }}
          showOnlineUsersTab={true}
          splitView={true}
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
