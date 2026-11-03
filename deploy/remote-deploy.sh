#!/usr/bin/env bash
set -euo pipefail

APP_DIR="${1:-$(pwd)}"
cd "$APP_DIR"

# Keep the last successful build so a failed build does not leave a broken .next.
if [ -d .next ]; then
  rm -rf .next.previous
  cp -a .next .next.previous
fi

npm ci --include=dev

if ! npm run build; then
  echo "Build failed; restoring the previous .next directory." >&2
  rm -rf .next
  if [ -d .next.previous ]; then
    mv .next.previous .next
  fi
  exit 1
fi

rm -rf .next.previous
npm prune --omit=dev
pm2 startOrReload ecosystem.config.cjs --update-env
pm2 save

echo "Deployment complete."
