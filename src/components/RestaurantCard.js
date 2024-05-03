export const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
    cloudinaryImageId,
    // aggregatedDiscountInfoV3,
  } = resData?.info;
  return (
    <div className="m-4 p-4 w-[250px] bg-slate-100 h-[400px] hover:bg-gray-200 cursor-pointer shadow-lg">
      <img
        className="rounded-lg w-full h-[200px]"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="res-image"
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      {/* <h4>
        {aggregatedDiscountInfoV3.header +
          " " +
          aggregatedDiscountInfoV3.subHeader}
      </h4> */}
      <h4>Estimated time: {sla.slaString}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </>
    );
  };
};

//Higher order component

export default RestaurantCard;
