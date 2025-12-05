"use client";

import { useState } from "react";
import ReadingCard from "@/components/card_reading";


export default function ReadingPage() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Seporsi Mie Ayam Sebelum Besok MTK",
      author: "Brian Khrisma",
      cover: "/book1.jpg",
      progress: 60,
      progressColor: "bg-[#5B5A2F]",
    },
    {
      id: 2,
      title: "Hello",
      author: "Tere Liye",
      cover: "/book2.jpg",
      progress: 30,
      progressColor: "bg-[#5B5A2F]",
    },
    {
      id: 3,
      title: "The Psychology of Money",
      author: "James Clear",
      cover: "/buku5.jpg",
      progress: 30,
      progressColor: "bg-[#5B5A2F]",
    },
    {
      id: 4,
      title: "Series Bumi",
      author: "Tere Liye",
      cover: "/book4.jpg",
      progress: 50,
      progressColor: "bg-[#5B5A2F]",
    },
  ]);

  // FUNGSI MENAMBAHKAN PROGRESS (+)
  // biasanya dipakai react untuk update state yg berupa array
  const increaseProgress = (id: number) => {
    setBooks((prev) => // prev = nilai sebelumnya dari state books
      prev.map((book) =>
        book.id === id
          ? { ...book, progress: Math.min(book.progress + 1, 100) }
          : book
      )
    );
  };

  return (
    <main className="min-h-screen px-6 md:px-24 py-10 bg-[#F2E6DC]">
      <h1 className="text-3xl font-bold text-[#5B5A2F] mb-6">Book list</h1>

      {/* Header */}
      <div className="hidden md:grid grid-cols-4 font-semibold text-gray-700 mt-10 mb-1 px-4">
        <p>Cover</p>
        <p>Title</p>
        <p>Author</p>
        <p>Progress</p>
      </div>

      {/* Card List */}
      {books.map((book) => (
        <ReadingCard
          key={book.id}
          book={book}
          onIncrease={() => increaseProgress(book.id)}
        />
      ))}
    </main>
  );
}
