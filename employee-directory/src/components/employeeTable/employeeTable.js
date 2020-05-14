import React, { Component } from "react";
import TableHeader from "../tableHeader";

class EmployeesTable extends Component {
  columns = [
    { path: "picture", label: "Avatar" },
    { path: "name.first", label: "Name" },
    { path: "email", label: "Email" },
    { path: "location", label: "Location" },
    { key: "gender" },
    { key: "fullName" }
  ];
  render() {
    const { employees, onSort, sortColumn } = this.props;
    return (
      <table className="table table-dark table-hover table-responsive-md ">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <tbody>
          {employees.map(employee => (
            <tr key={employee._id}>
              <td>
                <img className="avatar" src={employee.picture} alt="avatar" />
              </td>
              <td>
                {employee.title}
                {employee.name.first}
                {employee.name.last}
              </td>
              <td>{employee.email}</td>
              <td>{employee.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default EmployeesTable;