export const herobannerAssets = [
  {
    pageUrl: '/',
    imageUrl: '/assets/fst-home-banner.jpg',
    content: {
      mainHead: 'Your Digital Visionaries:',
      subHead: 'Transforming Dreams into Digital Reality',
    },
    fiveSensesData: {
      senseOnePunchline: 'Transforming Dreams into Digital Reality',
      senseTwoPunchline: 'Empowering Brands with Seamless User Experiences',
      senseThreePunchline: 'Crafting Experiences That Fit Every Screen',
      senseFourPunchline: 'Making Brands Unforgettable Through Powerful Identity',
      senseFivePunchline: 'Revitalize Your Brand with Content That Speaks and Engages',
    },
  },
  {
    pageUrl: '/services/web-design',
    imageUrl: '/assets/services/web-design/web-design-concepts.jpg',
    content: {
      mainHead: 'Your Digital Visionaries:',
      subHead: 'Empowering Brands with Seamless User Experiences'
    },
  },
  {
    pageUrl: '/services/software-development',
    imageUrl: '/assets/services/software-development-concept.jpg',
    content: {
      mainHead: 'Your Digital Visionaries:',
      subHead: 'Innovative Software Solutions for a Dynamic World'
    },
  },
  {
    pageUrl: '/services/mobile-app-development',
    imageUrl: '/assets/services/mobile-app-development-concept.jpg',
    content: {
      mainHead: 'Your Digital Visionaries:',
      subHead: 'Crafting Exceptional Apps for a Digital Tomorrow - Seamless Solutions'
    },
  },

  {
    pageUrl: '/services/search-engine-marketing',
    imageUrl: '/assets/services/seo-concept.jpg',
    content: {
      mainHead: 'Your Digital Visionaries:',
      subHead: 'Boost Your Online Presence and Drive Results'
    },
  },

  {
    pageUrl: '/services/lead-generation',
    imageUrl: '/assets/services/lead-generation-ppc-concept.jpg',
    content: {
      mainHead: 'Your Digital Visionaries:',
      subHead: 'Boost Your Online Presence and Drive Results'
    },
  },

  {
    pageUrl: '/services/social-media-marketing',
    imageUrl: '/assets/services/social-media-concept.jpg',
    content: {
      mainHead: 'Your Digital Visionaries:',
      subHead: 'Transform Clicks into Connections with Five Sense Technology'
    },
  },
  {
    pageUrl: '/services/content-writing',
    imageUrl: '/assets/services/content-writing-concept.jpg',
    content: {
      mainHead: 'Your Digital Visionaries:',
      subHead: 'Crafting Words That Inspire, Engage, and Deliver Results!'
    },
  },

]

export const herobannerContent = (url) => {
  return (
    herobannerAssets.find((item) => item.pageUrl == url) || herobannerAssets[0]
  );
};



