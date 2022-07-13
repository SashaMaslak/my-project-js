import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(savePlayerTime, 1000));

function savePlayerTime(e) {
   localStorage.setItem(STORAGE_KEY, e.seconds);
}

player.setCurrentTime(localStorage.getItem(STORAGE_KEY));
