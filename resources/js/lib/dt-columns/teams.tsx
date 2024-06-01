import { ColumnDef } from "@tanstack/react-table";
import {Team, User} from "@/types";
import {FaTrash, FaEdit, FaEye} from "react-icons/fa";

import { usePage, Link } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";

const useColumns = ({ deleteTeamCallback = (id: number) => {} }) => {
    const { auth } = usePage().props;
    // @ts-ignore
    const user: User = auth.user

    const columns: ColumnDef<Team>[] = [
        {
            header: "Name",
            accessorKey: "name"
        },{
            header: "Description",
            accessorKey: "description",
            cell: ({row}) => (
                <div className={"text-wrap"} dangerouslySetInnerHTML={{__html: row.getValue('description')}}/>
            ),
            enableSorting: false
        }, {
            header: "Manager",
            cell: ({row}) => (
                <>{row.original.manager.name}</>
            ),
            id: 'manager_id',
            accessorKey:"manager",
            enableSorting: true
        },{
            header: "Created At",
            accessorKey: "created_at"
        },{
            header: "Action",
            cell: ({row}) => (
                <>
                    {user.permissions.includes('update_teams') &&
                        <Link href={route('teams.edit', {team: row.original.id})}>
                            <Button size={"sm"}>
                                <FaEdit />
                            </Button>
                        </Link>
                    }

                    {user.permissions.includes('delete_teams') &&
                        <Button onClick={() => {deleteTeamCallback(row.original.id as number)}} className={"ms-2"} variant={"destructive"} size={"sm"}>
                            <FaTrash />
                        </Button>
                    }

                    {user.permissions.includes('view_teams') &&
                        <Link href={route('teams.show', { team: row.original.id })}>
                            <Button variant={"default"} size={"sm"} className={"ms-2"}>
                                <FaEye />
                            </Button>
                        </Link>
                    }
                </>
            )
        },
    ]

    return columns;
}

export default useColumns;
