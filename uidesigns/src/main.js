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
const profile = {
  name: 'Budi Santoso',
  initials: 'BS',
}

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
  openHeaderDropdown: null,
  openSalesDropdown: null,
  openEngagementDropdown: null,
  openProfileMenu: false,
  headerFilters: {
    overview: '30 Hari Terakhir',
    sales: '30 Hari Terakhir',
    transactions: '30 Hari Terakhir',
    engagement: '30 Hari Terakhir',
    users: '30 Hari Terakhir',
    userDetail: '30 Hari Terakhir',
  },
  salesFilters: {
    category: ['Pengembangan'],
    timeRange: ['30 Hari Terakhir'],
    location: ['Jakarta'],
  },
  engagementFilters: {
    category: ['Pemrograman'],
  },
}

function normalizeScreen(screen) {
  return validScreens.has(screen) ? screen : 'overview'
}

function currentScreenMarkup() {
  switch (state.screen) {
    case 'sales':
      return renderSales(state)
    case 'transactions':
      return renderTransactions(state)
    case 'engagement':
      return renderEngagement(state)
    case 'users':
      return renderUsers(state)
    case 'user-detail':
      return renderUserDetail(state)
    default:
      return renderOverview(state)
  }
}

function renderSidebar() {
  return `
    <aside class="sidebar">
      <div class="brand">
        <span class="brand-icon">${icon('logo')}</span>
        <div>
          <p class="brand-name">CDL Analytics</p>
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
        <div class="profile-menu-shell">
          <button class="profile-menu-trigger" data-profile-toggle="true">
            <span class="profile-menu-avatar">${profile.initials}</span>
            <span class="profile-menu-copy">
              <strong>${profile.name}</strong>
              <span>Admin</span>
            </span>
            <span class="profile-menu-chevron">${icon('chevron')}</span>
          </button>
          ${
            state.openProfileMenu
              ? `
                <div class="profile-menu-dropdown">
                  <button class="profile-menu-item" data-profile-action="profile">
                    <span class="nav-icon">${icon('user')}</span>
                    <span>Profile</span>
                  </button>
                  <button class="profile-menu-item profile-menu-item-danger" data-profile-action="logout">
                    <span class="nav-icon">${icon('arrowDown')}</span>
                    <span>Logout</span>
                  </button>
                </div>
              `
              : ''
          }
        </div>
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
            <span>© 2024 CDL Analytics Dashboard. All systems operational.</span>
            <div>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">API Status</a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  `
}

function setScreen(screen) {
  state.screen = normalizeScreen(screen)
  state.openHeaderDropdown = null
  state.openSalesDropdown = null
  state.openEngagementDropdown = null
  state.openProfileMenu = false
  window.location.hash = state.screen
  renderApp()
}

document.addEventListener('click', (event) => {
  const trigger = event.target.closest('[data-screen]')
  if (trigger) {
    setScreen(trigger.dataset.screen)
    return
  }

  const headerDropdown = event.target.closest('[data-header-dropdown]')
  if (headerDropdown) {
    const key = headerDropdown.dataset.headerDropdown
    state.openHeaderDropdown = state.openHeaderDropdown === key ? null : key
    renderApp()
    return
  }

  const headerOption = event.target.closest('[data-header-option]')
  if (headerOption) {
    const key = headerOption.dataset.headerOption
    const value = headerOption.dataset.headerValue
    state.headerFilters[key] = value
    state.openHeaderDropdown = null
    renderApp()
    return
  }

  const salesDropdown = event.target.closest('[data-sales-dropdown]')
  if (salesDropdown) {
    const key = salesDropdown.dataset.salesDropdown
    state.openSalesDropdown = state.openSalesDropdown === key ? null : key
    renderApp()
    return
  }

  const salesOption = event.target.closest('[data-sales-option]')
  if (salesOption) {
    const key = salesOption.dataset.salesOption
    const value = salesOption.dataset.salesValue
    const selected = state.salesFilters[key]
    const index = selected.indexOf(value)

    if (index >= 0) {
      selected.splice(index, 1)
    } else {
      selected.push(value)
    }

    renderApp()
    return
  }

  const salesReset = event.target.closest('[data-sales-reset]')
  if (salesReset) {
    state.salesFilters = {
      category: [],
      timeRange: [],
      location: [],
    }
    state.openSalesDropdown = null
    renderApp()
    return
  }

  const engagementDropdown = event.target.closest('[data-engagement-dropdown]')
  if (engagementDropdown) {
    const key = engagementDropdown.dataset.engagementDropdown
    state.openEngagementDropdown = state.openEngagementDropdown === key ? null : key
    renderApp()
    return
  }

  const engagementOption = event.target.closest('[data-engagement-option]')
  if (engagementOption) {
    const key = engagementOption.dataset.engagementOption
    const value = engagementOption.dataset.engagementValue
    const selected = state.engagementFilters[key]
    const index = selected.indexOf(value)

    if (index >= 0) {
      selected.splice(index, 1)
    } else {
      selected.push(value)
    }

    renderApp()
    return
  }

  const engagementReset = event.target.closest('[data-engagement-reset]')
  if (engagementReset) {
    state.engagementFilters = {
      category: [],
    }
    state.openEngagementDropdown = null
    renderApp()
    return
  }

  const profileToggle = event.target.closest('[data-profile-toggle]')
  if (profileToggle) {
    state.openProfileMenu = !state.openProfileMenu
    renderApp()
    return
  }

  const profileAction = event.target.closest('[data-profile-action]')
  if (profileAction) {
    state.openProfileMenu = false

    if (profileAction.dataset.profileAction === 'profile') {
      setScreen('user-detail')
      return
    }

    if (profileAction.dataset.profileAction === 'logout') {
      setScreen('overview')
      return
    }
  }

  if (
    (state.openHeaderDropdown || state.openSalesDropdown || state.openEngagementDropdown || state.openProfileMenu) &&
    !event.target.closest('.filter-dropdown') &&
    !event.target.closest('.profile-menu-shell')
  ) {
    state.openHeaderDropdown = null
    state.openSalesDropdown = null
    state.openEngagementDropdown = null
    state.openProfileMenu = false
    renderApp()
  }
})

window.addEventListener('hashchange', () => {
  state.screen = normalizeScreen(window.location.hash.replace('#', ''))
  renderApp()
})

renderApp()
