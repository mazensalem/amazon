import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

export default function CheckoutProduct({
  id,
  title,
  price,
  description,
  rating,
  Category,
  image,
  hasprime,
}) {
  const dispatch = useDispatch();
  return (
    <div className="grid grid-cols-5">
      {/* Left */}
      <Image src={image} height={200} width={200} objectFit="contain" />
      {/* Mid */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <Currency quantity={price} currency="egp" />
        {hasprime && (
          <div className="flex items-center space-x-2">
            <img
              loading="lazy"
              className="w-12"
              src="https://links.papareact.com/fdw"
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button
          onClick={() => {
            dispatch(
              addToBasket({
                id,
                title,
                price,
                description,
                rating,
                Category,
                image,
                hasprime,
              })
            );
          }}
          className="button"
        >
          Add to Basket
        </button>
        <button
          onClick={() => {
            dispatch(removeFromBasket({ id }));
          }}
          className="button"
        >
          remove to Basket
        </button>
      </div>
    </div>
  );
}
