import React from "react";
//import _ from "lodash";
import CustomersTable from "./CustomersTable";

function CustomersContainer(props) {
  const { uniqueCustomer } = props;

  return (
    <div>
      <h1>Listing Customers:- {uniqueCustomer().length}</h1>
      <CustomersTable customers={uniqueCustomer()} />
    </div>
  );
}

export default CustomersContainer;
