import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const BoyForm = ({
  boy,
  managers,
  onSave,
  onChange,
  saving = false,
  errors = {},
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{boy.id ? "Edit" : "Add"} Delivery Boy</h2>
      {errors.onSave && (
        <div className="alert alert-danger">{errors.onSave}</div>
      )}
      <TextInput
        name="name"
        label="Name"
        value={boy.name}
        onChange={onChange}
        error={errors.name}
      />
      <SelectInput
        name="managerId"
        label="Manager"
        value={boy.managerId || ""}
        defaultOption="Select Manager"
        options={managers.map((manager) => ({
          value: manager.id,
          text: manager.name,
        }))}
        onChange={onChange}
        error={errors.manager}
      />
      <TextInput
        name="category"
        label="Category"
        value={boy.category}
        onChange={onChange}
        error={errors.category}
      />
      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

BoyForm.propTypes = {
  managers: PropTypes.array.isRequired,
  boy: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
};

export default BoyForm;
