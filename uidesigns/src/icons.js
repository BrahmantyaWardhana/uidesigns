const icons = {
  logo: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 12h4l2-5 4 10 2-5h6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  overview: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1.5" fill="none" stroke="currentColor" stroke-width="2"/>
      <rect x="14" y="3" width="7" height="7" rx="1.5" fill="none" stroke="currentColor" stroke-width="2"/>
      <rect x="3" y="14" width="7" height="7" rx="1.5" fill="none" stroke="currentColor" stroke-width="2"/>
      <rect x="14" y="14" width="7" height="7" rx="1.5" fill="none" stroke="currentColor" stroke-width="2"/>
    </svg>
  `,
  sales: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/>
      <path d="M9 10.2c0-1.2 1.2-2 3-2s3 .8 3 2-1.1 1.7-3 2c-1.9.3-3 1-3 2.2s1.2 2.1 3 2.1 3-.9 3-2.1" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <path d="M12 7.2v9.6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>
  `,
  transactions: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="5" y="3" width="14" height="18" rx="2.5" fill="none" stroke="currentColor" stroke-width="2"/>
      <path d="M9 8h6M9 12h6M9 16h4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>
  `,
  engagement: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 18V9M11 18V5M17 18v-7M4 20h16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  users: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="9" cy="8" r="3" fill="none" stroke="currentColor" stroke-width="2"/>
      <path d="M3 18c0-2.6 2.4-4.5 6-4.5s6 1.9 6 4.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <path d="M17 8h4M19 6v4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>
  `,
  search: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" stroke-width="2"/>
      <path d="M16 16l4.5 4.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>
  `,
  bell: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 10a5 5 0 1110 0v4l1.5 2.5H5.5L7 14.1V10z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
      <path d="M10 19a2 2 0 004 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>
  `,
  settings: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" stroke-width="2"/>
      <path d="M19 12l2-1.2-2-3.6-2.2.6a7.5 7.5 0 00-1.8-1l-.4-2.3h-4.2l-.4 2.3a7.5 7.5 0 00-1.8 1L5 7.2 3 10.8 5 12l-2 1.2 2 3.6 2.2-.6a7.5 7.5 0 001.8 1l.4 2.3h4.2l.4-2.3a7.5 7.5 0 001.8-1l2.2.6 2-3.6L19 12z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
    </svg>
  `,
  calendar: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="15" rx="2" fill="none" stroke="currentColor" stroke-width="2"/>
      <path d="M7.5 3v4M16.5 3v4M3.5 9.5h17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>
  `,
  chevron: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 10l4 4 4-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  download: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 4v10M8 10l4 4 4-4M5 18h14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  plus: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>
  `,
  filter: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 6h16l-6 7v5l-4-2v-3L4 6z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
    </svg>
  `,
  arrowUp: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17L17 7M9 7h8v8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  arrowDown: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 7l10 10M9 17h8V9" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  wallet: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 7h12a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2z" fill="none" stroke="currentColor" stroke-width="2"/>
      <path d="M16 11h5v4h-5a2 2 0 110-4z" fill="none" stroke="currentColor" stroke-width="2"/>
    </svg>
  `,
  clock: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2"/>
      <path d="M12 8v4l3 2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  mail: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="6" width="16" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="2"/>
      <path d="M5 8l7 5 7-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
    </svg>
  `,
  location: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 20s6-5.3 6-10a6 6 0 10-12 0c0 4.7 6 10 6 10z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
      <circle cx="12" cy="10" r="2" fill="none" stroke="currentColor" stroke-width="2"/>
    </svg>
  `,
  more: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="6" cy="12" r="1.7" fill="currentColor"/>
      <circle cx="12" cy="12" r="1.7" fill="currentColor"/>
      <circle cx="18" cy="12" r="1.7" fill="currentColor"/>
    </svg>
  `,
  book: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 5.5A2.5 2.5 0 017.5 3H20v16H7.5A2.5 2.5 0 015 16.5v-11z" fill="none" stroke="currentColor" stroke-width="2"/>
      <path d="M8 3v16M12 7h5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>
  `,
  note: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 4h9l4 4v12H6z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
      <path d="M15 4v4h4M9 12h6M9 16h6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>
  `,
  flag: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 20V5M7 5h10l-1.8 3L17 11H7" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
    </svg>
  `,
  refund: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2"/>
      <path d="M15 9l-6 6M9 9l6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>
  `,
  info: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2"/>
      <path d="M12 10v5M12 7.2h.01" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>
  `,
  card: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="6" width="18" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="2"/>
      <path d="M3 10h18" fill="none" stroke="currentColor" stroke-width="2"/>
    </svg>
  `,
  globe: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2"/>
      <path d="M4 12h16M12 4a13 13 0 010 16M12 4a13 13 0 000 16" fill="none" stroke="currentColor" stroke-width="2"/>
    </svg>
  `,
  activity: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 12h4l2-5 4 10 2-5h4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  user: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="3.5" fill="none" stroke="currentColor" stroke-width="2"/>
      <path d="M5 19c0-3 2.8-5 7-5s7 2 7 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>
  `,
}

export function icon(name) {
  return icons[name] || icons.overview
}
