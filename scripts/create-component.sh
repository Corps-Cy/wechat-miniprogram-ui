#!/usr/bin/env bash

# Helper script to scaffold a new WeChat Mini Program component
# Usage: ./scripts/create-component.sh <component-name>

set -e

if [ -z "$1" ]; then
  echo "Usage: $0 <component-name>"
  exit 1
fi

NAME="$1"
TARGET_DIR="miniprogram/components/${NAME}"

if [ -d "${TARGET_DIR}" ]; then
  echo "Error: Directory ${TARGET_DIR} already exists."
  exit 1
fi

mkdir -p "${TARGET_DIR}"

# 1. index.json
cat > "${TARGET_DIR}/index.json" <<EOF
{
  "component": true,
  "usingComponents": {}
}
EOF

# 2. index.wxml
cat > "${TARGET_DIR}/index.wxml" <<EOF
<view class="${NAME}-container">
  <text class="title">{{title}}</text>
  <slot></slot>
</view>
EOF

# 3. index.wxss
cat > "${TARGET_DIR}/index.wxss" <<EOF
.${NAME}-container {
  display: flex;
  flex-direction: column;
  padding: 24rpx;
  box-sizing: border-box;
}

.title {
  font-size: 32rpx;
  font-weight: 700;
  color: #0f172a;
}
EOF

# 4. index.js
cat > "${TARGET_DIR}/index.js" <<EOF
Component({
  properties: {
    title: {
      type: String,
      value: '${NAME}'
    }
  },

  data: {},

  methods: {}
});
EOF

echo "✅ Component [${NAME}] successfully created in ${TARGET_DIR}!"
