
// ملف العرض الرئيسي: يوضح كيفية استخدام ThemeContext عبر useContext
import { useContext } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import ThemeContext from './contexts/ThemeContext'

function Content() {
  // قراءة الحالة والدالة من الـ Context مباشرة باستخدام useContext
  // هنا نستخدم ThemeContext بدلاً من أي hook مساعد لشرح الفكرة ببساطة
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div
      className={`p-8 rounded-2xl shadow-md text-center max-w-lg w-full mx-auto ${
        theme === 'light' ? 'bg-white text-gray-800' : 'bg-gray-800 text-white'
      }`}
    >
      <h1 className="text-2xl font-bold mb-4">useContext Example</h1>
      {/* عرض القيمة الحالية للثيم */}
      <p className="mb-4">Current theme: <strong>{theme}</strong></p>
      <button
        onClick={toggleTheme}
        className={`px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 ${
          theme === 'light' ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-600 hover:bg-gray-700'}`}
      >
        Toggle Theme
      </button>
    </div>
  )
}

function App() {
  return (
    // نلف التطبيق بالمزوّد حتى تتمكن أي مكوّنات داخل الشجرة من الوصول للثيم
    <ThemeProvider>
      <div className="App flex justify-center items-center min-h-screen w-full p-4 bg-linear-to-r from-sky-200 to-emerald-200">
        <Content />
      </div>
    </ThemeProvider>
  )
}

export default App
