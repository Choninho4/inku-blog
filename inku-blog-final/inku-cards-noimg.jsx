// INKU Hi-Fi — Card components

function HeroFeatured({ article, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <article
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative',
        borderRadius: 16,
        overflow: 'hidden',
        cursor: 'pointer',
        background: '#000',
        height: '100%',
        minHeight: 540,
        transform: hover ? 'translateY(-4px)' : 'none',
        transition: 'transform 220ms ease-out, box-shadow 220ms ease-out',
        boxShadow: hover ? '0 24px 60px rgba(208,40,134,0.18)' : '0 6px 20px rgba(26,26,46,0.06)',
      }}
    >
      <CoverArt seed={article.title} ratio="auto" style={{ position: 'absolute', inset: 0, height: '100%' }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(26,26,46,0.55)',
      }} />
      <div style={{
        position: 'absolute', left: 32, right: 32, bottom: 32,
        color: '#fff',
      }}>
        <div style={{ display: 'flex', gap: 8, marginBottom: 16, alignItems: 'center' }}>
          <Tag variant="new">{article.category}</Tag>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" }}>
            {article.time} · {article.readMin} min
          </span>
        </div>
        <h1 style={{
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
          fontWeight: 700,
          fontSize: 44,
          lineHeight: 1.05,
          color: '#fff',
          margin: '0 0 16px',
          letterSpacing: '-0.02em',
          maxWidth: 720,
        }}>{article.title}</h1>
        <p style={{
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
          fontSize: 16,
          lineHeight: 1.5,
          color: 'rgba(255,255,255,0.85)',
          margin: '0 0 22px',
          maxWidth: 600,
        }}>{article.excerpt}</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{
            width: 36, height: 36, borderRadius: '50%',
            background: INKU.magenta,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif", fontWeight: 700, color: '#fff', fontSize: 13,
          }}>{(article.author || 'IK').split(' ').map(w => w[0]).slice(0,2).join('')}</div>
          <div>
            <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif", fontSize: 14, fontWeight: 600, color: '#fff' }}>{article.author || "L'équipe INKU"}</div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" }}>{article.authorRole || 'Rédaction'}</div>
          </div>
        </div>
      </div>
    </article>
  );
}

function NewsCardSide({ article, onClick }) {
  const [hov, setHov] = React.useState(false);
  return (
    <article
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: '#fff',
        border: `0.5px solid ${INKU.border}`,
        borderRadius: 12,
        overflow: 'hidden',
        cursor: 'pointer',
        display: 'grid',
        gridTemplateColumns: '140px 1fr',
        flex: 1,
        minHeight: 0,
        transform: hov ? 'translateY(-3px)' : 'none',
        transition: 'transform 200ms ease-out, box-shadow 200ms ease-out',
        boxShadow: hov ? '0 12px 28px rgba(208,40,134,0.1)' : 'none',
      }}
    >
      <CoverArt seed={article.title} ratio="auto" style={{ height: '100%' }} />
      <div style={{ padding: '18px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <Kicker color={INKU.violet}>{article.category}</Kicker>
          <h3 style={{
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif", fontWeight: 700,
            fontSize: 19, lineHeight: 1.2, color: INKU.ink,
            margin: '8px 0 8px', letterSpacing: '-0.005em',
          }}>{article.title}</h3>
          <p style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif", fontSize: 13, lineHeight: 1.5, color: INKU.neutral, margin: 0,
            display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {article.excerpt}
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 14, color: INKU.neutral, fontSize: 11, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" }}>
          <Icon name="clock" size={12} color={INKU.neutral} />
          {article.time}
          <span>·</span>
          {article.readMin} min
        </div>
      </div>
    </article>
  );
}

function NewsCardGrid({ article, onClick }) {
  const [hov, setHov] = React.useState(false);
  return (
    <article
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: '#fff',
        border: `0.5px solid ${INKU.border}`,
        borderRadius: 12,
        overflow: 'hidden',
        cursor: 'pointer',
        display: 'flex', flexDirection: 'column',
        transform: hov ? 'translateY(-4px)' : 'none',
        transition: 'transform 200ms ease-out, box-shadow 200ms ease-out',
        boxShadow: hov ? '0 12px 28px rgba(208,40,134,0.12)' : 'none',
      }}
    >
      <CoverArt seed={article.title} ratio="16/10" />
      <div style={{ padding: 18, display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
        <Kicker>{article.category}</Kicker>
        <h3 style={{
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif", fontWeight: 700,
          fontSize: 18, lineHeight: 1.2, color: INKU.ink,
          margin: 0, letterSpacing: '-0.005em',
        }}>{article.title}</h3>
        {article.excerpt && (
          <p style={{
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif", fontSize: 13, lineHeight: 1.5,
            color: INKU.neutral, margin: 0,
            display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
          }}>{article.excerpt}</p>
        )}
        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 8, color: INKU.neutral, fontSize: 11, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" }}>
          <Icon name="clock" size={12} color={INKU.neutral} />
          {article.time}
          <span>·</span>
          {article.readMin} min
        </div>
      </div>
    </article>
  );
}

function NewsRow({ article, onClick }) {
  const [hov, setHov] = React.useState(false);
  return (
    <article
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'grid', gridTemplateColumns: '220px 1fr',
        gap: 24, padding: '24px 0',
        borderBottom: `1px solid ${INKU.border}`,
        cursor: 'pointer',
      }}
    >
      <CoverArt seed={article.title} ratio="16/10" style={{ borderRadius: 10 }} />
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <Kicker>{article.category}</Kicker>
          <span style={{ color: INKU.neutral, fontSize: 12, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" }}>·</span>
          <span style={{ color: INKU.neutral, fontSize: 12, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" }}>{article.time}</span>
          <span style={{ color: INKU.neutral, fontSize: 12, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" }}>·</span>
          <span style={{ color: INKU.neutral, fontSize: 12, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" }}>{article.readMin} min</span>
        </div>
        <h3 style={{
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif", fontWeight: 700,
          fontSize: 24, lineHeight: 1.15, color: INKU.ink,
          margin: '0 0 10px', letterSpacing: '-0.01em',
          textDecoration: hov ? `underline ${INKU.magenta}` : 'none',
          textUnderlineOffset: 4,
        }}>{article.title}</h3>
        <p style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif", fontSize: 15, lineHeight: 1.5, color: INKU.neutral, margin: 0,
          display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {article.excerpt}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 12 }}>
          <div style={{
            width: 24, height: 24, borderRadius: '50%',
            background: INKU.magenta,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif", fontWeight: 700, color: '#fff', fontSize: 10,
          }}>{(article.author || 'IK').split(' ').map(w => w[0]).slice(0,2).join('')}</div>
          <span style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif", fontSize: 12, color: INKU.ink, fontWeight: 600 }}>{article.author || "L'équipe INKU"}</span>
        </div>
      </div>
    </article>
  );
}

// Calendar episode chip
function EpisodeChip({ ep, onClick }) {
  const variantStyles = {
    new: { bg: INKU.magenta, fg: '#fff', border: INKU.magenta },
    suite: { bg: 'rgba(153,102,204,0.14)', fg: INKU.deep, border: 'rgba(153,102,204,0.4)' },
    standard: { bg: '#fff', fg: INKU.ink, border: INKU.border },
    big: { bg: 'rgba(255,224,102,0.45)', fg: INKU.ink, border: '#E8C952' },
  };
  const v = variantStyles[ep.variant] || variantStyles.standard;
  const [hov, setHov] = React.useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={()=>setHov(true)}
      onMouseLeave={()=>setHov(false)}
      style={{
        display: 'block',
        padding: '8px 10px',
        borderRadius: 8,
        background: v.bg,
        color: v.fg,
        border: `1px solid ${v.border}`,
        cursor: 'pointer',
        marginBottom: 6,
        transform: hov ? 'translateY(-1px)' : 'none',
        transition: 'transform 150ms ease-out',
      }}
    >
      <div style={{
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: 13,
        lineHeight: 1.2, color: v.fg,
        whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
      }}>{ep.title}</div>
      <div style={{
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif", fontSize: 10,
        color: ep.variant === 'new' ? 'rgba(255,255,255,0.85)' : INKU.neutral,
        marginTop: 2,
      }}>ép. {ep.episode} · {ep.time}</div>
    </div>
  );
}

// Anime → Manga row
function A2MRow({ row, onClick }) {
  const [hov, setHov] = React.useState(false);
  return (
    <article
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 64px 1fr',
        gap: 24,
        padding: 24,
        background: '#fff',
        border: `0.5px solid ${INKU.border}`,
        borderRadius: 16,
        cursor: 'pointer',
        transform: hov ? 'translateY(-3px)' : 'none',
        transition: 'transform 200ms ease-out, box-shadow 200ms ease-out',
        boxShadow: hov ? '0 14px 32px rgba(208,40,134,0.1)' : 'none',
        alignItems: 'stretch',
      }}
    >
      {/* anime side */}
      <div style={{ display: 'grid', gridTemplateColumns: '88px 1fr', gap: 16, alignItems: 'center' }}>
        <CoverArt seed={row.anime.title} ratio="3/4" style={{ borderRadius: 8, height: 120 }} />
        <div>
          <Kicker color={INKU.neutral} style={{ display: 'block', marginBottom: 6 }}>Anime · {row.anime.status}</Kicker>
          <h3 style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: 20, color: INKU.ink, margin: '0 0 6px', lineHeight: 1.15 }}>
            {row.anime.title}
          </h3>
          <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif", fontSize: 13, color: INKU.neutral, marginBottom: 8 }}>
            <strong style={{ color: INKU.ink }}>Stop · ép. {row.anime.lastEp}</strong> — {row.anime.arcEnd}
          </div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {row.anime.tags.map((t, i) => <Tag key={i}>{t}</Tag>)}
          </div>
        </div>
      </div>

      {/* arrow */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative',
      }}>
        <div style={{
          width: 48, height: 48, borderRadius: '50%',
          background: INKU.magenta,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff',
        }}>
          <Icon name="arrow-right" size={22} color="#fff" strokeWidth={2.25} />
        </div>
      </div>

      {/* manga side */}
      <div style={{ display: 'grid', gridTemplateColumns: '88px 1fr', gap: 16, alignItems: 'center' }}>
        <CoverArt seed={row.manga.title + 'm'} ratio="3/4" style={{ borderRadius: 8, height: 120 }} />
        <div>
          <Kicker color={INKU.magenta} style={{ display: 'block', marginBottom: 6 }}>Manga · reprendre ici</Kicker>
          <h3 style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: 20, color: INKU.deep, margin: '0 0 6px', lineHeight: 1.15 }}>
            Tome {row.manga.tome} · ch. {row.manga.chapter}
          </h3>
          <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif", fontSize: 13, color: INKU.neutral, marginBottom: 8 }}>
            {row.manga.arcDesc}
          </div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {row.manga.tags.map((t, i) => <Tag key={i} variant={t.toLowerCase().includes('cours') ? 'ongoing' : t.toLowerCase().includes('terminé') ? 'complete' : 'default'}>{t}</Tag>)}
          </div>
        </div>
      </div>
    </article>
  );
}

Object.assign(window, {
  HeroFeatured, NewsCardSide, NewsCardGrid, NewsRow, EpisodeChip, A2MRow,
});
