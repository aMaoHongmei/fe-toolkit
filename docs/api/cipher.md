---
nav: API
group:
  title: 加密管理
  order: 1
demo:
  cols: 1
---

# Cipher

## 功能

- AES
- Base64
- md5

## 代码演示

<code src="../../example/cipher/aes.tsx"></code>
<code src="../../example/cipher/base64.tsx"></code>
<code src="../../example/cipher/md5.tsx"></code>

## AesEncryption API

| 参数          | 说明          | 类型                                                           | 默认值 | 版本  |
| :------------ | ------------- | -------------------------------------------------------------- | ------ | ----- |
| AesEncryption | 创建 aes 管理 | ([Ops](#aesencryption-ops)) => [object](#aesencryption-object) | -      | 0.0.1 |

### AesEncryption Ops

| 参数 | 说明                         | 类型         | 默认值 | 版本  |
| :--- | ---------------------------- | ------------ | ------ | ----- |
| key  | 密钥                         | string 16 位 | -      | 0.0.1 |
| iv   | 密钥偏移量，一般为密钥反过来 | string 16 位 | -      | 0.0.1 |

### AesEncryption object

| 参数         | 说明 | 类型               | 默认值 | 版本  |
| :----------- | ---- | ------------------ | ------ | ----- |
| encryptByAES | 加密 | (string) => string | -      | 0.0.1 |
| decryptByAES | 解密 | (string) => string | -      | 0.0.1 |

## Base64 API

| 参数            | 说明 | 类型               | 默认值 | 版本  |
| :-------------- | ---- | ------------------ | ------ | ----- |
| encryptByBase64 | 加密 | (string) => string | -      | 0.0.1 |
| decodeByBase64  | 解密 | (string) => string | -      | 0.0.1 |

## MD5 API

| 参数         | 说明 | 类型               | 默认值 | 版本  |
| :----------- | ---- | ------------------ | ------ | ----- |
| encryptByMd5 | 加密 | (string) => string | -      | 0.0.1 |
