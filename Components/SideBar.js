import {
    ChevronDownIcon,
    ShoppingBagIcon,
    UserGroupIcon,
} from "@heroicons/react/outline";

import {
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,
    UsersIcon,
} from "@heroicons/react/solid";
import SidebarRow from "./SidebarRow"


function SideBar(){
    return(
        <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
            <SidebarRow Icon={UsersIcon} Title="Amis" />
            <SidebarRow Icon={UserGroupIcon} Title="Groupe" />
            <SidebarRow Icon={DesktopComputerIcon} Title="Watch" />
            <SidebarRow Icon={CalendarIcon} Title="Event" />
            <SidebarRow Icon={ClockIcon} Title="Rapelle" />
            <SidebarRow Icon={ChevronDownIcon} Title="Plus" />
        </div>
    )

}
export default SideBar;