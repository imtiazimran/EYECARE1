import { AddTobag_item } from "./AddItemInBag";

export const AddToBag = () => {
  const cardData = [
    {
      id: 1,
      imageUrl: "/images/WishList/image 15.png",
      name: "Eye Care Classic",
      size: " SIze Medium",
      star: 4.5,
      review: 124,
      price: "999",
    },
    {
      id: 2,
      imageUrl: "/images/WishList/image 16.png",
      name: "Eye Care Classic",
      size: " SIze Medium",
      star: 4.5,
      review: 124,
      price: "999",
    },
    {
      id: 3,
      imageUrl: "/images/WishList/image 23.png",
      name: "Eye Care Classic",
      size: " SIze Medium",
      star: 4.5,
      review: 124,
      price: "999",
    },
    {
      id: 4,
      imageUrl: "/images/WishList/image 15.png",
      name: "Eye Care Classic",
      size: " SIze Medium",
      star: 4.5,
      review: 124,
      price: "999",
    },
    {
      id: 5,
      imageUrl: "/images/WishList/image 16.png",
      name: "Eye Care Classic",
      size: " SIze Medium",
      star: 4.5,
      review: 124,
      price: "999",
    },
    {
      id: 6,
      imageUrl: "/images/WishList/image 23.png",
      name: "Eye Care Classic",
      size: " SIze Medium",
      star: 4.5,
      review: 124,
      price: "999",
    },

    {
      id: 7,
      imageUrl: "/images/WishList/image 15.png",
      name: "Eye Care Classic",
      size: " SIze Medium",
      star: 4.5,
      review: 124,
      price: "999",
    },
    {
      id: 8,
      imageUrl: "/images/WishList/image 16.png",
      name: "Eye Care Classic",
      size: " SIze Medium",
      star: 4.5,
      review: 124,
      price: "999",
    },

    {
      id: 9,
      imageUrl: "/images/WishList/image 23.png",
      name: "Eye Care Classic",
      size: " SIze Medium",
      star: 4.5,
      review: 124,
      price: "999",
    },
  ];

  return (
    <>
      <div className="  grid  justify-evenly  grid-cols-3">
        {cardData.map((card) => (
          <AddTobag_item
            key={card.id}
            image={card.imageUrl}
            name={card.name}
            size={card.size}
            star={card.star}
            review={card.review}
            price={card.price}
          />
        ))}
      </div>
    </>
  );
};
