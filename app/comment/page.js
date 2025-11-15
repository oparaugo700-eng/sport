import { auth } from "@/auth"
import Comments from "./comments"
import { Check } from "@/config/check"

export default async function Page() {

    const session = await auth()

    return (
        <>
            <Check />
            <Comments userId={session?.user} />
        </>
    )
}