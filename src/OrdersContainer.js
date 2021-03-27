import React from "react";
import OrdersTable from "./OrdersTable";
import OrdersChart from "./OrdersChart";

function OrdersContainer(props) {
  const { customers, uniqueCustomer } = props;
  const uniqueCustomers = uniqueCustomer();

  const customerFrequency = () => {
    const frequencyObj = { 1: 0, 2: 0, 3: 0, 4: 0, "5+": 0 };

    uniqueCustomers.forEach((customer) => {
      const customerOrder = customers.filter((c) => {
        return c.Phone === customer.Phone;
      });

      if (customerOrder.length >= 5) {
        frequencyObj["5+"]++;
      } else {
        frequencyObj[customerOrder.length]++;
      }
    });
    return frequencyObj;
  };
  //console.log("cusorder", customerFrequency());

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <h1>Orders Distribution</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          {" "}
          <OrdersTable data={customerFrequency} />
        </div>
        <div className="col-md-6">
          <OrdersChart data={customerFrequency} />
        </div>
      </div>
    </div>
  );
}

export default OrdersContainer;
