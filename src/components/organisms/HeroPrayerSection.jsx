import Button from "@/components/atoms/Button";
import { Icon } from "@iconify/react";

export default function HeroPrayerSection() {
    return (
        <div className="flex flex-col items-center pt-20">
            <div className="flex flex-col gap-2 text-main">
                <h1 className="text-3xl md:text-4xl font-bold text-center">باقي علي صلاة العشاء <span className="text-main-100">١٤ دقيقة</span>: يمكنك معرفة أقرب مسجد</h1>
                <div className="flex items-center gap-3 text-center mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold">أليك عن طريق الضغط علي</h2>
                    <svg className="w-16 hidden md:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 11" fill="none">
                        <g clipPath="url(#clip0_130_190)">
                            <path d="M68.645 5.93684L44.6801 5.51563C36.7287 5.37265 28.7774 5.23703 20.826 5.09405C16.3352 5.01322 11.8441 4.81458 7.35378 4.87366C7.0005 4.87483 6.46061 5.07545 6.26675 5.65783C6.07288 6.24022 6.43548 6.48202 6.71645 6.49581C10.7053 6.68876 14.7019 6.64605 18.6946 6.7138C22.6873 6.78155 26.6843 6.84192 30.6813 6.91703L54.5439 7.33122L68.0119 7.55162C68.3609 7.55046 68.9008 7.34985 69.0904 6.77484C69.28 6.19983 68.9259 5.94328 68.645 5.94421L68.645 5.93684Z" fill="#2D8771" />
                            <path d="M8.45104 8.52232C6.03214 8.14007 3.68686 6.85182 1.54358 4.8707L1.20745 6.18994C3.66135 4.29666 6.18086 2.93336 8.76458 1.6803C9.00255 1.56169 9.53339 1.1991 9.45485 0.61762C9.37631 0.0361396 8.75975 0.222281 8.54717 0.296625C5.79657 1.28514 3.09101 3.01725 0.530937 4.98452C0.276216 5.18419 -0.266324 5.87082 0.194802 6.30376C2.55158 8.49035 5.1352 9.77044 7.79262 10.2035C8.15461 10.2612 8.71969 9.95737 8.91788 9.39706C9.13293 8.78515 8.72787 8.57295 8.45106 8.52968L8.45104 8.52232Z" fill="#2D8771" />
                        </g>
                        <defs>
                            <clipPath id="clip0_130_190">
                                <rect width="69.1233" height="10" fill="white" transform="translate(69.1562 10) rotate(179.81)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <a target="_blank" href="https://www.awqaf.gov.ae/mosque/search">
                        <Button className="px-14 font-medium hidden md:block">المسجد</Button>
                    </a>
                </div>
                <div className="mx-auto md:hidden flex items-center justify-center flex-col">
                    <svg className="mx-auto w-16 my-10 -rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 11" fill="none">
                        <g clipPath="url(#clip0_130_190)">
                            <path d="M68.645 5.93684L44.6801 5.51563C36.7287 5.37265 28.7774 5.23703 20.826 5.09405C16.3352 5.01322 11.8441 4.81458 7.35378 4.87366C7.0005 4.87483 6.46061 5.07545 6.26675 5.65783C6.07288 6.24022 6.43548 6.48202 6.71645 6.49581C10.7053 6.68876 14.7019 6.64605 18.6946 6.7138C22.6873 6.78155 26.6843 6.84192 30.6813 6.91703L54.5439 7.33122L68.0119 7.55162C68.3609 7.55046 68.9008 7.34985 69.0904 6.77484C69.28 6.19983 68.9259 5.94328 68.645 5.94421L68.645 5.93684Z" fill="#2D8771" />
                            <path d="M8.45104 8.52232C6.03214 8.14007 3.68686 6.85182 1.54358 4.8707L1.20745 6.18994C3.66135 4.29666 6.18086 2.93336 8.76458 1.6803C9.00255 1.56169 9.53339 1.1991 9.45485 0.61762C9.37631 0.0361396 8.75975 0.222281 8.54717 0.296625C5.79657 1.28514 3.09101 3.01725 0.530937 4.98452C0.276216 5.18419 -0.266324 5.87082 0.194802 6.30376C2.55158 8.49035 5.1352 9.77044 7.79262 10.2035C8.15461 10.2612 8.71969 9.95737 8.91788 9.39706C9.13293 8.78515 8.72787 8.57295 8.45106 8.52968L8.45104 8.52232Z" fill="#2D8771" />
                        </g>
                        <defs>
                            <clipPath id="clip0_130_190">
                                <rect width="69.1233" height="10" fill="white" transform="translate(69.1562 10) rotate(179.81)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <a target="_blank" href="https://www.awqaf.gov.ae/mosque/search">
                        <Button className="px-14 font-medium">المسجد</Button>
                    </a>
                </div>
            </div>
            <Button type="outline" className="flex items-center gap-2 border-2 !px-3.5 mx-auto my-10 font-medium">توقيت محافظة القاهرة <Icon icon={"mynaui:chevron-left-square"} className="text-2xl" /></Button>
        </div>
    )
}
