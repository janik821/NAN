export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-orange-50 to-amber-100 text-gray-800 font-sans">
      <img
        src="/logo.png"
        alt="NAN logo"
        className="w-24 h-24 mb-6 drop-shadow-lg rounded-full border border-amber-300 bg-white/70 backdrop-blur-sm"
      />
      <h1 className="text-6xl font-extrabold mb-4 tracking-wide text-amber-700 drop-shadow-sm">
        NAN
      </h1>
      <p className="text-xl text-center max-w-lg mb-8 leading-relaxed">
        Умное мебельное приложение для заказчиков и мастеров.  
        Вдохновение, заказы и дизайн — всё в одном месте.
      </p>
      <a
        href="#"
        className="px-8 py-3 bg-amber-700 text-white text-lg rounded-2xl shadow-lg hover:bg-amber-800 transition-transform transform hover:scale-105"
      >
        🚀 Скоро запуск
      </a>
    </main>
  );
}