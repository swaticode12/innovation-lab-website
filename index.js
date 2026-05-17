
const mobileBtn = document.getElementById('mobileMenuBtn');
  const navContainer = document.getElementById('navContainer');
  if(mobileBtn) {
    mobileBtn.addEventListener('click', () => {
      navContainer.classList.toggle('responsive');
    });
  }

  // toast notifications (professional)
  function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.innerHTML = `<i class="fas fa-lightbulb" style="margin-right:10px;"></i> ${message}`;
    toast.style.position = 'fixed';
    toast.style.bottom = '24px';
    toast.style.right = '24px';
    toast.style.backgroundColor = '#1E1E2E';
    toast.style.backdropFilter = 'blur(12px)';
    toast.style.color = '#F0F0FF';
    toast.style.borderLeft = `4px solid ${type === 'cta' ? '#00F0FF' : '#A855F7'}`;
    toast.style.padding = '14px 24px';
    toast.style.borderRadius = '40px';
    toast.style.fontWeight = '500';
    toast.style.zIndex = '1000';
    toast.style.boxShadow = '0 8px 20px rgba(0,0,0,0.5)';
    toast.style.fontFamily = "'Inter', sans-serif";
    toast.style.fontSize = '0.9rem';
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 400);
    }, 2800);
  }

  const ctaBtn = document.getElementById('joinLabBtn');
  const explore = document.getElementById('exploreLink');
  const startProject = document.querySelector('.cta-nav');

  if(ctaBtn) {
    ctaBtn.addEventListener('click', () => {
      showToast('✨ Welcome! Our team will reach out to discuss your idea — Let’s innovate together.', 'cta');
    });
  }
  if(explore) {
    explore.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('📱 Explore case studies: SME digital platforms & student-led apps delivering impact.');
    });
  }
  if(startProject) {
    startProject.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('🚀 Start a Project — One of our experts will contact you within 24h. Let’s turn your vision into reality.');
    });
  }
  const allNav = document.querySelectorAll('.nav-links a:not(.cta-nav)');
  allNav.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      showToast(`🔹 Innovation Lab — ${link.innerText} section. Reach out to learn more.`);
    });
  });