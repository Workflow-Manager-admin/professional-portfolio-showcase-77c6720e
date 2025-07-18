#!/bin/bash
cd /home/kavia/workspace/code-generation/professional-portfolio-showcase-77c6720e/frontend_reactjs
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

