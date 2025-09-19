import diningroom from "../assets/diningroom.jpg";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="container mx-auto mt-24">
      <div
        className="relative h-[600px] w-full rounded-[10px] bg-cover bg-center"
        style={{ backgroundImage: `url(${diningroom})` }}
      >
        <div className="absolute inset-0 rounded-[10px] bg-black/50" />

        <h1 className="relative z-10 w-[60%] p-10 text-6xl leading-[1.3] font-semibold text-white">
          Sizga xos pardalar bilan uyingizga yangi nafosat bag‘ishlang!
        </h1>
        <p className="relative z-10 w-[60%] pl-10 text-xl leading-[1.3] font-normal text-white">
          Uyingizni yanada jozibador qilish uchun sifatli parda matolari va
          aksessuarlarini tanlang!
        </p>
        <Button
          variant="outline"
          className="relative z-10 m-10 cursor-pointer border-0 bg-[#fa7315] px-10 py-5 text-white duration-500"
        >
          Hozir sotib oling
        </Button>
      </div>
    </div>
  );
}
