---
emoji: π₯οΈ
title: Maximum call stack size exceeded μλ¬
date: '2022-11-29 10:37:00'
author: syz
tags: javascript jquery RangeError
categories: js
---

## Maximum call stack size exceeded

JavaScript RangeError: Maximum Call Stack Size Exceeded

μ€λλ μμ‘°λ‘μ΄ νλ©΄λ¬ κ°λ° λμ€ click event μμ μλμ κ°μ μλ¬κ° λ°μνλ€.

Uncaught RangeError: Maximum call stack size exceeded

<span class="gatsby-resp-image-wrapper" style="margin-left: inherit">
<style>
.gatsby-resp-image-wrapper {
    margin-left: inherit !important;
}
</style>
    <img src="/maximum_call_stack_size_exceeded.png" style="margin-left: inherit">
</span>

 - exceed : μ΄κ³Όνλ€, μ΄μνλ€, λμ΄μλ€

 - exceeded : μ΄κ³Ό (κ³Όκ±°ν)

μ΅λ μ½λ°± κ΅¬μ‘° μ¬μ΄μ¦κ° μ΄κ³Ό λλ€

λΌλλ° μ΄λ° λΉμ·ν μ€λ₯λ₯Ό λͺ λ² λ³Έμ μ΄ μμμ§λ§ μκ°μ΄ λμ§ μμ κ΅¬κΈλ§μ μ§ννλ€.

<br>

μ²«λ²μ§Έ!!

μλͺ»λ μ½λ°±μ΄λ event λ‘ μΈν΄ κ³μ λ¬΄νλμ μ΄λ²€νΈκ° λ°μν λ ν΄λΉ μλ¬κ° λ°μ!

<br>

λλ²μ§Έ!!

function μ΄ λλ¬΄ λ§μ νΈμΆμ΄ μΌμ΄λ λ ν΄λΉ μλ¬κ° λ°μ!!!

μλ₯Ό λ€μ΄

```javascript
//someButton click event
document.getElementById("someButton").addEventListener('click', hereMyClickEvent);

//μμ ν¨μ
let hereMyClickEvent = (() => {
    let thisValue = $("input[name='anchor']").val();
    
    if (thisValue) {
        anotherFunction();
    } else {
        $("#someButton").click();
    }
});
```

μ΄λ°μμΌλ‘ idκ°μ΄ someButton μ΄λΌλ λ²νΌμ ν΄λ¦­νμλ,

thisValueκ° 

 - true μ΄λ©΄ λ€μ anotherFunction() μΌλ‘ κ°. (λ¬Έμ  μμ)

 - false μ΄λ©΄ someButtoun μ λ€μ ν΄λ¦­. (λ¬Έμ  λ°μ)

μ΄λ κ² λλ©΄ false μΌλ κ³μν΄μ hereMyClickEvent ν¨μκ° λμνκ² λμ΄ 

Maximum call stack size exceeded

μλ¬κ° λ°μνκ² λλ€.

μ½κ° μ‘°κΈλ§ μκ°μμ΄? κΈνκ² μ½λ©νλ€λ³΄λ©΄ μκΈ°λ μ΄μμΈκ² κ°λ€.

κ·ΈλΌ μ€λλ νμ΄ν!

<img src="/maximum_callstack_size_exceeded.png" style="margin-left: inherit">


μ°Έκ³  [https://rollbar.com/blog/javascript-rangeerror-maximum-call-stack-size-exceeded/]