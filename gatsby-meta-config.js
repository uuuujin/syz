module.exports = {
  title: `syz`,
  description: `일단 채워 넣자`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://syz.netlify.app`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: ``, //
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `syz`,
    bio: {
      role: `개발자`,
      description: ['일단 채워 넣자'],
      thumbnail: 'home.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/uuuujin/syz`, //
      linkedIn: ``, //
      email: ``, //
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2022.09 ~',
        activity: 'github.io -> netlify 로 이동',
        links: {
          post: '',
          github: 'https://github.com/uuuujin/syz',
          demo: 'https://syz.netlify.app/',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: '일단 채워 넣자',
        description:
          '일단 무엇이든 채워 넣는 블로그',
        techStack: ['gatsby', 'react'],
        thumbnailUrl: 'home.png',
        links: {
          post: '',
          github: 'https://github.com/uuuujin/syz',
          demo: 'https://syz.netlify.app/',
        },
      },
    ],
  },
};
