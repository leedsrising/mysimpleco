// Import deps
import React from 'react'

// Create interfaces
interface UserListRowUI {
  position: number;
  user: {
    id: number;
    name: string;
    email: string;
    service: string;
  }
  handleUserRemove: (id: number, title: string) => void;
}

// Create UserListRow component
export const UserListRow = (props: UserListRowUI) => (
  <tr className="table-row">
    <td className="table-item">
      {props.position}
    </td>

    <td className="table-item">
      {props.user.name}
    </td>

    <td className="table-item">
      {props.user.email}
    </td>

    <td className="table-item">
      {props.user.service}
    </td>
    <td className="table-item">
      <button
        className="btn btn-remove"
        onClick={() => props.handleUserRemove(props.user.id, props.user.name)}>
        Remove book
      </button>
    </td>
  </tr>
)