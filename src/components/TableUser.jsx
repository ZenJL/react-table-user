import React from 'react'

import {Table} from 'reactstrap';

function TableUser({form, displayTable}) {
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
                    <tr>
                        <th scope="row">
                            {form.email}
                        </th>
                        <td>
                            {form.name}
                        </td>
                        <td>
                            {form.password}
                        </td>
                        <td>
                            {form.confirmPassword}
                        </td>
                        <td>
                            {form.status}
                        </td>
                        <td>
                            {form.bio}
                        </td>
                        <td>
                            {form.gender}
                        </td>
                        <td>
                            {form.policy}
                        </td>
                    </tr>
                </tbody>
            </Table>

        </div>
    )
}

export default TableUser
