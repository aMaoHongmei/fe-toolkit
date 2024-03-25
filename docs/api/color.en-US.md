---
nav: API
group:
  title: color tool
  order: 6
demo:
  cols: 1
---

# Color

following api are functions, can be used directly import

## API

| Parameter              | Description                                                                  | Type                                     | Default Value | Version |
| :--------------------- | ---------------------------------------------------------------------------- | ---------------------------------------- | ------------- | ------- |
| calculateBestTextColor | Determine best text color based on contrast with background (black or white) | (hexColor: string) => `#ffffff/#000000`  | -             | 0.0.7   |
| colorDarken            | Given percentage that passes, make HEX darken                                | (color: string, amount: number) => HEX   | ''            | 0.0.7   |
| colorIsDark            | Whether color is dark                                                        | (color: string) => boolean               | ''            | 0.0.7   |
| colorLighten           | Light 6 characters based on percentage of pass HEX color                     | (color: string, amount: number) => HEX   | ''            | 0.0.7   |
| hexToRGB               | Convert HEX colors to their RGB representations                              | (hex: string) => RGB                     | ''            | 0.0.7   |
| isHexColor             | determines whether it is hexadecimal color value                             | (color: string) => boolean               | ''            | 0.0.7   |
| rgbToHex               | Convert RGB color values to hexadecimal color values                         | (r: number, g: number, b: number) => HEX | ''            | 0.0.7   |
