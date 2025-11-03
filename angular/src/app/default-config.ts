const CONFIG = {
  credentials: {
    appId: "REPLACE_APP_ID",
    authKey: "REPLACE_APP_AUTH_KEY"
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
      previewUrl: true,
    }
  }
};

export default CONFIG;
