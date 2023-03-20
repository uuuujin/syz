---
emoji: 🧐
title: Did you accidentally export a JSX literal instead of a component?
date: '2023-03-20 15:33:13'
author: syz
tags: react 
categories: react
---

오늘의 문제 봉착!

<style>
.gatsby-resp-image-wrapper {
    margin-left: inherit !important;
}
</style>
<img src="/error_msg1.png"/>

갑자기 왜 jsx 타입이 유효하지 않은거니?

그래서 바로 번역기로...가봤다.

## Did you accidentally export a JSX literal instead of a component?

<img src="/msg.png">

구성 요소 대신 JSX 리터럴을 실수로 내보냈습니까?

리터럴?

리터럴이라 하믄

<img src="/literal.png">

문자 그대로의, 기본적인, 일반적인 이라는 뜻

컴퓨터에서 리터럴은 [소스 코드의 고정된 값을 나타내는 표기법](https://ko.wikipedia.org/wiki/%EB%A6%AC%ED%84%B0%EB%9F%B4) 이라고 하는데,

음...

예를 들어 
상수, number = 123;
문자열, string = '안녕하세요';
배열, arr = [];
오브젝트, obj = {};
에서

123, '안녕하세요', [], {} => 가 리터럴이라고 한다.

값 그자체를 말한다고 하는데,

그렇다면 에러 메세지에서 컴포넌트 대신 JSX 리터럴을 실수로 내보냈습니까? 라고 하는 이유는

export 를 잘 못 시켰다는 뜻?

그래서 다시 jsx로 가보니...

에휴...

<img src="/code.png">

export 시킬때 함수명만 적어야하는데 함수명()까지 적고 있었다...

```js
import React from "react";

function index() {
    return <div>왜 안될까??</div>;
}

export default index;
```
 
하니까 바로 오류 안남.

오늘 15분 잡아 먹은 이슈!

<span style="color:red;">
    Element type is invalid; 
</span>    
<br/>
<span style="color:red;">
    React.jsx: type is invalid -- expected a string
</span>    


요런 에러들은 그냥 import 한 파일의 이름이나,
path, 그리고 export 가 잘못된 경우로! 당황하지 말고 눈 잘뜨고 찾아보자!