export type Project = {
  id: number;
  isEmbedded?: boolean;
  name: string;
  tags: string[];
  largeImage?: string;
  smallImage?: string;
  projectLink: string;
  codeLink?: string;
  iFrameSrc?: string;
};

export const projectsData: Project[] = [
  {
    id: 0,
    name: "Card Preview",
    tags: ["html", "css", "javascript"],
    isEmbedded: true,
    projectLink: "https://batyr-qhan.github.io/card-preview-html-css-js/",
    codeLink: "https://github.com/batyr-qhan/card-preview-html-css-js",
    iFrameSrc: "https://batyr-qhan.github.io/card-preview-html-css-js/",
  },
  {
    id: 2,
    name: "My First Portfolio (2022)",
    tags: ["next.js", "scss", "framer motion"],
    largeImage: "thumbnail-project-1-large.webp",
    smallImage: "thumbnail-project-1-small.webp",
    projectLink: "https://batyr-qhan-portfolio.vercel.app/",
    codeLink: "https://github.com/batyr-qhan/my-portfolio",
  },
  {
    id: 3,
    name: "React Native Expo Mobile App",
    tags: ["react native", "expo"],
    largeImage: "thumbnail-project-2-large.webp",
    smallImage: "thumbnail-project-2-small.webp",
    projectLink: "https://www.loom.com/share/7b88c6a42ae44bc2acf973c10c0d035e",
  },
  {
    id: 4,
    name: "My Chat Room",
    tags: ["react", "css", "firebase"],
    largeImage: "thumbnail-project-3-large.webp",
    smallImage: "thumbnail-project-3-small.webp",
    projectLink: "https://batyr-qhan.github.io/cool-chat-react-app/",
    codeLink: "https://github.com/batyr-qhan/cool-chat-react-app",
  },
  {
    id: 5,
    name: "New Screen For Data Display",
    tags: ["react.js", "typescript", "ant design"],
    largeImage: "thumbnail-project-4-large.webp",
    smallImage: "thumbnail-project-4-small.webp",
    projectLink: "https://youtu.be/fenUSnbBrUM",
    // codeLink:
    //   "https://gist.github.com/batyr-qhan/8a0b88faf344ada20f3a53cdadee22c3",
  },
];

// export const projectsData = [
//   {
//     id: 0,
//     name: "Card Preview",
//     tags: ["html", "css", "javascript"],
//     largeImage: "thumbnail-project-5-large.webp",
//     smallImage: "thumbnail-project-5-small.webp",
//     projectLink: "https://batyr-qhan.github.io/card-preview-html-css-js/",
//     codeLink: "",
//   },
//   {
//     id: 2,
//     name: "My First Portfolio (2022)",
//     tags: ["next.js", "scss", "framer motion"],
//     largeImage: "thumbnail-project-1-large.webp",
//     smallImage: "thumbnail-project-1-small.webp",
//     projectLink: "https://batyr-qhan-portfolio.vercel.app/",
//     codeLink: "https://github.com/batyr-qhan/my-portfolio",
//   },
//   {
//     id: 3,
//     name: "React Native Expo Mobile App",
//     tags: ["react native", "expo"],
//     largeImage: "thumbnail-project-2-large.webp",
//     smallImage: "thumbnail-project-2-small.webp",
//     projectLink: "https://www.loom.com/share/7b88c6a42ae44bc2acf973c10c0d035e",
//   },
//   {
//     id: 4,
//     name: "My Chat Room",
//     tags: ["react", "css", "firebase"],
//     largeImage: "thumbnail-project-3-large.webp",
//     smallImage: "thumbnail-project-3-small.webp",
//     projectLink: "https://batyr-qhan.github.io/cool-chat-react-app/",
//     codeLink: "https://github.com/batyr-qhan/cool-chat-react-app",
//   },
//   {
//     id: 5,
//     name: "New Screen For Data Display",
//     tags: ["react.js", "typescript", "ant design"],
//     largeImage: "thumbnail-project-4-large.webp",
//     smallImage: "thumbnail-project-4-small.webp",
//     // projectLink: "https://youtu.be/fenUSnbBrUM",
//     // codeLink:
//     //   "https://gist.github.com/batyr-qhan/8a0b88faf344ada20f3a53cdadee22c3",
//   },
// ];
