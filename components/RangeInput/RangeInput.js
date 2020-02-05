"use strict";

exports.__esModule = true;
exports.RangeInput = void 0;

var _react = _interopRequireWildcard(require("react"));

var _FormContext = require("../Form/FormContext");

var _StyledRangeInput = require("./StyledRangeInput");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var RangeInput = (0, _react.forwardRef)(function (_ref, ref) {
  var name = _ref.name,
      _onChange = _ref.onChange,
      _onFocus = _ref.onFocus,
      _onBlur = _ref.onBlur,
      valueProp = _ref.value,
      rest = _objectWithoutPropertiesLoose(_ref, ["name", "onChange", "onFocus", "onBlur", "value"]);

  var formContext = (0, _react.useContext)(_FormContext.FormContext);

  var _useState = (0, _react.useState)(valueProp !== undefined ? valueProp : formContext && name && formContext.get(name) || ''),
      value = _useState[0],
      setValue = _useState[1];

  (0, _react.useEffect)(function () {
    return setValue(valueProp);
  }, [valueProp]);
  (0, _react.useEffect)(function () {
    if (formContext && name) setValue(formContext.get(name) || '');
  }, [formContext, name]);

  var _useState2 = (0, _react.useState)(),
      focus = _useState2[0],
      setFocus = _useState2[1];

  return _react["default"].createElement(_StyledRangeInput.StyledRangeInput, _extends({
    ref: ref,
    name: name,
    focus: focus,
    value: value
  }, rest, {
    onFocus: function onFocus(event) {
      setFocus(true);
      if (_onFocus) _onFocus(event);
    },
    onBlur: function onBlur(event) {
      setFocus(false);
      if (_onBlur) _onBlur(event);
    },
    onChange: function onChange(event) {
      var nextValue = event.target.value;

      if (formContext && name) {
        formContext.set(name, nextValue);
      }

      if (_onChange) _onChange(event);
      setValue(nextValue);
    },
    type: "range"
  }));
});
RangeInput.displayName = 'RangeInput';
var RangeInputDoc;

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  RangeInputDoc = require('./doc').doc(RangeInput);
}

var RangeInputWrapper = RangeInputDoc || RangeInput;
exports.RangeInput = RangeInputWrapper;