export function homeTemplate() {
  return `
    <section class="hero">
      <div class="grid">
        <div class="col-8 col-mobile-stack">
          <h2 style="font-size:var(--type-2xl);margin-top:var(--space-2)">Junte-se a nós — faça a diferença</h2>
          <p class="lead">Apoiamos comunidades através de projetos educativos, apoio emergencial e programas de geração de renda.</p>
          <p><a href="cadastro.html" class="btn btn-primary">Quero ser voluntário</a></p>
        </div>
        <div class="col-4 col-mobile-stack">
          <div class="card shadow-sm">
            <picture>
              <source srcset="assets/imgs/ong-2.jpg" media="(min-width:800px)">
              <source srcset="assets/imgs/ong-2-small.jpg" media="(min-width:400px)">
              <img src="assets/imgs/ong-2.jpg" alt="Ação social em escola" loading="lazy">
            </picture>
            <div class="card-body">
              <h3 class="card-title">Próximo Evento</h3>
              <div class="card-meta">Mutirão de distribuição - 05 de Novembro</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h3>Contato</h3>
      <p><strong>E-mail:</strong> contato@esperancaviva.org.br<br>
      <strong>Telefone:</strong> (11) 98765-4321</p>
    </section>

    <section style="margin-top:var(--space-4)">
      <h3>Projetos em destaque</h3>
      <div class="grid-cards">
        <article class="card">
          <picture>
            <source srcset="assets/imgs/ong-2.jpg" media="(min-width:800px)">
            <source srcset="assets/imgs/ong-2-small.jpg" media="(min-width:400px)">
            <img src="assets/imgs/ong-2.jpg" alt="Ação social em escola" loading="lazy">
          </picture>
          <div class="card-body">
            <h4 class="card-title">Educação para Todos</h4>
            <p class="card-meta">Aulas de reforço e materiais didáticos para crianças.</p>
          </div>
        </article>

        <article class="card">
          <picture>
            <source srcset="assets/imgs/ong-2.jpg" media="(min-width:800px)">
            <source srcset="assets/imgs/ong-2-small.jpg" media="(min-width:400px)">
            <img src="assets/imgs/ong-2.jpg" alt="Ação social em escola" loading="lazy">
          </picture>
          <div class="card-body">
            <h4 class="card-title">Recicla Comunidade</h4>
            <p class="card-meta">Geração de renda com coleta seletiva.</p>
          </div>
        </article>

        <article class="card">
          <picture>
            <source srcset="assets/imgs/ong-2.jpg" media="(min-width:800px)">
            <source srcset="assets/imgs/ong-2-small.jpg" media="(min-width:400px)">
            <img src="assets/imgs/ong-2.jpg" alt="Ação social em escola" loading="lazy">
          </picture>
          <div class="card-body">
            <h4 class="card-title">Saúde em Ação</h4>
            <p class="card-meta">Campanhas preventivas e orientação gratuita.</p>
          </div>
        </article>
      </div>
    </section>
  `;
}