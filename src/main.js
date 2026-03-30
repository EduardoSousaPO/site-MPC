import './styles.css'

const checkoutUrl = 'https://chk.eduzz.com/VWGZKG4P07'
const whatsappUrl =
  'https://wa.me/5562994130237?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20o%20M%C3%A9todo%20MPC.'

const imgHero = '/iraide-sousa.jpeg'
const imgDor =
  'https://images.unsplash.com/photo-1573496529574-6242e8ab0c3e?w=720&h=720&fit=crop&fm=webp&q=85'
const imgBase =
  'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=720&h=480&fit=crop&fm=webp&q=85'

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

const provokingQuestions = [
  'Em qual área da sua vida você sente que poderia ir mais longe, mas algo invisível parece te travar?',
  'Quantas oportunidades você já deixou passar porque pensou que não era capaz?',
  'Quem você acredita que realmente é?',
  'E se o maior bloqueio da sua vida não estivesse fora… mas dentro da sua mente?',
  'Como sua vida seria se você começasse a acreditar mais em si mesma?'
]

const mirrorTruths = [
  'Talvez você não queira <strong>mudar de verdade</strong>… ou talvez esteja feliz como está.',
  'A mudança quase sempre dói: exige tempo, romper hábitos, desculpas e o conforto disfarçado de rotina.',
  'Se você sente incômodo lendo isso, é porque existe algo dentro de você querendo mudar. <strong>Acordar.</strong>'
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
  'Para quem quer sair da escassez mental.',
  'Para quem deseja disciplina real.'
]

const painPoints = [
  'Você tenta mudar.',
  'Tenta ser mais disciplinado.',
  'Tenta crescer espiritualmente.',
  'Tenta prosperar.'
]

const logoMpc = `
  <span class="logo-mpc" aria-label="Método MPC">
    <span class="logo-mpc__line">MÉTODO</span>
    <span class="logo-mpc__line logo-mpc__line--big">MPC</span>
    <span class="logo-mpc__sparkles" aria-hidden="true">✦ ✦ ✦</span>
  </span>
`

const logoMpcFooter = logoMpc.replace('class="logo-mpc"', 'class="logo-mpc logo-mpc--footer"')

const [questionLead, ...questionRest] = provokingQuestions

document.querySelector('#app').innerHTML = `
  <div class="page-shell">
    <header class="topbar">
      <a class="brand" href="#inicio">
        ${logoMpc}
        <span class="brand-sub">Iraide Sousa</span>
      </a>
      <nav class="topnav" aria-label="Seções principais">
        <a href="#inicio">Início</a>
        <a href="#dor">Dor</a>
        <a href="#metodo">Método</a>
        <a href="#perguntas">Perguntas</a>
        <a href="#como-funciona">Pilares</a>
        <a href="#oferta">Oferta</a>
      </nav>
      <a class="button button-primary button-small" href="${checkoutUrl}" target="_blank" rel="noreferrer">Começar agora</a>
    </header>

    <div class="wave-top" aria-hidden="true"></div>

    <main>
      <section class="hero section--hero-deck" id="inicio">
        <div class="hero__inner">
          <div class="hero__copy reveal">
            <h1 class="hero-title">
              <span class="hero-title__primary">Você não está travado por falta de oportunidade.</span>
            </h1>
            <p class="hero-title__secondary">Você está travado por uma mentalidade que precisa ser renovada.</p>
            <p class="hero-credit">Método MPC · Professora e psicoterapeuta <strong>Iraide Sousa</strong></p>
            <p class="hero-sparkles" aria-hidden="true">✦ ✦ ✦ ✦ ✦</p>
            <div class="hero-actions">
              <a class="button button-primary" href="${checkoutUrl}" target="_blank" rel="noreferrer">Começar agora</a>
              <a class="button button-secondary" href="${whatsappUrl}" target="_blank" rel="noreferrer">WhatsApp</a>
            </div>
            <p class="hero-trust">Base bíblica · PNL · Neurociência · Garantia de 7 dias</p>
          </div>
          <div class="hero__visual reveal" aria-hidden="false">
            <figure class="hero-tablet">
              <div class="hero-tablet__bezel">
                <div class="hero-tablet__orchid"></div>
                <div class="hero-tablet__screen">
                  <img
                    src="${imgHero}"
                    alt="Iraide Sousa — professora e psicoterapeuta, criadora do Método MPC"
                    width="720"
                    height="900"
                    loading="eager"
                    decoding="async"
                    fetchpriority="high"
                  />
                </div>
              </div>
            </figure>
          </div>
        </div>
      </section>

      <section class="dor-deck" id="dor">
        <div class="dor-deck__split">
          <div class="dor-deck__light reveal">
            <img
              src="${imgDor}"
              alt="Sobrecarga emocional — sensação de voltar sempre ao mesmo ponto"
              width="720"
              height="720"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div class="dor-deck__purple reveal">
            <ul class="pain-list">
              ${painPoints.map((item) => `<li>${item}</li>`).join('')}
            </ul>
            <p class="hook-pill">Mas sempre volta para o mesmo ponto.</p>
            <p class="truth-kicker">A verdade que ninguém te disse é:</p>
            <p class="truth-statement">
              Sem prática estruturada e constância guiada por princípios milenares,
              <em>não existe transformação real.</em>
              <span class="truth-ico" aria-hidden="true">👉</span>
            </p>
          </div>
        </div>
        <div class="dor-deck__mirror">
          <div class="dor-deck__mirror-inner">
            <div class="mirror-grid reveal">
              <ul class="mirror-col mirror-col--checks">
                ${mirrorTruths.map((t) => `<li>${t}</li>`).join('')}
              </ul>
              <div class="mirror-col mirror-col--accent">
                <h3 class="mirror-heading">O sistema que te condicionou a ser quem você é hoje</h3>
                <p class="mirror-badge">Sabia disso?</p>
                <p class="mirror-body">
                  Ele te mantém <strong>ocupada</strong>, sempre cansada e sempre quase pronta para mudar —
                  mas sem atravessar de fato.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section--metodo-deck" id="metodo">
        <div class="deck-narrow reveal">
          <p class="deck-kicker">E é exatamente por isso que nasceu o</p>
          <h2 class="deck-brand">Método MPC</h2>
          <p class="deck-tagline">Mudar a mentalidade com prática e constância.</p>
          <p class="deck-lead">
            Um método baseado em <span class="pill-tag pill-tag--solid">Princípios bíblicos</span>
            e sabedoria milenar, estruturado para transformar sua mentalidade e alinhar sua vida com resultados
            <span class="pill-tag pill-tag--solid">consistentes e permanentes</span>.
          </p>
          <p class="deck-steps-intro">Dentro da estrutura, o método é desenvolvido em <strong>07 passos</strong>:</p>
          <ul class="deck-steps">
            <li><span class="deck-steps__check" aria-hidden="true">✓</span> Passo 01: clareza do seu estado atual.</li>
            <li><span class="deck-steps__check" aria-hidden="true">✓</span> Passo 07: você alcança seu estado desejado.</li>
          </ul>
        </div>
      </section>

      <section class="section--questions-deck" id="perguntas">
        <div class="questions-deck reveal">
          <div class="questions-deck__lead">
            <h2 class="questions-deck__title">${questionLead}</h2>
          </div>
          <ul class="questions-deck__list">
            ${questionRest.map((q) => `<li>${q}</li>`).join('')}
          </ul>
        </div>
        <div class="commit-deck reveal">
          <p class="commit-deck__line"><strong>Você está disposta</strong> a quebrar os bloqueios que estão limitando sua vida?</p>
          <p class="commit-deck__line commit-deck__line--soft">E se hoje fosse o dia em que você começasse a reconstruir sua identidade?</p>
        </div>
      </section>

      <section class="how-deck" id="como-funciona">
        <div class="how-deck__purple reveal">
          <h2 class="how-deck__title">Como funciona o Método MPC?</h2>
          <p class="how-deck__sub">Ele é dividido em 3 pilares.</p>
          <p class="how-deck__body">
            Você não apenas aprende. <strong>Você aplica.</strong> E o que é aplicado se transforma em resultado.
          </p>
        </div>
        <div class="how-deck__white reveal">
          <h3 class="how-deck__pillars-label">3 pilares</h3>
          <div class="pillar-pills">
            ${pillars
              .map(
                (p) => `
              <article class="pillar-pill">
                <h4 class="pillar-pill__title">${p.title}</h4>
                <p class="pillar-pill__text">${p.text}</p>
              </article>
            `
              )
              .join('')}
          </div>
        </div>
      </section>

      <section class="section--audience-deck" id="beneficios">
        <div class="audience-deck reveal">
          <div class="audience-deck__head">
            <h2 class="audience-deck__title">Para quem é o <span>Método MPC</span></h2>
            <p class="audience-deck__sparkles" aria-hidden="true">✦ ✦ ✦</p>
          </div>
          <ul class="audience-deck__list">
            ${audience.map((item) => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      </section>

      <section class="section--future-deck">
        <div class="future-deck reveal">
          <div class="future-deck__col future-deck__col--warn">
            <h3 class="future-deck__h">Olhe com carinho o seu estado atual</h3>
            <p class="future-deck__p">Se você não fizer nada para mudar, como você vai estar daqui a 3 anos?</p>
            <p class="future-deck__muted">
              Muitas vezes, perdida, sem foco, sem direção — vendo todos prosperarem ao redor e você não.
            </p>
          </div>
          <div class="future-deck__col future-deck__col--hope">
            <h3 class="future-deck__h">Agora imagina você decidindo mudar hoje</h3>
            <p class="future-deck__p">
              Passo a passo, clareza, foco, direção, constância e acompanhamento da especialista.
            </p>
            <p class="future-deck__pill">Imagina como você vai estar daqui a 3 anos…</p>
          </div>
        </div>
      </section>

      <section class="section--teal-deck">
        <div class="teal-deck reveal">
          <h2 class="teal-deck__title">Bônus exclusivos</h2>
          <ul class="teal-deck__list">
            ${bonuses.map((b) => `<li>${b}</li>`).join('')}
          </ul>
        </div>
      </section>

      <section class="foundation-deck" id="base">
        <div class="foundation-deck__purple reveal">
          <p class="foundation-deck__eyebrow">📖 A base do método</p>
          <h2 class="foundation-deck__h">Princípios bíblicos e sabedoria milenar</h2>
          <ul class="foundation-deck__checks">
            <li>A Bíblia</li>
            <li>PNL · Programação neurolinguística</li>
            <li>Neurociência aplicada</li>
          </ul>
          <blockquote class="foundation-deck__quote">
            “Transformai-vos pela renovação da vossa mente.”
            <cite>Romanos 12:2</cite>
          </blockquote>
          <p class="foundation-deck__foot">
            A transformação começa na mente. Mas ela só permanece com
            <strong class="foundation-deck__hl">prática diária.</strong>
          </p>
        </div>
        <div class="foundation-deck__white reveal">
          <div class="foundation-deck__orchid">
            <img
              src="${imgBase}"
              alt=""
              width="360"
              height="240"
              loading="lazy"
              decoding="async"
            />
          </div>
          <h3 class="foundation-deck__side-title">O Método MPC une</h3>
          <ul class="foundation-deck__side-list">
            <li>Renovação mental bíblica</li>
            <li>Aplicação prática diária</li>
            <li>Constância estratégica</li>
          </ul>
        </div>
      </section>

      <section class="section--offer-deck" id="oferta">
        <div class="offer-deck reveal">
          <h2 class="offer-deck__title">Método MPC</h2>
          <p class="offer-deck__sub">Manual para alinhar mentalidade e resultados.</p>
          <p class="offer-deck__hint">Valor e condições no checkout seguro, com um clique.</p>
          <a class="button button-primary button--wide" href="${checkoutUrl}" target="_blank" rel="noreferrer">Começar agora</a>
        </div>
      </section>

      <section class="section--guarantee-deck">
        <div class="guarantee-deck reveal">
          <p class="guarantee-deck__eyebrow">🛡 Garantia</p>
          <h2 class="guarantee-deck__title">Você tem 7 dias para testar o Método MPC.</h2>
          <p class="guarantee-deck__text">
            Se não sentir clareza, foco e direção real, seu investimento é devolvido.
          </p>
          <p class="guarantee-deck__pill">Risco zero. Transformação real.</p>
        </div>
      </section>

      <section class="section--cta-deck" id="cta-final">
        <div class="cta-deck reveal">
          <div class="cta-deck__col">
            <p class="cta-deck__eyebrow">🚀 Decida agora</p>
            <p class="cta-deck__text">Você pode continuar vivendo ciclos repetidos…</p>
            <p class="cta-deck__text">
              Ou pode ativar uma mentalidade estruturada por princípios milenares.
            </p>
          </div>
          <div class="cta-deck__col">
            <p class="cta-deck__capsule">Clique no botão</p>
            <p class="cta-deck__text">E comece agora sua jornada com o Método MPC.</p>
            <p class="cta-deck__tagline">A mudança começa na mente. Mas a decisão começa em você.</p>
            <div class="cta-deck__actions">
              <a class="button button--gold" href="${checkoutUrl}" target="_blank" rel="noreferrer">Começar agora</a>
              <a class="button button-ghost-light" href="${whatsappUrl}" target="_blank" rel="noreferrer">WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer section--footer-deck">
      <div class="footer-brand">
        ${logoMpcFooter}
        <p>Professora e Psicoterapeuta Iraide Sousa</p>
      </div>
      <div class="footer-links">
        <a href="${checkoutUrl}" target="_blank" rel="noreferrer">Checkout</a>
        <a href="${whatsappUrl}" target="_blank" rel="noreferrer">WhatsApp</a>
      </div>
    </footer>

    <a class="floating-whatsapp" href="${whatsappUrl}" target="_blank" rel="noreferrer" aria-label="WhatsApp">WhatsApp</a>
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
  { threshold: 0.15 }
)

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
