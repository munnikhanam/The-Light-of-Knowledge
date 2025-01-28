import { toast } from "react-toastify";

const getStoreReadList = () => {
  // read list
  const storedListStr = localStorage.getItem("read-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};
const addToStoredReadList = (id) => {
  const storedList = getStoreReadList();
  if (storedList.includes(id)) {
    console.log(id, "already exists");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("read-list", storedListStr);
    toast("Congratulation! you have added book in your list");
  }
};

// wishList

const getStoredWishList = () => {
  // wishlist
  const wishListStr = localStorage.getItem("wish-list");
  if (wishListStr) {
    const wishList = JSON.parse(wishListStr);
    return wishList;
  } else {
    return [];
  }
};
const addToWishList = (id) => {
  const storedWish = getStoredWishList();
  if (storedWish.includes(id)) {
    console.log("already exists");
  } else {
    storedWish.push(id);
    const storedWishStr = JSON.stringify(storedWish);
    localStorage.setItem("wish-list", storedWishStr);
    toast("Congratulation! you have added book in your Wishlist");
  }
};
export {
  addToStoredReadList,
  addToWishList,
  getStoreReadList,
  getStoredWishList,
};
