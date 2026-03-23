import './styles.css'

const checkoutUrl = 'https://chk.eduzz.com/VWGZKG4P07'
const whatsappUrl =
  'https://wa.me/5562994130237?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20o%20M%C3%A9todo%20MPC.'

const pillars = [
  {
    title: 'Renovação',
    text: 'Reprogramação da mente com princípios bíblicos aplicados.'
  },
  {
    title: 'Prática',
    text: 'Exercícios diários e estratégicos para mudança real.'
  },
  {
    title: 'Constância',
    text: 'Sistema de acompanhamento para manter disciplina e evolução.'
  }
]

const bonuses = [
  'Guia prático de disciplina diária',
  'Plano de 30 dias de ativação mental',
  'Checklist de constância',
  'Aula extra sobre mentalidade de abundância bíblica'
]

const audience = [
  'Para quem se sente travado.',
  'Para quem começa e não termina.',
  'Para quem deseja crescer espiritualmente e financeiramente.',
  'Para quem quer sair da escassez mental.'
]

const painPoints = [
  'Você tenta mudar.',
  'Tenta ser mais disciplinado.',
  'Tenta crescer espiritualmente.',
  'Tenta prosperar.'
]

document.querySelector('#app').innerHTML = `
  <div class="page-shell">
    <header class="topbar">
      <a class="brand" href="#inicio">
        <span class="brand-mark">MPC</span>
        <span class="brand-copy">
          <strong>Método MPC</strong>
          <small>Iraide Sousa</small>
        </span>
      </a>
      <nav class="topnav">
        <a href="#metodo">Método</a>
        <a href="#pilares">Pilares</a>
        <a href="#oferta">Oferta</a>
      </nav>
      <a class="button button-small" href="${checkoutUrl}" target="_blank" rel="noreferrer">Comprar agora</a>
    </header>

    <main>
      <section class="hero section" id="inicio">
        <div class="hero-copy reveal">
          <p class="eyebrow">Manual Secreto para alcançar Riquezas Infinitas</p>
          <h1>Você não está travado por falta de oportunidade.</h1>
          <p class="hero-lead">
            Você está travado por uma mentalidade que precisa ser renovada. O Método MPC foi criado
            pela Professora e Psicoterapeuta <strong>Iraide Sousa</strong>.
          </p>
          <div class="hero-actions">
            <a class="button" href="${checkoutUrl}" target="_blank" rel="noreferrer">Quero acessar por R$ 97,00</a>
            <a class="button button-ghost" href="${whatsappUrl}" target="_blank" rel="noreferrer">Falar no WhatsApp</a>
          </div>
          <ul class="hero-highlights">
            <li>Base bíblica + PNL + neurociência aplicada</li>
            <li>Aplicação prática diária</li>
            <li>Garantia de 7 dias</li>
          </ul>
        </div>
        <div class="hero-visual reveal">
          <div class="portrait-frame">
            <img src="/iraide-sousa.jpeg" alt="Professora e Psicoterapeuta Iraide Sousa" />
          </div>
          <div class="price-card">
            <span class="price-label">Valor</span>
            <strong>R$ 97,00</strong>
            <span>Checkout Eduzz</span>
          </div>
        </div>
      </section>

      <section class="section problem">
        <div class="section-heading reveal">
          <p class="eyebrow">Estado atual</p>
          <h2>Mas sempre volta para o mesmo ponto.</h2>
        </div>
        <div class="grid-2">
          ${painPoints
            .map(
              (item) => `
                <article class="card reveal">
                  <p>${item}</p>
                </article>
              `
            )
            .join('')}
        </div>
      </section>

      <section class="section section-accent transition" id="metodo">
        <div class="section-heading reveal">
          <p class="eyebrow">Método MPC</p>
          <h2>Foi exatamente por isso que nasceu o Método MPC.</h2>
          <p>Mudar a mentalidade com prática e constância.</p>
        </div>
      </section>

      <section class="section method-foundation">
        <div class="foundation-panel reveal">
          <p class="eyebrow">A base do método</p>
          <h2>Um método baseado em princípios bíblicos e sabedoria milenar.</h2>
          <ul class="check-list">
            <li>Bíblia</li>
            <li>PNL Programação Neurolinguística</li>
            <li>Neurociência aplicada</li>
          </ul>
          <blockquote>
            “Transformai-vos pela renovação da vossa mente.”
            <cite>Romanos 12:2</cite>
          </blockquote>
        </div>
        <div class="foundation-side reveal">
          <h3>O Método MPC une</h3>
          <ul class="check-list dark">
            <li>Renovação mental bíblica</li>
            <li>Aplicação prática diária</li>
            <li>Constância estratégica</li>
          </ul>
          <p>
            A transformação começa na mente. Mas ela só permanece com prática diária.
          </p>
        </div>
      </section>

      <section class="section" id="publico">
        <div class="section-heading reveal">
          <p class="eyebrow">Para quem é</p>
          <h2>Para quem é o Método MPC?</h2>
        </div>
        <div class="grid-2">
          ${audience
            .map(
              (item) => `
                <article class="card card-soft reveal">
                  <p>${item}</p>
                </article>
              `
            )
            .join('')}
        </div>
      </section>

      <section class="section section-deep" id="pilares">
        <div class="section-heading reveal">
          <p class="eyebrow">Como funciona</p>
          <h2>Você não apenas aprende. Você aplica.</h2>
          <p>O que é aplicado se transforma em resultado.</p>
        </div>
        <div class="pillars">
          ${pillars
            .map(
              (pillar, index) => `
                <article class="pillar-card reveal">
                  <span class="pillar-number">0${index + 1}</span>
                  <h3>${pillar.title}</h3>
                  <p>${pillar.text}</p>
                </article>
              `
            )
            .join('')}
        </div>
      </section>

      <section class="section future">
        <div class="section-heading reveal">
          <p class="eyebrow">Visão de futuro</p>
          <h2>Se você não fizer nada pra mudar, como você vai estar daqui 3 anos?</h2>
        </div>
        <div class="comparison">
          <article class="comparison-card reveal">
            <h3>Se você não fizer nada</h3>
            <p>Muitas vezes, perdida, sem foco, sem direção nenhuma na vida, vendo todos à sua volta prosperando e você não.</p>
          </article>
          <article class="comparison-card comparison-card-highlight reveal">
            <h3>Imagina você mudando hoje</h3>
            <p>Seguindo um método validado, comprovado cientificamente, com passo a passo, clareza, foco, direção, constância e acompanhamento da especialista.</p>
          </article>
        </div>
      </section>

      <section class="section offer-grid" id="oferta">
        <div class="offer-card reveal">
          <p class="eyebrow">O que você recebe</p>
          <h2>Método MPC</h2>
          <p class="offer-subtitle">Manual secreto para alcançar riquezas infinitas.</p>
          <div class="price-box">
            <span>Valor</span>
            <strong>R$ 97,00</strong>
          </div>
          <a class="button" href="${checkoutUrl}" target="_blank" rel="noreferrer">Ir para o checkout</a>
        </div>
        <div class="bonus-card reveal">
          <p class="eyebrow">Bônus exclusivos</p>
          <ul class="bonus-list">
            ${bonuses.map((item) => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      </section>

      <section class="section guarantee">
        <div class="guarantee-card reveal">
          <p class="eyebrow">Garantia</p>
          <h2>Você tem 7 dias para testar o Método MPC.</h2>
          <p>
            Se não sentir clareza, foco e direção real, seu investimento é devolvido.
            <strong>Risco zero. Transformação real.</strong>
          </p>
        </div>
      </section>

      <section class="section final-cta">
        <div class="final-cta-copy reveal">
          <p class="eyebrow">Decisão</p>
          <h2>A mudança começa na mente. Mas a decisão começa em você.</h2>
          <p>
            Você pode continuar vivendo ciclos repetidos ou pode ativar uma mentalidade estruturada por princípios milenares.
          </p>
          <div class="hero-actions">
            <a class="button" href="${checkoutUrl}" target="_blank" rel="noreferrer">Começar agora</a>
            <a class="button button-ghost light" href="${whatsappUrl}" target="_blank" rel="noreferrer">Chamar no WhatsApp</a>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div>
        <strong>Método MPC</strong>
        <p>Professora e Psicoterapeuta Iraide Sousa</p>
      </div>
      <div class="footer-links">
        <a href="${checkoutUrl}" target="_blank" rel="noreferrer">Checkout Eduzz</a>
        <a href="${whatsappUrl}" target="_blank" rel="noreferrer">WhatsApp (62) 99413-0237</a>
      </div>
    </footer>

    <a class="floating-whatsapp" href="${whatsappUrl}" target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp">
      WhatsApp
    </a>
  </div>
`

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
      }
    })
  },
  {
    threshold: 0.18
  }
)

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
