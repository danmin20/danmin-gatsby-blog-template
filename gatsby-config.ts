/* eslint-disable @typescript-eslint/no-explicit-any */

import type { GatsbyConfig } from 'gatsby';

import siteMetadata from './gatsby-site-meta-data';
import { darkTheme, lightTheme } from './src/styles/const';

const config: GatsbyConfig = {
  flags: {
    DEV_SSR: true,
  },
  siteMetadata,
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-svgr`,
    // Google Adsense
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: `ca-pub-XXXXXXXXXXXX`,
      },
    },
    // Google Analytics
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `G-XXXXXXXX`,
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }: any) => {
              return allMarkdownRemark.nodes.map((node: any) => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  // 사이트 주소(post 주소포함)에 한글이 있는경우 encodeURI을 사용합니다.
                  // slug는 사이트의 post주소을 이름으로 씁니다. gatsby-node.js와 연관 있습니다.
                  url: encodeURI(site.siteMetadata.siteUrl + node.fields.slug),
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ 'content:encoded': node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'jeong-min.com RSS Feed',
            match: '^/blog/',
            link: 'https://feeds.feedburner.com/gatsby/blog',
          },
        ],
      },
    },
    {
      resolve: `gatsby-emotion-dark-mode`,
      options: {
        light: lightTheme,
        dark: darkTheme,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://jeong-min.com/',
        sitemap: 'https://jeong-min.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 720,
              linkImagesToOriginal: false,
              backgroundColor: 'transparent',
            },
          },
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              exclude: 'Table of Contents',
              tight: false,
              ordered: false,
              fromHeading: 2,
              toHeading: 6,
              className: 'table-of-contents',
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: 'superscript',
                  extend: 'javascript',
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              prompt: {
                user: 'root',
                host: 'localhost',
                global: false,
              },
              escapeEntities: {},
            },
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.title,
        description: siteMetadata.description,
        start_url: `/`,
        lang: `en`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
  ],
};

export default config;
