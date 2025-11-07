#!/bin/bash

cp public/default-config.js public/config.js

sed -i.bak -e "s/REPLACE_APP_ID/$APP_ID/g" -e "s/REPLACE_APP_AUTH_KEY/$APP_AUTH_KEY/g" public/config.js

rm -rf public/config.js.bak