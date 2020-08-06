import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  loadDeliveryBoys,
  saveDeliveryBoy,
} from "../../redux/actions/deliverBoyActions";
import { loadManagers } from "../../redux/actions/managerActions";
import PropTypes from "prop-types";
import BoyForm from "./BoyForm";
import { newDeliveryBoy } from "../../../tools/mockData";
import Spinner from "./../common/Spinner";
import { toast } from "react-toastify";

export function ManageBoyPage({
  managers,
  deliveryBoys,
  loadDeliveryBoys,
  loadManagers,
  saveDeliveryBoy,
  history,
  ...props
}) {
  const [deliveryBoy, setDeliveryBoy] = useState({ ...props.boy });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (deliveryBoys.length === 0) {
      loadDeliveryBoys().catch((error) => {
        alert("Loading delivery boys failed" + error);
      });
    } else {
      setDeliveryBoy({ ...props.boy });
    }

    if (managers.length === 0) {
      loadManagers().catch((error) => {
        alert("Loading managers failed" + error);
      });
    }
  }, [props.boy]);

  function handleChange(event) {
    const { name, value } = event.target;
    setDeliveryBoy((prevDeliveryBoy) => ({
      ...prevDeliveryBoy,
      [name]: name === "managerId" ? parseInt(value, 10) : value,
    }));
  }

  function formIsValid() {
    const { name, managerId, category } = deliveryBoy;
    const errors = {};

    if (!name) errors.name = "Name is required";
    if (!managerId) errors.manager = "Manager is required";
    if (!category) errors.category = "Category is required";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  function handleSave(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    setSaving(true);
    saveDeliveryBoy(deliveryBoy)
      .then(() => {
        toast.success("Delivery Boy Saved");
        history.push("/boys");
      })
      .catch((error) => {
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  }

  return managers.length === 0 || deliveryBoys.length === 0 ? (
    <Spinner />
  ) : (
    <BoyForm
      boy={deliveryBoy}
      errors={errors}
      managers={managers}
      onChange={handleChange}
      onSave={handleSave}
      saving={saving}
    />
  );
}

ManageBoyPage.propTypes = {
  boy: PropTypes.object.isRequired,
  managers: PropTypes.array.isRequired,
  deliveryBoys: PropTypes.array.isRequired,
  loadManagers: PropTypes.func.isRequired,
  saveDeliveryBoy: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export function getDeliveryBoyBySlug(deliveryBoys, slug) {
  return deliveryBoys.find((deliveryBoy) => deliveryBoy.slug === slug) || null;
}

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  const boy =
    slug && state.deliveryBoys.length > 0
      ? getDeliveryBoyBySlug(state.deliveryBoys, slug)
      : newDeliveryBoy;
  return {
    boy,
    deliveryBoys: state.deliveryBoys,
    managers: state.managers,
  };
}

const mapDispatchToProps = {
  loadDeliveryBoys,
  loadManagers,
  saveDeliveryBoy,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageBoyPage);
