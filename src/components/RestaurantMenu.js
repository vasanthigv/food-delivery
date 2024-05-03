import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/UseRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [resInfo, isLoaded] = useRestaurantMenu(resId);

  // if (!resInfo || resInfo.length === 0) {
  //   console.log("here", resInfo);
  //   return <Shimmer />;
  // }
  if (!resInfo) return null;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card.card.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log("items", itemCards);
  // if (resInfo.length > 0) {
  //   const categories =
  //     resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.filter(
  //       (c) =>
  //         c?.card?.card?.["@type"] ===
  //         "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  //     );

  //   console.log("categories", categories);
  // }

  return !isLoaded ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <h3>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      <h2>Menu</h2>
      <ul>
        {itemCards?.length > 0
          ? itemCards.map((item) => (
              <li key={item.card.info.id}>{item.card.info.name}</li>
            ))
          : "error"}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
