#!/usr/bin/env bash
# ==============================================================================
# mov-to-gif.sh - 高画质录屏转 GIF 动画工具
# 依赖：ffmpeg (已安装在 /opt/homebrew/bin/ffmpeg)
# 用法：./scripts/mov-to-gif.sh <input_video.mov|mp4> [output.gif] [fps] [width]
# 示例：./scripts/mov-to-gif.sh demo.mov assets/previews/01-voucher.gif 30 300
# ==============================================================================

set -e

INPUT="$1"
OUTPUT="${2:-${INPUT%.*}.gif}"
FPS="${3:-30}"
SCALE_WIDTH="${4:-300}"

if [ -z "$INPUT" ]; then
  echo "❌ 错误: 请指定输入视频文件路径"
  echo "用法: $0 <input.mov|mp4> [output.gif] [fps=30] [width=300]"
  exit 1
fi

if [ ! -f "$INPUT" ]; then
  echo "❌ 错误: 文件不存在 -> $INPUT"
  exit 1
fi

echo "🎬 正在将视频转为高画质 60fps/30fps GIF..."
echo "  输入: $INPUT"
echo "  输出: $OUTPUT"
echo "  帧率: $FPS fps"
echo "  宽度: ${SCALE_WIDTH}px (等比缩放)"

ffmpeg -y -i "$INPUT" \
  -vf "fps=${FPS},scale=${SCALE_WIDTH}:-1:flags=lanczos,split[s0][s1];[s0]palettegen=max_colors=128:stats_mode=diff[p];[s1][p]paletteuse=dither=bayer:bayer_scale=3" \
  "$OUTPUT"

echo "✅ 转换完成: $OUTPUT ($(du -h "$OUTPUT" | cut -f1))"
