import React from 'react'

import {Table} from 'reactstrap';

function TableUser({users, displayTable}) {
    return (
        <div style={{display: displayTable}}>
            <hr/>
            <h3>Table User</h3>
            <Table
                bordered
                hover
                responsive
                striped
                
            >
                <thead>
                    <tr>
                        <th>
                            Email
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Password
                        </th>
                        <th>
                            Confirmed Password
                        </th>
                        <th>
                            Status
                        </th>
                        <th>
                            Bio
                        </th>
                        <th>
                            Gender
                        </th>
                        <th>
                            Policy
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr>
                            <th scope="row">
                                {user.email}
                            </th>
                            <td>
                                {user.name}
                            </td>
                            <td>
                                {user.password}
                            </td>
                            <td>
                                {user.confirmPassword}
                            </td>
                            <td>
                                {user.status}
                            </td>
                            <td>
                                {user.bio}
                            </td>
                            <td>
                                {user.gender}
                            </td>
                            <td>
                                {user.policy ? 'agree' : 'not agree'}
                            </td>
                        </tr>
                    ))}
                    
                </tbody>
            </Table>

        </div>
    )
}

export default TableUser
