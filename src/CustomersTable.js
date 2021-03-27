import React from "react";

function CustomersTable(props) {
  const { customers } = props;
  return (
    <div>
      <table border="5" cellSpacing="0">
        <thead>
          <th>Name</th>
          <th>Phone</th>
          <th>Show</th>
        </thead>
        <tbody>
          {customers.map((cust) => {
            return (
              <tr key={cust.Phone}>
                <td>{cust.Name}</td>
                <td>{cust.Phone}</td>
                <td>show</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CustomersTable;
