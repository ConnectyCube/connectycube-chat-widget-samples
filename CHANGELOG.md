# ConnectyCube Chat Widget changelog

## 0.25.0

### Features

- User can select status "Available", "Busy" and "Away"
  - new prop `enableUserStatuses` to enable the feature. Default is **false**
- New message statuses "wait" and "lost", along with existing "sent" and "read"
- Hide chat widget by click or touch, or press "Escape" outside widget's containers
  - new prop `disableClickOutside` to disable the feature. Default is **false**
- Chat connection statuses "disconnected", "connecting" and "connected"
  - new prop `showChatStatus` to enable the feature. Default is **false**
- Improved chat/internet automatic reconnection flow to prevent messages missing
- Updated **defaultChat.opponentUserId** prop to behave like **userId** prop (from user's own system) and have type **string**
- Added the ability to embed chat-widget in a parent block. It will open by default, and the widget's button will be hidden
  - new prop `embedView` to enable the feature. Default is **false**. If enabled, `open` and `hideWidgetButton` will not react

### Misc

- Implemented scrollbar styles to prevent inheritance in widget's #shadow-root
- Added an overlay for modals (Dialog and AlertDialog)
- Props `portalClassName`, `buttonClassName`, `buttonClassName` and `onlineBadgeClassName` were removed. Use `portalStyle`, `buttonStyle`, `badgeStyle` and `onlineBadgeStyle` instead

### Bug fixes

- Light text on a white background
- Document's scroll locks on mobile
- Scroll by wheel is broken in modals
- Message status "read" does not react in real-time

## 0.24.0

### Bug fixes

- UI fixes for when `enableUrlPreview=false`

## 0.23.0

### Features

- The chat widget is now fully rendered inside a Shadow DOM, preventing style conflicts and external interference
- Supports React 19. Import the dedicated ESM-only build instead: `import ConnectyCubeChatWidget from '@connectycube/chat-widget/react19'`

### Bug fixes

- Fix message text line break behavior
- Online users badge: hide if count = 0
- Do not request online users if `enableOnlineUsersBadge=false`

### Misc

- Users tab: remove arrow icon from user cell
- Removed dependency on the libraries "react-router", "react-router-dom" and "react-scroll"

## 0.22.0

### Features

- URL preview - unfurl a link once posted in chat
  - new prop `enableUrlPreview` to enable the feature
  - new prop `limitUrlsPreviews` to set maximum displayed URLs preview in single message. Default is 1 and max is 5
- Display user last activity
  - new prop `enableLastSeen` to show green dot on user avatar in chats list when user is online and last seen information on chat header
- Display online users badge on chat widget button
  - new prop `enableOnlineUsersBadge` to enable the feature
  - new prop `getOnlineUsersInterval` to set how frequently the badge should be updated, in seconds. Default is 300 (5 minutes), min is 30 seconds
  - new prop `onOnlineUsersCountChange` to receive updates on the online users counter change
  - new props `onlineBadgeStyle` and `onlineBadgeClassName` to customize the badge
- User typing feature

## 0.21.0

### Features

- Video-preview for video attachment in chat

### Misc

- NodeJs 22 support
- Upgraded `connectycube` to 4.2.2 and `@connectycube/use-chat` to 0.18.0

### Bug fixes

- Web Push Notifications on mobile bug fixes

## 0.20.0

### Features

- Push Notifications support (receive notifications when browser tab is closed). New props: `webPushNotifications`, `webPushVapidPublicKey`, `serviceWorkerPath`
- Allow users search from 3 characters min (was 4)
- New props - `hideNewUserChatOption`, `hideNewGroupChatOption` - To hide 'New group' / 'New message' options in Create Chat dropdown menu

### Bug fixes

- [mobile] can't access own profile page
- `attachmetsAccept` prop: block sending unsupported attachments when select All Files in file picker
- Improved block list flow

## 0.19.0

### Bug fixes

- fix user session restore

## 0.18.0

### Misc

- update styles for chat item for not to interfere with host site styles

## 0.17.0

### Features

- added `My Profile`
- display blocked users list in `My Profile`
- added Notification Settings in `My Profile` (can on/off notifications and notification sound)
- shows a toast message when a blocked user tries to send a message;
- added `attachmentsAccept` prop to specify supported attachments types
- added `defaultChat` prop to force widget open particular chat

## 0.16.0

### Features

- report user feature (via `enableContentReporting` prop)
- block user feature (via `enableBlockList` prop)
- notification on new message (via `showNotifications`, `playSound` and `muted` props)

### Bug fixes

- change `break-all` to `break-word` for chat messages text
- chats list: last item is not visible

### Misc

- redux store was replaced by [zustand](https://github.com/pmndrs/zustand);

## 0.15.0

### Features

- highlight links in chat messages;
- updated attachments to support uploading any file;
- create 1-1 chat on send 1st message, not when click on a user
- encapsulated chat widget styles to prevent global styling effects;
- implemented `open` prop to manage chat widget visibility state;
- implemented `window.ConnectyCubeChatWidget.toggle()` function to manage chat widget visibility state when used as UMD;
- implemented `onOpenChange` and `onUnreadCountChange` props as callbacks to receive updates on the visibility of the chat widget and the unread message counter, respectively;
- implemented `hideWidgetButton` prop to hide the chat widget button and use a custom one;

### Bug fixes

- blocked sending files as attachments if they do not have `type` or `size` properties.
- fixed z-index for Chat button and widget view

### Misc

- upgraded tailwindcss to version 4;
- upgraded ShadCN-UI components to support TailwindCSS version 4;

## 0.14.4

### Bug fixes

- fix avatar crash when chat name is empty
  
## 0.14.3

### Bug fixes

- fix missing typings declaration

## 0.14.2

### Bug fixes

- fix README

## 0.14.0

### Features

- Introduce user profile link via `userProfileLink` prop
- Hide new chat button via `hideNewChatButton` prop
- English, Greek, Ukrainian languages supported via `translation` prop

## 0.13.0

### Features

- user avatar
- suggested messages

## 0.12.0

### Features

- message drafts
- allow to change `userId` prop on the flight

### Bug fixes

- fix mobile UI styles

## 0.11.0

### Features

- displays total unread messages counter;
- placeholders for empty lists;

### Bug fixes

- can restore expired session;
- can retrieve messages while the widget is collapsed;
- incoming notification sound;
- UI styles;

## 0.10.0

Initial release.
