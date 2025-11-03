#!/bin/bash

mv dist/angular/stats.json dist/angular/browser/stats.json

node post-build.js

mv dist/angular/browser dist-f
rm -rf dist
mv dist-f dist
rm -rf dist-f
