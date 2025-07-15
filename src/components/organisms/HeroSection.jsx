import Logo from "../atoms/Logo"

function Hero() {
    return (
        <div className="flex flex-col items-center justify-center py-20">
            <div className="hidden md:block">
                <div className="flex items-center">
                    <Logo />
                    <h1 className="font-bold text-3xl text-main mr-3">حيث تبدأ رحلتك مع الإسلام كما يجب أن يُفهم: إيمانٌ</h1>
                </div>
                <h2 className="font-bold text-3xl text-main text-center">راسخ، وعبادة صحيحة، وقلبٌ حي باللة ☺️</h2>
            </div>
            <div className="flex md:hidden flex-col items-center justify-center">
                <Logo className="mx-auto mb-3" />
                <h1 className="font-bold text-2xl text-center text-main leading-snug">
                    حيث تبدأ رحلتك مع الإسلام كما يجب أن يُفهم: إيمانٌ
                    راسخ، وعبادة صحيحة، وقلبٌ حي باللة ☺️
                </h1>
            </div>
        </div>
    )
}

export default Hero
