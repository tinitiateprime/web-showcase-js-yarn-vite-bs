import React from "react";

const ComparisonTable = () => (
  <div className="container mt-4">
    <h2>📑 Comparison Table</h2>
    <table className="table table-bordered mt-3">
      <thead className="table-dark">
        <tr>
          <th>Plan</th>
          <th>Price</th>
          <th>Features</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Basic</td>
          <td>$10</td>
          <td>1 user, Email support</td>
        </tr>
        <tr>
          <td>Pro</td>
          <td>$30</td>
          <td>5 users, Priority support</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default ComparisonTable;
