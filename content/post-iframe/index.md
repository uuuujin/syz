---
emoji: π₯οΈ
title: iframe νμ©μ postMessage() λ‘ κ° λκΈ°λ λ°©λ²
date: '2022-09-18 13:09:00'
author: syz
tags: javascript jquery iframe
categories: js
---

iframe μμ κ°μ λλ©μΈλΌλ¦¬ κ°μ λκΈΈλ,

## κ°μ λλ©μΈ
```html
<iframe id="sample_iframe" frameborder="0" height="1052px" marginheight="0" marginwidth="0" src="http://dev1.uuuujin.github.io" width="100%"></iframe>
<script> 
	let iframe = document.querySelector("#sample_iframe"); 
	iframe.addEventListener('load', function() {   //load λ λ
		iframe.style.height = iframe.contentDocument.body.scrollHeight + 'px'; 
		iframe.style.width = iframe.contentDocument.body.scrollWidth + 'px'; 
	}); 
</script>
```

## λ€λ₯Έ λλ©μΈ
## 1. iframe λ΄λΆμ μμ€

```html
<script> 
$(document).ready(function () {
 // iframe λ‘λ λμμλ, κ°λκΉ
     window.addEventListener('load', function() {
      let iframeMessage = { height: document.body.scrollHeight, 
						      width: document.body.scrollWidth };
      window.top.postMessage(iframeMessage, "*");
    });
	//resize λμμλ κ°λκΉ
    window.addEventListener('resize', function() {
      let iframeMessage = { height: document.body.scrollHeight, 
      						width: document.body.scrollWidth };
      window.top.postMessage(iframeMessage, "*");
    });
    //key μλ ₯ λμμλ κ° λκΉ
    $(window).keyup(function (e){
      let iframeMessage = { height: document.body.scrollHeight, 
      						width: document.body.scrollWidth };
      window.top.postMessage(iframeMessage, "*");
    });
});
</script>
```

## 2. iframeμ μ¬μ©νλ λΆλΆμ μμ€

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
