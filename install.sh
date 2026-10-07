#!/usr/bin/env bash

# Installation script for wechat-miniprogram-ui skill
# Supports linking to Antigravity global skills directory (~/.gemini/config/skills)

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TARGET_DIR="${HOME}/.gemini/config/skills"
SKILL_NAME="wechat-miniprogram-ui"
DEST_PATH="${TARGET_DIR}/${SKILL_NAME}"

echo "🚀 Installing ${SKILL_NAME} to ${DEST_PATH}..."

mkdir -p "${TARGET_DIR}"

if [ -L "${DEST_PATH}" ]; then
  echo "⚠️ Existing symlink found at ${DEST_PATH}, removing..."
  rm "${DEST_PATH}"
elif [ -d "${DEST_PATH}" ]; then
  echo "⚠️ Existing directory found at ${DEST_PATH}, backing up to ${DEST_PATH}.bak..."
  mv "${DEST_PATH}" "${DEST_PATH}.bak"
fi

ln -s "${SCRIPT_DIR}" "${DEST_PATH}"

echo "✅ Successfully linked ${SKILL_NAME}!"
echo "📍 Location: ${DEST_PATH} -> ${SCRIPT_DIR}"
echo "🎉 Skill is now globally active in Antigravity."
