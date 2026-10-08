#!/usr/bin/env bash

# Installation script for wechat-miniprogram-ui skill
# Installs directly to Antigravity global skills directory (~/.gemini/config/skills) or project-level (.agents/skills)

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SKILL_NAME="wechat-miniprogram-ui"
TARGET_DIR="${1:-${HOME}/.gemini/config/skills}"
DEST_PATH="${TARGET_DIR}/${SKILL_NAME}"

echo "🚀 Installing ${SKILL_NAME} to ${DEST_PATH}..."

mkdir -p "${TARGET_DIR}"

if [ -L "${DEST_PATH}" ]; then
  echo "⚠️ Existing symlink found at ${DEST_PATH}, removing..."
  rm "${DEST_PATH}"
elif [ -d "${DEST_PATH}" ]; then
  echo "⚠️ Existing directory found at ${DEST_PATH}, updating..."
  rm -rf "${DEST_PATH}"
fi

mkdir -p "${DEST_PATH}"

# Copy all skill files, excluding .git
if command -v rsync >/dev/null 2>&1; then
  rsync -av --exclude='.git' "${SCRIPT_DIR}/" "${DEST_PATH}/" >/dev/null
else
  cp -R "${SCRIPT_DIR}"/* "${DEST_PATH}/"
fi

echo "✅ Successfully installed ${SKILL_NAME}!"
echo "📍 Location: ${DEST_PATH}"
echo "🎉 Skill is now ready and active in Antigravity."
