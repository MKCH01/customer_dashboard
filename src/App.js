import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import StatsContainer from "./StatsContainer";
import CustomersContainer from "./CustomersContainer";
import _ from "lodash";
import OrdersContainer from "./OrdersContainer";

const customersData = [
  { Data: "2020-04-29", Phone: "9455622241", Name: "Shankra", Amount: 260 },
  { Data: "2020-04-29", Phone: "9455622241", Name: "Shankra", Amount: 260 },
  { Data: "2020-04-29", Phone: "9455622241", Name: "Shankra", Amount: 260 },
  { Data: "2020-04-29", Phone: "9455622241", Name: "Shankra", Amount: 260 },
  { Data: "2020-04-29", Phone: "9455622241", Name: "Shankra", Amount: 260 },
  { Data: "2020-04-29", Phone: "9455622241", Name: "Shankra", Amount: 260 },
  { Data: "2020-04-29", Phone: "9455622241", Name: "Shankra", Amount: 260 },
  { Data: "2020-04-29", Phone: "9455622248", Name: "Shankra", Amount: 260 },
  { Data: "2020-04-29", Phone: "9455622290", Name: "Shankra", Amount: 260 },
  {
    Data: "2021-04-29",
    Phone: "9128400410",
    Name: "Manish Kumar",
    Amount: 2500,
  },
  {
    Data: "2021-04-29",
    Phone: "9128400410",
    Name: "Manish Kumar",
    Amount: 2500,
  },

  { Data: "2020-04-28", Phone: "9455622242", Name: "Manish", Amount: 270 },
  { Data: "2020-04-27", Phone: "9455622243", Name: "Rahul", Amount: 280 },
  { Data: "2020-04-26", Phone: "9455622244", Name: "Abhay", Amount: 290 },
  { Data: "2020-04-25", Phone: "9455622245", Name: "Vinay", Amount: 300 },
  { Data: "2020-04-24", Phone: "9455622246", Name: "Ajay", Amount: 360 },
  { Data: "2020-04-23", Phone: "9455622247", Name: "Lukesh", Amount: 370 },
  { Data: "2020-04-22", Phone: "9455622248", Name: "Sam", Amount: 380 },
  { Data: "2020-04-21", Phone: "9455622249", Name: "John", Amount: 390 },
  { Data: "2020-04-20", Phone: "9455622278", Name: "Smith", Amount: 400 },
  { Data: "2020-04-29", Phone: "9455622241", Name: "Shankra", Amount: 260 },
  { Data: "2020-04-28", Phone: "9455622242", Name: "Manish", Amount: 270 },
  { Data: "2020-04-27", Phone: "9455622243", Name: "Rahul", Amount: 280 },
  { Data: "2020-04-26", Phone: "9455622234", Name: "Abhay", Amount: 290 },
  { Data: "2020-04-25", Phone: "9455622245", Name: "Vinay", Amount: 300 },
  { Data: "2020-04-24", Phone: "9455622246", Name: "Ajay", Amount: 360 },
  { Data: "2020-04-23", Phone: "9455622247", Name: "Lukesh", Amount: 370 },
  { Data: "2020-04-22", Phone: "9455622248", Name: "Sam", Amount: 380 },
  { Data: "2020-04-21", Phone: "9455622249", Name: "John", Amount: 390 },
  { Data: "2020-04-20", Phone: "9455622278", Name: "Smith", Amount: 400 },
  { Data: "2020-04-29", Phone: "9455622241", Name: "Shankra", Amount: 260 },
  { Data: "2020-04-28", Phone: "9455622242", Name: "Manish", Amount: 270 },
  { Data: "2020-04-27", Phone: "9455622243", Name: "Rahul", Amount: 280 },
  { Data: "2020-04-26", Phone: "9455622244", Name: "Abhay", Amount: 290 },
  { Data: "2020-04-25", Phone: "9455622245", Name: "Vinay", Amount: 300 },
  { Data: "2020-04-24", Phone: "9455622246", Name: "Ajay", Amount: 360 },
  { Data: "2020-04-23", Phone: "9455622247", Name: "Lukesh", Amount: 370 },
  { Data: "2020-04-22", Phone: "9455622248", Name: "Sam", Amount: 380 },
  { Data: "2020-04-21", Phone: "9455622249", Name: "John", Amount: 390 },
  { Data: "2020-04-20", Phone: "9455622278", Name: "Smith", Amount: 400 },
];
function App(props) {
  const [customers, setCustomers] = useState(customersData);
  //console.log(customers);

  const uniqueCustomer = () => {
    const result = _.uniqBy(customers, "Phone");
    return result;
  };

  const orderTotal = (customer) => {
    let sum = 0;
    for (const cust of customer) {
      sum += cust.Amount;
    }
    return sum;
  };

  return (
    <div className="container">
      <div className="container">
        <h1>Customer Dashboard</h1>
        <StatsContainer
          customers={customers}
          uniqueCustomer={uniqueCustomer}
          orderTotal={orderTotal}
        />
        <CustomersContainer
          uniqueCustomer={uniqueCustomer}
          customers={customers}
          orderTotal={orderTotal}
        />
        <OrdersContainer
          customers={customers}
          uniqueCustomer={uniqueCustomer}
        />
      </div>
    </div>
  );
}

export default App;
