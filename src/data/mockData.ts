export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  comments: number;
  slug: string;
  categoryId: string;
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  count: number;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
}

export const posts: Post[] = [
  {
    id: '1',
    title: 'How to download idm for windows and install',
    excerpt: 'First you visit this link: https://www.internetdownloadmanager.com/ and click on try for free button then download it for your computer (32...',
    content: 'First you visit this link: https://www.internetdownloadmanager.com/ and click on try for free button then download it for your computer (32 or 64 bit depending on your system). After downloading, run the installer and follow the installation steps.',
    image: 'https://ext.same-assets.com/410181739/89559744.jpeg',
    date: 'December 19, 2017',
    comments: 0,
    slug: 'how-to-download-idm-for-windows-and-install',
    categoryId: '4',
    tags: ['1', '4']
  },
  {
    id: '2',
    title: 'ED',
    excerpt: 'This is first page for tips and trics',
    content: 'This is first page for tips and trics. Here you will find various tips and tricks for your tech needs.',
    image: 'https://ext.same-assets.com/2107189163/3593326652.jpeg',
    date: 'December 19, 2017',
    comments: 0,
    slug: 'ed',
    categoryId: '4',
    tags: ['4']
  },
  {
    id: '3',
    title: 'ANDROID FEATURED',
    excerpt: 'TANZIL KJSADHFOUIERJHWGRDTPUD',
    content: 'TANZIL KJSADHFOUIERJHWGRDTPUD - This is sample content for the Android Featured post.',
    image: 'https://ext.same-assets.com/1820876130/315314010.jpeg',
    date: 'December 10, 2017',
    comments: 0,
    slug: 'android-feature',
    categoryId: '1',
    tags: ['1', '2']
  },
  {
    id: '4',
    title: 'kawser',
    excerpt: 'this is a test post for this blog',
    content: 'this is a test post for this blog - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at mauris justo. Mauris euismod dolor eu metus feugiat, vel ullamcorper tortor consequat.',
    image: 'https://ext.same-assets.com/1820876130/2251645718.jpeg',
    date: 'October 20, 2017',
    comments: 1,
    slug: 'kawser',
    categoryId: '3',
    tags: ['3']
  }
];

export const categories: Category[] = [
  {
    id: '1',
    name: 'Android-apps',
    slug: 'android-apps',
    count: 1
  },
  {
    id: '2',
    name: 'Android-Themes',
    slug: 'android-themes',
    count: 1
  },
  {
    id: '3',
    name: 'Featured',
    slug: 'featured',
    count: 1
  },
  {
    id: '4',
    name: 'Tips & Tricks',
    slug: 'tips-tricks',
    count: 1
  }
];

export const tags: Tag[] = [
  {
    id: '1',
    name: 'Android-Themes',
    slug: 'android-themes'
  },
  {
    id: '2',
    name: 'Android-apps',
    slug: 'android-apps'
  },
  {
    id: '3',
    name: 'Featured',
    slug: 'featured'
  },
  {
    id: '4',
    name: 'Tips & Tricks',
    slug: 'tips-tricks'
  }
];
