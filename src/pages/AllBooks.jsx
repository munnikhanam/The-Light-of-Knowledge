import { useEffect, useState } from "react";
import Books from "../components/Books";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div>
      <h2 className="font-tittle text-center text-3xl font-bold my-10">
        Books
      </h2>
      <div className="grid md:grid-cols-4 gap-10">
        {books.map((book) => (
          <Books key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
