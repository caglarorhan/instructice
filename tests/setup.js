// setup.js
import { JSDOM } from 'jsdom';

const dom = new JSDOM();
global.document = dom.window.document;
global.window = dom.window;
global.requestAnimationFrame = function(callback) {
  return setTimeout(callback, 0);
};
