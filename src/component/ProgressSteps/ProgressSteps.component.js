// import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './ProgressSteps.style';

export class ProgressSteps extends PureComponent {
  static propTypes = {
    // TODO: implement prop-types
    steps: PropTypes.arrayOf(PropTypes.shape({
     name: PropTypes.string.isRequired,
     id: PropTypes.string.isRequired,
   })).isRequired,
   currentStep: PropTypes.string.isRequired,
  };
  renderStep() {
    const { steps, currentStep } = this.props;
    const currStepIndex = steps?.findIndex((el) => el.id === currentStep);
    
    return (
      <>
        {steps?.map((el, i) => (
          <div
            key={el.id}
            block={
              i <= currStepIndex
                ? 'ProgressSteps-Step selected'
                : 'ProgressSteps-Step'
            }
          >
            <div
              block={
                i <= currStepIndex
                  ? 'ProgressSteps-Step-Circle selectedCircle'
                  : 'ProgressSteps-Step-Circle'
              }
            >
              {i + 1}
            </div>
            <h4 block='ProgressSteps-Step-Title'>{el.name}</h4>
          </div>
        ))}
      </>
    );
  }
  render() {
    return (
      <div block='ProgressSteps'>
        {/* TODO: Implement render method */}
        {this.renderStep()}
      </div>
    );
  }
}

export default ProgressSteps;
