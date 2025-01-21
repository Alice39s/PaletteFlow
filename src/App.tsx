import { Toaster } from 'sonner'
import { TOAST_CONFIG } from './consts'
import { initialColors } from './utils/initialColors'
import { useTheme } from './hooks/useTheme'
import { useMemory } from './hooks/useMemory'
import { useColorPalette } from './hooks/useColorPalette'
import Layout from './components/Layout'
import Header from './components/Header'
import ColorPalette from './components/ColorPalette'
import { ColorNav } from './components/ColorNav'
import Footer from './components/Footer'
import Description from './components/Description'
import './App.css'

function App() {
  const { isDark, toggleTheme } = useTheme();
  const { shadeCount, updateShadeCount } = useMemory();
  const {
    colorFormat,
    setColorFormat,
    colorFamilies,
    handleCopy,
    handleCopyAll,
  } = useColorPalette(initialColors);

  const handleFamilySelect = (familyName: string) => {
    const element = document.getElementById(`color-family-${familyName}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout isDark={isDark}>
      <Toaster theme={isDark ? 'dark' : 'light'} position={TOAST_CONFIG.POSITION} />
      <Header
        isDark={isDark}
        onThemeToggle={toggleTheme}
        colorFormat={colorFormat}
        onFormatChange={setColorFormat}
        shadeCount={shadeCount}
        onShadeCountChange={updateShadeCount}
      />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Description />
        <ColorPalette
          families={colorFamilies}
          colorFormat={colorFormat}
          shadeCount={shadeCount}
          onCopy={handleCopy}
          onCopyAll={handleCopyAll}
          onShadeCountChange={updateShadeCount}
        />
      </main>
      <ColorNav
        families={colorFamilies}
        onSelect={handleFamilySelect}
      />
      <Footer />
    </Layout>
  )
}

export default App
