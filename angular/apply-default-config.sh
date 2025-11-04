#!/bin/bash

cp src/app/default-config.ts src/app/config.ts

sed -i.bak -e "s/REPLACE_APP_ID/$APP_ID/g" -e "s/REPLACE_APP_AUTH_KEY/$APP_AUTH_KEY/g" src/app/config.ts

rm -rf src/app/config.ts.bak
