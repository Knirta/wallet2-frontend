import Link from '@/components/ui/Link';

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="mt-4 text-lg text-gray-600">
        Сторінку не знайдено. Перевірте URL або поверніться на головну сторінку.
      </p>
      <Link
        to="/"
        // className="mt-6 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Повернутися на головну
      </Link>
    </div>
  );
};

export default NotFound;
