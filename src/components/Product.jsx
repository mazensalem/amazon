import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

export default function Product({
  id,
  title,
  price,
  description,
  category,
  image,
}) {
  const [rating] = useState(Math.floor(Math.random() * (5 - 1 + 1)) + 1);
  const [hasprime] = useState(Math.random() < 0.5 ? true : false);
  const dispatch = useDispatch();

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <Image src={image} width={200} height={200} objectFit="contain" />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((item, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price} currency="egp" />
      </div>
      {hasprime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img className="w-12" src="https://links.papareact.com/fdw" />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}
      <button
        onClick={() => {
          const product = {
            id,
            title,
            price,
            description,
            category,
            image,
            rating,
            hasprime,
          };
          dispatch(addToBasket(product));
        }}
        className="mt-auto button"
      >
        Add to the Baskit
      </button>
    </div>
  );
}
