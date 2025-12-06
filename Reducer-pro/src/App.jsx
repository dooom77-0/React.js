import React, { useReducer } from 'react'

// مثال بسيط على استخدام useReducer
// هذا المثال يعرّف reducer لإدارة حالة عدّاد (count) مع زر لزيادة ونقصان وإعادة التعيين

// الحالة الابتدائية
const initialState = { count: 0 }

// reducer: يتلقى الحالة الحالية و action، ويُرجع حالة جديدة
// نستخدم نوع Action لتحديد السلوك المطلوب
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      // لا نعدّل الحالة مباشرة، بل نُنشئ كائن حالة جديد
      return { ...state, count: state.count + 1 }
    case 'decrement':
      return { ...state, count: state.count - 1 }
    case 'double':
      return { ...state, count: state.count * 2 }
    case 'reset':
      return { ...state, count: 0 }
    case 'set':
      // مثال لإرسال بيانات مع الـ action (payload)
      return { ...state, count: action.payload }
    default:
      return state
  }
}

function App() {
  // useReducer يُرجع [state, dispatch]
  // dispatch وظيفة نرسل لها الأفعال (actions) ليتم تنفيذها داخل reducer
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App flex justify-center items-center min-h-screen w-screen bg-gradient-to-r from-sky-200 to-emerald-200 p-4" dir='rtl'>
      <div className="bg-white shadow rounded-xl p-6 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-4">useReducer Example</h1>

        {/* عرض القيمة الحالية */}
        <p className="text-xl mb-4">Count: <strong>{state.count}</strong></p>

        <div className="flex justify-center gap-3 mb-4">
          {/* أزرار تستخدم dispatch لإرسال الأفعال */}
          <button
            onClick={() => dispatch({ type: 'decrement' })}
            className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            -
          </button>

          <button
            onClick={() => dispatch({ type: 'increment' })}
            className="px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            +
          </button>

          <button
            onClick={() => dispatch({ type: 'double' })}
            className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            x2
          </button>

          <button
            onClick={() => dispatch({ type: 'reset' })}
            className="px-3 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Reset
          </button>
        </div>

        <div className="mt-2">
          <label className="block text-sm mb-2">Set value:</label>
          <input
            type="number"
            className="px-3 py-2 border rounded w-32 text-center"
            onChange={(e) => dispatch({ type: 'set', payload: Number(e.target.value) })}
            placeholder="0"
          />
          <p className="text-xs text-gray-500 mt-2">مثال: dispatch يرسل كائن action إلى reducer</p>
        </div>
      </div>
    </div>
  )
}

export default App
