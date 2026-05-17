
const mobileBtn = document.getElementById('mobileMenuBtn');
  const navContainer = document.getElementById('navContainer');
  if(mobileBtn) {
    mobileBtn.addEventListener('click', () => {
      navContainer.classList.toggle('responsive');
    });
  }

  // Toast notifications (professional and subtle)
  function showNotify(message, type = "info") {
    const toast = document.createElement('div');
    toast.innerHTML = `<i class="fas fa-bezier-curve" style="margin-right: 12px;"></i> ${message}`;
    toast.style.position = 'fixed';
    toast.style.bottom = '28px';
    toast.style.right = '28px';
    toast.style.backgroundColor = '#14141F';
    toast.style.backdropFilter = 'blur(20px)';
    toast.style.color = '#F0F3FF';
    toast.style.borderLeft = `4px solid ${type === 'cta' ? '#00F0FF' : '#A855F7'}`;
    toast.style.padding = '14px 26px';
    toast.style.borderRadius = '48px';
    toast.style.fontWeight = '500';
    toast.style.zIndex = '1000';
    toast.style.boxShadow = '0 8px 24px rgba(0,0,0,0.5)';
    toast.style.fontFamily = "'Inter', sans-serif";
    toast.style.fontSize = '0.9rem';
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }

  const consultBtn = document.getElementById('bookConsultBtn');
  const getStartedBtn = document.getElementById('getStartedBtn');
  const startProjectNav = document.querySelector('.cta-nav');
  const navLinksAll = document.querySelectorAll('.nav-links a:not(.cta-nav)');

  if(consultBtn) {
    consultBtn.addEventListener('click', () => {
      showNotify('📅 Consultation request sent! Our strategy team will contact you within 24h to begin the Discovery phase.', 'cta');
    });
  }
  if(getStartedBtn) {
    getStartedBtn.addEventListener('click', () => {
      showNotify('⚡ Ready to start? Let\'s apply our 5-step process to transform your business. Expect a follow-up shortly.', 'cta');
    });
  }
  if(startProjectNav) {
    startProjectNav.addEventListener('click', (e) => {
      e.preventDefault();
      showNotify('✨ Start a project: We’ll walk you through our proven workflow — from analysis to innovation roadmap.', 'cta');
    });
  }
  navLinksAll.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      showNotify(`🔹 Innovation Lab — ${link.innerText} section. Our structured process ensures clarity and results.`);
    });
  });