import React from "react";
import StatsItem from "./StatsItem";
import _ from "lodash";

function StatsContainer(props) {
  const { customers, uniqueCustomer, orderTotal } = props;

  const ordersCount = customers.length;

  // const orderTotal = () => {
  //   let sum = 0;
  //   for (const cust of customers) {
  //     sum += cust.Amount;
  //   }
  //   return sum;
  // };

  return (
    <div className="row mb-5">
      <StatsItem count={ordersCount} text="Orders" />
      <StatsItem count={orderTotal(customers)} text="Amount" />
      <StatsItem count={uniqueCustomer().length} text="Customers" />
    </div>
  );
}

export default StatsContainer;
