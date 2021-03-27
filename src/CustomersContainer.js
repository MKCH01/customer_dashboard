import React, { useState } from "react";
//import _ from "lodash";
import CustomersTable from "./CustomersTable";
import Search from "./Search";

function CustomersContainer(props) {
  const { uniqueCustomer, customers, orderTotal } = props;
  const uniqueCustomers = uniqueCustomer();
  //console.log("unique log", uniqueCustomers);

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
  };

  const filteredUniqueCustomer = () => {
    const result = uniqueCustomers.filter((ele) => {
      return (
        ele.Name.toLowerCase().includes(searchTerm) ||
        ele.Phone.toString().includes(searchTerm)
      );
    });
    return result;
  };

  // const orderTotal = (customer) => {
  //   let sum = 0;
  //   for (const cus of customer) {
  //     sum += cus.Amount;
  //   }
  //   return sum;
  // };

  const showDetails = (cust) => {
    const customerOrders = customers.filter(
      (customer) => customer.Phone === cust.Phone
    );
    const customerOrderTotal = orderTotal(customerOrders);

    alert(`Name:- ${cust.Name} 
Order:- ${customerOrders.length}
Amount:- ${customerOrderTotal}
    `);
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-7">
          {" "}
          <h1>Listing Customers:- {uniqueCustomer().length}</h1>
        </div>
        <div className="col-md-5">
          {" "}
          <Search searchTerm={searchTerm} handleChange={handleChange} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <CustomersTable
            customers={filteredUniqueCustomer()}
            showDetails={showDetails}
          />
        </div>
      </div>
    </div>
  );
}

export default CustomersContainer;
