/* BLINK Runner: BLACKPINK Quiz Game Engine */

// ==========================================================================
// 1. QUESTION DATABASE
// ==========================================================================
// Loaded from questions.js (global QUESTION_BANK)


const LEVEL_NAMES = {
  1: "STAGE 1: ROOKIE DEBUT ERA",
  2: "STAGE 2: GLOBAL HITMAKERS",
  3: "STAGE 3: BORN PINK QUEENS"
};

const STAGE_THEME_COLORS = {
  1: { primary: "#ff1282", secondary: "rgba(255, 18, 130, 0.4)", sky: "rgba(255, 18, 130, 0.08)" },
  2: { primary: "#00bfff", secondary: "rgba(0, 191, 255, 0.4)", sky: "rgba(0, 191, 255, 0.08)" },
  3: { primary: "#ffd700", secondary: "rgba(255, 215, 0, 0.4)", sky: "rgba(255, 215, 0, 0.08)" }
};

// ==========================================================================
// 2. GAME STATE
// ==========================================================================
let state = {
  screen: "selection", // selection, topic, game, level_up, victory
  character: null,     // jisoo, jennie, rose, lisa
  topic: null,         // blackpink, flags, bts, japan, riddles
  level: 1,            // 1, 2, 3
  streak: 0,           // 0 to 10
  score: 0,            // Total game score
  nextLevelTarget: null, // target level if changing topic mid-game
  soundEnabled: true,
  
  // Quiz state
  activeQuestions: [], // Shuffled questions for current level
  questionIndex: 0,    // Index in activeQuestions
  
  // Animation / physics state
  runnerPos: 0,        // Visual position steps (0 to 10)
  bgScrollOffset: 0,
  bgSpeed: 1.5,        // Pixels per frame, increases with streak
  targetBgSpeed: 1.5,
  isStumbling: false,
  isJumping: false,
  
  // Particles
  particles: []
};

// Audio Context (created lazily on user interaction)
let audioCtx = null;

// ==========================================================================
// 3. DOM ELEMENTS
// ==========================================================================
const screens = {
  selection: document.getElementById("screen-selection"),
  topic: document.getElementById("screen-topic"),
  game: document.getElementById("screen-game"),
  levelUp: document.getElementById("overlay-level-up"),
  victory: document.getElementById("screen-victory")
};

const elements = {
  btnSound: document.getElementById("btn-sound"),
  soundIcon: document.getElementById("sound-icon"),
  btnRestart: document.getElementById("btn-restart"),
  btnNextLevel: document.getElementById("btn-next-level"),
  btnChangeTopicMid: document.getElementById("btn-change-topic-mid"),
  btnPlayAgain: document.getElementById("btn-play-again"),
  btnShareStats: document.getElementById("btn-share-stats"),
  
  runnerChar: document.getElementById("runner-character"),
  runnerImg: document.getElementById("runner-img"),
  trackFill: document.getElementById("track-fill"),
  trailCanvas: document.getElementById("trail-canvas"),
  flashEffect: document.getElementById("flash-effect"),
  
  levelNum: document.getElementById("level-num"),
  streakNum: document.getElementById("streak-num"),
  scoreNum: document.getElementById("score-num"),
  streakDots: document.getElementById("streak-dots"),
  questionText: document.getElementById("question-text"),
  optionsGrid: document.getElementById("options-grid"),
  
  clearedLevel: document.getElementById("cleared-level"),
  overlayCharImg: document.getElementById("overlay-char-img"),
  victoryCharImg: document.getElementById("victory-char-img"),
  finalScore: document.getElementById("final-score"),
  finalMember: document.getElementById("final-member"),
  
  parallaxStadium: document.querySelector(".layer-stadium"),
  parallaxCrowd: document.querySelector(".layer-crowd"),
  parallaxLights: document.querySelector(".layer-stage-lights")
};

// ==========================================================================
// 4. AUDIO SYSTEM (Web Audio API Synthesizer)
// ==========================================================================
function initAudio() {
  if (audioCtx) return;
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
}

function playSound(type) {
  if (!state.soundEnabled) return;
  initAudio();
  if (!audioCtx) return;
  
  // Resume if suspended (browser security)
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain);
  gain.connect(audioCtx.destination);

  const now = audioCtx.currentTime;

  switch (type) {
    case 'select':
      // Soft modern synth chime
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, now); // A4
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.15); // A5
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.linearRampToValueAtTime(0.001, now + 0.2);
      osc.start(now);
      osc.stop(now + 0.2);
      break;

    case 'correct':
      // Uplifting double chime
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
      osc.frequency.setValueAtTime(783.99, now + 0.16); // G5
      osc.frequency.setValueAtTime(1046.50, now + 0.24); // C6
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.linearRampToValueAtTime(0.2, now + 0.2);
      gain.gain.linearRampToValueAtTime(0.001, now + 0.35);
      osc.start(now);
      osc.stop(now + 0.36);
      break;

    case 'wrong':
      // Descending buzz
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now); // A3
      osc.frequency.linearRampToValueAtTime(110, now + 0.35); // A2
      
      // Low pass filter for retro muffling
      const filter = audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(600, now);
      
      osc.disconnect(gain);
      osc.connect(filter);
      filter.connect(gain);

      gain.gain.setValueAtTime(0.25, now);
      gain.gain.linearRampToValueAtTime(0.001, now + 0.4);
      osc.start(now);
      osc.stop(now + 0.4);
      break;

    case 'level_up':
      // Arpeggio leading to high chord
      const notes = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.50]; // C Major arpeggio
      notes.forEach((freq, idx) => {
        const noteOsc = audioCtx.createOscillator();
        const noteGain = audioCtx.createGain();
        noteOsc.connect(noteGain);
        noteGain.connect(audioCtx.destination);
        noteOsc.type = 'sine';
        noteOsc.frequency.setValueAtTime(freq, now + idx * 0.08);
        noteGain.gain.setValueAtTime(0.12, now + idx * 0.08);
        noteGain.gain.linearRampToValueAtTime(0.001, now + idx * 0.08 + 0.3);
        noteOsc.start(now + idx * 0.08);
        noteOsc.stop(now + idx * 0.08 + 0.3);
      });
      break;

    case 'victory':
      // Full synth major blast
      const rootNotes = [523.25, 659.25, 783.99, 987.77, 1046.50]; // C5, E5, G5, B5, C6
      rootNotes.forEach((freq, idx) => {
        const noteOsc = audioCtx.createOscillator();
        const noteGain = audioCtx.createGain();
        noteOsc.connect(noteGain);
        noteGain.connect(audioCtx.destination);
        noteOsc.type = 'sawtooth';
        noteOsc.frequency.setValueAtTime(freq, now);
        noteOsc.frequency.exponentialRampToValueAtTime(freq * 1.5, now + 1.2);
        noteGain.gain.setValueAtTime(0.06, now);
        noteGain.gain.linearRampToValueAtTime(0.06, now + 0.8);
        noteGain.gain.linearRampToValueAtTime(0.001, now + 1.5);
        noteOsc.start(now);
        noteOsc.stop(now + 1.5);
      });
      break;
  }
}

// Toggle Sound setting
elements.btnSound.addEventListener("click", () => {
  state.soundEnabled = !state.soundEnabled;
  playSound('select');
  if (state.soundEnabled) {
    elements.soundIcon.className = "fas fa-volume-up";
    elements.btnSound.classList.remove("muted");
  } else {
    elements.soundIcon.className = "fas fa-volume-mute";
    elements.btnSound.classList.add("muted");
  }
});

// ==========================================================================
// 5. PARTICLE ENGINE (HTML5 Canvas Particles)
// ==========================================================================
let canvasCtx = null;

function initParticles() {
  const canvas = elements.trailCanvas;
  // Override canvas layout to cover the runner track & background
  canvas.style.position = "absolute";
  canvas.style.left = "0";
  canvas.style.top = "0";
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.width = canvas.parentElement.clientWidth;
  canvas.height = canvas.parentElement.clientHeight;
  canvasCtx = canvas.getContext("2d");
  
  // Handle resize
  window.addEventListener("resize", () => {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
  });
}

function spawnParticle(x, y, type, color = "#ff1282") {
  const p = {
    x: x,
    y: y,
    type: type, // 'dust', 'spark', 'smoke'
    vx: 0,
    vy: 0,
    alpha: 1,
    size: 0,
    color: color,
    rotation: Math.random() * Math.PI * 2,
    spin: (Math.random() - 0.5) * 0.1
  };

  switch (type) {
    case 'dust':
      p.vx = -Math.random() * 3 - state.bgSpeed * 0.8;
      p.vy = (Math.random() - 0.5) * 1.5;
      p.size = Math.random() * 4 + 2;
      p.color = "#ffffff";
      break;
    case 'spark':
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 6 + 3;
      p.vx = Math.cos(angle) * speed;
      p.vy = Math.sin(angle) * speed - 1; // Slight float up
      p.size = Math.random() * 6 + 3;
      p.color = Math.random() > 0.5 ? "#ffd700" : "#ff1282";
      break;
    case 'smoke':
      p.vx = (Math.random() - 0.5) * 2;
      p.vy = -Math.random() * 2 - 1;
      p.size = Math.random() * 8 + 6;
      p.color = "rgba(231, 76, 60, 0.4)";
      break;
  }

  state.particles.push(p);
}

function updateAndDrawParticles() {
  if (!canvasCtx) return;
  const ctx = canvasCtx;
  const canvas = elements.trailCanvas;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = state.particles.length - 1; i >= 0; i--) {
    const p = state.particles[i];
    
    p.x += p.vx;
    p.y += p.vy;
    p.rotation += p.spin;

    // Decay
    if (p.type === 'dust') {
      p.alpha -= 0.04;
    } else if (p.type === 'spark') {
      p.vy += 0.15; // Gravity
      p.alpha -= 0.02;
    } else if (p.type === 'smoke') {
      p.alpha -= 0.025;
      p.size += 0.2; // Smoke expands
    }

    if (p.alpha <= 0) {
      state.particles.splice(i, 1);
      continue;
    }

    ctx.save();
    ctx.globalAlpha = p.alpha;
    ctx.fillStyle = p.color;
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rotation);

    if (p.type === 'spark') {
      // Draw a star shape
      ctx.beginPath();
      for (let j = 0; j < 5; j++) {
        ctx.lineTo(0, -p.size);
        ctx.rotate(Math.PI / 5);
        ctx.lineTo(0, -p.size / 2);
        ctx.rotate(Math.PI / 5);
      }
      ctx.closePath();
      ctx.fill();
    } else {
      // Circle for dust and smoke
      ctx.beginPath();
      ctx.arc(0, 0, p.size, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }
}

// ==========================================================================
// 6. RUNNER GRAPHICS & MOVEMENT LOOP
// ==========================================================================
function updateRunnerPosition() {
  const container = elements.runnerChar;
  const trackWidth = document.querySelector(".running-track").clientWidth;
  const charWidth = container.clientWidth;
  
  // Total running track available for the runner
  const minX = 40;
  const maxX = trackWidth - charWidth - 110; 
  
  // Calculate horizontal target position based on progress (0 to 10)
  const targetX = minX + (state.runnerPos / 10) * (maxX - minX);
  
  // Smoothly update running character left style
  container.style.left = `${targetX}px`;
  
  // Fill progress bar fill width (0 to 100%)
  elements.trackFill.style.width = `${state.runnerPos * 10}%`;

  // Update visual milestones active state
  document.querySelectorAll(".milestone").forEach(mile => {
    const step = parseInt(mile.dataset.step);
    if (step <= state.runnerPos) {
      mile.classList.add("active");
    } else {
      mile.classList.remove("active");
    }
  });
}

function handleRunnerAnimLoop() {
  if (state.screen === "game") {
    // 1. Interpolate background speed based on streak
    // Higher streak = faster running speed & faster background scrolling
    state.targetBgSpeed = 1.5 + (state.streak * 0.7);
    state.bgSpeed += (state.targetBgSpeed - state.bgSpeed) * 0.1;

    // 2. Parallax background offsets
    state.bgScrollOffset += state.bgSpeed;

    // Move layers at different speeds (parallax effect)
    if (elements.parallaxStadium) {
      elements.parallaxStadium.style.backgroundPositionX = `${-state.bgScrollOffset * 0.2}px`;
    }
    if (elements.parallaxCrowd) {
      elements.parallaxCrowd.style.backgroundPositionX = `${-state.bgScrollOffset * 0.5}px`;
    }
    if (elements.parallaxLights) {
      elements.parallaxLights.style.backgroundPositionX = `${-state.bgScrollOffset * 0.9}px`;
    }

    // 3. Footstep Particles
    // Get feet coordinates roughly
    const charRect = elements.runnerChar.getBoundingClientRect();
    const arenaRect = document.querySelector(".runner-arena").getBoundingClientRect();
    
    const footX = charRect.left - arenaRect.left + (charRect.width * 0.2);
    const footY = charRect.top - arenaRect.top + charRect.height - 12;

    if (Math.random() < (0.15 + state.streak * 0.05) && !state.isStumbling) {
      spawnParticle(footX, footY, 'dust');
    }
  }

  // Render particles
  updateAndDrawParticles();

  // Next frame
  requestAnimationFrame(handleRunnerAnimLoop);
}

// Trigger correct jumping visual sequence
function triggerJump() {
  if (state.isJumping || state.isStumbling) return;
  state.isJumping = true;
  elements.runnerChar.className = "runner-character jump-state";
  playSound('select');

  setTimeout(() => {
    elements.runnerChar.className = "runner-character run-state";
    state.isJumping = false;
  }, 400);
}

// Trigger incorrect stumble visual sequence
function triggerStumble() {
  state.isStumbling = true;
  elements.runnerChar.className = "runner-character incorrect-state";
  
  // Spawn smoke particles around character
  const charRect = elements.runnerChar.getBoundingClientRect();
  const arenaRect = document.querySelector(".runner-arena").getBoundingClientRect();
  const centerX = charRect.left - arenaRect.left + (charRect.width / 2);
  const centerY = charRect.top - arenaRect.top + (charRect.height / 2);

  for (let i = 0; i < 15; i++) {
    spawnParticle(centerX + (Math.random() - 0.5) * 30, centerY + (Math.random() - 0.5) * 30, 'smoke');
  }

  setTimeout(() => {
    elements.runnerChar.className = "runner-character run-state";
    state.isStumbling = false;
  }, 800);
}

// Spawn sparkles around character
function triggerSuccessSparkles() {
  const charRect = elements.runnerChar.getBoundingClientRect();
  const arenaRect = document.querySelector(".runner-arena").getBoundingClientRect();
  const centerX = charRect.left - arenaRect.left + (charRect.width / 2);
  const centerY = charRect.top - arenaRect.top + (charRect.height / 2);

  const themeColor = STAGE_THEME_COLORS[state.level].primary;

  for (let i = 0; i < 20; i++) {
    spawnParticle(centerX, centerY, 'spark', themeColor);
  }
}

// ==========================================================================
// 7. SCREEN NAVIGATION & UTILS
// ==========================================================================
function setScreen(screenName) {
  state.screen = screenName;
  
  // Hide all screens
  Object.keys(screens).forEach(key => {
    screens[key].classList.add("hidden");
  });

  // Show active
  if (screenName === "selection") {
    screens.selection.classList.remove("hidden");
    elements.btnRestart.classList.add("hidden");
  } else if (screenName === "topic") {
    screens.topic.classList.remove("hidden");
    elements.btnRestart.classList.add("hidden");
  } else if (screenName === "game") {
    screens.game.classList.remove("hidden");
    elements.btnRestart.classList.remove("hidden");
    // Ensure canvases are sized correctly
    initParticles();
    updateRunnerPosition();
  } else if (screenName === "victory") {
    screens.victory.classList.remove("hidden");
    elements.btnRestart.classList.add("hidden");
  }
}

// Shuffle helper
function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// ==========================================================================
// 8. GAME & QUIZ LOGIC FLOWS
// ==========================================================================

// Initialize a game level
function initLevel(levelNum) {
  state.level = levelNum;
  state.streak = 0;
  state.runnerPos = 0;
  
  if (levelNum === 1) {
    state.score = 0;
    elements.scoreNum.textContent = 0;
  }
  
  // Set stage theme color properties dynamically
  const colors = STAGE_THEME_COLORS[levelNum];
  document.documentElement.style.setProperty('--bp-pink', colors.primary);
  document.documentElement.style.setProperty('--bp-pink-glow', colors.secondary);
  
  // Load and shuffle questions for this level
  state.activeQuestions = shuffleArray(QUESTION_BANK[state.topic][levelNum]);
  state.questionIndex = 0;
  
  // Update levels panel UI
  elements.levelNum.textContent = levelNum;
  elements.streakNum.textContent = `0 / 10`;
  
  // Render streak dots tracker
  renderStreakTracker();
  
  // Render first question
  loadNextQuestion();
  
  // Update runner pos UI
  updateRunnerPosition();
}

// Generate the 10 progress dots for the streak panel
function renderStreakTracker() {
  elements.streakDots.innerHTML = "";
  for (let i = 0; i < 10; i++) {
    const dot = document.createElement("div");
    dot.className = "streak-dot";
    dot.dataset.index = i;
    dot.innerHTML = `<i class="fas fa-bolt" style="opacity: 0;"></i>`;
    elements.streakDots.appendChild(dot);
  }
}

function updateStreakDotsUI() {
  const dots = elements.streakDots.children;
  for (let i = 0; i < 10; i++) {
    const dot = dots[i];
    if (i < state.streak) {
      dot.className = state.level === 3 ? "streak-dot active active-gold" : "streak-dot active";
      dot.querySelector("i").style.opacity = "1";
    } else {
      dot.className = "streak-dot";
      dot.querySelector("i").style.opacity = "0";
    }
  }
}

// Render the active question to UI
function loadNextQuestion() {
  // If we run out of shuffled questions, reshuffle the pool and continue
  if (state.questionIndex >= state.activeQuestions.length) {
    state.activeQuestions = shuffleArray(QUESTION_BANK[state.topic][state.level]);
    state.questionIndex = 0;
  }

  const q = state.activeQuestions[state.questionIndex];
  elements.questionText.textContent = q.question;
  
  // Clear option grid
  elements.optionsGrid.innerHTML = "";
  
  // Generate option buttons
  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerHTML = `<span class="opt-indicator">${String.fromCharCode(65 + idx)}</span> <span class="opt-label">${opt}</span>`;
    btn.addEventListener("click", () => handleAnswerSelect(idx, btn));
    elements.optionsGrid.appendChild(btn);
  });
}

// Handle answer clicking
function handleAnswerSelect(selectedIdx, btnElement) {
  // Disable options during animation
  const buttons = elements.optionsGrid.querySelectorAll(".option-btn");
  buttons.forEach(btn => btn.classList.add("disabled"));

  const q = state.activeQuestions[state.questionIndex];
  const isCorrect = selectedIdx === q.correct;

  if (isCorrect) {
    // 1. Success feedback
    btnElement.classList.add("correct");
    playSound('correct');
    
    // UI Flash green
    elements.flashEffect.className = "flash-effect flash-correct";
    setTimeout(() => elements.flashEffect.className = "flash-effect", 250);

    // 2. Adjust State
    state.streak++;
    state.runnerPos++; // +1 forward on track
    state.score += (state.level * 100) + (state.streak * 20); // Scale score with level + streak
    
    elements.scoreNum.textContent = state.score;
    elements.streakNum.textContent = `${state.streak} / 10`;
    
    updateStreakDotsUI();
    triggerJump();
    triggerSuccessSparkles();
    updateRunnerPosition();

    // 3. Progress check
    setTimeout(() => {
      if (state.streak >= 10) {
        handleLevelCleared();
      } else {
        state.questionIndex++;
        loadNextQuestion();
      }
    }, 1200);

  } else {
    // 1. Failure feedback
    btnElement.classList.add("wrong");
    
    // Highlight the correct answer
    buttons.forEach((btn, idx) => {
      if (idx === q.correct) {
        btn.classList.add("correct");
      }
    });

    playSound('wrong');
    triggerStumble();

    // UI Flash red & shake quiz panel
    elements.flashEffect.className = "flash-effect flash-wrong";
    document.querySelector(".quiz-panel").classList.add("shake-anim");
    setTimeout(() => {
      elements.flashEffect.className = "flash-effect";
      document.querySelector(".quiz-panel").classList.remove("shake-anim");
    }, 500);

    // 2. Adjust State: reset streak, move back 3 steps
    state.streak = 0;
    state.runnerPos = Math.max(0, state.runnerPos - 3); // Back 3 steps
    
    elements.streakNum.textContent = `0 / 10`;
    updateStreakDotsUI();
    updateRunnerPosition();

    // 3. Load next question
    setTimeout(() => {
      state.questionIndex++;
      loadNextQuestion();
    }, 1500);
  }
}

// Stage completed
function handleLevelCleared() {
  playSound('level_up');
  
  // Run off screen animation
  const runner = elements.runnerChar;
  runner.style.transition = "left 1.2s ease-in";
  runner.style.left = "110%";

  setTimeout(() => {
    // Reset runner style transition for next levels
    runner.style.transition = "left 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)";
    
    if (state.level < 3) {
      // Go to level up screen
      state.screen = "level_up";
      elements.clearedLevel.textContent = state.level;
      
      // Update image in overlay showcase
      elements.overlayCharImg.src = `assets/${state.character}.png`;
      screens.levelUp.classList.remove("hidden");
      
      // Trigger virtual confetti on overlay canvas
      initConfetti();
    } else {
      // Beat the final stage! Show Victory Screen
      triggerGameVictory();
    }
  }, 1200);
}

// Final Game Win Screen
function triggerGameVictory() {
  state.screen = "victory";
  playSound('victory');
  
  elements.finalScore.textContent = state.score;
  elements.finalMember.textContent = state.character.toUpperCase();
  elements.victoryCharImg.src = `assets/${state.character}.png`;
  
  setScreen("victory");
}

// Next level button
elements.btnNextLevel.addEventListener("click", () => {
  playSound('select');
  screens.levelUp.classList.add("hidden");
  stopConfetti();
  setScreen("game");
  initLevel(state.level + 1);
});

// Change topic mid-game button
elements.btnChangeTopicMid.addEventListener("click", () => {
  playSound('select');
  screens.levelUp.classList.add("hidden");
  stopConfetti();
  state.nextLevelTarget = state.level + 1;
  setScreen("topic");
});

// Restart controls
function handleRestartGame() {
  playSound('select');
  stopConfetti();
  screens.levelUp.classList.add("hidden");
  setScreen("selection");
}

elements.btnRestart.addEventListener("click", handleRestartGame);
elements.btnPlayAgain.addEventListener("click", handleRestartGame);

elements.btnShareStats.addEventListener("click", () => {
  playSound('select');
  const character = state.character.toUpperCase();
  const topicCard = document.querySelector(`.topic-card[data-topic="${state.topic}"]`);
  const topicTitle = topicCard ? topicCard.querySelector('.topic-title').textContent : state.topic.toUpperCase();
  const shareText = `🏆 I just became the Ultimate BLINK Champion in BLINK Runner! 💖 I played as ${character} on the '${topicTitle}' and scored ${state.score} points! Can you beat my streak? 🏃‍♀️✨`;
  const shareUrl = window.location.origin + window.location.pathname;

  if (navigator.share) {
    navigator.share({
      title: 'BLINK Runner Champion!',
      text: shareText,
      url: shareUrl
    }).catch(err => console.log('Error sharing:', err));
  } else {
    // Fallback: copy to clipboard
    navigator.clipboard.writeText(shareText + " " + shareUrl).then(() => {
      const originalHtml = elements.btnShareStats.innerHTML;
      elements.btnShareStats.innerHTML = `<i class="fas fa-check"></i> COPIED TO CLIPBOARD!`;
      elements.btnShareStats.classList.add("copied");
      setTimeout(() => {
        elements.btnShareStats.innerHTML = originalHtml;
        elements.btnShareStats.classList.remove("copied");
      }, 2000);
    }).catch(err => {
      console.log('Error copying to clipboard:', err);
    });
  }
});

// Character selection cards
document.querySelectorAll(".char-card").forEach(card => {
  card.addEventListener("click", () => {
    const characterName = card.dataset.char;
    state.character = characterName;
    
    playSound('select');
    
    // Set runner image src
    elements.runnerImg.src = `assets/${characterName}.png`;
    elements.overlayCharImg.src = `assets/${characterName}.png`;
    elements.victoryCharImg.src = `assets/${characterName}.png`;
    
    // Go to Topic Selection Screen
    setScreen("topic");
  });
});

// Topic selection cards
document.querySelectorAll(".topic-card").forEach(card => {
  card.addEventListener("click", () => {
    const topicName = card.dataset.topic;
    state.topic = topicName;
    
    playSound('select');
    
    // Start game on Level 1, or the next level target if mid-game transition is active
    setScreen("game");
    const targetLvl = state.nextLevelTarget || 1;
    state.nextLevelTarget = null; // Reset
    initLevel(targetLvl);
  });
});

// ==========================================================================
// 9. CONFETTI OVERLAY ENGINE (Level up celebration)
// ==========================================================================
let confettiInterval = null;
let confettiCanvas = null;
let confettiCtx = null;
let confettiParticles = [];

function initConfetti() {
  confettiCanvas = document.getElementById("confetti-canvas");
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
  confettiCtx = confettiCanvas.getContext("2d");
  
  confettiParticles = [];
  
  // Fill initial particles
  for (let i = 0; i < 80; i++) {
    confettiParticles.push(createConfettiParticle());
  }

  if (confettiInterval) clearInterval(confettiInterval);
  confettiInterval = setInterval(updateAndDrawConfetti, 1000 / 60);
}

function createConfettiParticle() {
  return {
    x: Math.random() * confettiCanvas.width,
    y: Math.random() * -100 - 20,
    size: Math.random() * 8 + 4,
    color: `hsl(${Math.random() * 360}, 80%, 60%)`,
    vx: (Math.random() - 0.5) * 3,
    vy: Math.random() * 4 + 2,
    rotation: Math.random() * 360,
    rotationSpeed: (Math.random() - 0.5) * 10
  };
}

function updateAndDrawConfetti() {
  if (!confettiCtx) return;
  const ctx = confettiCtx;
  const canvas = confettiCanvas;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  confettiParticles.forEach((p, idx) => {
    p.x += p.vx;
    p.y += p.vy;
    p.rotation += p.rotationSpeed;

    // Wind wave
    p.vx += Math.sin(p.y / 30) * 0.05;

    // Draw
    ctx.save();
    ctx.fillStyle = p.color;
    ctx.translate(p.x, p.y);
    ctx.rotate((p.rotation * Math.PI) / 180);
    ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
    ctx.restore();

    // Recycle if out of bounds
    if (p.y > canvas.height) {
      confettiParticles[idx] = createConfettiParticle();
    }
  });
}

function stopConfetti() {
  if (confettiInterval) {
    clearInterval(confettiInterval);
    confettiInterval = null;
  }
  if (confettiCanvas) {
    const ctx = confettiCanvas.getContext("2d");
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  }
}

// Start visual runner backgrounds animation loop immediately
requestAnimationFrame(handleRunnerAnimLoop);
