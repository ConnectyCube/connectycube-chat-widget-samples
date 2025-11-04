#!/bin/bash

if command -v gsed >/dev/null 2>&1; then
  SED="gsed"
else
  SED="sed"
fi

cp public/default-config.js public/config.js

$SED -i "s/REPLACE_APP_ID/$APP_ID/g" public/config.js
$SED -i "s/REPLACE_APP_AUTH_KEY/$APP_AUTH_KEY/g" public/config.js