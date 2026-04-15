'use client';

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { translations, Language, TranslationKey } from './translations';
import { translateWithCache } from './translationService';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [translatedContent, setTranslatedContent] = useState<any>(null);

  useEffect(() => {
    // Load language from localStorage
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'zh')) {
      setLanguageState(savedLang);
    }
  }, []);

  const translateObjectRecursively = useCallback(async (obj: any, targetLang: string): Promise<any> => {
    const result: any = {};
    
    for (const key in obj) {
      const value = obj[key];
      
      if (typeof value === 'string') {
        result[key] = await translateWithCache(value, targetLang, 'en');
      } else if (typeof value === 'object' && value !== null) {
        result[key] = await translateObjectRecursively(value, targetLang);
      } else {
        result[key] = value;
      }
    }
    
    return result;
  }, []);

  useEffect(() => {
    // Auto-translate when language changes
    if (language === 'en') {
      setTranslatedContent(null); // Use original translations
    } else if (language === 'zh') {
      // Auto-translate from English to Chinese
      translateObjectRecursively(translations.en, 'zh').then((result) => {
        setTranslatedContent(result);
      });
    }
  }, [language, translateObjectRecursively]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = language === 'zh' && translatedContent ? translatedContent : translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
