/**
 * AQVA TERRA (aqvaterra.org) · Client Interaction Script
 * Minimal vanilla JS with zero external dependencies.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Copyright Year
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Sticky Header Scrolled State
  const header = document.querySelector('.site-header');
  const handleScroll = () => {
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 3. One-Click Email Copy Functionality with Visual Tooltip
  const copyBtn = document.getElementById('copyEmailBtn');
  const copyTooltip = document.getElementById('copyTooltip');
  const copyBtnText = document.getElementById('copyBtnText');
  const emailToCopy = 'contact@aqvaterra.org';
  let tooltipTimeout = null;

  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      let copySuccess = false;

      // Modern Clipboard API with fallback
      if (navigator.clipboard && window.isSecureContext) {
        try {
          await navigator.clipboard.writeText(emailToCopy);
          copySuccess = true;
        } catch (err) {
          copySuccess = fallbackCopyText(emailToCopy);
        }
      } else {
        copySuccess = fallbackCopyText(emailToCopy);
      }

      if (copySuccess) {
        showCopyTooltip('Email copied to clipboard');
        if (copyBtnText) copyBtnText.textContent = 'Copied!';
        setTimeout(() => {
          if (copyBtnText) copyBtnText.textContent = 'Copy Email';
        }, 2500);
      }
    });
  }

  function fallbackCopyText(text) {
    try {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      return successful;
    } catch (err) {
      console.warn('Fallback copy failed:', err);
      return false;
    }
  }

  function showCopyTooltip(message) {
    if (!copyTooltip) return;
    copyTooltip.textContent = message;
    copyTooltip.classList.add('show');
    if (tooltipTimeout) clearTimeout(tooltipTimeout);
    tooltipTimeout = setTimeout(() => {
      copyTooltip.classList.remove('show');
    }, 2500);
  }

  // 4. Video Autoplay & Reduced Motion Fallback Handling
  const heroVideo = document.querySelector('.hero-video');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (heroVideo) {
    if (prefersReducedMotion.matches) {
      heroVideo.pause();
    } else {
      // Ensure smooth autoplay without blocking
      const playPromise = heroVideo.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // If browser policy blocks autoplay, the poster image remains visible
          console.info('Video autoplay restricted; displaying high-contrast poster fallback.');
        });
      }
    }

    // Listen for changes in motion preference
    prefersReducedMotion.addEventListener('change', (e) => {
      if (e.matches) {
        heroVideo.pause();
      } else {
        heroVideo.play().catch(() => {});
      }
    });
  }

  // 5. Smooth Scroll Offset Correction for Fixed Header
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: prefersReducedMotion.matches ? 'auto' : 'smooth'
        });
      }
    });
  });
});
