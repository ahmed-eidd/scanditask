// import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  BILLING_STEP,
  CHECKOUT_URL,
  DETAILS_STEP,
  SHIPPING_STEP,
} from '../../route/Checkout/Checkout.config';

import './CheckoutProgressBar.style';

export class CheckoutProgressBar extends PureComponent {
  static propTypes = {
    // TODO: implement prop-types
    steps: PropTypes.array,
  };
  renderStep() {
    const { steps, currentStep } = this.props;
    const currStepIndex = steps.findIndex((el) => el === currentStep);
    const stepTitle = (CONSTANT) => {
      switch (CONSTANT) {
        case BILLING_STEP:
          return 'Review & Payment';
        case SHIPPING_STEP:
          return 'Shipping';
        default:
          break;
      }
    };
    return (
      <>
        {steps.map((el, i) => (
          <div
            key={i}
            block={
              i <= currStepIndex
                ? 'CheckoutProgressBar-Step selected'
                : 'CheckoutProgressBar-Step'
            }
          >
            <div
              block={
                i <= currStepIndex
                  ? 'CheckoutProgressBar-Step-Circle selectedCircle'
                  : 'CheckoutProgressBar-Step-Circle'
              }
            >
              {i + 1}
            </div>
            <h4 block='CheckoutProgressBar-Step-Title'>{stepTitle(el)}</h4>
          </div>
        ))}
      </>
    );
  }
  render() {
    return (
      <div block='CheckoutProgressBar'>
        {/* TODO: Implement render method */}
        {this.renderStep()}
      </div>
    );
  }
}

export default CheckoutProgressBar;
