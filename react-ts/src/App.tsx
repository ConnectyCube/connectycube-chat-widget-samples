import { useEffect } from "react";
import ConnectyCubeChatWidget from "@connectycube/chat-widget";
import connectycubeLogo from "/logo.png";
import "./App.css";
import useStateRef from "react-usestateref";

function App() {
  const [userId, setUserId, userIdRef] = useStateRef<string | undefined>();
  const [userName, setUserName, userNameRef] = useStateRef<string | undefined>();
  const [userAvatar, setUserAvatar, userAvatarRef] = useStateRef<string | undefined>();

  useEffect(() => {
    if (!userIdRef.current) {
      const id = localStorage.getItem("userId") || generateRandomID(10);

      localStorage.setItem("userId", id);
      setUserId(id);
    }
    if (!userNameRef.current) {
      const name = localStorage.getItem("userName") || prompt("What's your name?") || randomMarvelCharacterName();

      localStorage.setItem("userName", name);
      setUserName(name);
    }
    if (!userAvatarRef.current) {
      let avatar = localStorage.getItem("userAvatar")

      if (!avatar) {
        const randomId = userIdRef.current || generateRandomID(10);
        const randomSet = randomDigit(1, 5);
        const randomBg = randomDigit(0, 3);
        avatar = `https://robohash.org/${randomId}?size=300x300&set=set${randomSet}&bgset=bg${randomBg}`;
      }

      localStorage.setItem("userAvatar", avatar);
      setUserAvatar(userAvatar);
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
      {userId && (
        <ConnectyCubeChatWidget
          appId="8095"
          authKey="83146458-4544-4D6A-A818-7882D4D8B3E6"
          config={{ debug: { mode: 1 } }}
          
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

          showChatStatus

          showNotifications
          playSound

          webPushNotifications
          webPushVapidPublicKey="BEzSbibTbmBN0wZWd2-ouzv4N-Ljr0idzOndkZ_dB-6HZIUTKewVbfjcRmuOUChK76NhmjICJNWjlBq288yU3IA"
          serviceWorkerPath="/web-push-sw.js"

          enableUserStatuses

          enableContentReporting
          enableBlockList
          
          enableLastSeen
          
          enableOnlineUsersBadge
          getOnlineUsersInterval={180}
          
          enableUrlPreview
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
    "Spider-Man", "Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Hawkeye", "Black Panther", "Doctor Strange", "Captain Marvel",
    "Wolverine", "Deadpool", "Scarlet Witch", "Vision", "Scott Lang", "Sam Wilson", "Bucky Barnes", "Peter Quill", "Gamora", "Elektra",
    "Drax the Destroyer", "Rocket Raccoon", "Groot", "Nebula", "Loki", "Quicksilver", "Storm", "Jean Grey",  "Cyclops", "Beast",
    "Nightcrawler", "Rogue", "Iceman", "Professor X", "Magneto", "Mystique", "Psylocke", "Silver Surfer", "Galactus", "Thanos",
    "Ultron", "Red Skull", "Green Goblin", "Venom", "Doctor Octopus", "Electro", "Iron Fist", "Daredevil", "Ghost Rider", "Moon Knight",
];

const randomDigit = (from: number = 0, to: number = 100) => {
  return Math.floor(Math.random() * to) + from;
}

const randomMarvelCharacterName = () => {
  return `${marvelCharacters[randomDigit(0, marvelCharacters.length)]}`
}

const generateRandomID = (length = 8) => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    // Pick a random character from the chars string
    result += chars.charAt(randomDigit(0, chars.length));
  }
  return result;
};
