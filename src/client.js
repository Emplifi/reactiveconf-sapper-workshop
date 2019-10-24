import * as sapper from '@sapper/app';
import {setupAnalytics} from './analytics';

sapper.start({
  target: document.querySelector('#sapper'),
});

if (process.env.TRACKING_ID) {
  setupAnalytics(process.env.TRACKING_ID);
}
