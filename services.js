  const mobileBtn = document.getElementById('mobileMenuBtn');
  const navContainer = document.getElementById('navContainer');
  if(mobileBtn) {
    mobileBtn.addEventListener('click', () => {
      navContainer.classList.toggle('responsive');
    });
  }

  // Toast notification system (professional non-intrusive)
  function showNotification(message, type = "info") {
    const toast = document.createElement('div');
    toast.innerHTML = `<i class="fas fa-bullhorn" style="margin-right:12px;"></i> ${message}`;
    toast.style.position = 'fixed';
    toast.style.bottom = '28px';
    toast.style.right = '28px';
    toast.style.backgroundColor = '#14141F';
    toast.style.backdropFilter = 'blur(16px)';
    toast.style.color = '#F0F3FF';
    toast.style.borderLeft = `4px solid ${type === 'cta' ? '#00F0FF' : '#A855F7'}`;
    toast.style.padding = '14px 24px';
    toast.style.borderRadius = '48px';
    toast.style.fontWeight = '500';
    toast.style.zIndex = '1000';
    toast.style.boxShadow = '0 10px 24px rgba(0,0,0,0.6)';
    toast.style.fontFamily = "'Inter', sans-serif";
    toast.style.fontSize = '0.9rem';
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 500);
    }, 2800);
  }

  const consultBtn = document.getElementById('bookConsultBtn');
  const contactUs = document.getElementById('contactBtn');
  const startProjectNav = document.querySelector('.cta-nav');
  const navLinks = document.querySelectorAll('.nav-links a');

  if(consultBtn) {
    consultBtn.addEventListener('click', () => {
      showNotification('📅 Booking: Let’s schedule a strategic consultation. A team member will reach out within 24 hours.', 'cta');
    });
  }
  if(contactUs) {
    contactUs.addEventListener('click', () => {
      showNotification('📞 Contact our innovation advisors: hello@innovationlab.co.sz | We’ll respond promptly.', 'info');
    });
  }
  if(startProjectNav) {
    startProjectNav.addEventListener('click', (e) => {
      e.preventDefault();
      showNotification('🚀 Start a Project: Let’s identify and design your digital solution — strategy first.', 'cta');
    });
  }
  navLinks.forEach(link => {
    if(link.classList && !link.classList.contains('cta-nav')) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        showNotification(`🔹 Innovation Lab — ${link.innerText} section. Let’s explore strategic opportunities.`);
      });
    }
  });