const CONFIG = {
  credentials: {
    appId: "REPLACE_APP_ID",
    authKey: "REPLACE_APP_AUTH_KEY"
  },
  widget: {
    userPresence: {
      lastSeen: `${REPLACE_ENABLE_USER_LAST_SEEN}` === "true",
      userStatuses: `${REPLACE_ENABLE_USER_STATUSES}` === "true",
      chatStatus: `${REPLACE_ENABLE_SHOW_CHAT_STATUS}` === "true",
    },
    notification: {
      show: `${REPLACE_ENABLE_SHOW_NOTIFICATIONS}` === "true",
      playSound: `${REPLACE_ENABLE_PLAY_SOUND}` === "true",
      webPush: {
        enable: true,
        publicKey: "BEzSbibTbmBN0wZWd2-ouzv4N-Ljr0idzOndkZ_dB-6HZIUTKewVbfjcRmuOUChK76NhmjICJNWjlBq288yU3IA"
      }
    },
    moderation: {
      contentReporting: `${REPLACE_ENABLE_CONTENT_REPORTING}` === "true",
      blockList: `${REPLACE_ENABLE_BLOCK_LIST}` === "true",
    },
    calls: {
      enable: `${REPLACE_ENABLE_CALLS}` === "true",
    },
    misc: {
      previewUrl: `${REPLACE_ENABLE_URL_PREVIEW}` === "true",
    }
  }
};