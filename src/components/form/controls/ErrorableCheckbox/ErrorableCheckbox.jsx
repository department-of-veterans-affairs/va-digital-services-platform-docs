import PropTypes from 'prop-types';
import React from 'react';
import _ from 'lodash';
import ToolTip from '../../../Tooltip/Tooltip';

/**
 * A form checkbox with a label that can display error messages.
 *
 * Validation has the following props.
 * `checked` - Boolean. Whether or not the checkbox is checked.
 * `errorMessage` - Error string to display in the component.
 *                  When defined, indicates checkbox has a validation error.
 * `label` - String for the checkbox label.
 * `name` - String for name attribute.
 * `toolTipText` - String with help text for user.
 * `tabIndex` - Number for keyboard tab order.
 * `onValueChange` - a function with this prototype: (newValue)
 * `required` - boolean. Render marker indicating field is required.
 */
class ErrorableCheckbox extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.inputId = _.uniqueId('errorable-checkbox-');
  }

  handleChange(domEvent) {
    this.props.onValueChange(domEvent.target.checked);
  }

  render() {
    // TODO: extract error logic into a utility function
    // Calculate error state.
    let errorSpan = '';
    let errorSpanId = undefined;
    if (this.props.errorMessage) {
      errorSpanId = `${this.inputId}-error-message`;
      errorSpan = (
        <span className="usa-input-error-message" role="alert" id={errorSpanId}>
          <span className="sr-only">Error</span> {this.props.errorMessage}
        </span>
      );
    }

    // Addes ToolTip if text is provided.
    let toolTip;
    if (this.props.toolTipText) {
      toolTip = (
        <ToolTip
          tabIndex={this.props.tabIndex}
          toolTipText={this.props.toolTipText}/>
      );
    }

    // Calculate required.
    let requiredSpan = undefined;
    if (this.props.required) {
      requiredSpan = <span className="form-required-span">*</span>;
    }

    let className = `form-checkbox${
      this.props.errorMessage ? ' usa-input-error' : ''
    }`;
    if (!_.isUndefined(this.props.className)) {
      className = `${className} ${this.props.className}`;
    }

    return (
      <div className={className}>
        <input
          autoComplete="false"
          aria-describedby={errorSpanId}
          checked={this.props.checked}
          id={this.inputId}
          name={this.props.name}
          type="checkbox"
          onChange={this.handleChange}/>
        <label
          className={
            this.props.errorMessage ? 'usa-input-error-label' : undefined
          }
          name={`${this.props.name}-label`}
          htmlFor={this.inputId}>
          {this.props.label}
          {requiredSpan}
        </label>
        {errorSpan}
        {toolTip}
      </div>
    );
  }
}

ErrorableCheckbox.propTypes = {
  /**
   * If the checkbox is checked or not
   */
  checked: PropTypes.bool,
  /**
   * Error message for the modal
   */
  errorMessage: PropTypes.string,
  /**
   * Name for the modal
   */
  name: PropTypes.string,
  /**
   * Label for the checkbox
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  /**
   * Handler for when the checkbox is changed
   */
  onValueChange: PropTypes.func.isRequired,
  /**
   * If the checkbox is required or not
   */
  required: PropTypes.bool
};

export default ErrorableCheckbox;
