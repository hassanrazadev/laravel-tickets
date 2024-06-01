import { ColumnDef } from "@tanstack/react-table";
import { User } from "@/types";
import {Link, usePage} from "@inertiajs/react";
import {Button} from "@/Components/ui/button";
import {FaEdit, FaTrash} from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";


const useColumns = ({ deleteUserCallback: deleteUserCallback = (id: number) => {
} }) => {

    const {auth} = usePage().props;
    // @ts-ignore
    const user: User = auth.user;

    const columns: ColumnDef<User>[] = [
        {
            header: "Avatar",
            accessorKey: "avatar",
            cell: ({row}) => (
                <Avatar>
                    <AvatarImage src={row.original.avatar} />
                    <AvatarFallback>LT</AvatarFallback>
                </Avatar>
            ),
            enableSorting: false
        },{
            header: "Name",
            accessorKey: "name"
        }, {
            header: "Email",
            accessorKey: "email"
        }, {
            header: "Role",
            accessorKey: "role",
            cell: ({row}) => (<span className={"capitalize"}>{row.original.role.replace('_', ' ')}</span>)
        }, {
            header: "Created At",
            accessorKey: "created_at"
        }
    ];

    // @ts-ignore
    if (user.role === 'admin') {
        columns.push({
            header: "Action",
            cell: ({row}) => (
                <>
                    {user.id !== row.original.id && <>
                        <Link href={route('users.edit', {'user': row.original.id})}>
                            <Button size={'sm'} className={"py-1"}>
                                <FaEdit/>
                            </Button>
                        </Link>
                        <Button onClick={() => {deleteUserCallback(row.original.id as number)}} className={"ms-2"} variant={"destructive"} size={"sm"}>
                            <FaTrash />
                        </Button>
                    </>}
                </>
            ),
            enableSorting: false
        })
    }

    return columns;
}
export default useColumns;
