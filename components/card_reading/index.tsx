import Image from "next/image";

export default function ReadingCard({ book, onIncrease }: any) {
  return (
    <div className="w-full text-gray grid grid-cols-1 md:grid-cols-4 items-center gap-4 py-4 border-b border-gray-500">

      {/* Cover */}
      <div className="flex justify-center md:justify-start">
        <Image
          src={book.cover}
          alt={book.title}
          width={70}
          height={90}
          className="rounded-md shadow"
        />
      </div>

      {/* Title */}
      <div className="md:col-span-1 text-black text-center md:text-left font-medium leading-5">
        {book.title}
      </div>

      {/* Author */}
      <div className="text-gray-600 text-center text-medium md:text-left">
        {book.author}
      </div>

      {/* Progress + BUTTON */}
      <div className="flex justify-center md:justify-start items-center gap-3">
        <div className="h-2 bg-gray-300 rounded w-full md:w-32">
          <div
            className={`h-full rounded ${book.progressColor}`}
            style={{ width: `${book.progress}%` }}
          ></div>
        </div>

        {/* TOMBOL + */}
        <button
          onClick={onIncrease}
          className="px-3 py-1 bg-lime-700 text-white rounded-full text-sm hover:bg-lime-800 transition"
        >
          +
        </button>
      </div>

    </div>
  );
}
