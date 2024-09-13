---
emoji: 🚙
title: java tomcat port 충돌 org.springframework.boot.web.embedded.tomcat.TomcatWebServer.addPreviouslyRemovedConnectors
date: '2024-09-13 12:25:22'
author: syz
tags: java
categories: java
---

## org.springframework.boot.web.embedded.tomcat.TomcatWebServer.addPreviouslyRemovedConnectors

이렇게 java 디버깅시 포트번호가 출동했다고 나올때

### cmd 를 연다

# netstat -ano | findstr 48080

로컬 포트 번호를 검색한다

# taskkill /F /PID포트번호

해당 포트를 kill 시킨다