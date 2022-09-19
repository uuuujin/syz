---
emoji: 🛑
title: e.preventDefault() 란
date: '2022-09-19 15:12:55'
author: syz
tags: javascript jquery 
categories: javascript
---

## e.preventDefault() 
html에서 고유의 동작을 중단 시킬 때 사용되는  

e.preventDefault는

보통 우리가 
```
<a href = '어쩌구 저쩌구 도메인'>
``` 
태그 나
```
<input type='submit'>
```

과 같은 태그들은 고유의 동작(기본 동작)들을 중단시키는 역할을 한다.


```javascript
document.addEventListener('click', function (e) {
    e.preventDefault()
});
```
위와 같은 방식으로 click event 에서 e로 사용하는데, 

여기서

## function (e) 란

```javascript
function (e) 
```


function 괄호 열고 e 괄호닫고는(^^) addEventListener에서 

이벤트가 발생했을떄 실행되는 함수에

click 이벤트가 발생하면 이벤트 객체가 생성되고, 

이 이벤트 객체가 e라는 파라미터에 할당 된다.

그래서 이벤트 객체가 필요한 이유는 발생항 이벤트에 관한

정보들이 담겨 우리가 그 정보들을 알 수 있기, 때문에 

이벤트 객체를 이용하여 이벤트 객체의 여러 부분들을 활용 할 수 있다.

e.preventDefault()와 같이 

## e.stopPropagation()

도 많이 사용되는데, 

stopPropagation은 현재의 이벤트가 다른 이벤트로 전달되지 않도록 하는 동작이다.

```javascript
document.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
});
```
stopPropagation은 기본동작은 방지 하지 않기 때문에 

기본동작 하기 방지 하기 위해서는 preventDefault와 함께 사용해야 한다.

div안에 button 이 있고,  button도 div도 각각의 이벤트가 있을떄 

버튼에 대한 이벤트를 동작했을때 부모인 div 이벤트까지 실행되는 (버블링 현상) 현상을 방지 할 수 있고,

이벤트가 하위로 전달되어 발생하는 캡처링 현상을 방지하기 위해서도 쓰인다.

참조 : https://developer.mozilla.org/ko/docs/Web/API/Event/stopPropagation

```toc

```
