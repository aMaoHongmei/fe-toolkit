---
nav: API
group:
  title: 颜色工具
  order: 6
demo:
  cols: 1
---

# color

下方 api 均为函数，可直接 import 使用

## API

| 参数                   | 说明                                             | 类型                                     | 默认值 | 版本  |
| :--------------------- | ------------------------------------------------ | ---------------------------------------- | ------ | ----- |
| calculateBestTextColor | 根据与背景的对比度确定最佳文本颜色（黑色或白色） | (hexColor: string) => `#ffffff/#000000`  | -      | 0.0.7 |
| colorDarken            | 给定通过百分比，使 HEX 颜色变暗                  | (color: string, amount: number) => HEX   | ''     | 0.0.7 |
| colorIsDark            | 颜色是否为深色                                   | (color: string) => boolean               | ''     | 0.0.7 |
| colorLighten           | 根据通过的百分比点亮 6 个字符的 HEX 颜色         | (color: string, amount: number) => HEX   | ''     | 0.0.7 |
| hexToRGB               | 将 HEX 颜色转换为其 RGB 表示                     | (hex: string) => RGB                     | ''     | 0.0.7 |
| isHexColor             | 判断是否 十六进制颜色值                          | (color: string) => boolean               | ''     | 0.0.7 |
| rgbToHex               | RGB 颜色值转换为 十六进制颜色值                  | (r: number, g: number, b: number) => HEX | ''     | 0.0.7 |
