
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const navContainer = document.getElementById('navContainer');
  if(mobileBtn) {
    mobileBtn.addEventListener('click', () => {
      navContainer.classList.toggle('responsive');
    });
  }

  // Toast notification system
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
    }, 3000);
  }

  // Form submission handler (simulated)
  const form = document.getElementById('consultationForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    if (!fullName || !email || !phone) {
      showToast('⚠️ Please fill in your full name, email and phone number.', 'info');
      return;
    }
    // Simulate submission success
    showToast(`✅ Thanks ${fullName}! We’ve received your consultation request. Our team will respond within 24h.`, 'cta');
    form.reset();
  });

  // FAQ toggle function
  window.toggleFaq = function(element) {
    element.classList.toggle('active');
  };

  // CTA navigation interactions
  const startProjectNav = document.querySelector('.cta-nav');
  const navLinksAll = document.querySelectorAll('.nav-links a:not(.cta-nav)');
  if(startProjectNav) {
    startProjectNav.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('🚀 Start a project: share your challenge via form or WhatsApp — we’re ready to innovate with you.', 'cta');
    });
  }
  navLinksAll.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      showToast(`🔍 Innovation Lab — ${link.innerText} section. We look forward to hearing from you!`);
    });
  });