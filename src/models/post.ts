import { MarkdownRemark } from '../type';

export default class PostClass {
  id;
  excerpt;
  emoji;
  html;
  slug;
  title;
  author;
  date;
  categories;

  constructor(node: MarkdownRemark) {
    const { id, html, excerpt, frontmatter, fields } = node;
    const { slug } = fields;
    const { emoji, categories, title, author, date } = frontmatter;

    const categoryArr = categories.split(' ');

    this.id = id;
    this.excerpt = excerpt;
    this.emoji = emoji;
    this.html = html;
    this.slug = slug;
    this.title = title;
    this.author = author;
    this.date = date;
    this.categories = categoryArr;
  }
}
