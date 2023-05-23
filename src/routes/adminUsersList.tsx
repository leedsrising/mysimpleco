// @ts-check

// Import deps
import React, { useEffect, useState } from 'react'
import axios from 'axios'

// Import components
import { UserList } from '../components/userList'

// Import styles
import './../styles/admin-user-list.css'

export const Users = () => {
    // Prepare states
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [service, setService] = useState('')
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
  
    // Fetch all books on initial render
    useEffect(() => {
      fetchUsers()
    }, [])
  
    // Fetch all books
    const fetchUsers = async () => {
      // Send GET request to 'books/all' endpoint
      axios
        .get('http://localhost:4001/users/all')
        .then(response => {
          // Update the books state
          setUsers(response.data)
  
          // Update loading state
          setLoading(false)
        })
        .catch(error => console.error(`There was an error retrieving the user list: ${error}`))
    }
  
    // Reset all input fields
    const handleInputsReset = () => {
      setName('')
      setEmail('')
      setService('')
    }
  
    // Create new user
    const handleUserCreate = () => {
      // Send POST request to 'users/create' endpoint
      axios
        .post('http://localhost:4001/users/create', {
          name: name,
          email: email,
          service: service
        })
        .then(res => {
          console.log(res.data)
  
          // Fetch all users to refresh
          fetchUsers()
        })
        .catch(error => console.error(`There was an error creating the ${name} user: ${error}`))
    }
  
    // Submit new user
    const handleUserSubmit = () => {
      // Check if all fields are filled
      if (name.length > 0 && email.length > 0) {
        // Create new book
        handleUserCreate()
  
        console.info(`User ${name} added.`)
  
        // Reset all input fields
        handleInputsReset()
      }
    }
  
    // Remove book
    const handleRemove = (id: number, title: string) => {
      // Send PUT request to 'books/delete' endpoint
      axios
        .put('http://localhost:4001/users/delete', { id: id })
        .then(() => {
          console.log(`User ${name} removed.`)
  
          // Fetch all users to refresh
          fetchUsers()
        })
        .catch(error => console.error(`There was an error removing the ${title} book: ${error}`))
    }
  
    // Reset book list (remove all books)
    const handleListReset = () => {
      // Send PUT request to 'books/reset' endpoint
      axios.put('http://localhost:4001/users/reset')
      .then(() => {
        // Fetch all books to refresh
        // the books on the bookshelf list
        fetchUsers()
      })
      .catch(error => console.error(`There was an error resetting the book list: ${error}`))
    }
  
    return (
      <div className="book-list-wrapper">
        {/* Form for creating new book */}
        <div className="book-list-form">
          <div className="form-wrapper" onSubmit={handleUserSubmit}>
            <div className="form-row">
              <fieldset>
                <label className="form-label" htmlFor="title">Enter name:</label>
                <input className="form-input" type="text" id="title" name="title" value={name} onChange={(e) => setName(e.currentTarget.value)} />
              </fieldset>
  
              <fieldset>
                <label className="form-label" htmlFor="author">Enter email:</label>
                <input className="form-input" type="text" id="author" name="author" value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
              </fieldset>
            </div>
  
            <div className="form-row">
              <fieldset>
                <label className="form-label" htmlFor="pubDate">Enter service:</label>
                <input className="form-input" type="text" id="pubDate" name="pubDate" value={service} onChange={(e) => setService(e.currentTarget.value)} />
              </fieldset>
            </div>
          </div>
  
          <button onClick={handleUserSubmit} className="btn btn-add">Add the book</button>
        </div>

        <UserList users={users} loading={loading} handleUserRemove={handleRemove} />
  
        {/* Show reset button if list contains at least one book */}
        {users.length > 0 && (
          <button className="btn btn-reset" onClick={handleListReset}>Reset users list.</button>
        )}
      </div>
    )
  }