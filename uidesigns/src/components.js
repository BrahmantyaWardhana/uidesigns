import { icon } from './icons'

export function avatar(label = 'AD') {
  return `<span class="avatar-chip">${label}</span>`
}

export function topbar({ title, leftExtras = '', rightExtras = '' }) {
  return `
    <header class="topbar">
      <div class="topbar-left">
        <h1 class="topbar-title">${title}</h1>
        ${leftExtras}
      </div>
      <div class="topbar-right">${rightExtras}</div>
    </header>
  `
}

export function toolbarSelect(label) {
  return `
    <button class="toolbar-pill">
      <span class="toolbar-icon">${icon('calendar')}</span>
      <span>${label}</span>
      <span class="toolbar-chevron">${icon('chevron')}</span>
    </button>
  `
}

export function toolbarSearch(placeholder) {
  return `
    <label class="toolbar-search">
      <span class="toolbar-search-icon">${icon('search')}</span>
      <input type="text" placeholder="${placeholder}" />
    </label>
  `
}

export function iconButton(name) {
  return `<button class="circle-button" aria-label="${name}">${icon(name)}</button>`
}

export function metricCard({ label, value, change, tone = 'up', iconName = 'activity' }) {
  const toneClass = tone === 'down' ? 'metric-change metric-change-down' : 'metric-change'
  const arrow = tone === 'down' ? 'arrowDown' : 'arrowUp'
  return `
    <article class="metric-card panel">
      <div class="metric-row">
        <span class="metric-icon">${icon(iconName)}</span>
        <span class="${toneClass}">
          <span class="metric-arrow">${icon(arrow)}</span>
          ${change}
        </span>
      </div>
      <p class="metric-label">${label}</p>
      <h3 class="metric-value">${value}</h3>
    </article>
  `
}

export function progressBar(value, compact = false) {
  return `
    <div class="progress-row ${compact ? 'progress-row-compact' : ''}">
      <div class="progress-track"><span class="progress-fill" style="width:${value}%"></span></div>
      <span class="progress-value">${value}%</span>
    </div>
  `
}

export function statusBadge(text, tone = 'neutral') {
  return `<span class="status-badge status-${tone}">${text}</span>`
}

export function panelHeader(title, subtitle = '', action = '') {
  return `
    <div class="panel-header">
      <div>
        <h3 class="panel-title">${title}</h3>
        ${subtitle ? `<p class="panel-subtitle">${subtitle}</p>` : ''}
      </div>
      ${action ? `<div class="panel-action">${action}</div>` : ''}
    </div>
  `
}

export function lineChart({ values, labels, yLabels, fill = 'rgba(49, 130, 246, 0.18)', stroke = '#3182f6' }) {
  const width = 760
  const height = 320
  const padX = 38
  const padTop = 18
  const padBottom = 36
  const chartHeight = height - padTop - padBottom
  const max = Math.max(...values)
  const stepX = (width - padX * 2) / (values.length - 1)
  const points = values.map((value, index) => {
    const x = padX + stepX * index
    const y = padTop + chartHeight - (value / max) * chartHeight
    return { x, y }
  })

  const linePath = points
    .map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x.toFixed(2)} ${point.y.toFixed(2)}`)
    .join(' ')
  const areaPath = `${linePath} L ${points.at(-1).x.toFixed(2)} ${height - padBottom} L ${points[0].x.toFixed(2)} ${height - padBottom} Z`
  const gridlines = yLabels
    .map((label, index) => {
      const ratio = index / (yLabels.length - 1)
      const y = padTop + chartHeight * ratio
      return `
        <line x1="${padX}" y1="${y}" x2="${width - padX}" y2="${y}" class="chart-gridline"/>
        <text x="0" y="${y + 5}" class="chart-axis-label">${label}</text>
      `
    })
    .join('')
  const xLabels = labels
    .map((label, index) => {
      const x = padX + stepX * index
      return `<text x="${x}" y="${height}" text-anchor="middle" class="chart-axis-label">${label}</text>`
    })
    .join('')

  return `
    <div class="line-chart">
      <svg viewBox="0 0 ${width} ${height}" preserveAspectRatio="none">
        ${gridlines}
        <path d="${areaPath}" fill="${fill}" />
        <path d="${linePath}" fill="none" stroke="${stroke}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
        ${xLabels}
      </svg>
    </div>
  `
}

export function barChart(labels, values, options = {}) {
  const rows = options.rows ?? [0, 155, 310, 465, 620]
  const max = options.max ?? Math.max(...values)
  return `
    <div class="bar-chart">
      <div class="bar-axis">
        ${rows
          .slice()
          .reverse()
          .map((row) => `<span>${row}</span>`)
          .join('')}
      </div>
      <div class="bar-stage">
        ${rows
          .slice()
          .reverse()
          .map(() => '<span class="bar-gridline"></span>')
          .join('')}
        <div class="bar-columns">
          ${values
            .map(
              (value, index) => `
                <div class="bar-column">
                  <div class="bar" style="height:${(value / max) * 100}%"></div>
                  <span>${labels[index]}</span>
                </div>
              `,
            )
            .join('')}
        </div>
      </div>
    </div>
  `
}

export function sideBarChart(items, max = 100) {
  return `
    <div class="side-bar-chart">
      ${items
        .map(
          ({ label, value }) => `
            <div class="side-bar-item">
              <div class="side-bar-head">
                <strong>${label}</strong>
                <span>${value}%</span>
              </div>
              <div class="side-bar-track">
                <span class="side-bar-fill" style="width:${(value / max) * 100}%"></span>
              </div>
            </div>
          `,
        )
        .join('')}
    </div>
  `
}

export function heatMap() {
  const levels = [
    [4, 2, 1, 4, 2, 1, 4],
    [2, 1, 4, 2, 1, 4, 2],
    [1, 4, 2, 1, 4, 2, 1],
    [4, 2, 1, 4, 2, 1, 4],
    [2, 1, 4, 2, 1, 4, 2],
    [1, 4, 2, 1, 4, 2, 1],
    [4, 2, 1, 4, 2, 1, 4],
  ]

  return `
    <div class="heatmap">
      <div class="heatmap-hours">
        <span class="heatmap-hours-spacer" aria-hidden="true"></span>
        <span>00:00</span><span>04:00</span><span>08:00</span><span>12:00</span><span>16:00</span><span>20:00</span>
      </div>
      <div class="heatmap-grid">
        ${['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min']
          .map(
            (day, index) => `
              <span class="heatmap-day">${day}</span>
              ${levels[index]
                .map((level) => `<span class="heatmap-cell heat-${level}"></span>`)
                .join('')}
            `,
          )
          .join('')}
      </div>
      <div class="heatmap-legend">
        <span>Sepi</span>
        <div class="heatmap-legend-scale" aria-hidden="true">
          <span class="heatmap-legend-step heat-1"></span>
          <span class="heatmap-legend-step heat-2"></span>
          <span class="heatmap-legend-step heat-4"></span>
        </div>
        <span>Ramai</span>
      </div>
    </div>
  `
}

export function donutChart() {
  return `
    <div class="donut-shell">
      <div class="donut-ring" style="--donut:conic-gradient(#3182f6 0 45%, #2ea99b 45% 75%, #294a5d 75% 100%)"></div>
      <div class="donut-legend">
        <div><span class="legend-dot" style="background:#3182f6"></span><span>Pembangunan</span><strong>45%</strong></div>
        <div><span class="legend-dot" style="background:#2ea99b"></span><span>Desain</span><strong>30%</strong></div>
        <div><span class="legend-dot" style="background:#294a5d"></span><span>Bisnis</span><strong>25%</strong></div>
      </div>
    </div>
  `
}

export { icon }
