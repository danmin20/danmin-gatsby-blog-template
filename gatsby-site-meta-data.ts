export default {
  title: `jeong-min.com`,
  description: `개발자 단민`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://jeong-min.com/`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `danmin20/danmin-gatsby-blog`,
    },
  },
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
    legacyBlog: {
      tistory: 'https://danminblog.tistory.com/',
      velog: 'https://velog.io/@danmin20',
    },
  },

  // metadata for About Page
  about: {
    careers: [
      {
        date: '2022.01.04 - NOW',
        en: 'Woowa Brothers Corp.',
        kr: '우아한형제들',
        info: 'Web front development group',
      },
      {
        date: '2021.09.27 - 2021.12.26',
        en: 'Daangn',
        kr: '당근마켓 (인턴)',
        info: 'MVP Intership',
      },
      {
        date: '2021.07.05 - 2021.08.31',
        en: 'Woowa Brothers Corp.',
        kr: '우아한형제들 (인턴)',
        info: 'Tech camp 4th',
      },
      {
        date: '2021.03.02 - 2021.04.09',
        en: 'Naver',
        kr: '네이버 (인턴)',
        info: 'Glace CIC / smart place service',
      },
      {
        date: '2020.11.02 - 2021.02.28',
        en: 'Megazone Cloud',
        kr: '메가존클라우드 (인턴)',
        info: 'Cloud Tech Center / CloudOne',
      },
      {
        date: '2020.06.29 - 2020.10.16',
        en: 'TwentyOZ',
        kr: '트웬티온스 (인턴)',
        info: 'Field training',
      },
    ],

    activities: [
      {
        date: '2023.07 - NOW',
        en: 'SIPE',
        kr: '사이프',
        info: 'Community for IT workers',
        link: 'https://sipe.team/',
      },
      {
        date: '2022.09 - 2023.01',
        en: 'SOPT makers',
        kr: '솝트 메이커스',
        info: 'Organization makes products for SOPT',
        link: 'https://sopt-makers.oopy.io/',
      },
      {
        date: '2020.09 - NOW',
        en: 'AUSG',
        kr: '아우쓱',
        info: 'AWS university student group',
        link: 'https://ausg.me/',
      },
      {
        date: '2020.07 - 2021.12',
        en: 'Depromeet',
        kr: '디프만',
        info: 'Club with designers and programmers',
        link: 'https://depromeet.com/',
      },
      {
        date: '2020.03 - 2020.08',
        en: 'SOPT',
        kr: '솝트',
        info: 'College student start-up IT club',
        link: 'https://sopt.org/',
      },
      {
        date: '2020.03 - 2020.06',
        en: 'Like Lion',
        kr: '멋쟁이사자처럼',
        info: 'College student start-up IT club',
        link: 'https://www.likelion.net/',
      },
    ],
  },

  // metadata for Playground Page
  playground: {
    projects: [
      {
        title: 'first portfolio website',
        description: '첫번째 포폴 사이트',
        techStack: ['React', 'Next.js', 'TS'],
        thumbnailUrl: 'first-portfolio.png',
        links: {
          post: '',
          github: 'https://github.com/danmin20/LeeJeongMin',
          demo: 'https://first-portfolio.jeong-min.com/',
          googlePlay: '',
          appStore: '',
        },
      },
      {
        title: 'second portfolio website',
        description: '두번째 포폴 사이트',
        techStack: ['React', 'Next.js', 'TS'],
        thumbnailUrl: 'second-portfolio.png',
        links: {
          post: '',
          github: 'https://github.com/danmin20/danmin',
          demo: 'https://second-portfolio.jeong-min.com/',
          googlePlay: '',
          appStore: '',
        },
      },
      {
        title: 'dynamic blob',
        description: 'a dynamic, sticky blob',
        techStack: ['React', 'Vite', 'TS'],
        thumbnailUrl: 'dynamic-blob.png',
        links: {
          post: '',
          github: 'https://github.com/danmin20/dynamic-blob',
          demo: 'https://dynamic-blob.jeong-min.com/',
          googlePlay: '',
          appStore: '',
        },
      },
      {
        title: 'venom controller',
        description: 'a dynamic, sticky venom',
        techStack: ['React', 'Vite', 'TS', 'Three.js'],
        thumbnailUrl: 'venom-controller.png',
        links: {
          post: '',
          github: 'https://github.com/danmin20/venom-controller',
          demo: 'https://venom-controller.jeong-min.com/',
          googlePlay: '',
          appStore: '',
        },
      },
    ],
  },
};
