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

]

export const herobannerContent = (url) => {
  return (
    herobannerAssets.find((item) => item.pageUrl == url) || herobannerAssets[0]
  );
};



