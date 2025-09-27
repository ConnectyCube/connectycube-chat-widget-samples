import { Component, ElementRef, OnDestroy, AfterViewInit } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import ConnectyCubeChatWidget from '@connectycube/chat-widget';

@Component({
  selector: 'app-chat-widget',
  imports: [],
  template: ``,
  styles: ``,
})
export class ChatWidget implements AfterViewInit, OnDestroy {
  private root?: ReactDOM.Root;

  constructor(private host: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
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

    const randomNumber = (from = 0, to = 100) => Math.floor(Math.random() * to) + from;

    const randomMarvelCharacterName = () =>
      marvelCharacters[randomNumber(0, marvelCharacters.length)];

    const generateRandomID = (length = 8) => {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      for (let i = 0; i < length; i++) {
        result += chars.charAt(randomNumber(0, chars.length));
      }
      return result;
    };

    const randomAvatar = (id?: string) => {
      const _id = id || generateRandomID();
      const _set = randomNumber(1, 5);
      const _bg = randomNumber(0, 3);
      return `https://robohash.org/${_id}?size=300x300&set=set${_set}&bgset=bg${_bg}`;
    };

    const session = JSON.parse(localStorage.getItem('@connectycube/chat-widget:session') || '{}');
    const storedUser = session.user || {};

    const userId =
      localStorage.getItem('userId') || storedUser?.external_id || generateRandomID(10);

    const userName =
      localStorage.getItem('userName') ||
      storedUser?.full_name ||
      prompt("What's your name?") ||
      randomMarvelCharacterName();

    const userAvatar =
      localStorage.getItem('userAvatar') || storedUser?.avatar || randomAvatar(userId);

    localStorage.setItem('userId', userId);
    localStorage.setItem('userName', userName);
    localStorage.setItem('userAvatar', userAvatar);

    const props = {
      appId: 8095,
      authKey: '83146458-4544-4D6A-A818-7882D4D8B3E6',
      config: {
        chat: { streamManagement: { enable: true } },
        debug: { mode: 1 },
      },
      splitView: true,
      showOnlineUsersTab: true,
      translation: 'en' as 'en' | 'el' | 'ua',
      userName,
      userId,
      userAvatar,
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
      showNotifications: true,
      playSound: true,
      webPushNotifications: true,
      webPushVapidPublicKey:
        'BEzSbibTbmBN0wZWd2-ouzv4N-Ljr0idzOndkZ_dB-6HZIUTKewVbfjcRmuOUChK76NhmjICJNWjlBq288yU3IA',
      serviceWorkerPath: '/connectycube-chat-widget-sw.js',
      enableContentReporting: true,
      enableBlockList: true,
      enableLastSeen: true,
      enableOnlineUsersBadge: true,
      getOnlineUsersInterval: 180,
      enableUrlPreview: true,
      limitUrlsPreviews: 1,
      attachmentsAccept: null,
      showChatStatus: true,
      enableUserStatuses: true,
      enableCalls: true,
      onOpenChange: (open: boolean) => console.log('widget open:', open),
      onUnreadCountChange: (count: number) => console.log('unread messages count:', count),
      onOnlineUsersCountChange: (count: number) => console.log('online users count:', count),
    };

    this.root = ReactDOM.createRoot(this.host.nativeElement);
    this.root.render(React.createElement(ConnectyCubeChatWidget, props));
  }

  ngOnDestroy(): void {
    this.root?.unmount();
  }
}
