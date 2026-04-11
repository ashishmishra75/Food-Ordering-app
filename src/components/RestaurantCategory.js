import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, index }) => {
  const handleClick = () => {
    setShowIndex(showItems ? null : index);
  };

  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
      {/* Header */}
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className=" text-lg">
          {data.title} ({data.itemCards?.length || 0})
        </span>
        <span>{showItems ? "🔼" : "🔽"}</span>
      </div>

      {showItems && <ItemList items={data.itemCards || []} />}
    </div>
  );
};

export default RestaurantCategory;
