#!/bin/bash

if command -v gsed >/dev/null 2>&1; then
  SED="gsed"
else
  SED="sed"
fi

mv src/app/default-config.ts src/app/config.ts

$SED -i "s/REPLACE_APP_ID/$APP_ID/g" src/app/config.ts
$SED -i "s/REPLACE_APP_AUTH_KEY/$APP_AUTH_KEY/g" src/app/config.ts
