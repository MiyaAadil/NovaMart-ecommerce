import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-5">

      <div className="text-center max-w-xl">

        <h1 className="text-8xl md:text-9xl font-extrabold text-red-500">
          404
        </h1>

        <h2 className="mt-4 text-3xl md:text-4xl font-bold">
          Oops! Page Not Found
        </h2>

        <p className="mt-4 leading-7">
          The page you're looking for doesn't exist or may have been moved.
          Try returning to the homepage or continue shopping.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

          <Link
            to="/"
            className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-xl text-white font-semibold transition-all duration-300 active:scale-95"
          >
            Go Home
          </Link>

          <Link
            to="/products"
            className="border border-white bg-white hover:bg-gray-100 hover:text-black px-6 py-3 rounded-xl font-semibold transition-all duration-300"
          >
            Browse Products
          </Link>

        </div>

      </div>

    </div>
  );
};

export default NotFound;