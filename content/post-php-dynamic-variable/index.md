---
emoji: ๐ฒ
title: php์์ ๋์ ๋ณ์ ์ฌ์ฉํ๊ธฐ
date: '2022-09-19 15:38:55'
author: syz
tags: php laravel ๋์ ๋ณ์
categories: php
---
## php์์ ๋์ ๋ณ์ ์ฌ์ฉํ๋ ๋ฐฉ๋ฒ

์๋ฅผ ๋ค์ด controller๋จ์์ api๋ฅผ 2๋ฒ ํธ์ถํ์ฌ 

blade ํ๋ฉด ๋จ์์ ํ์ฉํ๊ณ  ์ถ์๋

foreach๋ฅผ ๋๋ฒ ๋๋ฆฌ๊ธฐ ์ซ์๋

๊ตฌ๊ธ๋งํด๋ ์๋์ค๊ธธ๋ ์ฃผ์๋ค์ด์ ์ฌ์ฉํ์๊ณ , 

๊น๋จน์๊น๋ด ๊ธฐ๋ก
 
controller์์ $reportData๋ผ๋ Object๋ฅผ ๋ฐ์

๋ค๋ฅธ Object์ธ $branchCode์ key ๊ฐ๊ณผ ๋งค์นญ ํ ๋

```html
@foreach($reportData->list as $index =>$firstList)
    @php
       $value = $firstList->{$branchCode->name}
       $data = $firstList->{$branchCode->value}
    @endphp
    <div class="<?=$value?>"><?=$data?></div>
@endforeach
```

์ด๋ฐ์์ผ๋ก ํ์ฉํ  ์ ์๋ค.


```php
{$๋ณ์๋ช}
```

```php
{$dataName}
```

{$๋ณ์๋ช}์ ์ ๊ธฐ์ตํด๋์


```toc

```
