import { Blinds, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Navbar() {
  const { user } = useSelector((state) => state.auth);
  const { pathname } = useLocation();

  return (
    <nav>
      <div className="container mx-auto py-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Blinds className="text-[#f67a3d] w-10 h-10" />
          <h1 className="text-4xl font-bold uppercase">
            <Link to={"/"}>Curtain shop</Link>
          </h1>
        </div>
        {user ? (
          <div className="flex items-center gap-4">
            <Button size="icon" variant="outline">
              <Link to={"/shoppingCard"}>
                <ShoppingCart />
              </Link>
            </Button>
            <Button className="rounded-full w-10 h-10" variant="outline">
              <Link to={"/profile"}>
                <User />
              </Link>
            </Button>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <Button size="icon" variant="outline">
              <Link to={"/shoppingCard"}>
                <ShoppingCart />
              </Link>
            </Button>
            <Button variant="outline">
              <Link to={pathname === "/login" ? "/register" : "/login"}>
                {pathname === "/login" ? "Ro'yxatdan o'tish" : "Kirish"}
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
