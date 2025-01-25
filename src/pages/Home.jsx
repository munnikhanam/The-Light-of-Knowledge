import Banner from "../components/Banner";

import AllBooks from "./AllBooks";

const Home = () => {
  return (
    <div>
      <Banner />

      <div className="my-10">
        <AllBooks />
      </div>
    </div>
  );
};

export default Home;
