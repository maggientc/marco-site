import React from 'react';

/** LangButton component */
class LangButton extends React.Component {
  /** @param {obj} props from parent. */
  constructor(props: Object) {
    super(props);

    this._onClick = this._onClick.bind(this);
  }

  /** trigger when click to change language */
  _onClick() {
    const langMap = {
      en: 'cn',
      cn: 'en',
    };
    localStorage.setItem('lang', langMap[this.props.lang]);
    this.props.onLangChange(langMap[this.props.lang]);
  }

  /** @return {html} LangButton */
  render() {
    return (
      <div className='nav-lang-btn' onClick={this._onClick}>
        <div>{this.props.label}</div>
      </div>
    );
  }
}

LangButton.propTypes = {
  label: React.PropTypes.string,
  lang: React.PropTypes.string,
  onLangChange: React.PropTypes.func,
};

export default LangButton;
