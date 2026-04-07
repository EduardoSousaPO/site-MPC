import './styles.css'

const checkoutUrl = 'https://chk.eduzz.com/wnfqeneq'
const instagramUrl =
  'https://www.instagram.com/iraidesousa_oficial?igsh=YnNtejU5aTNybHg4'
const youtubeUrl =
  'https://youtube.com/@autoterapiacomaprofessora?si=_coh9OKc4I2P5DYz'
const whatsappUrl =
  'https://wa.me/5562994130237?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20o%20M%C3%A9todo%20MPC.'

const igIcon = `<svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C20.667.014 20.259 0 17 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>`

const ytIcon = `<svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`

/** Logo WhatsApp (SVG path oficial / marca reconhecida) */
const waIcon = `<svg class="wa-icon wa-icon--animate" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>`

const imgHero = '/iraide-sousa.jpeg'
const imgDor = '/imagens/dor.jpeg'
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
        <a href="#mentora">Mentora</a>
        <a href="#dor">Dor</a>
        <a href="#metodo">Método</a>
        <a href="#perguntas">Perguntas</a>
        <a href="#como-funciona">Pilares</a>
        <a href="#oferta">Oferta</a>
        <a href="#redes">Redes</a>
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
            <p class="hero-credit"><span class="mpc-name-highlight mpc-name-highlight--inline">Método MPC</span> · Professora e psicoterapeuta <strong>Iraide Sousa</strong></p>
            <p class="hero-sparkles" aria-hidden="true">✦ ✦ ✦ ✦ ✦</p>
            <div class="hero-actions">
              <a class="button button-primary" href="${checkoutUrl}" target="_blank" rel="noreferrer">Começar agora</a>
              <a class="button button-secondary button--wa" href="${whatsappUrl}" target="_blank" rel="noreferrer">${waIcon}<span>WhatsApp</span></a>
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

      <section class="section--mentora-deck" id="mentora" aria-labelledby="mentora-heading">
        <div class="mentora-deck reveal">
          <h2 class="mentora-deck__title" id="mentora-heading">Quem vai ser sua Mentora?</h2>
          <div class="mentora-deck__body">
            <p>
              Iraide Sousa é Professora, Psicoterapeuta e Consteladora Familiar, tem várias formações na área do
              desenvolvimento humano e atua nesse mercado desde 2019. Sua maior formação é sua experiência de Vida e seu
              melhor professor foi Deus.
            </p>
            <p>
              Foi no campo de batalha, no dia a dia colocando em prática tudo o que aprendi, que saí de uma morte em
              vida, me curei de uma profunda depressão e já ajudei centenas de pessoas ao redor do mundo.
            </p>
          </div>
          <div class="mentora-deck__formula">
            <p class="mentora-deck__creator">
              Sou criadora do <span class="mpc-name-highlight mpc-name-highlight--inline">Método MPC</span>
            </p>
            <p class="mentora-deck__equation">
              Mentalidade + Prática + Constância = uma Vida Transformada
            </p>
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
          <h2 class="how-deck__title">Como funciona o <span class="mpc-name-highlight">Método MPC</span>?</h2>
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
            <h2 class="audience-deck__title">Para quem é o <span class="mpc-name-highlight">Método MPC</span></h2>
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
          <h3 class="foundation-deck__side-title">O <span class="mpc-name-highlight mpc-name-highlight--inline">Método MPC</span> une</h3>
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
          <h2 class="guarantee-deck__title">Você tem 7 dias para testar o <span class="mpc-name-highlight mpc-name-highlight--inline">Método MPC</span>.</h2>
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
            <p class="cta-deck__text">E comece agora sua jornada com o <span class="mpc-name-highlight mpc-name-highlight--inline">Método MPC</span>.</p>
            <p class="cta-deck__tagline">A mudança começa na mente. Mas a decisão começa em você.</p>
            <div class="cta-deck__actions">
              <a class="button button--gold" href="${checkoutUrl}" target="_blank" rel="noreferrer">Começar agora</a>
              <a class="button button-ghost-light button--wa-outline" href="${whatsappUrl}" target="_blank" rel="noreferrer">${waIcon}<span>WhatsApp</span></a>
            </div>
          </div>
        </div>
      </section>

      <section class="section--social-cta" id="redes" aria-labelledby="social-cta-heading">
        <div class="social-cta reveal">
          <p class="social-cta__eyebrow">Quer ver de perto?</p>
          <h2 class="social-cta__title" id="social-cta-heading">Depoimentos e aulas com a professora</h2>
          <p class="social-cta__sub">
            Centenas de pessoas acompanham o dia a dia no Instagram e o conteúdo educativo no YouTube, antes de dar o próximo passo.
          </p>
          <div class="social-cta__actions">
            <a
              class="button button-social button-social--ig"
              href="${instagramUrl}"
              target="_blank"
              rel="noopener noreferrer"
            >${igIcon}<span>Ver depoimentos no Instagram</span></a>
            <a
              class="button button-social button-social--yt"
              href="${youtubeUrl}"
              target="_blank"
              rel="noopener noreferrer"
            >${ytIcon}<span>Assistir no YouTube</span></a>
          </div>
          <p class="social-cta__checkout-note">
            Pronto para começar? O botão principal leva direto ao <a href="${checkoutUrl}" target="_blank" rel="noopener noreferrer">checkout seguro</a>.
          </p>
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
        <a class="footer-wa" href="${whatsappUrl}" target="_blank" rel="noreferrer">${waIcon}<span>WhatsApp</span></a>
      </div>
    </footer>

    <a class="floating-whatsapp" href="${whatsappUrl}" target="_blank" rel="noreferrer" aria-label="Abrir conversa no WhatsApp">${waIcon}<span class="floating-whatsapp__label">WhatsApp</span></a>
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
