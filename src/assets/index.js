import data from "./DB/shopDataTest.json";
const { shopItems } = data;

export function setShopItems() {
  return shopItems;
}
// console.log(shopItems);

// 클릭한 제품의 번호와 일치하는 id 반환
export function getItemId(itemId) {
  return shopItems.find((shopItem) => shopItem.id === itemId);
}

// 클릭한 제품의 번호와 일치하는 category 반환
// export function getItemCategory(itemCategory) {
//   return shopItems.find((shopItem) => shopItem.category === itemCategory);
// }

///////////////////////////

// 위시리스트
const WISHLIST_KEY = "그랑핸드_위시리스트";

const wishlist = JSON.parse(localStorage.getItem(WISHLIST_KEY) || "{}"); // 기본값.

export function addWishList(itemId) {
  wishlist[itemId] = shopItems[itemId].name;
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
}

export function delWishlist(itemId) {
  delete wishlist[itemId];
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
}

export function getWishlist() {
  return shopItems.filter((item) => wishlist[item.id]);
}

//////////////////////////////////

// 카트에 담기
const CART_KEY = "그랑핸드_장바구니";
const cartList = JSON.parse(localStorage.getItem(CART_KEY) || "{}");

const STAMPING_KEY = "주문_상품_스캠핑";
const textList = JSON.parse(localStorage.getItem(STAMPING_KEY) || "{}");

export function addCartList(itemId) {
  cartList[itemId] = shopItems[itemId].name;
  // cartList[itemId] = shopItems[itemId].quantity;
  localStorage.setItem(CART_KEY, JSON.stringify(cartList));
}

export function delCartList(itemId) {
  delete cartList[itemId];
  localStorage.setItem(CART_KEY, JSON.stringify(cartList));
}

export function delSelectedCartLists(itemId) {
  itemId.map((idx) => delete cartList[idx]);
  localStorage.setItem(CART_KEY, JSON.stringify(cartList));
}

export function getCartList() {
  return shopItems.filter((item) => cartList[item.id]);
}

export function addStamping() {
  localStorage.setItem(CART_KEY, JSON.stringify(textList));
}
