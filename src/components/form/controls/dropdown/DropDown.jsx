import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

class DropDown extends React.Component {

  toggleDropDown = () => {
    this.props.clickHandler();
  }

  render() {
    const buttonClasses = classNames(
      this.props.cssClass,
      { 'va-btn-withicon': this.props.icon },
      'va-dropdown-trigger'
    );

    return (
      <div className="va-dropdown" ref={div => { this.dropdownDiv = div; }}>
        <button className={buttonClasses}
          aria-controls={this.props.id}
          aria-expanded={this.props.isOpen}
          disabled={this.props.disabled}
          onClick={this.toggleDropDown}>
          <span>
            {this.props.icon}
            {this.props.buttonText}
          </span>
        </button>
        <div className="va-dropdown-panel" id={this.props.id} hidden={!this.props.isOpen}>
          {this.props.contents}
        </div>
      </div>
    );
  }
}

DropDown.propTypes = {
  buttonText: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
  cssClass: PropTypes.string,
  contents: PropTypes.node.isRequired,
  icon: PropTypes.node, /* Should be SVG markup */
  id: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  disabled: PropTypes.bool
};

DropDown.defaultProps = {
  disabled: false
};

export default DropDown;
