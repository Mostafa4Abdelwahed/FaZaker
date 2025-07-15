
function HeroFavoritesSection() {
    return (
        <div className="flex flex-col items-center justify-center py-20">
            <div className="hidden md:block space-y-4">
                <h1 className="font-bold text-3xl text-main">هنا كل ما أحببته واقتربت له بقلبك… آيات، أدعية، دروس، </h1>
                <h2 className="font-bold text-3xl text-main text-center">ولحظات نور اخترت تحفظها معك دائمًا 🤍🌿</h2>
            </div>
            <div className="flex md:hidden flex-col items-center justify-center">
                <h1 className="font-bold text-2xl text-center text-main leading-snug">
                    هنا كل ما أحببته واقتربت له بقلبك… آيات، أدعية، دروس، ولحظات نور اخترت تحفظها معك دائمًا 🤍🌿
                </h1>
            </div>
        </div>
    )
}

export default HeroFavoritesSection
