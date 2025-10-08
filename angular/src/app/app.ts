import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConnectyCubeChatWidgetComponent } from '@connectycube/chat-widget-angular';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ConnectyCubeChatWidgetComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Chat Widget demo (Angular)');
  protected readonly props = this.createProps();

  private createProps() {
    const marvelCharacters = [
      'Spider-Man',
      'Iron Man',
      'Captain America',
      'Thor',
      'Hulk',
      'Black Widow',
      'Hawkeye',
      'Black Panther',
      'Doctor Strange',
      'Captain Marvel',
      'Wolverine',
      'Deadpool',
      'Scarlet Witch',
      'Vision',
      'Scott Lang',
      'Sam Wilson',
      'Bucky Barnes',
      'Peter Quill',
      'Gamora',
      'Elektra',
      'Drax the Destroyer',
      'Rocket Raccoon',
      'Groot',
      'Nebula',
      'Loki',
      'Quicksilver',
      'Storm',
      'Jean Grey',
      'Cyclops',
      'Beast',
      'Nightcrawler',
      'Rogue',
      'Iceman',
      'Professor X',
      'Magneto',
      'Mystique',
      'Psylocke',
      'Silver Surfer',
      'Galactus',
      'Thanos',
      'Ultron',
      'Red Skull',
      'Green Goblin',
      'Venom',
      'Doctor Octopus',
      'Electro',
      'Iron Fist',
      'Daredevil',
      'Ghost Rider',
      'Moon Knight',
    ];

    const randomNumber = (from: number = 0, to: number = 100) => {
      return Math.floor(Math.random() * to) + from;
    };

    const randomMarvelCharacterName = () => {
      return `${marvelCharacters[randomNumber(0, marvelCharacters.length + 1)]}`;
    };

    const generateRandomID = (length: number = 8) => {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      for (let i = 0; i < length; i++) {
        result += chars.charAt(randomNumber(0, chars.length));
      }
      return result;
    };

    const randomAvatar = (id: string | number) => {
      const _id = id || generateRandomID();
      const _set = randomNumber(1, 5);
      const _bg = randomNumber(0, 3);
      return `https://robohash.org/${_id}?size=300x300&set=set${_set}&bgset=bg${_bg}`;
    };

    const { user } = JSON.parse(localStorage.getItem('@connectycube/chat-widget:session') || '{}');
    const userId = localStorage.getItem('userId') || user?.external_id || generateRandomID(10);
    const userName =
      localStorage.getItem('userName') ||
      user?.full_name ||
      prompt("What's your name?") ||
      randomMarvelCharacterName();
    const userAvatar = localStorage.getItem('userAvatar') || user?.avatar || randomAvatar(userId);

    localStorage.setItem('userId', userId);
    localStorage.setItem('userName', userName);
    localStorage.setItem('userAvatar', userAvatar);

    return {
      // credentials
      appId: 8095,
      authKey: '83146458-4544-4D6A-A818-7882D4D8B3E6',
      config: {
        chat: { streamManagement: { enable: true } },
        debug: { mode: 1 },
      },
      // view mode
      splitView: true,
      showOnlineUsersTab: true,
      // user info
      userName,
      userId,
      userAvatar,
      // quick actions
      quickActions: {
        title: 'Quick Actions',
        description:
          'Select an action from the options below or type a first message to start a conversation.',
        actions: [
          'Hello there!',
          'How are you doing today?',
          'What features of the ConnectyCube SDK do you find most useful and how have they improved your development process?',
          'Goodbye and take care!',
        ],
      },
      // language
      translation: 'en' as const,
      // notifications
      // muted: true,
      showNotifications: true,
      playSound: true,
      // push notifications
      webPushNotifications: true,
      webPushVapidPublicKey:
        'BEzSbibTbmBN0wZWd2-ouzv4N-Ljr0idzOndkZ_dB-6HZIUTKewVbfjcRmuOUChK76NhmjICJNWjlBq288yU3IA',
      serviceWorkerPath: '/connectycube-chat-widget-sw.js',
      // moderation
      enableContentReporting: true,
      enableBlockList: true,
      // last seen
      enableLastSeen: true,
      // online users badge
      enableOnlineUsersBadge: true,
      getOnlineUsersInterval: 180,
      // url preview
      enableUrlPreview: true,
      limitUrlsPreviews: 1,
      // attachments settings
      attachmentsAccept: 'image/*,video/*,.pdf,audio/*',
      // chat connection indicator
      showChatStatus: true,
      // user statuses
      enableUserStatuses: true,
      // video/audio calls
      enableCalls: true,
      // uncomment it if you want to place a Chat button bottom Left
      // buttonStyle: { "left": "0.5rem", "right": "auto" },
      // portalStyle: { "left": "0.5rem", "right": "auto" },
      onOpenChange: (open: boolean) => {
        console.log('[@connectycube/chat-widget-angular] open:', open);
      },
      onUnreadCountChange: (count: number) => {
        console.log('[@connectycube/chat-widget-angular] unread messages count:', count);
      },
      onOnlineUsersCountChange: (count: number) => {
        console.log('[@connectycube/chat-widget-angular] online users count:', count);
      },
    };
  }
}
