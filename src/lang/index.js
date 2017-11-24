import { Platform, NativeModules } from 'react-native';
import spanish from './es_ES';

const langRegionLocale = Platform.OS === 'android'
  ? NativeModules.I18nManager.localeIdentifier || ''
  : NativeModules.SettingsManager.settings.AppleLocale || '';

const langs = {
  es_ES: spanish,
};

export default function text(value: string): string {
  return langs[langRegionLocale.substring(0, 2)][value];
}
