import { Link } from "react-router-dom";

const Books = ({ book }) => {
  const { bookName, author, tags, category, image, rating, bookId, review } =
    book;
  return (
    <>
      <Link to={`/books/${bookId}`}>
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
            </div>

            <div className="flex justify-between font-work  font-medium text-[#131313CC]">
              <p>{category}</p>
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
          </div>
        </div>
      </Link>
    </>
  );
};

export default Books;
