import React, { Component } from "react";
import { connect } from "react-redux";
import * as deliveryBoyActions from "../../redux/actions/deliverBoyActions";
import * as managerActions from "../../redux/actions/managerActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import DeliveryBoyList from "./DeliveryBoyList";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

class DeliveryBoysPage extends Component {
  state = {
    redirectToAddDeliveryBoyPage: false,
  };

  componentDidMount() {
    const { deliveryBoys, actions } = this.props;
    if (deliveryBoys.length === 0) {
      actions.loadDeliveryBoys().catch((error) => {
        alert("Loading delivery boys failed" + error);
      });
    }

    if (deliveryBoys.length === 0) {
      actions.loadManagers().catch((error) => {
        alert("Loading managers failed" + error);
      });
    }
  }

  handleDeleteDeliveryBoy = async (deliveryBoy) => {
    toast.success("Delivery Boy Deleted");
    try {
      await this.props.actions.deleteDeliveryBoy(deliveryBoy);
    } catch (error) {
      toast.error(`Delete failed ${error.message}`, { autoClose: false });
    }
  };

  render() {
    const { deliveryBoys } = this.props;
    return (
      <>
        {this.state.redirectToAddDeliveryBoyPage && (
          <Redirect to="/deliveryBoy" />
        )}
        <h2>Delivery Boys</h2>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <>
            <button
              className="btn, btn-primary"
              onClick={() =>
                this.setState({ redirectToAddDeliveryBoyPage: true })
              }
            >
              Add Delivery Boy
            </button>
            <DeliveryBoyList
              onDeleteClick={this.handleDeleteDeliveryBoy}
              deliveryBoys={deliveryBoys}
            />
          </>
        )}
      </>
    );
  }
}

DeliveryBoysPage.propTypes = {
  managers: PropTypes.array.isRequired,
  deliveryBoys: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    deliveryBoys:
      state.managers.length === 0
        ? []
        : state.deliveryBoys.map((deliveryBoy) => {
            return {
              ...deliveryBoy,
              managerName: state.managers.find(
                (a) => a.id === deliveryBoy.managerId
              ).name,
            };
          }),
    managers: state.managers,
    loading: state.apiCallsInProgress > 0,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadDeliveryBoys: bindActionCreators(
        deliveryBoyActions.loadDeliveryBoys,
        dispatch
      ),
      loadManagers: bindActionCreators(managerActions.loadManagers, dispatch),
      deleteDeliveryBoy: bindActionCreators(
        deliveryBoyActions.deleteDeliveryBoy,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryBoysPage);
