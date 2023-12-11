export type SiteMetadata = {
  title: string;
  author: Author;
  featured: { title: string; category: string }[];
  siteUrl: string;
  social: Social;
  language: string;
  comments: {
    utterances: {
      repo: string;
    };
  };
  timestamps: Timestamp[];
  projects: Project[];
};

export type Timestamp = {
  category: string;
  date: string;
  en: string;
  kr: string;
  info: string;
  link: string;
};

export type Project = {
  title: string;
  description: string;
  techStack: string[];
  thumbnailUrl: string;
  links: {
    post: string;
    github: string;
    googlePlay: string;
    appStore: string;
    demo: string;
  };
};

export type Author = {
  name: string;
  nickname: string;
  stack: string[];
  bio: Bio;
  social: Social;
  dropdown: Record<string, string>;
};

export type Bio = {
  email: string;
  residence: string;
  bachelorDegree: string;
};

export type Social = {
  github: string;
  linkedIn: string;
  resume: string;
};

export type Post = {
  id: string;
  excerpt: string;
  html: string;
  frontmatter: Frontmatter;
  fields: Fields;
};

export type AllMarkdownRemark = {
  edges: { node: MarkdownRemark; next: { fields: Fields }; previous: { fields: Fields } }[];
};

export type MarkdownRemark = {
  id: string;
  frontmatter: Frontmatter;
  fields: Fields;
  excerpt: string;
  html: string;
};

export type Frontmatter = {
  title: string;
  author: string;
  date: string;
  emoji: string;
  categories: string;
};

export type Fields = {
  slug: string;
};
