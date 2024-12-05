---
emoji: 🛠
title: su -와 su root 의 차이
date: '2024-12-04 14:38:11'
author: syz
tags: linux 
categories: linux
---


# su -와 su root 의 차이

리눅스에서 su 는

Switch User의 약자

계정 전환에 사용된다.

root 계정으로 전환에 많이 사용되는데, 

## su -

## su root

는 차이가 있다.

몰랐었다.

일단 이번에 왜 su -와 su root 의 차이를 알게되었냐면

회사에서

팀장님이 root 계정으로 들어가면

composer update를 날려야하는데,

내가 들어갔을때만

composer가 설치가 안되어있는 것이었다.

----------------------------------------------------------------------

나중에 알고보니, 

환경변수 셋팅 값이 달라서 

composer 를 못찾았던것!!!

----------------------------------------------------------------------


### su root는 기존의 로그인 사용자의 환경변수를 그대로 유지하고 root 계정으로 전환 됨

### su -는 root의 환경 변수를 완전히 불러와 적용.

root 계정으로 완벽하게 전환하여 root 계정의 PATH, HOME 디렉토리 등 모든 환경 설정을 사용하게 됨.

1. 환경변수
2. 로그인 쉘
3. 작업 디렉토리

su root 는 root 전 사용자의 환경변수로 유지되고, 

로그인 쉘도 변경 안되고, 

작업 디렉토리도 변경되지 않음.

su - 는 작업 디렉토리를 root 계정의 홈 디렉토리로 변경함.

이렇게 차이가 있다.

----------------------------------------------------------------------
<주저리 주저리 time>

난...지금까지

su root로만

root 권한을 접근했었는데,

이걸 지금알다니

where is 쥐구멍's

무튼 이제라도 알아서 다행이다.
