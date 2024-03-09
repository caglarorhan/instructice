// instructice.test.js
import "./setup.js";
import sinon from "sinon";
import { test } from 'vitest';
import { JSDOM} from 'jsdom';
import Instructice from '../src/instructice.js'

test('Instructice start method', async () => {
  const dom = new JSDOM();
  globalThis.document = dom.window.document;
  global.window = dom.window;
  global.requestAnimationFrame = function(callback) {
    return setTimeout(callback, 0);
  };

  // Create a fake timer
  const clock = sinon.useFakeTimers();

  const instructice = new Instructice()
  await instructice.start();

  clock.tick(30000);

  await promise;

  if (!instructice.isRunning) {
    throw new Error('Instructice did not start');
  }

  clock.restore();
},35000)
