import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DeliveryBoyList = ({ deliveryBoys, onDeleteClick }) => (
  <table className="table">
    <thead>
      <tr>
        <th />
        <th>Name</th>
        <th>Manager</th>
        <th>Category</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {deliveryBoys.map((deliveryBoy) => {
        return (
          <tr key={deliveryBoy.id}>
            <td></td>
            <td>
              <Link to={"/deliveryBoy/" + deliveryBoy.slug}>
                {deliveryBoy.name}
              </Link>
            </td>
            <td>{deliveryBoy.managerName}</td>
            <td>{deliveryBoy.category}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDeleteClick(deliveryBoy)}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

DeliveryBoyList.propTypes = {
  deliveryBoys: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default DeliveryBoyList;
