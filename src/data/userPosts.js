import marvinDP from 'src/assets/user2.svg';
import theresaDP from 'src/assets/user1.svg';

export const posts = [
  {
    id: 1,
    username: 'Theresa Webb',
    email: 'theresa@xyz.com',
    emoji: '👋',
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    noOfComments: 24,
    createdAt: '5mins ago',
    isEdited: false,
    profilePic: theresaDP,
  },
  {
    id: 2,
    username: 'Marvin McKinney',
    email: 'marvin@xyz.com',
    emoji: '😞',
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    noOfComments: 4,
    createdAt: '8mins ago',
    isEdited: true,
    profilePic: marvinDP,
  },
];
