/**
 * ==========================================================================
 * MAIN.JS - JavaScript Vanilla Puro
 * Interatividade essencial e acessível para o portfólio
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNavigation();
  initContactFormFeedback();
  setCurrentYear();
});

/**
 * Controle de abertura e fechamento do menu de navegação mobile
 */
function initMobileNavigation() {
  const toggleBtn = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!toggleBtn || !navMenu) return;

  function toggleMenu() {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', String(!isExpanded));
    toggleBtn.classList.toggle('is-active');
    navMenu.classList.toggle('is-active');
  }

  function closeMenu() {
    toggleBtn.setAttribute('aria-expanded', 'false');
    toggleBtn.classList.remove('is-active');
    navMenu.classList.remove('is-active');
  }

  // Clique no botão de hambúrguer
  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Fechar menu ao clicar em qualquer link de navegação
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Fechar menu com a tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('is-active')) {
      closeMenu();
      toggleBtn.focus();
    }
  });

  // Fechar menu ao clicar fora dele
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('is-active') && !navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
      closeMenu();
    }
  });
}

/**
 * Prevenção do envio real do formulário (apenas demonstração visual)
 */
function initContactFormFeedback() {
  const contactForm = document.querySelector('.contact-form');

  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! (Modo demonstração da estrutura)');
    contactForm.reset();
  });
}

/**
 * Atualiza o ano no copyright dinamicamente
 */
function setCurrentYear() {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}
