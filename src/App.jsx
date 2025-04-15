import React from 'react'

const App = () => {
  return (
    <div className="min-h-screen bg-sky-100 flex flex-col items-center justify-center p-6 text-gray-800">
      <h1 className="text-4xl font-bold mb-6">🌙 Moon Maker</h1>
      <p className="text-lg mb-4">지브리풍 동물 생성기</p>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <button className="bg-white rounded-2xl shadow-md px-4 py-2 hover:bg-yellow-100">눈</button>
        <button className="bg-white rounded-2xl shadow-md px-4 py-2 hover:bg-yellow-100">코</button>
        <button className="bg-white rounded-2xl shadow-md px-4 py-2 hover:bg-yellow-100">입</button>
        <button className="bg-white rounded-2xl shadow-md px-4 py-2 hover:bg-yellow-100">털</button>
        <button className="bg-white rounded-2xl shadow-md px-4 py-2 hover:bg-yellow-100">꼬리</button>
        <button className="bg-white rounded-2xl shadow-md px-4 py-2 hover:bg-yellow-100">날개</button>
      </div>
      <p className="text-sm text-gray-600">색상 팔레트 기능도 곧 들어올 예정 ✨</p>
    </div>
  )
}

export default App
