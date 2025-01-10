import Cart from "@/components/Card/page";

const products = [
  {
    id: 1,
    title: "Apple Watch",
    price: 599,
    size: "L",
    img: "https://example.com/apple-watch.jpg",
  },
  {
    id: 2,
    title: "Smartphone",
    price: 999,
    size: "M",
    img: "https://example.com/smartphone.jpg",
  },
  {
    id: 3,
    title: "Wallet",
    price: 569,
    size: "S",
    img: "https://example.com/wallet.jpg",
  },
  {
    id: 4,
    title: "Book",
    price: 439,
    size: "XL",
    img: "https://example.com/book.jpg",
  },
  {
    id: 5,
    title: "Hoodie",
    price: 769,
    size: "L",
    img: "https://example.com/hoodie.jpg",
  },
  {
    id: 6,
    title: "Staff",
    price: 129,
    size: "M",
    img: "https://example.com/staff.jpg",
  },
  {
    id: 7,
    title: "DOU",
    price: 989,
    size: "S",
    img: "https://example.com/dou.jpg",
  },
  {
    id: 8,
    title: "Tremba",
    price: 519,
    size: "XL",
    img: "https://example.com/tremba.jpg",
  },
  {
    id: 9,
    title: "Laptop",
    price: 1299,
    size: "M",
    img: "https://example.com/laptop.jpg",
  },
  {
    id: 10,
    title: "Headphones",
    price: 249,
    size: "S",
    img: "https://example.com/headphones.jpg",
  },
  {
    id: 11,
    title: "Gaming Console",
    price: 899,
    size: "L",
    img: "https://example.com/gaming-console.jpg",
  },
  {
    id: 12,
    title: "Camera",
    price: 1199,
    size: "XL",
    img: "https://example.com/camera.jpg",
  },
  {
    id: 13,
    title: "Backpack",
    price: 329,
    size: "M",
    img: "https://example.com/backpack.jpg",
  },
  {
    id: 14,
    title: "Sneakers",
    price: 459,
    size: "S",
    img: "https://example.com/sneakers.jpg",
  },
  {
    id: 15,
    title: "Tablet",
    price: 799,
    size: "L",
    img: "https://example.com/tablet.jpg",
  },
  {
    id: 16,
    title: "Keyboard",
    price: 149,
    size: "S",
    img: "https://example.com/keyboard.jpg",
  },
  {
    id: 17,
    title: "Monitor",
    price: 599,
    size: "XL",
    img: "https://example.com/monitor.jpg",
  },
  {
    id: 18,
    title: "Mouse",
    price: 89,
    size: "S",
    img: "https://example.com/mouse.jpg",
  },
  {
    id: 19,
    title: "Desk Lamp",
    price: 79,
    size: "M",
    img: "https://example.com/desk-lamp.jpg",
  },
  {
    id: 20,
    title: "Chair",
    price: 349,
    size: "L",
    img: "https://example.com/chair.jpg",
  },
];

export default function MerchPage() {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 ">
        {products
          .filter((el) => el.price >= 1)
          .map((product) => (
            <Cart
              key={product.id}
              title={product.title}
              price={product.price}
              size={product.size}
              img={product.img}
            />
          ))}
      </div>
    </div>
  );
}
