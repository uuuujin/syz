---
emoji: 💾
title: gitlab runner 갑자기 failed
date: '2024-04-29 12:21:00'
author: syz
tags: git gitlab-runner gitlab
categories: git
---

## gitlab runner야 왜 그래 failed 나지마...


<span class="gatsby-resp-image-wrapper" style="margin-left: inherit">
<style>
.gatsby-resp-image-wrapper {
    margin-left: inherit !important;
}
</style>
<img src="/fail.png" style="margin-left: inherit">
</span>

[//]: # (git lab runner의 갑작스런 fail)

gitlab runner의 갑작스런 failed

잘 나와야하는 gitlab-runner가 갑자기 이상해져 버렸다.

다행이 master는 괜찮은데, 

dev이 말썽

나 개발에 반영 해야 할거 있는데... 

왜이러는 거니


<span class="gatsby-resp-image-wrapper" style="margin-left: inherit">
<style>
.gatsby-resp-image-wrapper {
    margin-left: inherit !important;
}
</style>
<img src="/error.png" style="margin-left: inherit">
</span>

갑자기 개발에 빨간불...

일단 CI/CD 고치는것 보다 웹서버에 적용하는게 급하기 때문에

그냥 서버에 들어가서 git pull 받기로 결정

but 

그것 마져 되지 않았다.

그래서 telnet 으로 확인해보니,

아~ 너 그냥 방화벽이 막혔구나~~

<span class="gatsby-resp-image-wrapper" style="margin-left: inherit">
<style>
.gatsby-resp-image-wrapper {
    margin-left: inherit !important;
}
</style>
<img src="/telnet.png" style="margin-left: inherit">
</span>


이후 방화벽 다시 뚫으니

<span class="gatsby-resp-image-wrapper" style="margin-left: inherit">
<style>
.gatsby-resp-image-wrapper {
    margin-left: inherit !important;
}
</style>
<img src="/runnerList.png" style="margin-left: inherit">
</span>


이렇게나 정상으로 돌아왔다.

------


왜 갑자기 방화벽이 막혔는지 의문이지만, 일단 딴길로 좀 새보자면

*telnet 이란?

텔넷은 네트워크 프로토콜(통신 프로토콜은 컴퓨터나 원거리 통신 장비 사이에서 메세지를 주고 받는 양식과 규칙을 체계)로,

인터넷이나 로컬 영역 네트워크 연결에 쓰인다.

window os 에서도 telnet이 있는데 dafault가 비활성화라서 활성화를 해줘야 사용할수 있다. 

------

<span class="gatsby-resp-image-wrapper" style="margin-left: inherit">
<style>
.gatsby-resp-image-wrapper {
    margin-left: inherit !important;
}
</style>
<img src="/good.png" style="margin-left: inherit">
</span>

그렇게 runner는 정상으로 돌아왔다.

해결!
