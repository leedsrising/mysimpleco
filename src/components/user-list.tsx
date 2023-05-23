// Import deps
import React from 'react'

// Import components
import { UserListRow } from './user-list-row.tsx'

// Import styles
import './../styles/user-list.css'

// Create interfaces
interface userUI {
  id: number;
  name: string;
  email: string;
  service: string;
}

interface userListUI {
  users: userUI[];
  loading: boolean;
  handleUserRemove: (id: number, name: string) => void;
}

// Create UserList component
export const UserList = (props: userListUI) => {
  // Show loading message
  if (props.loading) return <p>User List is loading...</p>

  return (
    <table className="table">
        <thead>
          <tr>
            <th className="table-head-item" />

            <th className="table-head-item">Name</th>

            <th className="table-head-item">Email</th>

            <th className="table-head-item">Service</th>

            <th className="table-head-item" />
          </tr>
        </thead>

        <tbody className="table-body">
          {props.users.length > 0 ? (
            props.users.map((user: userUI, idx) => (
              <UserListRow
                key={user.id}
                user={user}
                position={idx + 1}
                handleUserRemove={props.handleUserRemove}
              />
              )
            )
          ) : (
            <tr className="table-row">
              <td className="table-item" style={{ textAlign: 'center' }} colSpan={6}>There are no books to show. Create one!</td>
            </tr>
          )
        }
        </tbody>
    </table>
  )
}