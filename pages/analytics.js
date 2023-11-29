import ReactGA from 'react-ga'

export function initializeAnalytics() {
  ReactGA.initialize('G-DKBZJ613CB') // 用您的跟踪 ID 替换 G-XXXXXXXXXX
}

export function trackPageView(page) {
  ReactGA.pageview(page)
}
