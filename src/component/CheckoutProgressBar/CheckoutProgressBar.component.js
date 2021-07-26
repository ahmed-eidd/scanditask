// import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  BILLING_STEP,
  CHECKOUT_URL,
  DETAILS_STEP,
  SHIPPING_STEP,
} from '../../route/Checkout/Checkout.config';
import ProgressSteps from 'Component/ProgressSteps';

import './CheckoutProgressBar.style';

export class CheckoutProgressBar extends PureComponent {
  static propTypes = {
    // TODO: implement prop-types
  };
 
  render() {
    return (
      <div block='CheckoutProgressBar'>
        {/* TODO: Implement render method */}
        <ProgressSteps steps={[{name:'Review Paymnet', id: BILLING_STEP},{name: 'Shipping',id: SHIPPING_STEP}]} currentStep={BILLING_STEP} /> 
      </div>
    );
  }
}

export default CheckoutProgressBar;
