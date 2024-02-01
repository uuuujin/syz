---
emoji: 🛸
title: object%20Object error
date: '2024-02-01 16:40:00'
author: syz
tags: javascript ajax object querystring
categories: js
---

## object%20Object

[object%20Object]

* 문제 현상

```javascript
    let nowSendForm   = new FormData();
    let nowKeys = $(this).attr("keys");
    let nowImageId     = $(this).data("imageId");

    nowSendForm.append('files', form);
    $.ajaxSetup({
        enctype     : 'multipart/form-data',
        contentType : false,
        processData : false,
        cache       : false,
        headers     : {
            'X-CSRF-TOKEN': $('meta[name="its-my-csrf-token"]').attr('content')
        }
    })
    $.post('/profile/now/image/saveFile/' + nowKeys + '/' + nowImageId,
        nowSendForm, 
        function (res) {
     })
     .done(function (res) {
         if(res) alert('성공');
     })
             
```
이런식으로 new FormData 생성하여

file 을 비동기로 호출한 뒤

```javascript
    let data = {
        keys   : myKeysData,
        id     : myThisId,
        search : myThisSearchValue,
    };
    $.get('/profile/now/image/showHistory', data, function(res){
    }).done(function (res){
        showLoadingBar('my_list_area',"hide");
        if (res) {
            $(".now_this_list_area").html("");
            $(".now_this_list_area").html(res);
            showLoadingBar('my_list_area',"show");
        }
    });
```


다른 비동기 get, post 들이 원래는 Query String Parameters 로 잘 들어갔었는데, 

<span class="gatsby-resp-image-wrapper" style="margin-left: inherit">
<style>
.gatsby-resp-image-wrapper {
    margin-left: inherit !important;
}
</style>
    <img src="/query_string_param.png" style="margin-left: inherit">
</span>
▲△▲△▲△▲△▲△ 이렇게 잘 들어갔었는데 ▲△▲△▲△▲△▲△▲△

갑자기

<span class="gatsby-resp-image-wrapper" style="margin-left: inherit">
<style>
.gatsby-resp-image-wrapper {
    margin-left: inherit !important;
}
</style>
    <img src="/objectobject.png" style="margin-left: inherit">
</span>
△▲△▲△ 이렇게 Form Data로 변경되면서 이상해졌다 ▲△▲△▲

이렇게 Form Data로 변경되면서 내가 설정한 data object 가 전송이 안되고, 

object%20Object

만 나오는 현상이 발생....

왜이렇까 갑자기...

사실 근복적으로는 File Data를 보내면서 뭐가 변경이 된것 같긴한데...

그렇게 근본적인 문제까지는 해결에 도달하지 못했고, 

일단 이 상황을 해결하는게 급선무.

열심히 구글링 ...

$.get -> $.ajax 라는 소리에 바꿔도 보고 했지만,

FAIL...

***


ajax 셋팅 

```javascript
processData=false
```
기본값 : true

기본적으로 object를 key : value 형식으로 

query String으로 변경하는데 그 부분을 false 시킴

file 업로드 시킬땐 false해야 함.


```javascript
contentType=false
```
기본값 : application/x-www-form-urlencoded; charset=UTF-8

여기도 file 업로드 시킬땐 false해야 함.


변경된 code ⬇

```javascript
     $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        type        : 'POST',
        url         : '/profile/now/image/saveHistory',
        dataType    : 'json',
        contentType: "application/json",
        cache       : false,
        processData : false,
        data        : JSON.stringify(data),
        complete     : function( res ){
            //성공
        },
    });
```

```json
contentType : "application/json",    //현재 보내는 contentType
cache       : false,                 //이전데이터 남아있지 않게, 현재값으로 보내게 캐시 처리
processData : false,                //true : 일반적으로 query string, false : query string 아닐떄 false
```

이렇게 이번 현상의 킥의 정리해 보았고

이건 그냥 이렇게도 썼다는 기록용으로 남기는 코드

```javascript
    let nowImageWorkdata = new URLSearchParams( getImageWorkdata).toString();
    $.ajaxSetup({        cache: false    });
    $.ajax({
        url: '/profile/now/image/showHistory?' + nowImageWorkdata,
        type: "get",
        cache: false,
        dataType : "JSON",
        success: function(res) {
        //성공
        },
    });
```

다음에는 

<span class="gatsby-resp-image-wrapper" style="margin-left: inherit">
<style>
.gatsby-resp-image-wrapper {
    margin-left: inherit !important;
}
</style>
    <img src="/formData.png" style="margin-left: inherit">
</span>

에 대해서 정확하게 알아봐야겠다!