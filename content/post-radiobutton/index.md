---
emoji: 🔘
title: radio button 의 name 값
date: '2024-07-11 16:00:00'
author: syz
tags: javascript radio radioButton html
categories: html
---

## radio button

```html

<div>
    <input type="radio" name="hihiMyNameIsRadioButton" id="hihiMyNameIsRadioButton00" value="all">
    <label for="hihiMyNameIsRadioButton00">ALL</label>
    <input type="radio" name="hihiMyNameIsRadioButton" id="hihiMyNameIsRadioButton01" value="1">
    <label for="hihiMyNameIsRadioButton01">one</label>
    <input type="radio" name="hihiMyNameIsRadioButton" id="hihiMyNameIsRadioButton02" value="2">
    <label for="hihiMyNameIsRadioButton02">two</label>
    <input type="radio" name="hihiMyNameIsRadioButton" id="hihiMyNameIsRadioButton03" value="3">
    <label for="hihiMyNameIsRadioButton03">three</label>
</div>

```

라디오 버튼에서 name 값은
라디오 버튼의 정체성 이라고 할수 있다.

name 값이 있을때

<span class="gatsby-resp-image-wrapper" style="margin-left: inherit">
<style>
.gatsby-resp-image-wrapper {
    margin-left: inherit !important;
}
</style>
    <img src="/radio.png" style="margin-left: inherit">
</span>


name 값이 없을때

```html

<div>
    <input type="radio" id="hihiMyNameIsRadioButton00" value="all">
    <label for="hihiMyNameIsRadioButton00">ALL</label>
    <input type="radio" id="hihiMyNameIsRadioButton01" value="1">
    <label for="hihiMyNameIsRadioButton01">one</label>
    <input type="radio" id="hihiMyNameIsRadioButton02" value="2">
    <label for="hihiMyNameIsRadioButton02">two</label>
    <input type="radio" id="hihiMyNameIsRadioButton03" value="3">
    <label for="hihiMyNameIsRadioButton03">three</label>
</div>

```

<span class="gatsby-resp-image-wrapper" style="margin-left: inherit">
<style>
.gatsby-resp-image-wrapper {
    margin-left: inherit !important;
}
</style>
    <img src="/radio1.png" style="margin-left: inherit">
</span>

name 값이 없이 사용할거면
 
그냥 checkbox 를 사용하는게 맞을것이다.