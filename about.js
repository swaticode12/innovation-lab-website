
 const mobileBtn = document.getElementById('mobileMenuBtn');
  const navContainer = document.getElementById('navContainer');
  if(mobileBtn) {
    mobileBtn.addEventListener('click', () => {
      navContainer.classList.toggle('responsive');
    });
  }

  // Professional toast notifications
  function showToast(message, type = "info") {
    const toast = document.createElement('div');
    toast.innerHTML = `<i class="fas fa-comment-dots" style="margin-right:12px;"></i> ${message}`;
    toast.style.position = 'fixed';
    toast.style.bottom = '28px';
    toast.style.right = '28px';
    toast.style.backgroundColor = '#14141FCC';
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
  const contactBtn = document.getElementById('contactBtn');
  const startProjectLink = document.querySelector('.cta-nav');
  const navLinks = document.querySelectorAll('.nav-links a:not(.cta-nav)');

  if(consultBtn) {
    consultBtn.addEventListener('click', () => {
      showToast('📋 Consultation request sent! Our strategy team will reply within 24h. Let’s innovate together.', 'cta');
    });
  }
  if(contactBtn) {
    contactBtn.addEventListener('click', () => {
      showToast('📧 Reach us: hello@innovationlab.co.sz | WhatsApp +268 7610 9876 — we’re here to help.', 'info');
    });
  }
  if(startProjectLink) {
    startProjectLink.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('✨ Start a strategic project: Let’s identify digital solutions tailored to your business goals.', 'cta');
    });
  }
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      showToast(`🔍 Innovation Lab — ${link.innerText} section. We’re driven by impact and innovation.`);
    });
  });