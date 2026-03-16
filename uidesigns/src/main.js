import './style.css'

import { icon } from './components'
import {
  renderEngagement,
  renderOverview,
  renderSales,
  renderTransactions,
  renderUserDetail,
  renderUsers,
} from './views'

const app = document.querySelector('#app')

const navItems = [
  { id: 'overview', label: 'Overview', iconName: 'overview' },
  { id: 'sales', label: 'Sales', iconName: 'sales' },
  { id: 'transactions', label: 'Transactions', iconName: 'transactions' },
  { id: 'engagement', label: 'Engagement', iconName: 'engagement' },
  { id: 'users', label: 'Users', iconName: 'users' },
]

const validScreens = new Set([
  'overview',
  'sales',
  'transactions',
  'engagement',
  'users',
  'user-detail',
])

const state = {
  screen: normalizeScreen(window.location.hash.replace('#', '')),
}

function normalizeScreen(screen) {
  return validScreens.has(screen) ? screen : 'overview'
}

function currentScreenMarkup() {
  switch (state.screen) {
    case 'sales':
      return renderSales()
    case 'transactions':
      return renderTransactions()
    case 'engagement':
      return renderEngagement()
    case 'users':
      return renderUsers()
    case 'user-detail':
      return renderUserDetail()
    default:
      return renderOverview()
  }
}

function renderSidebar() {
  return `
    <aside class="sidebar">
      <div class="brand">
        <span class="brand-icon">${icon('logo')}</span>
        <div>
          <p class="brand-name">E-Learn Analytics</p>
        </div>
      </div>
      <nav class="sidebar-nav">
        ${navItems
          .map((item) => {
            const active = item.id === state.screen || (item.id === 'users' && state.screen === 'user-detail')
            return `
              <button class="nav-item ${active ? 'nav-item-active' : ''}" data-screen="${item.id}">
                <span class="nav-icon">${icon(item.iconName)}</span>
                <span>${item.label}</span>
              </button>
            `
          })
          .join('')}
      </nav>
      <div class="sidebar-footer">
        <div class="support-card">
          <div class="support-avatar">🧑‍💻</div>
          <div>
            <strong>Support Center</strong>
            <span>Help documentation</span>
          </div>
          <span class="support-chevron">${icon('chevron')}</span>
        </div>
        <button class="signout-button">
          <span class="nav-icon">${icon('arrowDown')}</span>
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  `
}

function renderApp() {
  app.innerHTML = `
    <div class="app-shell">
      <div class="dashboard-frame">
        ${renderSidebar()}
        <div class="workspace">
          ${currentScreenMarkup()}
          <footer class="dashboard-footer">
            <span>© 2024 E-Learn Analytics Dashboard. All systems operational.</span>
            <div>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">API Status</a>
            </div>
          </footer>
        </div>
      </div>
      <div class="made-with">Made with <span>V</span></div>
    </div>
  `
}

function setScreen(screen) {
  state.screen = normalizeScreen(screen)
  window.location.hash = state.screen
  renderApp()
}

document.addEventListener('click', (event) => {
  const trigger = event.target.closest('[data-screen]')
  if (trigger) {
    setScreen(trigger.dataset.screen)
  }
})

window.addEventListener('hashchange', () => {
  state.screen = normalizeScreen(window.location.hash.replace('#', ''))
  renderApp()
})

renderApp()
