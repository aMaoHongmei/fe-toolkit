---
nav: API
group:
  title: encryption management
  order: -1
demo:
  cols: 2
---

# Cipher

## function

- AES
- Base64
- md5

## code demo

<code src="../../example/cipher/aes.en-US.tsx"></code>
<code src="../../example/cipher/base64.en-US.tsx"></code>
<code src="../../example/cipher/md5.en-US.tsx"></code>

## AesEncryption API

| Parameter     | Description   | Type                                                           | Default Value | Version |
| :------------ | ------------- | -------------------------------------------------------------- | ------------- | ------- |
| AesEncryption | 创建 aes 管理 | ([Ops](#aesencryption-ops)) => [object](#aesencryption-object) | -             | 0.0.1   |

### AesEncryption Ops

| Parameter | Description                              | Type         | Default Value | Version |
| :-------- | ---------------------------------------- | ------------ | ------------- | ------- |
| key       | key                                      | string 16bit | -             | 0.0.1   |
| iv        | key offset, which is usually reverse key | string 16bit | -             | 0.0.1   |

### AesEncryption object

| Parameter    | Description | Type               | Default Value | Version |
| :----------- | ----------- | ------------------ | ------------- | ------- |
| encryptByAES | encryption  | (string) => string | -             | 0.0.1   |
| decryptByAES | decryption  | (string) => string | -             | 0.0.1   |

## Base64 API

| Parameter       | Description | Type               | Default Value | Version |
| :-------------- | ----------- | ------------------ | ------------- | ------- |
| encryptByBase64 | encryption  | (string) => string | -             | 0.0.1   |
| decodeByBase64  | decryption  | (string) => string | -             | 0.0.1   |

## MD5 API

| Parameter    | Description | Type               | Default Value | Version |
| :----------- | ----------- | ------------------ | ------------- | ------- |
| encryptByMd5 | encryption  | (string) => string | -             | 0.0.1   |
