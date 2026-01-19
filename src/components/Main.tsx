import { ComponentType, RefObject } from 'react';
import AboutContent from '@/content/about.mdx';
import WorkContent from '@/content/work.mdx';
import EducationContent from '@/content/education.mdx';
import ContactContent from '@/content/contact.mdx';

interface ArticleConfig {
  id: string;
  title: string;
  Content: ComponentType;
  headerImage?: React.ReactNode;
}

const HeadshotImage = () => (
  <span className="image main center">
    <picture>
      <source
        srcSet="/images/tobin-headshot-450.avif 450w, /images/tobin-headshot-900.avif 900w"
        sizes="(max-width: 480px) 450px, 900px"
        type="image/avif"
      />
      <source
        srcSet="/images/tobin-headshot-450.webp 450w, /images/tobin-headshot-900.webp 900w"
        sizes="(max-width: 480px) 450px, 900px"
        type="image/webp"
      />
      <img
        src="/images/tobin-headshot-450.jpg"
        srcSet="/images/tobin-headshot-450.jpg 450w, /images/tobin-headshot-900.jpg 900w"
        sizes="(max-width: 480px) 450px, 900px"
        alt="Tobin Postma headshot"
        width={450}
        height={600}
        loading="lazy"
        style={{ height: 'auto' }}
      />
    </picture>
  </span>
);

const articles: ArticleConfig[] = [
  { id: 'about', title: 'About', Content: AboutContent, headerImage: <HeadshotImage /> },
  { id: 'work', title: 'Work', Content: WorkContent },
  { id: 'education', title: 'Education+', Content: EducationContent },
  { id: 'contact', title: 'Contact', Content: ContactContent },
];

interface MainProps {
  article: string;
  articleTimeout: boolean;
  timeout: boolean;
  onCloseArticle: () => void;
  wrapperRef: RefObject<HTMLDivElement | null>;
}

export default function Main({
  article,
  articleTimeout,
  timeout,
  onCloseArticle,
  wrapperRef,
}: MainProps) {
  const closeButton = (
    <div
      className="close"
      onClick={onCloseArticle}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onCloseArticle()}
    />
  );

  return (
    <div ref={wrapperRef} id="main" style={timeout ? { display: 'flex' } : { display: 'none' }}>
      {articles.map(({ id, title, Content, headerImage }) => (
        <article
          key={id}
          id={id}
          className={`${article === id ? 'active' : ''} ${articleTimeout ? 'timeout' : ''}`}
          style={{ display: 'none' }}
        >
          <h2 className="major">{title}</h2>
          {headerImage}
          <Content />
          {closeButton}
        </article>
      ))}
    </div>
  );
}
