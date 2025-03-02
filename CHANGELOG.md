# ConnectyCube Chat Widget changelog

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
