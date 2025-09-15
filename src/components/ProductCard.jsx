import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "./ui/slider";

const ProductPage = () => {
  const products = [
    {
      id: 1,
      name: "Elegant Sheer Fabric",
      price: 15,
      image:
        "https://alnassaj.com/wp-content/uploads/2024/10/WayfairBasics%C2%AERothwellModernSheerRodPocketCurtainPanel.webp",
      category: "Sheer",
    },
    {
      id: 2,
      name: "Blackout Curtain Material",
      price: 20,
      image:
        "https://lirp.cdn-website.com/24c2a0ba/dms3rep/multi/opt/triple-weave-fabric-640w.jpg",
      category: "Blackout",
    },
    {
      id: 3,
      name: "Linen Blend Fabric",
      price: 12,
      image:
        "https://alnassaj.com/wp-content/uploads/2024/10/WayfairBasics%C2%AERothwellModernSheerRodPocketCurtainPanel.webp",
      category: "Linen",
    },
    {
      id: 4,
      name: "Velvet Drape Material",
      price: 25,
      image:
        "https://lirp.cdn-website.com/24c2a0ba/dms3rep/multi/opt/triple-weave-fabric-640w.jpg",
      category: "Velvet",
    },
    {
      id: 5,
      name: "Curtain Rod Set",
      price: 30,
      image:
        "https://alnassaj.com/wp-content/uploads/2024/10/WayfairBasics%C2%AERothwellModernSheerRodPocketCurtainPanel.webp",
      category: "Accessories",
    },
    {
      id: 6,
      name: "Tieback Accessories",
      price: 10,
      image:
        "https://lirp.cdn-website.com/24c2a0ba/dms3rep/multi/opt/triple-weave-fabric-640w.jpg",
      category: "Accessories",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="text-center font-bold">
        <h1 className="mb-4 text-4xl font-bold">Shop Our Collection</h1>
        <p className="mb-6 text-gray-500">
          Find the perfect materials and accessories for your home.
        </p>
      </div>

      <div className="flex flex-col gap-6 md:flex-row">
        {/* Filters Sidebar */}
        <div className="w-full rounded-lg bg-white p-4 shadow md:w-1/4">
          <h3 className="mb-4 text-lg font-semibold">Filters</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-md mb-2 font-medium">Category</h4>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> All Products
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> By the Meter
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> By the Piece
                </label>
              </div>
            </div>
            <div>
              <h4 className="text-md mb-2 font-medium">Material</h4>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Sheer
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Blackout
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Linen
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Velvet
                </label>
              </div>
            </div>

            <div>
              <h4 className="text-md mb-2 font-medium">Price Range</h4>
              <Slider defaultValue={[33]} max={100} step={1} />
              <div className="flex justify-between text-sm text-gray-500">
                <span>$0</span>
                <span>$100</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="w-full md:w-3/4">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-gray-500">Showing of 144 results</p>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by: Featured" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="priceLowToHigh">
                  Price: Low to High
                </SelectItem>
                <SelectItem value="priceHighToLow">
                  Price: High to Low
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {products.map((product) => (
              <Card key={product.id} className="mx-auto w-full max-w-sm">
                <CardHeader>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-48 w-full object-cover"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600">
                    ${product.price}
                    {product.category === "Accessories" ? "/pair" : "/meter"}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-orange-500 text-white hover:bg-orange-600">
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
