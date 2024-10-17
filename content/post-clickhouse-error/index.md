---
emoji: 🚙
title: clickhouse에서 order by
date: '2024-09-13 12:31:50'
author: syz
tags: clickhouse
categories: clickhouse
---

오늘은 일을하다가 생긴 오류에 대해 보면서 

## is not under aggregate function and not in GROUP BY. Have columns:

### 집계 함수 및 GROUP BY에 속하지 않습니다. 열이 있습니다:

이렇게 java 디버깅시 clickhouse DB 오류가 나왔다.


## 이거는 이건 CLICKHOUSE에서 GROUP BY를 제대로 안한거임 !!!! -> 그냥 쿼리 다시  살펴보면되는 문제

클릭하우스에서 테이블을 생성할때 order by 는

우리가 아는 관계형 db 에서 order by 가 아니다.



클하는 컬럼형 디비로

데이터의 인덱싱 및 압축을 좋게 하기 위해 

데이터를 특정 순서대로 저장할 필요가 있어서

create 할 때 order by 는 데이터를 어떤 순서로 저장할기를 정하는 것이다.


```
create table abc 
(
    userId UInt32,
    userName String,
    userAddress
) 
ENGINE = MergeTree()
order by (userId, userName);
```

abc 테이블을 만들때

userId 기준으로 먼저 정렬하고, 

userName이 같을 경우 userId를 기준으로 추가 정렬해서 저장함

이렇게 되면 userId나 userName을 조회할 떄 성능이 최적화 된다.



## ClickHouse - Order By의 의미 
---------------------------------------------------------------------------

1. 데이터 저장 순서 : 데이터를 특정 컬럼이나 컬럼들의 조합에 따라서 정렬하여 저장.

    중복 값의 데이터가 물리적으로 가까운 위치에 저장되기 때문에

    조희 성능이 크게 향상.

2. 쿼리 성능 향상 : ORDER BY 로 정렬 컬럼을 실행하면 클하가 빠르게 데이터를 조회 할수 있음.

    특히 where 절이나 group by를 사용한 쿼리에서 이점이 있음

3. 압축 성능 최적화 : 동일한 값들이 인접하게 배치되면 데이터 압축이 더 효율적으로 이루어짐

    이는 저장 공간 절약도 되고, 쿼리 성능에도 좋다.

---------------------------------------------------------------------------


참고 문서 : https://clickhouse.com/docs/en/sql-reference/statements/select/order-by