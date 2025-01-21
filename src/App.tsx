import ColorPalette from './components/ColorPalette'
import Header from './components/Header'
import Footer from './components/Footer'
import Layout from './components/Layout'
import Description from './components/Description'
import { useTheme } from './hooks/useTheme'
import { Toaster } from 'sonner'
import { TOAST_CONFIG } from './consts'
import './App.css'

function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <Layout isDark={isDark}>
      <Toaster theme={isDark ? 'dark' : 'light'} position={TOAST_CONFIG.POSITION} />
      <Header isDark={isDark} onThemeToggle={toggleTheme} />
      <Description />
      <main className="flex-1 w-full">
        <ColorPalette />
      </main>
      <Footer />
    </Layout>
  )
}

export default App
