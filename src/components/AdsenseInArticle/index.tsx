import React, { useEffect } from 'react';

import siteMetadata from '../../../gatsby-site-meta-data';

declare global {
  interface Window {
    adsbygoogle?: Record<string, unknown>[];
  }
}

const { publisherId, inArticleSlot } = siteMetadata.adsense;
// 플레이스홀더(ca-pub-XXXX...) 상태에서는 렌더링하지 않음
const isConfigured = /^ca-pub-\d+$/.test(publisherId) && /^\d+$/.test(inArticleSlot);

const AdsenseInArticle: React.FC = () => {
  useEffect(() => {
    if (!isConfigured) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // 광고 차단 등으로 adsbygoogle 스크립트가 없으면 무시
    }
  }, []);

  if (!isConfigured) return null;

  return (
    <ins
      className='adsbygoogle'
      style={{ display: 'block', textAlign: 'center', margin: '24px 0' }}
      data-ad-client={publisherId}
      data-ad-slot={inArticleSlot}
      data-ad-format='fluid'
      data-ad-layout='in-article'
    />
  );
};

export default AdsenseInArticle;
