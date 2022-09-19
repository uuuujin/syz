---
emoji: ⛏
title: php 오류 undefined index 가 날때
date: '2022-09-19 15:06:15'
author: syz
tags: php laravel undefined
categories: php
---


## Undefined index 오류 발생 시


![undefined](undefined_index.png)

요런 오류가 발생했다.

분명히 array에 해당 'key'의 값이 있는데,,,

왜 못 찾는 걸까?

{% highlight php linenos %}
//sampleCodeList는 대충 api 에서 받아온 list
$sampleApiUrl = "http://10.10.10.10:8040/api/sample/url/code/list";
$sampleCodeList = CommonLib::getCurl($sampleApiUrl);

$sampleCodeList = json_encode($sampleCodeList);
$allList = [];

    for ($i = 0; $i < count($sampleCodeList); $i++) {
        switch($sampleCodeList[$i]['key']){
            case '1001' :
                $sampleCodeList[$i]['code'] = 'abc';
                break;

            case '1002' :
                $sampleCodeList[$i]['code'] = 'def';
                break;
    
            case '1003' :
                $sampleCodeList[$i]['code'] = 'ghi';
                break;
    
            case '1004' :
                $sampleCodeList[$i]['code'] = 'jkl';
                break;

            default :
        }
        $allList[$sampleCodeList[$i]['code']] = 0;
        ${$sampleCodeList[$i]['code']}['abc']=array();
        ${$sampleCodeList[$i]['code']}['def']=array();
    }
{% endhighlight %}

이런식으로 $sampleCodeList에 값을 넣은 상태에서 해당 code값을 key로 사용하고자 할때,

allList에 예를 들어 abc, def, ghi 와 같은 코드를 0으로 초기화해서 사용할때,

28번째 줄에서 오류가 났다.

```php
$allList[$sampleCodeList[$i]['code']] = 0;
```

왜 undefined 'code'라고 나올까? 했고, 

찾아봤더니 역시 

## 오류는 초기화 문제!!!!

Undefined index 오류는 초기화 하지 않고 사용했기 때문이다!!!!

정확하게 얘기 하자면 배열의 해당 key 값이 초기화 되지 않았기 때문이다.

그래서 이렇게 배열['키'] = 널; 처리를 해줘야 한다.

```php
$sampleCodeList[$i]['code']=null;
```

아까 소스에서 다시 정상적으로 사용하려면

{% highlight php linenos %}
//sampleCodeList는 대충 api 에서 받아온 list
$sampleApiUrl = "http://10.10.10.10:8040/api/sample/url/code/list";
$sampleCodeList = CommonLib::getCurl($sampleApiUrl);

$sampleCodeList = json_encode($sampleCodeList);
$allList = [];

    for ($i = 0; $i < count($sampleCodeList); $i++) {
        $sampleCodeList[$i]['code']=null;           //이렇게 'code'값을 초기화하고 사용해야함.
        switch($sampleCodeList[$i]['key']){
            case '1001' :
                $sampleCodeList[$i]['code'] = 'abc';
                break;

            case '1002' :
                $sampleCodeList[$i]['code'] = 'def';
                break;
    
            case '1003' :
                $sampleCodeList[$i]['code'] = 'ghi';
                break;
    
            case '1004' :
                $sampleCodeList[$i]['code'] = 'jkl';
                break;

            default :
        }
        $allList[$sampleCodeList[$i]['code']] = 0;      //그래야 가져와서 사용할 수 있음.

        ${$sampleCodeList[$i]['code']}['abc']=array();
        ${$sampleCodeList[$i]['code']}['def']=array();
    
    }
{% endhighlight %}

초기화가 기본적인 부분인데 항상 깜빡 하곤 한다.

기본에 충실해야겠다.

```toc

```
