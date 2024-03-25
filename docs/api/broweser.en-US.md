---
nav: API
group:
  title: browser tool
  order: 7
demo:
  cols: 1
---

# browser

following api are functions, can be used directly import

## API

| Parameter      | Description                                        | Type                             | Default Value | Version |
| :------------- | -------------------------------------------------- | -------------------------------- | ------------- | ------- |
| isIE           | Judge whether IE<11 browser                        | () => boolean                    | -             | 0.0.7   |
| isIE11         | Judge whether IE=11 browser                        | () => boolean                    | -             | 0.0.7   |
| isEdge         | Judge whether IE Edge browser                      | () => boolean                    | -             | 0.0.7   |
| getIEVersion   | Acquire IE version information                     | () => `string/number`            | -             | 0.0.7   |
| getBrowserType | Obtain user browser version and system information | (lang: 'zh-cn' / 'en') => object | 'en'          | 0.0.7   |
