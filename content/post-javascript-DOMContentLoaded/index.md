---
emoji: 🚀
title: DOMContentLoaded
date: '2024-09-11 17:24:22'
author: syz
tags: javascript
categories: javascript
---

## DOMContentLoaded

무엇이 무엇이 먼저일까?

```javascript
    $(function () {
      console.log('3. $function');
    });
    
    $(document).ready(function(){
      console.log('2. ready');
    });
    
    document.addEventListener("DOMContentLoaded", function () {
      console.log('1. DOMContentLoaded');
    });
```

하면

 
<span class="gatsby-resp-image-wrapper" style="margin-left: inherit">
<style>
.gatsby-resp-image-wrapper {
    margin-left: inherit !important;
}
</style>
    <img src="/f.png" style="margin-left: inherit">
</span>


이렇게 나온다.

```javascript
    document.addEventListener("DOMContentLoaded", function () {//html이 완전히 분석되고, 스크립트들이 다 다운받아지고, 실행될떄 발생
      console.log('1. DOMContentLoaded');
    });
```

document.addEventListener("DOMContentLoaded", function () { 는

html이 완전히 분석되고, 스크립트들이 다 다운받아지고, 실행될떄 발생한다.

이미지, 비동기 까지는 기다리지 않는 시점!

(젤 빠름)

```javascript
    $(document).ready(function(){
      console.log('ready');
    });
    //이둘을 별 차이 없음
    $(function () {
      console.log('$function');
    });
```

그리고 이 둘을 별 차이 없고 그냥 $(function ()) 간단하게 쓰는 것일 뿐이고, 


```javascript
    document.addEventListener("DOMContentLoaded", function () {
      console.log('1. DOMContentLoaded');
    });

    document.addEventListener("load", function () { //이런건 없음
      console.log('2. load');
    });
    
    window.addEventListener("load", function () { 
      console.log('3. load');
    });
    
    window.addEventListener("DOMContentLoaded", function () { 
      console.log('4. DOMContentLoaded');
    });


```
하면

 
<span class="gatsby-resp-image-wrapper" style="margin-left: inherit">
<style>
.gatsby-resp-image-wrapper {
    margin-left: inherit !important;
}
</style>
    <img src="/fff.png" style="margin-left: inherit">
</span>
 

이렇게 나온다. 

2번은 없는거고, 

3번은 제일 늦게 뜨는거고,

1번과 4번의 차이를 알아봐야겠다

```javascript
    window.addEventListener("DOMContentLoaded", function () { 
      console.log('4. DOMContentLoaded');
    });
    
    document.addEventListener("DOMContentLoaded", function () {
      console.log('1. DOMContentLoaded');
    });
```
 

javascript의 순차 실행때문에 1번에 먼저 뜬건 아닐까? 해서 순서를 바꿔 봤지만


<span class="gatsby-resp-image-wrapper" style="margin-left: inherit">
<style>
.gatsby-resp-image-wrapper {
    margin-left: inherit !important;
}
</style>
    <img src="/ff.png" style="margin-left: inherit">
</span>
 
아니었다.

먼저 

# DOMContentLoaded 과 load 의 차이는

DOMContentLoaded은 말그대로 dom 요소만 다 로드되면 호출되는 반면에

load는 dom 내의 모든 리소스들까지 다 로드 되었을떄 호출된다.

load - image, script, html 등등

## 그러면 document과 window 의 차이는?

#### document
#### window

일단 개념적으로는 

### window > document

window객체 안에 document 가 존재하는 개념이고, 

window는 브라우저라는 개념이 많이 내재되어 있는 속성이고

document는 html 문서의 개념으로 보면 될것 같다.

그리고 일단 호출은 document Dom load 가 빨리되는것이 맞고!








참고 문서 : https://developer.mozilla.org/ko/docs/Web/API/Document/DOMContentLoaded_event