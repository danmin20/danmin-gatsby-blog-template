import { RenderBodyArgs } from 'gatsby';

import siteMetadata from './gatsby-site-meta-data';

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }: RenderBodyArgs) => {
  setHtmlAttributes({ lang: `kr` });
  setHeadComponents([
    <script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${siteMetadata.adsense.publisherId}`}
      crossOrigin='anonymous'
      key='google-adsense'
    />,
    <link
      rel='preload'
      href='https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansLight.woff'
      as='font'
      type='font/woff'
      crossOrigin='anonymous'
      key='GmarketSansLight'
    />,
    <link
      rel='preload'
      href='https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff'
      as='font'
      type='font/woff'
      crossOrigin='anonymous'
      key='GmarketSansMedium'
    />,
    <link
      rel='preload'
      href='https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff'
      as='font'
      type='font/woff'
      crossOrigin='anonymous'
      key='GmarketSansBold'
    />,
  ]);
};
