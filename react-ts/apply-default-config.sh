#!/bin/bash

cp src/default-config.ts src/config.ts

sed -i.bak -e "s/REPLACE_APP_ID/$APP_ID/g" -e "s/REPLACE_APP_AUTH_KEY/$APP_AUTH_KEY/g" src/config.ts

rm -rf src/config.ts.bak
