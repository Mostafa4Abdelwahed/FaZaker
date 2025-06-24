import { Icon } from "@iconify/react"
import Input from "../atoms/Input"

function SearchBox() {
    return (
        <div className="hidden xl:block relative">
            <Input type="text" placeholder="أبحث عن سورة أو حديث أو..!" className="min-w-xs pr-12" />
            <Icon icon={"gg:search"} className="absolute text-white top-3.5 right-3.5" fontSize={26} />
        </div>
    )
}

export default SearchBox
