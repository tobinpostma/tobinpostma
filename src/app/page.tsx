'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Header from '@/components/Header';
import Main from '@/components/Main';
import Footer from '@/components/Footer';

const ANIMATION_TIMING = {
  ARTICLE_OPEN: 325,
  ARTICLE_CLOSE: 350,
  INITIAL_LOAD: 100,
} as const;

interface UIState {
  isArticleVisible: boolean;
  timeout: boolean;
  articleTimeout: boolean;
  article: string;
  loading: boolean;
}

export default function HomePage() {
  const [uiState, setUIState] = useState<UIState>({
    isArticleVisible: false,
    timeout: false,
    articleTimeout: false,
    article: '',
    loading: true,
  });

  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleOpenArticle = useCallback((articleName: string) => {
    setUIState((prev) => ({
      ...prev,
      isArticleVisible: !prev.isArticleVisible,
      article: articleName,
    }));

    window.setTimeout(() => {
      setUIState((prev) => ({ ...prev, timeout: !prev.timeout }));
    }, ANIMATION_TIMING.ARTICLE_OPEN);

    window.setTimeout(() => {
      setUIState((prev) => ({ ...prev, articleTimeout: !prev.articleTimeout }));
    }, ANIMATION_TIMING.ARTICLE_CLOSE);
  }, []);

  const handleCloseArticle = useCallback(() => {
    setUIState((prev) => ({ ...prev, articleTimeout: !prev.articleTimeout }));

    window.setTimeout(() => {
      setUIState((prev) => ({ ...prev, timeout: !prev.timeout }));
    }, ANIMATION_TIMING.ARTICLE_OPEN);

    window.setTimeout(() => {
      setUIState((prev) => ({
        ...prev,
        isArticleVisible: !prev.isArticleVisible,
        article: '',
      }));
    }, ANIMATION_TIMING.ARTICLE_CLOSE);
  }, []);

  // Handle initial loading animation
  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setUIState((prev) => ({ ...prev, loading: false }));
    }, ANIMATION_TIMING.INITIAL_LOAD);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  // Handle click outside to close article
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        if (uiState.isArticleVisible) {
          handleCloseArticle();
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [uiState.isArticleVisible, handleCloseArticle]);

  return (
    <div
      className={`body ${uiState.loading ? 'is-loading' : ''} ${uiState.isArticleVisible ? 'is-article-visible' : ''}`}
    >
      <div id="wrapper">
        <Header onOpenArticle={handleOpenArticle} timeout={uiState.timeout} />
        <Main
          timeout={uiState.timeout}
          articleTimeout={uiState.articleTimeout}
          article={uiState.article}
          onCloseArticle={handleCloseArticle}
          wrapperRef={wrapperRef}
        />
        <Footer timeout={uiState.timeout} />
      </div>
      <div id="bg"></div>
    </div>
  );
}
