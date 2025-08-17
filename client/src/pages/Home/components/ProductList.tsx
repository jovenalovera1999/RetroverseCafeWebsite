import ComponentCard from "../../../components/Common/ComponentCard";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../../components/Table";

const ProductList = () => {
  type ProductType = {
    category?: string;
    name: string;
    price: string;
  };

  const products: ProductType[] = [
    // HOT COFFEE
    {
      category: "Hot Coffee",
      name: "Retro Espresso Shot",
      price: "PHP 65.00",
    },
    {
      category: "Hot Coffee",
      name: "Classic Americano",
      price: "PHP 80.00",
    },
    {
      category: "Hot Coffee",
      name: "Spanish Latte",
      price: "PHP 90.00",
    },
    {
      category: "Hot Coffee",
      name: "Vintage Latte",
      price: "PHP 90.00",
    },
    {
      category: "Hot Coffee",
      name: "Caramel Latte",
      price: "PHP 90.00",
    },
    {
      category: "Hot Coffee",
      name: "Cafe Mocha",
      price: "PHP 90.00",
    },

    // ICED COFFEE
    {
      category: "Iced Coffee",
      name: "Iced Americano (16oz)",
      price: "PHP 100.00",
    },
    {
      category: "Iced Coffee",
      name: "Iced Americano (22oz)",
      price: "PHP 110.00",
    },
    {
      category: "Iced Coffee",
      name: "Vintage Latte (16oz)",
      price: "PHP 110.00",
    },
    {
      category: "Iced Coffee",
      name: "Vintage Latte (22oz)",
      price: "PHP 120.00",
    },
    {
      category: "Iced Coffee",
      name: "Sea Salt Latte (16oz)",
      price: "PHP 120.00",
    },
    {
      category: "Iced Coffee",
      name: "Sea Salt Latte (22oz)",
      price: "PHP 135.00",
    },
    {
      category: "Iced Coffee",
      name: "Salted Caramel (16oz)",
      price: "PHP 150.00",
    },
    {
      category: "Iced Coffee",
      name: "Salted Caramel (22oz)",
      price: "PHP 165.00",
    },
    {
      category: "Iced Coffee",
      name: "Dirty Matcha (16oz)",
      price: "PHP 130.00",
    },
    {
      category: "Iced Coffee",
      name: "Dirty Matcha (22oz)",
      price: "PHP 145.00",
    },
    {
      category: "Iced Coffee",
      name: "Dirty Horchata (16oz)",
      price: "PHP 130.00",
    },
    {
      category: "Iced Coffee",
      name: "Dirty Horchata (22oz)",
      price: "PHP 145.00",
    },
    {
      category: "Iced Coffee",
      name: "Spanish Latte (16oz)",
      price: "PHP 110.00",
    },
    {
      category: "Iced Coffee",
      name: "Spanish Latte (22oz)",
      price: "PHP 125.00",
    },
    {
      category: "Iced Coffee",
      name: "Caramel Macchiato (16oz)",
      price: "PHP 110.00",
    },
    {
      category: "Iced Coffee",
      name: "Caramel Macchiato (22oz)",
      price: "PHP 125.00",
    },
    {
      category: "Iced Coffee",
      name: "Caramel Latte (16oz)",
      price: "PHP 110.00",
    },
    {
      category: "Iced Coffee",
      name: "Caramel Latte (22oz)",
      price: "PHP 125.00",
    },
    {
      category: "Iced Coffee",
      name: "Cafe Mocha (16oz)",
      price: "PHP 110.00",
    },
    {
      category: "Iced Coffee",
      name: "Cafe Mocha (22oz)",
      price: "PHP 125.00",
    },
    {
      category: "Iced Coffee",
      name: "White Chocolate (16oz)",
      price: "PHP 110.00",
    },
    {
      category: "Iced Coffee",
      name: "White Chocolate (22oz)",
      price: "PHP 125.00",
    },

    // NON-COFFEE: MILK DRINK
    {
      category: "Milk Drink",
      name: "Matcha Flashback (16oz)",
      price: "PHP 115.00",
    },
    {
      category: "Milk Drink",
      name: "Matcha Flashback (22oz)",
      price: "PHP 130.00",
    },
    {
      category: "Milk Drink",
      name: "Matcha Seasalt (16oz)",
      price: "PHP 125.00",
    },
    {
      category: "Milk Drink",
      name: "Matcha Seasalt (22oz)",
      price: "PHP 135.00",
    },
    {
      category: "Milk Drink",
      name: "Horchata Vintage Twist (16oz)",
      price: "PHP 110.00",
    },
    {
      category: "Milk Drink",
      name: "Horchata Vintage Twist (22oz)",
      price: "PHP 125.00",
    },
    {
      category: "Milk Drink",
      name: "Choco Retro Delight (16oz)",
      price: "PHP 90.00",
    },
    {
      category: "Milk Drink",
      name: "Choco Retro Delight (22oz)",
      price: "PHP 105.00",
    },
    {
      category: "Milk Drink",
      name: "Blueberry Blast (16oz)",
      price: "PHP 90.00",
    },
    {
      category: "Milk Drink",
      name: "Blueberry Blast (22oz)",
      price: "PHP 105.00",
    },
    {
      category: "Milk Drink",
      name: "Strawberry Bliss (16oz)",
      price: "PHP 90.00",
    },
    {
      category: "Milk Drink",
      name: "Strawberry Bliss (22oz)",
      price: "PHP 105.00",
    },
    {
      category: "Milk Drink",
      name: "Strawberry Seasalt (16oz)",
      price: "PHP 110.00",
    },
    {
      category: "Milk Drink",
      name: "Strawberry Seasalt (22oz)",
      price: "PHP 125.00",
    },

    // NON-COFFEE: COLD BREW
    {
      category: "Cold Brew",
      name: "Black Concentrate",
      price: "PHP 70.00",
    },
    {
      category: "Cold Brew",
      name: "Caramel Swing",
      price: "PHP 80.00",
    },
    {
      category: "Cold Brew",
      name: "Vanilla Groove",
      price: "PHP 80.00",
    },
    {
      category: "Cold Brew",
      name: "Mocha Retro Bland",
      price: "PHP 80.00",
    },

    // NON-COFFEE: FRAPPE
    {
      category: "Frappe",
      name: "Mocha",
      price: "PHP 135.00",
    },
    {
      category: "Frappe",
      name: "Caramel",
      price: "PHP 135.00",
    },
    {
      category: "Frappe",
      name: "Matcha",
      price: "PHP 140.00",
    },
    {
      category: "Frappe",
      name: "Strawberry & Cream",
      price: "PHP 140.00",
    },
    {
      category: "Frappe",
      name: "Blueberry & Cream",
      price: "PHP 140.00",
    },
    {
      category: "Frappe",
      name: "Chocolate Oreo",
      price: "PHP 145.00",
    },
    {
      category: "Frappe",
      name: "Vanilla Oreo",
      price: "PHP 145.00",
    },
  ];

  const content = (
    <>
      <div className="overflow-hidden rounded-lg border border-secondary bg-primary">
        <div className="max-w-full max-h-[calc(100vh-10rem)] overflow-x-auto custom-scrollbar">
          <Table>
            <TableHeader className="border-b border-secondary bg-secondary text-primary sticky top-0 z-30 text-xs">
              <TableRow>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-center"
                >
                  No.
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-start"
                >
                  Category
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-start"
                >
                  Name
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-start"
                >
                  Price
                </TableCell>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-gray-100 text-secondary text-sm">
              {(products.length ?? 0) > 0 ? (
                products.map((product, index) => (
                  <TableRow
                    className="hover:bg-secondary hover:text-primary"
                    key={index}
                  >
                    <TableCell className="px-4 py-3 text-center">
                      {index + 1}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-start">
                      {product.category}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-start">
                      {product.name}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-start">
                      {product.price}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell className="px-4 py-3 text-center">
                    No Records Found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );

  return (
    <>
      <ComponentCard title="Products">{content}</ComponentCard>
    </>
  );
};

export default ProductList;
