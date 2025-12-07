import { useState, useEffect } from 'react'

// مثال مبسّط يشرح استخدام useEffect بأنواعه المختلفة
// - تأثير عند التركيب فقط (componentDidMount) -> []
// - تأثير يعتمد على قيمة معينة -> [dependency]
// - تأثير مع تنظيف (cleanup) عند ازالة المكوّن

function App() {
  // حالة بسيطة لعدّاد ليوضح تأثير الاعتماد (dependency)
  const [count, setCount] = useState(() => {
    // قراءة ابتدائية من localStorage إن وجدت
    try {
      const saved = localStorage.getItem('effect-count')
      return saved ? Number(saved) : 0
    } catch {
      return 0
    }
  })

  // 1) useEffect بدون تبعيات -> يعمل مرة عند التركيب (mount)
  useEffect(() => {
    console.log('Component mounted (useEffect with empty deps)')

    // cleanup: يُنفّذ عند ازالة المكوّن (unmount)
    return () => {
      console.log('Component will unmount (cleanup)')
    }
  }, [])

  // 2) useEffect مع تبعية على `count` -> يعمل كلما تغير `count`
  useEffect(() => {
    // مثال عملي: تحديث title الصفحة وحفظ القيمة في localStorage
    document.title = `Count: ${count}`
    try {
      localStorage.setItem('effect-count', String(count))
    } catch {""}
  }, [count])

  // 3) مثال على تأثير به timer مع تنظيف
  useEffect(() => {
    const id = setInterval(() => {
      // لنغيّر العداد كل 5 ثواني كمثال (يمكن تعطيله بسهولة)
      // هنا نستخدم setCount بوضع دالة لتجنب الاعتماد على القيمة القديمة مباشرة
      setCount((c) => c + 1)
    }, 1000)

    // مهم: تنظيف الـ interval عند إعادة تشغيل التأثير أو ازالة المكوّن
    return () => clearInterval(id)
  }, []) // وضعنا [] حتى يعمل المؤقت مرة واحدة عند التركيب

  return (
    <div className="App flex justify-center items-center min-h-screen w-full p-4 bg-linear-to-r from-sky-200 to-emerald-200" dir='rtl'>
      <div className="bg-white shadow rounded-xl p-6 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-4">useEffect Example</h1>

        <p className="text-lg mb-4">Count (increments every 1s): <strong>{count}</strong></p>

        <div className="flex justify-center gap-3 mb-4">
          <button
            onClick={() => setCount((c) => c - 1)}
            className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            -
          </button>

          <button
            onClick={() => setCount((c) => c + 1)}
            className="px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            +
          </button>

          <button
            onClick={() => setCount(0)}
            className="px-3 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Reset
          </button>
        </div>

        <p className="text-sm text-gray-500">انظر الـ console وسترى رسائل التركيب والتنظيف. كما يتم تحديث عنوان الصفحة وحفظ القيمة محليًا.</p>
      </div>
    </div>
  )
}

export default App
