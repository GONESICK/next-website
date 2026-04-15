'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="ml-4"
    >
      <Languages className="h-4 w-4 mr-2" />
      {language === 'en' ? '中文' : 'EN'}
    </Button>
  );
}
