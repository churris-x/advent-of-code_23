#!/bin/bash

echo "Creating new readme"
pwd | xargs basename | xargs -I @ echo "# @" > README.md

echo "Removing example files"
rm -fv example.js example.jsx cleanup.sh &&
git add . &&
git status &&
git commit -m "Set up repo"
