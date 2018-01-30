'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/button/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _styleMod = require('./style.mod.less');

var _styleMod2 = _interopRequireDefault(_styleMod);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // 依赖的 `antd` 组件必须按照这种方式引入，不需要手动引用样式文件，`babel-plugin-import` 插件会自动引入


var cx = _bind2.default.bind(_styleMod2.default);

/**
 * 组件名遵循 `Wox` 前缀的规范
 */

var WoxComponent = function (_Component) {
  _inherits(WoxComponent, _Component);

  function WoxComponent(props) {
    _classCallCheck(this, WoxComponent);

    var _this = _possibleConstructorReturn(this, (WoxComponent.__proto__ || Object.getPrototypeOf(WoxComponent)).call(this, props));

    _this.state = {
      status: props.status
    };

    _this.onToggle = _this.onToggle.bind(_this);
    return _this;
  }

  _createClass(WoxComponent, [{
    key: 'onToggle',
    value: function onToggle() {
      this.setState({
        status: this.state.status === 'off' ? 'on' : 'off'
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: cx('wrapper') },
        _react2.default.createElement(
          _button2.default,
          {
            type: 'primary',
            onClick: this.onToggle
          },
          this.state.status
        )
      );
    }
  }]);

  return WoxComponent;
}(_react.Component);

WoxComponent.propTypes = {
  status: _propTypes2.default.string
};

WoxComponent.defaultProps = {
  status: 'off'
};

exports.default = WoxComponent;
