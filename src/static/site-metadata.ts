interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: "Zipping's Running Page",
  siteUrl: 'https://m.wuzhiping.top/running',
  logo: 'https://media.istockphoto.com/id/1158723576/vector/running-man-icon-sign-flat.jpg?s=612x612&w=0&k=20&c=Nfj6k5NvsAdx9nS5JeqrK_tkpVvJ1pDHZfe7mqSvMOU=',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://me.wuzhiping.top',
    },
    {
      name: 'About',
      url: 'https://github.com/frankwuzp',
    },
  ],
};

export default data;
