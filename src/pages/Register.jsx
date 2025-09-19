import Navbar from "../components/Navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { isValidation } from "../validation";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setUser } from "../states/auth-slice";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const dispatch = useDispatch();
  function hundleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const resData = {};
    for (const [key, value] of formData.entries()) {
      resData[key] = value;
    }

    const result = isValidation(resData);

    if (result) {
      const { target, message } = result;
      e.target[target].focus();
      toast.error(message);
    } else {
      dispatch(setUser(resData));
      toast.success("Muvaffaqiyatli kirdingiz!");
      e.target.reset();
    }
  }
  return (
    <>
      <Navbar />
      <div className="flex h-screen items-center justify-center">
        <Card className="w-full max-w-sm text-center">
          <CardHeader>
            <CardTitle className="text-2xl">Akkauntingizni yarating</CardTitle>
            <CardDescription>Keling boshlaymiz!</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={hundleSubmit}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="fullname">Ism & familiya</Label>
                  <Input
                    id="fullname"
                    type="text"
                    name="fullname"
                    placeholder="Ism va familiya kiriting"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="m@example.com"
                  />
                </div>

                <div className="relative grid gap-2">
                  <Label htmlFor="password">Parol</Label>
                  <Input
                    name="password"
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="******"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-[32px] right-3 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                <div className="relative grid gap-2">
                  <Label htmlFor="confirmPassword">Parolni tasdiqlash</Label>
                  <Input
                    name="confirmPassword"
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="******"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute top-[32px] right-3 text-gray-500 hover:text-gray-700"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="mt-4 w-full cursor-pointer bg-[#f67a3d] text-white hover:bg-[#f67a3d] hover:opacity-90"
              >
                Ro'yxatdan o'tish
              </Button>

              <div className="text-muted-foreground mt-3 text-sm">
                Allaqachon akkauntingiz bormi?
                <Link
                  to="/login"
                  className="ml-1 text-blue-500 hover:underline"
                >
                  Kirish
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
