import { useRef, useEffect } from "react";

export default function App() {
  // ننشئ مرجع (ref) لحقل الإدخال
  const inputRef = useRef(null);
  //  نحفظ الاسم فيlocalstorage
  const saveName = () => {
    const name = inputRef.current.value;
    localStorage.setItem("name", name);
  }
  // نستخدم useEffect عشان نخلي المؤشر يركز على الحقل أول ما يفتح المكون
  useEffect(() => {
    // current يشير إلى العنصر المرتبط بالـ ref
    inputRef.current.focus();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl mb-4">اكتب اسمك 👇</h1>
      {/* نربط الـ ref بحقل الإدخال */}
      <input
        ref={inputRef}
        type="text"
        placeholder="الاسم"
        className="border p-2 rounded"
      />

      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded" onClick={saveName}>Save Name</button>
    </div>
  );
}
