---
emoji: 🧨
title: Failed to decode session object. Session has been destroyed
date: '2024-05-08 12:11:02'
author: syz
tags: php session session_start destroyed 
categories: php
---

## session_start(): Failed to decode session object. Session has been destroyed


```php

$config['sess_driver'] = 'files';
$config['sess_cookie_name'] = 'ci_session';
$config['sess_expiration'] = 1080;
$config['sess_save_path'] = NULL;
$config['sess_save_path'] = ini_get('session.save_path');
$config['sess_match_ip'] = TRUE;
$config['sess_time_to_update'] = 300;
$config['sess_regenerate_destroy'] = FALSE;


```

이렇게 되어있는데, 

로컬에서 자꾸 세션이 끊기고,

phpinfo도 확인했지만, 

<span class="gatsby-resp-image-wrapper" style="margin-left: inherit">
<style>
.gatsby-resp-image-wrapper {
    margin-left: inherit !important;
}
</style>
    <img src="/phpinfo.png" style="margin-left: inherit">
</span>
