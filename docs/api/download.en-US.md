---
nav: API
group:
  title: Document tool
  order: 4
order: 2
demo:
  cols: 1
---

# download tool

following api are functions, can be used directly import

## API

| Parameter              | Description                                            | Type                                                                                                              | Default Value                                           | Version |
| :--------------------- | ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- | ------- |
| openWindow             | Open new window                                        | (url: string, opt?: {target?: [TargetContext](#targetcontext); noopener?: boolean; noreferrer?: boolean}) => void | { target: '\_blank', noopener: true, noreferrer: true } | 0.0.7   |
| downloadImgByOnlineUrl | Download online pictures                               | (url: string, filename: string, mime?: string, bom?: BlobPart) => void                                            | mime: 'application/octet-stream', bom: ''               | 0.0.7   |
| downloadImgByBase64    | Download image based on base64                         | (url: string, filename: string, mime?: string, bom?: BlobPart) => void                                            | mime: 'application/octet-stream', bom: ''               | 0.0.7   |
| downloadByData         | According to background interface file stream download | (data: BlobPart, filename: string, mime?: string, bom?: BlobPart) => void                                         | mime: 'application/octet-stream', bom: ''               | 0.0.7   |
| downloadByUrl          | Download file based on its address                     | ({ url: string; target?: TargetContext; fileName?: string;}) => void                                              | target: '\_blank'                                       | 0.0.7   |

### TargetContext

| Parameter | Description | Type | Default Value | Version |
| :-------- | ----------- | ---- | ------------- | ------- |
| \_self    | -           | -    | -             | -       |
| \_blank   | -           | -    | -             | -       |
| string    | -           | -    | -             | -       |
