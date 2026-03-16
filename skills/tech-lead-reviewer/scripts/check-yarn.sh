#!/bin/bash
if [ -f "package-lock.json" ]; then
  echo "❌ Error: npm detected! Please delete package-lock.json and use yarn."
  exit 1
else
  echo "✅ Only yarn.lock detected. Good to go!"
fi