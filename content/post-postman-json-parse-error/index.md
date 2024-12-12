---
emoji: 🎮
title: JsonMappingException Unexpected character ('0' (code 48)) was expecting a colon to separate field name and value
date: '2024-12-11 06:59:07'
author: syz
tags: json postman 
categories: js
---

# JsonMappingException: Unexpected character ('0' (code 48)): was expecting a colon to separate field name and value

Postman으로 API test 중 

위와 같은 에러가 났다.

확인해보니

```json

"parameter:"01",

```
이런식으로 쌍따옴표가 들어가야할 곳에 안들어가 있을 때

나는 에러였다.


