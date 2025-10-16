import { homeTemplate } from './pages/home.js';
import { projetosTemplate } from './pages/projetos.js';
import { cadastroTemplate } from './pages/cadastro.js';
import { headerComponent } from './components/header.js';
import { footerComponent } from './components/footer.js';
import { validateForm } from './validation.js';

const app = document.getElementById('app');

const header = document.createElement('div');
header.innerHTML = headerComponent();
document.body.insertBefore(header, app); // adiciona o header no início da página


const footer = document.createElement('div');
footer.innerHTML = footerComponent();
document.body.appendChild(footer); // adiciona o footer no final da página

const routes = {
  '#home': { template: homeTemplate, title: 'ONG Esperança Viva', description: '' },
  '#projetos': { template: projetosTemplate, title: 'Projetos - ONG Esperança Viva', description: 'Conheça nossos projetos e inscreva-se para fazer parte das ações da ONG Esperança Viva.' },
  '#cadastro': { template: cadastroTemplate, title: 'Cadastro - ONG Esperança Viva', description: 'Junte-se a nós e faça parte das ações que transformam vidas.' }
};

function navigate() {
  const hash = window.location.hash || '#home';
  const route = routes[hash];
  if (route) {
    header.innerHTML = headerComponent(route.title, route.description);
    app.innerHTML = route.template();
    document.title = route.title; // atualiza título da aba
  } else {
    app.innerHTML = `<h2>Página não encontrada</h2>`;
  }
  setNavHeaderListeners();
  setFormValidator();
}

function setNavHeaderListeners () {
  // Pequeno script para abrir/fechar menu mobile e gerenciar aria attributes
  const hambBtn = document.getElementById('hambBtn');
  const mobileNav = document.getElementById('mobileNav');
  const mobileClose = document.getElementById('mobileClose');
  hambBtn.addEventListener('click', ()=>{
    const expanded = hambBtn.getAttribute('aria-expanded') === 'true';
    hambBtn.setAttribute('aria-expanded', String(!expanded));
    mobileNav.style.display = 'block';
    mobileNav.setAttribute('aria-hidden','false');
  });
  mobileClose.addEventListener('click', ()=>{
    mobileNav.style.display = 'none';
    mobileNav.setAttribute('aria-hidden','true');
    hambBtn.setAttribute('aria-expanded','false');
  });
}

function setFormValidator () {
  const form = document.getElementById('cadastroForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (validateForm(e.target)) {
        alert('Cadastro enviado com sucesso!');
        e.target.reset();
      }
    });
  }
}

window.addEventListener('hashchange', navigate);
window.addEventListener('load', navigate);