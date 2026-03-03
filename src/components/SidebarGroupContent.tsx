import { Note } from "@prisma/client";

type props = {
    notes: Note[];
}


const SidebarGroupContent = ({notes}: props) => {
    console.log(notes);
    return <div>Your notes here</div>
}

export default SidebarGroupContent;