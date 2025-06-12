import { Badge } from "@/shared/ui/kit/badge";


export default function Badgers({ props }: { props: string | number }) {
    return <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums absolute bottom-2.5 left-4.5  " variant={"destructive"}>{props}

    </Badge>



}