import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, addToWishList } from "../utility/addToDb";

const BookDetails = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();
  const findingBook = [...data].find((book) => book.bookId === id);

  const {
    bookName,
    author,
    tags,
    category,
    image,
    rating,
    review,
    totalPages,
  } = findingBook;
  // handle function
  const markAsRead = (id) => {
    addToStoredReadList(id);
  };
  const handleAddToWishList = (id) => {
    addToWishList(id);
  };
  return (
    <div>
      <div className="card bg-base-100  shadow-sm">
        <figure className=" w-[200px] h-[250px] mx-auto">
          <img className=" p-5 h-[230px]" src={image} alt="Shoes" />
        </figure>

        <div className="card-body">
          <div className="flex gap-5">
            {tags.map((tag, index) => (
              <button key={index} className="btn text-[#23BE0A]">
                {tag}
              </button>
            ))}
          </div>
          <div className=" border-b border-dashed border-[#13131326]">
            <h2 className="card-title font-tittle font-bold text-2xl">
              {bookName}
            </h2>
            <p className="my-3 font-work  font-medium text-[#131313CC]">
              By: {author}
            </p>
            <p className="my-3 font-work  font-medium text-[#131313CC]">
              Pages: {totalPages} 📄
            </p>
          </div>

          <div className="flex justify-between font-work  font-medium text-[#131313CC]">
            <p>Category: {category}</p>
            <div className="flex items-center gap-2">
              {rating}
              <div className="rating mr-2.5">
                <div
                  className="mask mask-star w-4 "
                  aria-label="3 star"
                  aria-current="true"
                ></div>
              </div>
            </div>
          </div>
          <p className="text-xl ">🤩 Review:{review}</p>
        </div>
      </div>
      <div className="flex gap-5 my-5">
        <button
          onClick={() => markAsRead(bookId)}
          className="btn text-[#23BE0A]"
        >
          Mark as Read
        </button>
        <button
          onClick={() => handleAddToWishList(bookId)}
          className="btn text-[#23BE0A]"
        >
          Add to WishList
        </button>
      </div>
    </div>
  );
};

export default BookDetails;
