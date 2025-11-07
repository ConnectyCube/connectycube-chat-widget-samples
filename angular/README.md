# ConnectyCube chat widget Angular code samples

## Overview

The repo provides ready code sample of [ConnectyCube chat widget](https://www.npmjs.com/package/@connectycube/chat-widget) integration.

Chat widget is a React component that seamlessly integrates ConnectyCube's real-time chat capabilities into your web applications. This widget offers an out-of-the-box solution for embedding chat features—such as instant messaging, user presence, and file sharing—without the overhead of building a complete chat system from scratch.

## Demo

<https://connectycube-chat-widget-angular.onrender.com>

Split-view chat widget:

<kbd><img alt="ConnectyCube chat widget, split view image demo" src="https://developers.connectycube.com/images/chat_widget/chat-widget-1.png" width="400" /></kbd>

Single-view chat widget:

<kbd><img alt="ConnectyCube chat widget, single view image demo" src="https://developers.connectycube.com/images/chat_widget/chat-widget-2.png" width="400" /></kbd>

## Setup

### Instal dependencies

```
npm i
```

### Configure

Register new account and application at https://admin.connectycube.com and take Application credentials ( App Id and Auth Key) from 'Overview -> Credentials' page.

Generate default widget config with your credentials:
```
APP_ID=123 APP_AUTH_KEY=... sh apply-default-config.sh
```

You can edit config (src/app/config) your self by replacing placeholder variables ('REPLACE_APP_ID', 'REPLACE_APP_AUTH_KEY' etc.)

### Run Locally

```
npm start
```

### Build for Production

```
npm run build
```
## Documentation

Follow ConnectyCube chat widget [integration documentation](https://www.npmjs.com/package/@connectycube/chat-widget) for installation guide and available props.

## Community and support

- [Blog](https://connectycube.com/blog)
- X (twitter) [@ConnectyCube](https://x.com/ConnectyCube)
- [Facebook](https://www.facebook.com/ConnectyCube)

## Website

[https://connectycube.com](https://connectycube.com)

## License

MIT
