---
emoji: ✔
title: json_encode(), json_decode()에 대해서
date: '2022-09-19 12:43:55'
author: syz
tags: php json_encode() json_decode()
categories: php
---

## json_encode();

php에서 json 형태로 인코딩에 필요한 json_encode($변수명);

옵션 없이 기본값으로 encoding 시

json_encode($변수명);

string(문자열) 형태로 결과 값이 출력된다.

php 에서 배열을 사용할때

배열을 json 형식으로 변환하는데, 

이때 json이란?

## json 이란?

JavaScript Object Notation

데이터 전송 및 저장 시 자주 쓰이는 형식이다.

JavaScript에서 객체를 만들때, 사용하는 표현식의 의미하고, 데이터 포맷이다.


## json 예시
```json

{
  "example": [
    {
      "name": "sujan",
      "age": "20"
    },
    {
      "name": "gihun",
      "age": "36"
    },
    {
      "name": "para",
      "age": "33"
    },
    {
      "name": "kangmun",
      "age": "33"
    } 
  ]
}

```

json에서는 javascript와 비슷하게 
key와 value값이 존재 할 수 있고, 
key와 value값은 " 쌍따옴표로 표기한다.

string, array, object, boolean 등등 사용할 수 있다.

json 형식의 텍스르를 script 문법에서 object로 변환해서 사용할수 있다.

```javascript
var json_type = '{ "name": "홍길동", "age": "20" }';


var parse_type = JSON.parse(json_type);
var stringify_type = JSON.stringify(parse_type);

console.log(parse_type);

console.log(stringify_type);

```


console.log(parse_type) -> json 을 javaScript 객체로 변환
console.log(stringify_type); -> javaScript 객체를 json 형태로 변환

# => 다시 돌아와서

json_encode는 PHP 배열을 JSON 으로 변환하는 함수로

예를 들어

```php

$array = array(
    "name"=> "홍길동",
    "age"=> "22",
    "address"=>"전라도",
);

echo json_encode($array);

```
하면

json 형태로  

```json
{"name":"홍길동","age":"22","address":"전라도"}
```

이렇게 호출해서 사용 할 수 있따.

json_decode는 json을 php 배열로 변환하는 함수로

비슷하게 사용 할 수 있지만, tip이 있는데, 

일단 예시 코드를 보면

```php

$json_code = '{"name":"홍길동","age":"22","address":"전라도"}';

var_dump(json_decode($json_code));

var_dump(json_decode($json_code, true));

```

## json_decode();

그냥 json_decode과 

json_decode(변수 , true);가 다른데,

그냥 json_decode()의 경우

// 결과

그냥 json_decode를 진행했을때,

```php

object(stdClass)#320 (3) {
  ["name"]=>  string(9) "홍길동"
  ["age"]=>   string(2) "22"
  ["address"]=>  string(9) "전라도"
}

```

json_decode(__, true);로 진행했을때, 

```php 

array(3) {
  ["name"]=>  string(9) "홍길동"
  ["age"]=>  string(2) "22"
  ["address"]=>  string(9) "전라도"
}

```

일단 decode시 기본값을 안주면 자동적으로 false로 지정되고, 

값은 object로 변환된다.

object 형식에서는 echo를 $array['name'] 이런식으로 배열 형식으로

찍어봐도 나오지 않게 된다.

object는 $array->name 이런식으로 호출해야 한다고 한다.

배열로 변환하고 싶을때는 json_decode($array, true)로 true값을 주면 된다.


```toc

```
