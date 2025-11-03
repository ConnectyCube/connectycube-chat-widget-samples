const CONFIG = {
  credentials: {
    appId: "REPLACE_APP_ID",
    authKey: "REPLACE_APP_AUTH_KEY"
  },
  widget: {
    userPresence: {
      lastSeen: (`${'REPLACE_ENABLE_USER_LAST_SEEN'}` as string) === "true",
      userStatuses: (`${'REPLACE_ENABLE_USER_STATUSES'}` as string) === "true",
      chatStatus: (`${'REPLACE_ENABLE_SHOW_CHAT_STATUS'}` as string) === "true",
    },
    notification: {
      show: (`${'REPLACE_ENABLE_SHOW_NOTIFICATIONS'}` as string) === "true",
      playSound: (`${'REPLACE_ENABLE_PLAY_SOUND'}` as string) === "true",
      webPush: {
        enable: true,
        publicKey: "BEzSbibTbmBN0wZWd2-ouzv4N-Ljr0idzOndkZ_dB-6HZIUTKewVbfjcRmuOUChK76NhmjICJNWjlBq288yU3IA"
      }
    },
    moderation: {
      contentReporting: (`${'REPLACE_ENABLE_CONTENT_REPORTING'}` as string) === "true",
      blockList: (`${'REPLACE_ENABLE_BLOCK_LIST'}` as string) === "true",
    },
    calls: {
      enable: (`${'REPLACE_ENABLE_CALLS'}` as string) === "true",
    },
    misc: {
      previewUrl: (`${'REPLACE_ENABLE_URL_PREVIEW'}` as string) === "true",
    }
  }
};

export default CONFIG;
