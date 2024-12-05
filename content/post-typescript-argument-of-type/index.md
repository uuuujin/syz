---
emoji: 🚗
title: TS2345 Argument of type (prev string) => string | undefined is not assignable to parameter of type SetStateAction 어쩌구 타입스크립트 오류
date: '2024-08-12 17:56:21'
author: syz
tags: typescript ts script
categories: ts
---

## TS2345 : Argument of type (prev: string) => string | undefined is not assignable to parameter of type SetStateAction<string>

```ts
setBoxInput((prev: string) => {
    if (prev !== '' ) {    //입력됐을때
        if (prev.length < 4) {
            console.log(prev.length);
            return prev + '' + n;
        }
    } else {    //맨 처음일떄
        return n.toString();
    }
});
```
이렇게 했을때

<span class="gatsby-resp-image-wrapper" style="margin-left: inherit">
<style>
.gatsby-resp-image-wrapper {
    margin-left: inherit !important;
}
</style>
    <img src="/1.png" style="margin-left: inherit">
</span>


계속 이 오류가 뜨면서 안됐다. 

```ts
setBoxInput((prev: string) => {
    if (prev !== '' ) {    //입력됐을때
        if (prev.length < 4) {
            console.log(prev.length);
            return prev + '' + n;
        } else {
            return '';
        }
    } else {    //맨 처음일떄
        return n.toString();
    }
});
```
근데 이렇게 하니까 해결

why?

if 문 안에만 return 이 있어서

else 에는 없잖니...

wow... 

타입스크립트 이렇게 빡빡하게 굴거야?

(근데 이렇게 빡빡하게 굴어서 소스가 버그가 현저히 줄겠지? 타입스크립트 열심히 겅부해야디!!)