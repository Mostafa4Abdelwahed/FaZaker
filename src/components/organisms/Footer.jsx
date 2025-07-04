import Link from "next/link"
import Container from "../atoms/Container"
import Logo from "../atoms/Logo"
import Input from "../atoms/Input"
import Button from "../atoms/Button"

function Footer() {
    return (
        <Container className="bg-white border-t border-t-gray-200 py-9">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-x-7 gap-y-10">
                <div>
                    <Logo className="w-32" />
                    <p className="text-base font-medium mt-3">فَذَكِّر… مساحة إيمانية هادئة تجمع بين الذكر والعلم والخشوع، تُرافقك في رحلتك مع القرآن والتقوى</p>
                </div>
                <div>
                    <h1 className="text-xl font-bold">روابط مهمة</h1>
                    <ul className="flex flex-col gap-1 mt-3">
                        <li><Link className="text-main font-medium text-lg" href={"/"}>إبلاغ عن مشكلة</Link></li>
                        <li><Link className="text-main font-medium text-lg" href={"/"}>سياسة الخصوصية</Link></li>
                        <li><Link className="text-main font-medium text-lg" href={"/"}>تواصل معنا</Link></li>
                        <li><Link className="text-main font-medium text-lg" href={"/"}>من نحن</Link></li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-xl font-bold">صفحات مهمة</h1>
                    <ul className="flex flex-col gap-1 mt-3">
                        <li><Link className="text-main font-medium text-lg" href={"/"}>الاسئله الشائعه</Link></li>
                        <li><Link className="text-main font-medium text-lg" href={"/"}>اتفاقية الاستخدام</Link></li>
                        <li><Link className="text-main font-medium text-lg" href={"/"}>شروط الاستخدام</Link></li>
                    </ul>
                </div>
                <div>
                    <Input placeholder="البريد الإلكتروني" className="bg-transparent !placeholder-main !text-main focus:!border border w-full border-main" />
                    <Button className="mt-2.5 !px-10">تسجيل</Button>
                </div>
            </div>
            <p className="text-center mx-auto font-medium w-full mt-11">© 2025 فَذَكِّر.  جميع الحقوق محفوظة. نسأل الله القبول والتوفيق </p>
        </Container>
    )
}

export default Footer
