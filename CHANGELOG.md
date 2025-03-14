# ConnectyCube Chat Widget changelog

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