import React, { Component } from 'react';
import PropTypes from 'prop-types';

import collapsibleStyles from '../styles/collapsible.css';

export default class Collapsible extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    isOpen: PropTypes.bool,
    children: PropTypes.element.isRequired,
  }

  static defaultProps = {
    isOpen: false,
  }

  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.isOpen,
      height: 0,
      overflow: 'hidden',
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const height = this.article.clientHeight;

    if ((prevState.height !== height) && this.state.isOpen) {
      this.calculateHeight(height);
    }
  }

  calculateHeight = (height) => {
    this.setState({
      height,
    });
  }

  handleClick = () => {
    const height = this.article.clientHeight;

    if (this.state.isOpen) {
      this.setState({
        isOpen: false,
        height: 0,
        overflow: 'hidden',
      });
    } else {
      this.setState({
        isOpen: true,
        height,
      });
    }
  }

  handleTransitionEnd = () => {
    if (this.state.isOpen) {
      this.setState({
        overflow: 'visible',
      });
    }
  }

  render() {
    const { count, children } = this.props;

    const articleStyle = {
      height: this.state.height,
      overflow: this.state.overflow,
    };

    return (
      <div className={`${this.state.isOpen ? collapsibleStyles.open : collapsibleStyles.collapse}`}>
        <button
          className={collapsibleStyles.collapsible}
          onClick={this.handleClick}
        >
          {this.props.title}
          <span className="count"> ({count}) </span>
        </button>
        <div
          ref={(el) => { this.wrapper = el; }}
          className={collapsibleStyles.articlewrap}
          style={articleStyle}
          onTransitionEnd={this.handleTransitionEnd}
        >
          <div
            ref={(el) => { this.article = el; }}
          >
            {children}
          </div>
        </div>
      </div>
    );
  }
}