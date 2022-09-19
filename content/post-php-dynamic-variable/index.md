---
emoji: 💲
title: php에서 동적변수 사용하기
date: '2022-09-19 15:38:55'
author: syz
tags: php laravel 동적변수
categories: php
---
## php에서 동적변수 사용하는 방법

예를 들어 controller단에서 api를 2번 호출하여 

blade 화면 단에서 활용하고 싶을때

foreach를 두번 돌리기 싫을때

구글링해도 안나오길래 주워들어서 사용하였고, 

까먹을까봐 기록
 
controller에서 $reportData라는 Object를 받아

다른 Object인 $branchCode의 key 값과 매칭 할때

```html
@foreach($reportData->list as $index =>$firstList)
    @php
       $value = $firstList->{$branchCode->name}
       $data = $firstList->{$branchCode->value}
    @endphp
    <div class="<?=$value?>"><?=$data?></div>
@endforeach
```

이런식으로 활용할 수 있다.


```php
{$변수명}
```

```php
{$dataName}
```

{$변수명}을 잘 기억해두자


```toc

```
