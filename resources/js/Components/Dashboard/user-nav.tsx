import { Avatar, AvatarFallback, AvatarImage } from "@/shadcn/Components/ui/avatar"
import { Button } from "@/shadcn/Components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/shadcn/Components/ui/dropdown-menu"
import { Link } from "@inertiajs/react"

interface UserNavProps {
    auth: { [key: string]: string };
}

export function UserNav({ auth }: UserNavProps) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-10 w-10 bg-foreground">
                        <AvatarImage src="#" alt="@shadcn" />
                        <AvatarFallback>{auth.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">{auth.name}</p>
                        <p className="text-xs leading-none text-muted-foreground">
                            {auth.email}
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <Link href={route("profile.edit")}>
                        <DropdownMenuItem>
                            Profile
                        </DropdownMenuItem>
                    </Link>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <Link method={"post"} href={route("logout")}>
                    <DropdownMenuItem>
                        Log out
                    </DropdownMenuItem>
                </Link>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
