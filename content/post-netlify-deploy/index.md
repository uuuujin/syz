---
emoji: ๐น
title: netlify deploy, build ์ค๋ฅ
date: '2022-12-06 14:47:55'
author: syz
tags: netlify deploy build gatsby
categories: netlify
---

๋ฐฉ์น๋๋ค์ํผ ํ ๋ท๋ฆฌํ์ด ๊ธฐ์  ๋ธ๋ก๊ทธ์ post ์์ฑ ํ ์ผ์ด ์๊ฒจ ์ค๋๋ง์

Markdown์ ์์ฑํ๊ณ  commit and push๋ฅผ ํ๋ค.

## ํ์ง๋ง ์ค๋ฅ๊ฐ ๋ฌ๋ค....
(์...why...๋ ์ง์ง ์ค๋๋ง์ ๋งํฌ๋ค์ด ์์ฑํด์ ๊ธฐ๋ถ์ข๊ฒ ์ปค๋ฐ ํ๊ณ  ํธ์ํ๋๋ฐ..์..)

# netlify deploy error
***

์ ํฌ๋ธ์์ ๊ฐ๋ฐ ๊ฐ์ ๋ณด๋ค๊ฐ ๋ดค๋ค.

๊ฐ๋ฐ์๋ ๋ฌธ์  ํด๊ฒฐ ๋ฅ๋ ฅ์ด ์ค์ํ๋ค๊ณ ,

์ด๋ ๊ฒ ์๋์ ๊ฐ์ ๋ฌธ์ ๋ฅผ ์ง๋ฉดํ๋ค.

```
...
4:26:40 PM: Installing NPM modules using NPM version 7.6.0
4:26:52 PM: npm ERR! code ERESOLVE
4:26:52 PM: npm ERR! ERESOLVE unable to resolve dependency tree
4:26:52 PM: npm ERR!
4:26:52 PM: npm ERR! Found: react@17.0.2
4:26:52 PM: Creating deploy upload records
4:26:52 PM: npm ERR! node_modules/react
4:26:52 PM: npm ERR!   react@"^17.0.1" from the root project
4:26:52 PM: npm ERR!   peer react@"^17.0.0 || ^18.0.0" from @mui/icons-material@5.10.9
4:26:52 PM: npm ERR!   node_modules/@mui/icons-material
4:26:52 PM: npm ERR!     @mui/icons-material@"^5.1.0" from the root project
4:26:52 PM: Failed during stage 'building site': Build script returned non-zero exit code: 1 (https://ntl.fyi/exit-code-1)
4:26:52 PM: npm ERR!   20 more (@mui/material, react-dom, gatsby, ...)
4:26:52 PM: npm ERR!
4:26:52 PM: npm ERR! Could not resolve dependency:
4:26:52 PM: npm ERR! peer react@"0.0.0-experimental-c8b778b7f-20220825" from react-server-dom-webpack@0.0.0-experimental-c8b778b7f-20220825
4:26:52 PM: npm ERR! node_modules/gatsby/node_modules/react-server-dom-webpack
4:26:52 PM: npm ERR!   react-server-dom-webpack@"0.0.0-experimental-c8b778b7f-20220825" from gatsby@4.24.6
4:26:52 PM: npm ERR!   node_modules/gatsby
4:26:52 PM: npm ERR!     gatsby@"^4.9.3" from the root project
4:26:52 PM: npm ERR!     24 more (gatsby-plugin-advanced-sitemap, ...)
4:26:52 PM: npm ERR!
4:26:52 PM: npm ERR! Fix the upstream dependency conflict, or retry
4:26:52 PM: npm ERR! this command with --force, or --legacy-peer-deps
4:26:52 PM: npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
4:26:52 PM: npm ERR!
4:26:52 PM: npm ERR! See /opt/buildhome/.npm/eresolve-report.txt for a full report.
4:26:52 PM: npm ERR! A complete log of this run can be found in:
4:26:52 PM: npm ERR!     /opt/buildhome/.npm/_logs/2022-11-03T07_26_52_326Z-debug.log
4:26:52 PM: Error during NPM install
4:26:52 PM: Build was terminated: Build script returned non-zero exit code: 1
4:26:52 PM: Failing build: Failed to build site
4:26:52 PM: Finished processing build request in 30.782027089s
...
```
**์ผ๋จ gatsby version ๊ณผ react ๋ฒ์ ์ด ์ ๋ง๋ค๋ ์๊ธฐ ์ธ๊ฒ์ผ๋ก ์ถ๋ก .**

๋ก์ปฌ์์๋ ์๋๋๋ฐ netlify ์ ๋ฐฐํฌ๋ง ํ๋๋ ๊ฒ์ด๊ธฐ ๋๋ฌธ์ netlify ํ๊ฒฝ ์ค์ ์ ์ํด ๊ตฌ๊ธ๋ง์ ์ด์ฌํ ํด๋ณด์๊ณ ,

npm run build, npm install, npm start ์๋ ๋ ๋ฌด์กฐ๊ฑด ์๋์ ๊ฐ์ด ํ๊ณ  ์์ด์, ๋ค์ ์๋ํ๋ค.

 - node_modules ํด๋ ์ง์ฐ๊ธฐ
 - package-lock.json ํ์ผ ์ง์ฐ๊ธฐ
 - npm cache clean --force ์บ์ ์ง์ฐ๊ธฐ
 - npm install ๋ค์ npm install

(๋ค๋ฅธ ์ฝ์ง๋ก๋ netlify.toml๋ ๋ฐ๊ฟ๋ณด๊ณ  peer์ ๋์ค๋ ๋ฒ์ ์ผ๋ก ๋ค ๋ฐ๊ฟ๋ณด์์ง๋ง... ์ด๋ ๊ฒ ๋ฐ๊ฟ๋

๋ ๋ฐ๊พธ๋ผ๊ณ  ํ๊ณ , ๋ ๋ ๋ ๋ฐ๊พธ๋ผ๊ณ  ํด์ ๋ต์ด ๋์ค์ง ์์๋ค.ใใ)

***

๋ก์ปฌ์์๋ ๋ค์ npm install ์ ํ๋๋ ๋น์ทํ๊ฒ netlify์์ ์ฐํ ๋ด์ฉ๊ณผ ๋น์ทํ๊ฒ ๋์๊ณ ,

react์ gatsby ๋ฒ์ ๋๋ฌธ์ ์๊ธด ์ด์๋ก ํ์ํ ๋ค

--force ์ --legacy-peer-deps ์ต์์ ์ฌ์ฉํ๋ฉด ์ ์์ ์ผ๋ก ์ค์น๋๊ณ , ์คํ๋๋ค.

 - npm install --force : ์ถฉ๋ํ๋ ๋ถ๋ถ๋ค์ root์ ์ค์น.
 - npm install--legacy-peer-deps :  ์ถฉ๋ํ๋ ๋ถ๋ถ๋ค์ ๋ฌด์ํ๊ณ  ์ค์น.

๊ทธ๋์ ์ด๋ถ๋ถ์ ์ํด netlify ์ค์ ์์ Environment(ํ๊ฒฝ์ด๋ ๋ป์ด์ฃต~)์ ๋ค์ด๊ฐ์ ์๋์ ๊ฐ์ด ์ค์ ํ๋ค.
<style>
.gatsby-resp-image-wrapper {
    margin-left: inherit !important;
    width: 100% !important;
}
</style>
![environment](environment.png)

### CI = false -> CI ๋ผ๋ ํ๊ฒฝ๋ณ์

### NPM_FALGS = --legacy-peer-deps -> ์ถฉ๋์ด ๋๋ ๋ฌด์ ํ๊ฐ๋ค!!!

![environment_setting](environment_setting.png)

๊ทธ๋ฆฌ๊ณ  build setting ๋ 

![build_setting](build_setting.png)

### Build Command : CI= npm run build 

๋ก ๋ณ๊ฒฝํด์ฃผ๊ณ , 

Publish directory : ๋ ๋ก์ปฌ์์ npm run build ํ์๋ ์์ฑ๋ ํด๋๋ช๊ณผ ๋์ผํ์ง ์ ํ์ธ ํ (๋๋ public ์ผ๋ก ๋์ด์๋๊ฑธ ํ์ธ ํจ) save!!!

๊ทธ๋ฌ๋๋!!! ๋ฐฐํฌ๋ ์๋์ง๋ง ๋ฉ์ธ์ง๋ ๋ณ๊ฒฝ๋์๋ค.

```
...
3:53:56 PM: info Total nodes: 121, SitePage nodes: 17 (use --verbose for breakdown)
3:53:56 PM: success Checking for changed pages - 0.000s
3:53:56 PM: success onPreExtractQueries - 0.000s
3:54:02 PM: success extract queries from components - 6.613s
3:54:02 PM: success write out redirect data - 0.003s
3:54:03 PM: success Build manifest and related icons - 0.614s
3:54:03 PM: success onPostBootstrap - 0.691s
3:54:03 PM: info bootstrap finished - 19.282s
3:54:03 PM: success write out requires - 0.004s
3:54:27 PM: failed Building production JavaScript and CSS bundles - 23.676s
3:54:27 PM: error Generating JavaScript bundles failed
3:54:27 PM: Can't resolve '@emotion/react' in '/opt/build/repo/node_modules/@mui/styled-engine/GlobalStyles'
3:54:27 PM: If you're trying to use a package make sure that '@emotion/react' is installed. If you're trying to use a local file make sure that the path is correct.
3:54:27 PM: error Generating JavaScript bundles failed
3:54:27 PM: Can't resolve '@emotion/react' in '/opt/build/repo/node_modules/@mui/styled-engine/StyledEngineProvider'
3:54:27 PM: If you're trying to use a package make sure that '@emotion/react' is installed. If you're trying to use a local file make sure that the path is correct.
3:54:27 PM: error Generating JavaScript bundles failed
3:54:27 PM: Can't resolve '@emotion/styled' in '/opt/build/repo/node_modules/@mui/styled-engine'
3:54:27 PM: If you're trying to use a package make sure that '@emotion/styled' is installed. If you're trying to use a local file make sure that the path is correct.
3:54:27 PM: error Generating JavaScript bundles failed
3:54:27 PM: Can't resolve '@emotion/react' in '/opt/build/repo/node_modules/@mui/styled-engine'
3:54:27 PM: If you're trying to use a package make sure that '@emotion/react' is installed. If you're trying to use a local file make sure that the path is correct.
3:54:27 PM: error Generating JavaScript bundles failed
3:54:27 PM: Can't resolve '@emotion/react' in '/opt/build/repo/node_modules/gatsby-plugin-material-ui'
3:54:27 PM: If you're trying to use a package make sure that '@emotion/react' is installed. If you're trying to use a local file make sure that the path is correct.
3:54:27 PM: not finished Running gatsby-plugin-sharp.IMAGE_PROCESSING jobs - 34.372s
3:54:27 PM: 
...
```

๋ ๊ฐ์๊ธฐ emotion/react ๊ฐ ๋ฌธ์ ์ธ ๊ฒ์ผ๋ก ๋ณด์ฌ,

๊ทธ๋ฅ ์๋์ ๊ฐ์ด ์ค์นํด์ฃผ์๋ค.

```shell
npm install @emotion/react 
npm install @emotion/styled
```
์ค์น ํ ๋ณ๊ฒฝ๋ package.json ํ์ผ์ commit ํ push ์๋ฃ ํ๋๋!!!

<img src="/deploy_published1.png">

๊ฒจ์ฐ ๋ฐฐํฌ๊ฐ ์๋ฃ๋์๋ค.

๋ค์๋ฒ์๋ ๋ ๊น์ด netlify์ ๋ฐฐํฌ ํ๋ก์ธ์ค์ ๋ํ ๋ถ๋ถ์ ์์๋ด์ผ ๊ฒ ๋ค.~

๋๋ ๋ฐ์ ํ์!

<img src="/error.png">

๋ฐฐํฌ ์๋์ ์ฝ์งํ ํ์ ....

๊ทธ๋ผ 20,000;
