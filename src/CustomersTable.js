import React from "react";

function CustomersTable(props) {
  const { customers, showDetails } = props;
  return (
    <div>
      <table className="table table-striped bg-light table-hover">
        <thead className="bg-dark">
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
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      showDetails(cust);
                    }}
                  >
                    showDetail
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CustomersTable;
