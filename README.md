<h1 align="center">
  Danmin Gatsby Blog Template
</h1>

<p align="center">
  <a href="https://github.com/danmin20/danmin-gatsby-blog-template/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-0BSD-blue.svg" alt="Danmin Gatsby Blog Template is released under the 0BSD license." />
  </a>
</p>

**Demo Website**: [**jeong-min.com**](https://www.jeong-min.com/)  
**Open source Code**: [**Github**](https://github.com/danmin20/danmin-gatsby-blog-template)

&nbsp;

## 👋 소개

X로그, X스토리, X런치, X디엄.. 안 써본 블로그 플랫폼이 없을 정도로 유목민 생활을 해왔는데요, 결국 돌고 돌아 블로그 템플릿을 만들게 되었습니다!

이 템플릿의 베이스가 되어준 [줌코딩 님의 블로그 템플릿](https://github.com/zoomkoding/zoomkoding-gatsby-blog)도 많은 관심 부탁드리며, 흔쾌히 커스터마이징을 허락해주신 제 사우님, [줌코딩](https://zoomkoding.com/) 님께 감사드립니다! 🙇

&nbsp;

## ✨ 기능

- ✨ 홈 화면에 원하는 글 선택적 노출
- 🌘 다크모드 지원
- 💅 코드 하이라이팅 지원
- 👉 글 목차 자동 생성(ToC)
- 💬 Utterances 댓글 기능 지원
- ☕️ 후원을 받을 수 있는 Buy me a coffee 컴포넌트
- 📚 글을 카테고리별로 보여주는 Posts 페이지
- 👨‍💻 타임스탬프로 활동 경력을 보여주는 About 페이지
- 👋 Utterances를 활용한 방명록 페이지
- 😎 프로젝트를 보여줄 수 있는 Playground 페이지
- 📈 다양한 개츠비 플러그인 지원 (Google Analytics, Google Adsense 등)
- 🛠 sitemap.xml, robots.txt 자동 생성

&nbsp;

## 🚀 시작하기

Github Page, Netlify, Vercel 등 원하시는 배포 환경을 사용하시면 됩니다.

&nbsp;

#### 🔧 Netlify로 만들기

아래 버튼을 사용하면, 개인 계정으로 템플릿 Repository 생성 및 Netlify 배포를 동시에 진행할 수 있습니다. 

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/danmin20/danmin-gatsby-blog-template)

#### 🏃‍♀️ 실행하기

1. 생성된 Repository를 clone합니다.

2. 아래 명령어를 실행하여 로컬 환경에 블로그를 실행합니다.

```bash
# Install dependencies
$ yarn

# Start development server
# Server will run at http://localhost:8000
$ yarn dev
```

&nbsp;

## ✨ 블로그 커스텀하기

이제 `gatsby-site-meta-data.ts`의 값들을 변경해봅시다! 🙌

&nbsp;

### 1. 블로그 기본 정보

```ts
title: `jeong-min.com`,
description: `개발자 단민`,
language: `ko`,
siteUrl: `https://jeong-min.com/`,
ogImage: `/og-image.png` // 공유할 때 보이는 미리보기 이미지
```

&nbsp;

### 2. 댓글 설정

블로그 글들에 댓글을 달 수 있길 원하신다면 utterances를 통해서 이를 설정하실 수 있습니다. 방명록도 이와 연동됩니다.

> 🦄 utterances 사용방법은 [링크](https://utteranc.es/)를 참고해주세요!

```ts
comments: {
    utterances: {
        repo: '' // danmin20/danmin-gatsby-blog`,
    },
}

```

&nbsp;

### 3. 글쓴이 정보

글쓴이(author)에 입력하신 정보는 메인 화면과 about 페이지에서 사용됩니다. 

```ts
author: {
    name: `이정민`,
    nickname: `단민`,
    stack: ['Frontend', 'React', 'Typescript'],
    bio: {
      email: `ljm991108@gmail.com`,
      residence: 'Seoul, South Korea',
      bachelorDegree: 'Kyunghee Univ. Computer Engineering (2018.03-2022.02)',
    },
    social: {
      github: `https://github.com/danmin20`,
      linkedIn: `https://www.linkedin.com/in/jeonming-lee/`,
      resume: `https://www.figma.com/file/dtkCl6G7G5DVe18DN2LWny/%EC%9D%B4%EC%A0%95%EB%AF%BC-%EC%9D%B4%EB%A0%A5%EC%84%9C?node-id=0%3A1`,
    },
    // 드롭다운으로 보여주고 싶은 추가 링크들
    dropdown: {
      tistory: 'https://danminblog.tistory.com/',
      velog: 'https://velog.io/@danmin20',
    },
},
```

&nbsp;

### 4. 메인 화면에 노출시킬 항목 설정

메인 화면에 그루핑하여 노출시킬 글들을 설정할 수 있습니다.

```ts
featured: [
  {
    title: 'example1',
    category: 'featured-example1',
  },
  {
    title: 'example2',
    category: 'featured-example2',
  },
],
```

위의 category에 들어가는 키워드는 마크다운 파일로 글을 작성할 때 넣은 category와 동일합니다.

> 글의 카테고리를 작성할 때, `featured-` 를 포함할 경우, 지정한 title로 홈에 노출됩니다.  
> `featured-example1`으로 작성할 경우, 카테고리는 `example1`으로 분류됩니다.

&nbsp;

### 5. timestamps

timestamp 정보를 배열로 작성하면 Category에 따라 분리되어 보여지게 됩니다.

```ts
timestamps: [
  {
    category: 'Career',
    date: '2022.01.04 - NOW',
    en: 'A Corp.',
    kr: 'A 회사',
    info: 'A 팀',
    link: '',
  },
  {
    category: 'Career',
    date: '2021.01.04 - 2022.01.04',
    en: 'B Corp.',
    kr: 'B 회사',
    info: 'B 팀',
    link: '',
  },
  {
    category: 'Activity',
    date: '2023.07 - NOW',
    en: 'Community',
    kr: '커뮤니티',
    info: 'IT 커뮤니티',
    link: '',
  },
],
```

&nbsp;

### 6. projects

project 정보를 배열로 작성하면 Playground 페이지에 보여지게 됩니다.

```js
projects: [
  {
    title: 'Portfolio',
    description: '포트폴리오',
    techStack: ['React', 'Next.js', 'Typescript'],
    thumbnailUrl: '', // Path to your in the 'assets' folder
    links: {
    post: '',
    github: '',
    demo: '',
    googlePlay: '',
    appStore: '',
    },
  },
],
```

&nbsp;

### 7. remittances

remittance 정보는 Buy me a coffee 컴포넌트에 사용됩니다.

```js
remittances: {
  toss: {
    link: 'https://toss.me/danmin',
    qrCode: 'toss_qr.svg', // Path to your in the 'assets' folder
  },
  kakaopay: {
    qrCode: 'kakao_qr.svg', // Path to your in the 'assets' folder
  },
}
```

그렇게 내용을 문제 없이 입력하셨다면 나만의 블로그가 탄생한 것을 확인하실 수 있습니다.🎉

> config를 수정했을 경우, `yarn dev`로 재실행 해주셔야 합니다!

&nbsp;

## ✍️ 글 쓰기

본격적으로 블로그에 글을 쓰려면 `/content` 아래에 디렉토리를 생성하고 `index.md`에 markdown으로 작성하시면 됩니다.

> 폴더의 이름으로 경로가 생성됩니다.

&nbsp;

#### 🏗 메타 정보

index.md 파일의 상단에는 아래와 같이 emoji, title, date, categories 정보를 제공해야 합니다.

> emoji는 글머리에 보여지게 되며, categories는 띄어쓰기로 구분하여 입력할 수 있습니다.

```
---
emoji: ✨
title: My first writing
date: '2023-12-11'
categories: life dev
---
```

#### 🖼 이미지 경로

글에 이미지를 첨부하고 싶으시다면 같은 디렉토리에 이미지 파일을 추가하셔서 아래와 같이 사용하시면 됩니다.

```
![](ex.png)
```

이미지를 여러 장 나열하여 보여주고 싶다면 표를 이용하면 됩니다.

```
| | |
| - | - |
| ![](ex1.png) | ![](ex2.png) |
```

#### 🔍 목차 생성

글의 우측에 목차가 보이기를 원하신다면 `index.md` 파일 맨 아래에 다음 내용을 추가하시면 자동으로 목차가 생성됩니다.

    ```toc
    ```

&nbsp;

### 💡 문의

질문이 있으시거나 제안하고 싶으신 기능이 있으시다면, 👉 [여기](https://github.com/danmin20/danmin-gatsby-blog-template/issues/1)에 편하게 댓글 남겨주세요! :)
