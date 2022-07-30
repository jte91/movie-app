import Image from "next/image";
import HeaderIcon from "./HeaderIcon";
import { HomeIcon, UserIcon, PhoneIcon, InformationCircleIcon} from '@heroicons/react/solid'

export default function Header() {
    return (
        <div>
           <div className="">
            <HeaderIcon Icon={HomeIcon} title="HOME"/>
            <HeaderIcon Icon={UserIcon} title="ACCOUNT"/>
            <HeaderIcon Icon={PhoneIcon} title="CONTACT"/>
            <HeaderIcon Icon={InformationCircleIcon} title="ABOUT"/>
           </div>
           <Image
           src="https://volsiz.ru/wp-content/uploads/2021/12/imdb.jpg"
           width={100}
           height={100}/>
        </div>
    )
}