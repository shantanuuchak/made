import { UserRoundPlusIcon } from "lucide-react"

interface NewUserProps {
    name: string;
}

function NewUser({ name }: NewUserProps) {
    return <div className="flex items-center gap-1 justify-left text-gray-800"><UserRoundPlusIcon /> <strong>{name}</strong> joined the chat.</div>
}

export default NewUser