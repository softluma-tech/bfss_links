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
});

