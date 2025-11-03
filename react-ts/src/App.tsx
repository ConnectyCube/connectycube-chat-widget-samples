import { useEffect, useState } from "react";
import ConnectyCubeChatWidget from "@connectycube/chat-widget/react18";
import CONFIG from "./config";
import connectycubeLogo from "/logo.png";
import "./App.css";

function App() {
  const [userId, setUserId] = useState<string | undefined>();
  const [userName, setUserName] = useState<string | undefined>();
  const [userAvatar, setUserAvatar] = useState<string | undefined>();

  useEffect(() => {
    const { user } = JSON.parse(localStorage.getItem('@connectycube/chat-widget:session') || '{}');
    const id = localStorage.getItem("userId") || user?.external_id || generateRandomID(10);
    const name =
      localStorage.getItem("userName") || user?.full_name ||
      prompt("What's your name?") ||
      randomMarvelCharacterName();
    const avatar = localStorage.getItem("userAvatar") || user?.external_id || randomAvatar(id);

    localStorage.setItem("userId", id);
    localStorage.setItem("userName", name);
    localStorage.setItem("userAvatar", avatar);

    queueMicrotask(() => setUserId(id));
    queueMicrotask(() => setUserName(name));
    queueMicrotask(() => setUserAvatar(avatar));
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
      <h1>Chat Widget demo (React)</h1>
      <br />
      <p>Click the blue Chat button bottom right to open a chat</p>
      {userId && (
        <ConnectyCubeChatWidget
          appId={CONFIG.credentials.appId}
          authKey={CONFIG.credentials.authKey}

          enableUserStatuses={CONFIG.widget.userPresence.userStatuses}
          showChatStatus={CONFIG.widget.userPresence.chatStatus}
          enableLastSeen={CONFIG.widget.userPresence.lastSeen}

          showNotifications={CONFIG.widget.notification.show}
          playSound={CONFIG.widget.notification.playSound}

          enableContentReporting={CONFIG.widget.moderation.contentReporting}
          enableBlockList={CONFIG.widget.moderation.blockList}

          enableCalls={CONFIG.widget.calls.enable}

          enableUrlPreview={CONFIG.widget.misc.previewUrl}

          config={{
            chat: { streamManagement: { enable: true } },
            debug: { mode: 1 },
          }}
          showOnlineUsersTab
          splitView
          userId={userId}
          userName={userName}
          userAvatar={userAvatar}
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
          translation={"en"}
          webPushNotifications={CONFIG.widget.notification.webPush.enable}
          webPushVapidPublicKey={CONFIG.widget.notification.webPush.publicKey}
          serviceWorkerPath="/connectycube-chat-widget-sw.js"
          enableOnlineUsersBadge
          getOnlineUsersInterval={180}
          limitUrlsPreviews={1}
          attachmentsAccept="image/*,video/*,.pdf,audio/*"
          
          // // uncomment it if you want to place a Chat button bottom Left
          // buttonStyle={{left: '0.5rem', right: 'auto'}}
          // portalStyle={{left: '0.5rem', right: 'auto'}}

          onOpenChange={(open: boolean) =>
            console.log("[@connectycube/chat-widget] open:", open)
          }
          onUnreadCountChange={(count: number) =>
            console.log(
              "[@connectycube/chat-widget] unread messages count:",
              count
            )
          }
          onOnlineUsersCountChange={(count: number) => {
            console.log(
              "[@connectycube/chat-widget] online users count:",
              count
            );
          }}
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
  "Wolverine",
  "Deadpool",
  "Scarlet Witch",
  "Vision",
  "Scott Lang",
  "Sam Wilson",
  "Bucky Barnes",
  "Peter Quill",
  "Gamora",
  "Elektra",
  "Drax the Destroyer",
  "Rocket Raccoon",
  "Groot",
  "Nebula",
  "Loki",
  "Quicksilver",
  "Storm",
  "Jean Grey",
  "Cyclops",
  "Beast",
  "Nightcrawler",
  "Rogue",
  "Iceman",
  "Professor X",
  "Magneto",
  "Mystique",
  "Psylocke",
  "Silver Surfer",
  "Galactus",
  "Thanos",
  "Ultron",
  "Red Skull",
  "Green Goblin",
  "Venom",
  "Doctor Octopus",
  "Electro",
  "Iron Fist",
  "Daredevil",
  "Ghost Rider",
  "Moon Knight",
];

const randomNumber = (from: number = 0, to: number = 100) => {
  return Math.floor(Math.random() * to) + from;
};

const randomMarvelCharacterName = () => {
  return `${marvelCharacters[randomNumber(0, marvelCharacters.length + 1)]}`;
};

const generateRandomID = (length = 8) => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(randomNumber(0, chars.length));
  }
  return result;
};

const randomAvatar = (id?: string | number) => {
  const _id = id || generateRandomID();
  const _set = randomNumber(1, 5);
  const _bg = randomNumber(0, 3);
  return `https://robohash.org/${_id}?size=300x300&set=set${_set}&bgset=bg${_bg}`;
};
