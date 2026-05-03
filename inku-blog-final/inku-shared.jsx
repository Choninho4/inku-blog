// INKU Hi-Fi — Shared utilities + chrome (Nav, Footer, Newsletter)

const INKU = {
  magenta: '#D02886',
  rose: '#FF5FB3',
  violet: '#9966CC',
  deep: '#54218E',
  ink: '#1A1A2E',
  surface: '#F5F5F7',
  border: '#E8E8F0',
  white: '#FFFFFF',
  neutral: '#767680',
  success: '#4CAF50',
  info: '#2563EB',
  error: '#E63946',
};

// deterministic gradient per string seed (for placeholders)
function seedHue(s, offset = 0) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return (h + offset) % 360;
}
function placeholderGradient(seed) {
  const h1 = seedHue(seed, 0);
  const h2 = (h1 + 55) % 360;
  return `linear-gradient(135deg, hsl(${h1} 70% 55%) 0%, hsl(${h2} 65% 40%) 100%)`;
}

// Cover placeholder — gradient + diagonal stripes + subtle title
function CoverArt({ seed = 'inku', label, ratio = '16/9', children, style = {} }) {
  const grad = placeholderGradient(seed);
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      aspectRatio: ratio,
      background: grad,
      overflow: 'hidden',
      ...style,
    }}>
      {/* halftone-ish pattern */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.18) 1px, transparent 0)',
        backgroundSize: '14px 14px',
        mixBlendMode: 'soft-light',
        opacity: 0.7,
      }} />
      {/* diagonal sheen */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(115deg, transparent 35%, rgba(255,255,255,0.12) 50%, transparent 65%)',
      }} />
      {/* darken at bottom */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, transparent 50%, rgba(26,26,46,0.55) 100%)',
      }} />
      {label && (
        <div style={{
          position: 'absolute', left: 14, bottom: 12,
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700, fontSize: 11, letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.55)',
        }}>{label}</div>
      )}
      {children}
    </div>
  );
}

// Lucide-style stroke icon
function Icon({ name, size = 20, color = 'currentColor', strokeWidth = 1.75, style = {} }) {
  const props = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', style };
  switch (name) {
    case 'search': return <svg {...props}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>;
    case 'menu': return <svg {...props}><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></svg>;
    case 'bell': return <svg {...props}><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>;
    case 'arrow-right': return <svg {...props}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>;
    case 'arrow-left': return <svg {...props}><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>;
    case 'star': return <svg {...props}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"/></svg>;
    case 'star-fill': return <svg {...props} fill={color} stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"/></svg>;
    case 'clock': return <svg {...props}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
    case 'calendar': return <svg {...props}><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>;
    case 'book': return <svg {...props}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>;
    case 'play': return <svg {...props}><polygon points="6 3 20 12 6 21 6 3" fill={color} stroke={color}/></svg>;
    case 'mail': return <svg {...props}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>;
    case 'check': return <svg {...props}><polyline points="20 6 9 17 4 12"/></svg>;
    case 'sparkle': return <svg {...props}><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/></svg>;
    case 'plus': return <svg {...props}><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>;
    case 'twitter': return <svg {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>;
    case 'instagram': return <svg {...props}><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>;
    case 'discord': return <svg {...props}><path d="M19 4a16 16 0 0 0-4-1l-.2.4A11 11 0 0 1 18 6a14 14 0 0 0-12 0 11 11 0 0 1 3.2-2.6L9 3a16 16 0 0 0-4 1A20 20 0 0 0 2 16a14 14 0 0 0 5 3l1-2a11 11 0 0 1-3-1 16 16 0 0 0 14 0 11 11 0 0 1-3 1l1 2a14 14 0 0 0 5-3 20 20 0 0 0-3-12zM9 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>;
    default: return null;
  }
}

// Star rating display (1..5)
function StarRating({ score, size = 14, color = INKU.magenta }) {
  const full = Math.floor(score);
  const half = score % 1 >= 0.5;
  return (
    <span style={{ display: 'inline-flex', gap: 2, alignItems: 'center', color }}>
      {[0,1,2,3,4].map(i => (
        <Icon key={i} name={i < full ? 'star-fill' : (i === full && half ? 'star' : 'star')} size={size} color={i < full || (i === full && half) ? color : '#E8E8F0'} />
      ))}
      <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: size, color: INKU.ink, marginLeft: 4 }}>{score.toFixed(1)}</span>
    </span>
  );
}

// Kicker — small caps category
function Kicker({ children, color = INKU.magenta, style = {} }) {
  return (
    <span style={{
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color,
      ...style,
    }}>{children}</span>
  );
}

// Pill / Tag
function Tag({ children, variant = 'default', style = {} }) {
  const variants = {
    default: { bg: INKU.surface, fg: INKU.deep, border: 'transparent' },
    ongoing: { bg: 'rgba(37,99,235,0.1)', fg: INKU.info, border: INKU.info },
    complete: { bg: 'rgba(76,175,80,0.1)', fg: INKU.success, border: INKU.success },
    new: { bg: INKU.magenta, fg: '#fff', border: INKU.magenta },
    soft: { bg: 'rgba(208,40,134,0.08)', fg: INKU.magenta, border: 'transparent' },
  };
  const v = variants[variant];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 4,
      fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 12,
      padding: '4px 10px', borderRadius: 16,
      background: v.bg, color: v.fg, border: `1px solid ${v.border}`,
      ...style,
    }}>{children}</span>
  );
}

// Button
function Button({ children, variant = 'primary', size = 'md', onClick, style = {}, ...rest }) {
  const sizes = {
    sm: { padV: 8, padH: 14, fs: 13 },
    md: { padV: 11, padH: 22, fs: 14 },
    lg: { padV: 14, padH: 28, fs: 15 },
  };
  const s = sizes[size];
  const base = {
    fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
    fontSize: s.fs, letterSpacing: '0.01em',
    padding: `${s.padV}px ${s.padH}px`, borderRadius: 8,
    border: 'none', cursor: 'pointer',
    display: 'inline-flex', alignItems: 'center', gap: 8,
    transition: 'opacity 100ms ease-out, transform 100ms ease-out, background 200ms ease-out',
  };
  const variants = {
    primary: { background: INKU.magenta, color: '#fff' },
    secondary: { background: 'transparent', color: INKU.magenta, border: `2px solid ${INKU.magenta}`, padding: `${s.padV - 2}px ${s.padH - 2}px` },
    tertiary: { background: INKU.surface, color: INKU.deep },
    ghost: { background: 'transparent', color: INKU.ink },
  };
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{
        ...base, ...variants[variant],
        opacity: hover && variant === 'primary' ? 0.92 : 1,
        transform: press ? 'scale(0.98)' : 'none',
        ...style,
      }}
      {...rest}
    >{children}</button>
  );
}

// Logo (wordmark)
function Logo({ height = 28, onClick }) {
  return (
    <img src="assets/logo-wordmark.png" alt="INKU" style={{ height, cursor: onClick ? 'pointer' : 'default', display: 'block' }} onClick={onClick} />
  );
}

// Top NavBar — used on every page
function NavBar({ activePage, onNav, onNewsletter }) {
  const items = [
    { id: 'home',     label: 'Accueil' },
    { id: 'news',     label: 'News' },
    { id: 'calendar', label: 'Calendrier' },
    { id: 'a2m',      label: 'Anime → Manga' },
    { id: 'about',    label: 'À propos' },
  ];
  const [searchFocus, setSearchFocus] = React.useState(false);
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 90,
      background: 'rgba(255,255,255,0.92)',
      backdropFilter: 'saturate(140%) blur(14px)',
      WebkitBackdropFilter: 'saturate(140%) blur(14px)',
      borderBottom: `0.5px solid ${INKU.border}`,
    }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto',
        padding: '0 32px', height: 72,
        display: 'flex', alignItems: 'center', gap: 32,
      }}>
        <Logo height={26} onClick={() => onNav('home')} />
        <nav style={{ display: 'flex', gap: 2 }}>
          {items.map(it => {
            const active = activePage === it.id;
            return (
              <button key={it.id} onClick={() => onNav(it.id)} style={{
                fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 14,
                padding: '8px 14px', borderRadius: 8,
                background: 'transparent', border: 'none', cursor: 'pointer',
                color: active ? INKU.magenta : INKU.ink,
                position: 'relative',
                transition: 'color 150ms',
              }}>
                {it.label}
                {active && <span style={{
                  position: 'absolute', bottom: -1, left: 14, right: 14, height: 2,
                  background: INKU.magenta, borderRadius: 2,
                }} />}
              </button>
            );
          })}
        </nav>
        <div style={{ flex: 1 }} />
        <div style={{ position: 'relative', width: 240 }}>
          <input
            placeholder="Rechercher…"
            onFocus={() => setSearchFocus(true)}
            onBlur={() => setSearchFocus(false)}
            style={{
              width: '100%', height: 38, paddingLeft: 36, paddingRight: 12,
              borderRadius: 999,
              border: `1.5px solid ${searchFocus ? INKU.magenta : INKU.border}`,
              fontFamily: "'Outfit', sans-serif", fontSize: 13,
              background: searchFocus ? '#fff' : INKU.surface,
              outline: 'none', transition: 'border 150ms, background 150ms',
              color: INKU.ink,
            }}
          />
          <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: INKU.neutral, display: 'inline-flex' }}>
            <Icon name="search" size={16} />
          </span>
        </div>
        <Button variant="primary" size="sm" onClick={onNewsletter}>
          <Icon name="mail" size={14} color="#fff" />
          Newsletter
        </Button>
      </div>
    </header>
  );
}

// Newsletter block (hero / inline / footer variants)
function NewsletterBlock({ variant = 'hero', onSubmit }) {
  const [email, setEmail] = React.useState('');
  const submit = (e) => { e.preventDefault(); if (onSubmit) onSubmit(email); };
  if (variant === 'inline') {
    return (
      <form onSubmit={submit} style={{
        display: 'flex', gap: 0,
        border: `1.5px solid ${INKU.border}`, borderRadius: 8,
        background: '#fff', overflow: 'hidden',
      }}>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" required placeholder="ton@email.com"
          style={{ flex: 1, border: 'none', outline: 'none', padding: '12px 14px', fontFamily: "'Outfit',sans-serif", fontSize: 14, background: 'transparent', color: INKU.ink }} />
        <button type="submit" style={{
          background: INKU.magenta, color: '#fff', border: 'none',
          padding: '0 20px', fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 13,
          cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.06em',
        }}>OK</button>
      </form>
    );
  }
  return (
    <section style={{
      position: 'relative',
      borderRadius: 20,
      padding: '48px 56px',
      overflow: 'hidden',
      background: `linear-gradient(135deg, ${INKU.deep} 0%, ${INKU.magenta} 60%, ${INKU.rose} 100%)`,
      color: '#fff',
    }}>
      {/* tentacle decoration */}
      <img src="assets/logo-tentacle-mark.png" alt=""
        style={{ position: 'absolute', right: -40, bottom: -60, height: 320, opacity: 0.18, transform: 'rotate(-12deg)' }} />
      <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 48, alignItems: 'center' }}>
        <div>
          <Kicker color="rgba(255,255,255,0.7)">La newsletter INKU</Kicker>
          <h2 style={{
            fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700,
            fontSize: 44, lineHeight: 1.05, color: '#fff',
            margin: '14px 0 14px',
            letterSpacing: '-0.01em',
          }}>L'anime, chaque dimanche,<br/>dans ta boîte mail.</h2>
          <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 16, lineHeight: 1.55, color: 'rgba(255,255,255,0.85)', maxWidth: 460, margin: '0 0 24px' }}>
            Sorties, reviews, dossiers, coups de coeur de la rédac. Un seul mail. Désinscription en un clic.
          </p>
          <form onSubmit={submit} style={{
            display: 'flex', gap: 8, background: 'rgba(255,255,255,0.12)',
            border: '1.5px solid rgba(255,255,255,0.3)', borderRadius: 10,
            padding: 6, maxWidth: 460,
          }}>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" required placeholder="ton@email.com"
              style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', color: '#fff',
                padding: '10px 12px', fontFamily: "'Outfit',sans-serif", fontSize: 15 }} />
            <button type="submit" style={{
              background: '#fff', color: INKU.magenta, border: 'none',
              padding: '10px 22px', borderRadius: 8, cursor: 'pointer',
              fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 14,
              display: 'inline-flex', alignItems: 'center', gap: 8,
            }}>Je m'inscris <Icon name="arrow-right" size={14} color={INKU.magenta} /></button>
          </form>
          <div style={{ marginTop: 16, fontSize: 12, color: 'rgba(255,255,255,0.7)', fontFamily: "'Outfit',sans-serif" }}>
            14 832 fans déjà inscrits · zéro spam
          </div>
        </div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            'Le récap des sorties de la semaine',
            'Les reviews avant tout le monde',
            'Une pépite manga choisie par la rédac',
            'Un dossier mensuel exclusif',
          ].map((t, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, fontFamily: "'Outfit',sans-serif", fontSize: 15, color: '#fff' }}>
              <span style={{
                width: 28, height: 28, borderRadius: '50%',
                background: 'rgba(255,255,255,0.2)',
                border: '1.5px solid rgba(255,255,255,0.5)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <Icon name="check" size={14} color="#fff" strokeWidth={2.5} />
              </span>
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// Footer
function Footer({ onNav, onNewsletter }) {
  return (
    <footer style={{
      background: INKU.ink,
      color: 'rgba(255,255,255,0.75)',
      paddingTop: 56,
      paddingBottom: 24,
      marginTop: 96,
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr 1.2fr', gap: 48, marginBottom: 48 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <img src="assets/logo-k-mark.png" alt="" style={{ height: 32 }} />
              <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 22, letterSpacing: '0.04em', color: '#fff' }}>INKU</span>
            </div>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 14, lineHeight: 1.6, maxWidth: 280 }}>
              La rédac' anime qui ne vous explique pas ce qu'est un shōnen. On parle entre fans.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
              {['twitter','instagram','discord'].map(name => (
                <a key={name} href="#" onClick={(e)=>e.preventDefault()} style={{
                  width: 36, height: 36, borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.2)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,0.7)', textDecoration: 'none',
                  transition: 'border 150ms, color 150ms',
                }}>
                  <Icon name={name} size={16} />
                </a>
              ))}
            </div>
          </div>
          <FooterCol title="Naviguer" items={[
            { label: 'Accueil', onClick: () => onNav('home') },
            { label: 'News', onClick: () => onNav('news') },
            { label: 'Calendrier', onClick: () => onNav('calendar') },
            { label: 'Anime → Manga', onClick: () => onNav('a2m') },
            { label: 'À propos', onClick: () => onNav('about') },
          ]} />
          <FooterCol title="Catégories" items={[
            { label: 'Reviews' }, { label: 'Sorties' }, { label: 'Industrie' }, { label: 'Interviews' }, { label: 'Manga' },
          ]} />
          <div>
            <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 13, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 16 }}>Newsletter</div>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, lineHeight: 1.5, marginBottom: 14 }}>Le récap du dimanche. Un mail, c'est tout.</p>
            <NewsletterBlock variant="inline" onSubmit={onNewsletter} />
          </div>
        </div>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.1)',
          fontFamily: "'Outfit',sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.5)',
        }}>
          <span>© INKU 2026 — fait avec ♡ et beaucoup de café</span>
          <span>Mentions légales · Politique de confidentialité · Contact</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }) {
  return (
    <div>
      <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 13, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 16 }}>{title}</div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map((it, i) => (
          <li key={i}><a href="#" onClick={(e)=>{e.preventDefault(); it.onClick && it.onClick();}} style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontFamily: "'Outfit',sans-serif", fontSize: 14 }}>{it.label}</a></li>
        ))}
      </ul>
    </div>
  );
}

// Section header w/ optional "voir tout" link
function SectionHeader({ kicker, title, action, actionLabel = 'Voir tout', style = {} }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
      marginBottom: 24, gap: 24,
      ...style,
    }}>
      <div>
        {kicker && <Kicker color={INKU.magenta} style={{ display: 'block', marginBottom: 8 }}>{kicker}</Kicker>}
        <h2 style={{
          fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700,
          fontSize: 36, lineHeight: 1.05, color: INKU.deep,
          margin: 0, letterSpacing: '-0.015em',
        }}>{title}</h2>
      </div>
      {action && (
        <button onClick={action} style={{
          fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 14,
          background: 'transparent', border: 'none', cursor: 'pointer',
          color: INKU.magenta, display: 'inline-flex', alignItems: 'center', gap: 6,
        }}>{actionLabel} <Icon name="arrow-right" size={14} color={INKU.magenta} /></button>
      )}
    </div>
  );
}

Object.assign(window, {
  INKU, placeholderGradient, seedHue,
  CoverArt, Icon, StarRating, Kicker, Tag, Button,
  Logo, NavBar, NewsletterBlock, Footer, FooterCol, SectionHeader,
});
