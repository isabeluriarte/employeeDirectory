import React from "react";

function ResultsTable(props) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Photo</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.employees.map((employee, index) => {
                        return (
                            <tr key={index}>
                                <td>
                                    <img src={employee.picture.thumbnail} />
                                </td>
                                <td>{employee.name.first} {employee.name.last}</td>
                                <td>{employee.email}</td>
                                <td>{employee.phone}</td>
                            </tr>
                        )
                    })
                }

            </tbody>
        </table>
    );
};

export default ResultsTable;