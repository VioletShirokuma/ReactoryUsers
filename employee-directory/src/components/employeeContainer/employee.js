import React, { Component } from "react";
import Header from "../header/header";
import { getEmployees } from "../../utils/employeeData";
import { getGenders } from "../../utils/genders";
import "./employee.css";
import "bootstrap/dist/css/bootstrap.css";
import ListGroup from "../../utils/listGroup";
import Pagination from "../pagination/pagination";
import paginate from "../../utils/paginate";
import EmployeesTable from "../employeeTable/employeeTable";
import _ from "lodash";
class Employee extends Component {
  state = {
    employees: [],
    gender: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: "picture", order: "asc" }
  };

  componentDidMount() {
    const genders = [{ _id: "", name: "All" }, ...getGenders()];
    this.setState({ employees: getEmployees(), gender: genders });
  }

  handleGenderSelect = gender => {
    console.log(gender);
    this.setState({ selectedGender: gender, currentPage: 1 });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };
  render() {
    const { selectedGender, pageSize, currentPage, sortColumn } = this.state;

    const filtered =
      selectedGender && selectedGender._id
        ? this.state.employees.filter(e => e.gender._id === selectedGender._id)
        : this.state.employees;
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const employees = paginate(sorted, currentPage, pageSize);
    return (
      <div className="row">
        <Header />
        <div className="col">
          <ListGroup
            items={this.state.gender}
            selectedItem={this.state.selectedGender}
            onItemSelect={this.handleGenderSelect}
          />

          <p className="employeeCount">
            Showing {filtered.length} Employees in the DB
          </p>
          <EmployeesTable
            employees={employees}
            onSort={this.handleSort}
            sortColumn={sortColumn}
          />
          <Pagination
            itemsCount={filtered.length}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Employee;