import spanish from './es_ES';

const langs = {
  es_ES: spanish,
};

export default function text(lang: string, value: string): string {
  return langs[lang][value];
}
