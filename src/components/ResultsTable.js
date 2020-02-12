import React from "react";

function ResultsTable(props) {
    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Photo</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">DOB</th>
                </tr>
            </thead>
            <tbody>
                {/* {
                props.employees.map(employee => {
                    return(
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    )
                })
                } */}

            </tbody>
        </table>
    );
};

export default ResultsTable;