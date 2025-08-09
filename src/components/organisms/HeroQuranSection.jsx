function HeroQuranSection() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="hidden md:block space-y-4">
        <h1 className="font-bold text-3xl text-main text-center">
          هنا كلام الله… نورٌ يُتلى، وسكينة تسكن القلب.{" "}
        </h1>
        <h2 className="font-bold text-3xl text-main text-center">
          اقرأ، استمع، وتدبّر… فالقرآن رفيق دربك إلى الطمأنينة 🕊️📖
        </h2>
      </div>
      <div className="flex md:hidden flex-col items-center justify-center">
        <h1 className="font-bold text-2xl text-center text-main leading-snug">
          هنا كلام الله… نورٌ يُتلى، وسكينة تسكن القلب.  اقرأ، استمع، وتدبّر…
          فالقرآن رفيق دربك إلى الطمأنينة 🕊️📖
        </h1>
      </div>
    </div>
  );
}

export default HeroQuranSection;
