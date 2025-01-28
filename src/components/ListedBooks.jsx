import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoreReadList, getStoredWishList } from "../utility/addToDb";
import Books from "./Books";
const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const allBooks = useLoaderData();
  useEffect(() => {
    const storedReadList = getStoreReadList();
    const storedWishList = getStoredWishList();
    const storedReadListStr = storedReadList.map((id) => parseInt(id));
    const storedWishListStr = storedWishList.map((id) => parseInt(id));
    const readBookList = allBooks.filter((book) =>
      storedReadListStr.includes(book.bookId)
    );
    const readWishList = allBooks.filter((book) =>
      storedWishListStr.includes(book.bookId)
    );
    setReadList(readBookList);
    setWishList(readWishList);
  }, []);
  return (
    <div>
      ListedBooks
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl">Books I Read :{readList.length}</h2>
          {readList.map((book) => (
            <Books key={book.bookId} book={book} />
          ))}
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl">
            Books I Wanted To Read: {wishList.length}
          </h2>
          {wishList.map((book) => (
            <Books key={book.bookId} book={book} />
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
