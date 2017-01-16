// @flow

import en from './en.js';
import cn from './cn.js';

const languages = {
  en,
  cn,
};

const Translation = {
  getContent(language: string = 'en') {
    return languages[language];
  },
};

module.exports = Translation;
