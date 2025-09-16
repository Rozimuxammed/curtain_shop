import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import Navbar from "../components/Navbar";
import { isValidation } from "../validation";
import { toast } from "sonner";
import { Link } from "react-router-dom";

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);

    function handleSubmit(e) {
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
      console.log(resData);
      e.target.reset();
    }
  }

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-screen">
        <Card className="w-full h-[460px] max-w-sm text-center">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Qaytib kelganingizdan xursandmiz
            </CardTitle>
            <CardDescription>
              Kirish uchun maʼlumotlaringizni kiriting
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-6 mt-10">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="m@example.com"
                  />
                </div>

                <div className="grid gap-2 relative">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Parol</Label>
                    <a
                      href="#"
                      className="text-sm underline-offset-4 hover:underline"
                    >
                      Parolni unutdingizmi?
                    </a>
                  </div>
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="******"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-[38px] text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full cursor-pointer mt-10 bg-[#f67a3d] text-white hover:bg-[#f67a3d] hover:opacity-90"
              >
                Kirish
              </Button>
              <div className="text-sm text-muted-foreground mt-4">
                Akkauntingiz yo'qmi? 
                <Link to="/register" className="text-blue-500 hover:underline ml-1">
                 Ro'yxatdan o'tish
                </Link>
        </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
