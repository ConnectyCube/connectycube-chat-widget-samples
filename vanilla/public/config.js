const CONFIG = {
  credentials: {
    appId: "8688",
    authKey: "36E6E853-89DA-4001-B050-51A582CBD981"
  },
  config: {
    endpoints: {
      api: "api.connectycube.com",
      chat: "chat.connectycube.com",
    },
  },
  widget: {
    userPresence: {
      lastSeen: true,
      userStatuses: true,
      chatStatus: true,
    },
    notification: {
      show: true,
      playSound: true,
      webPush: {
        enable: true,
        publicKey: "BEzSbibTbmBN0wZWd2-ouzv4N-Ljr0idzOndkZ_dB-6HZIUTKewVbfjcRmuOUChK76NhmjICJNWjlBq288yU3IA"
      }
    },
    moderation: {
      contentReporting: true,
      blockList: true,
    },
    calls: {
      enable: true,
    },
    misc: {
      embedView: true,
      previewUrl: true,
    }
  }
};