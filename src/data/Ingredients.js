export const IngredientsColumns = [
  {
    accessorKey: "ingredients_photo",
    header: "Ingredients Photo",
    size: 100,
    Cell: ({ cell }) => (
      <div>
        <img src={cell.getValue()} alt="" width={60} className="center" />
      </div>
    ),
  },
  {
    accessorKey: "ingredients_name",
    header: "Ingredients Name",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
];

export const ingredients = [
  {
    id: 1,
    ingredients_photo: "/images/ingredients/onion.png",
    ingredients_name: "Onion",
    price: "13$",
  },
  {
    id: 2,
    ingredients_photo: "/images/ingredients/lemon.png",
    ingredients_name: "Lemon",
    price: "13$",
  },
  {
    id: 3,
    ingredients_photo: "/images/ingredients/onion.png",
    ingredients_name: "Onion",
    price: "12$",
  },
  {
    id: 4,
    ingredients_photo: "/images/ingredients/lemon.png",
    ingredients_name: "Lemon",
    price: "22$",
  },
];
