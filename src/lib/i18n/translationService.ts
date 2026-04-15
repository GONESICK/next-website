const MYMEMORY_API = 'https://api.mymemory.translated.net/get';

export async function translateText(
  text: string,
  targetLang: string,
  sourceLang: string = 'en'
): Promise<string> {
  try {
    const langPair = `${sourceLang}|${targetLang}`;
    const url = `${MYMEMORY_API}?q=${encodeURIComponent(text)}&langpair=${langPair}`;
    
    const response = await fetch(url);

    if (!response.ok) {
      console.error('Translation API error:', response.status);
      return text; // Return original text if translation fails
    }

    const data = await response.json();
    return data.responseData?.translatedText || text;
  } catch (error) {
    console.error('Translation error:', error);
    return text; // Return original text on error
  }
}

export async function translateObject<T extends Record<string, any>>(
  obj: T,
  targetLang: string,
  sourceLang: string = 'en'
): Promise<T> {
  const result: any = {};

  for (const key in obj) {
    const value = obj[key];
    
    if (typeof value === 'string') {
      result[key] = await translateText(value, targetLang, sourceLang);
    } else if (typeof value === 'object' && value !== null) {
      result[key] = await translateObject(value, targetLang, sourceLang);
    } else {
      result[key] = value;
    }
  }

  return result as T;
}

// Simple in-memory cache for translations
const translationCache = new Map<string, string>();

export async function translateWithCache(
  text: string,
  targetLang: string,
  sourceLang: string = 'en'
): Promise<string> {
  const cacheKey = `${sourceLang}-${targetLang}-${text}`;
  
  if (translationCache.has(cacheKey)) {
    return translationCache.get(cacheKey)!;
  }

  const translated = await translateText(text, targetLang, sourceLang);
  translationCache.set(cacheKey, translated);
  
  return translated;
}
