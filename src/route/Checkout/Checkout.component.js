import { Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component';
import ContentWrapper from 'Component/ContentWrapper/';
import Loader from 'Component/Loader';
import { lazy, PureComponent, Suspense } from 'react';
import CheckoutProgressBar from 'Component/CheckoutProgressBar';
import {
    BILLING_STEP,
    CHECKOUT_URL,
    DETAILS_STEP,
    SHIPPING_STEP
} from './Checkout.config';
import './Checkout.extension.style.scss';
/** @namespace Scanditask/Route/Checkout/Component/CheckoutComponent */

export class CheckoutComponent extends SourceCheckout {
  render() {
    return (
      <main block='Checkout'>
        {/* my progressbar component */}
        <CheckoutProgressBar steps={[SHIPPING_STEP,BILLING_STEP]} currentStep={this.props.checkoutStep} />
        <ContentWrapper
          wrapperMix={{ block: 'Checkout', elem: 'Wrapper' }}
          label={__('Checkout page')}
        >
          {this.renderSummary(true)}
          <div block='Checkout' elem='Step'>
            {this.renderTitle()}
            {this.renderGuestForm()}
            {this.renderStep()}
            {this.renderLoader()}
          </div>
          <div>
            <Suspense fallback={<Loader />}>
              {this.renderSummary()}
              {this.renderPromo()}
            </Suspense>
          </div>
        </ContentWrapper>
      </main>
    );
  }
}

export default CheckoutComponent;
