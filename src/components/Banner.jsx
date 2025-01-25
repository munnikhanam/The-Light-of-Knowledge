import books from "../assets/books.jpg";
const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={books} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold flex flex-col font-tittle">
              Books to freshen up <span className="my-5">your bookshelf</span>
            </h1>
            <p className="py-6 text-[#131313CC] text-xl">
              You know you’ve read a good book when you turn the last page and
              feel a little as if you have lost a friend. “There is more
              treasure in books than in all the pirate's loot on Treasure
              Island.” - Walt Disney
            </p>
            <button className="btn bg-[#23BE0A] my-5">View The List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
