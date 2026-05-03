// INKU Hi-Fi — Page components

// ─────────── DATA ───────────
const FEATURED = {
  category: 'À LA UNE',
  title: 'Chainsaw Man saison 2 : MAPPA dévoile la date et un trailer qui décoiffe',
  excerpt: "Après deux ans d'attente, le studio confirme un retour pour octobre 2026 — et un casting créatif qui promet une saison plus sombre encore que la première.",
  time: 'Il y a 2 h',
  readMin: 4,
  author: "Hazel Moreau",
  authorRole: "Rédactrice en chef",
};

const SECONDARY = [
  { category: 'INDUSTRIE', title: "Crunchyroll récupère One Piece pour le simulcast mondial",
    excerpt: 'Coup de tonnerre dans la diffusion : Toei et Crunchyroll signent un partenariat exclusif jusqu\'en 2030.',
    time: 'Il y a 4 h', readMin: 3 },
  { category: 'STUDIO', title: 'MAPPA ouvre un nouveau studio satellite à Sapporo',
    excerpt: '120 nouveaux postes prévus d\'ici fin 2026 pour absorber un calendrier de production saturé.',
    time: 'Il y a 6 h', readMin: 5 },
];

const TRENDING = [
  { category: 'REVIEW', title: 'Frieren ép. 28 — la mélancolie comme arme',
    excerpt: "L'épisode le plus contemplatif de la saison, et probablement le plus déchirant.",
    time: '11 h', readMin: 8 },
  { category: 'DOSSIER', title: 'Spy x Family : pourquoi ça marche encore après 3 saisons',
    excerpt: 'Anatomie d\'une formule qui refuse de s\'essouffler.',
    time: '14 h', readMin: 12 },
  { category: 'INTERVIEW', title: 'Naoko Yamada : « Le silence est mon outil le plus précieux »',
    excerpt: 'La réalisatrice de A Silent Voice se confie sur son prochain long-métrage.',
    time: 'Hier', readMin: 10 },
  { category: 'ÉDITO', title: 'Le « slow anime », nouveau souffle d\'une génération',
    excerpt: "De Frieren à Apothicaire, une vague qui prend son temps.",
    time: 'Hier', readMin: 7 },
];

const LATEST = [
  { category: 'SORTIE', title: 'Le calendrier du printemps 2026 dévoilé',
    excerpt: '14 nouveautés et 23 suites : on a fait le tri.',
    time: 'Il y a 1 h', readMin: 6 },
  { category: 'JEU', title: 'Persona 6 confirmé pour 2027',
    excerpt: 'Atlus lève enfin le voile au Tokyo Game Show.',
    time: 'Il y a 8 h', readMin: 4 },
  { category: 'CINÉMA', title: 'Studio Ghibli prépare un nouveau projet',
    excerpt: 'Sortie prévue pour l\'hiver 2027, sans Miyazaki à la réalisation.',
    time: 'Il y a 12 h', readMin: 5 },
  { category: 'MANGA', title: 'Berserk reprend avec un nouveau dessinateur',
    excerpt: 'Studio Gaga reprend le flambeau, sous la supervision du scénariste original.',
    time: 'Hier', readMin: 6 },
];

const NEWS_FEED = [
  ...SECONDARY, ...TRENDING, ...LATEST,
  { category: 'REVIEW', title: 'Solo Leveling S2 — l\'animation qui sauve un récit fragile',
    excerpt: 'A-1 Pictures continue de transformer un manhwa moyen en spectacle hypnotique.',
    time: '27 avr.', readMin: 6 },
  { category: 'INDUSTRIE', title: 'Sony rachète Aniplex à 100% — ce que ça change',
    excerpt: 'Une consolidation qui inquiète autant qu\'elle promet de stabiliser les budgets.',
    time: '26 avr.', readMin: 7 },
  { category: 'ÉDITO', title: 'Pourquoi le « slow anime » est la respiration dont on avait besoin',
    excerpt: 'Frieren, Apothicaire, Spice & Wolf : la lenteur comme nouveau langage.',
    time: '24 avr.', readMin: 7 },
];

const FILTERS = ['Tout', 'Sorties', 'Reviews', 'Industrie', 'Interviews', 'Manga', 'Cinéma', 'Édito'];

// Calendar — printemps 2026, week of 27 avr
const CAL_DAYS = [
  { name: 'Lun', date: 27 },
  { name: 'Mar', date: 28 },
  { name: 'Mer', date: 29 },
  { name: 'Jeu', date: 30 },
  { name: 'Ven', date: '1ᵉʳ' },
  { name: 'Sam', date: 2 },
  { name: 'Dim', date: 3 },
];
const CAL_TIMES = ['Matin', 'Après-midi', 'Soir', 'Nuit'];
// matrix[time][day]
const CAL_GRID = [
  // Matin
  [
    [{ title: 'Wind Breaker S2', episode: 1, time: '09:30', variant: 'new' }],
    [],
    [{ title: 'Lazarus', episode: 5, time: '10:00', variant: 'standard' }],
    [],
    [{ title: 'Apothicaire S2', episode: 1, time: '11:30', variant: 'new' }],
    [{ title: 'Kowloon Generic', episode: 5, time: '11:00', variant: 'suite' }],
    [],
  ],
  // Après-midi
  [
    [{ title: 'Mob Psycho 100 R', episode: 5, time: '14:30', variant: 'suite' }],
    [{ title: 'Frieren', episode: 29, time: '15:00', variant: 'standard' }],
    [],
    [{ title: 'My Hero Academia', episode: 144, time: '16:30', variant: 'big' }],
    [],
    [
      { title: 'Spice & Wolf', episode: 1, time: '14:00', variant: 'new' },
      { title: 'One Piece', episode: 1098, time: '17:30', variant: 'standard' },
    ],
    [{ title: 'Dr. Stone S5', episode: 4, time: '14:00', variant: 'standard' }],
  ],
  // Soir
  [
    [{ title: 'Demon Slayer', episode: 4, time: '22:00', variant: 'big' }],
    [{ title: 'Witch Watch', episode: 1, time: '23:00', variant: 'new' }],
    [{ title: 'Jujutsu Kaisen', episode: 60, time: '22:30', variant: 'big' }],
    [{ title: 'Bleach TYBW', episode: 32, time: '22:00', variant: 'standard' }],
    [{ title: 'Sakamoto Days', episode: 5, time: '23:30', variant: 'suite' }],
    [],
    [
      { title: 'Solo Leveling S3', episode: 5, time: '22:00', variant: 'standard' },
      { title: 'Wind Breaker', episode: 5, time: '23:00', variant: 'suite' },
    ],
  ],
  // Nuit
  [
    [],
    [{ title: 'Re:Zero S3', episode: 4, time: '01:30', variant: 'standard' }],
    [],
    [],
    [{ title: 'Sakamoto Days S2', episode: 1, time: '00:30', variant: 'new' }],
    [],
    [],
  ],
];

const SEASON_HIGHLIGHTS = [
  { tag: 'NOUVEAU',  title: 'Wind Breaker S2',     studio: 'CloverWorks', day: 'Lun · 09:30' },
  { tag: 'SUITE',    title: 'Apothicaire — S2',    studio: 'OLM',         day: 'Ven · 11:30' },
  { tag: 'NOUVEAU',  title: 'Witch Watch',         studio: 'Bibury',      day: 'Mar · 23:00' },
  { tag: 'REMAKE',   title: 'Spice & Wolf',        studio: 'Passione',    day: 'Sam · 14:00' },
];

const A2M_LIST = [
  {
    anime: { title: 'Demon Slayer S4', status: 'fini', lastEp: 8, arcEnd: 'fin de l\'arc « village des forgerons »', tags: ['Shōnen', '26 ép.'] },
    manga: { title: 'Demon Slayer', tome: 16, chapter: 137, arcDesc: 'arc « entraînement des piliers » — 7 tomes restants jusqu\'à la fin.', tags: ['7 tomes', 'Terminé'] },
  },
  {
    anime: { title: 'Jujutsu Kaisen S2', status: 'en pause', lastEp: 23, arcEnd: 'fin de Shibuya', tags: ['Shōnen', '47 ép.'] },
    manga: { title: 'Jujutsu Kaisen', tome: 16, chapter: 137, arcDesc: 'arc « culling game » — l\'apothéose, jusqu\'au tome 30.', tags: ['14 tomes', 'Terminé'] },
  },
  {
    anime: { title: 'Vinland Saga S2', status: 'fini', lastEp: 24, arcEnd: 'fin de l\'arc « ferme »', tags: ['Seinen', '48 ép.'] },
    manga: { title: 'Vinland Saga', tome: 13, chapter: 102, arcDesc: 'arc « Vinland » — voyage vers le nouveau monde, en cours (28 t.).', tags: ['15+ tomes', 'En cours'] },
  },
  {
    anime: { title: 'Spy x Family S2', status: 'fini', lastEp: 25, arcEnd: 'arc « croisière »', tags: ['Shōnen', '37 ép.'] },
    manga: { title: 'Spy x Family', tome: 11, chapter: 70, arcDesc: 'arc « école de Berlint » — 4 tomes d\'avance, en cours.', tags: ['4+ tomes', 'En cours'] },
  },
  {
    anime: { title: 'Chainsaw Man S1', status: 'fini', lastEp: 12, arcEnd: 'fin de la « part 1 » incomplète', tags: ['Shōnen', '12 ép.'] },
    manga: { title: 'Chainsaw Man', tome: 8, chapter: 60, arcDesc: 'la fin de la part 1 + toute la part 2 « école » — 9 tomes.', tags: ['9+ tomes', 'En cours'] },
  },
];

const TEAM = [
  { name: 'Hazel Moreau', role: 'Rédactrice en chef', bio: 'Frieren stan, ex-AnimeNewsNetwork.' },
  { name: 'Lucas Tanaka', role: 'Manga & seinen', bio: 'Lit Berserk depuis 2002. Toujours pas remis.' },
  { name: 'Isabella Cruz', role: 'Reviews shōjo', bio: 'Convaincue que Maid-sama mérite un remake.' },
  { name: 'Yuki Kimura', role: 'Industrie & interviews', bio: 'Tokyo-based. Parle aux studios pour vous.' },
];

// ─────────── PAGES ───────────

function HomePage({ onNav, onArticle, onNewsletter, layout }) {
  return (
    <main style={{ background: INKU.surface }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '40px 32px 0' }}>
        {/* Hero — 60/40 */}
        <section style={{
          display: 'grid',
          gridTemplateColumns: layout === 'stack' ? '1fr' : layout === 'three-col' ? '1fr 1.4fr 1fr' : '3fr 2fr',
          gap: 24,
          marginBottom: 64,
        }}>
          <HeroFeatured article={FEATURED} onClick={() => onArticle(FEATURED)} />
          <div style={{
            display: 'grid',
            gridTemplateColumns: layout === 'stack' ? '1fr 1fr' : '1fr',
            gridTemplateRows: layout === 'stack' ? 'auto' : '1fr 1fr',
            gap: 16,
          }}>
            {SECONDARY.map((a, i) => <NewsCardSide key={i} article={a} onClick={() => onArticle(a)} />)}
          </div>
        </section>

        {/* Trending */}
        <section style={{ marginBottom: 80 }}>
          <SectionHeader kicker="Cette semaine" title="Tendances de la rédac" action={() => onNav('news')} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {TRENDING.map((a, i) => <NewsCardGrid key={i} article={a} onClick={() => onArticle(a)} />)}
          </div>
        </section>

        {/* Promo strip — A2M */}
        <section style={{
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: '180px 1fr auto',
          gap: 32, alignItems: 'center',
          padding: '32px 40px',
          marginBottom: 80,
          borderRadius: 20,
          background: `linear-gradient(135deg, ${INKU.surface} 0%, #FFE5F2 100%)`,
          border: `1px solid ${INKU.border}`,
          overflow: 'hidden',
        }}>
          <img src="assets/mascot-inku.png" alt="" style={{ height: 180, width: 180, objectFit: 'contain' }} />
          <div>
            <Kicker color={INKU.magenta} style={{ display: 'block', marginBottom: 10 }}>Nouveau service</Kicker>
            <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 30, color: INKU.deep, margin: '0 0 10px', letterSpacing: '-0.01em' }}>
              L'anime te laisse sur ta faim ? On te dit où reprendre en manga.
            </h3>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 15, lineHeight: 1.5, color: INKU.neutral, margin: 0, maxWidth: 520 }}>
              Tome exact, chapitre exact, contexte sans spoil. Pour 80+ animes — et ça grossit chaque semaine.
            </p>
          </div>
          <Button variant="primary" size="lg" onClick={() => onNav('a2m')}>
            Reprendre en manga <Icon name="arrow-right" size={16} color="#fff" />
          </Button>
        </section>

        {/* Latest */}
        <section style={{ marginBottom: 80 }}>
          <SectionHeader kicker="Mises à jour" title="Dernières news" action={() => onNav('news')} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {LATEST.map((a, i) => <NewsCardGrid key={i} article={a} onClick={() => onArticle(a)} />)}
          </div>
        </section>

        {/* Newsletter */}
        <section id="newsletter" style={{ marginBottom: 24 }}>
          <NewsletterBlock variant="hero" onSubmit={onNewsletter} />
        </section>
      </div>
      <Footer onNav={onNav} onNewsletter={onNewsletter} />
    </main>
  );
}

function NewsPage({ onNav, onArticle, onNewsletter }) {
  const [filter, setFilter] = React.useState('Tout');
  const filtered = filter === 'Tout' ? NEWS_FEED : NEWS_FEED.filter(a => a.category.toLowerCase().startsWith(filter.toLowerCase().slice(0, 4)));
  return (
    <main style={{ background: '#fff' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '40px 32px 0' }}>
        <header style={{ marginBottom: 40, paddingBottom: 32, borderBottom: `1px solid ${INKU.border}` }}>
          <Kicker style={{ display: 'block', marginBottom: 12 }}>Le flux</Kicker>
          <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 56, color: INKU.deep, margin: '0 0 16px', letterSpacing: '-0.02em' }}>
            News
          </h1>
          <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 17, lineHeight: 1.5, color: INKU.neutral, margin: '0 0 24px', maxWidth: 640 }}>
            Tout ce qui bouge dans l'anime, le manga et l'industrie autour. Mis à jour plusieurs fois par jour par la rédaction.
          </p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {FILTERS.map(f => (
              <button key={f} onClick={() => setFilter(f)} style={{
                fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: 13,
                padding: '7px 14px', borderRadius: 999,
                border: filter === f ? 'none' : `1px solid ${INKU.border}`,
                background: filter === f ? INKU.magenta : '#fff',
                color: filter === f ? '#fff' : INKU.deep,
                cursor: 'pointer', transition: 'all 150ms',
              }}>{f}</button>
            ))}
          </div>
        </header>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 64, alignItems: 'start' }}>
          <div>
            {filtered.map((a, i) => <NewsRow key={i} article={a} onClick={() => onArticle(a)} />)}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 32, padding: '24px 0' }}>
              <Button variant="tertiary" size="sm">← Précédent</Button>
              <Button variant="primary" size="sm">1</Button>
              <Button variant="tertiary" size="sm">2</Button>
              <Button variant="tertiary" size="sm">3</Button>
              <Button variant="tertiary" size="sm">… 12</Button>
              <Button variant="tertiary" size="sm">Suivant →</Button>
            </div>
          </div>
          <aside style={{ position: 'sticky', top: 96, display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div style={{ background: INKU.surface, borderRadius: 14, padding: '24px 22px' }}>
              <Kicker style={{ display: 'block', marginBottom: 16 }}>Top de la semaine</Kicker>
              <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 18 }}>
                {TRENDING.concat([LATEST[0]]).slice(0, 5).map((a, i) => (
                  <li key={i} style={{ display: 'grid', gridTemplateColumns: '32px 1fr', gap: 12, cursor: 'pointer' }} onClick={() => onArticle(a)}>
                    <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 28, color: INKU.magenta, lineHeight: 1 }}>0{i+1}</span>
                    <div>
                      <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 14, color: INKU.ink, lineHeight: 1.25 }}>{a.title}</div>
                      <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 11, color: INKU.neutral, marginTop: 4 }}>{a.category} · {a.readMin} min</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div style={{
              borderRadius: 14, padding: '24px 22px',
              background: `linear-gradient(135deg, ${INKU.deep} 0%, ${INKU.magenta} 100%)`,
              color: '#fff',
            }}>
              <Kicker color="rgba(255,255,255,0.7)" style={{ display: 'block', marginBottom: 10 }}>Newsletter</Kicker>
              <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 22, color: '#fff', margin: '0 0 8px', lineHeight: 1.15 }}>
                Le récap du dimanche
              </h3>
              <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, lineHeight: 1.45, color: 'rgba(255,255,255,0.85)', margin: '0 0 14px' }}>
                Toutes les news de la semaine en un mail. Promis, pas plus.
              </p>
              <NewsletterBlock variant="inline" onSubmit={onNewsletter} />
            </div>
          </aside>
        </div>
      </div>
      <Footer onNav={onNav} onNewsletter={onNewsletter} />
    </main>
  );
}

function CalendarPage({ onNav, onNewsletter }) {
  const [season, setSeason] = React.useState('Printemps');
  const seasons = ['Hiver', 'Printemps', 'Été', 'Automne'];
  return (
    <main style={{ background: INKU.surface }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '40px 32px 0' }}>
        <header style={{ marginBottom: 32 }}>
          <Kicker style={{ display: 'block', marginBottom: 12 }}>Saison en cours</Kicker>
          <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 56, color: INKU.deep, margin: '0 0 16px', letterSpacing: '-0.02em' }}>
            Calendrier — Printemps 2026
          </h1>
          <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 17, lineHeight: 1.5, color: INKU.neutral, margin: '0 0 0', maxWidth: 640 }}>
            14 nouveautés et 23 suites. Heures de simulcast en JST (Tokyo) — bascule disponible.
          </p>
        </header>

        {/* toolbar */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          marginBottom: 24, gap: 16, flexWrap: 'wrap',
        }}>
          <div style={{
            display: 'inline-flex', borderRadius: 999,
            background: '#fff', border: `1px solid ${INKU.border}`,
            padding: 4,
          }}>
            {seasons.map(s => (
              <button key={s} onClick={() => setSeason(s)} style={{
                fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 13,
                padding: '8px 18px', borderRadius: 999, border: 'none',
                background: season === s ? INKU.magenta : 'transparent',
                color: season === s ? '#fff' : INKU.ink,
                cursor: 'pointer', transition: 'all 150ms',
              }}>{s}</button>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <button style={{ background: '#fff', border: `1px solid ${INKU.border}`, borderRadius: 8, padding: 8, cursor: 'pointer', display: 'inline-flex' }}><Icon name="arrow-left" size={16} color={INKU.ink} /></button>
            <strong style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 15, color: INKU.ink }}>Sem. du 27 avr. → 3 mai</strong>
            <button style={{ background: '#fff', border: `1px solid ${INKU.border}`, borderRadius: 8, padding: 8, cursor: 'pointer', display: 'inline-flex' }}><Icon name="arrow-right" size={16} color={INKU.ink} /></button>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <Button variant="tertiary" size="sm">Tout</Button>
            <Button variant="tertiary" size="sm">Ma liste</Button>
            <Button variant="tertiary" size="sm">Nouveautés</Button>
          </div>
        </div>

        {/* grid */}
        <div style={{
          background: '#fff', borderRadius: 16, overflow: 'hidden',
          border: `1px solid ${INKU.border}`, marginBottom: 24,
        }}>
          {/* head */}
          <div style={{
            display: 'grid', gridTemplateColumns: '110px repeat(7, 1fr)',
            background: INKU.surface, borderBottom: `1px solid ${INKU.border}`,
          }}>
            <div />
            {CAL_DAYS.map((d, i) => (
              <div key={i} style={{
                padding: '16px 12px', textAlign: 'center',
                fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 13,
                color: INKU.deep, letterSpacing: '0.06em', textTransform: 'uppercase',
                borderLeft: i === 0 ? 'none' : `1px solid ${INKU.border}`,
              }}>
                <div style={{ color: INKU.neutral, fontSize: 11, fontWeight: 600 }}>{d.name}</div>
                <div style={{ fontSize: 18, marginTop: 2, color: INKU.ink }}>{d.date}</div>
              </div>
            ))}
          </div>
          {/* rows */}
          {CAL_TIMES.map((t, ti) => (
            <div key={t} style={{
              display: 'grid', gridTemplateColumns: '110px repeat(7, 1fr)',
              borderTop: ti === 0 ? 'none' : `1px solid ${INKU.border}`,
            }}>
              <div style={{
                padding: '16px 14px',
                fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 13,
                color: INKU.neutral, textAlign: 'right', textTransform: 'uppercase', letterSpacing: '0.08em',
                background: INKU.surface, borderRight: `1px solid ${INKU.border}`,
              }}>{t}</div>
              {CAL_GRID[ti].map((cell, ci) => (
                <div key={ci} style={{
                  padding: 10, minHeight: 110,
                  borderLeft: ci === 0 ? 'none' : `1px solid ${INKU.border}`,
                }}>
                  {cell.map((ep, i) => <EpisodeChip key={i} ep={ep} />)}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* legend */}
        <div style={{ display: 'flex', gap: 22, flexWrap: 'wrap', marginBottom: 80, fontFamily: "'Outfit',sans-serif", fontSize: 13, color: INKU.ink }}>
          <LegendDot color={INKU.magenta} label="Nouveauté de la saison" />
          <LegendDot color="rgba(153,102,204,0.5)" label="Suite — en cours" />
          <LegendDot color="rgba(255,224,102,0.7)" label="Très attendu" />
          <LegendDot color="#fff" border label="Au programme" />
        </div>

        <SectionHeader kicker="Coup d'oeil" title="Les highlights du printemps" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginBottom: 80 }}>
          {SEASON_HIGHLIGHTS.map((h, i) => (
            <article key={i} style={{
              background: '#fff', border: `0.5px solid ${INKU.border}`, borderRadius: 12, overflow: 'hidden',
            }}>
              <CoverArt seed={h.title} ratio="3/4" />
              <div style={{ padding: 16 }}>
                <Kicker color={h.tag === 'NOUVEAU' ? INKU.magenta : INKU.violet}>{h.tag}</Kicker>
                <h4 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 18, color: INKU.ink, margin: '8px 0 8px', lineHeight: 1.2 }}>{h.title}</h4>
                <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12, color: INKU.neutral }}>{h.studio} · {h.day}</div>
              </div>
            </article>
          ))}
        </div>

        <section id="newsletter" style={{ marginBottom: 24 }}>
          <NewsletterBlock variant="hero" onSubmit={onNewsletter} />
        </section>
      </div>
      <Footer onNav={onNav} onNewsletter={onNewsletter} />
    </main>
  );
}

function LegendDot({ color, label, border }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
      <span style={{
        width: 14, height: 14, borderRadius: 4,
        background: color,
        border: border ? `1px solid ${INKU.border}` : 'none',
      }} />
      {label}
    </span>
  );
}

function A2MPage({ onNav, onNewsletter }) {
  const [search, setSearch] = React.useState('');
  const [filter, setFilter] = React.useState('Tous');
  const filters = ['Tous', 'Shōnen', 'Seinen', 'Shōjo', 'Anime fini', 'Anime en pause'];
  const filtered = A2M_LIST.filter(r => r.anime.title.toLowerCase().includes(search.toLowerCase()));
  return (
    <main style={{ background: '#fff' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '40px 32px 0' }}>
        <header style={{ marginBottom: 40 }}>
          <Kicker style={{ display: 'block', marginBottom: 12 }}>Outil exclusif INKU</Kicker>
          <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 56, color: INKU.deep, margin: '0 0 16px', letterSpacing: '-0.02em' }}>
            Reprendre en manga<br/>après l'anime.
          </h1>
          <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 17, lineHeight: 1.5, color: INKU.neutral, margin: '0 0 32px', maxWidth: 640 }}>
            Tu finis un anime, on te dit exactement à quel <strong style={{ color: INKU.ink }}>tome</strong> et quel <strong style={{ color: INKU.ink }}>chapitre</strong> reprendre — avec un résumé d'arc, sans spoil.
          </p>
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr auto', gap: 12,
            background: INKU.surface, borderRadius: 14, padding: 14,
            border: `1px solid ${INKU.border}`, marginBottom: 20,
          }}>
            <div style={{ position: 'relative' }}>
              <Icon name="search" size={20} color={INKU.neutral} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
              <input value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="cherche un anime — ex. Jujutsu Kaisen, Demon Slayer…" style={{
                width: '100%', height: 48, paddingLeft: 46, paddingRight: 16,
                border: `1.5px solid ${INKU.border}`, borderRadius: 10,
                fontFamily: "'Outfit',sans-serif", fontSize: 16, background: '#fff',
                outline: 'none', color: INKU.ink,
              }} />
            </div>
            <Button variant="primary" size="md">Trouver</Button>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {filters.map(f => (
              <button key={f} onClick={() => setFilter(f)} style={{
                fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: 13,
                padding: '7px 14px', borderRadius: 999,
                border: filter === f ? 'none' : `1px solid ${INKU.border}`,
                background: filter === f ? INKU.deep : '#fff',
                color: filter === f ? '#fff' : INKU.deep, cursor: 'pointer',
              }}>{f}</button>
            ))}
          </div>
        </header>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 80 }}>
          {filtered.map((row, i) => <A2MRow key={i} row={row} />)}
          {filtered.length === 0 && (
            <div style={{ padding: '60px 0', textAlign: 'center', color: INKU.neutral, fontFamily: "'Outfit',sans-serif" }}>
              Aucun résultat. Essaie un autre titre.
            </div>
          )}
        </div>

        {/* Suggest */}
        <section style={{
          padding: '32px 40px', borderRadius: 16,
          background: INKU.surface, border: `1px dashed ${INKU.violet}`,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32,
          marginBottom: 80,
        }}>
          <div>
            <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 24, color: INKU.deep, margin: '0 0 6px' }}>
              Manque un titre dans la liste ?
            </h3>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 15, color: INKU.neutral, margin: 0 }}>
              Suggère-nous un anime — la rédac' l'ajoute en moyenne sous 72h.
            </p>
          </div>
          <Button variant="secondary"><Icon name="plus" size={16} color={INKU.magenta} />Suggérer un titre</Button>
        </section>

        <section id="newsletter" style={{ marginBottom: 24 }}>
          <NewsletterBlock variant="hero" onSubmit={onNewsletter} />
        </section>
      </div>
      <Footer onNav={onNav} onNewsletter={onNewsletter} />
    </main>
  );
}

function AboutPage({ onNav, onNewsletter }) {
  return (
    <main style={{ background: '#fff' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '40px 32px 0' }}>

        {/* Hero */}
        <section style={{
          display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 64,
          alignItems: 'center', padding: '60px 0 80px',
        }}>
          <div>
            <Kicker style={{ display: 'block', marginBottom: 16 }}>Notre histoire</Kicker>
            <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 64, color: INKU.deep, margin: '0 0 24px', letterSpacing: '-0.025em', lineHeight: 1 }}>
              On écrit sur l'anime<br />comme on en parle entre fans.
            </h1>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 18, lineHeight: 1.6, color: INKU.ink, margin: '0 0 18px' }}>
              INKU, c'est une rédac qui aime <em style={{ color: INKU.magenta, fontStyle: 'normal', fontWeight: 600 }}>vraiment trop</em> l'anime. On écrit pour les fans qui dévorent un épisode dès qu'il sort, qui s'engueulent (gentiment) sur Twitter à propos du dernier Frieren, et qui veulent une source qui parle leur langue.
            </p>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 16, lineHeight: 1.6, color: INKU.neutral, margin: '0 0 32px' }}>
              Pas d'avis tièdes, pas de top 10 SEO. Que des reviews honnêtes, des dossiers fouillés, des interviews, et un calendrier qui fonctionne vraiment.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              <Button variant="primary" size="lg" onClick={onNewsletter}>S'abonner à la newsletter</Button>
              <Button variant="secondary" size="lg" onClick={() => onNav('news')}>Lire les dernières news</Button>
            </div>
          </div>
          <div style={{
            position: 'relative', borderRadius: 24,
            background: `linear-gradient(135deg, ${INKU.surface} 0%, #FFE5F2 100%)`,
            padding: 32, textAlign: 'center',
          }}>
            <img src="assets/mascot-inku.png" alt="Inku la pieuvre" style={{ height: 280, objectFit: 'contain' }} />
            <div style={{ marginTop: 16 }}>
              <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 20, color: INKU.deep, margin: '0 0 4px' }}>Inku, la pieuvre</h3>
              <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: INKU.neutral, margin: 0 }}>Notre rédactrice en chef officieuse, et le visage du site.</p>
            </div>
          </div>
        </section>

        {/* Numbers */}
        <section style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0,
          background: INKU.deep, borderRadius: 20, color: '#fff',
          padding: '48px 24px', marginBottom: 96,
        }}>
          {[
            { num: '2024', label: "Année de lancement", sub: "Un soir d'été, à Lyon." },
            { num: '12', label: "Rédacteurs", sub: "+ 40 contributeurs ponctuels." },
            { num: '843', label: "Reviews publiées", sub: "Et 0 article sponsorisé." },
            { num: '15K', label: "Lecteurs/semaine", sub: "Merci à toi 🐙" },
          ].map((s, i) => (
            <div key={i} style={{ borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.15)', padding: '0 32px' }}>
              <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 56, color: INKU.rose, lineHeight: 1, margin: '0 0 12px', letterSpacing: '-0.02em' }}>{s.num}</div>
              <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 18, color: '#fff', margin: '0 0 4px' }}>{s.label}</div>
              <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>{s.sub}</div>
            </div>
          ))}
        </section>

        {/* Values */}
        <section style={{ marginBottom: 96 }}>
          <SectionHeader kicker="Ce qu'on défend" title="Trois principes, pas négociables." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              { icon: 'sparkle', color: INKU.magenta, title: 'Honnêteté radicale',
                text: "Si on n'a pas aimé, on le dit. Pas de 7/10 mou pour ne fâcher personne. Et chaque avis est signé." },
              { icon: 'book', color: INKU.violet, title: 'Pas de spoil, jamais',
                text: "Nos reviews respectent l'expérience du spectateur. Tout spoil est marqué, encadré, et toujours optionnel." },
              { icon: 'mail', color: INKU.deep, title: "Communauté d'abord",
                text: "Pas de pop-up agressifs, pas de paywall. La newsletter et les commentaires sont ouverts à tous." },
            ].map((v, i) => (
              <div key={i} style={{ background: '#fff', border: `0.5px solid ${INKU.border}`, borderRadius: 16, padding: 32 }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 14,
                  background: `${v.color}15`,
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 20,
                }}>
                  <Icon name={v.icon} size={26} color={v.color} strokeWidth={2} />
                </div>
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 22, color: INKU.deep, margin: '0 0 10px' }}>{v.title}</h3>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 15, lineHeight: 1.55, color: INKU.neutral, margin: 0 }}>{v.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section style={{ marginBottom: 96 }}>
          <SectionHeader kicker="Qui écrit ?" title="L'équipe INKU" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {TEAM.map((m, i) => {
              const initials = m.name.split(' ').map(w => w[0]).slice(0,2).join('');
              return (
                <article key={i} style={{ background: '#fff', border: `0.5px solid ${INKU.border}`, borderRadius: 14, padding: 24, textAlign: 'center' }}>
                  <div style={{
                    width: 96, height: 96, borderRadius: '50%',
                    background: `linear-gradient(135deg, hsl(${seedHue(m.name)} 70% 55%), hsl(${(seedHue(m.name)+55)%360} 65% 40%))`,
                    margin: '0 auto 16px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff', fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 28,
                  }}>{initials}</div>
                  <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 18, color: INKU.ink, margin: '0 0 4px' }}>{m.name}</h3>
                  <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: INKU.magenta, fontWeight: 600, marginBottom: 10 }}>{m.role}</div>
                  <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, lineHeight: 1.45, color: INKU.neutral, margin: 0 }}>{m.bio}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="newsletter" style={{ marginBottom: 24 }}>
          <NewsletterBlock variant="hero" onSubmit={onNewsletter} />
        </section>
      </div>
      <Footer onNav={onNav} onNewsletter={onNewsletter} />
    </main>
  );
}

Object.assign(window, { HomePage, NewsPage, CalendarPage, A2MPage, AboutPage });
