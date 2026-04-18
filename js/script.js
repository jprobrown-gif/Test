/* Modern Gentleman Playbook — JavaScript */

(function () {
  'use strict';

  /* ── Nav scroll effect ── */
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Mobile nav toggle (landing page) ── */
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks  = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  /* ── Pillar cards clickable ── */
  document.querySelectorAll('.pillar-card[data-chapter]').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', e => {
      if (!e.target.closest('a')) {
        const ch = card.dataset.chapter;
        window.location.href = `playbook.html#chapter-${ch}`;
      }
    });
  });

  /* ── Reader page logic ── */
  const sidebar       = document.getElementById('sidebar');
  const sidebarToggle = document.getElementById('sidebarToggle');
  const sidebarClose  = document.getElementById('sidebarClose');

  if (sidebar) {
    /* Open / close sidebar */
    const openSidebar  = () => sidebar.classList.add('open');
    const closeSidebar = () => sidebar.classList.remove('open');

    sidebarToggle && sidebarToggle.addEventListener('click', openSidebar);
    sidebarClose  && sidebarClose.addEventListener('click', closeSidebar);

    /* Close on outside click */
    document.addEventListener('click', e => {
      if (sidebar.classList.contains('open') &&
          !sidebar.contains(e.target) &&
          e.target !== sidebarToggle) {
        closeSidebar();
      }
    });

    /* Sidebar links → close + update active */
    document.querySelectorAll('.sidebar-link').forEach(link => {
      link.addEventListener('click', () => {
        closeSidebar();
        setActiveLink(link.dataset.chapter);
      });
    });

    /* Scroll progress bar at top */
    const scrollProgress = document.getElementById('scrollProgress');
    if (scrollProgress) {
      window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const total    = document.body.scrollHeight - window.innerHeight;
        scrollProgress.style.width = total > 0 ? (scrolled / total * 100) + '%' : '0%';
      }, { passive: true });
    }

    /* Chapter detection via IntersectionObserver */
    const chapterTitles = {
      1: 'Mindset &amp; Identity',
      2: 'Style &amp; Appearance',
      3: 'Health &amp; Fitness',
      4: 'Career &amp; Finances',
      5: 'Social Mastery',
      6: 'Etiquette &amp; Manners',
      7: 'Personal Development',
    };

    const progressBar  = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    const readerTitle  = document.getElementById('readerChapterTitle');
    const chapters     = document.querySelectorAll('.chapter');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const num = parseInt(id.replace('chapter-', ''), 10);
          if (!isNaN(num)) {
            setActiveLink(num);
            if (readerTitle)  readerTitle.innerHTML = chapterTitles[num] || '';
            if (progressBar)  progressBar.style.width = (num / 7 * 100) + '%';
            if (progressText) progressText.textContent = `Chapter ${num} of 7`;
          }
        }
      });
    }, { threshold: 0.25 });

    chapters.forEach(ch => observer.observe(ch));

    /* Handle hash on load */
    const hash = window.location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        setTimeout(() => target.scrollIntoView({ behavior: 'smooth' }), 100);
        const num = parseInt(hash.replace('#chapter-', ''), 10);
        if (!isNaN(num)) setActiveLink(num);
      }
    }
  }

  function setActiveLink(num) {
    document.querySelectorAll('.sidebar-link').forEach(l => {
      l.classList.toggle('active', parseInt(l.dataset.chapter, 10) === parseInt(num, 10));
    });
  }

  /* ── Smooth scroll for in-page chapter links ── */
  document.querySelectorAll('a[href^="#chapter-"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 70;
        const top    = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ── Fade-in on scroll for landing page sections ── */
  if (!document.body.classList.contains('reader-page')) {
    const fadeEls = document.querySelectorAll('.pillar-card, .chapter-item, .about-grid > *');
    if ('IntersectionObserver' in window) {
      const fadeObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      fadeEls.forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(16px)';
        el.style.transition = `opacity 0.5s ease ${i * 0.05}s, transform 0.5s ease ${i * 0.05}s`;
        fadeObserver.observe(el);
      });
    }
    document.addEventListener('scroll', () => {
      document.querySelectorAll('.visible').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      });
    }, { passive: true });

    /* Trigger visible for already-in-view elements */
    setTimeout(() => {
      fadeEls.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add('visible');
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }
      });
    }, 100);
  }

})();
