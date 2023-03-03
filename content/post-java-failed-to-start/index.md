---
emoji: 🚩
title: Java Debugging 중 Failed to start connector
date: '2023-03-03 11:34:55'
author: syz
tags: java Debugging Spring 
categories: java
---

## Java Debugging 중 Failed to start connector

ERROR(40580)[main] [o.a.c.core.StandardService:182] Failed to start connector [Connector[HTTP/1.1-18080]]

자바 디버깅 중 소스 문제가 아니고, 빌드 문제도 아닌데, 갑자기 그냥 
Stopping service가 되고, 
Shut Down 이 될때!

<span class="gatsby-resp-image-wrapper" style="margin-left: inherit">
<style>
.gatsby-resp-image-wrapper {
    margin-left: inherit !important;
}
</style>
    <img src="/error_msg.png" style="margin-left: inherit">
</span>


왜인지 몰라서 일단 인텔리제이를 꺼보고 삽질하다가

겨우 컴퓨터를 재부팅하니 해결....

자세히 보니,

<img src="/manage_list.png" style="margin-left: inherit"/>

정상적으로 디버깅이 되고, jvm 이 올라왔을때 상단과 같은 
Java(TM) Platform SE binary 가 올라오고, 

<img src="/manage_list1.png" style="margin-left: inherit"/>
껏을때는 위와 같이 사라지는 것을 확인!

<br/>아마도 인텔리제이에서 디버깅하던중

중지하고 재실행할때 제대로 꺼지지 않고, 실행되서 port를 하나더 물고 있었을 가능성이 농후함.

<img src="/intellij.png" style="marg1in-left: inherit"/>

암튼 다음번엔 이런 현상이 나오면 당황하지 말고 작업관리자를 열어 자바 실행 파일이 떠있는게 있는지  잘 체크하면 될것 같다!

(Address already in use: bind) -> 이렇게 자세히 메세지가 있었는데....
암튼 다음번엔 잘하가 



