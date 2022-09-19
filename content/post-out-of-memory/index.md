---
emoji: 🚫
title: 앗, 이런! 이 웹페이지를 표시하는 도중 문제가 발생했습니다.
date: '2022-09-19 16:22:55'
author: syz
tags: php ini_set laravel
categories: php
---

## 앗, 이런! 이 웹페이지를 표시하는 도중 문제가 발생했습니다.

갑자기 데이터 다운로드 부분을 개발하는데 이런 화면이 로컬에서 발생했다.

뭐지?

라라벨에서 이런식으로 오류가 난적은 없었던것 같은데?

![chrome](/chrom_out_of_memory.png)

오류 코드: Out of Memory

out of memory -> 크롬의 메모리 부족 에러,

사실 api 에서 받는 엑셀 다운로드될 data가 4.8초나 걸리는 9MB의 데이터이긴 했다.

![chrome](/chrom_out_of_memory2.png)

그리고 로컬에서도 이렇게 오류가 났다.

PHP Fatal error:  Allowed memory size of 134217728 bytes exhausted (tried to allocate 20480 bytes) in 내 파일 경로....

php의 치명적인 오류,
 
134217728바이트의 허용된 메모리 크기가 소진되다?

_* 여기서 134217728은 128에 1024의 2승을 곱한 값이라고 함._  
 
(20480바이트 할당을 시도함)
 
phpinfo() 에서 메모리 제한 설정값을 확인해보면,
 
![chrome](/chrom_out_of_memory3.png)

128M로 기본 설정 되어있다.

여기서 문제를 해결하려면, php.ini 를 변경하는 방법도 있지만, 

현재 웹서버에 우리 시스템만 있는게 아니기 때문에 그렇게 설정하긴 어려움이 있고,

해당 용량이 많은 데이터를 호출하는 경우에만 메모리를 늘려주는 방법이 필요하다.

## ini_set()

```php

ini_set('memory_limit','-1');   //메모리 무제한 설정

```

```php

ini_set('memory_limit','10M');   //메모리 10MB로 설정

```

이부분을 소스에 적용하면,
 
 
 ```php
/*list api*/
$excelData = '';
set_time_limit(0);              //timeout 시간 무제한 설정
ini_set('memory_limit','-1');   //메모리 무제한 설정
$excelApiUrl = config('api.myDataApi').'/update/version-data/hang/'.$searchData['user'].'/info/'.$searchData['pk'].'?startDate='.$searchData['sDate'].'&page=1&limit=5000&endDate='.$searchData['eDate'].'&value='.$searchData['value'];
$excelList = serviceLibrary::simpleCurl($excelApiUrl);

//대충 받아서 예외 처리하여, 다운로드...하는 로직
//....
//....

```

이렇게 메모리 무제한 설정으로 해결 완료.



```toc

```
