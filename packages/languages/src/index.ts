/**
 * External dependencies
 */
import values from 'lodash/values';
import keys from 'lodash/keys';

/**
 * Internal dependencies
 */
import data from './languages-meta.json';

type LanguageSlug = string;
type WPLocale = string;

type BaseLanguage = {
	langSlug: LanguageSlug;
	name: string;
	popular?: number;
	rtl?: boolean;
	territories: string[];
	value: number;
	wpLocale: WPLocale | '';
};

type SubLanguage = BaseLanguage & { parentLangSlug: string };

export type Language = BaseLanguage | SubLanguage;

export const languagesBySlug = data;
export const languageSlugs: LanguageSlug[] = keys( data );
export const languages: Language[] = values( data );
export default languages;
