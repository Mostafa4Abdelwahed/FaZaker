import FloatingAlert from "../molecules/FloatingAlert"

function FloatingAlertData() {
    return (
        <div className="fixed left-3 bottom-3 lg:left-5 lg:bottom-5 2xl:bottom-10 2xl:right-10 space-y-3 z-50">
            <FloatingAlert icon="solar:watch-round-linear" text="باقي على صلاة العشاء ١٤ دقيقة" />
            <FloatingAlert icon="solar:smile-square-bold" text="باقي على صلاة العشاء ١٤ دقيقة" />
            <FloatingAlert icon="solar:chat-round-like-bold" text="باقي على صلاة العشاء ١٤ دقيقة" />
        </div>
    )
}

export default FloatingAlertData
