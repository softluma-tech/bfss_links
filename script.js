/* ==========================================================================
   BFSS TRADING COMMUNITY - INTERACTIVE BEHAVIOR & GLASS EFFECTS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.glass-link-card');

  /* -------------------------------------------------------------------------
     1. APPLE LIQUID GLASS SPECULAR GLARE TRACKING
     Updates CSS variables --mouse-x and --mouse-y based on pointer relative position
     ------------------------------------------------------------------------- */
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  /* -------------------------------------------------------------------------
     2. STAGGERED ENTRANCE ANIMATIONS
     ------------------------------------------------------------------------- */
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.08}s, transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 0.08}s`;
    
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 100);
  });

  /* -------------------------------------------------------------------------
     3. LIVE INCREMENTING TRADER COUNTER ANIMATION
     ------------------------------------------------------------------------- */
  const traderCountEl = document.getElementById('traderCount');
  if (traderCountEl) {
    let currentCount = 14850;
    const targetCount = 15482;
    const duration = 1400; // ms
    const startTime = performance.now();

    function updateCount(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic progress
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const val = Math.floor(currentCount + (targetCount - currentCount) * easeProgress);
      traderCountEl.textContent = val.toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        currentCount = targetCount;
        startLiveFluctuation();
      }
    }

    requestAnimationFrame(updateCount);

    function startLiveFluctuation() {
      setInterval(() => {
        // Randomly increment by +1 to +3 traders coming online every 2 seconds
        const increment = Math.floor(Math.random() * 3) + 1;
        currentCount += increment;
        traderCountEl.textContent = currentCount.toLocaleString();

        traderCountEl.classList.add('count-up-flash');
        setTimeout(() => {
          traderCountEl.classList.remove('count-up-flash');
        }, 500);
      }, 2000); // Live increment every 2 seconds
    }
  }
});

