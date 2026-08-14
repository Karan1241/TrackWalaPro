/* ============================================================
   TRUCK WALA — app.js
   Horn OK Please — Full Audio Engine + Category Tabs + YT Search
   Keyboard: Space/K = Play/Pause | ←/→ = Prev/Next | M = Mute | H = Horn | F = Fullscreen | L = Playlist
   ============================================================ */

'use strict';

/* ════════════════════════════════════════════
   BUMPER SHAYARI
════════════════════════════════════════════ */
const SHAYARI = [
  'जल मत पगली, किस्तों पे आई है।',
  'भर के चले, फिर भी एक दिन खाली हाथ ही जाना है।',
  'लटक मत, पटक दूँगा।',
  'हंस मत पगली प्यार हो जाएगा।',
  'बुरी नज़र वाले तेरा मुँह काला।',
  'जब मिले मौका, तो मत चूक चंदू।',
  'दूर से आते हैं, दूर तक जाते हैं।',
  'रोड रोमियो से बचो, भाई लोग हम भी हैं।',
  'ओके टाटा बाय बाय।',
  'मेरी मर्ज़ी, मेरा रास्ता।',
];

/* ════════════════════════════════════════════
   CATEGORY TRACK DATA
════════════════════════════════════════════ */
const CATEGORIES = {

  /* ── 90s Bollywood — loaded from tracks.json ── */
  '90s': [],   // populated in init()

  /* ── Latest Bollywood ── */
  bollywood: [
    { id: 'dM3NvSGJkGU', title: 'Kesariya',                  artist: 'Arijit Singh',                  album: 'Brahmastra', duration: 264, cover: 'https://i.ytimg.com/vi/dM3NvSGJkGU/hqdefault.jpg' },
    { id: 'AR7FkAQn27M', title: 'Raataan Lambiyan',           artist: 'Jubin Nautiyal & Asees Kaur',   album: 'Shershaah',  duration: 263, cover: 'https://i.ytimg.com/vi/AR7FkAQn27M/hqdefault.jpg' },
    { id: 'yMXdAo4d_ro', title: 'Tum Kya Mile',               artist: 'Arijit Singh & Shreya Ghoshal', album: 'Rocky Aur Rani Ki Prem Kahaani', duration: 284, cover: 'https://i.ytimg.com/vi/yMXdAo4d_ro/hqdefault.jpg' },
    { id: 'TmLAGankZHs', title: 'Besharam Rang',              artist: 'Vishal & Sheykhar',             album: 'Pathaan',    duration: 212, cover: 'https://i.ytimg.com/vi/TmLAGankZHs/hqdefault.jpg' },
    { id: 'DQZFGCDc-sQ', title: 'Deva Deva',                  artist: 'Arijit Singh',                  album: 'Brahmastra', duration: 322, cover: 'https://i.ytimg.com/vi/DQZFGCDc-sQ/hqdefault.jpg' },
    { id: 'DOwFMOPBdQw', title: 'Srivalli (Hindi)',            artist: 'Javed Ali',                     album: 'Pushpa',     duration: 198, cover: 'https://i.ytimg.com/vi/DOwFMOPBdQw/hqdefault.jpg' },
    { id: '0gcRHyHCGBI', title: 'Apna Bana Le',               artist: 'Arijit Singh',                  album: 'Bhediya',    duration: 237, cover: 'https://i.ytimg.com/vi/0gcRHyHCGBI/hqdefault.jpg' },
    { id: 'H3vGwkM2bXs', title: 'Naatu Naatu (Hindi)',         artist: 'Rahul Sipligunj & Kaala Bhairava', album: 'RRR',   duration: 195, cover: 'https://i.ytimg.com/vi/H3vGwkM2bXs/hqdefault.jpg' },
    { id: 'WuAfR4ghBj4', title: 'Jai Ho',                     artist: 'A.R. Rahman',                   album: 'Jai Ho',     duration: 282, cover: 'https://i.ytimg.com/vi/WuAfR4ghBj4/hqdefault.jpg' },
    { id: 'kia-MC_OAk8', title: 'Chaleya',                    artist: 'Arijit Singh & Shilpa Rao',     album: 'Jawan',      duration: 232, cover: 'https://i.ytimg.com/vi/kia-MC_OAk8/hqdefault.jpg' },
    { id: '_8F24TU-Dkk', title: 'Current Laga Re',            artist: 'Shreya Ghoshal & Nakash Aziz',  album: 'Tu Jhoothi Main Makkaar', duration: 195, cover: 'https://i.ytimg.com/vi/_8F24TU-Dkk/hqdefault.jpg' },
    { id: '2XEiP8bRPxM', title: 'Oo Antava',                  artist: 'Indravathi Chauhan',            album: 'Pushpa',     duration: 186, cover: 'https://i.ytimg.com/vi/2XEiP8bRPxM/hqdefault.jpg' },
    { id: 'XWlyBNAlwE4', title: 'O Maahi',                    artist: 'Arijit Singh',                  album: 'Dunki',      duration: 252, cover: 'https://i.ytimg.com/vi/XWlyBNAlwE4/hqdefault.jpg' },
    { id: 'g4_k5EDADpA', title: 'Tere Vaaste',                artist: 'Varun Jain & Sachin-Jigar',     album: 'Zara Hatke Zara Bachke', duration: 218, cover: 'https://i.ytimg.com/vi/g4_k5EDADpA/hqdefault.jpg' },
  ],

  /* ── Bhojpuri ── */
  bhojpuri: [
    { id: 'jMkuFBP5JX4', title: 'Lollypop Lagelu',            artist: 'Pawan Singh',          album: '',  duration: 225, cover: 'https://i.ytimg.com/vi/jMkuFBP5JX4/hqdefault.jpg' },
    { id: 'WqNcAA0RHZU', title: 'Tohre Karanwa',              artist: 'Khesari Lal Yadav',    album: '',  duration: 263, cover: 'https://i.ytimg.com/vi/WqNcAA0RHZU/hqdefault.jpg' },
    { id: 'n9rMoU_7lw4', title: 'Patna Se Chaleli',           artist: 'Pawan Singh',          album: '',  duration: 241, cover: 'https://i.ytimg.com/vi/n9rMoU_7lw4/hqdefault.jpg' },
    { id: 'CJiTQnjOhFc', title: 'Doodh Mangele Murga',        artist: 'Khesari Lal Yadav',    album: '',  duration: 247, cover: 'https://i.ytimg.com/vi/CJiTQnjOhFc/hqdefault.jpg' },
    { id: 'FHmhTVmqVeo', title: 'Teri Aakhya Ka Yo Kajal',    artist: 'Raju Punjabi',         album: '',  duration: 207, cover: 'https://i.ytimg.com/vi/FHmhTVmqVeo/hqdefault.jpg' },
    { id: 'sXR28hVMSZg', title: 'Samar Singh Hit Song',       artist: 'Samar Singh',          album: '',  duration: 285, cover: 'https://i.ytimg.com/vi/sXR28hVMSZg/hqdefault.jpg' },
    { id: 'gkAH6bmxiEM', title: 'Pawan Singh Bhojpuri Hits',  artist: 'Pawan Singh',          album: '',  duration: 320, cover: 'https://i.ytimg.com/vi/gkAH6bmxiEM/hqdefault.jpg' },
    { id: '5Eo3t0A9XqQ', title: 'Naihar Se Aailu',            artist: 'Dinesh Lal Yadav',     album: '',  duration: 257, cover: 'https://i.ytimg.com/vi/5Eo3t0A9XqQ/hqdefault.jpg' },
    { id: 'H98uPnEiPGw', title: 'Khesari Lal Hits',           artist: 'Khesari Lal Yadav',    album: '',  duration: 308, cover: 'https://i.ytimg.com/vi/H98uPnEiPGw/hqdefault.jpg' },
    { id: '1tU8TfDAHVE', title: 'Devra Bada Satawela',        artist: 'Pawan Singh',          album: '',  duration: 236, cover: 'https://i.ytimg.com/vi/1tU8TfDAHVE/hqdefault.jpg' },
  ],

  /* ── Marathi ── */
  marathi: [
    { id: 'q0jVIVsHBDo', title: 'Zingaat',                    artist: 'Ajay-Atul',            album: 'Sairat', duration: 256, cover: 'https://i.ytimg.com/vi/q0jVIVsHBDo/hqdefault.jpg' },
    { id: 'QRMegsPyU4s', title: 'Ek Taraa',                   artist: 'Vaishali Made',        album: 'Me Shivajiraje', duration: 309, cover: 'https://i.ytimg.com/vi/QRMegsPyU4s/hqdefault.jpg' },
    { id: 'N4HsaXBJNcA', title: 'Kombdi Palali',              artist: 'Various Artists',      album: 'Fugay', duration: 221, cover: 'https://i.ytimg.com/vi/N4HsaXBJNcA/hqdefault.jpg' },
    { id: 'yj0YRvP_9UE', title: 'Morya Re',                   artist: 'Swapnil Bandodkar',    album: '', duration: 256, cover: 'https://i.ytimg.com/vi/yj0YRvP_9UE/hqdefault.jpg' },
    { id: 'j7grqDSv7kQ', title: 'Sundra Mi Honar',            artist: 'Shreya Ghoshal',       album: '', duration: 283, cover: 'https://i.ytimg.com/vi/j7grqDSv7kQ/hqdefault.jpg' },
    { id: 'gFAGy2kWsRI', title: 'Ye Re Ye Re Paisa',          artist: 'Various Artists',      album: '', duration: 248, cover: 'https://i.ytimg.com/vi/gFAGy2kWsRI/hqdefault.jpg' },
    { id: 'nBuTXIkajug', title: 'Apsara Aali',                artist: 'Ajay-Atul',            album: 'Natarang', duration: 238, cover: 'https://i.ytimg.com/vi/nBuTXIkajug/hqdefault.jpg' },
    { id: 'Q1z_AECMa4A', title: 'Bai Mala Khulla Hawa',       artist: 'Vaishali Samant',      album: '', duration: 262, cover: 'https://i.ytimg.com/vi/Q1z_AECMa4A/hqdefault.jpg' },
    { id: 'XTiIcPQQgqQ', title: 'Gori Tere Naina',            artist: 'Adarsh Shinde',        album: '', duration: 271, cover: 'https://i.ytimg.com/vi/XTiIcPQQgqQ/hqdefault.jpg' },
  ],
};

/* Current working track list (changes per category or search) */
let TRACKS = [];

/* ════════════════════════════════════════════
   STATE
════════════════════════════════════════════ */
const state = {
  currentIndex:  7,
  isPlaying:     false,
  isShuffle:     false,
  isMuted:       false,
  isFullscreen:  false,
  ytReady:       false,
  seekDragging:  false,
  shayariIdx:    0,
  listenerCount: 42,
  currentSec:    0,
  totalSec:      0,
  lastPollTime:  0,
  lastPollSec:   0,
  rafId:         null,
  // new
  activeCategory: '90s',
  mode:           'catalog',
};

/* ════════════════════════════════════════════
   DOM REFS
════════════════════════════════════════════ */
const DOM = {
  clock:          document.getElementById('clock'),
  listenerCount:  document.getElementById('listener-count'),
  muteBtn:        document.getElementById('mute-btn'),
  iconUnmute:     document.getElementById('icon-unmute'),
  iconMute:       document.getElementById('icon-mute'),
  fullscreenBtn:  document.getElementById('fullscreen-btn'),
  iconExpand:     document.getElementById('icon-expand'),
  iconCompress:   document.getElementById('icon-compress'),
  heroTitle:      document.getElementById('hero-title'),
  shayariText:    document.getElementById('shayari-text'),
  shayariCycle:   document.getElementById('shayari-cycle-btn'),
  playlistPanel:  document.getElementById('playlist-panel'),
  playlistList:   document.getElementById('playlist-list'),
  catTabs:        document.getElementById('cat-tabs'),
  vinylCover:     document.getElementById('vinyl-cover'),
  playerTitle:    document.getElementById('player-title'),
  playerArtist:   document.getElementById('player-artist'),
  shuffleBtn:     document.getElementById('shuffle-btn'),
  prevBtn:        document.getElementById('prev-btn'),
  playBtn:        document.getElementById('play-btn'),
  iconPlay:       document.getElementById('icon-play'),
  iconPause:      document.getElementById('icon-pause'),
  nextBtn:        document.getElementById('next-btn'),
  listBtn:        document.getElementById('list-btn'),
  seekBar:        document.getElementById('seek-bar'),
  currentTime:    document.getElementById('current-time'),
  totalTime:      document.getElementById('total-time'),
  hornBtn:        document.getElementById('horn-btn'),
};

/* ════════════════════════════════════════════
   YOUTUBE IFRAME PLAYER
════════════════════════════════════════════ */
let YTPlayer = null;

window.onYouTubeIframeAPIReady = function () {
  YTPlayer = new YT.Player('yt-player', {
    height: '1', width: '1',
    videoId: TRACKS.length ? TRACKS[state.currentIndex].id : '',
    playerVars: {
      autoplay: 0, controls: 0, disablekb: 1, fs: 0,
      iv_load_policy: 3, modestbranding: 1, playsinline: 1, rel: 0,
      origin: location.origin,
    },
    events: {
      onReady:       onPlayerReady,
      onStateChange: onPlayerStateChange,
      onError:       onPlayerError,
    },
  });
};

function onPlayerReady() {
  state.ytReady = true;
  loadTrack(state.currentIndex, false);
}

function onPlayerStateChange(e) {
  if (e.data === YT.PlayerState.PLAYING) {
    state.isPlaying = true;
    state.totalSec  = Math.round(YTPlayer.getDuration()) || state.totalSec;
    DOM.totalTime.textContent = formatTime(state.totalSec);
    setPlayUI(true);
    startRAF();
  } else if (e.data === YT.PlayerState.PAUSED) {
    state.isPlaying = false;
    setPlayUI(false);
    stopRAF();
    pollSeek();
  } else if (e.data === YT.PlayerState.ENDED) {
    nextTrack();
  }
}

function onPlayerError() {
  console.warn('YT error — skipping track');
  setTimeout(nextTrack, 800);
}

/* ════════════════════════════════════════════
   TRACK MANAGEMENT
════════════════════════════════════════════ */
function loadTrack(index, autoplay = true) {
  if (!TRACKS.length) return;
  state.currentIndex = index;
  const t = TRACKS[index];

  DOM.playerTitle.textContent  = t.title;
  DOM.playerArtist.textContent = t.artist;
  DOM.vinylCover.src           = t.cover || `https://i.ytimg.com/vi/${t.id}/hqdefault.jpg`;
  DOM.vinylCover.alt           = t.title;
  state.totalSec               = t.duration || 0;
  state.currentSec             = 0;
  DOM.totalTime.textContent    = formatTime(t.duration);
  DOM.currentTime.textContent  = '0:00';
  DOM.seekBar.value            = 0;
  updateSeekFill(0);
  highlightActiveTrack();
  cycleShayari();

  if (!state.ytReady) return;
  if (autoplay) { YTPlayer.loadVideoById(t.id); }
  else          { YTPlayer.cueVideoById(t.id); }
}

function playPause() {
  if (!state.ytReady) return;
  if (state.isPlaying) { YTPlayer.pauseVideo(); }
  else                 { YTPlayer.playVideo();  }
}

function nextTrack() {
  let idx;
  if (state.isShuffle) {
    idx = randomOther(state.currentIndex, TRACKS.length);
  } else {
    idx = (state.currentIndex + 1) % TRACKS.length;
  }
  loadTrack(idx, true);
}

function prevTrack() {
  if (state.currentSec > 3) {
    if (state.ytReady) YTPlayer.seekTo(0, true);
    state.currentSec = 0;
    DOM.currentTime.textContent = '0:00';
    DOM.seekBar.value = 0; updateSeekFill(0);
    return;
  }
  const idx = (state.currentIndex - 1 + TRACKS.length) % TRACKS.length;
  loadTrack(idx, true);
}

function randomOther(current, len) {
  if (len <= 1) return 0;
  let r;
  do { r = Math.floor(Math.random() * len); } while (r === current);
  return r;
}

/* ════════════════════════════════════════════
   SEEK / TIME
════════════════════════════════════════════ */
function pollSeek() {
  if (!state.ytReady || !YTPlayer.getCurrentTime) return;
  try {
    const t = YTPlayer.getCurrentTime();
    const d = YTPlayer.getDuration() || state.totalSec;
    state.lastPollSec  = t;
    state.lastPollTime = performance.now();
    state.currentSec   = t;
    if (d > 0) state.totalSec = d;
    DOM.totalTime.textContent = formatTime(Math.round(d));
    if (!state.seekDragging) {
      const pct = d > 0 ? (t / d) * 1000 : 0;
      DOM.seekBar.value = pct;
      updateSeekFill(pct / 10);
    }
    DOM.currentTime.textContent = formatTime(Math.round(t));
  } catch (_) {}
}

let lastRaf = 0;
function rafLoop(ts) {
  if (state.isPlaying) {
    const elapsed = (ts - state.lastPollTime) / 1000;
    const interp  = Math.min(state.lastPollSec + elapsed, state.totalSec);
    if (!state.seekDragging) {
      const pct = state.totalSec > 0 ? (interp / state.totalSec) * 1000 : 0;
      DOM.seekBar.value = pct;
      updateSeekFill(pct / 10);
    }
    DOM.currentTime.textContent = formatTime(Math.round(interp));
    if (ts - lastRaf > 500) { lastRaf = ts; pollSeek(); }
  }
  state.rafId = requestAnimationFrame(rafLoop);
}

function startRAF() { if (!state.rafId) { state.lastPollTime = performance.now(); state.rafId = requestAnimationFrame(rafLoop); } }
function stopRAF()  { if (state.rafId) { cancelAnimationFrame(state.rafId); state.rafId = null; } }

/* ════════════════════════════════════════════
   SEEK BAR
════════════════════════════════════════════ */
DOM.seekBar.addEventListener('mousedown',  () => { state.seekDragging = true; });
DOM.seekBar.addEventListener('touchstart', () => { state.seekDragging = true; }, { passive: true });
DOM.seekBar.addEventListener('input', () => {
  updateSeekFill(DOM.seekBar.value / 10);
  if (state.totalSec > 0) DOM.currentTime.textContent = formatTime(Math.round((DOM.seekBar.value / 1000) * state.totalSec));
});
DOM.seekBar.addEventListener('change', () => {
  state.seekDragging = false;
  if (state.ytReady && state.totalSec > 0) {
    const t = (DOM.seekBar.value / 1000) * state.totalSec;
    YTPlayer.seekTo(t, true);
    state.currentSec = t; state.lastPollSec = t; state.lastPollTime = performance.now();
  }
});
function updateSeekFill(pct) {
  DOM.seekBar.style.background = `linear-gradient(to right, rgba(255,255,255,0.9) ${pct}%, rgba(255,255,255,0.18) ${pct}%)`;
}

/* ════════════════════════════════════════════
   PLAY / PAUSE UI
════════════════════════════════════════════ */
function setPlayUI(playing) {
  DOM.iconPlay.classList.toggle('hidden', playing);
  DOM.iconPause.classList.toggle('hidden', !playing);
  DOM.vinylCover.classList.toggle('spinning', playing);
}

/* ════════════════════════════════════════════
   CATEGORY SWITCHING
════════════════════════════════════════════ */
function switchCategory(cat) {
  state.activeCategory = cat;
  state.mode = 'catalog';
  TRACKS = CATEGORIES[cat] || [];

  // Update active tab UI
  DOM.catTabs.querySelectorAll('.cat-tab').forEach(btn => {
    const isActive = btn.dataset.cat === cat;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-selected', isActive);
  });

  // Reset to first track of new category
  state.currentIndex = 0;
  if (TRACKS.length) {
    const t = TRACKS[0];
    DOM.playerTitle.textContent  = t.title;
    DOM.playerArtist.textContent = t.artist;
    DOM.vinylCover.src           = t.cover || `https://i.ytimg.com/vi/${t.id}/hqdefault.jpg`;
    DOM.totalTime.textContent    = formatTime(t.duration);
    DOM.seekBar.value = 0; updateSeekFill(0);
  }
  renderPlaylist();
}

/* ════════════════════════════════════════════
   PLAYLIST RENDER
════════════════════════════════════════════ */
function renderPlaylist() {
  DOM.playlistList.innerHTML = '';
  if (!TRACKS.length) return;

  TRACKS.forEach((t, i) => {
    const li = document.createElement('li');
    li.className = 'track-row' + (i === state.currentIndex ? ' active' : '');
    li.setAttribute('role', 'listitem');
    li.setAttribute('tabindex', '0');
    li.setAttribute('aria-label', `${t.title} by ${t.artist}`);
    li.innerHTML = `
      <span class="track-num">${i + 1}</span>
      <div class="track-meta">
        <div class="track-name">${escHtml(t.title)}</div>
        <div class="track-artist">${escHtml(t.artist)}</div>
      </div>
      <span class="track-dur">${formatTime(t.duration)}</span>
    `;
    li.addEventListener('click', () => loadTrack(i, true));
    li.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') li.click(); });
    DOM.playlistList.appendChild(li);
  });
}

function highlightActiveTrack() {
  if (state.mode === 'search') return;
  const rows = DOM.playlistList.querySelectorAll('.track-row');
  rows.forEach((r, i) => r.classList.toggle('active', i === state.currentIndex));
  const active = DOM.playlistList.querySelector('.active');
  if (active) active.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/* ════════════════════════════════════════════
   SHAYARI
════════════════════════════════════════════ */
function cycleShayari(dir = 1) {
  DOM.shayariText.classList.add('fade-out');
  setTimeout(() => {
    state.shayariIdx = (state.shayariIdx + dir + SHAYARI.length) % SHAYARI.length;
    DOM.shayariText.textContent = SHAYARI[state.shayariIdx];
    DOM.shayariText.classList.remove('fade-out');
  }, 400);
}

/* ════════════════════════════════════════════
   HORN SOUND — Web Audio API
════════════════════════════════════════════ */
let audioCtx = null;
let hornBuffer = null;
let hornLoaded = false;

async function loadHornAudio() {
  try {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const candidates = ['assets/horn_raw.webm', 'assets/horn.mp3'];
    for (const url of candidates) {
      try {
        const res = await fetch(url);
        if (!res.ok) continue;
        const arrayBuf = await res.arrayBuffer();
        hornBuffer = await audioCtx.decodeAudioData(arrayBuf);
        hornLoaded = true;
        console.log(`🎺 Horn loaded: ${url}`);
        break;
      } catch (e) {
        console.warn(`Horn candidate failed (${url}):`, e.message);
      }
    }
    if (!hornLoaded) throw new Error('all candidates failed');
  } catch (err) {
    console.warn('Horn audio fallback to oscillator:', err.message);
    hornLoaded = false;
  }
}

function playHorn() {
  DOM.hornBtn.classList.remove('honking');
  void DOM.hornBtn.offsetWidth;
  DOM.hornBtn.classList.add('honking');
  DOM.heroTitle.classList.remove('shaking');
  void DOM.heroTitle.offsetWidth;
  DOM.heroTitle.classList.add('shaking');

  if (state.ytReady && state.isPlaying) {
    const vol = state.isMuted ? 0 : 100;
    YTPlayer.setVolume(15);
    setTimeout(() => YTPlayer.setVolume(vol), 1400);
  }

  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === 'suspended') audioCtx.resume();

  if (hornLoaded && hornBuffer) {
    const src = audioCtx.createBufferSource();
    src.buffer = hornBuffer;
    src.connect(audioCtx.destination);
    src.start(0);
  } else {
    playHornFallback();
  }
}

function playHornFallback() {
  if (!audioCtx) return;
  const t   = audioCtx.currentTime;
  const dur = 1.1;
  [[130, 'sawtooth', 0.5], [260, 'square', 0.25], [390, 'triangle', 0.15]].forEach(([freq, type, vol]) => {
    const osc  = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t);
    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(vol, t + 0.04);
    gain.gain.setValueAtTime(vol, t + dur - 0.1);
    gain.gain.linearRampToValueAtTime(0, t + dur);
    osc.connect(gain); gain.connect(audioCtx.destination);
    osc.start(t); osc.stop(t + dur);
  });
}

/* ════════════════════════════════════════════
   CLOCK
════════════════════════════════════════════ */
function updateClock() {
  const now = new Date();
  let h   = now.getHours();
  const m = String(now.getMinutes()).padStart(2, '0');
  const ampm = h >= 12 ? 'pm' : 'am';
  h = h % 12 || 12;
  DOM.clock.textContent = `${h}:${m} ${ampm}`;
}

/* ════════════════════════════════════════════
   LISTENER SIMULATION
════════════════════════════════════════════ */
function updateListeners() {
  const delta = Math.floor(Math.random() * 7) - 3;
  state.listenerCount = Math.max(30, Math.min(100, state.listenerCount + delta));
  animateCounter(DOM.listenerCount, state.listenerCount);
  setTimeout(updateListeners, 15000 + Math.random() * 15000);
}
function animateCounter(el, target) {
  const start = parseInt(el.textContent, 10);
  const diff  = target - start;
  let f = 0;
  const step = () => { f++; el.textContent = Math.round(start + diff * (f / 30)); if (f < 30) requestAnimationFrame(step); };
  requestAnimationFrame(step);
}

/* ════════════════════════════════════════════
   MUTE / FULLSCREEN
════════════════════════════════════════════ */
function toggleMute() {
  state.isMuted = !state.isMuted;
  if (state.ytReady) { state.isMuted ? YTPlayer.mute() : (YTPlayer.unMute(), YTPlayer.setVolume(100)); }
  DOM.iconUnmute.classList.toggle('hidden', state.isMuted);
  DOM.iconMute.classList.toggle('hidden', !state.isMuted);
}
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
    DOM.iconExpand.classList.add('hidden'); DOM.iconCompress.classList.remove('hidden');
  } else {
    document.exitFullscreen().catch(() => {});
    DOM.iconExpand.classList.remove('hidden'); DOM.iconCompress.classList.add('hidden');
  }
}

/* ════════════════════════════════════════════
   PLAYLIST TOGGLE
════════════════════════════════════════════ */
function togglePlaylist(force) {
  const isHidden = DOM.playlistPanel.getAttribute('aria-hidden') === 'true';
  const show = typeof force === 'boolean' ? force : isHidden;
  DOM.playlistPanel.setAttribute('aria-hidden', show ? 'false' : 'true');
  DOM.listBtn.setAttribute('aria-expanded', show ? 'true' : 'false');
  if (show) {
    setTimeout(() => {
      const active = DOM.playlistList.querySelector('.active');
      if (active) active.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      DOM.searchInput.focus();
    }, 350);
  }
}

/* ════════════════════════════════════════════
   SHUFFLE
════════════════════════════════════════════ */
function toggleShuffle() {
  state.isShuffle = !state.isShuffle;
  DOM.shuffleBtn.classList.toggle('active', state.isShuffle);
  DOM.shuffleBtn.setAttribute('aria-pressed', state.isShuffle);
}

/* ════════════════════════════════════════════
   DUST PARTICLES
════════════════════════════════════════════ */
function spawnParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  for (let i = 0; i < 28; i++) {
    const p    = document.createElement('div');
    p.className = 'particle';
    const size   = 1 + Math.random() * 3;
    const dur    = 5 + Math.random() * 9;
    const delay  = -(Math.random() * 12);
    const driftX = (Math.random() - 0.5) * 80;
    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random()*100}vw; top:${50+Math.random()*45}vh;
      animation-duration:${dur}s; animation-delay:${delay}s;
      --dx:${driftX}px;
      background:rgba(${200+Math.round(Math.random()*55)},${80+Math.round(Math.random()*80)},${20+Math.round(Math.random()*40)},${0.4+Math.random()*0.5});
      filter:blur(${size>2.5?1:0}px);
    `;
    container.appendChild(p);
  }
}

/* ════════════════════════════════════════════
   HELPERS
════════════════════════════════════════════ */
function formatTime(sec) {
  if (!isFinite(sec) || sec < 0) return '0:00';
  return `${Math.floor(sec/60)}:${String(Math.floor(sec%60)).padStart(2,'0')}`;
}
function escHtml(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

/* ════════════════════════════════════════════
   EVENT LISTENERS
════════════════════════════════════════════ */
DOM.playBtn.addEventListener('click', playPause);
DOM.nextBtn.addEventListener('click', nextTrack);
DOM.prevBtn.addEventListener('click', prevTrack);
DOM.shuffleBtn.addEventListener('click', toggleShuffle);
DOM.listBtn.addEventListener('click', () => togglePlaylist());
DOM.muteBtn.addEventListener('click', toggleMute);
DOM.fullscreenBtn.addEventListener('click', toggleFullscreen);
DOM.hornBtn.addEventListener('click', playHorn);
DOM.shayariCycle.addEventListener('click', () => cycleShayari(1));

/* Category tabs */
DOM.catTabs.addEventListener('click', e => {
  const btn = e.target.closest('.cat-tab');
  if (btn) switchCategory(btn.dataset.cat);
});

/* Search */
// (search removed)

/* Close playlist on outside click */
document.addEventListener('click', e => {
  if (DOM.playlistPanel.getAttribute('aria-hidden') === 'false' &&
      !DOM.playlistPanel.contains(e.target) &&
      !DOM.listBtn.contains(e.target)) {
    togglePlaylist(false);
  }
});

/* Keyboard shortcuts */
document.addEventListener('keydown', e => {
  if (['INPUT','TEXTAREA'].includes(e.target.tagName)) return;
  if (e.code === 'Space' || e.code === 'KeyK')  { e.preventDefault(); playPause(); }
  if (e.code === 'ArrowRight') { e.preventDefault(); nextTrack(); }
  if (e.code === 'ArrowLeft')  { e.preventDefault(); prevTrack(); }
  if (e.code === 'KeyM') toggleMute();
  if (e.code === 'KeyH') playHorn();
  if (e.code === 'KeyF') toggleFullscreen();
  if (e.code === 'KeyL') togglePlaylist();
});

document.addEventListener('fullscreenchange', () => {
  const fs = !!document.fullscreenElement;
  DOM.iconExpand.classList.toggle('hidden', fs);
  DOM.iconCompress.classList.toggle('hidden', !fs);
});

/* ════════════════════════════════════════════
   INIT
════════════════════════════════════════════ */
(async function init() {
  // Load 90s tracks from JSON
  try {
    const res = await fetch('tracks.json');
    CATEGORIES['90s'] = await res.json();
  } catch (_) {
    console.error('Could not load tracks.json');
  }

  // Set initial category
  TRACKS = CATEGORIES['90s'];
  state.currentIndex = 7;   // Pehli Pehli Baar

  const track = TRACKS[state.currentIndex] || TRACKS[0];
  if (track) {
    DOM.playerTitle.textContent  = track.title;
    DOM.playerArtist.textContent = track.artist;
    DOM.vinylCover.src           = track.cover;
    DOM.totalTime.textContent    = formatTime(track.duration);
    state.totalSec               = track.duration;
  }

  DOM.shayariText.textContent = SHAYARI[state.shayariIdx];
  renderPlaylist();
  updateClock();
  setInterval(updateClock, 1000);
  setTimeout(updateListeners, 18000);
  loadHornAudio();
  updateSeekFill(0);
  spawnParticles();

  console.log('%c🚛 ट्रक वाला – Highway Radio Loaded', 'font-size:16px; color:#f97316; font-weight:bold;');
  console.log('%cKeyboard: Space/K=Play/Pause | ←/→=Prev/Next | M=Mute | H=Horn | F=Fullscreen | L=Playlist', 'color:#fbbf24;');
})();
