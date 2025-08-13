import ErrorImage from "@/assets/404.svg";
import Image from "next/image";
import Container from "../atoms/Container";
import Button from "../atoms/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container className="min-h-screen flex flex-col items-center justify-center">
      <Image
        src={ErrorImage}
        className="mx-auto"
        alt="صفحة غير موجودة"
        width={500}
        height={500}
      />
      <div className="flex items-center justify-center gap-5 mt-16">
        <Link href={"/"}>
          <Button type="outline">اذهب للرئيسية</Button>
        </Link>
        <Link href={"/categories"}>
          <Button>تصفح الفئات</Button>
        </Link>
      </div>
    </Container>
  );
}
