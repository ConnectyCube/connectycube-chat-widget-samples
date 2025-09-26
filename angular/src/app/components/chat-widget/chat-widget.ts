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
    const props = {
      appId: 8095,
      authKey: '83146458-4544-4D6A-A818-7882D4D8B3E6',
      config: {
        endpoints: {
          api: 'api.connectycube.com',
          chat: 'chat.connectycube.com',
        },
        chat: {
          streamManagement: {
            enable: true,
          },
        },
        debug: {
          mode: 1,
        },
      },
      splitView: true,
      showOnlineUsersTab: true,
      translation: 'en' as 'en' | 'el' | 'ua',
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
