---
emoji: 🎫
title: a.b와 a[b]의 차이
date: '2024-12-06 10:52:26'
author: syz
tags: javascript
categories: js
---

# a.b와 a[b]의 차이를 자세히 알아보자

일단 지미니에게 물어보니, 비슷해보이지만 전혀 다른 의미를 가진다고 했다.

### property = 속성

## 1. a.b
- 객체의 프로퍼티 접근 : a가 객체일때, a.b는 a객체의 b라는 이름의 프로퍼티에 접근하는 방법으로, 
- <span style="background-color:#fff5b1">주로 속성의 이름이 고정되어 있을때 사용된다.</span>
- a의 속성 b에 직접 접근하는 방법
- b는 반드시 유효한 식별자여야함
- 공백이나 특수문자 X
    

## 2. a[b]
배열 요소나 객체의 동적 프로퍼티 접근 :
1. 배열 : 
* a가 배열일때 a[b]는 b 인덱스에 해당하는 배열 요소를 반환함
2. 객체 :
* b가 문자열일때, a[b]는 a객체의 b라는 이름의 프로퍼티에 접근하는 또다른 방법(동적으로 프로퍼티 이름을 지정할떄 유용)


```javascript
const colors = ['핑크', '파랑', '보라'];
console.log(colors[1]); // 출력: 파랑 두번째 값 출력!

const note = {
    name: '강빛나',
    age: 23
};

const propertyName = 'age';

console.log(person[propertyName]); // 출력: 23

console.log(note['name']);           //출력 : 강빛나
console.log(note.name);             //출력 : 강빛나
```

<span style="background-color:#DCFFE4"> 
속성명이 문자열일때는 a.b, a[b]모두 가능하지만,
<br><br>
</span>

<span style="background-color:#E6E6FA"> 
동적으로 속성명을 생성하거나 변수에 저장된 이름으로 접근할때는 a[b]를 사용해야한다.
<br><br>
</span>

그리고 숫자 인덱스의 경우도 a[b]

javascript는 동적 타이핑 언어이기 때문에, 

같은 변수에 배열이나 객체를 할당할수 있다.

그래서 a가 어떤 타입인지에 따라 a.b와 a[b]의 의미가 달라진다.

--------------

##### 동적 타이핑 언어 란
##### : 변수의 데이터 타입이 실행 시간에 결정되는 언어를 의미 
##### 변수를 선언할때 특정 데이터 타입을 명시 하지 않아도 되고, 코드가 실행되는 도중에
##### 변수에 어떤값이 할당되느냐에 따라 데이터 타입이 자동으로 결정됨.

```javascript

let x = 100; // x는 숫자
x = "안녕"; // x는 문자열로 변경
x = false; // x는 불리언으로 변경

//위와 같은 변수에 다양한 타입 할당이 가능하고

let memo = {
  name: "장숙희",
  age: 45
};

person.address = "서울시 종로구 어쩌동 저쩌로"; // 새로운 프로퍼티 추가

//데이터구조를 유연하게 추가할수 있다.
```