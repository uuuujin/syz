---
emoji: 🖥️
title: iframe 활용시 postMessage() 로 값 넘기는 방법
date: '2022-09-18 13:09:00'
author: syz
tags: javascript jquery iframe
categories: js
---

iframe 에서 같은 도메인끼리 값을 넘길때,

## 같은 도메인
```html
<iframe id="sample_iframe" frameborder="0" height="1052px" marginheight="0" marginwidth="0" src="http://dev1.uuuujin.github.io" width="100%"></iframe>
<script> 
	let iframe = document.querySelector("#sample_iframe"); 
	iframe.addEventListener('load', function() {   //load 될때
		iframe.style.height = iframe.contentDocument.body.scrollHeight + 'px'; 
		iframe.style.width = iframe.contentDocument.body.scrollWidth + 'px'; 
	}); 
</script>
```

## 다른 도메인
## 1. iframe 내부의 소스

```html
<script> 
$(document).ready(function () {
 // iframe 로드 되었을때, 값넘김
     window.addEventListener('load', function() {
      let iframeMessage = { height: document.body.scrollHeight, 
						      width: document.body.scrollWidth };
      window.top.postMessage(iframeMessage, "*");
    });
	//resize 되었을때 값넘김
    window.addEventListener('resize', function() {
      let iframeMessage = { height: document.body.scrollHeight, 
      						width: document.body.scrollWidth };
      window.top.postMessage(iframeMessage, "*");
    });
    //key 입력 되었을때 값 넘김
    $(window).keyup(function (e){
      let iframeMessage = { height: document.body.scrollHeight, 
      						width: document.body.scrollWidth };
      window.top.postMessage(iframeMessage, "*");
    });
});
</script>
```

## 2. iframe을 사용하는 부분의 소스

```html
<script> 
$(document).ready(function () {

        $(window).resize(function () {
            iframeResize();
        });

        function iframeResize() {
            let iframe = document.querySelector("#sampleFrame");
            window.addEventListener('iframeMessage', function(e) {
                let message = e.data;
                iframe.style.height = message.height + 'px';
                /*iframe.style.width = message.width + 'px';*/
            } , false);

        }
        iframeResize();
    });
</script>
```

```toc

```
