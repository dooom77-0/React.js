// إنشاء Context بسيط لإدارة حالة الثيم (فاتح/داكن)
// هذا الملف يعرّف ThemeContext وThemeProvider.
// شرح سريع بالعربي داخل الكود ليكون مفهوماً للمطوّرين الجدد.
import { createContext, useState } from 'react'

// ThemeContext: الحاوية التي سنستخدمها لمشاركة بيانات الثيم عبر مكونات التطبيق
const ThemeContext = createContext()
 
// ThemeProvider: يوفّر قيمة الثيم والدالة toggleTheme لجميع المكوّنات الداخلية
// الاستخدام:
// <ThemeProvider>
//   <App />
// </ThemeProvider>
// داخل ThemeProvider، الخاصية `children` تمثل أي عناصر JSX توضع بين وسمَي المزوّد
export function ThemeProvider({ children }) {
  // الحالة الافتراضية للثيم = 'light'
  const [theme, setTheme] = useState('light')

  // دالة لتبديل الثيم بين 'light' و 'dark'
  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'))

  const value = { theme, toggleTheme }

  // نمرّر القيمة لجميع الأطفال عبر ThemeContext.Provider
  // ونعرض الـ children كما هي داخل الموفر
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

// نصيحة: يمكنك استخدام useContext(ThemeContext) داخل أي مكوّن لقراءة `theme` و`toggleTheme`.
export default ThemeContext
