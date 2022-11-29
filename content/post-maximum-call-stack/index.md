---
emoji: 💻
title: Maximum call stack size exceeded 에러
date: '2022-11-29 10:37:00'
author: syz
tags: javascript jquery RangeError
categories: js
---

## Maximum call stack size exceeded

JavaScript RangeError: Maximum Call Stack Size Exceeded

오늘도 순조로운 화면달 개발 도중 click event 에서 아래와 같은 에러가 발생했다.

Uncaught RangeError: Maximum call stack size exceeded

<span class="gatsby-resp-image-wrapper" style="margin-left: inherit">
<style>
.gatsby-resp-image-wrapper {
    margin-left: inherit !important;
}
</style>
    <img src="/maximum_call_stack_size_exceeded.png" style="margin-left: inherit">
</span>

 - exceed : 초과하다, 초월하다, 넘어서다

 - exceeded : 초과 (과거형)

최대 콜백 구조 사이즈가 초과 됐다

라는데 이런 비슷한 오류를 몇 번 본적이 있었지만 생각이 나지 않아 구글링을 진행했다.

<br>

첫번째!!

잘못된 콜백이나 event 로 인해 계속 무한대의 이벤트가 발생할때 해당 에러가 발생!

<br>

두번째!!

function 이 너무 많은 호출이 일어날때 해당 에러가 발생!!!

예를 들어

```javascript
//someButton click event
document.getElementById("someButton").addEventListener('click', hereMyClickEvent);

//예시 함수
let hereMyClickEvent = (() => {
    let thisValue = $("input[name='anchor']").val();
    
    if (thisValue) {
        anotherFunction();
    } else {
        $("#someButton").click();
    }
});
```

이런식으로 id값이 someButton 이라는 버튼을 클릭했을때,

thisValue가 

 - true 이면 다음 anotherFunction() 으로 감. (문제 없음)

 - false 이면 someButtoun 을 다시 클릭. (문제 발생)

이렇게 되면 false 일때 계쏙해서 hereMyClickEvent 함수가 동작하게 되어 

Maximum call stack size exceeded

에러가 발생하게 된다.

약간 조금만 생각없이? 급하게 코딩하다보면 생기는 이슈인것 같다.

그럼 오늘도 화이팅!

<img src="/maximum_callstack_size_exceeded.png" style="margin-left: inherit">

참고 [https://rollbar.com/blog/javascript-rangeerror-maximum-call-stack-size-exceeded/]