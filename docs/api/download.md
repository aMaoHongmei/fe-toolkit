---
nav: API
group:
  title: 文件工具
  order: 4
order: 2
demo:
  cols: 1
---

# 下载工具

下方 api 均为函数，可直接 import 使用

## API

| 参数                   | 说明                   | 类型                                                                                                              | 默认值                                                  | 版本  |
| :--------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- | ----- |
| openWindow             | 打开一个新窗口         | (url: string, opt?: {target?: [TargetContext](#targetcontext); noopener?: boolean; noreferrer?: boolean}) => void | { target: '\_blank', noopener: true, noreferrer: true } | 0.0.7 |
| downloadImgByOnlineUrl | 下载在线图片           | (url: string, filename: string, mime?: string, bom?: BlobPart) => void                                            | mime: 'application/octet-stream', bom: ''               | 0.0.7 |
| downloadImgByBase64    | 基于 base64 下载图片   | (url: string, filename: string, mime?: string, bom?: BlobPart) => void                                            | mime: 'application/octet-stream', bom: ''               | 0.0.7 |
| downloadByData         | 根据后台接口文件流下载 | (data: BlobPart, filename: string, mime?: string, bom?: BlobPart) => void                                         | mime: 'application/octet-stream', bom: ''               | 0.0.7 |
| downloadByUrl          | 根据文件地址下载文件   | ({ url: string; target?: TargetContext; fileName?: string;}) => void                                              | target: '\_blank'                                       | 0.0.7 |

### TargetContext

| 参数    | 说明 | 类型 | 默认值 | 版本 |
| :------ | ---- | ---- | ------ | ---- |
| \_self  | -    | -    | -      | -    |
| \_blank | -    | -    | -      | -    |
| string  | -    | -    | -      | -    |
