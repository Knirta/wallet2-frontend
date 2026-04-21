const Loader = ({ fullPage = false }) => {
  return (
    <div
      className={`flex items-center justify-center ${fullPage ? 'h-screen w-full' : 'h-full w-full'}`}
    >
      <div className="relative flex h-12 w-12">
        {/* Зовнішнє кільце */}
        <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
        {/* Кільце, що крутиться */}
        <div className="border-green absolute inset-0 animate-spin rounded-full border-4 border-t-transparent"></div>
      </div>
    </div>
  );
};

export default Loader;
