import React from "react";

function OrdersTable(props) {
  const { data } = props;
  const datas = data();
  return (
    <div>
      <table className="table">
        <thead className="bg-dark">
          <th>No. of Orders</th>
          <th>Count of Customers</th>
        </thead>
        <tbody>
          {Object.keys(datas).map((ele) => {
            return (
              <tr>
                <td>{ele}</td>
                <td>{datas[ele]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersTable;
