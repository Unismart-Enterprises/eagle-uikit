'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var styledSystem = require('styled-system');
var get = require('lodash/get');
var noop = require('lodash/noop');
var debounce = require('lodash/debounce');
var throttle = require('lodash/throttle');
var reactRouterDom = require('react-router-dom');
var reactTransitionGroup = require('react-transition-group');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var get__default = /*#__PURE__*/_interopDefaultLegacy(get);
var noop__default = /*#__PURE__*/_interopDefaultLegacy(noop);
var debounce__default = /*#__PURE__*/_interopDefaultLegacy(debounce);
var throttle__default = /*#__PURE__*/_interopDefaultLegacy(throttle);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var getThemeValue = function (path, fallback) { return function (theme) {
    return get__default['default'](theme, path, fallback);
}; };

var rotate$1 = styled.keyframes(templateObject_1$K || (templateObject_1$K = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var spinStyle = styled.css(templateObject_2$f || (templateObject_2$f = __makeTemplateObject(["\n  animation: ", " 2s linear infinite;\n"], ["\n  animation: ", " 2s linear infinite;\n"])), rotate$1);
var Svg = styled__default['default'].svg(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"], ["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return getThemeValue("colors." + color, color)(theme);
}, function (_a) {
    var spin = _a.spin;
    return spin && spinStyle;
}, styledSystem.space);
Svg.defaultProps = {
    color: "text",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    spin: false,
};
var templateObject_1$K, templateObject_2$f, templateObject_3$8;

var Icon$15 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29C6.32 12.68 6.32 13.31 6.71 13.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L17.3 9.7C17.69 9.31 17.69 8.68 17.3 8.29C16.91 7.9 16.27 7.9 15.88 8.29Z" })));
};

var Icon$14 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 17H11V15H13V17Z" })));
};

var Icon$13 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4ZM5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1Z" })));
};

var Icon$12 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M11 7H13V9H11V7ZM12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var getColor$1 = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors." + color, color)(theme);
};
var getFontSize = function (_a) {
    var fontSize = _a.fontSize, small = _a.small;
    return small ? "14px" : fontSize || "16px";
};
var Text = styled__default['default'].div(templateObject_1$J || (templateObject_1$J = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n"], ["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n"])), getColor$1, getFontSize, function (_a) {
    var bold = _a.bold;
    return (bold ? 600 : 400);
}, function (_a) {
    var textTransform = _a.textTransform;
    return textTransform && "text-transform: " + textTransform + ";";
}, styledSystem.space);
Text.defaultProps = {
    color: "text",
    small: false,
};
var templateObject_1$J;

var getExternalLinkProps = function () { return ({
    target: "_blank",
    rel: "noreferrer noopener",
}); };

var sizes$1 = {
    SM: "sm",
    MD: "md",
};
var variants$1 = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    TERTIARY: "tertiary",
    TEXT: "text",
    DANGER: "danger",
    SUBTLE: "subtle",
    SUCCESS: "success",
};

var getDisabledStyles = function (_a) {
    var isLoading = _a.isLoading, theme = _a.theme;
    if (isLoading === true) {
        return "\n      &:disabled,\n      &.button--disabled {\n        cursor: not-allowed;\n      }\n    ";
    }
    return "\n    &:disabled,\n    &.button--disabled {\n      background-color: " + theme.colors.backgroundDisabled + ";\n      border-color: " + theme.colors.backgroundDisabled + ";\n      box-shadow: none;\n      color: " + theme.colors.textDisabled + ";\n      cursor: not-allowed;\n    }\n  ";
};
var removePointerEvents = function (_a) {
    var disabled = _a.disabled, as = _a.as;
    if (disabled && as && as !== "button") {
        return "\n      pointer-events: none;\n    ";
    }
    return "";
};
var getButtonVariantProp = function (prop) { return function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants$1.PRIMARY : _b;
    return theme.button[variant][prop];
}; };
var StyledButton = styled__default['default'].button(templateObject_1$I || (templateObject_1$I = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border: ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  /* max-content instead of auto for Safari fix */\n  width: ", ";\n  height: ", ";\n  line-height: 1;\n  letter-spacing: 0.03em;\n  justify-content: center;\n  outline: 0;\n  padding: ", ";\n  transition: background-color 0.2s;\n  opacity: ", ";\n\n  &:hover:not(:disabled):not(.button--disabled):not(:active) {\n    background-color: ", ";\n    border-color: ", ";\n  }\n\n  &:focus:not(:active) {\n    box-shadow: 0 0 0 2px ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n    box-shadow: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border: ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  /* max-content instead of auto for Safari fix */\n  width: ", ";\n  height: ", ";\n  line-height: 1;\n  letter-spacing: 0.03em;\n  justify-content: center;\n  outline: 0;\n  padding: ", ";\n  transition: background-color 0.2s;\n  opacity: ", ";\n\n  &:hover:not(:disabled):not(.button--disabled):not(:active) {\n    background-color: ", ";\n    border-color: ", ";\n  }\n\n  &:focus:not(:active) {\n    box-shadow: 0 0 0 2px ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n    box-shadow: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n"])), getButtonVariantProp("background"), getButtonVariantProp("border"), getButtonVariantProp("boxShadow"), getButtonVariantProp("color"), function (_a) {
    var fullWidth = _a.fullWidth;
    return (fullWidth ? "100%" : "max-content");
}, function (_a) {
    var size = _a.size;
    return (size === "sm" ? "32px" : "48px");
}, function (_a) {
    var size = _a.size;
    return (size === "sm" ? "0 16px" : "0 24px");
}, function (_a) {
    var isLoading = _a.isLoading;
    return (isLoading ? 0.5 : 1);
}, getButtonVariantProp("backgroundHover"), getButtonVariantProp("borderColorHover"), function (_a) {
    var theme = _a.theme;
    return theme.colors.secondary;
}, getButtonVariantProp("backgroundActive"), getButtonVariantProp("boxShadowActive"), getDisabledStyles, removePointerEvents, styledSystem.space);
StyledButton.defaultProps = {
    fullWidth: false,
    type: "button",
};
var templateObject_1$I;

var Button = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, external = _a.external, isLoading = _a.isLoading, disabled = _a.disabled, props = __rest(_a, ["startIcon", "endIcon", "children", "external", "isLoading", "disabled"]);
    var internalProps = external ? getExternalLinkProps() : {};
    var isDisabled = isLoading || disabled;
    return (React__default['default'].createElement(StyledButton, __assign({}, internalProps, props, { isLoading: isLoading, disabled: isDisabled }),
        React__default['default'].isValidElement(startIcon) &&
            React__default['default'].cloneElement(startIcon, {
                mr: "0.5rem",
            }),
        children,
        React__default['default'].isValidElement(endIcon) &&
            React__default['default'].cloneElement(endIcon, {
                ml: "0.5rem",
            })));
};
Button.defaultProps = {
    variant: variants$1.PRIMARY,
    size: sizes$1.MD,
    external: false,
    isLoading: false,
    disabled: false,
};

var IconButton = styled__default['default'](Button)(templateObject_1$H || (templateObject_1$H = __makeTemplateObject(["\n  padding: 0;\n  width: ", ";\n"], ["\n  padding: 0;\n  width: ", ";\n"])), function (_a) {
    var size = _a.size;
    return (size === "sm" ? "32px" : "48px");
});
var templateObject_1$H;

var Icon$11 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$10 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z" })));
};

var Icon$$ = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { d: "M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z" })));
};

var Icon$_ = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z" })));
};

var Icon$Z = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.71005 12.29L11.3001 9.69997C11.6901 9.30997 12.3201 9.30997 12.7101 9.69997L15.3001 12.29C15.9301 12.92 15.4801 14 14.5901 14H9.41005C8.52005 14 8.08005 12.92 8.71005 12.29Z" })));
};

var Icon$Y = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { d: "M5 13.0022H16.17L11.29 17.8822C10.9 18.2722 10.9 18.9122 11.29 19.3022C11.68 19.6922 12.31 19.6922 12.7 19.3022L19.29 12.7122C19.68 12.3222 19.68 11.6922 19.29 11.3022L12.71 4.70217C12.32 4.31217 11.69 4.31217 11.3 4.70217C10.91 5.09217 10.91 5.72217 11.3 6.11217L16.17 11.0022H5C4.45 11.0022 4 11.4522 4 12.0022C4 12.5522 4.45 13.0022 5 13.0022Z" })));
};

var Icon$X = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z" })));
};

var Icon$W = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React__default['default'].createElement("circle", { cx: "8", cy: "8", r: "8", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z", fill: "#FFFDFA" })));
};

var Icon$V = function (props) {
    var theme = styled.useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 72 72" }, props),
        React__default['default'].createElement("path", { d: "M72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36Z", fill: primaryColor }),
        React__default['default'].createElement("mask", { id: "mask0", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "3", y: "3", width: "66", height: "66" },
            React__default['default'].createElement("path", { d: "M68.25 36C68.25 53.8112 53.8112 68.25 36 68.25C18.1888 68.25 3.75 53.8112 3.75 36C3.75 18.1888 18.1888 3.75 36 3.75C53.8112 3.75 68.25 18.1888 68.25 36Z", fill: "#C4C4C4" })),
        React__default['default'].createElement("g", { mask: "url(#mask0)" },
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.9927 23.2654C26.1289 23.1362 30.0824 27.7278 29.2039 32.7879L27.6838 41.5445C30.2298 41.0514 32.9304 40.7875 35.7229 40.7875C37.7063 40.7875 39.6424 40.9206 41.5089 41.1741L49.2862 29.5726C51.7713 25.8657 56.7909 24.8751 60.4978 27.3602C64.7827 30.2326 65.3155 36.33 61.5938 39.9021L55.2585 45.9828C59.9045 49.0009 63.1305 53.2977 63.1306 58.4066V62.322C63.1306 67.644 59.6097 72.0998 54.6877 75.1077C49.7272 78.1391 43.0165 79.9412 35.7229 79.9412C28.4292 79.9412 21.7186 78.1391 16.7581 75.1077C11.836 72.0998 8.31519 67.644 8.31519 62.322V58.4067C8.31522 54.4286 10.2963 50.9169 13.3384 48.1585L13.0101 31.6154C12.9208 27.115 16.4929 23.3785 20.9927 23.2654ZM15.617 49.1514C15.6003 49.0112 15.5903 48.8688 15.5874 48.7246L15.2471 31.571C15.1822 28.3014 17.7798 25.5842 21.049 25.502C24.7712 25.4084 27.637 28.733 26.9996 32.4052L24.8971 44.5163C25.6681 44.2915 26.4607 44.0899 27.2726 43.9131C29.9138 43.338 32.7585 43.0248 35.7229 43.0248C38.1625 43.0248 40.5211 43.237 42.7519 43.6326C42.8725 43.2609 43.0459 42.8995 43.2742 42.5589L51.1446 30.8185C52.9416 28.1379 56.5714 27.4216 59.252 29.2186C62.3505 31.2957 62.7358 35.7049 60.0446 38.2879L51.5469 46.4441C52.264 46.7988 52.9486 47.1771 53.5975 47.577C58.1074 50.3568 60.8932 54.1829 60.8932 58.4066V62.322C60.8932 70.8172 49.6241 77.7039 35.7229 77.7039C21.8217 77.7039 10.5525 70.8172 10.5525 62.322V58.4067C10.5526 54.9322 12.4377 51.7266 15.617 49.1514Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { d: "M60.8932 62.3221C60.8932 70.8173 49.624 77.704 35.7228 77.704C21.8216 77.704 10.5525 70.8173 10.5525 62.3221V58.4067H60.8932V62.3221Z", fill: primaryColor }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.9995 32.4051C27.637 28.733 24.7711 25.4083 21.0489 25.5019C17.7797 25.5842 15.1821 28.3013 15.247 31.5709L15.5874 48.7245C15.5903 48.8687 15.6002 49.0111 15.617 49.1513C12.4376 51.7266 10.5525 54.9321 10.5525 58.4066C10.5525 66.9018 21.8216 73.7885 35.7228 73.7885C49.624 73.7885 60.8932 66.9018 60.8932 58.4066C60.8932 53.5752 57.2481 49.264 51.5468 46.444L60.0445 38.2879C62.7358 35.7048 62.3504 31.2956 59.252 29.2185C56.5714 27.4215 52.9416 28.1378 51.1446 30.8184L43.2742 42.5588C43.0458 42.8994 42.8724 43.2609 42.7519 43.6326C40.521 43.2369 38.1625 43.0248 35.7228 43.0248C31.8473 43.0248 28.1763 43.56 24.897 44.5162L26.9995 32.4051Z", fill: primaryColor }),
            React__default['default'].createElement("path", { d: "M32.0873 57.2881C32.0873 59.6049 30.8352 61.4831 29.2906 61.4831C27.746 61.4831 26.4939 59.6049 26.4939 57.2881C26.4939 54.9712 27.746 53.093 29.2906 53.093C30.8352 53.093 32.0873 54.9712 32.0873 57.2881Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M28.891 54.0353C29.461 54.8903 29.8499 56.1359 29.8499 57.5677C29.8499 58.1855 30.3508 58.6864 30.9686 58.6864C31.5864 58.6864 32.0873 58.1855 32.0873 57.5677C32.0873 55.7558 31.5997 54.0649 30.7526 52.7943C29.9107 51.5314 28.6248 50.5759 27.0532 50.5759C25.4816 50.5759 24.1957 51.5314 23.3538 52.7943C22.5067 54.0649 22.0191 55.7558 22.0191 57.5677C22.0191 58.55 22.1622 59.4908 22.4244 60.3463C22.6055 60.937 23.2311 61.2691 23.8218 61.088C24.4125 60.9069 24.7446 60.2813 24.5635 59.6906C24.3685 59.0543 24.2565 58.3349 24.2565 57.5677C24.2565 56.1359 24.6454 54.8903 25.2154 54.0353C25.7906 53.1725 26.4624 52.8133 27.0532 52.8133C27.644 52.8133 28.3158 53.1725 28.891 54.0353Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M48.1883 54.0353C48.7582 54.8903 49.1472 56.1359 49.1472 57.5677C49.1472 58.1855 49.648 58.6864 50.2658 58.6864C50.8837 58.6864 51.3845 58.1855 51.3845 57.5677C51.3845 55.7558 50.8969 54.0649 50.0498 52.7943C49.208 51.5314 47.9221 50.5759 46.3505 50.5759C44.7788 50.5759 43.4929 51.5314 42.6511 52.7943C41.804 54.0649 41.3164 55.7558 41.3164 57.5677C41.3164 58.55 41.4594 59.4908 41.7216 60.3463C41.9027 60.937 42.5284 61.2691 43.1191 61.088C43.7098 60.9069 44.0418 60.2813 43.8608 59.6906C43.6657 59.0543 43.5538 58.3349 43.5538 57.5677C43.5538 56.1359 43.9427 54.8903 44.5127 54.0353C45.0879 53.1725 45.7597 52.8133 46.3505 52.8133C46.9412 52.8133 47.613 53.1725 48.1883 54.0353Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { d: "M51.3844 57.2881C51.3844 59.6049 50.1323 61.4831 48.5877 61.4831C47.0431 61.4831 45.791 59.6049 45.791 57.2881C45.791 54.9712 47.0431 53.093 48.5877 53.093C50.1323 53.093 51.3844 54.9712 51.3844 57.2881Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { d: "M34.0221 25.9463V25.2697C34.0221 24.32 34.2121 23.5247 34.5919 22.8836C34.9956 22.2426 35.5297 21.6134 36.1945 20.9961C36.8118 20.4026 37.4172 19.8921 38.0108 19.4648C38.6043 19.0374 39.091 18.5863 39.4709 18.1115C39.8508 17.6367 40.0407 17.0787 40.0407 16.4377C40.0407 15.5118 39.7083 14.8589 39.0436 14.479C38.4025 14.0754 37.3223 13.8736 35.8028 13.8736C34.8056 13.8736 33.8203 14.0041 32.8469 14.2653C31.8735 14.5027 31.0425 14.8114 30.354 15.1912V10.3835C31.2325 9.95615 32.2652 9.61189 33.4523 9.35073C34.6632 9.08957 35.9808 8.95898 37.4054 8.95898C40.1594 8.95898 42.2606 9.5644 43.7088 10.7752C45.1571 11.9623 45.8812 13.6005 45.8812 15.6898C45.8812 17.0194 45.6082 18.0996 45.0621 18.9306C44.5161 19.7378 43.7207 20.5688 42.6761 21.4235C41.7976 22.1595 41.0616 22.8005 40.4681 23.3466C39.8745 23.8689 39.5777 24.5812 39.5777 25.4834V25.9463H34.0221ZM33.7728 32.2498V28.1187H39.7914V32.2498H33.7728Z", fill: secondaryColor })),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M71.9838 37.09L69.7348 37.0231C69.7449 36.6834 69.75 36.3423 69.75 36C69.75 35.6577 69.7449 35.3166 69.7348 34.9769L71.9838 34.91C71.9946 35.272 72 35.6354 72 36C72 36.3646 71.9946 36.728 71.9838 37.09ZM71.8544 32.7398L69.6134 32.941C69.5523 32.2603 69.471 31.5857 69.3702 30.9176L71.5949 30.5818C71.7025 31.2945 71.7892 32.014 71.8544 32.7398ZM71.2052 28.4414L69.0048 28.9115C68.8622 28.2441 68.6999 27.5841 68.5185 26.932L70.6861 26.3289C70.8798 27.0248 71.053 27.7292 71.2052 28.4414ZM70.0397 24.2525L67.9128 24.9864C67.6906 24.3424 67.4494 23.7072 67.1899 23.0815L69.2683 22.2196C69.5452 22.8874 69.8026 23.5652 70.0397 24.2525ZM68.3746 20.237L66.3524 21.2235C66.0538 20.6114 65.7373 20.0097 65.4034 19.419L67.3622 18.3119C67.7183 18.942 68.0561 19.584 68.3746 20.237ZM66.2353 16.4517L64.347 17.6751C63.977 17.104 63.5901 16.5448 63.1872 15.998L64.9984 14.6631C65.4281 15.2462 65.8407 15.8426 66.2353 16.4517ZM63.656 12.952L61.9283 14.3934C61.4925 13.8711 61.0413 13.3621 60.5752 12.8671L62.2132 11.3246C62.7102 11.8523 63.1914 12.3951 63.656 12.952ZM60.6754 9.78678L59.1329 11.4248C58.6379 10.9587 58.1289 10.5074 57.6066 10.0717L59.048 8.34397C59.6049 8.80865 60.1477 9.28984 60.6754 9.78678ZM57.3369 7.00159L56.002 8.8128C55.4552 8.40985 54.896 8.02303 54.3249 7.65302L55.5482 5.76468C56.1574 6.15933 56.7538 6.57187 57.3369 7.00159ZM53.6881 4.63782L52.581 6.5966C51.9903 6.26271 51.3886 5.94615 50.7765 5.64759L51.7629 3.62536C52.416 3.94392 53.058 4.28165 53.6881 4.63782ZM49.7804 2.7317L48.9185 4.81008C48.2928 4.55061 47.6576 4.30943 47.0136 4.08723L47.7475 1.96028C48.4348 2.19743 49.1126 2.4548 49.7804 2.7317ZM45.6711 1.31385L45.068 3.48152C44.4159 3.3001 43.7559 3.13777 43.0885 2.99517L43.5586 0.794831C44.2708 0.947003 44.9752 1.12024 45.6711 1.31385ZM41.4182 0.405049L41.0824 2.62985C40.4143 2.529 39.7397 2.44772 39.059 2.38662L39.2602 0.14563C39.986 0.210778 40.7055 0.297466 41.4182 0.405049ZM37.09 0.0161859C36.728 0.0054207 36.3646 0 36 0C35.6354 0 35.272 0.00542073 34.91 0.016186L34.9769 2.26519C35.3166 2.25509 35.6577 2.25 36 2.25C36.3423 2.25 36.6834 2.25509 37.0231 2.26519L37.09 0.0161859ZM32.7398 0.145631L32.941 2.38662C32.2603 2.44772 31.5857 2.529 30.9176 2.62985L30.5818 0.405049C31.2945 0.297467 32.014 0.210779 32.7398 0.145631ZM28.4414 0.794832L28.9115 2.99517C28.2441 3.13777 27.5841 3.3001 26.932 3.48152L26.3289 1.31386C27.0248 1.12024 27.7292 0.947004 28.4414 0.794832ZM24.2525 1.96028L24.9864 4.08723C24.3424 4.30944 23.7072 4.55061 23.0815 4.81008L22.2196 2.7317C22.8874 2.45481 23.5652 2.19743 24.2525 1.96028ZM20.237 3.62536L21.2235 5.64759C20.6114 5.94616 20.0097 6.26272 19.419 6.5966L18.3119 4.63783C18.942 4.28165 19.584 3.94392 20.237 3.62536ZM16.4517 5.76469L17.6751 7.65302C17.104 8.02303 16.5448 8.40985 15.998 8.81281L14.6631 7.00159C15.2462 6.57188 15.8426 6.15933 16.4517 5.76469ZM12.952 8.34398L14.3934 10.0717C13.8711 10.5075 13.3621 10.9587 12.8671 11.4248L11.3246 9.78679C11.8523 9.28984 12.3951 8.80865 12.952 8.34398ZM9.78678 11.3246L11.4248 12.8671C10.9587 13.3621 10.5074 13.8711 10.0717 14.3934L8.34397 12.952C8.80865 12.3951 9.28984 11.8523 9.78678 11.3246ZM7.00159 14.6631L8.8128 15.998C8.40985 16.5448 8.02303 17.104 7.65302 17.6751L5.76468 16.4518C6.15933 15.8426 6.57187 15.2462 7.00159 14.6631ZM4.63782 18.3119L6.5966 19.419C6.26271 20.0097 5.94615 20.6114 5.64759 21.2235L3.62536 20.2371C3.94392 19.584 4.28165 18.942 4.63782 18.3119ZM2.7317 22.2196L4.81008 23.0815C4.55061 23.7072 4.30943 24.3424 4.08723 24.9864L1.96028 24.2525C2.19743 23.5652 2.4548 22.8874 2.7317 22.2196ZM1.31385 26.3289L3.48152 26.932C3.3001 27.5841 3.13777 28.2441 2.99517 28.9115L0.794831 28.4414C0.947003 27.7292 1.12024 27.0248 1.31385 26.3289ZM0.405049 30.5818L2.62985 30.9176C2.529 31.5857 2.44772 32.2603 2.38662 32.941L0.14563 32.7398C0.210778 32.014 0.297466 31.2945 0.405049 30.5818ZM0.0161859 34.91C0.0054207 35.272 0 35.6354 0 36C0 36.3646 0.00542073 36.728 0.016186 37.09L2.26519 37.0231C2.25509 36.6834 2.25 36.3423 2.25 36C2.25 35.6577 2.25509 35.3166 2.26519 34.9769L0.0161859 34.91ZM0.145631 39.2602L2.38662 39.059C2.44772 39.7397 2.529 40.4143 2.62985 41.0824L0.40505 41.4182C0.297467 40.7055 0.210779 39.986 0.145631 39.2602ZM0.794833 43.5586L2.99517 43.0885C3.13777 43.7559 3.3001 44.4159 3.48152 45.068L1.31386 45.6711C1.12024 44.9752 0.947004 44.2708 0.794833 43.5586ZM1.96028 47.7475L4.08723 47.0136C4.30944 47.6576 4.55061 48.2928 4.81008 48.9185L2.7317 49.7804C2.45481 49.1126 2.19743 48.4348 1.96028 47.7475ZM3.62536 51.763L5.64759 50.7765C5.94616 51.3886 6.26272 51.9903 6.5966 52.581L4.63783 53.6881C4.28165 53.058 3.94392 52.416 3.62536 51.763ZM5.76469 55.5482L7.65302 54.3249C8.02303 54.896 8.40985 55.4552 8.81281 56.002L7.00159 57.3369C6.57188 56.7538 6.15933 56.1574 5.76469 55.5482ZM8.34398 59.048L10.0717 57.6066C10.5075 58.1289 10.9587 58.6379 11.4248 59.1329L9.78679 60.6754C9.28984 60.1477 8.80865 59.6049 8.34398 59.048ZM11.3246 62.2132L12.8671 60.5752C13.3621 61.0413 13.8711 61.4925 14.3934 61.9283L12.952 63.656C12.3951 63.1914 11.8523 62.7102 11.3246 62.2132ZM14.6631 64.9984L15.998 63.1872C16.5448 63.5901 17.104 63.977 17.6751 64.347L16.4518 66.2353C15.8426 65.8407 15.2462 65.4281 14.6631 64.9984ZM18.3119 67.3622L19.419 65.4034C20.0097 65.7373 20.6114 66.0538 21.2235 66.3524L20.2371 68.3746C19.584 68.0561 18.942 67.7184 18.3119 67.3622ZM22.2196 69.2683L23.0815 67.1899C23.7072 67.4494 24.3424 67.6906 24.9864 67.9128L24.2525 70.0397C23.5652 69.8026 22.8874 69.5452 22.2196 69.2683ZM26.3289 70.6861L26.932 68.5185C27.5841 68.6999 28.2441 68.8622 28.9115 69.0048L28.4414 71.2052C27.7292 71.053 27.0248 70.8798 26.3289 70.6861ZM30.5818 71.595L30.9176 69.3702C31.5857 69.471 32.2603 69.5523 32.941 69.6134L32.7398 71.8544C32.014 71.7892 31.2945 71.7025 30.5818 71.595ZM34.91 71.9838L34.9769 69.7348C35.3166 69.7449 35.6577 69.75 36 69.75C36.3423 69.75 36.6834 69.7449 37.0231 69.7348L37.09 71.9838C36.728 71.9946 36.3646 72 36 72C35.6354 72 35.272 71.9946 34.91 71.9838ZM39.2602 71.8544L39.059 69.6134C39.7397 69.5523 40.4143 69.471 41.0824 69.3702L41.4182 71.5949C40.7055 71.7025 39.986 71.7892 39.2602 71.8544ZM43.5586 71.2052L43.0885 69.0048C43.7559 68.8622 44.4159 68.6999 45.068 68.5185L45.6711 70.6861C44.9752 70.8798 44.2708 71.053 43.5586 71.2052ZM47.7475 70.0397L47.0136 67.9128C47.6576 67.6906 48.2928 67.4494 48.9185 67.1899L49.7804 69.2683C49.1126 69.5452 48.4348 69.8026 47.7475 70.0397ZM51.7629 68.3746L50.7765 66.3524C51.3886 66.0538 51.9903 65.7373 52.581 65.4034L53.6881 67.3622C53.058 67.7183 52.416 68.0561 51.7629 68.3746ZM55.5482 66.2353L54.3249 64.347C54.896 63.977 55.4552 63.5901 56.002 63.1872L57.3369 64.9984C56.7538 65.4281 56.1574 65.8407 55.5482 66.2353ZM59.048 63.656L57.6066 61.9283C58.1289 61.4925 58.6379 61.0413 59.1329 60.5752L60.6754 62.2132C60.1477 62.7102 59.6049 63.1914 59.048 63.656ZM62.2132 60.6754L60.5752 59.1329C61.0413 58.6379 61.4925 58.1289 61.9283 57.6066L63.656 59.048C63.1914 59.6049 62.7102 60.1477 62.2132 60.6754ZM64.9984 57.3369L63.1872 56.002C63.5901 55.4552 63.977 54.896 64.347 54.3249L66.2353 55.5482C65.8407 56.1574 65.4281 56.7538 64.9984 57.3369ZM67.3622 53.6881L65.4034 52.581C65.7373 51.9903 66.0538 51.3886 66.3524 50.7765L68.3746 51.7629C68.0561 52.416 67.7184 53.058 67.3622 53.6881ZM69.2683 49.7804L67.1899 48.9185C67.4494 48.2928 67.6906 47.6576 67.9128 47.0136L70.0397 47.7475C69.8026 48.4348 69.5452 49.1126 69.2683 49.7804ZM70.6861 45.6711L68.5185 45.068C68.6999 44.4159 68.8622 43.7559 69.0048 43.0885L71.2052 43.5586C71.053 44.2708 70.8798 44.9752 70.6861 45.6711ZM71.595 41.4182L69.3702 41.0824C69.471 40.4143 69.5523 39.7397 69.6134 39.059L71.8544 39.2602C71.7892 39.986 71.7025 40.7055 71.595 41.4182Z", fill: secondaryColor })));
};

var Icon$U = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4.5 12H7.5C8.05 12 8.5 11.55 8.5 11V7C8.5 6.45 8.05 6 7.5 6H4.5C3.95 6 3.5 6.45 3.5 7V11C3.5 11.55 3.95 12 4.5 12ZM4.5 19H7.5C8.05 19 8.5 18.55 8.5 18V14C8.5 13.45 8.05 13 7.5 13H4.5C3.95 13 3.5 13.45 3.5 14V18C3.5 18.55 3.95 19 4.5 19ZM10.5 19H13.5C14.05 19 14.5 18.55 14.5 18V14C14.5 13.45 14.05 13 13.5 13H10.5C9.95 13 9.5 13.45 9.5 14V18C9.5 18.55 9.95 19 10.5 19ZM16.5 19H19.5C20.05 19 20.5 18.55 20.5 18V14C20.5 13.45 20.05 13 19.5 13H16.5C15.95 13 15.5 13.45 15.5 14V18C15.5 18.55 15.95 19 16.5 19ZM10.5 12H13.5C14.05 12 14.5 11.55 14.5 11V7C14.5 6.45 14.05 6 13.5 6H10.5C9.95 6 9.5 6.45 9.5 7V11C9.5 11.55 9.95 12 10.5 12ZM15.5 7V11C15.5 11.55 15.95 12 16.5 12H19.5C20.05 12 20.5 11.55 20.5 11V7C20.5 6.45 20.05 6 19.5 6H16.5C15.95 6 15.5 6.45 15.5 7Z" })));
};

var Icon$T = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 25 24" }, props),
        React__default['default'].createElement("path", { d: "M19.2 3H5.19995C4.09995 3 3.19995 3.9 3.19995 5V19C3.19995 20.1 4.09995 21 5.19995 21H19.2C20.3 21 21.2 20.1 21.2 19V5C21.2 3.9 20.3 3 19.2 3ZM19.2 19H5.19995V5H19.2V19Z", fill: "#1FC7D4" }),
        React__default['default'].createElement("path", { d: "M11.45 7.72021H6.44995V9.22022H11.45V7.72021Z", fill: "#1FC7D4" }),
        React__default['default'].createElement("path", { d: "M18.2 15.75H13.2V17.25H18.2V15.75Z", fill: "#1FC7D4" }),
        React__default['default'].createElement("path", { d: "M18.2 13.25H13.2V14.75H18.2V13.25Z", fill: "#1FC7D4" }),
        React__default['default'].createElement("path", { d: "M8.19995 18H9.69995V16H11.7V14.5H9.69995V12.5H8.19995V14.5H6.19995V16H8.19995V18Z", fill: "#1FC7D4" }),
        React__default['default'].createElement("path", { d: "M14.29 10.95L15.7 9.54L17.11 10.95L18.17 9.89L16.76 8.47L18.17 7.06L17.11 6L15.7 7.41L14.29 6L13.23 7.06L14.64 8.47L13.23 9.89L14.29 10.95Z", fill: "#1FC7D4" })));
};

var Icon$S = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 18 13" }, props),
        React__default['default'].createElement("path", { d: "M6 10.2001L2.5 6.70007C2.11 6.31007 1.49 6.31007 1.1 6.70007C0.709995 7.09007 0.709995 7.71007 1.1 8.10007L5.29 12.2901C5.68 12.6801 6.31 12.6801 6.7 12.2901L17.3 1.70007C17.69 1.31007 17.69 0.690068 17.3 0.300068C16.91 -0.0899316 16.29 -0.0899316 15.9 0.300068L6 10.2001Z" })));
};

var Icon$R = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z" })));
};

var Icon$Q = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M14.71 15.88L10.83 12L14.71 8.12001C15.1 7.73001 15.1 7.10001 14.71 6.71001C14.32 6.32001 13.69 6.32001 13.3 6.71001L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z" })));
};

var Icon$P = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z" })));
};

var Icon$O = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z" })));
};

var Icon$N = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z" })));
};

var Icon$M = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z" })));
};

var Icon$L = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$K = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z" })));
};

var Icon$J = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React__default['default'].createElement("path", { d: "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM9 14H11V16H9V14ZM10.61 4.04C8.55 3.74 6.73 5.01 6.18 6.83C6 7.41 6.44 8 7.05 8H7.25C7.66 8 7.99 7.71 8.13 7.33C8.45 6.44 9.4 5.83 10.43 6.05C11.38 6.25 12.08 7.18 12 8.15C11.9 9.49 10.38 9.78 9.55 11.03C9.55 11.04 9.54 11.04 9.54 11.05C9.53 11.07 9.52 11.08 9.51 11.1C9.42 11.25 9.33 11.42 9.26 11.6C9.25 11.63 9.23 11.65 9.22 11.68C9.21 11.7 9.21 11.72 9.2 11.75C9.08 12.09 9 12.5 9 13H11C11 12.58 11.11 12.23 11.28 11.93C11.3 11.9 11.31 11.87 11.33 11.84C11.41 11.7 11.51 11.57 11.61 11.45C11.62 11.44 11.63 11.42 11.64 11.41C11.74 11.29 11.85 11.18 11.97 11.07C12.93 10.16 14.23 9.42 13.96 7.51C13.72 5.77 12.35 4.3 10.61 4.04Z" })));
};

var Icon$I = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4.5 14H6.5C7.05 14 7.5 13.55 7.5 13V11C7.5 10.45 7.05 10 6.5 10H4.5C3.95 10 3.5 10.45 3.5 11V13C3.5 13.55 3.95 14 4.5 14ZM4.5 19H6.5C7.05 19 7.5 18.55 7.5 18V16C7.5 15.45 7.05 15 6.5 15H4.5C3.95 15 3.5 15.45 3.5 16V18C3.5 18.55 3.95 19 4.5 19ZM4.5 9H6.5C7.05 9 7.5 8.55 7.5 8V6C7.5 5.45 7.05 5 6.5 5H4.5C3.95 5 3.5 5.45 3.5 6V8C3.5 8.55 3.95 9 4.5 9ZM9.5 14H19.5C20.05 14 20.5 13.55 20.5 13V11C20.5 10.45 20.05 10 19.5 10H9.5C8.95 10 8.5 10.45 8.5 11V13C8.5 13.55 8.95 14 9.5 14ZM9.5 19H19.5C20.05 19 20.5 18.55 20.5 18V16C20.5 15.45 20.05 15 19.5 15H9.5C8.95 15 8.5 15.45 8.5 16V18C8.5 18.55 8.95 19 9.5 19ZM8.5 6V8C8.5 8.55 8.95 9 9.5 9H19.5C20.05 9 20.5 8.55 20.5 8V6C20.5 5.45 20.05 5 19.5 5H9.5C8.95 5 8.5 5.45 8.5 6Z" })));
};

var Icon$H = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React__default['default'].createElement("image", { width: "32", height: "32", href: "images/egg/logo.png" })));
};

var Icon$G = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 512 512" }, props),
        React__default['default'].createElement("circle", { cx: "256", cy: "256", r: "256", fill: "url(#paint0_linear)" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M149.813 139.861C144.738 112.406 165.591 87.0417 193.238 87.0417C217.636 87.0417 237.414 107.022 237.414 131.669V186.687C243.517 186.252 249.718 186.028 255.998 186.028C262.032 186.028 267.992 186.234 273.862 186.636V131.669C273.862 107.022 293.641 87.0417 318.039 87.0417C345.686 87.0417 366.539 112.406 361.464 139.861L349.509 204.532C390.538 222.627 421.562 254.056 421.562 293.548V317.442C421.562 349.919 400.293 377.11 370.56 395.466C340.595 413.965 300.058 424.962 255.998 424.962C211.939 424.962 171.401 413.965 141.436 395.466C111.703 377.11 90.4342 349.919 90.4342 317.442V293.548C90.4342 254.265 121.139 222.957 161.822 204.825L149.813 139.861ZM334.189 213.028L348.178 137.354C351.701 118.299 337.227 100.695 318.039 100.695C301.105 100.695 287.378 114.562 287.378 131.669V201.683C282.941 201.108 278.433 200.653 273.862 200.323C268.003 199.899 262.042 199.682 255.998 199.682C249.707 199.682 243.505 199.918 237.414 200.376C232.844 200.72 228.335 201.189 223.899 201.777V131.669C223.899 114.562 210.172 100.695 193.238 100.695C174.05 100.695 159.576 118.299 163.099 137.354L177.134 213.279C133.257 229.744 103.95 259.533 103.95 293.548V317.442C103.95 369.283 172.024 411.308 255.998 411.308C339.972 411.308 408.047 369.283 408.047 317.442V293.548C408.047 259.36 378.439 229.44 334.189 213.028Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M408.047 317.442C408.047 369.283 339.972 411.308 255.998 411.308C172.024 411.308 103.95 369.283 103.95 317.442V293.548H408.047V317.442Z", fill: "#FEDC90" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M163.099 137.354C159.576 118.299 174.05 100.695 193.238 100.695C210.172 100.695 223.899 114.562 223.899 131.669V201.777C234.247 200.404 244.986 199.682 255.998 199.682C266.755 199.682 277.252 200.371 287.378 201.683V131.669C287.378 114.562 301.105 100.695 318.039 100.695C337.227 100.695 351.701 118.299 348.178 137.354L334.189 213.028C378.439 229.44 408.047 259.36 408.047 293.548C408.047 345.389 339.972 387.415 255.998 387.415C172.024 387.415 103.95 345.389 103.95 293.548C103.95 259.533 133.257 229.744 177.134 213.279L163.099 137.354Z", fill: "#D1884F" }),
        React__default['default'].createElement("path", { d: "M213.762 286.722C213.762 300.86 206.199 312.322 196.868 312.322C187.538 312.322 179.974 300.86 179.974 286.722C179.974 272.583 187.538 261.122 196.868 261.122C206.199 261.122 213.762 272.583 213.762 286.722Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M330.333 286.722C330.333 300.86 322.769 312.322 313.439 312.322C304.108 312.322 296.544 300.86 296.544 286.722C296.544 272.583 304.108 261.122 313.439 261.122C322.769 261.122 330.333 272.583 330.333 286.722Z", fill: "#633001" }),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "256", y1: "0", x2: "256", y2: "512", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#54DADE" }),
                React__default['default'].createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })))));
};

var Icon$F = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 15 2" }, props),
        React__default['default'].createElement("path", { d: "M13.2 2L1.20004 2C0.650043 2 0.200043 1.55 0.200043 1C0.200043 0.45 0.650043 0 1.20004 0L13.2 0C13.75 0 14.2 0.45 14.2 1C14.2 1.55 13.75 2 13.2 2Z" })));
};

var Icon$E = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" })));
};

var Icon$D = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.43832 38.1153C2.43048 38.3002 2.42654 38.4857 2.42654 38.6718C2.42654 39.3754 2.48287 40.0702 2.59273 40.7545H2.42654V41.8317C2.42654 42.3575 2.45801 42.8784 2.51976 43.3937C3.7248 53.4491 16.4632 61.3609 32 61.3609C47.5368 61.3609 60.2752 53.4491 61.4802 43.3937C61.542 42.8784 61.5735 42.3575 61.5735 41.8317V40.7545H61.4073C61.5171 40.0702 61.5735 39.3754 61.5735 38.6718C61.5735 38.4857 61.5695 38.3002 61.5617 38.1153C61.1156 27.587 48.0511 19.1426 32 19.1426C15.9489 19.1426 2.88444 27.587 2.43832 38.1153ZM0.00951064 38.1153C0.229456 31.6916 4.24297 26.2955 9.82907 22.6067C15.6197 18.7827 23.4643 16.5034 32 16.5034C40.5358 16.5034 48.3803 18.7827 54.1709 22.6067C59.757 26.2955 63.7705 31.6916 63.9905 38.1153H64V41.8317C64 48.5003 59.9176 54.102 54.1709 57.8969C48.3803 61.7208 40.5358 64.0001 32 64.0001C23.4643 64.0001 15.6197 61.7208 9.82907 57.8969C4.08238 54.102 0 48.5003 0 41.8317V38.1153H0.00951064Z", fill: "#606063" }),
        React__default['default'].createElement("path", { d: "M61.5734 41.832C61.5734 52.6177 48.3329 61.3612 32 61.3612C15.667 61.3612 2.42651 52.6177 2.42651 41.832V38.7405H61.5734V41.832Z", fill: "#BEBEBE" }),
        React__default['default'].createElement("path", { d: "M61.5734 38.6718C61.5734 49.4575 48.3329 58.201 32 58.201C15.667 58.201 2.42651 49.4575 2.42651 38.6718C2.42651 27.8861 15.667 19.1426 32 19.1426C48.3329 19.1426 61.5734 27.8861 61.5734 38.6718Z", fill: "#FAF9FA" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.97668 33.1548C6.97663 33.167 6.97661 33.1792 6.97661 33.1915C6.97661 34.0795 7.09495 34.9492 7.32173 35.794H6.97634V36.9377C6.97634 37.4425 7.01459 37.9414 7.08925 38.4332C8.21673 45.8588 17.6492 51.6547 29.1184 51.6547C40.5876 51.6547 50.0201 45.8588 51.1475 38.4332C51.2222 37.9414 51.2604 37.4425 51.2604 36.9377V35.794H50.9156C51.1362 34.9723 51.2542 34.127 51.2604 33.2641C51.2606 33.2399 51.2607 33.2157 51.2607 33.1915C51.2607 33.1792 51.2607 33.167 51.2606 33.1548C51.2309 25.0436 41.329 18.4744 29.1187 18.4744C16.9083 18.4744 7.00645 25.0436 6.97668 33.1548ZM4.55012 33.1548H4.5498V36.9377C4.5498 42.269 7.79116 46.6683 12.1963 49.5962C16.643 52.5518 22.632 54.2939 29.1184 54.2939C35.6048 54.2939 41.5937 52.5518 46.0405 49.5962C50.4456 46.6683 53.687 42.269 53.687 36.9377V33.2739C53.6872 33.2464 53.6872 33.2189 53.6872 33.1915C53.6872 27.8601 50.4459 23.4609 46.0408 20.533C41.594 17.5773 35.6051 15.8352 29.1187 15.8352C22.6322 15.8352 16.6433 17.5773 12.1965 20.533C7.80153 23.4542 4.56495 27.84 4.55012 33.1548Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M51.2604 36.9379C51.2604 45.0659 41.3471 51.6549 29.1184 51.6549C16.8897 51.6549 6.97632 45.0659 6.97632 36.9379V33.4849H51.2604V36.9379Z", fill: "#FEDC90" }),
        React__default['default'].createElement("path", { d: "M51.2604 33.1914C51.2604 41.3195 41.3471 47.9085 29.1184 47.9085C16.8897 47.9085 6.97632 41.3195 6.97632 33.1914C6.97632 25.0634 16.8897 18.4744 29.1184 18.4744C41.3471 18.4744 51.2604 25.0634 51.2604 33.1914Z", fill: "#D1884F" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.6497 25.2371C13.6496 25.2493 13.6496 25.2615 13.6496 25.2737C13.6496 26.1618 13.7679 27.0315 13.9947 27.8762H13.6493V29.0199C13.6493 29.5248 13.6876 30.0237 13.7622 30.5154C14.8897 37.941 24.3222 43.737 35.7914 43.737C47.2605 43.737 56.693 37.941 57.8205 30.5154C57.8952 30.0237 57.9334 29.5248 57.9334 29.0199V27.8762H57.5886C57.8092 27.0545 57.9271 26.2092 57.9334 25.3464C57.9336 25.3222 57.9337 25.298 57.9337 25.2737C57.9337 25.2615 57.9337 25.2493 57.9336 25.2371C57.9038 17.1259 48.0019 10.5567 35.7916 10.5567C23.5813 10.5567 13.6794 17.1259 13.6497 25.2371ZM11.2231 25.2371H11.2228V29.0199C11.2228 34.3513 14.4641 38.7505 18.8693 41.6785C23.316 44.6341 29.3049 46.3762 35.7914 46.3762C42.2778 46.3762 48.2667 44.6341 52.7135 41.6785C57.1186 38.7505 60.36 34.3513 60.36 29.0199V25.3561C60.3601 25.3287 60.3602 25.3012 60.3602 25.2737C60.3602 19.9424 57.1189 15.5432 52.7137 12.6152C48.267 9.65961 42.2781 7.91748 35.7916 7.91748C29.3052 7.91748 23.3163 9.65961 18.8695 12.6152C14.4745 15.5364 11.2379 19.9222 11.2231 25.2371Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M57.9334 29.0201C57.9334 37.1481 48.0201 43.7372 35.7913 43.7372C23.5626 43.7372 13.6493 37.1481 13.6493 29.0201V25.5671H57.9334V29.0201Z", fill: "#FEDC90" }),
        React__default['default'].createElement("path", { d: "M57.9334 25.274C57.9334 33.402 48.0201 39.991 35.7913 39.991C23.5626 39.991 13.6493 33.402 13.6493 25.274C13.6493 17.1459 23.5626 10.5569 35.7913 10.5569C48.0201 10.5569 57.9334 17.1459 57.9334 25.274Z", fill: "#D1884F" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.97668 17.3196C6.97663 17.3318 6.97661 17.344 6.97661 17.3563C6.97661 18.2443 7.09495 19.114 7.32173 19.9588H6.97634V21.1025C6.97634 21.6073 7.01459 22.1062 7.08925 22.598C8.21673 30.0236 17.6492 35.8195 29.1184 35.8195C40.5876 35.8195 50.0201 30.0236 51.1475 22.598C51.2222 22.1062 51.2604 21.6073 51.2604 21.1025V19.9588H50.9156C51.1362 19.1371 51.2542 18.2917 51.2604 17.4289C51.2606 17.4047 51.2607 17.3805 51.2607 17.3563C51.2607 17.344 51.2607 17.3318 51.2606 17.3196C51.2309 9.20843 41.329 2.63919 29.1187 2.63919C16.9083 2.63919 7.00645 9.20843 6.97668 17.3196ZM4.55012 17.3196H4.5498V21.1025C4.5498 26.4338 7.79116 30.833 12.1963 33.761C16.643 36.7166 22.632 38.4587 29.1184 38.4587C35.6048 38.4587 41.5937 36.7166 46.0405 33.761C50.4456 30.833 53.687 26.4338 53.687 21.1025V17.4387C53.6872 17.4112 53.6872 17.3837 53.6872 17.3563C53.6872 12.0249 50.4459 7.62568 46.0408 4.69775C41.594 1.74213 35.6051 0 29.1187 0C22.6322 0 16.6433 1.74213 12.1965 4.69775C7.80153 7.61896 4.56495 12.0047 4.55012 17.3196Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M51.2604 21.1027C51.2604 29.2307 41.3471 35.8197 29.1184 35.8197C16.8897 35.8197 6.97632 29.2307 6.97632 21.1027V17.6497H51.2604V21.1027Z", fill: "#FEDC90" }),
        React__default['default'].createElement("path", { d: "M51.2604 17.3562C51.2604 25.4842 41.3471 32.0733 29.1184 32.0733C16.8897 32.0733 6.97632 25.4842 6.97632 17.3562C6.97632 9.22822 16.8897 2.63916 29.1184 2.63916C41.3471 2.63916 51.2604 9.22822 51.2604 17.3562Z", fill: "#D1884F" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.214 18.272C12.214 20.9856 14.0269 23.4161 16.8871 25.0513L14.9054 28.7844L14.9059 28.7847H14.9054V38.2326C14.9054 39.4819 15.8366 40.4947 16.9853 40.4947C18.134 40.4947 19.0652 39.4819 19.0652 38.2326V30.7188L21.1972 26.7024C22.5605 27.0169 24.0238 27.1876 25.5468 27.1876C32.9103 27.1876 38.8796 23.196 38.8796 18.272C38.8796 13.3481 32.9103 9.35645 25.5468 9.35645C18.1833 9.35645 12.214 13.3481 12.214 18.272Z", fill: "url(#paint0_linear)" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.8871 25.0513C16.5702 24.8701 16.2663 24.6792 15.9762 24.4793C13.6475 22.8741 12.2139 20.685 12.2139 18.272C12.2139 13.3481 18.1832 9.35641 25.5468 9.35641C32.9103 9.35641 38.8796 13.3481 38.8796 18.272C38.8796 23.1959 32.9103 27.1876 25.5468 27.1876C24.0238 27.1876 22.5604 27.0168 21.1972 26.7024L19.0652 30.7187V38.2325C19.0652 39.4819 18.134 40.4947 16.9853 40.4947C15.8366 40.4947 14.9054 39.4819 14.9054 38.2325V28.7847L16.8871 25.0513ZM12.7822 28.8244V38.2325C12.7822 40.7573 14.664 42.804 16.9853 42.804C19.3066 42.804 21.1884 40.7573 21.1884 38.2325V31.3375L22.2942 29.2544C23.3445 29.4135 24.433 29.4969 25.5468 29.4969C29.5564 29.4969 33.2881 28.4148 36.0865 26.5435C38.8503 24.6954 41.0028 21.836 41.0028 18.272C41.0028 14.708 38.8503 11.8486 36.0865 10.0005C33.2881 8.12923 29.5564 7.04712 25.5468 7.04712C21.5371 7.04712 17.8054 8.12923 15.007 10.0005C12.2432 11.8486 10.0907 14.708 10.0907 18.272C10.0907 21.4 11.738 23.9758 14.0266 25.8213L13.0813 27.6021C12.9912 27.7662 12.9192 27.9435 12.8685 28.1307C12.8064 28.3589 12.7783 28.5928 12.7822 28.8244Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M16.3791 14.5156C16.3791 17.0663 19.3667 19.1341 23.0521 19.1341C26.7375 19.1341 29.7251 17.0663 29.7251 14.5156C29.7251 11.9648 26.7375 9.89697 23.0521 9.89697C19.3667 9.89697 16.3791 11.9648 16.3791 14.5156Z", fill: "#9E7200" }),
        React__default['default'].createElement("path", { d: "M16.3792 12.5361H29.7251V14.5155H16.3792V12.5361Z", fill: "#9E7200" }),
        React__default['default'].createElement("path", { d: "M16.3791 12.5361C16.3791 15.0868 19.3667 17.1546 23.0521 17.1546C26.7375 17.1546 29.7251 15.0868 29.7251 12.5361C29.7251 9.98529 26.7375 7.91748 23.0521 7.91748C19.3667 7.91748 16.3791 9.98529 16.3791 12.5361Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M20.52 11.9795L22.4008 10.6777C22.7983 10.4027 23.3062 10.4027 23.7036 10.6777L25.5845 11.9795C25.959 12.2388 25.959 12.8336 25.5845 13.0928L23.7036 14.3946C23.3062 14.6697 22.7983 14.6697 22.4008 14.3946L20.52 13.0928C20.1454 12.8336 20.1454 12.2388 20.52 11.9795Z", fill: "#9E7200" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.1938 7.32218C18.7911 6.21664 20.8681 5.6084 23.0522 5.6084C25.2363 5.6084 27.3133 6.21664 28.9106 7.32218C30.4827 8.41029 31.8484 10.1975 31.8484 12.5363V14.5157C31.8484 16.8545 30.4827 18.6417 28.9106 19.7298C27.3133 20.8353 25.2363 21.4435 23.0522 21.4435C20.8681 21.4435 18.7911 20.8353 17.1938 19.7298C15.6217 18.6417 14.256 16.8545 14.256 14.5157V12.5363C14.256 10.1975 15.6217 8.41029 17.1938 7.32218ZM23.0522 7.91769C19.3668 7.91769 16.3792 9.9855 16.3792 12.5363V14.5157C16.3792 17.0664 19.3668 19.1343 23.0522 19.1343C26.7376 19.1343 29.7252 17.0664 29.7252 14.5157V12.5363C29.7252 9.9855 26.7376 7.91769 23.0522 7.91769Z", fill: "#633001" }),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "25.691", y1: "9.6549", x2: "25.691", y2: "40.2608", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#9F4A08" }),
                React__default['default'].createElement("stop", { offset: "0.370494", stopColor: "#7D3900" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#8D4104" })))));
};

var Icon$C = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 90 90" }, props),
        React__default['default'].createElement("image", { width: 90, height: 90, href: "images/egg/9.png" })));
};

var Icon$B = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React__default['default'].createElement("path", { d: "M38 10H34C34 7.79086 32.2091 6 30 6H18C15.7909 6 14 7.79086 14 10H10C7.8 10 6 11.8 6 14V16C6 21.1 9.84 25.26 14.78 25.88C16.04 28.88 18.74 31.14 22 31.8V38H16C14.8954 38 14 38.8954 14 40C14 41.1046 14.8954 42 16 42H32C33.1046 42 34 41.1046 34 40C34 38.8954 33.1046 38 32 38H26V31.8C29.26 31.14 31.96 28.88 33.22 25.88C38.16 25.26 42 21.1 42 16V14C42 11.8 40.2 10 38 10ZM10 16V14H14V21.64C11.68 20.8 10 18.6 10 16ZM24 28C20.7 28 18 25.3 18 22V10H30V22C30 25.3 27.3 28 24 28ZM38 16C38 18.6 36.32 20.8 34 21.64V14H38V16Z" })));
};

var Icon$A = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React__default['default'].createElement("path", { d: "M5 10C5 10.55 5.45 11 6 11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9H6C5.45 9 5 9.45 5 10ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" })));
};

var Icon$z = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z" })));
};

var Icon$y = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 34 38" }, props),
        React__default['default'].createElement("rect", { x: "8.83594", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React__default['default'].createElement("rect", { x: "19.4385", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React__default['default'].createElement("path", { d: "M8.5 13.0084C13.1944 8.40751 20.8056 8.40751 25.5 13.0084C30.1944 17.6093 30.1944 25.0689 25.5 29.6698L17.6538 37.3597C17.2927 37.7136 16.7073 37.7136 16.3462 37.3597L8.5 29.6698C3.80558 25.0689 3.80558 17.6093 8.5 13.0084Z", fill: "#D1884F" }),
        React__default['default'].createElement("ellipse", { cx: "12.3696", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" }),
        React__default['default'].createElement("ellipse", { cx: "21.2056", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" })));
};

var Icon$x = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React__default['default'].createElement("g", { clipPath: "url(#clip0)" },
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.0073 13.3635C24.9476 12.4048 23.2491 12.9058 22.8792 14.286C22.6061 15.3055 23.2111 16.3534 24.2305 16.6266L31.8797 18.6762L26.0073 13.3635ZM18.609 13.1418C19.8344 8.56857 25.4621 6.90878 28.9731 10.0851L41.2257 21.1698C43.051 22.8212 41.4235 25.8102 39.0459 25.1732L23.0863 20.8968C19.7085 19.9917 17.7039 16.5197 18.609 13.1418Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M42.264 10.1052C42.7399 8.62854 44.609 8.17749 45.7061 9.27458C46.5164 10.0849 46.5164 11.3987 45.7061 12.209L39.6263 18.2888L42.264 10.1052ZM49.1002 5.88046C45.4652 2.24548 39.2724 3.73996 37.6954 8.63274L32.192 25.7073C31.3722 28.251 34.5252 30.1781 36.415 28.2883L49.1002 15.6031C51.785 12.9183 51.785 8.5653 49.1002 5.88046Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { opacity: "0.6", d: "M70.9047 42.5535C71.2363 43.8171 73.0301 43.8171 73.3617 42.5535L74.3564 38.7636C74.4727 38.3202 74.819 37.9739 75.2624 37.8575L79.0523 36.8629C80.3159 36.5313 80.3159 34.7375 79.0523 34.4059L75.2624 33.4112C74.819 33.2949 74.4727 32.9486 74.3564 32.5051L73.3617 28.7153C73.0301 27.4517 71.2363 27.4517 70.9047 28.7153L69.91 32.5051C69.7937 32.9486 69.4474 33.2949 69.004 33.4112L65.2141 34.4059C63.9505 34.7375 63.9505 36.5313 65.2141 36.8629L69.004 37.8575C69.4474 37.9739 69.7937 38.3202 69.91 38.7636L70.9047 42.5535Z", fill: "#53DEE9" }),
            React__default['default'].createElement("path", { d: "M67.9738 14.5792C67.9699 15.345 68.9855 15.6172 69.365 14.952L70.5032 12.957C70.6364 12.7235 70.885 12.58 71.1538 12.5814L73.4506 12.5932C74.2164 12.5971 74.4886 11.5814 73.8234 11.202L71.8284 10.0637C71.5949 9.93057 71.4514 9.68195 71.4528 9.41322L71.4646 7.11635C71.4685 6.35056 70.4528 6.07841 70.0734 6.74357L68.9351 8.73862C68.802 8.97203 68.5533 9.11558 68.2846 9.1142L65.9877 9.10239C65.222 9.09846 64.9498 10.1141 65.615 10.4936L67.61 11.6318C67.8434 11.765 67.987 12.0136 67.9856 12.2824L67.9738 14.5792Z", fill: "#53DEE9" }),
            React__default['default'].createElement("path", { opacity: "0.8", d: "M12.6621 19.7326C13.3806 19.544 13.3806 18.5241 12.6621 18.3356L8.79571 17.3208C8.54359 17.2547 8.34669 17.0578 8.28052 16.8056L7.26579 12.9392C7.07722 12.2208 6.05731 12.2208 5.86875 12.9392L4.85402 16.8056C4.78785 17.0578 4.59095 17.2547 4.33883 17.3208L0.472442 18.3356C-0.246022 18.5241 -0.246022 19.544 0.472441 19.7326L4.33883 20.7473C4.59095 20.8135 4.78785 21.0104 4.85402 21.2625L5.86875 25.1289C6.05731 25.8474 7.07722 25.8474 7.26578 25.1289L8.28052 21.2625C8.34669 21.0104 8.54359 20.8135 8.79571 20.7473L12.6621 19.7326Z", fill: "#53DEE9" }),
            React__default['default'].createElement("path", { d: "M16.1463 37.3821C17.0611 33.9679 20.5705 31.9418 23.9847 32.8566L57.9852 41.9671C61.3994 42.8819 63.4256 46.3912 62.5107 49.8054L56.8167 71.0558C55.9019 74.47 52.3925 76.4961 48.9783 75.5813L14.9778 66.4709C11.5636 65.556 9.53745 62.0467 10.4523 58.6325L16.1463 37.3821Z", fill: "url(#paint0_linear)" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.157 45.058L23.1564 35.9476C21.4493 35.4902 19.6947 36.5032 19.2373 38.2103L13.5432 59.4607C13.0858 61.1678 14.0989 62.9225 15.806 63.3799L49.8066 72.4903C51.5137 72.9477 53.2683 71.9347 53.7257 70.2276L59.4198 48.9772C59.8772 47.2701 58.8641 45.5154 57.157 45.058ZM23.9847 32.8566C20.5705 31.9418 17.0611 33.9679 16.1463 37.3821L10.4523 58.6325C9.53745 62.0467 11.5636 65.556 14.9778 66.4709L48.9783 75.5813C52.3925 76.4961 55.9019 74.47 56.8167 71.0558L62.5107 49.8054C63.4256 46.3912 61.3994 42.8819 57.9852 41.9671L23.9847 32.8566Z", fill: "#0098A1" }),
            React__default['default'].createElement("path", { d: "M35.9629 36.0654L46.0085 38.7571L37.0016 72.3714L26.956 69.6797L35.9629 36.0654Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { d: "M11.8535 53.0029L14.5452 42.9573L61.111 55.4346L58.4193 65.4802L11.8535 53.0029Z", fill: "#7645D9" }),
            React__default['default'].createElement("g", { style: { mixBlendMode: "multiply" } },
                React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.0918 57.9047L40.1732 60.606L39.7591 62.1515L29.6777 59.4502L30.0918 57.9047ZM42.8724 50.5325L32.791 47.8312L33.2051 46.2857L43.2865 48.987L42.8724 50.5325Z", fill: "#7645D9" })),
            React__default['default'].createElement("path", { d: "M11.4611 31.1814C10.775 28.6207 12.2946 25.9887 14.8552 25.3026L58.1287 13.7075C60.6893 13.0214 63.3213 14.541 64.0074 17.1016L65.1462 21.3517C65.8324 23.9123 64.3128 26.5443 61.7521 27.2305L18.4787 38.8256C15.918 39.5117 13.286 37.9921 12.5999 35.4314L11.4611 31.1814Z", fill: "url(#paint1_linear)" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M58.9569 16.7985L15.6834 28.3936C14.8299 28.6223 14.3233 29.4996 14.552 30.3531L15.6908 34.6032C15.9196 35.4568 16.7969 35.9633 17.6504 35.7346L60.9239 24.1395C61.7775 23.9108 62.284 23.0335 62.0553 22.1799L60.9165 17.9298C60.6878 17.0763 59.8104 16.5698 58.9569 16.7985ZM14.8552 25.3026C12.2946 25.9887 10.775 28.6207 11.4611 31.1814L12.5999 35.4314C13.286 37.9921 15.918 39.5117 18.4787 38.8256L61.7521 27.2305C64.3128 26.5443 65.8324 23.9123 65.1462 21.3517L64.0074 17.1016C63.3213 14.541 60.6893 13.0214 58.1287 13.7075L14.8552 25.3026Z", fill: "#0098A1" }),
            React__default['default'].createElement("path", { d: "M31.4707 20.8506L41.5163 18.1589L45.1398 31.6818L35.0942 34.3735L31.4707 20.8506Z", fill: "#7645D9" }),
            React__default['default'].createElement("g", { style: { mixBlendMode: "multiply" } },
                React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.9671 22.5998L41.9672 19.7998L41.5673 17.9998L31.3975 20.8215L31.9671 22.5998Z", fill: "#7645D9" }))),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "40.9849", y1: "37.4118", x2: "31.978", y2: "71.0261", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#53DEE9" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React__default['default'].createElement("linearGradient", { id: "paint1_linear", x1: "36.4919", y1: "19.505", x2: "40.1154", y2: "33.028", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#53DEE9" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React__default['default'].createElement("clipPath", { id: "clip0" },
                React__default['default'].createElement("rect", { width: "80", height: "80", fill: "white", transform: "matrix(-1 0 0 1 80 0)" })))));
};

var Icon$w = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React__default['default'].createElement("path", { d: "M76.2856 28.6526C77.0883 29.4553 77.1989 30.7184 76.548 31.6485C64.6385 48.6643 49.9116 63.5221 33.0019 75.5817L31.6665 76.5341C30.6872 77.2325 29.3467 77.121 28.4962 76.2705L22.4847 70.259C26.0334 66.5844 25.9945 60.7286 22.3678 57.1019C18.7411 53.4752 12.8853 53.4362 9.21067 56.985L3.68116 51.4555C2.62962 50.4039 2.77462 48.6597 3.98536 47.7962L5.32156 46.8433C21.8225 35.0751 36.1934 20.5765 47.815 3.97204C48.6291 2.80897 50.296 2.66297 51.2998 3.66682L56.9276 9.29459C53.3922 12.97 53.4356 18.8158 57.0578 22.438C60.6799 26.0601 66.5257 26.1035 70.2011 22.5681L76.2856 28.6526Z", fill: "#DBCDF9" }),
        React__default['default'].createElement("path", { d: "M78.9507 30.3151L57.459 57.5291L29.6615 78.5708L24.3156 73.1863L22.3868 70.8482L24.3156 68.0575L24.9915 65.2668L24.6194 62.29L23.5031 59.4993L21.6426 57.2668L19.4101 55.7784L16.9915 55.0342H14.0147L10.8519 56.1505L8.99148 57.8249L4.52637 52.4296L11.7898 51.3463C34.3187 47.9863 55.6053 38.8899 73.6048 24.9307L78.9507 30.3151Z", fill: "#A28BD4" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.7724 70.5193C19.7732 69.7287 20.0885 68.971 20.6487 68.4131L20.6586 68.4032C23.1622 65.8996 23.1622 61.8405 20.6586 59.3369C18.155 56.8333 14.0958 56.8333 11.5922 59.3369L11.5823 59.3468C11.0245 59.907 10.2667 60.2223 9.47617 60.2231C8.68561 60.2239 7.92718 59.9103 7.36817 59.3512L1.57656 53.5596C-0.776282 51.2068 -0.451848 47.304 2.25722 45.372L3.59342 44.419L5.32184 46.8426L3.98564 47.7955C2.7749 48.659 2.6299 50.4032 3.68144 51.4548L9.47304 57.2464L9.48735 57.232C9.49192 57.2275 9.49649 57.2229 9.50106 57.2183C13.1682 53.5659 19.1019 53.5705 22.7635 57.232C26.4247 60.8933 26.4295 66.8263 22.778 70.4936C22.7731 70.4984 22.7683 70.5033 22.7635 70.5081L22.7491 70.5224L28.4965 76.2698C29.347 77.1203 30.6875 77.2318 31.6668 76.5334L33.0022 75.581C49.9119 63.5214 64.6388 48.6636 76.5483 31.6478C77.1992 30.7178 77.0886 29.4546 76.2859 28.6519L70.2487 22.6148C70.2268 22.6371 70.2047 22.6594 70.1825 22.6816C70.1603 22.7038 70.138 22.7259 70.1156 22.7479C66.4445 26.3475 60.5503 26.3254 56.9064 22.6816C53.2625 19.0376 53.2405 13.1434 56.8404 9.47221C56.8623 9.44989 56.8843 9.42764 56.9064 9.40548C56.9286 9.38329 56.9509 9.36124 56.9733 9.33932L51.3001 3.66613C50.2962 2.66229 48.6293 2.80829 47.8153 3.97136C36.1937 20.5758 21.8228 35.0744 5.32184 46.8426L3.59342 44.419C19.8185 32.8476 33.9492 18.5913 45.3766 2.26445C47.252 -0.415092 51.0922 -0.751452 53.4049 1.56125L59.0781 7.23444C59.64 7.79626 59.9539 8.55937 59.95 9.35389C59.9461 10.1484 59.6247 10.9084 59.0574 11.4647C59.042 11.4798 59.0267 11.495 59.0113 11.5104C56.5077 14.014 56.5077 18.0731 59.0113 20.5767C61.5149 23.0803 65.5741 23.0803 68.0777 20.5767C68.0929 20.5615 68.1081 20.5461 68.1233 20.5306C68.6796 19.9633 69.4396 19.6419 70.2341 19.6381C71.0287 19.6342 71.7918 19.9481 72.3536 20.5099L78.3907 26.547C80.2148 28.3711 80.4662 31.2413 78.987 33.3547C66.8832 50.648 51.9161 65.7482 34.7306 78.0046L33.3952 78.9569C31.2319 80.4997 28.2705 80.2536 26.3916 78.3747L20.6442 72.6273C20.0852 72.0683 19.7715 71.3099 19.7724 70.5193Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M39.9888 14.0672L41.3044 15.3827C41.8856 15.964 41.8856 16.9064 41.3044 17.4876C40.7231 18.0688 39.7808 18.0688 39.1995 17.4876L37.884 16.1721C37.3027 15.5908 37.3027 14.6484 37.884 14.0672C38.4652 13.4859 39.4076 13.4859 39.9888 14.0672Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M45.5142 19.5926L46.8298 20.9081C47.411 21.4894 47.411 22.4317 46.8298 23.013C46.2485 23.5942 45.3062 23.5942 44.7249 23.013L43.4094 21.6974C42.8281 21.1162 42.8281 20.1738 43.4094 19.5926C43.9906 19.0113 44.933 19.0113 45.5142 19.5926Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M52.3542 28.5384C51.773 29.1196 50.8306 29.1196 50.2493 28.5384L48.6707 26.9597C48.0894 26.3785 48.0894 25.4361 48.6707 24.8549C49.2519 24.2736 50.1943 24.2736 50.7755 24.8549L52.3542 26.4335C52.9354 27.0148 52.9354 27.9571 52.3542 28.5384Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.8796 34.0638C57.2983 34.645 56.356 34.645 55.7747 34.0638L54.1961 32.4851C53.6148 31.9039 53.6148 30.9615 54.1961 30.3802C54.7773 29.799 55.7197 29.799 56.3009 30.3802L57.8796 31.9589C58.4608 32.5401 58.4608 33.4825 57.8796 34.0638Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M61.8267 35.9051L63.1423 37.2206C63.7235 37.8019 63.7235 38.7442 63.1423 39.3255C62.561 39.9067 61.6187 39.9067 61.0374 39.3255L59.7219 38.0099C59.1406 37.4287 59.1406 36.4863 59.7219 35.9051C60.3031 35.3238 61.2455 35.3238 61.8267 35.9051Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M67.3521 41.4305L68.6677 42.746C69.2489 43.3273 69.2489 44.2696 68.6677 44.8509C68.0864 45.4321 67.144 45.4321 66.5628 44.8509L65.2472 43.5353C64.666 42.9541 64.666 42.0117 65.2472 41.4305C65.8285 40.8492 66.7709 40.8492 67.3521 41.4305Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M32.2915 37.1288C30.6927 35.53 30.6927 32.9378 32.2915 31.3389C34.1033 29.5272 37.1152 29.806 38.5636 31.9196L42.2107 37.2416C45.3939 36.2204 48.7719 36.3559 51.0104 38.5945C53.0227 40.6067 53.3281 43.5721 52.6459 46.3981C51.9561 49.256 50.2117 52.2664 47.6467 54.8314C45.0817 57.3964 42.0713 59.1408 39.2134 59.8306C36.3874 60.5128 33.422 60.2073 31.4098 58.1951C29.1842 55.9696 29.0377 52.6168 30.0388 49.4519L24.694 45.7892C22.5804 44.3408 22.3016 41.3289 24.1134 39.5171C25.7122 37.9183 28.3044 37.9183 29.9032 39.5171L33.6067 43.2206C33.9734 42.7908 34.3625 42.3691 34.7735 41.9582C35.1704 41.5613 35.5772 41.1847 35.9918 40.8291L32.2915 37.1288Z", fill: "#633001" }),
        React__default['default'].createElement("ellipse", { cx: "36.9019", cy: "50.5685", rx: "1.79015", ry: "2.60385", transform: "rotate(-45 36.9019 50.5685)", fill: "#DBCDF9" }),
        React__default['default'].createElement("ellipse", { rx: "1.79015", ry: "2.60385", transform: "matrix(0.707107 -0.707106 0.707107 0.707106 43.5768 43.8947)", fill: "#DBCDF9" })));
};

var Icon$v = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React__default['default'].createElement("circle", { cx: "24", cy: "24", r: "24", fill: "url(#paint0_linear)" }),
        React__default['default'].createElement("path", { d: "M39.0623 18.9777C39.3983 19.3138 39.4447 19.8426 39.1721 20.232C34.1862 27.3557 28.0207 33.576 20.9413 38.6248L20.3823 39.0235C19.9723 39.3159 19.4111 39.2692 19.055 38.9132L16.5383 36.3964C18.024 34.858 18.0077 32.4065 16.4893 30.8881C14.971 29.3698 12.5194 29.3535 10.981 30.8392L8.66608 28.5242C8.22585 28.084 8.28655 27.3538 8.79343 26.9923L9.35284 26.5933C16.261 21.6665 22.2775 15.5966 27.1429 8.64507C27.4837 8.15815 28.1816 8.09702 28.6019 8.51729L30.958 10.8734C29.4778 12.4121 29.496 14.8595 31.0125 16.3759C32.5289 17.8924 34.9762 17.9105 36.515 16.4304L39.0623 18.9777Z", fill: "#DBCDF9" }),
        React__default['default'].createElement("path", { d: "M40.1776 19.6742L31.18 31.0674L19.5425 39.8766L17.3044 37.6224L16.4969 36.6435L17.3044 35.4752L17.5873 34.3068L17.4316 33.0606L16.9642 31.8923L16.1853 30.9576L15.2507 30.3345L14.2381 30.0229H12.9919L11.6678 30.4903L10.8889 31.1913L9.01953 28.9325L12.0604 28.4789C21.4923 27.0723 30.404 23.264 37.9396 17.4199L40.1776 19.6742Z", fill: "#A28BD4" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.4028 36.5059C15.4031 36.1749 15.5351 35.8577 15.7697 35.6241L15.7738 35.62C16.822 34.5718 16.822 32.8725 15.7738 31.8243C14.7257 30.7762 13.0263 30.7762 11.9781 31.8243L11.974 31.8285C11.7405 32.063 11.4232 32.195 11.0922 32.1953C10.7613 32.1957 10.4438 32.0643 10.2097 31.8303L7.78504 29.4056C6.80001 28.4206 6.93583 26.7867 8.07 25.9778L8.6294 25.5789L9.35301 26.5935L8.79361 26.9925C8.28673 27.354 8.22602 28.0842 8.66625 28.5244L11.0909 30.9491L11.0969 30.9431C11.0988 30.9412 11.1008 30.9393 11.1027 30.9374C12.638 29.4083 15.1221 29.4102 16.655 30.9431C18.1878 32.4759 18.1899 34.9598 16.6611 36.4951C16.6591 36.4971 16.6571 36.4992 16.655 36.5012L16.649 36.5072L19.0552 38.9134C19.4113 39.2694 19.9725 39.3161 20.3824 39.0237L20.9415 38.625C28.0208 33.5762 34.1863 27.3559 39.1723 20.2321C39.4448 19.8428 39.3985 19.314 39.0625 18.9779L36.535 16.4504C36.5258 16.4598 36.5166 16.4691 36.5073 16.4784C36.498 16.4877 36.4886 16.4969 36.4792 16.5061C34.9423 18.0132 32.4747 18.0039 30.9492 16.4784C29.4236 14.9528 29.4144 12.4852 30.9215 10.9482C30.9307 10.9389 30.9399 10.9296 30.9492 10.9203C30.9585 10.911 30.9678 10.9018 30.9771 10.8926L28.602 8.51747C28.1818 8.0972 27.4839 8.15833 27.1431 8.64525C22.2777 15.5968 16.2612 21.6667 9.35301 26.5935L8.6294 25.5789C15.4221 20.7344 21.338 14.766 26.1221 7.93065C26.9073 6.80885 28.515 6.66803 29.4832 7.63625L31.8584 10.0114C32.0936 10.2466 32.225 10.566 32.2234 10.8987C32.2217 11.2313 32.0872 11.5495 31.8497 11.7824C31.8432 11.7887 31.8368 11.7951 31.8304 11.8015C30.7822 12.8496 30.7822 14.549 31.8304 15.5972C32.8785 16.6453 34.5779 16.6453 35.626 15.5972C35.6324 15.5908 35.6388 15.5844 35.6452 15.5779C35.8781 15.3404 36.1962 15.2058 36.5289 15.2042C36.8615 15.2026 37.181 15.334 37.4162 15.5692L39.9437 18.0967C40.7073 18.8603 40.8126 20.062 40.1933 20.9467C35.126 28.1867 28.8599 34.5084 21.6651 39.6396L21.1061 40.0383C20.2004 40.6842 18.9606 40.5812 18.174 39.7946L15.7678 37.3884C15.5338 37.1544 15.4025 36.8369 15.4028 36.5059Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.8664 12.8716L24.4172 13.4223C24.6605 13.6657 24.6605 14.0602 24.4172 14.3035C24.1738 14.5469 23.7793 14.5469 23.536 14.3035L22.9852 13.7528C22.7419 13.5094 22.7419 13.1149 22.9852 12.8716C23.2285 12.6282 23.6231 12.6282 23.8664 12.8716Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.1799 15.1841L26.7306 15.7348C26.974 15.9782 26.974 16.3727 26.7306 16.616C26.4873 16.8594 26.0928 16.8594 25.8494 16.616L25.2987 16.0653C25.0553 15.8219 25.0553 15.4274 25.2987 15.1841C25.542 14.9407 25.9365 14.9407 26.1799 15.1841Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M29.0441 18.9295C28.8008 19.1729 28.4062 19.1728 28.1629 18.9295L27.502 18.2686C27.2587 18.0253 27.2587 17.6307 27.502 17.3874C27.7453 17.144 28.1399 17.144 28.3832 17.3874L29.0441 18.0483C29.2875 18.2916 29.2875 18.6862 29.0441 18.9295Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.3576 21.243C31.1143 21.4863 30.7197 21.4863 30.4764 21.243L29.8155 20.5821C29.5721 20.3387 29.5721 19.9442 29.8155 19.7009C30.0588 19.4575 30.4533 19.4575 30.6967 19.7009L31.3576 20.3618C31.6009 20.6051 31.6009 20.9996 31.3576 21.243Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M33.009 22.0141L33.5597 22.5649C33.8031 22.8082 33.8031 23.2028 33.5597 23.4461C33.3164 23.6895 32.9219 23.6895 32.6785 23.4461L32.1278 22.8953C31.8844 22.652 31.8844 22.2575 32.1278 22.0141C32.3711 21.7708 32.7656 21.7708 33.009 22.0141Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M35.3225 24.3266L35.8732 24.8774C36.1166 25.1207 36.1166 25.5153 35.8732 25.7586C35.6299 26.002 35.2354 26.002 34.992 25.7586L34.4412 25.2078C34.1979 24.9645 34.1979 24.57 34.4412 24.3266C34.6846 24.0833 35.0791 24.0833 35.3225 24.3266Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.6437 22.5266C19.9743 21.8573 19.9743 20.772 20.6437 20.1027C21.4022 19.3442 22.6632 19.4609 23.2695 20.3458L24.7964 22.5738C26.1291 22.1463 27.5433 22.2031 28.4805 23.1402C29.3229 23.9827 29.4507 25.2241 29.1652 26.4073C28.8764 27.6037 28.1461 28.8641 27.0722 29.9379C25.9984 31.0117 24.7381 31.742 23.5416 32.0308C22.3584 32.3164 21.117 32.1886 20.2745 31.3461C19.3428 30.4144 19.2815 29.0108 19.7006 27.6858L17.4629 26.1524C16.5781 25.546 16.4614 24.285 17.2199 23.5265C17.8892 22.8572 18.9745 22.8572 19.6438 23.5265L21.1943 25.077C21.3478 24.897 21.5107 24.7205 21.6828 24.5485C21.8489 24.3823 22.0193 24.2247 22.1928 24.0758L20.6437 22.5266Z", fill: "#633001" }),
        React__default['default'].createElement("ellipse", { rx: "0.749452", ry: "1.09011", transform: "matrix(0.707107 -0.707106 0.707107 0.707106 22.5742 28.153)", fill: "#DBCDF9" }),
        React__default['default'].createElement("ellipse", { cx: "25.3682", cy: "25.359", rx: "0.749453", ry: "1.09011", transform: "rotate(-45 25.3682 25.359)", fill: "#DBCDF9" }),
        React__default['default'].createElement("path", { d: "M40.2095 34.2904C40.0804 34.7825 39.3818 34.7825 39.2527 34.2904L38.5576 31.6422C38.5123 31.4695 38.3775 31.3346 38.2048 31.2893L35.5566 30.5943C35.0645 30.4651 35.0645 29.7666 35.5566 29.6374L38.2048 28.9424C38.3775 28.8971 38.5123 28.7622 38.5576 28.5895L39.2527 25.9413C39.3818 25.4492 40.0804 25.4492 40.2095 25.9413L40.9045 28.5895C40.9499 28.7622 41.0847 28.8971 41.2574 28.9424L43.9056 29.6374C44.3977 29.7666 44.3977 30.4651 43.9056 30.5943L41.2574 31.2893C41.0847 31.3346 40.9499 31.4695 40.9045 31.6422L40.2095 34.2904Z", fill: "#53DEE9" }),
        React__default['default'].createElement("path", { d: "M16.4183 7.94926C16.5088 7.60415 16.9988 7.60415 17.0893 7.94926L17.5767 9.80644C17.6085 9.92754 17.7031 10.0221 17.8242 10.0539L19.6814 10.5413C20.0265 10.6319 20.0265 11.1218 19.6814 11.2124L17.8242 11.6998C17.7031 11.7316 17.6085 11.8261 17.5767 11.9473L17.0893 13.8044C16.9988 14.1495 16.5088 14.1495 16.4183 13.8044L15.9309 11.9473C15.8991 11.8261 15.8045 11.7316 15.6834 11.6998L13.8262 11.2124C13.4811 11.1218 13.4811 10.6319 13.8262 10.5413L15.6834 10.0539C15.8045 10.0221 15.8991 9.92754 15.9309 9.80644L16.4183 7.94926Z", fill: "#53DEE9" }),
        React__default['default'].createElement("path", { d: "M10.3511 38.7118C10.2924 38.9355 9.97486 38.9355 9.91616 38.7118L9.60024 37.5081C9.57964 37.4296 9.51834 37.3683 9.43985 37.3477L8.23612 37.0318C8.01244 36.9731 8.01244 36.6555 8.23612 36.5968L9.43985 36.2809C9.51834 36.2603 9.57964 36.199 9.60024 36.1205L9.91616 34.9168C9.97486 34.6931 10.2924 34.6931 10.3511 34.9168L10.667 36.1205C10.6876 36.199 10.7489 36.2603 10.8274 36.2809L12.0311 36.5968C12.2548 36.6555 12.2548 36.9731 12.0311 37.0318L10.8274 37.3477C10.7489 37.3683 10.6876 37.4296 10.667 37.5081L10.3511 38.7118Z", fill: "#53DEE9" }),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "24", y1: "0", x2: "24", y2: "48", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#54DADE" }),
                React__default['default'].createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })))));
};

var Icon$u = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M15.5 13.9996H14.71L14.43 13.7296C15.63 12.3296 16.25 10.4196 15.91 8.38965C15.44 5.60965 13.12 3.38965 10.32 3.04965C6.09001 2.52965 2.53002 6.08965 3.05002 10.3196C3.39002 13.1196 5.61002 15.4396 8.39002 15.9096C10.42 16.2496 12.33 15.6296 13.73 14.4296L14 14.7096V15.4996L18.25 19.7496C18.66 20.1596 19.33 20.1596 19.74 19.7496C20.15 19.3396 20.15 18.6696 19.74 18.2596L15.5 13.9996ZM9.50002 13.9996C7.01002 13.9996 5.00002 11.9896 5.00002 9.49965C5.00002 7.00965 7.01002 4.99965 9.50002 4.99965C11.99 4.99965 14 7.00965 14 9.49965C14 11.9896 11.99 13.9996 9.50002 13.9996Z" })));
};

var Icon$t = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { d: "M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z" })));
};

var Icon$s = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$r = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4.47 20.9999H19.53C21.07 20.9999 22.03 19.3299 21.26 17.9999L13.73 4.98993C12.96 3.65993 11.04 3.65993 10.27 4.98993L2.74 17.9999C1.97 19.3299 2.93 20.9999 4.47 20.9999ZM12 13.9999C11.45 13.9999 11 13.5499 11 12.9999V10.9999C11 10.4499 11.45 9.99993 12 9.99993C12.55 9.99993 13 10.4499 13 10.9999V12.9999C13 13.5499 12.55 13.9999 12 13.9999ZM13 17.9999H11V15.9999H13V17.9999Z" })));
};

var Icon$q = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 15 2" }, props),
        React__default['default'].createElement("path", { xmlns: "http://www.w3.org/2000/svg", d: "M650 1446 c-97 -27 -163 -69 -252 -158 -75 -75 -88 -92 -88 -121 0 -26 -9 -42 -41 -72 -36 -35 -40 -37 -33 -15 12 36 11 92 -2 97 -6 2 -17 -18 -26 -44 l-15 -48 -10 35 c-9 30 -12 32 -18 16 -5 -11 -3 -32 3 -49 7 -20 8 -36 2 -48 -6 -10 -10 -33 -10 -52 0 -19 -9 -45 -19 -58 l-19 -24 1 54 c1 34 -2 55 -10 58 -9 3 -10 -7 -6 -34 l6 -38 -23 23 c-29 31 -37 21 -16 -22 9 -19 16 -56 16 -83 l0 -48 -19 31 c-11 18 -25 35 -31 39 -20 12 -24 -5 -8 -33 9 -15 21 -53 27 -85 6 -32 13 -62 16 -68 4 -5 -5 -9 -19 -9 -30 0 -36 -26 -8 -33 10 -3 6 -5 -10 -6 -16 0 -28 -6 -28 -12 0 -8 14 -10 40 -6 38 5 40 4 34 -19 -4 -17 -1 -26 10 -30 9 -3 16 -11 16 -17 0 -6 8 -20 18 -31 15 -18 13 -17 -16 3 -36 25 -43 12 -15 -29 16 -22 16 -23 0 -17 -27 10 -21 -19 12 -55 18 -20 39 -32 58 -34 33 -2 100 -30 110 -47 3 -6 1 -7 -6 -3 -16 10 -61 -1 -90 -23 -32 -25 -20 -44 17 -25 15 7 35 14 45 14 17 0 17 -2 3 -22 -18 -25 -21 -68 -6 -68 6 0 10 4 10 10 0 18 62 80 80 80 10 0 42 -16 71 -36 77 -51 98 -61 152 -69 41 -6 47 -10 42 -26 -9 -26 21 -25 35 1 13 25 45 32 90 21 19 -5 29 -9 23 -10 -38 -3 16 -40 80 -55 24 -6 29 -2 44 28 9 19 24 36 33 39 12 3 8 -9 -17 -45 -56 -85 -38 -94 33 -18 33 35 50 47 55 38 5 -8 -5 -20 -27 -35 -19 -13 -34 -28 -34 -33 0 -13 17 -13 25 0 3 5 15 15 26 20 18 10 19 9 13 -14 -4 -16 -2 -26 5 -26 14 0 24 42 19 85 -4 33 -2 35 32 41 113 19 227 62 273 102 15 14 17 13 17 -6 0 -11 -12 -35 -26 -52 -15 -17 -23 -34 -19 -38 8 -8 65 57 65 75 0 7 6 10 14 7 16 -6 33 15 19 25 -25 17 -21 42 12 75 29 30 39 34 68 29 28 -4 40 0 70 27 45 39 46 50 7 50 -39 0 -38 12 5 51 26 24 35 40 34 63 l-1 31 -13 -30 c-7 -16 -17 -29 -22 -28 -4 1 -16 -6 -26 -14 -21 -20 -21 -11 -2 65 20 78 7 198 -31 282 -26 59 -30 118 -10 163 6 13 5 16 -7 12 -8 -4 -20 -18 -26 -32 -12 -25 -12 -25 -30 -7 -10 11 -18 23 -17 28 0 5 -4 10 -10 13 -13 5 -34 -39 -34 -75 -1 -24 -2 -23 -15 12 -7 21 -18 43 -24 49 -17 17 -13 24 14 31 24 6 52 42 41 54 -3 3 -18 -5 -32 -19 l-26 -24 6 23 c9 27 -9 30 -32 4 -10 -10 -16 -16 -15 -13 8 14 -60 111 -112 159 -71 67 -139 105 -220 127 -70 18 -211 18 -275 1z m249 -17 c24 -5 67 -21 96 -34 54 -26 139 -94 118 -95 -7 0 10 -29 36 -64 75 -99 95 -160 96 -286 0 -128 -20 -193 -66 -209 -21 -7 -28 -7 -26 2 1 7 -6 11 -15 11 -10 -1 -18 1 -18 5 0 3 -13 12 -30 19 -27 12 -41 32 -22 32 4 0 13 4 20 9 10 6 9 16 -8 45 -18 30 -19 35 -6 30 15 -6 16 0 11 52 -4 33 -6 72 -6 87 0 15 -4 38 -9 52 -6 16 -5 25 2 27 7 3 7 12 -3 28 -7 14 -12 30 -11 36 1 6 -17 21 -40 34 -55 30 -53 27 -39 44 10 12 8 16 -8 21 -12 3 -31 3 -42 0 -15 -5 -19 -4 -15 4 9 14 13 13 -127 16 -92 2 -120 -1 -124 -11 -3 -8 -9 -11 -14 -8 -5 3 -23 3 -39 -1 -27 -6 -28 -8 -14 -22 14 -15 12 -18 -28 -37 -23 -12 -43 -28 -43 -36 0 -8 -8 -26 -18 -40 -10 -14 -13 -26 -7 -30 6 -4 6 -18 1 -38 -6 -19 -6 -34 0 -37 5 -4 5 -13 0 -23 -5 -9 -11 -41 -13 -70 -4 -42 -2 -52 8 -48 20 8 17 -7 -7 -39 -18 -22 -20 -29 -8 -36 8 -5 21 -9 29 -9 12 0 12 -2 2 -9 -8 -4 -13 -12 -13 -16 1 -5 -5 -10 -12 -11 -30 -4 -57 -16 -53 -22 2 -4 -11 -7 -30 -7 -31 0 -35 4 -54 48 -57 139 -23 324 83 457 21 26 32 47 26 51 -12 7 48 57 101 84 97 51 234 68 339 44z m-92 -150 c32 14 34 14 26 -6 -5 -13 -3 -15 13 -9 46 19 53 19 47 -4 -5 -20 -4 -21 15 -11 11 6 28 11 37 11 12 0 14 -4 5 -19 -14 -28 -13 -31 14 -31 13 0 32 -3 41 -7 15 -5 14 -8 -6 -19 -17 -10 -19 -13 -8 -14 9 0 27 -9 40 -20 21 -17 22 -19 6 -20 -17 0 -17 -2 2 -26 25 -32 27 -50 5 -58 -13 -5 -12 -9 5 -28 28 -29 27 -48 -1 -41 l-23 6 23 -25 c27 -30 28 -41 2 -33 -19 6 -19 5 -4 -32 9 -21 21 -44 26 -50 13 -16 -5 -17 -31 -3 -33 17 2 -62 37 -86 23 -16 28 -24 19 -33 -15 -15 -67 -14 -67 1 0 6 -3 8 -7 5 -3 -4 4 -18 17 -32 20 -21 21 -25 6 -25 -9 0 -26 5 -38 11 -24 13 -31 8 -22 -16 6 -15 16 -17 73 -12 36 2 75 8 86 11 11 3 5 -1 -14 -10 -35 -15 -102 -15 -178 1 l-31 7 20 34 c25 43 20 43 -26 -1 -21 -19 -48 -35 -60 -35 -13 0 -45 -7 -72 -16 -78 -24 -134 -29 -134 -10 0 12 -7 14 -31 9 -19 -4 -34 -1 -38 6 -6 9 -23 7 -70 -5 -40 -10 -67 -12 -73 -6 -9 9 60 21 152 28 19 1 58 7 85 12 l50 10 -59 1 -60 1 34 35 c19 19 28 35 21 35 -7 0 -31 -18 -53 -39 -21 -22 -53 -43 -71 -46 -32 -7 -32 -7 -9 10 31 23 28 32 -11 27 -22 -2 -38 2 -46 12 -11 13 -11 16 2 16 24 0 57 33 66 68 9 31 9 32 -15 26 -28 -7 -29 -2 -10 29 8 12 17 32 20 44 6 18 4 21 -16 15 -21 -5 -22 -4 -8 14 7 10 21 25 30 33 13 12 12 13 -12 7 -22 -5 -25 -3 -21 14 3 11 11 25 19 31 18 15 18 29 -1 29 -20 0 -19 6 6 46 19 32 20 34 2 34 -16 1 -15 3 6 20 13 11 31 20 40 20 11 1 9 4 -8 14 -20 11 -21 14 -6 19 9 4 28 7 42 7 22 0 24 3 19 26 -7 25 -5 26 23 21 24 -5 31 -3 31 9 0 16 12 16 53 -1 13 -6 16 -4 11 10 -6 15 -4 16 16 5 17 -9 29 -9 47 -1z m-452 -534 c51 -121 149 -191 285 -201 l55 -4 -80 40 c-103 51 -67 52 56 1 l94 -39 69 14 c79 17 98 13 31 -7 -25 -7 -45 -17 -45 -21 0 -12 88 -21 149 -15 32 2 72 12 90 22 19 9 30 11 26 5 -29 -46 -182 -65 -284 -34 -30 8 -90 17 -135 19 -44 2 -101 10 -126 19 -53 19 -146 81 -154 102 -3 9 -11 12 -18 8 -7 -4 -10 -3 -5 1 4 5 1 18 -7 29 -15 24 -66 161 -66 179 0 18 33 -40 65 -118z" }),
        React__default['default'].createElement("path", { xmlns: "http://www.w3.org/2000/svg", d: "M597 1046 c3 -5 -6 -7 -21 -4 -21 4 -24 3 -15 -8 6 -8 18 -14 26 -14 8 0 11 -5 8 -10 -3 -6 1 -13 10 -16 14 -6 14 -9 -2 -28 -10 -11 -11 -15 -3 -8 18 16 38 16 22 0 -22 -22 -14 -57 16 -72 16 -8 34 -22 41 -30 12 -14 10 -16 -15 -17 -28 -1 -28 -1 6 -11 37 -10 70 -34 70 -51 0 -6 9 -30 21 -54 25 -53 37 -47 69 32 21 52 35 64 95 79 11 3 3 4 -19 2 l-39 -2 29 23 c83 68 78 61 59 89 -16 25 -16 26 7 19 22 -6 22 -5 4 9 -10 9 -23 13 -27 10 -5 -3 -6 2 -2 11 3 9 9 13 12 8 10 -14 31 -14 31 1 0 7 9 16 20 19 30 8 24 25 -6 19 -15 -3 -24 -1 -21 4 3 5 -24 9 -59 9 -61 0 -63 -1 -57 -23 l6 -24 -26 26 c-33 33 -64 33 -99 -1 -19 -18 -28 -22 -28 -12 0 8 4 19 9 25 7 6 -15 9 -59 9 -37 0 -66 -4 -63 -9z m239 -41 c25 -62 12 -188 -16 -145 -6 10 -9 -4 -8 -45 1 -34 -4 -71 -11 -84 l-13 -24 -14 24 c-7 13 -14 51 -14 84 -1 36 -4 53 -9 42 -6 -17 -8 -16 -20 7 -10 17 -12 41 -7 78 9 70 28 98 67 98 25 0 32 -6 45 -35z" })));
};

var Flex = styled__default['default'].div(templateObject_1$G || (templateObject_1$G = __makeTemplateObject(["\n  display: flex;\n  ", "\n  ", "\n"], ["\n  display: flex;\n  ", "\n  ", "\n"])), styledSystem.flexbox, styledSystem.space);
var templateObject_1$G;

var variants = {
    INFO: "info",
    DANGER: "danger",
    SUCCESS: "success",
    WARNING: "warning",
};

var getThemeColor = function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants.INFO : _b;
    switch (variant) {
        case variants.DANGER:
            return theme.colors.failure;
        case variants.WARNING:
            return theme.colors.warning;
        case variants.SUCCESS:
            return theme.colors.success;
        case variants.INFO:
        default:
            return theme.colors.secondary;
    }
};
var getIcon = function (variant) {
    if (variant === void 0) { variant = variants.INFO; }
    switch (variant) {
        case variants.DANGER:
            return Icon$13;
        case variants.WARNING:
            return Icon$14;
        case variants.SUCCESS:
            return Icon$15;
        case variants.INFO:
        default:
            return Icon$12;
    }
};
var IconLabel = styled__default['default'].div(templateObject_1$F || (templateObject_1$F = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"], ["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"])), getThemeColor, function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var withHandlerSpacing = 32 + 12 + 8; // button size + inner spacing + handler position
var Details = styled__default['default'].div(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"], ["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"])), function (_a) {
    var hasHandler = _a.hasHandler;
    return (hasHandler ? withHandlerSpacing + "px" : "12px");
});
var CloseHandler = styled__default['default'].div(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"], ["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"])));
var StyledAlert = styled__default['default'](Flex)(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var Alert = function (_a) {
    var title = _a.title, children = _a.children, variant = _a.variant, onClick = _a.onClick;
    var Icon = getIcon(variant);
    return (React__default['default'].createElement(StyledAlert, null,
        React__default['default'].createElement(IconLabel, { variant: variant, hasDescription: !!children },
            React__default['default'].createElement(Icon, { color: "currentColor", width: "24px" })),
        React__default['default'].createElement(Details, { hasHandler: !!onClick },
            React__default['default'].createElement(Text, { bold: true }, title),
            typeof children === "string" ? React__default['default'].createElement(Text, { as: "p" }, children) : children),
        onClick && (React__default['default'].createElement(CloseHandler, null,
            React__default['default'].createElement(IconButton, { size: "sm", variant: "text", onClick: onClick },
                React__default['default'].createElement(Icon$N, { width: "24px", color: "currentColor" }))))));
};
var templateObject_1$F, templateObject_2$e, templateObject_3$7, templateObject_4$3;

var Separator = styled__default['default'].div(templateObject_1$E || (templateObject_1$E = __makeTemplateObject(["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"], ["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var StyledBreadcrumbs = styled__default['default'].ul(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"], ["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, styledSystem.space);
var insertSeparators = function (items, separator) {
    return items.reduce(function (accum, item, index) {
        if (index === 0) {
            return __spreadArray(__spreadArray([], accum), [item]);
        }
        return __spreadArray(__spreadArray([], accum), [
            React__default['default'].createElement(Separator, { "aria-hidden": true, key: "seperator-" + index }, separator),
            item,
        ]);
    }, []);
};
var DefaultSeparator = React__default['default'].createElement(Icon$P, { color: "currentColor", width: "24px" });
var Breadcrumbs = function (_a) {
    var _b = _a.separator, separator = _b === void 0 ? DefaultSeparator : _b, children = _a.children;
    var validItems = React.Children.toArray(children).filter(function (child) { return React.isValidElement(child); });
    var items = insertSeparators(validItems, separator);
    return (React__default['default'].createElement(StyledBreadcrumbs, null, items.map(function (item, index) { return (React__default['default'].createElement("li", { key: "child-" + index }, item)); })));
};
var templateObject_1$E, templateObject_2$d;

var getBackgroundColor = function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.colors[variant === variants$1.SUBTLE ? "input" : "tertiary"];
};
var StyledButtonMenu = styled__default['default'].div(templateObject_1$D || (templateObject_1$D = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"], ["\n  background-color: ", ";\n  border-radius: 16px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"])), getBackgroundColor);
var templateObject_1$D;

var ButtonMenu = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, _c = _a.size, size = _c === void 0 ? sizes$1.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants$1.PRIMARY : _d, onClick = _a.onClick, children = _a.children;
    return (React__default['default'].createElement(StyledButtonMenu, { variant: variant }, React.Children.map(children, function (child, index) {
        return React.cloneElement(child, {
            isActive: activeIndex === index,
            onClick: onClick ? function () { return onClick(index); } : undefined,
            size: size,
            variant: variant,
        });
    })));
};

var InactiveButton = styled__default['default'](Button)(templateObject_1$C || (templateObject_1$C = __makeTemplateObject(["\n  background-color: transparent;\n  color: ", ";\n\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"], ["\n  background-color: transparent;\n  color: ", ";\n\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"])), function (_a) {
    var theme = _a.theme, colorKey = _a.colorKey;
    return theme.colors[colorKey];
});
var ButtonMenuItem = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.size, size = _c === void 0 ? sizes$1.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants$1.PRIMARY : _d, as = _a.as, props = __rest(_a, ["isActive", "size", "variant", "as"]);
    if (!isActive) {
        return (React__default['default'].createElement(InactiveButton, __assign({ forwardedAs: as, size: size, variant: "tertiary", colorKey: variant === variants$1.PRIMARY ? "primary" : "textSubtle" }, props)));
    }
    return React__default['default'].createElement(Button, __assign({ as: as, size: size, variant: variant }, props));
};
var templateObject_1$C;

/**
 * Priority: Warning --> Success --> Active
 */
var getBoxShadow$1 = function (_a) {
    var isActive = _a.isActive, isSuccess = _a.isSuccess, isWarning = _a.isWarning, theme = _a.theme;
    if (isWarning) {
        return theme.card.boxShadowWarning;
    }
    if (isSuccess) {
        return theme.card.boxShadowSuccess;
    }
    if (isActive) {
        return theme.card.boxShadowActive;
    }
    return theme.card.boxShadow;
};
var StyledCard = styled__default['default'].div(templateObject_1$B || (templateObject_1$B = __makeTemplateObject(["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"], ["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.card.boxShadow;
}, getBoxShadow$1, function (_a) {
    var theme = _a.theme, isDisabled = _a.isDisabled;
    return theme.colors[isDisabled ? "textDisabled" : "text"];
}, styledSystem.space);
StyledCard.defaultProps = {
    isActive: false,
    isSuccess: false,
    isWarning: false,
    isDisabled: false,
};
var templateObject_1$B;

var Card = function (_a) {
    var ribbon = _a.ribbon, children = _a.children, props = __rest(_a, ["ribbon", "children"]);
    return (React__default['default'].createElement(StyledCard, __assign({}, props),
        ribbon,
        children));
};

var CardBody = styled__default['default'].div(templateObject_1$A || (templateObject_1$A = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), styledSystem.space);
CardBody.defaultProps = {
    p: "24px",
};
var templateObject_1$A;

var CardHeader = styled__default['default'].div(templateObject_1$z || (templateObject_1$z = __makeTemplateObject(["\n  background: ", ";\n\n  ", "\n"], ["\n  background: ", ";\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.cardHeaderBackground;
}, styledSystem.space);
CardHeader.defaultProps = {
    p: "24px",
};
var templateObject_1$z;

var CardFooter = styled__default['default'].div(templateObject_1$y || (templateObject_1$y = __makeTemplateObject(["\n  border-top: 1px solid ", ";\n  ", "\n"], ["\n  border-top: 1px solid ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, styledSystem.space);
CardFooter.defaultProps = {
    p: "24px",
};
var templateObject_1$y;

var StyledCardRibbon = styled__default['default'].div(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"], ["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"])), function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
}, function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
});
var CardRibbon = function (_a) {
    var variantColor = _a.variantColor, text = _a.text;
    return (React__default['default'].createElement(StyledCardRibbon, { variantColor: variantColor },
        React__default['default'].createElement("div", { title: text }, text)));
};
var templateObject_1$x;

var scales$2 = {
    SM: "sm",
    MD: "md",
};

var getScale$1 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "24px";
        case scales$2.MD:
        default:
            return "32px";
    }
};
var Checkbox = styled__default['default'].input.attrs({ type: "checkbox" })(templateObject_1$w || (templateObject_1$w = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"])), getScale$1, getScale$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
});
Checkbox.defaultProps = {
    scale: scales$2.MD,
};
var templateObject_1$w;

var getLeft = function (_a) {
    var position = _a.position;
    if (position === "top-right") {
        return "100%";
    }
    return "50%";
};
var getBottom = function (_a) {
    var position = _a.position;
    if (position === "top" || position === "top-right") {
        return "100%";
    }
    return "auto";
};
var DropdownContent = styled__default['default'].div(templateObject_1$v || (templateObject_1$v = __makeTemplateObject(["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"], ["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"])), getLeft, getBottom, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.level1;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.dropdown;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.small;
});
var Container$4 = styled__default['default'].div(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"], ["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"])), DropdownContent, DropdownContent);
var Dropdown = function (_a) {
    var target = _a.target, _b = _a.position, position = _b === void 0 ? "bottom" : _b, children = _a.children;
    return (React__default['default'].createElement(Container$4, null,
        target,
        React__default['default'].createElement(DropdownContent, { position: position }, children)));
};
Dropdown.defaultProps = {
    position: "bottom",
};
var templateObject_1$v, templateObject_2$c;

var tags = {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6",
};
var sizes = {
    MD: "md",
    LG: "lg",
    XL: "xl",
    XXL: "xxl",
};

var _a$2;
var style = (_a$2 = {},
    _a$2[sizes.MD] = {
        fontSize: "20px",
    },
    _a$2[sizes.LG] = {
        fontSize: "24px",
    },
    _a$2[sizes.XL] = {
        fontSize: "40px",
    },
    _a$2[sizes.XXL] = {
        fontSize: "64px",
    },
    _a$2);
var Heading = styled__default['default'](Text).attrs({ bold: true })(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n  ", "\n  font-weight:600;\n  line-height: 1.1;\n"], ["\n  ", "\n  font-weight:600;\n  line-height: 1.1;\n"])), function (_a) {
    var size = _a.size;
    return style[size || sizes.MD];
});
Heading.defaultProps = {
    as: tags.H2,
};
var templateObject_1$u;

var observerOptions = {
    root: null,
    rootMargin: "200px",
    threshold: 0,
};

var Wrapper$1 = styled__default['default'].div(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"], ["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"])), function (_a) {
    var height = _a.height, responsive = _a.responsive;
    return (responsive ? 0 : height);
}, function (_a) {
    var width = _a.width;
    return width;
}, function (_a) {
    var height = _a.height;
    return height;
}, function (_a) {
    var width = _a.width, height = _a.height, responsive = _a.responsive;
    return (responsive ? (height / width) * 100 : 0);
}, styledSystem.space);
var templateObject_1$t;

var BackgroundImage = function (_a) {
    var src = _a.src, otherProps = __rest(_a, ["src"]);
    var imgRef = React.useRef(null);
    React.useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    img.style.backgroundImage = "url(\"" + src + "\")";
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return React__default['default'].createElement(Wrapper$1, __assign({ ref: imgRef }, otherProps));
};

var StyledImage = styled__default['default'].img(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"])));
var Placeholder = styled__default['default'].div(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"])));
var Image = function (_a) {
    var src = _a.src, alt = _a.alt, otherProps = __rest(_a, ["src", "alt"]);
    var imgRef = React.useRef(null);
    var _b = React.useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    React.useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    setIsLoaded(true);
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return (React__default['default'].createElement(Wrapper$1, __assign({ ref: imgRef }, otherProps), isLoaded ? React__default['default'].createElement(StyledImage, { src: src, alt: alt }) : React__default['default'].createElement(Placeholder, null)));
};
var templateObject_1$s, templateObject_2$b;

var scales$1 = {
    SM: "sm",
    MD: "md",
    LG: "lg",
};

/**
 * Priority: Warning --> Success
 */
var getBoxShadow = function (_a) {
    var _b = _a.isSuccess, isSuccess = _b === void 0 ? false : _b, _c = _a.isWarning, isWarning = _c === void 0 ? false : _c, theme = _a.theme;
    if (isWarning) {
        return theme.shadows.warning;
    }
    if (isSuccess) {
        return theme.shadows.success;
    }
    return theme.shadows.inset;
};
var getHeight = function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$1.MD : _b;
    switch (scale) {
        case scales$1.SM:
            return "32px";
        case scales$1.LG:
            return "48px";
        case scales$1.MD:
        default:
            return "40px";
    }
};
var Input$1 = styled__default['default'].input(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"], ["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, getBoxShadow, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, getHeight, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
Input$1.defaultProps = {
    scale: scales$1.MD,
    isSuccess: false,
    isWarning: false,
};
var templateObject_1$r;

var GridLayout$1 = styled__default['default'].div(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var templateObject_1$q;

var GridLayout = styled__default['default'](GridLayout$1)(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"], ["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var templateObject_1$p;

var scales = {
    SM: "sm",
    MD: "md",
};

var getScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales.SM:
            return "24px";
        case scales.MD:
        default:
            return "32px";
    }
};
var getCheckedScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales.SM:
            return "12px";
        case scales.MD:
        default:
            return "20px";
    }
};
var Radio = styled__default['default'].input.attrs({ type: "radio" })(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"])), getScale, getScale, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getCheckedScale, getCheckedScale, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
}, function (_a) {
    var theme = _a.theme;
    return theme.radio.handleBackground;
}, styledSystem.space);
Radio.defaultProps = {
    scale: scales.MD,
    m: 0,
};
var templateObject_1$o;

var getColor = function (color, theme) {
    return getThemeValue("colors." + color, color)(theme);
};

var getThemeTextColor = function (_a) {
    var outline = _a.outline, _b = _a.variant, variant = _b === void 0 ? "primary" : _b, theme = _a.theme;
    return outline ? getColor(variant, theme) : "#ffffff";
};
var StyledTag = styled__default['default'].div(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border: 2px solid ", ";\n  border-radius: 16px;\n  color: ", ";\n  display: inline-flex;\n  font-size: 14px;\n  font-weight: 400;\n  height: 28px;\n  line-height: 1.5;\n  padding: 0 8px;\n  white-space: nowrap;\n\n  svg {\n    fill: ", ";\n  }\n"], ["\n  align-items: center;\n  background-color: ",
    ";\n  border: 2px solid ", ";\n  border-radius: 16px;\n  color: ", ";\n  display: inline-flex;\n  font-size: 14px;\n  font-weight: 400;\n  height: 28px;\n  line-height: 1.5;\n  padding: 0 8px;\n  white-space: nowrap;\n\n  svg {\n    fill: ", ";\n  }\n"])), function (_a) {
    var outline = _a.outline, theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? "primary" : _b;
    return outline ? "transparent" : getColor(variant, theme);
}, function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? "primary" : _b, theme = _a.theme;
    return getColor(variant, theme);
}, getThemeTextColor, getThemeTextColor);
var templateObject_1$n;

var Tag = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, props = __rest(_a, ["startIcon", "endIcon", "children"]);
    return (React__default['default'].createElement(StyledTag, __assign({}, props),
        React__default['default'].isValidElement(startIcon) &&
            React__default['default'].cloneElement(startIcon, {
                mr: "0.5rem",
            }),
        children,
        React__default['default'].isValidElement(endIcon) &&
            React__default['default'].cloneElement(endIcon, {
                ml: "0.5rem",
            })));
};
Tag.defaultProps = {
    variant: "primary",
    outline: false,
};

var StyledLink$1 = styled__default['default'](Text)(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"])));
var Link = function (_a) {
    var external = _a.external, props = __rest(_a, ["external"]);
    var internalProps = external ? getExternalLinkProps() : {};
    return React__default['default'].createElement(StyledLink$1, __assign({ as: "a", bold: true }, internalProps, props));
};
Link.defaultProps = {
    color: "primary",
};
var templateObject_1$m;

var LinkExternal = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React__default['default'].createElement(Link, __assign({ external: true }, props),
        children,
        React__default['default'].createElement(Icon$E, { color: "primary", ml: "4px" })));
};

var Bar = styled__default['default'].div(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  border-top-left-radius: 32px;\n  border-bottom-left-radius: 32px;\n  height: 16px;\n  transition: width 200ms ease;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  border-top-left-radius: 32px;\n  border-bottom-left-radius: 32px;\n  height: 16px;\n  transition: width 200ms ease;\n"])), function (props) { return (props.primary ? props.theme.colors.secondary : props.theme.colors.secondary + "80"); });
Bar.defaultProps = {
    primary: false,
};
var StyledProgress = styled__default['default'].div(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
});
var templateObject_1$l, templateObject_2$a;

var ProgressBunnyWrapper = styled__default['default'].div(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"], ["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"])));
var templateObject_1$k;

var stepGuard = function (step) {
    if (step < 0) {
        return 0;
    }
    if (step > 100) {
        return 100;
    }
    return step;
};
var Progress = function (_a) {
    var _b = _a.primaryStep, primaryStep = _b === void 0 ? 0 : _b, _c = _a.secondaryStep, secondaryStep = _c === void 0 ? null : _c, _d = _a.showProgressBunny, showProgressBunny = _d === void 0 ? false : _d;
    return (React__default['default'].createElement(StyledProgress, null,
        showProgressBunny && (React__default['default'].createElement(ProgressBunnyWrapper, { style: { left: stepGuard(primaryStep) + "%" } },
            React__default['default'].createElement(Icon$y, null))),
        React__default['default'].createElement(Bar, { primary: true, style: { width: stepGuard(primaryStep) + "%" } }),
        secondaryStep ? React__default['default'].createElement(Bar, { style: { width: stepGuard(secondaryStep) + "%" } }) : null));
};

var rotate = styled.keyframes(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var SpinnerIcon = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("image", { width: "96", height: "96", href: "images/egg/9.png" })));
};
var Container$3 = styled__default['default'].div(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var RotatingPancakeIcon = styled__default['default'](SpinnerIcon)(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"])), rotate);
var Spinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 128 : _b;
    return (React__default['default'].createElement(Container$3, null,
        React__default['default'].createElement(RotatingPancakeIcon, { width: size * 0.5 + "px" })));
};
var templateObject_1$j, templateObject_2$9, templateObject_3$6;

var animation = {
    WAVES: "waves",
    PULSE: "pulse",
};
var variant = {
    RECT: "rect",
    CIRCLE: "circle",
};

var waves = styled.keyframes(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"], ["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"])));
var pulse = styled.keyframes(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"])));
var Root = styled__default['default'].div(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"], ["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var variant$1 = _a.variant, theme = _a.theme;
    return (variant$1 === variant.CIRCLE ? theme.radii.circle : theme.radii.small);
}, styledSystem.layout, styledSystem.space);
var Pulse = styled__default['default'](Root)(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"])), pulse);
var Waves = styled__default['default'](Root)(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"], ["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"])), waves);
var Skeleton = function (_a) {
    var _b = _a.variant, variant$1 = _b === void 0 ? variant.RECT : _b, _c = _a.animation, animation$1 = _c === void 0 ? animation.PULSE : _c, props = __rest(_a, ["variant", "animation"]);
    if (animation$1 === animation.WAVES) {
        return React__default['default'].createElement(Waves, __assign({ variant: variant$1 }, props));
    }
    return React__default['default'].createElement(Pulse, __assign({ variant: variant$1 }, props));
};
var templateObject_1$i, templateObject_2$8, templateObject_3$5, templateObject_4$2, templateObject_5$1;

var Handle = styled__default['default'].div(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: 32px;\n  left: 4px;\n  position: absolute;\n  top: 4px;\n  transition: left 200ms ease-in;\n  width: 32px;\n  z-index: 1;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: 32px;\n  left: 4px;\n  position: absolute;\n  top: 4px;\n  transition: left 200ms ease-in;\n  width: 32px;\n  z-index: 1;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.toggle.handleBackground;
});
var Input = styled__default['default'].input(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: calc(100% - 36px);\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"], ["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: calc(100% - 36px);\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"])), Handle, Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
var StyledToggle = styled__default['default'].div(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: 40px;\n  position: relative;\n  transition: background-color 200ms;\n  width: 72px;\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: 40px;\n  position: relative;\n  transition: background-color 200ms;\n  width: 72px;\n"])), function (_a) {
    var theme = _a.theme, checked = _a.checked;
    return theme.colors[checked ? "success" : "input"];
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
});
var templateObject_1$h, templateObject_2$7, templateObject_3$4;

var Toggle = function (_a) {
    var checked = _a.checked, props = __rest(_a, ["checked"]);
    var isChecked = !!checked;
    return (React__default['default'].createElement(StyledToggle, { checked: isChecked },
        React__default['default'].createElement(Input, __assign({ checked: checked }, props, { type: "checkbox" })),
        React__default['default'].createElement(Handle, null)));
};

var byTextAscending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA < upperB) {
        return -1;
    }
    if (upperA > upperB) {
        return 1;
    }
    return 0;
}; };
var byTextDescending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA > upperB) {
        return -1;
    }
    if (upperA < upperB) {
        return 1;
    }
    return 0;
}; };

var sortByColumn = function (data, sortColumn, columns) {
    var isAscending = null;
    var sortedRows = __spreadArray([], data);
    columns.forEach(function (column) {
        // if the row was found
        if (sortColumn === column.name) {
            isAscending = column.sorted.asc;
            if (column.sort) {
                sortedRows = isAscending ? data.sort(column.sort) : data.sort(column.sort).reverse();
                // default to sort by string
            }
            else {
                sortedRows = isAscending
                    ? data.sort(byTextAscending(function (object) { return object.original[sortColumn]; }))
                    : data.sort(byTextDescending(function (object) { return object.original[sortColumn]; }));
            }
        }
    });
    return sortedRows;
};
var getPaginatedData = function (rows, perPage, page) {
    var start = (page - 1) * perPage;
    var end = start + perPage;
    return rows.slice(start, end);
};
var getColumnsByName = function (columns) {
    var columnsByName = {};
    columns.forEach(function (column) {
        var col = {
            name: column.name,
            label: column.label,
        };
        if (column.render) {
            col.render = column.render;
        }
        col.hidden = column.hidden;
        columnsByName[column.name] = col;
    });
    return columnsByName;
};
var createReducer = function () { return function (state, action) {
    var rows = [];
    var nextPage = 0;
    var prevPage = 0;
    var isAscending = null;
    var sortedRows = [];
    var columnCopy = [];
    var filteredRows = [];
    var selectedRowsById = {};
    var stateCopy = __assign({}, state);
    var rowIds = {};
    switch (action.type) {
        case "SET_ROWS":
            rows = __spreadArray([], action.data);
            // preserve sorting if a sort is already enabled when data changes
            if (state.sortColumn) {
                rows = sortByColumn(action.data, state.sortColumn, state.columns);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            return __assign(__assign({}, state), { rows: rows, originalRows: action.data });
        case "NEXT_PAGE":
            nextPage = state.pagination.page + 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, nextPage), pagination: __assign(__assign({}, state.pagination), { page: nextPage, canNext: nextPage * state.pagination.perPage < state.originalRows.length, canPrev: nextPage !== 1 }) });
        case "PREV_PAGE":
            prevPage = state.pagination.page === 1 ? 1 : state.pagination.page - 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, prevPage), pagination: __assign(__assign({}, state.pagination), { page: prevPage, canNext: prevPage * state.pagination.perPage < state.originalRows.length, canPrev: prevPage !== 1 }) });
        case "TOGGLE_SORT":
            if (!(action.columnName in state.columnsByName)) {
                throw new Error("Invalid column, " + action.columnName + " not found");
            }
            // loop through all columns and set the sort parameter to off unless
            // it's the specified column (only one column at a time for )
            columnCopy = state.columns.map(function (column) {
                // if the row was found
                if (action.columnName === column.name) {
                    if (action.isAscOverride !== undefined) {
                        // force the sort order
                        isAscending = action.isAscOverride;
                    }
                    else {
                        // if it's undefined, start by setting to ascending, otherwise toggle
                        isAscending = column.sorted.asc === undefined ? true : !column.sorted.asc;
                    }
                    if (column.sort) {
                        sortedRows = isAscending ? state.rows.sort(column.sort) : state.rows.sort(column.sort).reverse();
                        // default to sort by string
                    }
                    else {
                        sortedRows = isAscending
                            ? state.rows.sort(byTextAscending(function (object) { return object.original[action.columnName]; }))
                            : state.rows.sort(byTextDescending(function (object) { return object.original[action.columnName]; }));
                    }
                    return __assign(__assign({}, column), { sorted: {
                            on: true,
                            asc: isAscending,
                        } });
                }
                // set sorting to false for all other columns
                return __assign(__assign({}, column), { sorted: {
                        on: false,
                        asc: false,
                    } });
            });
            return __assign(__assign({}, state), { columns: columnCopy, rows: sortedRows, sortColumn: action.columnName, columnsByName: getColumnsByName(columnCopy) });
        case "GLOBAL_FILTER":
            filteredRows = action.filter(state.originalRows);
            selectedRowsById = {};
            state.selectedRows.forEach(function (row) {
                var _a;
                selectedRowsById[row.id] = (_a = row.selected) !== null && _a !== void 0 ? _a : false;
            });
            return __assign(__assign({}, state), { rows: filteredRows.map(function (row) {
                    return selectedRowsById[row.id] ? __assign(__assign({}, row), { selected: selectedRowsById[row.id] }) : __assign({}, row);
                }), filterOn: true });
        case "SELECT_ROW":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.rows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected === true; });
            stateCopy.toggleAllState =
                stateCopy.selectedRows.length === stateCopy.rows.length
                    ? (stateCopy.toggleAllState = true)
                    : (stateCopy.toggleAllState = false);
            return stateCopy;
        case "SEARCH_STRING":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.originalRows.filter(function (row) {
                return (row.cells.filter(function (cell) {
                    if (cell.value.includes(action.searchString)) {
                        return true;
                    }
                    return false;
                }).length > 0);
            });
            return stateCopy;
        case "TOGGLE_ALL":
            if (state.selectedRows.length < state.rows.length) {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = true;
                    return __assign(__assign({}, row), { selected: true });
                });
                stateCopy.toggleAllState = true;
            }
            else {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = false;
                    return __assign(__assign({}, row), { selected: false });
                });
                stateCopy.toggleAllState = false;
            }
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                return row.id in rowIds ? __assign(__assign({}, row), { selected: rowIds[row.id] }) : __assign({}, row);
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected; });
            return stateCopy;
        default:
            throw new Error("Invalid reducer action");
    }
}; };
var sortDataInOrder = function (data, columns) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.map(function (row) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var newRow = {};
        columns.forEach(function (column) {
            if (!(column.name in row)) {
                throw new Error("Invalid row data, " + column.name + " not found");
            }
            newRow[column.name] = row[column.name];
        });
        return newRow;
    });
};
var makeRender = function (
// eslint-disable-next-line
value, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
render, row) {
    return render ? function () { return render({ row: row, value: value }); } : function () { return value; };
};
var makeHeaderRender = function (label, render) {
    return render ? function () { return render({ label: label }); } : function () { return label; };
};
var useTable = function (columns, data, options) {
    var columnsWithSorting = React.useMemo(function () {
        return columns.map(function (column) {
            return __assign(__assign({}, column), { label: column.label ? column.label : column.name, hidden: column.hidden ? column.hidden : false, sort: column.sort, sorted: {
                    on: false,
                } });
        });
    }, [columns]);
    var columnsByName = React.useMemo(function () { return getColumnsByName(columnsWithSorting); }, [columnsWithSorting]);
    var tableData = React.useMemo(function () {
        var sortedData = sortDataInOrder(data, columnsWithSorting);
        var newData = sortedData.map(function (row, idx) {
            return {
                id: idx,
                selected: false,
                hidden: false,
                original: row,
                cells: Object.entries(row)
                    .map(function (_a) {
                    var column = _a[0], value = _a[1];
                    return {
                        hidden: columnsByName[column].hidden,
                        field: column,
                        value: value,
                        render: makeRender(value, columnsByName[column].render, row),
                    };
                })
                    .filter(function (cell) { return !cell.hidden; }),
            };
        });
        return newData;
    }, [data, columnsWithSorting, columnsByName]);
    var reducer = createReducer();
    var _a = React.useReducer(reducer, {
        columns: columnsWithSorting,
        columnsByName: columnsByName,
        originalRows: tableData,
        rows: tableData,
        selectedRows: [],
        toggleAllState: false,
        filterOn: !!(options === null || options === void 0 ? void 0 : options.filter),
        sortColumn: null,
        paginationEnabled: !!(options === null || options === void 0 ? void 0 : options.pagination),
        pagination: {
            page: 1,
            perPage: 10,
            canNext: true,
            canPrev: false,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            nextPage: noop__default['default'],
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            prevPage: noop__default['default'],
        },
    }), state = _a[0], dispatch = _a[1];
    state.pagination.nextPage = React.useCallback(function () {
        dispatch({ type: "NEXT_PAGE" });
    }, [dispatch]);
    state.pagination.prevPage = React.useCallback(function () { return dispatch({ type: "PREV_PAGE" }); }, [dispatch]);
    React.useEffect(function () {
        dispatch({ type: "SET_ROWS", data: tableData });
    }, [tableData]);
    var headers = React.useMemo(function () {
        return __spreadArray([], state.columns.map(function (column) {
            var label = column.label ? column.label : column.name;
            return __assign(__assign({}, column), { render: makeHeaderRender(label, column.headerRender) });
        }));
    }, [state.columns]);
    React.useEffect(function () {
        if (options && options.filter) {
            dispatch({ type: "GLOBAL_FILTER", filter: options.filter });
        }
    });
    return {
        headers: headers.filter(function (column) { return !column.hidden; }),
        rows: state.rows,
        originalRows: state.originalRows,
        selectedRows: state.selectedRows,
        dispatch: dispatch,
        selectRow: function (rowId) { return dispatch({ type: "SELECT_ROW", rowId: rowId }); },
        toggleAll: function () { return dispatch({ type: "TOGGLE_ALL" }); },
        toggleSort: function (columnName, isAscOverride) {
            return dispatch({ type: "TOGGLE_SORT", columnName: columnName, isAscOverride: isAscOverride });
        },
        setSearchString: function (searchString) { return dispatch({ type: "SEARCH_STRING", searchString: searchString }); },
        pagination: state.pagination,
        toggleAllState: state.toggleAllState,
    };
};

var breakpointMap = {
    xs: 370,
    sm: 576,
    md: 852,
    lg: 968,
    xl: 1080,
};
var breakpoints = Object.values(breakpointMap).map(function (breakpoint) { return breakpoint + "px"; });
var mediaQueries$1 = {
    xs: "@media screen and (min-width: " + breakpointMap.xs + "px)",
    sm: "@media screen and (min-width: " + breakpointMap.sm + "px)",
    md: "@media screen and (min-width: " + breakpointMap.md + "px)",
    lg: "@media screen and (min-width: " + breakpointMap.lg + "px)",
    xl: "@media screen and (min-width: " + breakpointMap.xl + "px)",
    nav: "@media screen and (min-width: " + breakpointMap.lg + "px)",
};
var shadows = {
    level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    active: "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)",
    success: "0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)",
    warning: "0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)",
    focus: "0px 0px 0px 1px #7645D9, 0px 0px 0px 4px rgba(118, 69, 217, 0.6)",
    inset: "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)",
};
var spacing = [0, 4, 8, 16, 24, 32, 48, 64];
var radii = {
    small: "4px",
    default: "16px",
    card: "32px",
    circle: "50%",
};
var zIndices = {
    dropdown: 10,
    modal: 100,
};
var base = {
    siteWidth: 1200,
    breakpoints: breakpoints,
    mediaQueries: mediaQueries$1,
    spacing: spacing,
    shadows: shadows,
    radii: radii,
    zIndices: zIndices,
};

/**
 * Can't use the media queries from "base.mediaQueries" because of how matchMedia works
 * In order for the listener to trigger we need have have the media query with a range, e.g.
 * (min-width: 370px) and (max-width: 576px)
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 */
var mediaQueries = (function () {
    var prevMinWidth = 0;
    return Object.keys(breakpointMap).reduce(function (accum, size, index) {
        var _a, _b;
        // Largest size is just a min-width of second highest max-width
        if (index === Object.keys(breakpointMap).length - 1) {
            return __assign(__assign({}, accum), (_a = {}, _a[size] = "(min-width: " + prevMinWidth + "px)", _a));
        }
        var minWidth = prevMinWidth;
        var breakpoint = breakpointMap[size];
        // Min width for next iteration
        prevMinWidth = breakpoint + 1;
        return __assign(__assign({}, accum), (_b = {}, _b[size] = "(min-width: " + minWidth + "px) and (max-width: " + breakpoint + "px)", _b));
    }, {});
})();
var getKey = function (size) { return "is" + size.charAt(0).toUpperCase() + size.slice(1); };
var useMatchBreakpoints = function () {
    var _a = React.useState(function () {
        return Object.keys(mediaQueries).reduce(function (accum, size) {
            var _a;
            var key = getKey(size);
            var mql = window.matchMedia(mediaQueries[size]);
            return __assign(__assign({}, accum), (_a = {}, _a[key] = mql.matches, _a));
        }, {});
    }), state = _a[0], setState = _a[1];
    React.useEffect(function () {
        // Create listeners for each media query returning a function to unsubscribe
        var handlers = Object.keys(mediaQueries).map(function (size) {
            var mql = window.matchMedia(mediaQueries[size]);
            var handler = function (matchMediaQuery) {
                var key = getKey(size);
                setState(function (prevState) {
                    var _a;
                    return (__assign(__assign({}, prevState), (_a = {}, _a[key] = matchMediaQuery.matches, _a)));
                });
            };
            // Safari < 14 fix
            if (mql.addEventListener) {
                mql.addEventListener("change", handler);
            }
            return function () {
                // Safari < 14 fix
                if (mql.removeEventListener) {
                    mql.removeEventListener("change", handler);
                }
            };
        });
        return function () {
            handlers.forEach(function (unsubscribe) {
                unsubscribe();
            });
        };
    }, [setState]);
    return state;
};

var defaultParticleOptions = {
    size: 30,
    distance: 500,
};
var createParticle = function (x, y, imgSrc, options) {
    if (options === void 0) { options = {}; }
    var _a = __assign(__assign({}, defaultParticleOptions), options), size = _a.size, distance = _a.distance;
    var particle = document.createElement("particle");
    document.body.appendChild(particle);
    var width = Math.floor(Math.random() * size + 8);
    var height = width;
    var destinationX = (Math.random() - 0.5) * distance;
    var destinationY = (Math.random() - 0.5) * distance;
    var rotation = Math.random() * 520;
    var delay = Math.random() * 200;
    particle.style.backgroundRepeat = "no-repeat";
    particle.style.backgroundSize = "contain";
    particle.style.backgroundImage = "url(" + imgSrc + ")";
    particle.style.left = "0";
    particle.style.top = "0";
    particle.style.opacity = "0";
    particle.style.pointerEvents = "none";
    particle.style.position = "fixed";
    particle.style.width = width + "px";
    particle.style.height = height + "px";
    var animation = particle.animate([
        {
            transform: "translate(-50%, -50%) translate(" + x + "px, " + y + "px) rotate(0deg)",
            opacity: 1,
        },
        {
            transform: "translate(-50%, -50%) translate(" + (x + destinationX) + "px, " + (y + destinationY) + "px) rotate(" + rotation + "deg)",
            opacity: 0,
        },
    ], {
        duration: Math.random() * 1000 + 5000,
        easing: "cubic-bezier(0, .9, .57, 1)",
        delay: delay,
    });
    animation.onfinish = function () {
        particle.remove();
    };
};
var defaultOptions = {
    numberOfParticles: 30,
    debounceDuration: 200,
    particleOptions: {},
};
/**
 * @see https://css-tricks.com/playing-with-particles-using-the-web-animations-api/
 */
var useParticleBurst = function (options) {
    var _a = __assign(__assign({}, defaultOptions), options), selector = _a.selector, numberOfParticles = _a.numberOfParticles, debounceDuration = _a.debounceDuration, imgSrc = _a.imgSrc, disableWhen = _a.disableWhen, particleOptions = _a.particleOptions;
    var makeListener = React.useCallback(function () {
        return debounce__default['default'](function (event) {
            var isDisabled = disableWhen && disableWhen();
            if (!isDisabled) {
                var node = event.currentTarget;
                if (event.clientX === 0 && event.clientY === 0) {
                    var _a = node.getBoundingClientRect(), left = _a.left, width = _a.width, top_1 = _a.top, height = _a.height;
                    var x = left + width / 2;
                    var y = top_1 + height / 2;
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(x, y, imgSrc, particleOptions);
                    }
                }
                else {
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(event.clientX, event.clientY + window.scrollY, imgSrc, particleOptions);
                    }
                }
            }
        }, debounceDuration, { leading: true });
    }, [debounceDuration, numberOfParticles, imgSrc, disableWhen, particleOptions]);
    var listener = makeListener();
    var initialize = React.useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.addEventListener("click", listener);
            });
        }
        else {
            document.addEventListener("click", listener);
        }
    }, [selector, listener]);
    var teardown = React.useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.removeEventListener("click", listener);
            });
        }
        else {
            document.removeEventListener("click", listener);
        }
    }, [selector, listener]);
    React.useEffect(function () {
        initialize();
        return function () { return teardown(); };
    }, [initialize, teardown]);
    return { initialize: initialize, teardown: teardown };
};

var StyledModal = styled__default['default'].div(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"], ["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.modal.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xs;
});
var ModalHeader = styled__default['default'].div(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e9eaeb;\n  align-items: center;\n  padding: 12px 24px;\n"], ["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e9eaeb;\n  align-items: center;\n  padding: 12px 24px;\n"])));
var ModalTitle = styled__default['default'](Flex)(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  align-items: center;\n  flex: 1;\n"], ["\n  align-items: center;\n  flex: 1;\n"])));
var Modal = function (_a) {
    var title = _a.title, onDismiss = _a.onDismiss, onBack = _a.onBack, children = _a.children, _b = _a.hideCloseButton, hideCloseButton = _b === void 0 ? false : _b, _c = _a.bodyPadding, bodyPadding = _c === void 0 ? "24px" : _c;
    return (React__default['default'].createElement(StyledModal, null,
        React__default['default'].createElement(ModalHeader, null,
            React__default['default'].createElement(ModalTitle, null,
                onBack && (React__default['default'].createElement(IconButton, { variant: "text", onClick: onBack, "area-label": "go back", mr: "8px" },
                    React__default['default'].createElement(Icon$10, { color: "primary" }))),
                React__default['default'].createElement(Heading, null, title)),
            !hideCloseButton && (React__default['default'].createElement(IconButton, { variant: "text", onClick: onDismiss, "aria-label": "Close the dialog" },
                React__default['default'].createElement(Icon$N, { color: "primary" })))),
        React__default['default'].createElement(Flex, { flexDirection: "column", p: bodyPadding }, children)));
};
var templateObject_1$g, templateObject_2$6, templateObject_3$3;

var Overlay = styled__default['default'].div.attrs({ role: "presentation" })(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #452a7a;\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"], ["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #452a7a;\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"])), function (_a) {
    var show = _a.show;
    return (show ? 0.6 : 0);
}, function (_a) {
    var zIndex = _a.zIndex;
    return zIndex;
}, function (_a) {
    var show = _a.show;
    return (show ? "initial" : "none");
});
Overlay.defaultProps = {
    show: false,
    zIndex: 10,
};
var templateObject_1$f;

var ModalWrapper = styled__default['default'].div(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal - 1;
});
var Context = React.createContext({
    onPresent: function () { return null; },
    onDismiss: function () { return null; },
    setCloseOnOverlayClick: function () { return true; },
});
var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = React.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = React.useState(), modalNode = _c[0], setModalNode = _c[1];
    var _d = React.useState(true), closeOnOverlayClick = _d[0], setCloseOnOverlayClick = _d[1];
    var handlePresent = function (node) {
        setModalNode(node);
        setIsOpen(true);
    };
    var handleDismiss = function () {
        setModalNode(undefined);
        setIsOpen(false);
    };
    var handleOverlayDismiss = function () {
        if (closeOnOverlayClick) {
            handleDismiss();
        }
    };
    return (React__default['default'].createElement(Context.Provider, { value: {
            onPresent: handlePresent,
            onDismiss: handleDismiss,
            setCloseOnOverlayClick: setCloseOnOverlayClick,
        } },
        isOpen && (React__default['default'].createElement(ModalWrapper, null,
            React__default['default'].createElement(Overlay, { show: true, onClick: handleOverlayDismiss }),
            React__default['default'].isValidElement(modalNode) &&
                React__default['default'].cloneElement(modalNode, {
                    onDismiss: handleDismiss,
                }))),
        children));
};
var templateObject_1$e;

var useModal = function (modal, closeOnOverlayClick) {
    if (closeOnOverlayClick === void 0) { closeOnOverlayClick = true; }
    var _a = React.useContext(Context), onPresent = _a.onPresent, onDismiss = _a.onDismiss, setCloseOnOverlayClick = _a.setCloseOnOverlayClick;
    var onPresentCallback = React.useCallback(function () {
        onPresent(modal);
    }, [modal, onPresent]);
    React.useEffect(function () {
        setCloseOnOverlayClick(closeOnOverlayClick);
    }, [closeOnOverlayClick, setCloseOnOverlayClick]);
    return [onPresentCallback, onDismiss];
};

var Icon$p = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M13.7803 2.71967C14.0732 3.01256 14.0732 3.48744 13.7803 3.78033L12.8107 4.75L14.0307 5.96999H20C21.1 5.96999 22 6.86999 22 7.96999V12.73C21.28 12.25 20.43 11.97 19.5 11.97C17.19 11.97 15.3 13.73 15.05 15.97H11.91C11.96 15.64 12 15.31 12 14.97C12 13.43 11.41 12.03 10.46 10.97H11C12.1 10.97 13 10.07 13 8.96999V7.06068L11.75 5.81066L10.7803 6.78033C10.4874 7.07322 10.0126 7.07322 9.71967 6.78033C9.42678 6.48744 9.42678 6.01256 9.71967 5.71967L12.7197 2.71967C13.0126 2.42678 13.4874 2.42678 13.7803 2.71967Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 15C11 17.7614 8.76142 20 6 20C3.23858 20 1 17.7614 1 15C1 12.2386 3.23858 10 6 10C8.76142 10 11 12.2386 11 15ZM9 15C9 16.6569 7.65685 18 6 18C4.34315 18 3 16.6569 3 15C3 13.3431 4.34315 12 6 12C7.65685 12 9 13.3431 9 15Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.5 12.97C17.57 12.97 16 14.54 16 16.47C16 18.4 17.57 19.97 19.5 19.97C21.43 19.97 23 18.4 23 16.47C23 14.54 21.43 12.97 19.5 12.97ZM19.5 17.97C18.67 17.97 18 17.3 18 16.47C18 15.64 18.67 14.97 19.5 14.97C20.33 14.97 21 15.64 21 16.47C21 17.3 20.33 17.97 19.5 17.97Z" }),
        React__default['default'].createElement("path", { d: "M9 8.96997H4C3.45 8.96997 3 8.52997 3 7.96997C3 7.41997 3.45 6.96997 4 6.96997H7C8.1 6.96997 9 7.86997 9 8.96997Z" })));
};

var Icon$o = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$n = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z" })));
};

var Icon$m = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4 18H15C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H12C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H15C15.55 8 16 7.55 16 7C16 6.45 15.55 6 15 6H4C3.45 6 3 6.45 3 7ZM20.3 14.88L17.42 12L20.3 9.12C20.69 8.73 20.69 8.1 20.3 7.71C19.91 7.32 19.28 7.32 18.89 7.71L15.3 11.3C14.91 11.69 14.91 12.32 15.3 12.71L18.89 16.3C19.28 16.69 19.91 16.69 20.3 16.3C20.68 15.91 20.69 15.27 20.3 14.88Z" })));
};

var Icon$l = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M9.99998 19V14H14V19C14 19.55 14.45 20 15 20H18C18.55 20 19 19.55 19 19V12H20.7C21.16 12 21.38 11.43 21.03 11.13L12.67 3.59997C12.29 3.25997 11.71 3.25997 11.33 3.59997L2.96998 11.13C2.62998 11.43 2.83998 12 3.29998 12H4.99998V19C4.99998 19.55 5.44998 20 5.99998 20H8.99998C9.54998 20 9.99998 19.55 9.99998 19Z" })));
};

var Icon$k = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M21.9 8.89L20.85 4.52C20.63 3.62 19.85 3 18.94 3H16.73H14.72H13H11H9.28001H7.26001H5.05001C4.15001 3 3.36001 3.63 3.15001 4.52L2.10001 8.89C1.86001 9.91 2.08001 10.95 2.72001 11.77C2.80001 11.88 2.91001 11.96 3.00001 12.06V19C3.00001 20.1 3.90001 21 5.00001 21H19C20.1 21 21 20.1 21 19V12.06C21.09 11.97 21.2 11.88 21.28 11.78C21.92 10.96 22.15 9.91 21.9 8.89ZM7.02001 5L6.44001 9.86C6.36001 10.51 5.84001 11 5.23001 11C4.74001 11 4.43001 10.71 4.30001 10.53C4.04001 10.2 3.95001 9.77 4.05001 9.36L5.05001 5H7.02001ZM18.91 4.99L19.96 9.36C20.06 9.78 19.97 10.2 19.71 10.53C19.57 10.71 19.27 11 18.77 11C18.16 11 17.63 10.51 17.56 9.86L16.98 5L18.91 4.99ZM15.51 9.52C15.56 9.91 15.44 10.3 15.18 10.59C14.95 10.85 14.63 11 14.22 11C13.55 11 13 10.41 13 9.69V5H14.96L15.51 9.52ZM11 9.69C11 10.41 10.45 11 9.71001 11C9.37001 11 9.06001 10.85 8.82001 10.59C8.57001 10.3 8.45001 9.91 8.49001 9.52L9.04001 5H11V9.69ZM18 19H6.00001C5.45001 19 5.00001 18.55 5.00001 18V12.97C5.08001 12.98 5.15001 13 5.23001 13C6.10001 13 6.89001 12.64 7.47001 12.05C8.07001 12.65 8.87001 13 9.78001 13C10.65 13 11.43 12.64 12.01 12.07C12.6 12.64 13.4 13 14.3 13C15.14 13 15.94 12.65 16.54 12.05C17.12 12.64 17.91 13 18.78 13C18.86 13 18.93 12.98 19.01 12.97V18C19 18.55 18.55 19 18 19Z" })));
};

var Icon$j = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z" })));
};

var Icon$i = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z" })));
};

var Logo$1 = function (_a) {
    var isDark = _a.isDark, props = __rest(_a, ["isDark"]);
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 205 26" }, props),
        React__default['default'].createElement("image", { width: "205", height: "26", href: isDark ? 'images/egg/LogoTextNewDark.png' : 'images/egg/LogoTextNewWhite.png' })));
};

var Icon$h = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.1534 13.6089L4.15362 13.61C4.77322 16.8113 7.42207 19.3677 10.647 19.8853L10.6502 19.8858C13.0412 20.2736 15.2625 19.6103 16.9422 18.2833C11.3549 16.2878 7.9748 10.3524 9.26266 4.48816C5.69846 5.77194 3.35817 9.51245 4.1534 13.6089ZM10.0083 2.21054C4.76622 3.2533 1.09895 8.36947 2.19006 13.9901C2.97006 18.0201 6.28006 21.2101 10.3301 21.8601C13.8512 22.4311 17.0955 21.1608 19.2662 18.8587C19.2765 18.8478 19.2866 18.837 19.2968 18.8261C19.4385 18.6745 19.5757 18.5184 19.7079 18.3581C19.7105 18.355 19.713 18.3519 19.7156 18.3487C19.8853 18.1426 20.0469 17.9295 20.2001 17.7101C20.4101 17.4001 20.2401 16.9601 19.8701 16.9201C19.5114 16.8796 19.1602 16.8209 18.817 16.7452C18.7964 16.7406 18.7758 16.736 18.7552 16.7313C18.6676 16.7114 18.5804 16.6903 18.4938 16.6681C18.4919 16.6676 18.4901 16.6672 18.4882 16.6667C13.0234 15.2647 9.72516 9.48006 11.4542 4.03417C11.4549 4.03214 11.4555 4.03012 11.4562 4.0281C11.4875 3.92954 11.5205 3.83109 11.5552 3.73278C11.5565 3.72911 11.5578 3.72543 11.5591 3.72175C11.6768 3.38921 11.8136 3.05829 11.9701 2.73005C12.1301 2.39005 11.8501 2.01005 11.4701 2.03005C11.1954 2.04379 10.924 2.06848 10.6561 2.10368C10.6517 2.10427 10.6472 2.10486 10.6428 2.10545C10.4413 2.13221 10.2418 2.16492 10.0446 2.2034C10.0325 2.20576 10.0204 2.20814 10.0083 2.21054Z" })));
};

var Icon$g = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" })));
};

var Icon$f = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12.8533 3.39627C12.4634 2.75821 11.5366 2.75821 11.1467 3.39627L7.42977 9.47855C7.02256 10.1449 7.50213 11 8.28306 11H15.7169C16.4979 11 16.9774 10.1449 16.5702 9.47855L12.8533 3.39627ZM12 5.84L13.93 9H10.06L12 5.84ZM17.5 13C15.01 13 13 15.01 13 17.5C13 19.99 15.01 22 17.5 22C19.99 22 22 19.99 22 17.5C22 15.01 19.99 13 17.5 13ZM17.5 20C16.12 20 15 18.88 15 17.5C15 16.12 16.12 15 17.5 15C18.88 15 20 16.12 20 17.5C20 18.88 18.88 20 17.5 20ZM3 19.5C3 20.6046 3.89543 21.5 5 21.5H9C10.1046 21.5 11 20.6046 11 19.5V15.5C11 14.3954 10.1046 13.5 9 13.5H5C3.89543 13.5 3 14.3954 3 15.5V19.5ZM5 15.5H9V19.5H5V15.5Z" })));
};

var Icon$e = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M7.5 13C7.5 11.8954 8.39543 11 9.5 11H12.5C13.6046 11 14.5 11.8954 14.5 13V15C14.5 16.1046 13.6046 17 12.5 17H9.5C8.39543 17 7.5 16.1046 7.5 15V13Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.5 2C8.39543 2 7.5 2.89543 7.5 4V6.49482C7.5 6.93167 7.2113 7.30895 6.81834 7.49981C5.15004 8.31009 4 10.0207 4 12V17C4 19.2091 5.79086 21 8 21H14C16.2091 21 18 19.2091 18 17V12C18 11.4175 17.9004 10.8583 17.7173 10.3385L17.7892 10.297C19.4786 9.32167 20.0574 7.16153 19.082 5.47221C18.1552 3.86682 16.1534 3.25957 14.5 4.05146V4C14.5 2.89543 13.6046 2 12.5 2H9.5ZM9.5 6.25V4H12.5V6.25H9.5ZM9.22663 7.75C8.89473 8.46917 8.30318 9.00205 7.69211 9.29884C6.68638 9.78731 6 10.8154 6 12V17C6 18.1046 6.89543 19 8 19H14C15.1046 19 16 18.1046 16 17V12C16 10.8154 15.3136 9.78731 14.3079 9.29884C13.6968 9.00205 13.1053 8.46917 12.7734 7.75H9.22663ZM14.5 6.3226V6.49482C14.5 6.93167 14.7887 7.30895 15.1817 7.49981C15.7529 7.77726 16.2634 8.16029 16.6878 8.62352L16.7892 8.56495C17.522 8.1419 17.773 7.20495 17.35 6.47221C16.9346 5.75269 16.0213 5.49542 15.2914 5.89229L14.5 6.3226Z" })));
};

var Icon$d = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M5.66 4.2L6.05 4.59C6.44 4.97 6.44 5.61 6.05 5.99L6.04 6C5.65 6.39 5.03 6.39 4.64 6L4.25 5.61C3.86 5.23 3.86 4.6 4.25 4.21L4.26 4.2C4.64 3.82 5.27 3.81 5.66 4.2Z" }),
        React__default['default'].createElement("path", { d: "M1.99 10.95H3.01C3.56 10.95 4 11.39 4 11.95V11.96C4 12.51 3.56 12.95 3 12.94H1.99C1.44 12.94 1 12.5 1 11.95V11.94C1 11.39 1.44 10.95 1.99 10.95Z" }),
        React__default['default'].createElement("path", { d: "M12 1H12.01C12.56 1 13 1.44 13 1.99V2.96C13 3.51 12.56 3.95 12 3.94H11.99C11.44 3.94 11 3.5 11 2.95V1.99C11 1.44 11.44 1 12 1Z" }),
        React__default['default'].createElement("path", { d: "M18.34 4.2C18.73 3.82 19.36 3.82 19.75 4.21C20.14 4.6 20.14 5.22 19.75 5.61L19.36 6C18.98 6.39 18.35 6.39 17.96 6L17.95 5.99C17.56 5.61 17.56 4.98 17.95 4.59L18.34 4.2Z" }),
        React__default['default'].createElement("path", { d: "M18.33 19.7L17.94 19.31C17.55 18.92 17.55 18.3 17.95 17.9C18.33 17.52 18.96 17.51 19.35 17.9L19.74 18.29C20.13 18.68 20.13 19.31 19.74 19.7C19.35 20.09 18.72 20.09 18.33 19.7Z" }),
        React__default['default'].createElement("path", { d: "M20 11.95V11.94C20 11.39 20.44 10.95 20.99 10.95H22C22.55 10.95 22.99 11.39 22.99 11.94V11.95C22.99 12.5 22.55 12.94 22 12.94H20.99C20.44 12.94 20 12.5 20 11.95Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 11.95C6 8.64 8.69 5.95 12 5.95C15.31 5.95 18 8.64 18 11.95C18 15.26 15.31 17.95 12 17.95C8.69 17.95 6 15.26 6 11.95ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" }),
        React__default['default'].createElement("path", { d: "M12 22.9H11.99C11.44 22.9 11 22.46 11 21.91V20.95C11 20.4 11.44 19.96 11.99 19.96H12C12.55 19.96 12.99 20.4 12.99 20.95V21.91C12.99 22.46 12.55 22.9 12 22.9Z" }),
        React__default['default'].createElement("path", { d: "M5.66 19.69C5.27 20.08 4.64 20.08 4.25 19.69C3.86 19.3 3.86 18.68 4.24 18.28L4.63 17.89C5.02 17.5 5.65 17.5 6.04 17.89L6.05 17.9C6.43 18.28 6.44 18.91 6.05 19.3L5.66 19.69Z" })));
};

var Icon$c = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 3C7.02985 3 3 7.02985 3 11.9904C3 16.9606 7.02985 21 12 21C16.9701 21 21 16.9606 21 11.9904C21 7.02985 16.9701 3 12 3ZM16.4328 8.65139C16.3753 9.48614 14.8305 15.7228 14.8305 15.7228C14.8305 15.7228 14.7345 16.0874 14.3987 16.097C14.2836 16.097 14.1301 16.0874 13.9574 15.9243C13.6023 15.6269 12.7964 15.0512 12.0384 14.5235C12.0096 14.5522 11.9808 14.581 11.9424 14.6098C11.7697 14.7633 11.5107 14.984 11.2324 15.2527C11.1269 15.3486 11.0117 15.4542 10.8966 15.5693L10.887 15.5789C10.8198 15.6461 10.7623 15.694 10.7143 15.7324C10.3401 16.0394 10.3017 15.7804 10.3017 15.6461L10.5032 13.4488V13.4296L10.5128 13.4104C10.5224 13.3817 10.5416 13.3721 10.5416 13.3721C10.5416 13.3721 14.4659 9.87953 14.5714 9.50533C14.581 9.48614 14.5522 9.46695 14.5043 9.48614C14.2452 9.57249 9.72601 12.4318 9.22708 12.7484C9.19829 12.7676 9.11194 12.758 9.11194 12.758L6.91471 12.0384C6.91471 12.0384 6.65565 11.9328 6.742 11.693C6.76119 11.645 6.78998 11.597 6.89552 11.5299C7.38486 11.1844 15.8955 8.12367 15.8955 8.12367C15.8955 8.12367 16.1354 8.04691 16.2793 8.09488C16.3465 8.12367 16.3849 8.15245 16.4232 8.2484C16.4328 8.28678 16.4424 8.36354 16.4424 8.44989C16.4424 8.49787 16.4328 8.55544 16.4328 8.65139Z" })));
};

var Icon$b = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.3137 3L15.2631 3.94934C14.5597 5.19866 14.7398 6.81097 15.8032 7.87441C16.8667 8.93786 18.479 9.11792 19.7283 8.4146L20.6777 9.36396L17.6569 12.3848L17.1287 11.8566C16.7382 11.4661 16.105 11.4661 15.7145 11.8566C15.3239 12.2471 15.3239 12.8803 15.7145 13.2708L16.2426 13.799L9.36396 20.6777L8.49923 19.8129C9.71921 18.5286 9.69924 16.4983 8.43932 15.2384C7.1794 13.9784 5.14908 13.9585 3.86473 15.1784L3 14.3137L9.87868 7.43503L10.2145 7.77081C10.605 8.16134 11.2382 8.16134 11.6287 7.77081C12.0192 7.38029 12.0192 6.74713 11.6287 6.3566L11.2929 6.02081L14.3137 3ZM12.8995 1.58579C13.6805 0.804738 14.9469 0.804738 15.7279 1.58579L17.299 3.15684C17.6895 3.54736 17.6895 4.18053 17.299 4.57105L17.2175 4.65257C16.7183 5.15173 16.7183 5.96103 17.2175 6.4602C17.7166 6.95936 18.5259 6.95936 19.0251 6.4602L19.1066 6.37868C19.4971 5.98816 20.1303 5.98816 20.5208 6.37868L22.0919 7.94975C22.8729 8.7308 22.8729 9.99713 22.0919 10.7782L10.7782 22.0919C9.99713 22.8729 8.7308 22.8729 7.94975 22.0919L6.37869 20.5208C5.98817 20.1303 5.98817 19.4971 6.37869 19.1066L7.02511 18.4602C7.52427 17.961 7.52427 17.1517 7.02511 16.6526C6.52594 16.1534 5.71664 16.1534 5.21748 16.6526L4.57106 17.299C4.18054 17.6895 3.54737 17.6895 3.15685 17.299L1.58579 15.7279C0.804738 14.9469 0.804738 13.6805 1.58579 12.8995L12.8995 1.58579ZM13.8787 8.6066C13.4882 8.21608 12.855 8.21608 12.4645 8.6066C12.0739 8.99712 12.0739 9.63029 12.4645 10.0208L13.4645 11.0208C13.855 11.4113 14.4882 11.4113 14.8787 11.0208C15.2692 10.6303 15.2692 9.99713 14.8787 9.6066L13.8787 8.6066Z" })));
};

var Icon$a = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$9 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.65854 19C15.4488 19 19.1659 13.2338 19.1659 8.23717C19.1659 8.07728 19.1659 7.91739 19.1561 7.7475C19.878 7.21785 20.5024 6.5483 21 5.78881C20.3366 6.08861 19.6244 6.28847 18.8732 6.38841C19.6341 5.91872 20.2195 5.17921 20.5024 4.28981C19.7902 4.72951 19 5.03931 18.1512 5.20919C17.478 4.45969 16.522 4 15.4585 4C13.4195 4 11.761 5.69887 11.761 7.78747C11.761 8.08728 11.8 8.36709 11.8585 8.6469C8.79512 8.497 6.07317 6.97801 4.24878 4.68954C3.92683 5.25916 3.75122 5.90873 3.75122 6.59827C3.75122 7.90739 4.40488 9.06662 5.39024 9.74617C4.78537 9.72618 4.21951 9.5563 3.72195 9.27648C3.72195 9.28648 3.72195 9.30646 3.72195 9.32645C3.72195 11.1552 5 12.6942 6.67805 13.034C6.36585 13.1239 6.0439 13.1639 5.70244 13.1639C5.46829 13.1639 5.23415 13.1439 5.00976 13.0939C5.47805 14.6029 6.8439 15.6922 8.46341 15.7222C7.19512 16.7415 5.60488 17.3411 3.87805 17.3411C3.58537 17.3411 3.28293 17.3311 3 17.2911C4.62927 18.3704 6.57073 19 8.65854 19Z" })));
};

var Icon$8 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "-60 -30 600 600" }, props),
        React__default['default'].createElement("g", { id: "surface1" },
            React__default['default'].createElement("path", { d: "M 217.996094 158.457031 C 164.203125 158.457031 120.441406 202.21875 120.441406 256.007812 C 120.441406 309.800781 164.203125 353.5625 217.996094 353.5625 C 271.785156 353.5625 315.546875 309.800781 315.546875 256.007812 C 315.546875 202.21875 271.785156 158.457031 217.996094 158.457031 Z M 275.914062 237.636719 L 206.027344 307.523438 C 203.09375 310.457031 199.246094 311.925781 195.402344 311.925781 C 191.558594 311.925781 187.714844 310.460938 184.78125 307.523438 L 158.074219 280.816406 C 152.207031 274.953125 152.207031 265.441406 158.074219 259.574219 C 163.9375 253.707031 173.449219 253.707031 179.316406 259.574219 L 195.402344 275.660156 L 254.671875 216.394531 C 260.535156 210.527344 270.046875 210.527344 275.914062 216.394531 C 281.78125 222.257812 281.78125 231.769531 275.914062 237.636719 Z M 275.914062 237.636719 " }),
            React__default['default'].createElement("path", { d: "M 435.488281 138.917969 L 435.472656 138.519531 C 435.25 133.601562 435.101562 128.398438 435.011719 122.609375 C 434.59375 94.378906 412.152344 71.027344 383.917969 69.449219 C 325.050781 66.164062 279.511719 46.96875 240.601562 9.042969 L 240.269531 8.726562 C 227.578125 -2.910156 208.433594 -2.910156 195.738281 8.726562 L 195.40625 9.042969 C 156.496094 46.96875 110.957031 66.164062 52.089844 69.453125 C 23.859375 71.027344 1.414062 94.378906 0.996094 122.613281 C 0.910156 128.363281 0.757812 133.566406 0.535156 138.519531 L 0.511719 139.445312 C -0.632812 199.472656 -2.054688 274.179688 22.9375 341.988281 C 36.679688 379.277344 57.492188 411.691406 84.792969 438.335938 C 115.886719 468.679688 156.613281 492.769531 205.839844 509.933594 C 207.441406 510.492188 209.105469 510.945312 210.800781 511.285156 C 213.191406 511.761719 215.597656 512 218.003906 512 C 220.410156 512 222.820312 511.761719 225.207031 511.285156 C 226.902344 510.945312 228.578125 510.488281 230.1875 509.925781 C 279.355469 492.730469 320.039062 468.628906 351.105469 438.289062 C 378.394531 411.636719 399.207031 379.214844 412.960938 341.917969 C 438.046875 273.90625 436.628906 199.058594 435.488281 138.917969 Z M 217.996094 383.605469 C 147.636719 383.605469 90.398438 326.367188 90.398438 256.007812 C 90.398438 185.648438 147.636719 128.410156 217.996094 128.410156 C 288.351562 128.410156 345.59375 185.648438 345.59375 256.007812 C 345.59375 326.367188 288.351562 383.605469 217.996094 383.605469 Z M 217.996094 383.605469 " }))));
};

var Icon$7 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fill: "#B8B8B8", d: "M167,1928c0-1.333,0-2.667,0-4c3.519,0.78,7.019,1.66,10.56,2.322c8.772,1.64,17.668,4.932,26.326,4.415\r\n\t\t\tc21.431-1.28,40.51-9.97,57.821-22.563c1.305-0.948,2.904-1.493,5.897-2.991c-5.046-2.33-7.322-3.605-9.746-4.465\r\n\t\t\tc-15.055-5.328-30.13-10.602-45.228-15.812c-6.426-2.218-9.956-6.168-9.555-11.062c0.47-5.726,4.568-9.715,11.374-10.596\r\n\t\t\tc21.486-2.781,42.981-3.797,64.501-0.172c3.445,0.58,6.998,0.516,11.179,0.795c-2.383-13.326-4.582-25.396-6.694-37.479\r\n\t\t\tc-4.906-28.063-12.91-55.431-17.147-83.725c-5.02-33.522-12.422-66.735-19.913-99.831c-8.786-38.813-23.684-74.924-51.505-104.508\r\n\t\t\tc-0.684-0.727-1.33-1.496-1.926-2.297c-2.724-3.658-2.979-7.478,0.045-10.959c2.954-3.402,6.763-4.268,10.771-1.855\r\n\t\t\tc3.132,1.886,6.158,3.984,9.055,6.217c20.34,15.668,37.103,34.611,49.057,57.271c9.458,17.93,17.498,36.615,25.937,55.07\r\n\t\t\tc2.875,6.287,5.049,12.897,8.109,20.828c1.156-3.318,1.959-5.046,2.358-6.861c2.638-12.025,5.125-24.083,7.78-36.104\r\n\t\t\tc8.811-39.902,13.667-79.989,6.802-120.807c-7.557-44.919-22.255-86.982-48.493-124.619c-1.83-2.624-3.828-5.91-3.769-8.849\r\n\t\t\tc0.057-2.797,2.072-6.704,4.399-7.976c2.273-1.239,6.155-0.188,9.085,0.684c1.688,0.502,2.925,2.605,4.302,4.05\r\n\t\t\tc14.556,15.253,27.086,32.035,37.843,50.158c1.677,2.822,3.445,5.591,5.637,9.137c10.513-8.766,16.933-19.587,21.468-31.362\r\n\t\t\tc11.105-28.839,8.333-57.082-7.072-85.689c12.145,6.5,24.674,28.991,27.057,46.558c4.668,34.415-8.549,61.664-34.274,83.783\r\n\t\t\tc4.563,13.357,9.667,26.357,13.389,39.743c3.642,13.095,5.872,26.58,8.838,40.439c1.352-1.207,2.022-1.55,2.303-2.093\r\n\t\t\tc18.104-35.137,40.75-67.18,66.324-97.21c3.021-3.547,3.907-6.967,3.212-11.78c-3.302-22.857-3.106-45.729,0.593-68.604\r\n\t\t\tc5.09-31.475,15.737-61.17,28.116-90.344c4.409-10.394,9-20.709,12.919-29.707c-6.47-9.953-13.235-18.324-17.8-27.761\r\n\t\t\tc-15.375-31.784-13.434-65.222-7.669-98.792c0.246-1.43,1.896-2.618,2.894-3.92c-0.952,40.686,14.391,76.363,29.764,113.438\r\n\t\t\tc1.7-2.89,2.821-4.491,3.641-6.236c6.373-13.565,12.895-27.065,18.979-40.759c14.915-33.559,27.366-67.918,32.746-104.471\r\n\t\t\tc0.773-5.259,1.073-10.587,1.862-15.842c1.033-6.887,4.311-10.506,9.61-11.104c5.451-0.616,9.193,2.111,11.771,8.658\r\n\t\t\tc0.485,1.233,0.711,2.568,1.152,3.822c5.379,15.255,6.795,31.171,7.419,47.137c0.761,19.43-2.709,38.47-6.909,57.312\r\n\t\t\tc-7.58,34.002-21.159,65.854-35.767,97.305c-15.013,32.325-29.982,64.681-39.813,99.079c-2.616,9.156-4.658,18.479-7.398,29.466\r\n\t\t\tc6.871-2.938,10.961-6.438,13.031-11.163c2.749-6.275,4.993-12.337,12.655-14.146c1.302-0.308,2.302-2.28,3.255-3.616\r\n\t\t\tc4.063-5.694,8.207-11.344,11.996-17.219c1.371-2.126,2.328-4.78,2.626-7.294c2.522-21.294,10.701-40.521,21.852-58.482\r\n\t\t\tc16.447-26.495,36.861-49.825,59.876-70.729c24.159-21.943,49.039-43.091,73.479-64.728c7.174-6.351,13.924-13.181,20.664-19.596\r\n\t\t\tc-8.227-22.856-9.352-45.207-5.966-67.973c4.435-29.818,14.806-57.272,32.182-81.978c1.354-1.925,3.342-3.403,5.036-5.092\r\n\t\t\tc0.708,0.447,1.415,0.895,2.122,1.34c-1.565,3.401-2.938,6.906-4.726,10.188c-16.363,30.047-22.975,62.284-21.211,96.256\r\n\t\t\tc0.488,9.396,2.398,18.715,3.655,28.068c0.733,0.068,1.467,0.138,2.201,0.206c1.837-3.814,3.714-7.609,5.505-11.444\r\n\t\t\tc17.375-37.206,37.439-72.915,60.024-107.189c4.123-6.258,7.576-12.205,7.236-20.153c-0.271-6.364,2.311-9.698,8.238-10.639\r\n\t\t\tc5.602-0.889,8.687-3.997,11.773-8.133c22.344-29.922,45.534-59.149,72.812-84.817c23.529-22.142,46.458-45.029,71.168-65.782\r\n\t\t\tc60.327-50.669,127.34-90.854,199.351-122.706c44.859-19.843,91.063-35.84,138.938-46.619\r\n\t\t\tc23.65-5.325,47.445-10.233,71.388-13.983c24.938-3.907,50.066-7.752,75.231-8.834c41.563-1.786,83.248-3.241,124.782,1.661\r\n\t\t\tc23.769,2.807,47.702,4.574,71.287,8.472c40.063,6.619,79.454,16.415,118.155,28.812\r\n\t\t\tc93.558,29.967,178.986,75.504,257.281,134.624c58.34,44.053,109.261,95.733,154.437,152.99\r\n\t\t\tc38.524,48.828,70.695,101.756,97.426,157.958c1.541,3.241,3.257,6.92,5.964,8.989c8.93,6.82,18.352,12.996,28.161,19.82\r\n\t\t\tc1.866-3.495,3.483-6.312,4.903-9.223c12.327-25.275,27.585-48.664,45.457-70.346c5.313-6.444,10.958-7.643,16.528-3.999\r\n\t\t\tc5.317,3.479,6.452,8.446,3.563,15.882c-0.723,1.86-1.67,3.633-2.399,5.49c-5.596,14.245-11.223,28.479-16.678,42.776\r\n\t\t\tc-0.856,2.242-0.897,4.796-1.488,8.207c17.121-3.34,32.308-8.023,45.397-17.737c18.099-13.431,34.056-28.847,43.761-49.751\r\n\t\t\tc0.938-2.02,2.926-3.551,4.426-5.309c0.852,0.423,1.701,0.847,2.554,1.271c0.713,14.887-2.726,29.145-10.742,41.814\r\n\t\t\tc-21.444,33.9-53.405,48.461-93.204,48.036c-2.623,8.239-5.129,16.109-7.625,23.949c2.406,2.974,4.398,5.635,6.594,8.116\r\n\t\t\tc18.021,20.373,32.476,42.994,43.524,67.864c11.575,26.058,18.708,53.358,23.255,81.38c0.768,4.727,2.619,8.343,6.418,10.668\r\n\t\t\tc5.264,3.226,10.875,5.884,17.323,9.308c0.612-6.14,1.121-10.733,1.521-15.337c1.933-22.202,4.048-44.311,9.976-65.98\r\n\t\t\tc7.338-26.831,19.349-51.64,31.145-76.591c0.568-1.202,1.148-2.424,1.906-3.509c3.303-4.734,8.396-6.438,14.078-4.798\r\n\t\t\tc5.178,1.493,8.333,5.156,8.35,11.05c0.016,5.633-1.051,11.261-1.207,16.902c-0.177,6.433,0.127,12.878,0.232,19.973\r\n\t\t\tc12.638-7.296,17.81-6.809,23.033,2.18c13.391,23.03,26.518,46.214,39.752,69.335c4.524,7.905,9.058,15.808,14.55,25.392\r\n\t\t\tc0.88-10.297,1.345-18.215,2.264-26.082c4.84-41.407,23.183-76.745,49.205-108.557c0.966-1.181,2.952-1.524,6.324-3.163\r\n\t\t\tc-1.593,3.995-2.216,6.103-3.226,8.005c-17.002,32.075-24.975,66.548-26.67,102.543c-0.8,16.966-0.443,33.982-0.82,50.972\r\n\t\t\tc-0.096,4.282-0.025,8.987-1.737,12.716c-2.725,5.931-1.206,10.495,1.398,15.83c20.458,41.898,41.069,83.73,60.854,125.949\r\n\t\t\tc27.068,57.759,42.945,118.133,40.326,182.558c-0.197,4.885,0.875,9.93,2.019,14.744c13.563,57.146,18.065,114.834,11.987,173.396\r\n\t\t\tc-4.985,48.036-16.236,94.366-34.743,138.954c-2.358,5.687-6.299,11.257-1.013,17.497c0.676,0.798,0.404,2.566,0.271,3.854\r\n\t\t\tc-2.895,27.797-5.567,55.633-14.044,82.484c-1.152,3.651-2.005,7.397-3.318,12.305c2.338-1.19,3.356-1.443,4.002-2.078\r\n\t\t\tc19.02-18.674,38.466-36.971,53.713-59.063c4.35-6.302,8.407-12.806,12.592-19.222c2.455-3.767,5.789-5.797,10.166-3.896\r\n\t\t\tc4.522,1.966,4.996,6.147,3.719,10.207c-1.291,4.102-3.273,8.001-5.146,11.896c-3.943,8.205-8.016,16.349-12.033,24.518\r\n\t\t\tc0.701,0.358,1.402,0.716,2.104,1.074c49.146-34.315,73.832-82.737,79.02-142.485c2.11,1.381,2.948,1.929,3.784,2.476\r\n\t\t\tc0,12,0,24,0,36c-0.764,4.522-1.278,9.104-2.326,13.561c-12.324,52.427-42.405,90.201-92.215,111.759\r\n\t\t\tc-2.843,1.229-5.643,3.343-7.58,5.754c-13.34,16.598-26.457,33.373-39.606,50.123c-1.769,2.252-3.307,4.68-5.299,7.521\r\n\t\t\tc12.321,2.26,23.698,4.23,35.026,6.446c25.479,4.981,50.841,10.925,77.147,8.284c1.37-0.139,2.854,0.867,4.912,1.549\r\n\t\t\tc-1.486,3.087-2.356,5.581-3.769,7.716c-10.293,15.549-20.271,31.331-31.177,46.443c-12.394,17.176-27.974,31.208-45.894,42.581\r\n\t\t\tc-21.962,13.937-45.228,22.229-71.885,18.521c-21.213-2.95-39.85-10.309-53.881-27.185c-0.774-0.934-1.895-1.58-2.727-2.258\r\n\t\t\tc-1.004,0.586-1.689,0.806-2.118,1.265c-25.513,27.417-53.745,51.705-84.146,73.541c-2.861,2.056-5.063,5.182-7.182,8.094\r\n\t\t\tc-10.771,14.799-20.975,30.035-32.297,44.394c-5.144,6.523-7.447,12.608-6.313,20.864c3.864,28.179,11.618,54.066,37.207,70.822\r\n\t\t\tc4.762,3.117,6.11,8.747,4.516,14.229c-1.479,5.082-6.135,9.235-12.014,8.557c-7.827-0.906-15.762-2.52-23.138-5.227\r\n\t\t\tc-7.21-2.646-13.774-7.05-21.344-11.063c-6.452,31.731-17.611,60.729-35.168,87.125c-19.646,29.534-52.894,62.186-68.522,65.388\r\n\t\t\tc2.881-3.355,4.448-5.656,6.464-7.457c45.448-40.615,71.378-92.145,84.322-150.89c0.59-2.679,0.471-6.29-0.896-8.481\r\n\t\t\tc-5.052-8.1-10.769-15.783-16.675-24.255c-3.797,3.482-7.217,6.56-10.571,9.705c-23.392,21.937-48.539,41.548-75.642,58.768\r\n\t\t\tc-58.135,36.936-121.508,61.88-186.894,82.191c-85.069,26.429-172.291,43.365-260.084,57.431\r\n\t\t\tc-14.954,2.396-24.59,11.811-36.036,19.108c43.597,80.593,17.905,158.974-9.913,183.315c5.609-28.002,11.594-54.606,8.904-84.047\r\n\t\t\tc-13.748,7.067-26.398,12.901-38.364,19.908c-12.338,7.226-24.369,15.102-35.868,23.596\r\n\t\t\tc-11.085,8.188-21.318,17.531-32.278,26.662c-2.834-5.479,0.822-7.75,2.979-10.324c25.458-30.368,55.828-54.188,92.718-69.279\r\n\t\t\tc3.629-1.484,7.155-3.221,11.135-5.023c-2.386-24.752-7.388-48.09-18.741-70.718c-3.722,2.614-6.411,4.485-9.084,6.384\r\n\t\t\tc-30.776,21.845-58.729,47.063-86.366,72.627c-22.52,20.83-44.565,42.148-61.75,67.843c-6.658,9.955-13.054,20.085-19.569,30.135\r\n\t\t\tc-2.667,0-5.333,0-8,0c-4.095-3.519-4.447-7.327-2.437-12.461c8.137-20.784,16.623-41.322,27.2-61.08\r\n\t\t\tc16.146-30.159,35.092-58.229,58.798-82.851c11.53-11.976,24.263-22.807,36.638-33.947c3.355-3.021,6.336-5.712,3.449-10.58\r\n\t\t\tc6.979-3.09,13.311-5.893,19.642-8.694c-0.264-0.604-0.526-1.208-0.791-1.813c-6.657,1.871-13.293,3.818-19.974,5.6\r\n\t\t\tc-29.612,7.895-59.562,14.15-89.938,18.286c-3.651,0.497-6.929,0.651-8.35,5.401c-3.612,12.071-7.646,24.029-11.896,35.896\r\n\t\t\tc-9.102,25.422-23.303,47.828-41.076,68.034c-4.483,5.098-9.858,6.398-14.025,3.693c-4.445-2.887-4.852-7.461-1.374-14.145\r\n\t\t\tc1.748-3.359,3.337-6.802,5.504-11.244c-2.854,0.342-4.184,0.305-5.386,0.674c-25.482,7.834-51.198,7.822-76.93,1.754\r\n\t\t\tc-32.209-7.597-60.537-23.941-88.784-40.354c-1.231-0.715-1.906-2.393-3.604-4.626c18.303-11.319,34.576-24.06,48.43-41.373\r\n\t\t\tc-2.73-0.697-3.92-1.146-5.145-1.293c-33.677-4.046-67.362-8.024-101.035-12.106c-9.574-1.161-19.107-3.638-28.67-3.692\r\n\t\t\tc-15.613-0.09-31.235,1.307-46.854,2.09c-5.911,0.298-10.39,2.938-14.719,7.136c-22.482,21.789-45.723,42.815-59.749,71.724\r\n\t\t\tc-3.734,7.698-14.814,8.478-20.439,2.269c-3.754-4.145-3.659-9.129-2.644-14.166c3.429-16.972,6.945-33.912,14.441-49.723\r\n\t\t\tc1.795-3.785,2.962-7.87,4.914-13.164c-7.034,0.344-12.524,0.775-18.021,0.854c-29.645,0.425-59.258-0.026-88.763-3.371\r\n\t\t\tc-36.957-4.189-72.66-13.132-106.749-28.151c-44.332-19.535-84.016-46.443-119.69-78.849\r\n\t\t\tc-22.106-20.081-44.615-38.771-72.952-49.261c-0.623-0.23-1.188-0.611-1.807-0.855c-5.241-2.063-10.365-4.542-15.755-6.094\r\n\t\t\tc-21.802-6.273-43.083-13.893-63.621-23.563c-2.956-1.392-6.038-2.515-9.042-3.752c-1.415,1.104-2.51,1.844-3.469,2.729\r\n\t\t\tc-30.144,27.829-59.299,56.669-84.481,89.121c-14.736,18.991-27.512,39.374-31.524,63.869c-0.268,1.63-0.636,3.322-1.364,4.779\r\n\t\t\tc-1.777,3.556-4.799,6.207-8.746,5.164c-2.865-0.756-6.111-2.873-7.583-5.342c-1.567-2.629-1.76-6.397-1.665-9.644\r\n\t\t\tc0.641-21.769,4.101-43.002,12.435-63.291c10.343-25.181,25.445-47.504,41.243-69.434c2.029-2.815,3.832-5.796,6.726-10.2\r\n\t\t\tc-7.688,0.899-13.246,1.884-18.839,2.148c-27.08,1.285-53.409,6.593-79.446,13.905c-20.514,5.761-39.409,14.134-54.643,29.614\r\n\t\t\tc-5.313,5.397-10.028,5.564-15.102,1.64c-5.222-4.042-5.915-9.309-1.634-15.907c16.01-24.684,37.062-43.895,64.396-54.927\r\n\t\t\tc28.541-11.521,58.54-14.869,89.175-11.341c11.229,1.295,22.387,3.225,33.616,4.515c7.501,0.862,7.533,0.586,11.32-7.649\r\n\t\t\tc-0.651-0.697-1.236-1.538-2.013-2.125c-22.17-16.754-42.033-35.848-59.418-57.576c-2.259-2.823-6.295-4.795-9.895-5.887\r\n\t\t\tc-27.772-8.417-55.127-18.018-81.139-30.88c-9.444-4.671-18.116-6.23-28.484-4.096c-18.068,3.722-36.125,4.163-54.063-2.543\r\n\t\t\tc-58.774-21.973-91.243-66.554-108.253-124.626c-0.536-1.831,0.464-4.112,0.962-7.751c15.156,9.438,30.772,13.797,46.498,17.84\r\n\t\t\tc15.464,3.978,30.957,7.786,47.626,7.304c-12.922-10.235-25.472-19.069-36.72-29.332c-20.067-18.308-35.861-40.244-50.292-63.155\r\n\t\t\tc-4.26-6.765-8.439-13.58-12.584-20.416c-2.438-4.021-1.549-7.665,1.667-10.837c3.248-3.205,7.768-3.535,11.855-0.803\r\n\t\t\tc1.37,0.916,2.476,2.22,3.736,3.307c12.102,10.447,24.042,21.091,36.352,31.285c23.491,19.455,49.156,35.43,77.43,47.048\r\n\t\t\tc3.166,1.302,6.498,2.202,9.754,3.288c-1.179-3.351-3.12-5.073-4.98-6.879c-10.984-10.662-22.55-20.801-32.8-32.127\r\n\t\t\tc-24.207-26.748-41.041-58.117-54.774-91.232c-1.988-4.796-5.053-8.125-9.052-11.438c-12.546-10.399-24.571-21.43-36.717-32.305\r\n\t\t\tc-1.452-1.3-2.738-3.005-3.533-4.776c-2.639-5.887,0.905-12.957,7.31-13.662c3.432-0.378,7.135,0.807,10.586,1.757\r\n\t\t\tc3.332,0.917,6.495,2.438,10.716,4.076c-4.829-20.508-9.262-39.563-13.885-58.57c-0.427-1.756-1.722-3.936-3.226-4.678\r\n\t\t\tc-5.231-2.583-10.189-6.258-15.587-4.913c-5.382,6.089-11.185,11.617-17.556,16.384c-19.82,14.828-42.169,17.6-65.449,11.365\r\n\t\t\tC188.851,1937.936,178.075,1932.41,167,1928z M1000.152,1888.258c-3.379-3.188-6.167-5.479-8.543-8.141\r\n\t\t\tc-3.98-4.455-8.179-8.834-11.405-13.814c-4.165-6.426-2.395-9.57,5.392-10.556c13.412-1.695,25.848-6.278,37.763-12.426\r\n\t\t\tc1.788-0.924,3.251-2.483,5.137-3.963c-12.477-1.03-24.314-0.704-35.536-3.18c-33.914-7.477-61.368-25.378-80.568-54.659\r\n\t\t\tc-4.498-6.86-7.408-14.88-10.291-22.646c-2.761-7.441,0.006-10.001,7.979-9.651c6.594,0.289,13.551,0.703,19.784-0.998\r\n\t\t\tc12.148-3.315,24.227-7.336,35.763-12.373c36.918-16.12,61.268-43.903,73.718-82.113c2.667-8.184,4.754-16.568,2.949-25.194\r\n\t\t\tc-1.054-0.311-1.691-0.702-2.274-0.633c-2.313,0.273-4.613,0.656-6.909,1.063c-23.829,4.227-46.427,0.288-67.923-10.461\r\n\t\t\tc-3.85-1.925-7.536-4.306-10.948-6.933c-3.215-2.476-3.299-5.61-0.16-8.467c1.229-1.119,2.582-2.102,3.879-3.146\r\n\t\t\tc32.837-26.454,53.338-60.742,64.178-101.146c1.639-6.107,3.129-12.258,4.609-18.406c0.479-1.996,0.71-4.053,1.188-6.88\r\n\t\t\tc-20.243,5.59-35.942,17.829-53.087,26.791c-3.489-5.223-3.454-5.216-2.616-10.354c5.793-35.523,19.277-67.755,41.161-96.416\r\n\t\t\tc1.409-1.845,2.405-4.005,3.594-6.019c-0.632-0.45-1.264-0.899-1.896-1.351c-5.347,5.826-10.99,11.412-15.947,17.555\r\n\t\t\tc-4.169,5.163-7.296,11.164-11.397,16.392c-1.326,1.689-4.283,2.103-6.494,3.1c-0.753-2.026-2.216-4.082-2.137-6.076\r\n\t\t\tc0.343-8.652,1.072-17.293,1.777-25.929c1.872-22.934,4.402-45.767,11.744-67.747c8.536-25.558,21.354-48.081,44.908-62.957\r\n\t\t\tc0.923-0.583,1.415-1.849,2.199-2.922c-9.275-4.063-13.684-5.153-20.815-3.463c-6.768,1.604-13.289,4.221-19.97,6.228\r\n\t\t\tc-3.018,0.904-6.154,1.41-9.238,2.098c-0.388-3.069-1.51-6.253-1.056-9.192c6.749-43.609,19.721-84.938,45.251-121.586\r\n\t\t\tc1.374-1.974,2.228-4.31,3.628-7.079c-12.417-1.266-23.023,1.27-33.416,5.083c-3.438,1.263-6.716,2.999-10.207,4.062\r\n\t\t\tc-4.762,1.448-7.685-1.025-6.055-5.498c5.442-14.954,9.458-30.413,19.47-43.542c18.578-24.363,42.39-41.094,70.837-51.76\r\n\t\t\tc3.068-1.15,6.953-1.328,9.566-5.626c-3.264-0.41-5.487-0.938-7.709-0.93c-16.662,0.065-33.323,0.225-49.984,0.395\r\n\t\t\tc-1.994,0.021-4.045,0.648-5.963,0.338c-1.8-0.292-4.736-1.253-4.901-2.283c-0.305-1.91,0.912-4.143,1.771-6.122\r\n\t\t\tc0.36-0.833,1.409-1.377,2.166-2.029c35.516-30.65,75.084-54.124,120.393-67.113c15.277-4.379,30.857-7.702,46.921-11.662\r\n\t\t\tc-1.735-11.36-6.562-21.401-13.026-30.761c-9.417-13.631-22.643-22.29-37.517-28.901c-2.145-0.953-3.681-3.276-5.497-4.966\r\n\t\t\tc2.094-1.772,3.938-4.592,6.318-5.156c23.387-5.54,46.975-9.706,71.189-8.063c20.104,1.363,39.405,6.207,58.232,13.253\r\n\t\t\tc3.119,1.167,6.289,3.61,10.561,1.746c-5.474-13.313-9.362-26.81-18.566-37.844c-1.371-1.645-1.364-4.438-2.119-7.144\r\n\t\t\tc19.023-3.253,36.523-1.633,54.062,0.487c17.403,2.103,33.454,8.877,50.275,14.241c-4.28-6.845-9.396-12.44-14.107-18.354\r\n\t\t\tc-1.479-1.854-2.688-4.657-2.438-6.846c0.13-1.142,3.62-2.229,5.736-2.724c2.233-0.521,4.644-0.462,6.969-0.397\r\n\t\t\tc14.317,0.385,28.676,0.293,42.939,1.397c25.062,1.941,48.139,9.995,68.803,24.545c2.138,1.504,4.345,2.91,6.859,4.589\r\n\t\t\tc12.939-9.267,26.274-17.337,41.319-22.16c14.685-4.71,29.713-7.146,45.121-7.936c31.632-1.617,39.102-1.239,46.407,3.907\r\n\t\t\tc-6.273,7.744-12.551,15.49-18.825,23.234c0.429,0.726,0.856,1.449,1.286,2.174c32.693-15.789,66.869-20.812,103.554-16.476\r\n\t\t\tc-0.938,9.97-8.986,14.911-11.594,22.584c-2.622,7.718-5.983,15.187-9.923,25.014c25.584-9.625,49.384-16.723,74.545-17.612\r\n\t\t\tc26.721-0.946,65.772,5.939,74.317,13.981c-3.562,2.118-6.638,4.376-10.042,5.903c-22.13,9.932-37.684,25.906-45.531,49.035\r\n\t\t\tc-1.029,3.034-1.627,6.214-2.497,9.611c12.044,2.638,23.127,4.781,34.063,7.51c50.127,12.5,94.082,36.764,132.997,70.443\r\n\t\t\tc2.528,2.188,4.334,5.21,7.973,9.685c-5.25,0.537-8.033,1.09-10.813,1.063c-16.991-0.161-33.98-0.509-50.974-0.654\r\n\t\t\tc-3.146-0.027-6.3,0.578-9.448,0.892c2.662,3.147,5.521,4.56,8.487,5.688c15.343,5.832,29.857,13.168,42.945,23.176\r\n\t\t\tc23.861,18.245,39.916,41.713,47.253,70.927c0.486,1.938,0.117,4.692-1.009,6.209c-0.691,0.934-3.741,0.723-5.454,0.168\r\n\t\t\tc-4.106-1.332-7.959-3.464-12.078-4.745c-9.737-3.03-19.59-5.585-31.204-3.78c2.307,3.743,3.892,6.563,5.709,9.227\r\n\t\t\tc24.978,36.599,37.438,77.75,43.913,121.042c0.347,2.311-0.059,5.993-1.505,6.966c-1.536,1.032-4.833-0.091-7.188-0.823\r\n\t\t\tc-7.283-2.263-14.381-5.196-21.75-7.096c-7.244-1.866-14.252-0.347-20.787,3.082c0.355,1.162,0.355,1.571,0.556,1.742\r\n\t\t\tc1.255,1.068,2.479,2.2,3.854,3.101c14.324,9.388,25.198,22.016,32.271,37.379c5.68,12.337,10.53,25.213,14.195,38.285\r\n\t\t\tc7.241,25.823,7.521,52.667,9.636,79.202c0.166,2.084-1.971,4.351-3.037,6.531c-1.879-1.086-4.34-1.737-5.536-3.335\r\n\t\t\tc-5.189-6.928-9.871-14.231-15.011-21.197c-3.63-4.92-8.04-9.087-13.893-11.494c1.062,2.979,2.646,5.406,4.389,7.719\r\n\t\t\tc21.485,28.535,34.421,60.646,40.277,95.766c0.645,3.863,1.278,7.299-4.133,9.133c-16.37-9.641-32.389-20.961-52.601-26.711\r\n\t\t\tc2.065,7.587,3.896,13.582,5.323,19.672c10.228,43.608,31.607,80.252,67.134,108.156c6.041,4.744,5.909,7.727-0.292,12.373\r\n\t\t\tc-1.591,1.19-3.362,2.156-5.105,3.127c-23.019,12.815-47.511,16.704-73.415,12.156c-2.441-0.43-4.954-0.462-7.443-0.68\r\n\t\t\tc-0.904,14.535,3.939,32.467,12.654,48.43c19.873,36.4,51.309,57.704,90.236,69.276c9.981,2.968,20.013,4.812,30.524,3.128\r\n\t\t\tc5.44-0.871,8.021,1.831,7.646,7.361c-0.132,1.938-0.946,3.849-1.554,5.738c-14.219,44.326-69.056,76.642-108.045,76.354\r\n\t\t\tc-5.169-0.038-10.34-0.006-15.51-0.006c6.474,7.962,15.175,10.023,23.287,13.318c10.604,4.309,20.598,4.737,29.761-3.335\r\n\t\t\tc0.98-0.863,2.291-1.351,3.439-2.024c64.463-37.85,130.479-72.424,201.787-95.865c7.811-2.566,12.764-7.938,15.925-15.427\r\n\t\t\tc14.134-33.482,26.579-67.58,36.491-102.54c17.822-62.864,25.217-127.259,26.81-192.383c0.831-33.979-0.456-67.908-3.834-101.78\r\n\t\t\tc-3.409-34.18-8.219-68.139-16.245-101.504c-9.36-38.908-21.691-76.976-37.621-113.718\r\n\t\t\tc-15.915-36.711-30.29-74.272-55.289-106.338c-5.09-6.529-8.876-14.073-13.291-21.134c-20.189-32.284-43.112-62.496-68.341-91.021\r\n\t\t\tc-25.872-29.252-53.402-56.83-83.406-81.783c-19.181-15.951-38.9-31.359-59.26-45.767\r\n\t\t\tc-40.604-28.732-83.654-53.248-129.215-73.478c-44.837-19.906-90.542-37.344-138.175-48.977\r\n\t\t\tc-55.783-13.624-112.666-19.79-170.062-20.947c-39.997-0.807-79.843,1.299-119.551,6.384\r\n\t\t\tc-34.691,4.441-69.106,10.124-102.756,19.898c-64.874,18.844-126.812,44.695-185.694,77.809\r\n\t\t\tc-35.757,20.107-69.475,43.349-101.945,68.31c-14.226,10.936-27.195,23.531-40.488,35.646\r\n\t\t\tc-37.802,34.443-71.306,72.765-101.918,113.663c-29.858,39.891-53.996,83.313-76.387,127.587\r\n\t\t\tc-25.041,49.515-43.285,101.82-56.229,155.756c-12.545,52.268-18.155,105.578-19.748,159.251\r\n\t\t\tc-0.988,33.278-0.286,66.582,3.718,99.688c3.151,26.052,6.222,52.146,10.624,78.004c5.075,29.812,12.875,59.002,24.545,87.044\r\n\t\t\tc1.776,4.269,4.346,9.238,3.572,13.319c-1.582,8.345,1.762,14.969,4.632,21.972c10.854,26.489,21.697,52.981,32.668,79.423\r\n\t\t\tc5.101,12.291,12.05,22.79,25.457,27.816c5.847,2.191,10.947,6.31,16.544,9.248c13.851,7.272,27.521,14.964,41.747,21.423\r\n\t\t\tc37.898,17.206,76.178,33.575,114.022,50.896C977.765,1891.793,987.868,1893.238,1000.152,1888.258z M1358.327,1958.738\r\n\t\t\tc11.899-0.082,22.85,0.926,33.414-5.228c10.595-6.169,21.829-11.306,33.025-16.353c10.611-4.782,21.458-9.073,32.347-13.198\r\n\t\t\tc15.566-5.897,31.31-11.131,48-13.182c11.559-1.421,22.953-4.16,34.509-5.626c18.098-2.297,36.244-4.311,54.421-5.851\r\n\t\t\tc8.595-0.729,17.313,0.122,25.96-0.177c2.825-0.099,6.141-0.87,8.315-2.532c12.435-9.508,25.412-18.52,36.688-29.288\r\n\t\t\tc30.557-29.182,61.542-57.973,89.646-89.625c5.491-6.186,9.117-7.51,12.444-4.699c4.963,4.188,1.784,8.576-0.293,12.578\r\n\t\t\tc-7.813,15.058-16.641,29.644-23.58,45.084c-10.209,22.715-24.196,42.871-38.941,62.662c-1.277,1.715-2.116,3.756-3.847,6.89\r\n\t\t\tc42.211,1.932,83.112,4.458,126.016,5.403c-14.012-23.19-18.672-46.885-20.351-73.894c3.877,3.103,6.161,4.374,7.709,6.253\r\n\t\t\tc19.055,23.141,45.479,34.189,72.513,44.077c23.844,8.721,43.772-0.373,64.527-15.607c-29.258-4.313-47.396-22.12-63.583-42.604\r\n\t\t\tc-17.402-22.024-16.96-46.918-11.795-72.533c1.443,1.996,1.793,4.19,2.362,6.327c3.423,12.84,7.009,25.637,10.323,38.505\r\n\t\t\tc3.424,13.299,13.579,19.315,25.573,20.442c20.879,1.961,41.901,2.261,62.345-4.576c24.052-8.043,40.574-24.311,52.587-45.658\r\n\t\t\tc-0.658-0.902-0.803-1.326-1.026-1.374c-4.222-0.901-8.456-1.743-12.681-2.631c-32.881-6.911-61.325-22.229-84.692-46.272\r\n\t\t\tc-24.389-25.098-34.752-55.535-31.581-90.408c0.557-6.122-0.689-10.51-5.797-14.678c-10.682-8.722-16.488-20.747-19.794-33.955\r\n\t\t\tc-0.557-2.227-0.078-4.71-0.078-7.074c0.614-0.26,1.229-0.521,1.844-0.779c9.335,17.665,23.979,28.393,42.515,34.184\r\n\t\t\tc18.771,5.865,37.229,4.584,57.435-1.781c-3.443-3.137-5.746-5.316-8.136-7.396c-16.914-14.708-29.692-32.442-37.876-53.265\r\n\t\t\tc-4.379-11.141-8.788-22.463-11.271-34.111c-4.728-22.167-14.645-41.288-29.627-58.048c-1.551-1.733-2.479-4.021-4.034-6.616\r\n\t\t\tc19.582-0.264,47.316,9.115,81.443,27.221c-0.52-2.417-0.694-4.351-1.348-6.105c-9.517-25.623-23.229-48.635-42.472-68.219\r\n\t\t\tc-13.396-13.633-28.661-24.882-44.541-35.38c-2.88-1.904-5.557-4.114-8.325-6.184c33.746-3.476,65.059-0.151,90.647,24.718\r\n\t\t\tc-5.75-50.445-22.524-93.485-71.783-117.232c14.25-26.844,37.266-30.742,65.408-25.091\r\n\t\t\tc-19.266-52.845-48.065-97.375-89.261-135.086c11.857-2.769,23.208-5.227,34.808-4.791c11.709,0.438,23.375,2.011,35.592,3.135\r\n\t\t\tc-0.689-1.534-0.889-2.578-1.497-3.245c-25.448-27.843-54.495-50.056-92.377-58.014c-11.063-2.323-22.305-3.79-33.454-5.705\r\n\t\t\tc-3.979-0.684-8.324-0.287-12.69-3.382c10.703-9.08,22.293-14.258,34.668-16.742c16.942-3.4,34.172-5.367,51.273-7.973\r\n\t\t\tc2.349-0.357,4.675-0.854,8.809-1.619c-22.479-17.319-45.893-27.893-71.21-34.725c-25.261-6.817-51.001-7.728-77.838-5.443\r\n\t\t\tc2.474-31.786,13.176-58.184,36.934-79.932c-3.695-1.063-5.48-1.751-7.331-2.082c-13.321-2.384-26.584-1.354-39.76,1.095\r\n\t\t\tc-23.61,4.387-45.053,14.061-65.102,27.063c-3.206,2.079-6.523,3.989-11.771,7.185c-0.504-26.53,6.686-48.984,15.848-72.196\r\n\t\t\tc-15.301,2.087-28.768,5.695-41.825,10.521c-13.103,4.842-26.207,9.903-38.689,16.118c-12.424,6.188-24.075,13.927-37.412,21.778\r\n\t\t\tc-0.286-5.392-1.005-9.932-0.676-14.394c1.027-13.938,7.949-25.198,16.91-35.432c2.252-2.569,4.401-5.229,6.6-7.849\r\n\t\t\tc-0.434-0.628-0.866-1.257-1.3-1.885c-6.107,1.284-12.291,2.288-18.311,3.903c-27.782,7.458-51.978,21.872-74.692,39.834\r\n\t\t\tc-28.255-21.522-57.813-39.098-94.126-42.345c14.366,16.682,27.134,33.479,21.621,58.914\r\n\t\t\tc-17.862-13.183-35.977-23.564-55.438-31.382c-19.616-7.879-39.534-14.754-62.091-17.646c1.584,3.658,2.521,5.736,3.391,7.841\r\n\t\t\tc6.271,15.186,10.204,31.005,12.345,47.248c0.659,5.001,1.92,10.313-1.431,16.017c-36.708-24.415-74.93-41.244-120.395-32.462\r\n\t\t\tc9.955,11.2,18.998,22.554,24.773,36.104c5.87,13.772,9.758,27.963,10.356,44.173c-27.391-2.758-53.14-1.349-78.481,5.467\r\n\t\t\tc-28.275,7.604-59.561,23.326-68.78,35.328c8.273,0.825,16.114,1.521,23.935,2.403c18.936,2.139,37.646,5.267,54.96,13.814\r\n\t\t\tc4.968,2.452,10.13,4.765,14.382,10.692c-27.382,3.818-53.915,6.758-78.237,18.515c-24.522,11.852-44.558,29.134-61.618,50.61\r\n\t\t\tc23.735-5.057,46.814-5.055,71.587,2.389c-4.144,3.118-6.884,4.894-9.283,7.049c-5.436,4.884-11.317,9.451-15.907,15.058\r\n\t\t\tc-9.07,11.079-17.689,22.562-25.951,34.262c-14.472,20.498-26.143,42.564-35.19,65.983c-1.373,3.553-2.296,7.279-3.603,11.484\r\n\t\t\tc37.37-7.479,58.951,8.637,63.449,26.02c-49.727,21.335-70.481,81.395-69.906,117.248c11.981-11.936,25.553-19.988,41.504-23.696\r\n\t\t\tc15.791-3.67,31.69-4.637,47.946-2.304c-2.336,2.862-4.907,4.796-7.531,6.658c-7.609,5.396-15.396,10.559-22.833,16.184\r\n\t\t\tc-29.756,22.503-51.12,51.285-63.935,86.35c-0.798,2.185-1.082,4.557-1.929,8.248c25.299-17.506,52.103-25.061,80.859-27.897\r\n\t\t\tc-1.487,3.646-3.44,6.583-5.735,9.226c-12.91,14.868-22.049,31.578-26.162,51.015c-1.65,7.799-4.172,15.434-6.62,23.039\r\n\t\t\tc-8.978,27.879-23.543,52.147-46.495,70.861c-1.534,1.251-3.602,1.848-5.422,2.747c0.573,0.934,1.146,1.868,1.72,2.803\r\n\t\t\tc13.197,4.402,26.837,6.488,40.762,4.594c24.914-3.395,45.18-14.689,58.892-37.116c0.694,3.396,0.76,6.246,0.056,8.89\r\n\t\t\tc-3.42,12.83-9.359,24.356-19.722,32.899c-4.675,3.854-6.544,7.981-5.525,13.772c0.345,1.955,0.232,3.988,0.339,5.985\r\n\t\t\tc1.902,35.563-10.812,65.381-36.445,89.529c-23.313,21.961-50.839,36.284-82.521,42.185c-3.762,0.7-7.492,1.563-11.978,2.505\r\n\t\t\tc13.346,23.651,30.977,40.234,56.397,47.788c19.254,5.723,38.969,5.365,58.521,3.631c12.475-1.106,22.808-7.24,26.355-20.86\r\n\t\t\tc3.352-12.859,6.845-25.683,10.253-38.527c0.543-2.044,0.966-4.119,1.443-6.18c4.743,16.739,7.041,33.972,0.788,49.857\r\n\t\t\tc-13.982,35.532-39.836,58.825-78.21,68.139c7.697,4.58,15.1,8.137,22.732,11.102c2.279,0.886,5.307,0.588,7.813,0.034\r\n\t\t\tc25.684-5.676,51.401-11.229,76.948-17.473c8.43-2.061,16.514-6.219,20.449-14.727c7.207-15.582,17.303-28.958,28.271-42.106\r\n\t\t\tc21.753-26.081,46.348-48.709,75.035-66.826c7.29-4.605,14.961-8.654,22.677-12.521c3.647-1.829,7.853-2.343,10.898,1.573\r\n\t\t\tc2.904,3.733,3.714,7.994,1.11,12.106c-2.105,3.327-4.557,6.584-7.436,9.243c-6.112,5.646-12.82,10.649-18.899,16.328\r\n\t\t\tc-25.654,23.963-48.419,50.477-68.868,78.985c-1.234,1.723-1.898,3.854-3.688,7.589c8.486-0.549,15.374-0.607,22.152-1.495\r\n\t\t\tc41.688-5.455,83.463-8.441,125.5-5.223c13.593,1.041,27.282,1.601,40.242,6.547c3.103,1.184,6.52,2.007,9.11,3.918\r\n\t\t\tc2.124,1.566,4.833,4.905,4.375,6.728c-0.521,2.062-4.089,3.963-6.688,4.729c-2.739,0.808-5.954,0.569-8.866,0.145\r\n\t\t\tc-36.938-5.381-73.707-4.074-110.434,2.158c-34.972,5.937-68.309,17.419-101.8,28.63c-11.908,3.986-18.099,12.316-24.44,22.466\r\n\t\t\tc4.31,1.015,7.822,1.879,11.354,2.663c11.038,2.456,22.206,4.44,33.078,7.486c6.484,1.817,12.363,1.702,18.473-0.726\r\n\t\t\tc17.333-6.89,34.688-13.727,52.059-20.517c3.218-1.257,6.558-2.201,10.779-3.602c1.819,18.721-1.881,35.052-8.269,51.979\r\n\t\t\tc4.262,0.299,7.153,0.735,10.035,0.667c18.962-0.448,37.937-1.729,56.874-1.296c14.852,0.341,28.333-2.535,40.976-10.17\r\n\t\t\tc2.938-1.773,6.308-2.834,10.343-4.604C1356.958,1948.689,1357.533,1952.914,1358.327,1958.738z M2480.617,1191.614\r\n\t\t\tc-0.826,0.171-1.65,0.341-2.478,0.512c-0.112,1.589-0.321,3.177-0.323,4.766c-0.019,20.887-0.266,41.775,0.062,62.656\r\n\t\t\tc0.38,24.288,1.426,48.565,1.841,72.854c0.129,7.545,2.541,12.932,8.712,17.781c26.763,21.036,51.118,44.669,73.503,70.325\r\n\t\t\tc5.728,6.563,11.538,13.053,17.312,19.576c0.558-0.364,1.114-0.729,1.673-1.093\r\n\t\t\tC2543.641,1358.092,2509.181,1276.05,2480.617,1191.614z M2615.023,1743.18c1.616-3.589,2.67-5.189,3.076-6.941\r\n\t\t\tc3.524-15.219,6.834-30.488,10.415-45.693c1.882-7.993,0.853-15.638-0.977-23.527c-20.365-87.899-62.954-164.092-121.694-231.816\r\n\t\t\tc-1.966-2.268-4.288-4.225-6.444-6.325c1.543,4.86,4.025,8.776,6.525,12.681c19.969,31.168,37.181,63.778,51.889,97.758\r\n\t\t\tc23.114,53.396,36.16,109.78,49.63,166.039C2610.273,1717.172,2612.248,1729.198,2615.023,1743.18z M1941.529,2561.386\r\n\t\t\tc0.347,0.599,0.692,1.195,1.041,1.794c0.322,0.044,0.676,0.198,0.962,0.117c23.021-6.556,46.077-12.996,69.048-19.727\r\n\t\t\tc103.436-30.303,204.338-66.791,297.143-122.791c20.484-12.36,40.584-25.359,61.063-38.189\r\n\t\t\tc-0.881-6.592-1.598-11.957-2.473-18.513c-3.705,2.823-6.348,4.731-8.873,6.78c-84.162,68.215-178.499,115.58-284.825,137.77\r\n\t\t\tc-28.366,5.92-56.858,10.968-82.793,24.538C1974.796,2542.073,1958.275,2551.945,1941.529,2561.386z M381.353,1622.727\r\n\t\t\tc-1.448,4.194-2.565,6.85-3.29,9.605c-12.623,48.109-19.396,96.831-19.377,146.777c0.011,26.197,8.91,50.735,9.771,76.514\r\n\t\t\tc6.103,11.18,12.205,22.359,18.308,33.539c1.403-2.076,1.329-3.391,1.062-4.665c-6.1-29.003-9.589-58.394-10.777-87.928\r\n\t\t\tc-1.971-49.003,1.96-97.636,12.255-145.677c0.611-2.853,1.508-6.17,0.635-8.707\r\n\t\t\tC387.818,1636.026,384.732,1630.199,381.353,1622.727z M1151.841,2608.627c-1.854-0.563-3.678-1.268-5.564-1.666\r\n\t\t\tc-43.028-9.08-85.185-21.133-126.281-36.841c-2.736-1.046-5.736-1.632-8.663-1.908c-12.886-1.222-25.789-2.245-38.686-3.353\r\n\t\t\tc-7.121-0.611-14.24-1.246-22.318-1.952C983,2589.414,1083.07,2612.363,1151.841,2608.627z M2632.956,2026.968\r\n\t\t\tc-0.557-0.345-1.112-0.688-1.669-1.032c-0.979,1.275-2.07,2.48-2.918,3.839c-14.171,22.678-31.248,43.241-50.287,61.691\r\n\t\t\tc-15.385,14.909-27.15,31.41-35.325,50.902c-1.866,4.449-4.321,8.651-6.702,13.353c1.841,0.145,2.609,0.457,3.028,0.2\r\n\t\t\tc11.884-7.305,23.796-14.569,35.53-22.107c2.137-1.372,3.705-3.773,5.244-5.91c18.336-25.45,33.431-52.745,45.902-81.491\r\n\t\t\tC2628.506,2040.08,2630.575,2033.456,2632.956,2026.968z M2609.953,1944.287c13.633-35.244,21.212-71.861,25.449-109.368\r\n\t\t\tc-3.478,5.258-5.617,11.133-8.845,16.333c-6.344,10.229-8.121,21.457-8.845,33.102c-0.287,4.618-0.969,9.218-1.576,13.811\r\n\t\t\tC2614.102,1913.541,2612.02,1928.913,2609.953,1944.287z M2250.018,2355.447c31.616-6.512,60.651-22.45,76.035-41.176\r\n\t\t\tC2296.123,2319.436,2273.57,2338.354,2250.018,2355.447z M1506.771,2586.348c-34.78,0-68.846,0-102.91,0\r\n\t\t\tc10.451,2.678,20.96,4.014,31.511,4.816c15.918,1.211,31.957,1.32,47.765,3.32\r\n\t\t\tC1492.642,2595.686,1500.176,2594.35,1506.771,2586.348z M2328.784,1226.337c0.73-0.472,1.463-0.944,2.194-1.416\r\n\t\t\tc-6.834-17.617-14.705-34.662-28.059-49.104c-1.85,7.038-2.966,13.838-3.105,20.655c-0.052,2.574,1.516,5.894,3.447,7.676\r\n\t\t\tC2311.546,1211.787,2320.24,1218.98,2328.784,1226.337z M805.477,2424.002c0.401-0.611,0.804-1.223,1.204-1.834\r\n\t\t\tc-4.466-5.215-8.857-10.496-13.454-15.595c-1.014-1.125-2.713-2.2-4.152-2.281c-12.433-0.697-24.684,0.021-36.316,6.103\r\n\t\t\tC769.451,2418.873,787.71,2420.456,805.477,2424.002z M898.164,2530.753c-0.229,0.474-0.46,0.947-0.689,1.421\r\n\t\t\tc7.013,4.621,14.023,9.241,21.034,13.861c4.667-2.932,8.918-4.203,13.261-4.779c6.049-0.803,12.165-1.084,18.254-1.59\r\n\t\t\tc-4.091-4.25-8.532-6.898-12.979-9.541c-4.739-2.817-9.48-5.629-14.477-8.596c-3.202,12.586-5.685,14.056-16.971,11.059\r\n\t\t\tC903.132,2531.934,900.643,2531.362,898.164,2530.753z M472.35,2107.313c-1.586-6.654-2.724-13.466-4.947-19.898\r\n\t\t\tc-1.088-3.15-3.688-7.156-6.487-8.073c-7.989-2.618-16.432-3.851-26.55-6.024C446.032,2087.576,457.794,2098.632,472.35,2107.313z\r\n\t\t\t M418.146,1554.504c7.438-16.593,14.521-32.204,21.355-47.923c0.69-1.588-0.114-3.825-0.354-8.007\r\n\t\t\tc-11.759,18.137-21.683,34.394-30.042,52.091C412.249,1552,414.619,1553.006,418.146,1554.504z M1392.883,2569.857\r\n\t\t\tc-19.688-3.965-39.643-8.537-55.342,11.43c4.223,0.188,7.729,0.346,11.808,0.527c0.451-8.814,5.885-10.476,12.954-10.597\r\n\t\t\tC1372.501,2571.044,1382.689,2570.337,1392.883,2569.857z M867.31,2491.946c11.4,8.141,29.125,16.523,37.11,17.571\r\n\t\t\tc-6.563-4.838-12.936-8.985-18.644-13.903C880.527,2491.091,875.077,2489.697,867.31,2491.946z M383.338,1985.629\r\n\t\t\tc-0.777,0.569-1.555,1.139-2.333,1.708c5.688,6.201,3.775,18.686,18.661,19.186\r\n\t\t\tC393.633,1998.802,388.485,1992.215,383.338,1985.629z M648.628,2292.556c3.886,12.685,9.452,17.13,18.504,14.813\r\n\t\t\tC660.967,2302.434,655.095,2297.73,648.628,2292.556z M1242.916,2569.266c3.711,1.625,6.781,3.425,10.972,0\r\n\t\t\tC1249.686,2569.266,1246.475,2569.266,1242.916,2569.266z" }),
        React__default['default'].createElement("path", { fill: "#FFFFFF", d: "M2797,1904c-0.837-0.547-1.674-1.094-3.785-2.475c-5.187,59.748-29.874,108.17-79.019,142.484\r\n\t\t\tc-0.702-0.357-1.403-0.716-2.105-1.074c4.02-8.168,8.091-16.313,12.034-24.518c1.873-3.895,3.855-7.795,5.146-11.896\r\n\t\t\tc1.276-4.061,0.805-8.242-3.72-10.207c-4.377-1.9-7.711,0.131-10.166,3.896c-4.184,6.416-8.241,12.92-12.592,19.223\r\n\t\t\tc-15.247,22.092-34.693,40.389-53.712,59.062c-0.646,0.635-1.665,0.888-4.003,2.078c1.313-4.906,2.167-8.652,3.319-12.304\r\n\t\t\tc8.476-26.854,11.148-54.688,14.044-82.485c0.134-1.288,0.405-3.058-0.271-3.854c-5.286-6.239-1.347-11.812,1.013-17.496\r\n\t\t\tc18.508-44.589,29.759-90.918,34.743-138.954c6.079-58.563,1.575-116.251-11.987-173.397c-1.143-4.813-2.216-9.859-2.018-14.744\r\n\t\t\tc2.619-64.425-13.258-124.799-40.327-182.558c-19.784-42.218-40.396-84.05-60.854-125.949c-2.605-5.335-4.123-9.899-1.399-15.83\r\n\t\t\tc1.712-3.728,1.644-8.434,1.737-12.716c0.377-16.988,0.021-34.006,0.821-50.971c1.695-35.996,9.668-70.468,26.67-102.544\r\n\t\t\tc1.009-1.902,1.632-4.009,3.225-8.004c-3.372,1.638-5.357,1.981-6.324,3.163c-26.021,31.811-44.364,67.147-49.205,108.556\r\n\t\t\tc-0.918,7.867-1.384,15.786-2.264,26.082c-5.492-9.584-10.023-17.485-14.549-25.391c-13.235-23.121-26.362-46.306-39.752-69.335\r\n\t\t\tc-5.225-8.987-10.396-9.477-23.034-2.181c-0.104-7.095-0.409-13.54-0.231-19.973c0.156-5.642,1.222-11.271,1.207-16.902\r\n\t\t\tc-0.018-5.893-3.172-9.556-8.351-11.05c-5.681-1.641-10.774,0.063-14.077,4.798c-0.759,1.085-1.338,2.308-1.906,3.509\r\n\t\t\tc-11.796,24.951-23.807,49.761-31.146,76.592c-5.928,21.671-8.043,43.777-9.975,65.979c-0.401,4.604-0.91,9.198-1.522,15.337\r\n\t\t\tc-6.447-3.424-12.06-6.082-17.322-9.307c-3.8-2.326-5.651-5.942-6.418-10.669c-4.548-28.021-11.681-55.322-23.256-81.379\r\n\t\t\tc-11.05-24.871-25.504-47.492-43.523-67.865c-2.195-2.481-4.188-5.144-6.594-8.116c2.496-7.84,5.002-15.71,7.625-23.949\r\n\t\t\tc39.799,0.426,71.759-14.136,93.204-48.035c8.017-12.672,11.455-26.93,10.741-41.815c-0.852-0.424-1.701-0.847-2.554-1.271\r\n\t\t\tc-1.5,1.759-3.487,3.289-4.425,5.309c-9.705,20.904-25.663,36.32-43.761,49.751c-13.091,9.714-28.277,14.397-45.398,17.738\r\n\t\t\tc0.591-3.412,0.632-5.966,1.488-8.207c5.455-14.3,11.082-28.532,16.678-42.777c0.73-1.857,1.679-3.63,2.4-5.49\r\n\t\t\tc2.891-7.436,1.756-12.401-3.563-15.882c-5.57-3.643-11.217-2.445-16.527,3.999c-17.873,21.682-33.131,45.069-45.457,70.346\r\n\t\t\tc-1.42,2.911-3.037,5.728-4.903,9.224c-9.812-6.825-19.232-13-28.161-19.821c-2.708-2.069-4.423-5.748-5.964-8.989\r\n\t\t\tc-26.73-56.202-58.9-109.13-97.427-157.958c-45.176-57.257-96.097-108.938-154.437-152.989\r\n\t\t\tc-78.294-59.12-163.724-104.657-257.281-134.625c-38.701-12.396-78.092-22.191-118.155-28.812\r\n\t\t\tc-23.584-3.896-47.52-5.665-71.286-8.471c-41.534-4.903-83.222-3.448-124.783-1.662c-25.165,1.082-50.292,4.927-75.231,8.834\r\n\t\t\tc-23.94,3.75-47.735,8.659-71.388,13.983c-47.877,10.779-94.079,26.776-138.938,46.619\r\n\t\t\tc-72.011,31.854-139.022,72.037-199.351,122.706c-24.71,20.753-47.639,43.643-71.168,65.782\r\n\t\t\tc-27.277,25.668-50.468,54.896-72.811,84.818c-3.087,4.135-6.174,7.244-11.774,8.132c-5.928,0.939-8.51,4.273-8.238,10.639\r\n\t\t\tc0.34,7.948-3.112,13.896-7.235,20.153c-22.585,34.274-42.651,69.983-60.025,107.189c-1.791,3.835-3.668,7.631-5.505,11.444\r\n\t\t\tc-0.733-0.068-1.467-0.137-2.201-0.206c-1.257-9.354-3.167-18.674-3.655-28.068c-1.764-33.972,4.849-66.209,21.211-96.256\r\n\t\t\tc1.787-3.279,3.16-6.785,4.726-10.187c-0.708-0.446-1.415-0.894-2.122-1.34c-1.693,1.688-3.682,3.167-5.036,5.092\r\n\t\t\tc-17.376,24.704-27.747,52.158-32.181,81.977c-3.386,22.767-2.262,45.115,5.965,67.974c-6.74,6.415-13.49,13.244-20.664,19.596\r\n\t\t\tc-24.44,21.636-49.32,42.783-73.479,64.727c-23.015,20.904-43.429,44.234-59.876,70.729\r\n\t\t\tc-11.15,17.962-19.329,37.188-21.852,58.483c-0.298,2.514-1.255,5.168-2.626,7.293c-3.789,5.875-7.934,11.523-11.996,17.22\r\n\t\t\tc-0.953,1.336-1.953,3.309-3.255,3.616c-7.662,1.809-9.906,7.868-12.655,14.145c-2.07,4.727-6.16,8.225-13.031,11.163\r\n\t\t\tc2.74-10.987,4.782-20.31,7.398-29.465c9.83-34.399,24.8-66.754,39.813-99.079c14.606-31.452,28.187-63.303,35.767-97.305\r\n\t\t\tc4.2-18.843,7.67-37.883,6.91-57.313c-0.625-15.966-2.041-31.882-7.419-47.136c-0.442-1.254-0.667-2.589-1.153-3.823\r\n\t\t\tc-2.577-6.547-6.319-9.274-11.771-8.658c-5.3,0.601-8.576,4.219-9.61,11.105c-0.789,5.255-1.088,10.583-1.862,15.841\r\n\t\t\tc-5.38,36.553-17.832,70.913-32.746,104.471c-6.086,13.693-12.605,27.193-18.979,40.759c-0.82,1.745-1.941,3.349-3.642,6.236\r\n\t\t\tc-15.373-37.075-30.715-72.754-29.764-113.438c-0.996,1.302-2.647,2.489-2.894,3.92c-5.765,33.569-7.705,67.008,7.67,98.792\r\n\t\t\tc4.563,9.436,11.329,17.807,17.799,27.76c-3.919,8.999-8.509,19.313-12.918,29.707c-12.379,29.174-23.027,58.87-28.117,90.344\r\n\t\t\tc-3.7,22.874-3.895,45.746-0.592,68.604c0.694,4.813-0.19,8.232-3.212,11.779c-25.576,30.03-48.222,62.073-66.325,97.21\r\n\t\t\tc-0.28,0.543-0.951,0.887-2.302,2.094c-2.968-13.86-5.198-27.347-8.839-40.44c-3.722-13.385-8.825-26.386-13.389-39.743\r\n\t\t\tc25.728-22.119,38.943-49.368,34.275-83.782c-2.382-17.566-14.913-40.059-27.058-46.559c15.405,28.608,18.179,56.853,7.072,85.69\r\n\t\t\tc-4.535,11.774-10.955,22.598-21.468,31.362c-2.191-3.547-3.96-6.313-5.636-9.138c-10.757-18.123-23.288-34.905-37.843-50.157\r\n\t\t\tc-1.377-1.443-2.615-3.549-4.302-4.051c-2.93-0.871-6.812-1.923-9.085-0.683c-2.327,1.271-4.342,5.179-4.399,7.975\r\n\t\t\tc-0.059,2.938,1.939,6.226,3.769,8.85c26.238,37.637,40.937,79.699,48.493,124.618c6.866,40.817,2.009,80.903-6.801,120.808\r\n\t\t\tc-2.654,12.021-5.143,24.079-7.78,36.104c-0.398,1.816-1.202,3.543-2.358,6.862c-3.06-7.931-5.233-14.541-8.109-20.829\r\n\t\t\tc-8.439-18.455-16.479-37.141-25.937-55.069c-11.954-22.66-28.716-41.604-49.057-57.272c-2.897-2.23-5.923-4.331-9.055-6.216\r\n\t\t\tc-4.008-2.412-7.817-1.547-10.771,1.855c-3.024,3.481-2.77,7.301-0.045,10.959c0.596,0.801,1.242,1.569,1.926,2.297\r\n\t\t\tc27.821,29.584,42.719,65.694,51.505,104.508c7.491,33.095,14.894,66.308,19.913,99.831c4.237,28.294,12.241,55.66,17.147,83.724\r\n\t\t\tc2.112,12.085,4.311,24.154,6.694,37.48c-4.181-0.279-7.734-0.215-11.179-0.795c-21.521-3.625-43.016-2.609-64.501,0.172\r\n\t\t\tc-6.806,0.881-10.904,4.87-11.374,10.596c-0.401,4.893,3.129,8.843,9.555,11.061c15.097,5.211,30.172,10.482,45.228,15.813\r\n\t\t\tc2.424,0.858,4.7,2.134,9.746,4.464c-2.993,1.499-4.592,2.043-5.897,2.992c-17.311,12.592-36.39,21.281-57.821,22.562\r\n\t\t\tc-8.658,0.518-17.553-2.774-26.326-4.415c-3.541-0.661-7.041-1.542-10.56-2.321c0-461.914,0-923.829,0-1385.871\r\n\t\t\tc876.419,0,1752.837,0,2630,0C2797,993.333,2797,1448.666,2797,1904z" }),
        React__default['default'].createElement("path", { fill: "#FFFFFF", d: "M167,1928c11.075,4.41,21.851,9.936,33.287,12.997c23.28,6.233,45.629,3.463,65.449-11.365\r\n\t\t\tc6.372-4.767,12.174-10.295,17.556-16.384c5.398-1.345,10.356,2.33,15.587,4.913c1.504,0.741,2.798,2.922,3.226,4.678\r\n\t\t\tc4.624,19.008,9.056,38.063,13.885,58.57c-4.223-1.639-7.386-3.159-10.716-4.076c-3.451-0.95-7.154-2.136-10.586-1.757\r\n\t\t\tc-6.405,0.705-9.948,7.775-7.31,13.662c0.795,1.771,2.082,3.478,3.533,4.776c12.146,10.875,24.171,21.904,36.717,32.304\r\n\t\t\tc3.999,3.314,7.063,6.645,9.052,11.439c13.733,33.115,30.568,64.484,54.774,91.232c10.25,11.326,21.815,21.465,32.8,32.127\r\n\t\t\tc1.86,1.806,3.802,3.528,4.98,6.879c-3.256-1.086-6.587-1.986-9.754-3.289c-28.272-11.617-53.938-27.593-77.43-47.047\r\n\t\t\tc-12.311-10.195-24.25-20.838-36.352-31.285c-1.26-1.088-2.366-2.391-3.736-3.307c-4.087-2.732-8.607-2.402-11.855,0.803\r\n\t\t\tc-3.216,3.172-4.104,6.815-1.667,10.836c4.145,6.836,8.324,13.651,12.584,20.416c14.43,22.911,30.224,44.85,50.292,63.156\r\n\t\t\tc11.248,10.262,23.798,19.096,36.72,29.332c-16.669,0.482-32.162-3.326-47.626-7.304c-15.725-4.043-31.342-8.402-46.498-17.84\r\n\t\t\tc-0.499,3.639-1.499,5.92-0.962,7.751c17.011,58.072,49.479,102.652,108.253,124.626c17.938,6.706,35.993,6.265,54.063,2.543\r\n\t\t\tc10.368-2.136,19.04-0.575,28.484,4.096c26.011,12.862,53.366,22.463,81.139,30.88c3.6,1.091,7.636,3.063,9.895,5.886\r\n\t\t\tc17.385,21.729,37.248,40.823,59.418,57.577c0.777,0.587,1.361,1.428,2.013,2.125c-3.787,8.235-3.818,8.512-11.319,7.648\r\n\t\t\tc-11.23-1.289-22.388-3.22-33.617-4.514c-30.635-3.529-60.633-0.18-89.174,11.34c-27.334,11.032-48.387,30.243-64.396,54.928\r\n\t\t\tc-4.281,6.6-3.588,11.865,1.634,15.906c5.073,3.927,9.788,3.76,15.102-1.64c15.233-15.479,34.129-23.854,54.643-29.614\r\n\t\t\tc26.037-7.313,52.366-12.619,79.446-13.904c5.593-0.267,11.151-1.249,18.839-2.148c-2.894,4.404-4.695,7.385-6.725,10.2\r\n\t\t\tc-15.799,21.929-30.901,44.253-41.244,69.433c-8.334,20.289-11.793,41.523-12.435,63.291c-0.095,3.246,0.099,7.016,1.665,9.645\r\n\t\t\tc1.472,2.468,4.717,4.586,7.583,5.342c3.947,1.042,6.968-1.608,8.746-5.164c0.729-1.458,1.097-3.149,1.364-4.779\r\n\t\t\tc4.013-24.496,16.788-44.879,31.524-63.869c25.183-32.452,54.338-61.292,84.481-89.121c0.959-0.885,2.054-1.623,3.469-2.729\r\n\t\t\tc3.004,1.238,6.086,2.361,9.042,3.753c20.538,9.67,41.819,17.287,63.621,23.563c5.391,1.552,10.514,4.029,15.755,6.094\r\n\t\t\tc0.618,0.244,1.185,0.625,1.807,0.855c28.336,10.489,50.845,29.18,72.952,49.261c35.676,32.403,75.358,59.313,119.69,78.849\r\n\t\t\tc34.089,15.021,69.792,23.962,106.749,28.15c29.505,3.346,59.118,3.797,88.763,3.371c5.495-0.078,10.985-0.511,18.021-0.854\r\n\t\t\tc-1.952,5.294-3.119,9.378-4.914,13.164c-7.496,15.811-11.014,32.751-14.441,49.723c-1.017,5.036-1.11,10.021,2.644,14.166\r\n\t\t\tc5.625,6.209,16.704,5.43,20.439-2.269c14.026-28.907,37.267-49.935,59.749-71.724c4.329-4.196,8.807-6.838,14.719-7.136\r\n\t\t\tc15.617-0.782,31.239-2.18,46.854-2.09c9.563,0.056,19.096,2.531,28.67,3.692c33.673,4.082,67.358,8.062,101.035,12.106\r\n\t\t\tc1.225,0.147,2.413,0.596,5.145,1.293c-13.854,17.313-30.127,30.054-48.43,41.373c1.698,2.233,2.373,3.911,3.604,4.626\r\n\t\t\tc28.247,16.411,56.576,32.757,88.785,40.354c25.73,6.068,51.446,6.08,76.93-1.754c1.201-0.369,2.53-0.332,5.386-0.674\r\n\t\t\tc-2.167,4.442-3.756,7.885-5.504,11.244c-3.478,6.684-3.071,11.258,1.374,14.145c4.167,2.705,9.542,1.403,14.024-3.693\r\n\t\t\tc17.774-20.206,31.977-42.612,41.077-68.034c4.248-11.865,8.282-23.823,11.896-35.896c1.421-4.75,4.696-4.904,8.35-5.401\r\n\t\t\tc30.377-4.136,60.325-10.394,89.938-18.286c6.681-1.78,13.315-3.729,19.974-5.6c0.264,0.604,0.527,1.209,0.791,1.813\r\n\t\t\tc-6.331,2.803-12.662,5.604-19.642,8.694c2.887,4.867-0.094,7.559-3.449,10.58c-12.375,11.142-25.106,21.973-36.639,33.947\r\n\t\t\tc-23.705,24.619-42.65,52.69-58.797,82.851c-10.578,19.758-19.063,40.296-27.201,61.08c-2.011,5.134-1.657,8.943,2.438,12.461\r\n\t\t\tc-480,0-960,0-1440,0C167,2533.333,167,2230.667,167,1928z" }),
        React__default['default'].createElement("path", { fill: "#FFFFFF", d: "M1615,2836c6.516-10.05,12.911-20.18,19.569-30.135c17.185-25.693,39.23-47.014,61.75-67.844\r\n\t\t\tc27.638-25.563,55.59-50.781,86.365-72.627c2.673-1.896,5.363-3.769,9.085-6.383c11.354,22.628,16.355,45.967,18.741,70.719\r\n\t\t\tc-3.979,1.803-7.506,3.539-11.135,5.022c-36.89,15.092-67.26,38.911-92.718,69.279c-2.157,2.573-5.813,4.847-2.979,10.323\r\n\t\t\tc10.96-9.129,21.193-18.473,32.278-26.662c11.499-8.493,23.529-16.369,35.868-23.595c11.966-7.007,24.616-12.841,38.364-19.909\r\n\t\t\tc2.688,29.44-3.295,56.045-8.904,84.047c27.818-24.342,53.51-102.723,9.912-183.314c11.447-7.299,21.082-16.713,36.036-19.107\r\n\t\t\tc87.794-14.065,175.016-31.002,260.085-57.432c65.386-20.313,128.759-45.257,186.894-82.191\r\n\t\t\tc27.103-17.219,52.25-36.831,75.642-58.768c3.354-3.146,6.774-6.223,10.571-9.705c5.906,8.471,11.623,16.155,16.675,24.255\r\n\t\t\tc1.367,2.191,1.486,5.804,0.896,8.481c-12.944,58.745-38.874,110.273-84.322,150.89c-2.016,1.801-3.583,4.103-6.464,7.457\r\n\t\t\tc15.63-3.202,48.877-35.854,68.522-65.388c17.557-26.396,28.716-55.394,35.168-87.125c7.568,4.015,14.134,8.418,21.344,11.063\r\n\t\t\tc7.376,2.707,15.311,4.319,23.138,5.227c5.879,0.68,10.535-3.475,12.014-8.558c1.597-5.48,0.246-11.11-4.516-14.229\r\n\t\t\tc-25.589-16.756-33.343-42.645-37.207-70.822c-1.134-8.256,1.171-14.341,6.313-20.863c11.322-14.358,21.526-29.596,32.297-44.395\r\n\t\t\tc2.119-2.912,4.319-6.038,7.182-8.094c30.4-21.836,58.634-46.124,84.146-73.541c0.429-0.459,1.114-0.678,2.118-1.266\r\n\t\t\tc0.832,0.679,1.951,1.325,2.727,2.259c14.031,16.876,32.668,24.232,53.881,27.185c26.657,3.708,49.923-4.585,71.885-18.521\r\n\t\t\tc17.92-11.373,33.5-25.405,45.894-42.581c10.904-15.112,20.884-30.896,31.177-46.443c1.412-2.135,2.281-4.629,3.769-7.716\r\n\t\t\tc-2.058-0.681-3.542-1.688-4.912-1.55c-26.308,2.642-51.669-3.302-77.147-8.283c-11.328-2.217-22.705-4.188-35.026-6.446\r\n\t\t\tc1.991-2.842,3.53-5.271,5.299-7.521c13.149-16.75,26.269-33.526,39.606-50.125c1.938-2.41,4.737-4.522,7.58-5.752\r\n\t\t\tc49.81-21.559,79.891-59.334,92.215-111.76c1.048-4.456,1.563-9.037,2.326-13.561c0,298.667,0,597.333,0,896\r\n\t\t\tC2403,2836,2009,2836,1615,2836z" }),
        React__default['default'].createElement("path", { fill: "#FFFFFF", d: "M1000.152,1888.258c-12.284,4.98-22.389,3.535-33.085-1.359c-37.846-17.321-76.124-33.691-114.022-50.897\r\n\t\t\tc-14.226-6.459-27.896-14.149-41.747-21.422c-5.598-2.938-10.697-7.057-16.544-9.249c-13.407-5.026-20.357-15.525-25.457-27.816\r\n\t\t\tc-10.971-26.439-21.815-52.934-32.668-79.423c-2.87-7.003-6.213-13.627-4.632-21.971c0.773-4.082-1.796-9.052-3.572-13.32\r\n\t\t\tc-11.67-28.042-19.47-57.231-24.545-87.044c-4.402-25.855-7.473-51.951-10.624-78.004c-4.004-33.104-4.706-66.408-3.718-99.687\r\n\t\t\tc1.592-53.673,7.203-106.984,19.748-159.251c12.944-53.937,31.188-106.242,56.229-155.756\r\n\t\t\tc22.391-44.273,46.527-87.696,76.386-127.587c30.613-40.898,64.117-79.221,101.918-113.663\r\n\t\t\tc13.294-12.113,26.265-24.71,40.489-35.646c32.472-24.961,66.188-48.201,101.945-68.309\r\n\t\t\tc58.884-33.112,120.819-58.965,185.694-77.81c33.648-9.773,68.063-15.457,102.756-19.897c39.708-5.085,79.554-7.19,119.551-6.385\r\n\t\t\tc57.396,1.157,114.277,7.323,170.062,20.947c47.632,11.633,93.337,29.07,138.175,48.978\r\n\t\t\tc45.561,20.229,88.611,44.744,129.215,73.477c20.358,14.407,40.078,29.815,59.26,45.767\r\n\t\t\tc30.004,24.953,57.534,52.531,83.406,81.783c25.229,28.524,48.149,58.736,68.341,91.021c4.415,7.06,8.2,14.604,13.291,21.133\r\n\t\t\tc24.999,32.064,39.374,69.627,55.289,106.338c15.929,36.743,28.261,74.811,37.621,113.718\r\n\t\t\tc8.025,33.365,12.836,67.324,16.245,101.505c3.378,33.871,4.665,67.802,3.834,101.779c-1.594,65.124-8.986,129.52-26.811,192.383\r\n\t\t\tc-9.912,34.961-22.356,69.059-36.49,102.541c-3.161,7.486-8.114,12.858-15.925,15.427\r\n\t\t\tc-71.308,23.44-137.325,58.016-201.788,95.864c-1.147,0.676-2.459,1.161-3.438,2.024c-9.163,8.073-19.156,7.645-29.761,3.335\r\n\t\t\tc-8.112-3.295-16.813-5.355-23.287-13.318c5.17,0,10.341-0.031,15.51,0.007c38.989,0.288,93.826-32.027,108.045-76.354\r\n\t\t\tc0.605-1.89,1.422-3.799,1.554-5.738c0.374-5.529-2.205-8.231-7.646-7.36c-10.514,1.683-20.543-0.16-30.525-3.128\r\n\t\t\tc-38.928-11.572-70.363-32.876-90.236-69.277c-8.715-15.962-13.559-33.895-12.653-48.429c2.489,0.218,5.002,0.25,7.442,0.679\r\n\t\t\tc25.905,4.548,50.397,0.66,73.415-12.156c1.743-0.971,3.517-1.936,5.106-3.127c6.201-4.646,6.333-7.629,0.292-12.373\r\n\t\t\tc-35.526-27.904-56.907-64.548-67.134-108.156c-1.43-6.09-3.259-12.084-5.323-19.672c20.212,5.75,36.229,17.07,52.6,26.711\r\n\t\t\tc5.411-1.834,4.777-5.27,4.134-9.133c-5.856-35.119-18.793-67.229-40.277-95.765c-1.741-2.313-3.327-4.741-4.389-7.719\r\n\t\t\tc5.853,2.406,10.263,6.573,13.893,11.493c5.139,6.967,9.82,14.271,15.01,21.197c1.197,1.599,3.658,2.249,5.537,3.335\r\n\t\t\tc1.066-2.181,3.203-4.446,3.037-6.53c-2.115-26.535-2.396-53.38-9.636-79.202c-3.665-13.072-8.518-25.948-14.195-38.285\r\n\t\t\tc-7.072-15.364-17.946-27.991-32.271-37.379c-1.373-0.9-2.599-2.031-3.854-3.102c-0.2-0.171-0.199-0.58-0.556-1.741\r\n\t\t\tc6.534-3.43,13.543-4.948,20.786-3.082c7.369,1.897,14.468,4.832,21.75,7.096c2.356,0.731,5.652,1.854,7.189,0.822\r\n\t\t\tc1.446-0.973,1.851-4.654,1.505-6.966c-6.477-43.292-18.937-84.442-43.914-121.042c-1.816-2.662-3.401-5.481-5.709-9.226\r\n\t\t\tc11.615-1.805,21.468,0.75,31.205,3.78c4.119,1.281,7.971,3.413,12.078,4.745c1.713,0.555,4.762,0.765,5.454-0.168\r\n\t\t\tc1.126-1.518,1.495-4.271,1.009-6.209c-7.337-29.214-23.392-52.683-47.253-70.928c-13.088-10.008-27.604-17.344-42.946-23.176\r\n\t\t\tc-2.967-1.128-5.825-2.539-8.487-5.687c3.149-0.313,6.303-0.919,9.448-0.893c16.992,0.146,33.982,0.493,50.975,0.654\r\n\t\t\tc2.777,0.026,5.562-0.526,10.813-1.063c-3.639-4.476-5.444-7.496-7.973-9.686c-38.915-33.68-82.87-57.943-132.997-70.443\r\n\t\t\tc-10.938-2.728-22.021-4.871-34.063-7.51c0.87-3.396,1.469-6.577,2.497-9.611c7.85-23.129,23.402-39.104,45.532-49.034\r\n\t\t\tc3.404-1.527,6.479-3.785,10.042-5.903c-8.545-8.042-47.598-14.929-74.318-13.982c-25.16,0.892-48.961,7.987-74.545,17.612\r\n\t\t\tc3.939-9.827,7.301-17.295,9.923-25.013c2.607-7.673,10.654-12.615,11.595-22.584c-36.686-4.336-70.859,0.686-103.555,16.475\r\n\t\t\tc-0.429-0.724-0.856-1.448-1.285-2.173c6.274-7.745,12.552-15.491,18.824-23.235c-7.306-5.146-14.774-5.523-46.406-3.906\r\n\t\t\tc-15.408,0.788-30.438,3.225-45.121,7.935c-15.045,4.824-28.381,12.896-41.319,22.161c-2.516-1.679-4.723-3.085-6.86-4.589\r\n\t\t\tc-20.664-14.55-43.74-22.604-68.803-24.545c-14.264-1.105-28.622-1.015-42.938-1.398c-2.325-0.063-4.734-0.124-6.97,0.398\r\n\t\t\tc-2.115,0.495-5.605,1.582-5.735,2.723c-0.249,2.188,0.96,4.992,2.438,6.847c4.713,5.913,9.827,11.511,14.108,18.354\r\n\t\t\tc-16.821-5.365-32.872-12.14-50.276-14.242c-17.537-2.12-35.037-3.74-54.061-0.487c0.755,2.706,0.748,5.5,2.119,7.145\r\n\t\t\tc9.204,11.034,13.094,24.531,18.565,37.843c-4.271,1.865-7.439-0.579-10.56-1.746c-18.827-7.046-38.128-11.889-58.232-13.253\r\n\t\t\tc-24.216-1.643-47.804,2.523-71.19,8.063c-2.38,0.563-4.226,3.384-6.317,5.155c1.815,1.689,3.353,4.014,5.497,4.967\r\n\t\t\tc14.874,6.61,28.099,15.271,37.516,28.9c6.466,9.359,11.291,19.4,13.027,30.762c-16.063,3.96-31.645,7.282-46.921,11.661\r\n\t\t\tc-45.31,12.989-84.877,36.464-120.394,67.113c-0.757,0.653-1.805,1.197-2.166,2.03c-0.857,1.979-2.075,4.212-1.771,6.122\r\n\t\t\tc0.165,1.03,3.102,1.991,4.9,2.282c1.918,0.313,3.97-0.316,5.963-0.338c16.661-0.17,33.322-0.328,49.984-0.394\r\n\t\t\tc2.222-0.009,4.446,0.519,7.709,0.929c-2.613,4.298-6.498,4.477-9.566,5.626c-28.446,10.666-52.259,27.396-70.837,51.76\r\n\t\t\tc-10.012,13.13-14.025,28.589-19.47,43.542c-1.629,4.474,1.293,6.946,6.055,5.498c3.491-1.062,6.771-2.799,10.207-4.061\r\n\t\t\tc10.394-3.814,20.999-6.35,33.416-5.083c-1.399,2.77-2.254,5.104-3.628,7.079c-25.53,36.646-38.502,77.976-45.251,121.586\r\n\t\t\tc-0.454,2.938,0.668,6.123,1.056,9.191c3.084-0.687,6.223-1.191,9.238-2.098c6.682-2.006,13.202-4.622,19.97-6.227\r\n\t\t\tc7.134-1.69,11.54-0.601,20.815,3.463c-0.784,1.072-1.276,2.339-2.199,2.922c-23.556,14.876-36.372,37.398-44.908,62.957\r\n\t\t\tc-7.342,21.979-9.871,44.813-11.743,67.747c-0.705,8.636-1.437,17.274-1.778,25.929c-0.079,1.994,1.384,4.049,2.137,6.076\r\n\t\t\tc2.211-0.997,5.168-1.409,6.494-3.101c4.104-5.227,7.229-11.228,11.398-16.392c4.957-6.142,10.601-11.729,15.946-17.554\r\n\t\t\tc0.633,0.45,1.265,0.898,1.896,1.35c-1.188,2.015-2.185,4.174-3.593,6.02c-21.885,28.661-35.368,60.892-41.161,96.416\r\n\t\t\tc-0.838,5.139-0.873,5.133,2.616,10.354c17.144-8.962,32.844-21.201,53.087-26.791c-0.479,2.827-0.709,4.884-1.189,6.88\r\n\t\t\tc-1.479,6.149-2.971,12.299-4.609,18.407c-10.84,40.404-31.341,74.692-64.178,101.146c-1.297,1.046-2.649,2.026-3.879,3.146\r\n\t\t\tc-3.138,2.855-3.054,5.992,0.16,8.467c3.412,2.627,7.1,5.008,10.949,6.934c21.496,10.749,44.093,14.687,67.923,10.461\r\n\t\t\tc2.295-0.407,4.597-0.79,6.909-1.064c0.583-0.068,1.221,0.322,2.273,0.633c1.806,8.627-0.281,17.013-2.948,25.194\r\n\t\t\tc-12.45,38.21-36.801,65.994-73.719,82.114c-11.536,5.037-23.612,9.057-35.763,12.373c-6.232,1.701-13.189,1.287-19.784,0.998\r\n\t\t\tc-7.974-0.35-10.739,2.21-7.979,9.65c2.882,7.769,5.793,15.786,10.291,22.646c19.2,29.282,46.653,47.184,80.567,54.66\r\n\t\t\tc11.223,2.475,23.062,2.147,35.536,3.179c-1.886,1.479-3.348,3.039-5.137,3.963c-11.915,6.147-24.35,10.73-37.762,12.427\r\n\t\t\tc-7.785,0.983-9.558,4.13-5.393,10.556c3.229,4.979,7.425,9.358,11.405,13.813\r\n\t\t\tC993.985,1882.777,996.773,1885.068,1000.152,1888.258z" }),
        React__default['default'].createElement("path", { fill: "#FFFFFF", d: "M1358.327,1958.738c-0.794-5.824-1.369-10.049-2.159-15.844c-4.035,1.77-7.404,2.829-10.343,4.604\r\n\t\t\tc-12.644,7.635-26.124,10.511-40.977,10.17c-18.938-0.435-37.911,0.848-56.874,1.296c-2.881,0.068-5.772-0.368-10.035-0.667\r\n\t\t\tc6.389-16.929,10.089-33.26,8.27-51.979c-4.223,1.399-7.563,2.345-10.779,3.602c-17.372,6.79-34.726,13.627-52.059,20.517\r\n\t\t\tc-6.108,2.428-11.987,2.543-18.473,0.726c-10.872-3.046-22.041-5.03-33.078-7.486c-3.53-0.784-7.044-1.648-11.354-2.663\r\n\t\t\tc6.342-10.148,12.532-18.479,24.44-22.466c33.49-11.211,66.827-22.693,101.8-28.63c36.726-6.232,73.494-7.539,110.433-2.158\r\n\t\t\tc2.913,0.426,6.127,0.663,8.867-0.145c2.598-0.766,6.167-2.667,6.687-4.729c0.459-1.821-2.25-5.16-4.375-6.728\r\n\t\t\tc-2.592-1.911-6.009-2.734-9.109-3.918c-12.96-4.946-26.65-5.506-40.242-6.547c-42.037-3.22-83.813-0.232-125.5,5.223\r\n\t\t\tc-6.779,0.888-13.666,0.946-22.152,1.495c1.789-3.734,2.453-5.866,3.688-7.589c20.449-28.51,43.214-55.022,68.868-78.985\r\n\t\t\tc6.079-5.679,12.787-10.683,18.898-16.328c2.88-2.659,5.329-5.916,7.437-9.243c2.603-4.112,1.794-8.373-1.111-12.106\r\n\t\t\tc-3.047-3.916-7.251-3.402-10.897-1.573c-7.716,3.866-15.387,7.915-22.677,12.521c-28.688,18.117-53.282,40.745-75.035,66.826\r\n\t\t\tc-10.968,13.148-21.063,26.524-28.271,42.106c-3.936,8.509-12.02,12.666-20.448,14.727c-25.548,6.244-51.266,11.797-76.948,17.473\r\n\t\t\tc-2.509,0.554-5.534,0.853-7.814-0.034c-7.633-2.965-15.035-6.521-22.731-11.102c38.374-9.313,64.228-32.605,78.21-68.138\r\n\t\t\tc6.253-15.888,3.955-33.118-0.788-49.858c-0.479,2.061-0.901,4.136-1.443,6.18c-3.409,12.847-6.901,25.668-10.253,38.527\r\n\t\t\tc-3.549,13.62-13.882,19.754-26.355,20.86c-19.553,1.734-39.267,2.092-58.521-3.631c-25.422-7.554-43.053-24.137-56.397-47.787\r\n\t\t\tc4.483-0.942,8.216-1.806,11.978-2.506c31.683-5.899,59.209-20.224,82.521-42.185c25.635-24.148,38.349-53.966,36.445-89.529\r\n\t\t\tc-0.105-1.997,0.005-4.03-0.339-5.985c-1.019-5.791,0.851-9.918,5.525-13.772c10.36-8.543,16.302-20.069,19.722-32.899\r\n\t\t\tc0.704-2.644,0.639-5.491-0.056-8.89c-13.712,22.427-33.979,33.723-58.893,37.116c-13.924,1.896-27.563-0.19-40.761-4.594\r\n\t\t\tc-0.573-0.935-1.146-1.868-1.72-2.803c1.82-0.899,3.888-1.496,5.422-2.747c22.952-18.714,37.518-42.982,46.495-70.861\r\n\t\t\tc2.448-7.605,4.97-15.24,6.62-23.039c4.112-19.437,13.252-36.146,26.162-51.015c2.295-2.643,4.248-5.58,5.734-9.226\r\n\t\t\tc-28.757,2.838-55.561,10.394-80.858,27.898c0.847-3.692,1.131-6.064,1.929-8.248c12.813-35.064,34.178-63.848,63.934-86.351\r\n\t\t\tc7.438-5.625,15.225-10.786,22.833-16.184c2.624-1.862,5.196-3.796,7.532-6.658c-16.256-2.333-32.156-1.366-47.947,2.304\r\n\t\t\tc-15.95,3.708-29.521,11.763-41.504,23.696c-0.575-35.854,20.182-95.913,69.907-117.248c-4.498-17.383-26.079-33.498-63.449-26.02\r\n\t\t\tc1.307-4.205,2.229-7.933,3.603-11.484c9.049-23.419,20.72-45.485,35.19-65.983c8.262-11.699,16.88-23.183,25.951-34.262\r\n\t\t\tc4.59-5.604,10.473-10.174,15.907-15.058c2.399-2.155,5.141-3.931,9.283-7.049c-24.771-7.442-47.852-7.444-71.587-2.389\r\n\t\t\tc17.062-21.478,37.096-38.76,61.617-50.61c24.323-11.756,50.856-14.695,78.238-18.515c-4.252-5.929-9.414-8.24-14.382-10.692\r\n\t\t\tc-17.315-8.548-36.025-11.677-54.96-13.814c-7.819-0.883-15.66-1.578-23.936-2.403c9.222-12.002,40.506-27.725,68.781-35.327\r\n\t\t\tc25.342-6.815,51.091-8.226,78.481-5.468c-0.601-16.21-4.486-30.399-10.356-44.173c-5.775-13.55-14.818-24.901-24.773-36.104\r\n\t\t\tc45.465-8.782,83.687,8.047,120.395,32.462c3.35-5.703,2.089-11.016,1.43-16.016c-2.14-16.244-6.071-32.063-12.344-47.248\r\n\t\t\tc-0.87-2.104-1.807-4.184-3.391-7.842c22.557,2.892,42.474,9.767,62.091,17.646c19.462,7.817,37.575,18.199,55.438,31.382\r\n\t\t\tc5.513-25.437-7.256-42.232-21.621-58.914c36.313,3.247,65.871,20.821,94.126,42.345c22.716-17.962,46.909-32.376,74.692-39.834\r\n\t\t\tc6.02-1.615,12.202-2.618,18.311-3.903c0.434,0.628,0.865,1.257,1.3,1.885c-2.197,2.619-4.348,5.278-6.6,7.849\r\n\t\t\tc-8.962,10.232-15.884,21.494-16.91,35.432c-0.329,4.462,0.39,9.002,0.676,14.394c13.337-7.853,24.988-15.592,37.412-21.778\r\n\t\t\tc12.481-6.215,25.588-11.276,38.688-16.117c13.06-4.826,26.525-8.436,41.826-10.521c-9.163,23.212-16.352,45.666-15.848,72.196\r\n\t\t\tc5.246-3.194,8.563-5.104,11.77-7.185c20.049-13.004,41.491-22.678,65.103-27.063c13.176-2.448,26.438-3.479,39.76-1.094\r\n\t\t\tc1.851,0.33,3.635,1.018,7.331,2.081c-23.758,21.748-34.46,48.146-36.934,79.932c26.837-2.283,52.577-1.374,77.838,5.443\r\n\t\t\tc25.316,6.832,48.73,17.404,71.21,34.725c-4.134,0.765-6.46,1.262-8.81,1.619c-17.102,2.604-34.33,4.571-51.272,7.973\r\n\t\t\tc-12.375,2.484-23.965,7.662-34.668,16.742c4.366,3.095,8.711,2.698,12.69,3.382c11.149,1.915,22.392,3.382,33.453,5.705\r\n\t\t\tc37.883,7.958,66.93,30.171,92.377,58.014c0.609,0.667,0.809,1.711,1.497,3.245c-12.216-1.124-23.882-2.695-35.591-3.135\r\n\t\t\tc-11.6-0.436-22.95,2.022-34.808,4.791c41.193,37.711,69.995,82.241,89.261,135.086c-28.145-5.651-51.159-1.753-65.408,25.091\r\n\t\t\tc49.258,23.747,66.033,66.787,71.783,117.232c-25.59-24.869-56.902-28.192-90.648-24.718c2.771,2.068,5.446,4.278,8.325,6.184\r\n\t\t\tc15.88,10.498,31.146,21.747,44.541,35.38c19.244,19.584,32.956,42.596,42.473,68.219c0.651,1.756,0.827,3.688,1.348,6.105\r\n\t\t\tc-34.127-18.104-61.862-27.483-81.444-27.221c1.557,2.596,2.484,4.883,4.034,6.616c14.983,16.76,24.9,35.881,29.627,58.048\r\n\t\t\tc2.482,11.648,6.893,22.973,11.271,34.111c8.184,20.82,20.962,38.557,37.876,53.265c2.39,2.078,4.69,4.258,8.136,7.396\r\n\t\t\tc-20.204,6.364-38.663,7.646-57.435,1.781c-18.536-5.791-33.18-16.519-42.515-34.184c-0.615,0.26-1.229,0.52-1.844,0.779\r\n\t\t\tc0,2.363-0.479,4.849,0.078,7.074c3.306,13.207,9.112,25.233,19.794,33.954c5.105,4.169,6.354,8.557,5.797,14.679\r\n\t\t\tc-3.171,34.873,7.191,65.312,31.581,90.407c23.367,24.044,51.812,39.362,84.692,46.273c4.225,0.888,8.459,1.729,12.681,2.631\r\n\t\t\tc0.224,0.048,0.368,0.472,1.026,1.374c-12.013,21.349-28.535,37.615-52.588,45.658c-20.441,6.837-41.465,6.537-62.344,4.576\r\n\t\t\tc-11.995-1.127-22.15-7.145-25.574-20.442c-3.313-12.868-6.899-25.665-10.322-38.505c-0.569-2.137-0.919-4.331-2.362-6.327\r\n\t\t\tc-5.165,25.615-5.608,50.509,11.795,72.533c16.187,20.482,34.325,38.289,63.583,42.604\r\n\t\t\tc-20.755,15.234-40.686,24.328-64.528,15.607c-27.032-9.888-53.458-20.938-72.512-44.077c-1.548-1.879-3.832-3.15-7.709-6.253\r\n\t\t\tc1.678,27.009,6.338,50.702,20.351,73.894c-42.902-0.945-83.805-3.473-126.016-5.403c1.729-3.135,2.568-5.175,3.846-6.89\r\n\t\t\tc14.745-19.791,28.733-39.947,38.942-62.663c6.938-15.439,15.767-30.025,23.58-45.083c2.077-4.003,5.256-8.39,0.293-12.578\r\n\t\t\tc-3.327-2.811-6.953-1.485-12.444,4.699c-28.104,31.652-59.089,60.443-89.646,89.625c-11.276,10.77-24.255,19.78-36.689,29.288\r\n\t\t\tc-2.175,1.662-5.489,2.435-8.314,2.532c-8.647,0.299-17.365-0.552-25.96,0.177c-18.178,1.54-36.323,3.553-54.421,5.851\r\n\t\t\tc-11.556,1.466-22.95,4.204-34.51,5.625c-16.689,2.052-32.433,7.284-48,13.183c-10.888,4.125-21.733,8.416-32.346,13.198\r\n\t\t\tc-11.197,5.047-22.432,10.184-33.026,16.353C1381.177,1959.664,1370.227,1958.656,1358.327,1958.738z M1612.929,1608.359\r\n\t\t\tc5.671-8.718,11.729-14.689,18.005-20.381c15.549-14.105,31.22-28.079,46.929-42.008c19.863-17.611,41.259-32.656,67.191-40.216\r\n\t\t\tc7.954-2.318,13.908-7.627,18.667-14.364c11.693-16.559,16.479-35.08,13.606-54.941c-3.815-26.396-19.665-50.997-55.924-49.277\r\n\t\t\tc-10.906,0.519-21.903,2.127-32.543,4.594c-16.386,3.801-30.144-0.702-42.972-10.554c-12.902-9.907-22.839-22.456-31.322-36.035\r\n\t\t\tc-10.229-16.374-19.286-33.478-29.312-49.985c-7.419-12.217-14.687-24.692-23.551-35.837\r\n\t\t\tc-41.319-51.951-125.519-51.792-166.674,1.471c-8.312,10.754-15.16,22.675-22.269,34.312\r\n\t\t\tc-11.801,19.323-22.889,39.09-35.013,58.203c-7.33,11.558-16.708,21.592-27.988,29.647c-11.95,8.536-24.713,12.016-39.579,9.056\r\n\t\t\tc-13.64-2.717-27.318-5.572-41.572-4.334c-22.108,1.921-36.639,13.537-44.055,33.695c-8.168,22.201-5.59,43.873,6.16,64.452\r\n\t\t\tc6.042,10.582,14.411,17.853,26.385,21.424c16.771,5.003,32.022,13.353,45.519,24.467c13.881,11.432,27.402,23.315,40.792,35.324\r\n\t\t\tc12.145,10.891,23.948,22.161,35.771,33.402c1.941,1.848,3.2,4.411,5.494,7.661c-17.504-5.531-33.273-10.738-49.183-15.485\r\n\t\t\tc-17.703-5.282-35.706-8.312-54.228-4.938c-10.728,1.953-21.054,4.993-32.137,11.669c4.129,1.339,6.208,2.449,8.366,2.633\r\n\t\t\tc6.969,0.595,14.011,0.466,20.943,1.298c33.249,3.988,65.199,12.893,96.532,24.684c16.076,6.049,28.267,14.848,38.797,29.107\r\n\t\t\tc12.699,17.194,21.879,34.902,27.964,55.363c15.717,52.841,43.849,99.862,72.114,146.686c1.252,2.072,3.375,3.621,5.816,6.169\r\n\t\t\tc2.736-3.917,4.979-6.753,6.818-9.83c6.496-10.868,12.934-21.772,19.25-32.746c24.679-42.875,46.092-87.136,58.313-135.416\r\n\t\t\tc1.238-4.896,4.938-9.306,8.018-13.565c6.434-8.905,13.605-17.299,19.712-26.412c3.9-5.823,8.62-9.792,14.99-12.504\r\n\t\t\tc41.661-17.722,84.473-30.707,130.104-32.558c3.368-0.137,6.7-1.169,11.119-1.98c-1.868-2.05-2.377-3.031-3.176-3.417\r\n\t\t\tc-16.197-7.854-33.328-12.497-51.244-10.01c-14.758,2.051-29.313,5.911-43.758,9.732\r\n\t\t\tC1638.016,1599.733,1626.516,1603.98,1612.929,1608.359z M1822.743,1219.515c-4.522,0.94-6.716,1.183-8.767,1.856\r\n\t\t\tc-26.435,8.696-53.591,13.566-81.368,13.982c-27.322,0.409-54.677,0.366-81.985-0.465c-23.962-0.729-48.025-1.99-70.318-12.64\r\n\t\t\tc-1.55-0.74-3.602-0.43-7.931-0.854c3.635,5.5,5.743,9.515,8.618,12.873c7.101,8.298,16.505,13.276,26.383,17.569\r\n\t\t\tc6.187,2.688,6.341,3.471,4.343,9.944c-1.474,4.771-3.343,9.438-4.522,14.279c-6.965,28.539-2.093,54.016,18.999,75.717\r\n\t\t\tc9.422,9.693,21.446,14.479,33.229,19.757c59.464,26.637,105.069-19.121,115.975-56.771c0.603-2.077,1.073-4.193,1.606-6.293\r\n\t\t\tc3.472,6.595,5.386,13.225,6.438,19.988c1.088,6.996,1.34,14.122,1.957,21.191c0.829,0.22,1.659,0.438,2.488,0.657\r\n\t\t\tc1.842-2.482,4.019-4.785,5.468-7.479c7.608-14.149,10.987-29.153,8.88-45.272c-0.581-4.441-0.469-8.975-0.712-14.285\r\n\t\t\tc3.883,0,6.519-0.333,9.043,0.058c11.465,1.771,22.613-0.216,33.617-2.93c8.552-2.108,15.998-6.542,22.128-12.994\r\n\t\t\tc7.458-7.851,11.943-19.859,10.443-29.373c-14.205,9.894-28.131,19.707-46.152,19.707c-17.242,0-34.277-1.05-51.742-6.904\r\n\t\t\tc8.616-4.772,16.326-8.606,23.57-13.181C1809.456,1233.215,1816.895,1228.959,1822.743,1219.515z M1180.681,1308.559\r\n\t\t\tc2.575,17.236,11.583,30.888,23.012,42.655c21.517,22.155,47.313,33.26,78.567,25.375c9.578-2.416,18.736-6.688,27.88-10.595\r\n\t\t\tc22.786-9.732,36.396-27.219,41.896-51.132c3.774-16.413,1.34-32.397-4.012-48.11c-3.997-11.734-3.976-11.813,6.938-16.832\r\n\t\t\tc9.204-4.232,17.467-9.738,23.894-17.64c2.369-2.915,5.506-5.813,3.967-11.593c-3.458,1.202-6.505,2.11-9.435,3.308\r\n\t\t\tc-12.425,5.074-25.312,8.71-38.688,9.099c-37.268,1.083-74.553,2.253-111.826,2.104c-26.711-0.108-52.872-5.319-78.327-13.661\r\n\t\t\tc-2.3-0.754-4.771-0.984-7.163-1.457c-0.349,0.724-0.695,1.447-1.045,2.172c11.637,12.578,26.816,20.292,43.339,28.405\r\n\t\t\tc-16.878,5.681-32.696,6.651-48.675,7.228c-19.512,0.701-34.786-9.166-50.646-20.563c-0.236,2.914-0.615,4.186-0.393,5.339\r\n\t\t\tc3.757,19.427,14.828,32.551,34.076,37.758c10.914,2.953,22.124,4.673,33.589,2.938c2.734-0.414,5.629,0.228,9.371,0.434\r\n\t\t\tc-0.59,6.396-1.198,11.635-1.533,16.892c-1.025,16.05,2.296,31.108,10.82,44.834c1.167,1.88,3.283,3.169,4.96,4.731\r\n\t\t\tc0.704-0.289,1.408-0.577,2.111-0.865C1173.581,1335.42,1174.183,1321.536,1180.681,1308.559z M1399.229,1084.548\r\n\t\t\tc7.651,15.065,16.518,28.933,21.859,44.046c5.412,15.309,7.34,31.849,11.038,48.979c1.886-2.301,3.789-3.749,4.505-5.646\r\n\t\t\tc2.684-7.109,5.257-14.286,7.36-21.586c4.083-14.17,0.118-27.014-7.932-38.616c-8.518-12.278-20.485-20.62-33.771-27.127\r\n\t\t\tC1401.539,1084.229,1400.453,1084.548,1399.229,1084.548z M1560.387,1084.263c-20.466,4.432-41.881,26.065-46.62,45.577\r\n\t\t\tc-3.554,14.635,2.807,38.811,13.563,47.814c0.867-6.604,1.476-12.403,2.421-18.148c1.341-8.157,2.296-16.454,4.55-24.368\r\n\t\t\tc4.213-14.797,11.554-28.228,19.96-41.068C1556.047,1091.337,1557.724,1088.532,1560.387,1084.263z M1800.684,1379.993\r\n\t\t\tc2.459,7.592,5.665,14.706,11.797,20.039C1811.215,1391.819,1807.084,1385.235,1800.684,1379.993z" }),
        React__default['default'].createElement("path", { fill: "#FFFFFF", d: "M2480.617,1191.614c28.563,84.436,63.022,166.478,100.3,247.377c-0.558,0.364-1.115,0.729-1.673,1.093\r\n\t\t\tc-5.772-6.523-11.584-13.014-17.312-19.576c-22.385-25.656-46.741-49.289-73.503-70.325c-6.171-4.851-8.583-10.236-8.712-17.781\r\n\t\t\tc-0.415-24.287-1.461-48.564-1.841-72.854c-0.326-20.881-0.079-41.771-0.061-62.656c0-1.589,0.211-3.177,0.322-4.766\r\n\t\t\tC2478.967,1191.955,2479.791,1191.785,2480.617,1191.614z" }),
        React__default['default'].createElement("path", { fill: "#FFFFFF", d: "M2615.023,1743.18c-2.775-13.98-4.75-26.008-7.58-37.828c-13.47-56.259-26.516-112.643-49.629-166.039\r\n\t\t\tc-14.709-33.979-31.92-66.591-51.89-97.758c-2.5-3.903-4.981-7.819-6.524-12.681c2.156,2.103,4.479,4.059,6.443,6.325\r\n\t\t\tc58.74,67.726,101.33,143.917,121.694,231.815c1.828,7.892,2.858,15.535,0.978,23.528c-3.581,15.205-6.892,30.475-10.415,45.693\r\n\t\t\tC2617.694,1737.989,2616.641,1739.591,2615.023,1743.18z" }),
        React__default['default'].createElement("path", { fill: "#FFFFFF", d: "M1941.529,2561.386c16.746-9.439,33.267-19.313,50.291-28.221c25.935-13.57,54.427-18.618,82.793-24.538\r\n\t\t\tc106.326-22.188,200.663-69.555,284.824-137.77c2.526-2.049,5.168-3.957,8.873-6.78c0.875,6.556,1.593,11.921,2.474,18.513\r\n\t\t\tc-20.479,12.83-40.577,25.829-61.063,38.189c-92.804,56-193.706,92.488-297.142,122.791c-22.971,6.729-46.026,13.17-69.048,19.727\r\n\t\t\tc-0.286,0.081-0.641-0.073-0.962-0.117C1942.223,2562.581,1941.876,2561.982,1941.529,2561.386z" }),
        React__default['default'].createElement("path", { fill: "#FFFFFF", d: "M381.353,1622.727c3.381,7.474,6.466,13.301,8.585,19.459c0.873,2.538-0.023,5.855-0.635,8.709\r\n\t\t\tc-10.295,48.039-14.227,96.673-12.255,145.676c1.188,29.534,4.678,58.925,10.777,87.928c0.268,1.274,0.342,2.589-1.062,4.665\r\n\t\t\tc-6.103-11.18-12.205-22.359-18.308-33.539c-0.86-25.777-9.76-50.315-9.771-76.514c-0.02-49.946,6.754-98.668,19.377-146.777\r\n\t\t\tC378.787,1629.575,379.903,1626.921,381.353,1622.727z" }),
        React__default['default'].createElement("path", { fill: "#FFFFFF", d: "M1151.841,2608.627c-68.771,3.736-168.841-19.213-201.514-45.72c8.078,0.707,15.196,1.341,22.317,1.952\r\n\t\t\tc12.896,1.106,25.801,2.131,38.687,3.353c2.927,0.277,5.927,0.862,8.663,1.908c41.098,15.708,83.253,27.761,126.281,36.841\r\n\t\t\tC1148.163,2607.359,1149.986,2608.064,1151.841,2608.627z" }),
        React__default['default'].createElement("path", { fill: "#FFFFFF", d: "M2632.956,2026.968c-2.381,6.488-4.45,13.112-7.196,19.443c-12.472,28.746-27.565,56.041-45.902,81.491\r\n\t\t\tc-1.539,2.137-3.106,4.538-5.243,5.91c-11.734,7.539-23.646,14.804-35.53,22.107c-0.419,0.257-1.188-0.057-3.028-0.2\r\n\t\t\tc2.38-4.7,4.836-8.903,6.702-13.353c8.175-19.492,19.939-35.993,35.325-50.902c19.039-18.45,36.116-39.015,50.287-61.692\r\n\t\t\tc0.848-1.356,1.938-2.563,2.918-3.838C2631.844,2026.279,2632.398,2026.623,2632.956,2026.968z" }),
        React__default['default'].createElement("path", { fill: "#FFFFFF", d: "M2609.953,1944.287c2.064-15.374,4.147-30.746,6.185-46.124c0.607-4.593,1.289-9.191,1.576-13.811\r\n\t\t\tc0.724-11.645,2.501-22.874,8.845-33.102c3.228-5.2,5.367-11.075,8.844-16.333\r\n\t\t\tC2631.165,1872.426,2623.586,1909.043,2609.953,1944.287z" }),
        React__default['default'].createElement("path", { fill: "#FFFFFF", d: "M2250.018,2355.447c23.554-17.094,46.105-36.012,76.035-41.176\r\n\t\t\tC2310.669,2332.997,2281.634,2348.936,2250.018,2355.447z" }),
        React__default['default'].createElement("path", { fill: "#FFFFFF", d: "M1506.771,2586.348c-6.597,8.002-14.131,9.338-23.636,8.137c-15.808-1.998-31.847-2.108-47.765-3.319\r\n\t\t\tc-10.551-0.804-21.061-2.14-31.511-4.816C1437.927,2586.348,1471.991,2586.348,1506.771,2586.348z" }),
        React__default['default'].createElement("path", { fill: "#FFFFFF", d: "M2328.784,1226.337c-8.544-7.354-17.238-14.55-25.521-22.188c-1.933-1.782-3.499-5.102-3.446-7.676\r\n\t\t\tc0.14-6.817,1.257-13.616,3.104-20.655c13.353,14.441,21.224,31.486,28.058,49.104\r\n\t\t\tC2330.247,1225.393,2329.516,1225.865,2328.784,1226.337z" }),
        React__default['default'].createElement("path", { fill: "#FFFFFF", d: "M805.477,2424.002c-17.766-3.546-36.024-5.129-52.719-13.607c11.633-6.08,23.884-6.8,36.316-6.103\r\n\t\t\tc1.439,0.081,3.14,1.156,4.152,2.281c4.596,5.099,8.988,10.38,13.454,15.595C806.279,2422.779,805.878,2423.391,805.477,2424.002z\r\n\t\t\t" }),
        React__default['default'].createElement("path", { fill: "#FFFFFF", d: "M898.164,2530.753c2.479,0.608,4.968,1.18,7.435,1.835c11.286,2.997,13.769,1.528,16.971-11.059\r\n\t\t\tc4.995,2.967,9.736,5.777,14.477,8.596c4.445,2.643,8.888,5.291,12.979,9.541c-6.089,0.506-12.205,0.787-18.253,1.59\r\n\t\t\tc-4.344,0.576-8.595,1.85-13.262,4.779c-7.011-4.62-14.021-9.24-21.034-13.861C897.704,2531.7,897.935,2531.227,898.164,2530.753z\r\n\t\t\t" }),
        React__default['default'].createElement("path", { fill: "#FFFFFF", d: "M472.35,2107.313c-14.555-8.682-26.316-19.736-37.984-33.998c10.118,2.176,18.561,3.407,26.55,6.025\r\n\t\t\tc2.8,0.917,5.397,4.923,6.487,8.073C469.626,2093.848,470.764,2100.658,472.35,2107.313z" }),
        React__default['default'].createElement("path", { fill: "#FFFFFF", d: "M418.146,1554.504c-3.527-1.498-5.897-2.504-9.04-3.839c8.358-17.697,18.282-33.954,30.042-52.091\r\n\t\t\tc0.239,4.182,1.044,6.419,0.354,8.007C432.667,1522.3,425.585,1537.911,418.146,1554.504z" }),
        React__default['default'].createElement("path", { fill: "#FFFFFF", d: "M1392.883,2569.857c-10.191,0.479-20.382,1.187-30.58,1.36c-7.069,0.121-12.503,1.781-12.953,10.597\r\n\t\t\tc-4.079-0.183-7.586-0.34-11.809-0.527C1353.24,2561.32,1373.193,2565.895,1392.883,2569.857z" }),
        React__default['default'].createElement("path", { fill: "#FFFFFF", d: "M867.31,2491.946c7.769-2.249,13.219-0.855,18.468,3.668c5.708,4.918,12.08,9.064,18.644,13.903\r\n\t\t\tC896.435,2508.471,878.71,2500.087,867.31,2491.946z" }),
        React__default['default'].createElement("path", { fill: "#FFFFFF", d: "M383.338,1985.629c5.147,6.586,10.295,13.173,16.328,20.893c-14.886-0.5-12.974-12.982-18.661-19.185\r\n\t\t\tC381.783,1986.768,382.561,1986.198,383.338,1985.629z" }),
        React__default['default'].createElement("path", { fill: "#FFFFFF", d: "M648.628,2292.556c6.467,5.177,12.339,9.877,18.504,14.813\r\n\t\t\tC658.08,2309.686,652.514,2305.239,648.628,2292.556z" }),
        React__default['default'].createElement("path", { fill: "#FFFFFF", d: "M1242.916,2569.266c3.559,0,6.77,0,10.972,0C1249.697,2572.689,1246.627,2570.891,1242.916,2569.266z" }),
        React__default['default'].createElement("path", { fill: "#B8B8B8", d: "M1822.743,1219.515c-5.849,9.444-13.287,13.7-20.315,18.14c-7.244,4.574-14.953,8.408-23.569,13.181\r\n\t\t\tc17.465,5.854,34.5,6.904,51.741,6.904c18.022,0,31.948-9.813,46.153-19.707c1.5,9.514-2.985,21.522-10.444,29.373\r\n\t\t\tc-6.13,6.452-13.575,10.886-22.128,12.994c-11.004,2.714-22.151,4.701-33.616,2.93c-2.524-0.391-5.16-0.058-9.043-0.058\r\n\t\t\tc0.242,5.312,0.131,9.844,0.712,14.285c2.106,16.119-1.271,31.124-8.88,45.272c-1.449,2.694-3.626,4.997-5.469,7.48\r\n\t\t\tc-0.828-0.22-1.658-0.438-2.487-0.658c-0.617-7.069-0.869-14.195-1.957-21.191c-1.053-6.765-2.966-13.395-6.438-19.987\r\n\t\t\tc-0.533,2.099-1.005,4.215-1.606,6.293c-10.904,37.649-56.512,83.407-115.975,56.771c-11.782-5.278-23.807-10.063-33.229-19.757\r\n\t\t\tc-21.093-21.701-25.965-47.177-18.999-75.717c1.181-4.84,3.05-9.509,4.522-14.279c1.998-6.475,1.843-7.257-4.343-9.944\r\n\t\t\tc-9.878-4.293-19.282-9.271-26.383-17.568c-2.875-3.359-4.983-7.374-8.618-12.873c4.329,0.424,6.381,0.112,7.931,0.854\r\n\t\t\tc22.293,10.648,46.356,11.911,70.318,12.64c27.31,0.832,54.663,0.875,81.984,0.466c27.778-0.417,54.936-5.287,81.368-13.983\r\n\t\t\tC1816.027,1220.696,1818.221,1220.455,1822.743,1219.515z M1642.833,1258.476c-9.71-2.902-10.091-2.891-13.655,3.659\r\n\t\t\tc-5.003,9.19-7.878,19.061-8.329,29.532c-1.859,43.199,34.33,76.525,77.983,71.878c48.449-5.157,76.443-62.62,50.59-103.847\r\n\t\t\tc-4.271-6.813-5.582-7.064-13.141-2.517c16.993,29.788,17.051,52.7,0.188,74.217c-14.807,18.892-39.447,26.963-62.593,20.502\r\n\t\t\tc-20.688-5.774-38.006-24.156-39.981-43.028c8.354,1.792,16.767,3.265,22.166-5.623c3.267-5.376,3.084-10.816-0.443-15.968\r\n\t\t\tc-5.707-8.333-13.855-7.275-22.734-4.309C1633.608,1273.169,1638.521,1266.36,1642.833,1258.476z" }),
        React__default['default'].createElement("path", { fill: "#B8B8B8", d: "M1180.681,1308.559c-6.498,12.979-7.1,26.861-7.324,40.819c-0.703,0.288-1.407,0.576-2.111,0.865\r\n\t\t\tc-1.677-1.563-3.793-2.854-4.96-4.731c-8.524-13.726-11.847-28.785-10.82-44.834c0.335-5.257,0.943-10.496,1.533-16.892\r\n\t\t\tc-3.742-0.206-6.637-0.849-9.371-0.435c-11.465,1.736-22.675,0.018-33.589-2.937c-19.248-5.207-30.319-18.331-34.076-37.758\r\n\t\t\tc-0.224-1.153,0.155-2.425,0.393-5.339c15.86,11.396,31.136,21.265,50.646,20.563c15.979-0.575,31.797-1.547,48.675-7.228\r\n\t\t\tc-16.521-8.113-31.701-15.827-43.339-28.405c0.35-0.725,0.696-1.448,1.045-2.172c2.393,0.473,4.863,0.703,7.163,1.457\r\n\t\t\tc25.455,8.342,51.616,13.553,78.327,13.661c37.273,0.149,74.56-1.021,111.826-2.104c13.378-0.389,26.265-4.024,38.688-9.099\r\n\t\t\tc2.93-1.196,5.977-2.104,9.435-3.309c1.539,5.781-1.597,8.679-3.967,11.594c-6.427,7.9-14.688,13.406-23.894,17.64\r\n\t\t\tc-10.912,5.018-10.935,5.097-6.938,16.832c5.352,15.713,7.787,31.697,4.012,48.11c-5.5,23.912-19.109,41.398-41.896,51.132\r\n\t\t\tc-9.144,3.905-18.302,8.179-27.88,10.595c-31.256,7.885-57.052-3.22-78.567-25.375\r\n\t\t\tC1192.264,1339.445,1183.256,1325.795,1180.681,1308.559z M1220.551,1258.396c-9.515-3.24-9.908-3.272-13.74,4.293\r\n\t\t\tc-11.965,23.625-11.262,47.237,2.873,69.389c14.372,22.522,35.813,32.955,62.707,31.742\r\n\t\t\tc49.351-2.227,80.556-57.972,56.607-101.169c-4.009-7.231-4.723-7.442-13.577-3.699c16.244,25.97,16.876,51.825-3.81,75.356\r\n\t\t\tc-16.37,18.622-37.797,24.434-61.697,16.843c-20.373-6.47-33.109-20.669-39.619-42.581c9.891,2.088,18.286,3.547,23.697-5.335\r\n\t\t\tc3.046-5,3.147-10.215,0.088-15.142c-5.554-8.936-13.961-8.336-23.248-5.155C1211.358,1272.9,1217.021,1266.037,1220.551,1258.396\r\n\t\t\tz" }),
        React__default['default'].createElement("path", { fill: "#B8B8B8", d: "M1399.229,1084.548c1.226,0,2.312-0.319,3.061,0.048c13.286,6.507,25.255,14.849,33.771,27.127\r\n\t\t\tc8.05,11.604,12.015,24.446,7.932,38.616c-2.104,7.3-4.677,14.476-7.36,21.586c-0.716,1.897-2.619,3.347-4.505,5.646\r\n\t\t\tc-3.698-17.13-5.626-33.671-11.038-48.979C1415.745,1113.48,1406.88,1099.613,1399.229,1084.548z" }),
        React__default['default'].createElement("path", { fill: "#B8B8B8", d: "M1560.387,1084.263c-2.663,4.271-4.34,7.074-6.128,9.807c-8.407,12.842-15.747,26.271-19.96,41.068\r\n\t\t\tc-2.254,7.914-3.209,16.211-4.55,24.368c-0.945,5.745-1.554,11.546-2.421,18.148c-10.756-9.006-17.115-33.181-13.563-47.814\r\n\t\t\tC1518.506,1110.328,1539.921,1088.693,1560.387,1084.263z" }),
        React__default['default'].createElement("path", { fill: "#FFFFFF", d: "M1642.833,1258.476c-4.312,7.886-9.225,14.693-9.95,24.498c8.879-2.968,17.027-4.024,22.734,4.309\r\n\t\t\tc3.527,5.15,3.71,10.592,0.443,15.968c-5.399,8.888-13.813,7.415-22.166,5.623c1.977,18.872,19.293,37.254,39.981,43.028\r\n\t\t\tc23.146,6.461,47.786-1.61,62.593-20.502c16.862-21.517,16.806-44.429-0.188-74.216c7.559-4.55,8.868-4.299,13.141,2.516\r\n\t\t\tc25.854,41.227-2.141,98.688-50.59,103.847c-43.653,4.647-79.844-28.679-77.983-71.878c0.451-10.473,3.326-20.342,8.329-29.532\r\n\t\t\tC1632.742,1255.585,1633.123,1255.572,1642.833,1258.476z" }),
        React__default['default'].createElement("path", { fill: "#FFFFFF", d: "M1220.551,1258.396c-3.529,7.641-9.191,14.504-9.719,24.541c9.287-3.18,17.694-3.778,23.248,5.156\r\n\t\t\tc3.061,4.926,2.958,10.142-0.088,15.142c-5.411,8.882-13.807,7.423-23.697,5.335c6.51,21.912,19.246,36.11,39.619,42.581\r\n\t\t\tc23.9,7.591,45.327,1.779,61.697-16.843c20.686-23.531,20.054-49.388,3.81-75.356c8.854-3.743,9.568-3.532,13.577,3.698\r\n\t\t\tc23.947,43.198-7.258,98.943-56.607,101.17c-26.895,1.213-48.334-9.22-62.707-31.742c-14.135-22.15-14.838-45.765-2.873-69.39\r\n\t\t\tC1210.643,1255.124,1211.036,1255.156,1220.551,1258.396z" }),
        React__default['default'].createElement("path", { fill: "#FFFFFF", d: "M1172,1220.035c200.604,0,401.205,0,601.904,0c0,213.857,0,427.751,0,641.805\r\n\t\t\tc-200.57,0-401.238,0-601.904,0C1172,1647.984,1172,1434.027,1172,1220.035z M1603.607,1613.72\r\n\t\t\tc0.604-1.493,0.856-2.211,1.179-2.896c4.499-9.574,11.918-16.858,19.526-23.789c20.654-18.813,41.159-37.834,62.604-55.72\r\n\t\t\tc14.008-11.686,29.439-21.974,47.359-26.896c13.257-3.641,22.76-11.175,29.244-22.968c6.805-12.373,9.834-25.505,9.25-39.741\r\n\t\t\tc-1.007-24.515-12.502-41.943-34.515-52.124c-8.871-4.104-18.823-4.579-28.429-2.937c-7.481,1.278-14.633,4.417-22.1,5.867\r\n\t\t\tc-10.852,2.109-21.704,2.707-32.295-2.144c-14.9-6.825-25.581-18.596-35.491-30.835c-16.587-20.48-27.96-44.304-40.987-67.061\r\n\t\t\tc-5.848-10.215-11.721-20.612-19.069-29.729c-17.36-21.542-39.202-36.047-67.38-39.961c-19.646-2.729-38.572-0.46-56.792,6.846\r\n\t\t\tc-25.935,10.401-43.255,30.222-56.834,53.818c-11.424,19.853-22.33,40.021-34.319,59.524\r\n\t\t\tc-9.144,14.87-19.822,28.609-33.948,39.511c-14.801,11.422-30.78,13.844-48.485,9.42c-9.107-2.275-18.337-5.341-27.576-5.583\r\n\t\t\tc-29.02-0.761-52.228,21.242-54.532,50.181c-1.516,19.009,3.506,36.237,13.823,52.001c3.992,6.101,9.377,10.588,16.681,12.789\r\n\t\t\tc6.497,1.958,12.879,4.442,19.075,7.225c18.684,8.391,35.057,20.189,49.884,34.271c6.994,6.643,14.383,12.866,21.541,19.338\r\n\t\t\tc12.08,10.923,24.411,21.593,36.038,32.981c5.032,4.93,8.576,11.381,12.796,17.142c-0.454,0.424-0.909,0.849-1.363,1.271\r\n\t\t\tc-4.793-2.146-9.472-4.614-14.402-6.379c-14.536-5.203-29.07-10.451-43.796-15.078c-19.171-6.021-38.691-8.315-58.457-2.766\r\n\t\t\tc-5.413,1.521-10.685,3.542-16.021,5.334c0.126,0.456,0.252,0.911,0.379,1.367c4.628,0.946,9.224,2.121,13.892,2.793\r\n\t\t\tc10.304,1.482,20.735,2.232,30.946,4.17c12.211,2.314,24.516,4.732,36.295,8.588c18.452,6.038,36.5,13.313,54.712,20.081\r\n\t\t\tc5.488,2.04,9.318,5.778,12.552,10.733c4.984,7.64,10.459,15.001,16.204,22.093c6.688,8.254,14.188,15.867,15.077,27.341\r\n\t\t\tc0.229,2.932,1.392,5.812,2.271,8.669c9.64,31.367,22.285,61.523,37.905,90.335c11.47,21.154,23.988,41.738,36.011,62.594\r\n\t\t\tc3.649,6.332,5.326,6.549,8.83,0.502c12.071-20.831,24.809-41.33,35.775-62.732c10.729-20.941,20.109-42.624,29.084-64.394\r\n\t\t\tc4.851-11.76,7.443-24.435,11.39-36.589c1.773-5.467,3.526-11.256,6.757-15.871c7.032-10.05,15.095-19.374,22.56-29.129\r\n\t\t\tc3.608-4.717,6.453-9.697,12.504-12.344c26.861-11.746,54.351-21.48,82.982-27.923c6.711-1.51,13.232-4.293,20-5.021\r\n\t\t\tc11.406-1.227,22.939-1.27,34.418-1.834c1.544-0.075,3.082-0.295,5.854-0.567c-1.912-1.224-2.657-1.795-3.48-2.21\r\n\t\t\tc-17.352-8.749-35.996-9.202-54.672-7.606c-19.742,1.688-38.005,9.361-56.438,16.014\r\n\t\t\tC1619.74,1606.539,1612.133,1610.133,1603.607,1613.72z" }),
        React__default['default'].createElement("path", { fill: "#FFFFFF", d: "M1390.283,1637.845c-10.585-15.346-18.934-31.745-24.803-49.368\r\n\t\t\tc-10.742-32.255-11.925-65.541-8.882-98.877c2.632-28.833,6.869-57.551,11.312-86.177c3.724-23.999,8.254-47.904,13.411-71.637\r\n\t\t\tc3.398-15.644,9.559-30.486,17.614-44.452c19.648-34.066,51.195-49.536,90.311-44.68c32.277,4.008,53.605,22.458,67.971,50.397\r\n\t\t\tc10.852,21.105,17.408,43.712,21.021,66.976c6.646,42.779,13.428,85.591,18.074,128.612c4.034,37.354,1.995,74.712-12.657,110.136\r\n\t\t\tc-5.376,12.993-12.188,25.396-18.345,38.066c-0.775-0.331-1.552-0.661-2.326-0.991c12.76-22.635,23.676-45.813,26.74-71.993\r\n\t\t\tc3.012-25.714,4.541-51.343,0.836-77.173c-2.511,20.462-5.857,40.716-13.979,59.778c-8.146,19.12-17.451,37.451-38.174,48.721\r\n\t\t\tc-5.434-22.781-10.723-44.955-16.01-67.128c-0.558,0.07-1.113,0.142-1.672,0.211c0.186,3.006,0.34,6.016,0.561,9.019\r\n\t\t\tc2.777,37.713,5.667,75.418,8.321,113.139c3.109,44.2-7.739,85.674-25.777,125.475c-7.069,15.599-15.743,30.469-23.729,45.646\r\n\t\t\tc-0.906,1.722-2.091,3.296-3.741,5.862c-4.396-7.686-8.402-14.529-12.259-21.458c-19.871-35.697-34.901-73.281-39.245-114.088\r\n\t\t\tc-2.083-19.567-1.241-39.59-0.158-59.319c1.816-33.092,4.889-66.115,7.411-99.169c0.117-1.526,0.015-3.069,0.015-4.605\r\n\t\t\tc-0.542-0.055-1.085-0.108-1.627-0.164c-5.236,21.977-10.475,43.952-15.977,67.039c-9.01-6.223-16.572-11.457-21.979-19.279\r\n\t\t\tc-17.006-24.607-25.608-52.143-28.598-81.652c-0.245-2.418-0.563-4.828-1.477-7.201c-3.56,25.962-2.127,51.746,1.061,77.67\r\n\t\t\tC1366.782,1591.654,1378.213,1614.767,1390.283,1637.845z M1567.188,1443.688c-2.33-18.445-3.826-36.725-13.091-53.104\r\n\t\t\tc-3.721-6.577-9.026-11.498-16.413-13.837c-7.082-2.243-12.796,0.252-15.134,7.296c-1.346,4.05-2.177,8.447-2.265,12.708\r\n\t\t\tc-0.442,21.385,5.041,41.186,16.788,59.145c1.198,1.832,2.75,3.437,4.848,6.021c0-2.971-0.078-4.584,0.015-6.187\r\n\t\t\tc0.418-7.326,3.449-13.33,9.986-16.818c5.879-3.138,10.044,0.584,13.835,4.623\r\n\t\t\tC1565.842,1443.621,1566.068,1443.574,1567.188,1443.688z M1411.983,1460.703c1.016-1.184,2.275-2.232,3.008-3.57\r\n\t\t\tc3.667-6.702,7.852-13.222,10.641-20.285c6.331-16.029,9.302-32.735,5.696-49.885c-2.223-10.571-9.411-13.625-19.175-8.976\r\n\t\t\tc-8.314,3.959-13.163,10.998-16.58,19.196c-6.103,14.639-7.837,30.212-9.614,45.766c-0.037,0.327,0.489,0.718,0.764,1.094\r\n\t\t\tc6.475-5.918,9.851-7.519,13.824-5.429C1409.113,1443.121,1411.709,1450.85,1411.983,1460.703z" }),
        React__default['default'].createElement("path", { fill: "#FFFFFF", d: "M1218.063,1475.771c34.363,13.337,62.349,34.694,84.09,64.267c-1.605-1.256-3.182-2.552-4.82-3.761\r\n\t\t\tc-13.53-9.976-26.924-20.145-40.66-29.827c-9.926-6.998-21.177-11.234-33.168-13.224c-8.714-1.443-15.326-6.019-20.83-12.679\r\n\t\t\tc-14.615-17.688-16.224-45.829-3.659-65.076c8.397-12.862,20.729-17.588,35.337-15.729c9.009,1.146,18.075,3.34,26.604,6.464\r\n\t\t\tc17.662,6.472,34.332,4.645,51.497-2.221c15.461-6.185,27.815-16.12,39.394-27.519c3.523-3.469,7.151-6.831,11.233-9.981\r\n\t\t\tc-15.668,49.145-27.449,98.724-22.968,152.083c-3.063-3.063-5.09-5.167-7.199-7.188c-12.607-12.072-28.506-18.173-44.314-24.471\r\n\t\t\tc-11.291-4.498-22.98-8.306-33.629-14.028c-9.888-5.313-18.249-13.067-18.184-25.938c0.037-7.338,3.83-12.469,10.538-14.882\r\n\t\t\tc6.735-2.426,13.738-4.033,21-1.769c0.876,0.273,2.017-0.303,3.035-0.484c-0.362-1.203-0.411-2.655-1.138-3.573\r\n\t\t\tc-6.802-8.606-15.969-12.405-26.719-12.104c-14.861,0.417-25.499,8.164-32.586,20.693c-6.784,11.994-8.189,24.518-1.217,37.128\r\n\t\t\tc0.563,1.017,1.218,1.998,1.952,2.896C1213.83,1477.52,1216.069,1480.18,1218.063,1475.771z" }),
        React__default['default'].createElement("path", { fill: "#FFFFFF", d: "M1613.662,1517.415c3.686-52.184-8.025-101.687-23.442-151.084c1.3,1.103,2.648,2.15,3.893,3.313\r\n\t\t\tc5.963,5.573,11.922,11.152,17.836,16.779c14.172,13.484,31.854,19.738,50.372,23.855c9.71,2.159,19.109-1.224,28.449-3.777\r\n\t\t\tc8.814-2.412,17.609-5.171,26.6-6.616c18.136-2.916,31.951,4.868,39.818,21.456c10.01,21.103,5.684,47.752-10.858,63.235\r\n\t\t\tc-3.738,3.499-8.763,6.891-13.632,7.7c-21.526,3.577-39.068,14.771-55.95,27.471c-7.452,5.605-14.677,11.515-22.012,17.277\r\n\t\t\tc-1.269,0.994-2.569,1.944-4.582,2.194c4.022-4.502,8.252-8.839,12.032-13.536c15.07-18.723,35.468-30.6,55.406-42.964\r\n\t\t\tc5.127-3.18,11.426-4.472,17.619-6.792c1.578,4.251,3.967,1.82,6.209-1.18c6.311-8.438,7.559-17.82,5.434-27.978\r\n\t\t\tc-5.271-25.195-31.856-39.918-53.318-29.109c-4.033,2.03-7.329,5.602-10.764,8.688c-0.779,0.702-0.713,2.347-1.035,3.557\r\n\t\t\tc1.185,0.07,2.423,0.4,3.547,0.171c8.337-1.708,16.359-0.594,23.598,3.649c8.005,4.693,10.21,15.976,5.026,23.734\r\n\t\t\tc-5.652,8.459-12.528,15.324-22.562,18.827c-10.524,3.675-20.729,8.265-31.131,12.309\r\n\t\t\tC1643.017,1495.284,1626.444,1502.938,1613.662,1517.415z" }),
        React__default['default'].createElement("path", { fill: "#B8B8B8", d: "M1606.499,1617.13c8.525-3.587,16.133-7.181,24.012-10.022c18.434-6.651,36.695-14.326,56.438-16.014\r\n\t\tc18.676-1.596,37.319-1.143,54.672,7.606c0.823,0.415,1.568,0.987,3.48,2.21c-2.771,0.272-4.311,0.492-5.854,0.567\r\n\t\tc-11.479,0.564-23.012,0.607-34.418,1.834c-6.768,0.729-13.289,3.512-20,5.021c-28.633,6.44-56.121,16.177-82.982,27.923\r\n\t\tc-6.051,2.646-8.896,7.627-12.504,12.344c-7.465,9.755-15.527,19.079-22.56,29.129c-3.229,4.615-4.982,10.404-6.757,15.871\r\n\t\tc-3.945,12.154-6.539,24.829-11.39,36.589c-8.975,21.77-18.354,43.451-29.084,64.394c-10.967,21.402-23.704,41.901-35.774,62.732\r\n\t\tc-3.505,6.047-5.181,5.83-8.83-0.502c-12.022-20.854-24.541-41.438-36.011-62.594c-15.622-28.812-28.267-58.968-37.905-90.335\r\n\t\tc-0.879-2.858-2.042-5.737-2.271-8.669c-0.89-11.474-8.391-19.087-15.077-27.341c-5.745-7.092-11.22-14.453-16.205-22.093\r\n\t\tc-3.232-4.955-7.063-8.693-12.551-10.733c-18.212-6.77-36.261-14.043-54.712-20.081c-11.779-3.854-24.084-6.271-36.295-8.588\r\n\t\tc-10.211-1.938-20.642-2.688-30.946-4.17c-4.668-0.672-9.264-1.848-13.892-2.793c-0.126-0.456-0.252-0.911-0.379-1.367\r\n\t\tc5.337-1.792,10.608-3.813,16.021-5.334c19.765-5.551,39.286-3.257,58.457,2.766c14.726,4.627,29.259,9.875,43.796,15.078\r\n\t\tc4.932,1.765,9.609,4.232,14.402,6.379c0.454-0.424,0.909-0.849,1.363-1.271c-4.221-5.761-7.764-12.212-12.797-17.142\r\n\t\tc-11.627-11.39-23.957-22.06-36.037-32.981c-7.158-6.472-14.547-12.695-21.541-19.338c-14.827-14.082-31.2-25.882-49.885-34.271\r\n\t\tc-6.194-2.781-12.578-5.267-19.074-7.225c-7.304-2.201-12.688-6.688-16.681-12.789c-10.317-15.764-15.338-32.993-13.823-52.001\r\n\t\tc2.306-28.938,25.514-50.94,54.532-50.181c9.239,0.242,18.468,3.308,27.576,5.583c17.705,4.424,33.685,2.002,48.485-9.42\r\n\t\tc14.125-10.9,24.805-24.641,33.947-39.511c11.99-19.504,22.896-39.673,34.32-59.524c13.579-23.599,30.899-43.417,56.834-53.818\r\n\t\tc18.219-7.306,37.146-9.575,56.792-6.846c28.178,3.914,50.021,18.419,67.381,39.961c7.35,9.116,13.223,19.515,19.069,29.729\r\n\t\tc13.027,22.757,24.4,46.578,40.986,67.061c9.911,12.239,20.592,24.01,35.492,30.835c10.59,4.85,21.443,4.253,32.295,2.144\r\n\t\tc7.467-1.45,14.617-4.589,22.1-5.867c9.604-1.644,19.558-1.167,28.429,2.937c22.012,10.181,33.508,27.609,34.514,52.124\r\n\t\tc0.584,14.236-2.444,27.368-9.249,39.741c-6.484,11.793-15.987,19.327-29.244,22.968c-17.921,4.922-33.353,15.21-47.359,26.896\r\n\t\tc-21.443,17.886-41.948,36.906-62.604,55.72c-7.607,6.931-15.026,14.215-19.525,23.789\r\n\t\tC1607.355,1614.919,1607.104,1615.637,1606.499,1617.13z M1393.174,1641.255c-12.068-23.078-23.501-46.189-26.755-72.666\r\n\t\tc-3.187-25.924-4.62-51.708-1.06-77.67c0.912,2.373,1.23,4.783,1.476,7.201c2.989,29.511,11.592,57.045,28.598,81.651\r\n\t\tc5.406,7.823,12.968,13.059,21.979,19.28c5.502-23.087,10.739-45.063,15.977-67.039c0.542,0.056,1.085,0.109,1.627,0.164\r\n\t\tc0,1.536,0.103,3.079-0.015,4.605c-2.521,33.054-5.595,66.077-7.411,99.169c-1.083,19.729-1.925,39.752,0.158,59.318\r\n\t\tc4.343,40.808,19.374,78.392,39.245,114.088c3.856,6.93,7.863,13.773,12.259,21.458c1.649-2.565,2.835-4.141,3.741-5.861\r\n\t\tc7.985-15.18,16.66-30.05,23.729-45.646c18.038-39.801,28.889-81.274,25.777-125.475c-2.654-37.722-5.544-75.427-8.321-113.14\r\n\t\tc-0.221-3.003-0.375-6.012-0.56-9.018c0.558-0.07,1.113-0.141,1.671-0.211c5.288,22.173,10.575,44.346,16.01,67.128\r\n\t\tc20.723-11.271,30.028-29.601,38.174-48.721c8.121-19.063,11.469-39.316,13.979-59.778c3.704,25.83,2.175,51.459-0.837,77.173\r\n\t\tc-3.064,26.181-13.98,49.358-26.74,71.993c0.774,0.33,1.551,0.66,2.325,0.991c6.156-12.672,12.97-25.073,18.346-38.067\r\n\t\tc14.652-35.423,16.691-72.781,12.656-110.135c-4.646-43.021-11.429-85.833-18.073-128.613\r\n\t\tc-3.613-23.263-10.171-45.869-21.021-66.975c-14.364-27.94-35.693-46.391-67.971-50.398c-39.115-4.855-70.662,10.613-90.312,44.681\r\n\t\tc-8.056,13.966-14.215,28.81-17.613,44.452c-5.157,23.731-9.688,47.638-13.411,71.637c-4.442,28.626-8.679,57.344-11.312,86.177\r\n\t\tc-3.042,33.336-1.859,66.622,8.883,98.877C1374.242,1609.51,1382.589,1625.909,1393.174,1641.255z M1220.953,1479.181\r\n\t\tc-1.993,4.409-4.232,1.749-6.413-0.919c-0.734-0.897-1.39-1.881-1.952-2.896c-6.973-12.61-5.566-25.134,1.217-37.128\r\n\t\tc7.088-12.529,17.725-20.276,32.586-20.693c10.75-0.302,19.918,3.497,26.72,12.104c0.726,0.918,0.773,2.37,1.137,3.572\r\n\t\tc-1.018,0.184-2.159,0.76-3.035,0.485c-7.262-2.266-14.265-0.657-21,1.768c-6.708,2.414-10.501,7.544-10.538,14.883\r\n\t\tc-0.064,12.869,8.296,20.623,18.185,25.938c10.647,5.724,22.337,9.53,33.629,14.028c15.809,6.298,31.708,12.397,44.313,24.471\r\n\t\tc2.109,2.02,4.137,4.124,7.199,7.187c-4.48-53.358,7.3-102.938,22.968-152.083c-4.082,3.151-7.71,6.515-11.232,9.982\r\n\t\tc-11.577,11.397-23.934,21.334-39.395,27.518c-17.165,6.865-33.835,8.692-51.497,2.222c-8.527-3.124-17.595-5.317-26.604-6.465\r\n\t\tc-14.608-1.858-26.939,2.865-35.336,15.729c-12.565,19.247-10.957,47.389,3.659,65.076c5.503,6.66,12.115,11.233,20.829,12.679\r\n\t\tc11.991,1.988,23.242,6.225,33.168,13.223c13.736,9.685,27.131,19.854,40.66,29.827c1.641,1.209,3.215,2.505,4.82,3.762\r\n\t\tC1283.302,1513.876,1255.317,1492.518,1220.953,1479.181z M1616.554,1520.825c12.782-14.479,29.354-22.131,46.554-28.818\r\n\t\tc10.4-4.044,20.604-8.634,31.131-12.309c10.031-3.503,16.907-10.368,22.561-18.827c5.184-7.76,2.979-19.041-5.025-23.734\r\n\t\tc-7.237-4.243-15.262-5.357-23.599-3.649c-1.124,0.229-2.362-0.101-3.547-0.171c0.323-1.211,0.256-2.854,1.036-3.557\r\n\t\tc3.434-3.086,6.729-6.657,10.763-8.688c21.462-10.809,48.047,3.914,53.319,29.109c2.125,10.156,0.876,19.538-5.435,27.978\r\n\t\tc-2.241,3-4.631,5.431-6.209,1.18c-6.192,2.32-12.491,3.612-17.618,6.792c-19.939,12.364-40.336,24.241-55.406,42.964\r\n\t\tc-3.781,4.697-8.01,9.034-12.033,13.536c2.013-0.25,3.314-1.2,4.582-2.195c7.335-5.763,14.561-11.671,22.012-17.276\r\n\t\tc16.882-12.7,34.424-23.895,55.95-27.471c4.87-0.811,9.894-4.201,13.632-7.7c16.542-15.483,20.868-42.134,10.859-63.235\r\n\t\tc-7.868-16.588-21.685-24.372-39.819-21.456c-8.989,1.445-17.784,4.204-26.599,6.616c-9.34,2.555-18.74,5.937-28.45,3.777\r\n\t\tc-18.517-4.117-36.2-10.371-50.372-23.855c-5.914-5.627-11.873-11.206-17.836-16.78c-1.243-1.162-2.592-2.211-3.892-3.313\r\n\t\tC1608.528,1419.139,1620.239,1468.642,1616.554,1520.825z" }),
        React__default['default'].createElement("path", { fill: "#B8B8B8", d: "M1570.08,1447.098c-1.12-0.112-1.348-0.065-1.432-0.154c-3.791-4.039-7.955-7.762-13.834-4.623\r\n\t\tc-6.537,3.487-9.569,9.491-9.987,16.817c-0.093,1.604-0.015,3.216-0.015,6.188c-2.098-2.585-3.647-4.188-4.848-6.021\r\n\t\tc-11.747-17.959-17.23-37.759-16.788-59.144c0.088-4.262,0.919-8.658,2.265-12.708c2.339-7.044,8.052-9.539,15.134-7.296\r\n\t\tc7.387,2.339,12.692,7.26,16.414,13.837C1566.253,1410.373,1567.749,1428.651,1570.08,1447.098z" }),
        React__default['default'].createElement("path", { fill: "#B8B8B8", d: "M1414.875,1464.113c-0.274-9.854-2.87-17.582-11.438-22.089c-3.975-2.091-7.351-0.489-13.824,5.429\r\n\t\tc-0.274-0.376-0.801-0.768-0.765-1.094c1.777-15.555,3.513-31.127,9.614-45.767c3.417-8.198,8.266-15.237,16.58-19.196\r\n\t\tc9.765-4.648,16.953-1.596,19.175,8.977c3.606,17.147,0.636,33.854-5.696,49.885c-2.788,7.063-6.974,13.583-10.641,20.285\r\n\t\tC1417.15,1461.881,1415.891,1462.931,1414.875,1464.113z" })));
};

var IconModule = /*#__PURE__*/Object.freeze({
    __proto__: null,
    FarmIcon: Icon$p,
    GroupsIcon: Icon$o,
    HamburgerIcon: Icon$n,
    HamburgerCloseIcon: Icon$m,
    HomeIcon: Icon$l,
    IfoIcon: Icon$k,
    InfoIcon: Icon$j,
    LanguageIcon: Icon$i,
    LogoIcon: Logo$1,
    MoonIcon: Icon$h,
    MoreIcon: Icon$g,
    NftIcon: Icon$f,
    PoolIcon: Icon$e,
    SunIcon: Icon$d,
    TelegramIcon: Icon$c,
    TicketIcon: Icon$b,
    TradeIcon: Icon$a,
    TwitterIcon: Icon$9,
    AuditIcon: Icon$8,
    NestIcon: Icon$7
});

var MenuButton = styled__default['default'](Button)(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"], ["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
MenuButton.defaultProps = {
    variant: "text",
    size: "sm",
};
var templateObject_1$d;

var StyledLink = styled__default['default'](reactRouterDom.Link)(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 156px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 156px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Logo = function (_a) {
    var isPushed = _a.isPushed, togglePush = _a.togglePush, isDark = _a.isDark, href = _a.href;
    var isAbsoluteUrl = href.startsWith("http");
    var innerLogo = (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement(Icon$H, { className: "mobile-icon" }),
        React__default['default'].createElement(Logo$1, { className: "desktop-icon", isDark: isDark })));
    return (React__default['default'].createElement(Flex, null,
        React__default['default'].createElement(MenuButton, { "aria-label": "Toggle menu", onClick: togglePush, mr: "24px" }, isPushed ? (React__default['default'].createElement(Icon$m, { width: "24px", color: "textSubtle" })) : (React__default['default'].createElement(Icon$n, { width: "24px", color: "textSubtle" }))),
        isAbsoluteUrl ? (React__default['default'].createElement(StyledLink, { as: "a", href: href, "aria-label": "Pancake home page" }, innerLogo)) : (React__default['default'].createElement(StyledLink, { to: href, "aria-label": "Pancake home page" }, innerLogo))));
};
var templateObject_1$c;

var links = [
    {
        label: "Home",
        icon: "HomeIcon",
        href: "/",
    },
    {
        label: "Trade",
        icon: "TradeIcon",
        items: [
            {
                label: "Exchange",
                href: "https://exchange.pancakeswap.finance",
            },
            {
                label: "Liquidity",
                href: "https://exchange.pancakeswap.finance/#/pool",
            },
        ],
    },
    {
        label: "Farms",
        icon: "FarmIcon",
        href: "/farms",
    },
    {
        label: "Pools",
        icon: "PoolIcon",
        href: "/syrup",
    },
    {
        label: "Lottery",
        icon: "TicketIcon",
        href: "/lottery",
    },
    {
        label: "NFT",
        icon: "NftIcon",
        href: "/nft",
    },
    {
        label: "Profile & Teams",
        icon: "GroupsIcon",
        items: [
            {
                label: "Leaderboard",
                href: "/",
            },
            {
                label: "YourProfile",
                href: "/",
            },
        ],
        calloutClass: "rainbow",
    },
    {
        label: "Info",
        icon: "InfoIcon",
        items: [
            {
                label: "Overview",
                href: "https://pancakeswap.info",
            },
            {
                label: "Tokens",
                href: "https://pancakeswap.info/tokens",
            },
            {
                label: "Pairs",
                href: "https://pancakeswap.info/pairs",
            },
            {
                label: "Accounts",
                href: "https://pancakeswap.info/accounts",
            },
        ],
    },
    {
        label: "IFO",
        icon: "IfoIcon",
        items: [
            {
                label: "Next",
                href: "/ifo",
            },
            {
                label: "History",
                href: "/ifo/history",
            },
        ],
    },
    {
        label: "More",
        icon: "MoreIcon",
        items: [
            // {
            //   label: "Voting",
            //   href: "https://voting.pancakeswap.finance",
            // },
            {
                label: "Github",
                href: "https://github.com/toadfarm/",
            },
        ],
    },
];
var socials = [
    {
        label: "Telegram",
        icon: "TelegramIcon",
        items: [
            {
                label: "English",
                href: "https://t.me/toadfarm",
            },
            // {
            //   label: "Bahasa Indonesia",
            //   href: "https://t.me/PancakeSwapIndonesia",
            // },
            // {
            //   label: "中文",
            //   href: "https://t.me/PancakeSwap_CN",
            // },
            // {
            //   label: "Tiếng Việt",
            //   href: "https://t.me/PancakeSwapVN",
            // },
            // {
            //   label: "Italiano",
            //   href: "https://t.me/pancakeswap_ita",
            // },
            // {
            //   label: "русский",
            //   href: "https://t.me/pancakeswap_ru",
            // },
            // {
            //   label: "Türkiye",
            //   href: "https://t.me/pancakeswapturkiye",
            // },
            // {
            //   label: "Português",
            //   href: "https://t.me/PancakeSwapPortuguese",
            // },
            // {
            //   label: "Español",
            //   href: "https://t.me/PancakeswapEs",
            // },
            // {
            //   label: "日本語",
            //   href: "https://t.me/pancakeswapjp",
            // },
            // {
            //   label: "Français",
            //   href: "https://t.me/pancakeswapfr",
            // },
            // {
            //   label: "Whale Alert",
            //   href: "https://t.me/PancakeSwapWhales",
            // },
        ],
    },
    {
        label: "Twitter",
        icon: "TwitterIcon",
        href: "https://twitter.com/ToadFarmBSC",
    },
];
var MENU_HEIGHT = 64;
var MENU_ENTRY_HEIGHT = 48;
var SIDEBAR_WIDTH_FULL = 240;
var SIDEBAR_WIDTH_REDUCED = 56;

var rainbowAnimation = styled.keyframes(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"], ["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"])));
var LinkLabel = styled__default['default'].div(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"], ["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"])), function (_a) {
    var isPushed = _a.isPushed, theme = _a.theme;
    return (isPushed ? theme.colors.textSubtle : "transparent");
});
var MenuEntry = styled__default['default'].div(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    -webkit-background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 200% 100%;\n    font-weight: bold;\n  }\n"], ["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    -webkit-background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 200% 100%;\n    font-weight: bold;\n  }\n"])), MENU_ENTRY_HEIGHT, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "0 32px" : "0 16px");
}, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "14px" : "16px");
}, function (_a) {
    var secondary = _a.secondary, theme = _a.theme;
    return (secondary ? theme.colors.background : "transparent");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var isActive = _a.isActive, theme = _a.theme;
    return (isActive ? "inset 4px 0px 0px " + theme.colors.primary : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.tertiary;
}, rainbowAnimation, function (_a) {
    var theme = _a.theme;
    return theme.colors.gradients.bubblegum;
});
MenuEntry.defaultProps = {
    secondary: false,
    isActive: false,
    role: "button",
};
var templateObject_1$b, templateObject_2$5, templateObject_3$2;

var Container$2 = styled__default['default'].div(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"], ["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"])));
var AccordionContent = styled__default['default'].div(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px;\n"], ["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px;\n"])), function (_a) {
    var isOpen = _a.isOpen, maxHeight = _a.maxHeight;
    return (isOpen ? maxHeight + "px" : 0);
}, function (_a) {
    var isOpen = _a.isOpen, isPushed = _a.isPushed;
    return (isOpen && isPushed ? "rgba(133, 133, 133, 0.1)" : "transparent");
});
var Accordion = function (_a) {
    var label = _a.label, icon = _a.icon, isPushed = _a.isPushed, pushNav = _a.pushNav, _b = _a.initialOpenState, initialOpenState = _b === void 0 ? false : _b, children = _a.children, className = _a.className;
    var _c = React.useState(initialOpenState), isOpen = _c[0], setIsOpen = _c[1];
    var handleClick = function () {
        if (isPushed) {
            setIsOpen(function (prevState) { return !prevState; });
        }
        else {
            pushNav(true);
            setIsOpen(true);
        }
    };
    return (React__default['default'].createElement(Container$2, null,
        React__default['default'].createElement(MenuEntry, { onClick: handleClick, className: className },
            icon,
            React__default['default'].createElement(LinkLabel, { isPushed: isPushed }, label),
            isOpen ? React__default['default'].createElement(Icon$Z, null) : React__default['default'].createElement(Icon$_, null)),
        React__default['default'].createElement(AccordionContent, { isOpen: isOpen, isPushed: isPushed, maxHeight: React__default['default'].Children.count(children) * MENU_ENTRY_HEIGHT }, children)));
};
var templateObject_1$a, templateObject_2$4;

var MenuLink = function (_a) {
    var href = _a.href, otherProps = __rest(_a, ["href"]);
    var isHttpLink = href === null || href === void 0 ? void 0 : href.startsWith("http");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var Tag = isHttpLink ? "a" : reactRouterDom.NavLink;
    var props = isHttpLink ? { href: href } : { to: href };
    return React__default['default'].createElement(Tag, __assign({}, props, otherProps));
};

var Icons$1 = IconModule;
var Container$1 = styled__default['default'].div(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"])));
var PanelBody = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, isMobile = _a.isMobile, links = _a.links;
    var location = reactRouterDom.useLocation();
    // Close the menu when a user clicks a link on mobile
    var handleClick = isMobile ? function () { return pushNav(false); } : undefined;
    return (React__default['default'].createElement(Container$1, null, links.map(function (entry) {
        var Icon = Icons$1[entry.icon];
        var iconElement = React__default['default'].createElement(Icon, { width: "24px", mr: "8px" });
        var calloutClass = entry.calloutClass ? entry.calloutClass : undefined;
        if (entry.items) {
            return (React__default['default'].createElement(Accordion, { key: entry.label, isPushed: isPushed, pushNav: pushNav, icon: iconElement, label: entry.label, initialOpenState: entry.initialOpenState, className: calloutClass }, isPushed &&
                entry.items.map(function (item) { return (React__default['default'].createElement(MenuEntry, { key: item.href, secondary: true, isActive: item.href === location.pathname, onClick: handleClick },
                    React__default['default'].createElement(MenuLink, { href: item.href }, item.label))); })));
        }
        return (React__default['default'].createElement(MenuEntry, { key: entry.label, isActive: entry.href === location.pathname, className: calloutClass },
            React__default['default'].createElement(MenuLink, { href: entry.href, onClick: handleClick },
                iconElement,
                React__default['default'].createElement(LinkLabel, { isPushed: isPushed }, entry.label))));
    })));
};
var templateObject_1$9;

var Icons = IconModule;
var MoonIcon = Icons.MoonIcon, SunIcon = Icons.SunIcon, LanguageIcon = Icons.LanguageIcon;
var Container = styled__default['default'].div(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"], ["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var PriceLink = styled__default['default'].a(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"])));
var SettingsEntry = styled__default['default'].div(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"])), MENU_ENTRY_HEIGHT);
var SocialEntry = styled__default['default'].div(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"])), MENU_ENTRY_HEIGHT);
var PanelFooter = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, toggleTheme = _a.toggleTheme, isDark = _a.isDark, cakePriceUsd = _a.cakePriceUsd, currentLang = _a.currentLang, langs = _a.langs, setLang = _a.setLang, priceLink = _a.priceLink;
    if (!isPushed) {
        return (React__default['default'].createElement(Container, null,
            React__default['default'].createElement(IconButton, { variant: "text", onClick: function () { return pushNav(true); } },
                React__default['default'].createElement(Icon$M, null))));
    }
    return (React__default['default'].createElement(Container, null,
        React__default['default'].createElement(SocialEntry, null,
            cakePriceUsd ? (React__default['default'].createElement(PriceLink, { href: priceLink, target: "_blank" },
                React__default['default'].createElement(Icon$C, { width: "24px", mr: "8px" }),
                React__default['default'].createElement(Text, { color: "textSubtle", bold: true }, "$" + cakePriceUsd.toFixed(3)))) : (React__default['default'].createElement(Skeleton, { width: 80, height: 24 })),
            React__default['default'].createElement(Flex, null, socials.map(function (social, index) {
                var Icon = Icons[social.icon];
                var iconProps = { width: "24px", color: "textSubtle", style: { cursor: "pointer" } };
                var mr = index < socials.length - 1 ? "24px" : 0;
                if (social.items) {
                    return (React__default['default'].createElement(Dropdown, { key: social.label, position: "top", target: React__default['default'].createElement(Icon, __assign({}, iconProps, { mr: mr })) }, social.items.map(function (item) { return (React__default['default'].createElement(Link, { external: true, key: item.label, href: item.href, "aria-label": item.label, color: "textSubtle" }, item.label)); })));
                }
                return (React__default['default'].createElement(Link, { external: true, key: social.label, href: social.href, "aria-label": social.label, mr: mr },
                    React__default['default'].createElement(Icon, __assign({}, iconProps))));
            }))),
        React__default['default'].createElement(SettingsEntry, null,
            React__default['default'].createElement(Button, { variant: "text", onClick: function () { return toggleTheme(!isDark); } },
                React__default['default'].createElement(Flex, { alignItems: "center" },
                    React__default['default'].createElement(SunIcon, { color: isDark ? "textDisabled" : "text", width: "24px" }),
                    React__default['default'].createElement(Text, { color: "textDisabled", mx: "4px" }, "/"),
                    React__default['default'].createElement(MoonIcon, { color: isDark ? "text" : "textDisabled", width: "24px" }))),
            React__default['default'].createElement(Dropdown, { position: "top-right", target: React__default['default'].createElement(Button, { variant: "text", startIcon: React__default['default'].createElement(LanguageIcon, { color: "textSubtle", width: "24px" }) },
                    React__default['default'].createElement(Text, { color: "textSubtle" }, currentLang === null || currentLang === void 0 ? void 0 : currentLang.toUpperCase())) }, langs.map(function (lang) { return (React__default['default'].createElement(MenuButton, { key: lang.code, fullWidth: true, onClick: function () { return setLang(lang); }, 
                // Safari fix
                style: { minHeight: "32px", height: "auto" } }, lang.language)); })))));
};
var templateObject_1$8, templateObject_2$3, templateObject_3$1, templateObject_4$1;

var StyledPanel = styled__default['default'].div(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n"], ["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? "80px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL + "px" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "2px solid rgba(133, 133, 133, 0.1)" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "initial" : "hidden");
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
});
var Panel = function (props) {
    var isPushed = props.isPushed, showMenu = props.showMenu;
    return (React__default['default'].createElement(StyledPanel, { isPushed: isPushed, showMenu: showMenu },
        React__default['default'].createElement(PanelBody, __assign({}, props)),
        React__default['default'].createElement(PanelFooter, __assign({}, props))));
};
var templateObject_1$7;

var Icon$6 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React__default['default'].createElement("path", { d: "M77.7602 16.9155L51.9419 36.0497L56.7382 24.7733L77.7602 16.9155Z", fill: "#E17726" }),
        React__default['default'].createElement("path", { d: "M18.2656 16.9155L43.8288 36.2283L39.2622 24.7733L18.2656 16.9155Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M68.4736 61.2808L61.6108 71.7918L76.3059 75.8482L80.4899 61.5104L68.4736 61.2808Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M15.5356 61.5104L19.6941 75.8482L34.3892 71.7918L27.5519 61.2808L15.5356 61.5104Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M33.5984 43.5251L29.491 49.699L44.0584 50.3624L43.5482 34.6724L33.5984 43.5251Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M62.4274 43.525L52.2991 34.4937L51.9419 50.3622L66.5094 49.6989L62.4274 43.525Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M34.3892 71.7922L43.1654 67.5316L35.6137 61.6128L34.3892 71.7922Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M52.8345 67.5316L61.6107 71.7922L60.3861 61.6128L52.8345 67.5316Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M61.6107 71.7923L52.8345 67.5317L53.5233 73.2465L53.4468 75.6446L61.6107 71.7923Z", fill: "#D5BFB2" }),
        React__default['default'].createElement("path", { d: "M34.3892 71.7923L42.5531 75.6446L42.502 73.2465L43.1654 67.5317L34.3892 71.7923Z", fill: "#D5BFB2" }),
        React__default['default'].createElement("path", { d: "M42.7062 57.8369L35.4097 55.6939L40.5631 53.3213L42.7062 57.8369Z", fill: "#233447" }),
        React__default['default'].createElement("path", { d: "M53.2937 57.8369L55.4367 53.3213L60.6412 55.6939L53.2937 57.8369Z", fill: "#233447" }),
        React__default['default'].createElement("path", { d: "M34.3893 71.7918L35.6649 61.2808L27.552 61.5104L34.3893 71.7918Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M60.3352 61.2808L61.6108 71.7918L68.4736 61.5104L60.3352 61.2808Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M66.5094 49.6987L51.9419 50.362L53.294 57.8371L55.4371 53.3215L60.6416 55.6941L66.5094 49.6987Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M35.4098 55.6941L40.5633 53.3215L42.7063 57.8371L44.0584 50.362L29.491 49.6987L35.4098 55.6941Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M29.491 49.6987L35.6139 61.6129L35.4098 55.6941L29.491 49.6987Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M60.6414 55.6941L60.3862 61.6129L66.5092 49.6987L60.6414 55.6941Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M44.0584 50.3618L42.7063 57.8369L44.4156 66.6641L44.7728 55.0305L44.0584 50.3618Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M51.9415 50.3618L51.2527 55.005L51.5843 66.6641L53.2937 57.8369L51.9415 50.3618Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M53.2938 57.8374L51.5845 66.6646L52.8346 67.532L60.3862 61.6132L60.6413 55.6943L53.2938 57.8374Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M35.4097 55.6943L35.6138 61.6132L43.1654 67.532L44.4155 66.6646L42.7062 57.8374L35.4097 55.6943Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M53.4468 75.6443L53.5233 73.2462L52.8855 72.6849H43.1143L42.502 73.2462L42.5531 75.6443L34.3892 71.792L37.2465 74.1391L43.0378 78.1445H52.962L58.7533 74.1391L61.6107 71.792L53.4468 75.6443Z", fill: "#C0AC9D" }),
        React__default['default'].createElement("path", { d: "M52.8346 67.5315L51.5845 66.6641H44.4156L43.1655 67.5315L42.5022 73.2462L43.1145 72.6849H52.8857L53.5235 73.2462L52.8346 67.5315Z", fill: "#161616" }),
        React__default['default'].createElement("path", { d: "M78.8314 37.2998L80.9999 26.7377L77.7599 16.9155L52.8345 35.4119L62.4271 43.5247L75.9485 47.4791L78.9335 43.984L77.6323 43.04L79.7243 41.1521L78.1426 39.902L80.2091 38.3458L78.8314 37.2998Z", fill: "#763E1A" }),
        React__default['default'].createElement("path", { d: "M15 26.7377L17.194 37.2998L15.7909 38.3458L17.8574 39.902L16.2756 41.1521L18.3676 43.04L17.0665 43.984L20.0514 47.4791L33.5984 43.5247L43.1655 35.4119L18.2656 16.9155L15 26.7377Z", fill: "#763E1A" }),
        React__default['default'].createElement("path", { d: "M75.9487 47.4793L62.4272 43.5249L66.5092 49.6989L60.3862 61.613L68.4736 61.511H80.4898L75.9487 47.4793Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M33.5983 43.5249L20.0513 47.4793L15.5356 61.511H27.5519L35.6137 61.613L29.4908 49.6989L33.5983 43.5249Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M51.9415 50.3617L52.8344 35.4115L56.7378 24.7729H39.262L43.1653 35.4115L44.0583 50.3617L44.3899 55.0559L44.4154 66.664H51.5843L51.6099 55.0559L51.9415 50.3617Z", fill: "#F5841F" })));
};

var Icon$5 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M66.4573 43.7107C64.8919 42.1452 64.8919 39.6071 66.4573 38.0416C68.0228 36.4762 70.5609 36.4762 72.1264 38.0416C73.6918 39.6071 73.6918 42.1452 72.1264 43.7107C70.5609 45.2762 68.0228 45.2762 66.4573 43.7107ZM52.9933 57.1747C51.8192 56.0006 51.8192 54.097 52.9933 52.9229C54.1674 51.7488 56.071 51.7488 57.2451 52.9229C58.4192 54.097 58.4192 56.0006 57.2451 57.1747C56.071 58.3488 54.1674 58.3488 52.9933 57.1747ZM74.2523 50.0884C73.0782 48.9143 73.0782 47.0107 74.2523 45.8366C75.4263 44.6625 77.3299 44.6625 78.504 45.8366C79.6781 47.0107 79.6781 48.9143 78.504 50.0884C77.3299 51.2625 75.4263 51.2625 74.2523 50.0884ZM67.166 57.1747C65.9919 56.0006 65.9919 54.097 67.166 52.9229C68.34 51.7488 70.2436 51.7488 71.4177 52.9229C72.5918 54.097 72.5918 56.0006 71.4177 57.1747C70.2436 58.3488 68.34 58.3488 67.166 57.1747ZM82.0472 56.466C81.2645 55.6833 81.2645 54.4142 82.0472 53.6315C82.8299 52.8488 84.099 52.8488 84.8817 53.6315C85.6644 54.4142 85.6644 55.6833 84.8817 56.466C84.099 57.2488 82.8299 57.2488 82.0472 56.466ZM74.9609 63.5523C74.1782 62.7696 74.1782 61.5005 74.9609 60.7178C75.7436 59.9351 77.0127 59.9351 77.7954 60.7178C78.5781 61.5005 78.5781 62.7696 77.7954 63.5523C77.0127 64.3351 75.7436 64.3351 74.9609 63.5523ZM59.371 50.797C57.8056 49.2315 57.8056 46.6934 59.371 45.1279C60.9365 43.5625 63.4746 43.5625 65.0401 45.1279C66.6055 46.6934 66.6055 49.2315 65.0401 50.797C63.4746 52.3625 60.9365 52.3625 59.371 50.797ZM59.371 36.6244C57.8056 35.0589 57.8056 32.5208 59.371 30.9553C60.9365 29.3899 63.4746 29.3899 65.0401 30.9553C66.6055 32.5208 66.6055 35.0589 65.0401 36.6244C63.4746 38.1898 60.9365 38.1898 59.371 36.6244ZM52.2847 43.7107C50.7193 42.1452 50.7193 39.6071 52.2847 38.0416C53.8502 36.4762 56.3883 36.4762 57.9538 38.0416C59.5192 39.6071 59.5192 42.1452 57.9538 43.7107C56.3883 45.2762 53.8502 45.2762 52.2847 43.7107ZM38.0462 43.7107C36.4808 42.1452 36.4808 39.6071 38.0462 38.0416C39.6117 36.4762 42.1498 36.4762 43.7153 38.0416C45.2807 39.6071 45.2807 42.1452 43.7153 43.7107C42.1498 45.2762 39.6117 45.2762 38.0462 43.7107ZM24.5823 57.1747C23.4082 56.0006 23.4082 54.097 24.5823 52.9229C25.7564 51.7488 27.66 51.7488 28.8341 52.9229C30.0081 54.097 30.0081 56.0006 28.8341 57.1747C27.66 58.3488 25.7564 58.3488 24.5823 57.1747ZM45.8412 50.0884C44.6671 48.9143 44.6671 47.0107 45.8412 45.8366C47.0153 44.6625 48.9189 44.6625 50.093 45.8366C51.2671 47.0107 51.2671 48.9143 50.093 50.0884C48.9189 51.2625 47.0153 51.2625 45.8412 50.0884ZM38.7549 57.1747C37.5808 56.0006 37.5808 54.097 38.7549 52.9229C39.929 51.7488 41.8326 51.7488 43.0067 52.9229C44.1807 54.097 44.1807 56.0006 43.0067 57.1747C41.8326 58.3488 39.929 58.3488 38.7549 57.1747ZM11.1183 56.466C10.3356 55.6833 10.3356 54.4142 11.1183 53.6315C11.901 52.8488 13.1701 52.8488 13.9528 53.6315C14.7356 54.4142 14.7356 55.6833 13.9528 56.466C13.1701 57.2488 11.901 57.2488 11.1183 56.466ZM18.2046 63.5523C17.4219 62.7696 17.4219 61.5005 18.2046 60.7178C18.9873 59.9351 20.2564 59.9351 21.0391 60.7178C21.8219 61.5005 21.8219 62.7696 21.0391 63.5523C20.2564 64.3351 18.9873 64.3351 18.2046 63.5523ZM46.5498 63.5523C45.7671 62.7696 45.7671 61.5005 46.5498 60.7178C47.3325 59.9351 48.6016 59.9351 49.3843 60.7178C50.1671 61.5005 50.1671 62.7696 49.3843 63.5523C48.6016 64.3351 47.3325 64.3351 46.5498 63.5523ZM17.496 50.0884C16.3219 48.9143 16.3219 47.0107 17.496 45.8366C18.6701 44.6625 20.5737 44.6625 21.7478 45.8366C22.9218 47.0107 22.9218 48.9143 21.7478 50.0884C20.5737 51.2625 18.6701 51.2625 17.496 50.0884ZM30.9599 50.797C29.3945 49.2315 29.3945 46.6934 30.9599 45.1279C32.5254 43.5625 35.0635 43.5625 36.629 45.1279C38.1944 46.6934 38.1944 49.2315 36.629 50.797C35.0635 52.3625 32.5254 52.3625 30.9599 50.797ZM30.9599 36.6244C29.3945 35.0589 29.3945 32.5208 30.9599 30.9553C32.5254 29.3899 35.0635 29.3899 36.629 30.9553C38.1944 32.5208 38.1944 35.0589 36.629 36.6244C35.0635 38.1898 32.5254 38.1898 30.9599 36.6244ZM23.8736 43.7107C22.3082 42.1452 22.3082 39.6071 23.8736 38.0416C25.4391 36.4762 27.9772 36.4762 29.5427 38.0416C31.1081 39.6071 31.1081 42.1452 29.5427 43.7107C27.9772 45.2762 25.4391 45.2762 23.8736 43.7107Z", fill: "#1D222A" })));
};

var Icon$4 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React__default['default'].createElement("path", { d: "M44.3288 35.3546V21.7134H19.0926C18.581 21.7134 18.24 22.0544 18.24 22.566V41.8342C18.24 42.3457 18.581 42.6867 19.0926 42.6867H28.8119V77.8129C28.8119 78.3244 29.153 78.6654 29.6645 78.6654H45.5224C46.0339 78.6654 46.375 78.3244 46.375 77.8129V35.3546H44.3288Z", fill: "#29AEFF" }),
        React__default['default'].createElement("path", { d: "M61.8919 17.2798H55.7534H39.2134C38.7019 17.2798 38.3608 17.6208 38.3608 18.1324V73.3792C38.3608 73.8908 38.7019 74.2318 39.2134 74.2318H55.0713C55.5829 74.2318 55.9239 73.8908 55.9239 73.3792V59.397H62.0624C73.6575 59.397 83.0358 50.0187 83.0358 38.4237C83.0358 26.6581 73.487 17.2798 61.8919 17.2798Z", fill: "#2761E7" })));
};

var Icon$3 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("g", { clipPath: "url(#clip0)" },
            React__default['default'].createElement("path", { d: "M48.0048 96.0097C74.5172 96.0097 96.0097 74.5172 96.0097 48.0048C96.0097 21.4925 74.5172 0 48.0048 0C21.4925 0 0 21.4925 0 48.0048C0 74.5172 21.4925 96.0097 48.0048 96.0097Z", fill: "#3375BB" }),
            React__default['default'].createElement("path", { d: "M48.0048 22.8922L49.3179 21.1833C48.9399 20.8928 48.4766 20.7354 48 20.7354C47.5233 20.7354 47.06 20.8928 46.682 21.1833L48.0048 22.8922ZM70.5783 29.5252H72.7313C72.7352 29.2396 72.6824 28.9561 72.576 28.6909C72.4696 28.4258 72.3118 28.1844 72.1116 27.9806C71.9114 27.7769 71.6729 27.6148 71.4097 27.5037C71.1465 27.3926 70.8639 27.3348 70.5783 27.3335V29.5252ZM48.0048 75.6377L46.8076 77.4335C47.1604 77.6697 47.5754 77.7958 48 77.7958C48.4245 77.7958 48.8395 77.6697 49.1924 77.4335L48.0048 75.6377ZM25.4506 29.5252V27.3625C25.165 27.3638 24.8824 27.4216 24.6192 27.5327C24.356 27.6437 24.1175 27.8058 23.9173 28.0096C23.7171 28.2134 23.5593 28.4548 23.4529 28.7199C23.3465 28.985 23.2937 29.2686 23.2976 29.5542L25.4506 29.5252ZM46.6917 24.5915C56.4626 32.1611 67.6528 31.6783 70.5879 31.6783V27.3625C67.5466 27.3625 57.8047 27.7487 49.3468 21.1833L46.6917 24.5915ZM68.4348 29.4866C68.2707 39.4892 67.8459 46.5471 67.0349 51.7704C66.2238 56.9938 65.1039 60.0448 63.6266 62.2268C62.1494 64.4089 60.257 65.8282 57.486 67.4792C54.715 69.1302 51.1716 70.9646 46.8076 73.8515L49.2406 77.4335C53.373 74.6818 56.8102 72.9246 59.7357 71.1771C62.6835 69.5717 65.2416 67.3367 67.228 64.6309C69.159 61.7344 70.4817 57.8724 71.3314 52.427C72.181 46.9815 72.6155 39.6534 72.7796 29.5542L68.4348 29.4866ZM49.2406 73.8515C44.9055 70.955 41.3718 69.1592 38.6201 67.4888C35.8684 65.8185 33.976 64.4861 32.4892 62.2268C31.0023 59.9676 29.7954 56.9648 28.9651 51.7704C28.1347 46.576 27.7678 39.4892 27.6037 29.4866L23.2976 29.5542C23.4617 39.6534 23.9058 47.0009 24.7458 52.427C25.5858 57.8531 26.8699 61.7151 28.8395 64.6309C30.8164 67.3382 33.3686 69.5739 36.3125 71.1771C39.2091 72.9246 42.6752 74.6818 46.8076 77.4335L49.2406 73.8515ZM25.4506 31.6783C28.3471 31.6783 39.547 32.1611 49.3179 24.5915L46.682 21.1833C38.2049 27.7487 28.463 27.3625 25.441 27.3625L25.4506 31.6783Z", fill: "white" })),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("clipPath", { id: "clip0" },
                React__default['default'].createElement("rect", { width: "96", height: "96", fill: "white" })))));
};

var Icon$2 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("path", { d: "M96 48C96 21.4903 74.5097 0 48 0C21.4903 0 0 21.4903 0 48C0 74.5097 21.4903 96 48 96C74.5097 96 96 74.5097 96 48Z", fill: "#3389FB" }),
        React__default['default'].createElement("path", { d: "M29.6927 35.4245C39.8036 25.5252 56.1965 25.5252 66.3074 35.4245L67.5242 36.6159C68.0298 37.1109 68.0298 37.9134 67.5242 38.4084L63.3616 42.4839C63.1088 42.7314 62.699 42.7314 62.4462 42.4839L60.7717 40.8444C53.7181 33.9384 42.282 33.9384 35.2284 40.8444L33.4351 42.6002C33.1823 42.8477 32.7725 42.8477 32.5197 42.6002L28.3571 38.5247C27.8515 38.0297 27.8515 37.2272 28.3571 36.7322L29.6927 35.4245ZM74.9161 43.8532L78.6208 47.4805C79.1264 47.9755 79.1264 48.778 78.6208 49.2729L61.9159 65.6288C61.4103 66.1237 60.5907 66.1237 60.0851 65.6288C60.0851 65.6288 60.0851 65.6288 60.0851 65.6288L48.229 54.0206C48.1026 53.8968 47.8977 53.8968 47.7713 54.0206C47.7713 54.0206 47.7713 54.0206 47.7713 54.0206L35.9153 65.6288C35.4098 66.1237 34.5902 66.1237 34.0846 65.6288C34.0846 65.6288 34.0846 65.6288 34.0846 65.6288L17.3792 49.2727C16.8736 48.7778 16.8736 47.9753 17.3792 47.4803L21.0839 43.853C21.5895 43.3581 22.4091 43.3581 22.9146 43.853L34.771 55.4614C34.8974 55.5851 35.1023 55.5851 35.2287 55.4614C35.2287 55.4614 35.2287 55.4614 35.2287 55.4614L47.0844 43.853C47.59 43.358 48.4096 43.358 48.9152 43.853C48.9152 43.853 48.9152 43.853 48.9152 43.853L60.7715 55.4614C60.8979 55.5851 61.1028 55.5851 61.2292 55.4614L73.0854 43.8532C73.5909 43.3583 74.4105 43.3583 74.9161 43.8532Z", fill: "white" })));
};

var Icon$1 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React__default['default'].createElement("path", { d: "M24 0H8C3.58172 0 0 3.58172 0 8V24C0 28.4183 3.58172 32 8 32H24C28.4183 32 32 28.4183 32 24V8C32 3.58172 28.4183 0 24 0Z", fill: "#1E2026" }),
        React__default['default'].createElement("path", { d: "M16.2857 4L9.97035 7.6761L12.2922 9.03415L16.2857 6.7161L20.2792 9.03415L22.6011 7.6761L16.2857 4Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M20.2792 10.9541L22.6011 12.3122V15.0283L18.6075 17.3463V21.9824L16.2857 23.3405L13.9639 21.9824V17.3463L9.97035 15.0283V12.3122L12.2922 10.9541L16.2857 13.2722L20.2792 10.9541Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M22.6011 16.9483V19.6644L20.2792 21.0224V18.3063L22.6011 16.9483Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M20.2561 22.9424L24.2496 20.6244V15.9883L26.5714 14.6302V21.9824L20.2561 25.6585V22.9424Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M24.2496 11.3522L21.9278 9.99414L24.2496 8.63609L26.5714 9.99414V12.7102L24.2496 14.0683V11.3522Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M13.9639 26.642V23.9259L16.2857 25.2839L18.6075 23.9259V26.642L16.2857 28L13.9639 26.642Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M12.2922 21.0224L9.97035 19.6644V16.9483L12.2922 18.3063V21.0224Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M16.2857 11.3522L13.9639 9.99414L16.2857 8.63609L18.6075 9.99414L16.2857 11.3522Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M10.6437 9.99414L8.32183 11.3522V14.0683L6 12.7102V9.99414L8.32183 8.63609L10.6437 9.99414Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M6 14.6302L8.32183 15.9883V20.6244L12.3154 22.9424V25.6585L6 21.9824V14.6302Z", fill: "#F0B90B" })));
};

var connectors = [
    {
        title: "Metamask",
        icon: Icon$6,
        connectorId: "injected",
    },
    {
        title: "TrustWallet",
        icon: Icon$3,
        connectorId: "injected",
    },
    {
        title: "MathWallet",
        icon: Icon$5,
        connectorId: "injected",
    },
    {
        title: "TokenPocket",
        icon: Icon$4,
        connectorId: "injected",
    },
    {
        title: "WalletConnect",
        icon: Icon$2,
        connectorId: "walletconnect",
    },
    {
        title: "Binance Chain Wallet",
        icon: Icon$1,
        connectorId: "bsc",
    },
];
var localStorageKey = "accountStatus";

var WalletCard = function (_a) {
    var login = _a.login, walletConfig = _a.walletConfig, onDismiss = _a.onDismiss, mb = _a.mb;
    var title = walletConfig.title, Icon = walletConfig.icon;
    return (React__default['default'].createElement(Button, { fullWidth: true, variant: "tertiary", onClick: function () {
            login(walletConfig.connectorId);
            window.localStorage.setItem(localStorageKey, "1");
            onDismiss();
        }, style: { justifyContent: "space-between" }, mb: mb, id: "wallet-connect-" + title.toLocaleLowerCase() },
        React__default['default'].createElement(Text, { bold: true, color: "primary", mr: "16px" }, title),
        React__default['default'].createElement(Icon, { width: "32px" })));
};

var HelpLink = styled__default['default'](Link)(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"], ["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"])));
var ConnectModal = function (_a) {
    var login = _a.login, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React__default['default'].createElement(Modal, { title: "Connect to a wallet", onDismiss: onDismiss },
        connectors.map(function (entry, index) { return (React__default['default'].createElement(WalletCard, { key: entry.title, login: login, walletConfig: entry, onDismiss: onDismiss, mb: index < connectors.length - 1 ? "8px" : "0" })); }),
        React__default['default'].createElement(HelpLink, { href: "https://docs.pancakeswap.finance/guides/faq#how-do-i-set-up-my-wallet-on-binance-smart-chain", external: true },
            React__default['default'].createElement(Icon$J, { color: "primary", mr: "6px" }),
            "Learn how to connect")));
};
var templateObject_1$6;

var StyleButton = styled__default['default'](Text).attrs({ role: "button" })(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var Tooltip = styled__default['default'].div(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"], ["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"])), function (_a) {
    var isTooltipDisplayed = _a.isTooltipDisplayed;
    return (isTooltipDisplayed ? "block" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
});
var CopyToClipboard = function (_a) {
    var toCopy = _a.toCopy, children = _a.children, props = __rest(_a, ["toCopy", "children"]);
    var _b = React.useState(false), isTooltipDisplayed = _b[0], setIsTooltipDisplayed = _b[1];
    return (React__default['default'].createElement(StyleButton, __assign({ small: true, bold: true, onClick: function () {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(toCopy);
                setIsTooltipDisplayed(true);
                setTimeout(function () {
                    setIsTooltipDisplayed(false);
                }, 1000);
            }
        } }, props),
        children,
        React__default['default'].createElement(Icon$K, { width: "20px", color: "primary", ml: "4px" }),
        React__default['default'].createElement(Tooltip, { isTooltipDisplayed: isTooltipDisplayed }, "Copied")));
};
var templateObject_1$5, templateObject_2$2;

var AccountModal = function (_a) {
    var account = _a.account, logout = _a.logout, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React__default['default'].createElement(Modal, { title: "Your wallet", onDismiss: onDismiss },
        React__default['default'].createElement(Text, { fontSize: "20px", bold: true, style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" } }, account),
        React__default['default'].createElement(Flex, { mb: "32px" },
            React__default['default'].createElement(LinkExternal, { small: true, href: "https://bscscan.com/address/" + account, mr: "16px" }, "View on BscScan"),
            React__default['default'].createElement(CopyToClipboard, { toCopy: account }, "Copy Address")),
        React__default['default'].createElement(Flex, { justifyContent: "center" },
            React__default['default'].createElement(Button, { size: "sm", variant: "secondary", onClick: function () {
                    logout();
                    window.localStorage.removeItem(localStorageKey);
                    onDismiss();
                    window.location.reload();
                } }, "Logout"))));
};

var useWalletModal = function (login, logout, account) {
    var onPresentConnectModal = useModal(React__default['default'].createElement(ConnectModal, { login: login }))[0];
    var onPresentAccountModal = useModal(React__default['default'].createElement(AccountModal, { account: account || "", logout: logout }))[0];
    return { onPresentConnectModal: onPresentConnectModal, onPresentAccountModal: onPresentAccountModal };
};

var UserBlock = function (_a) {
    var account = _a.account, login = _a.login, logout = _a.logout;
    var _b = useWalletModal(login, logout, account), onPresentConnectModal = _b.onPresentConnectModal, onPresentAccountModal = _b.onPresentAccountModal;
    var accountEllipsis = account ? account.substring(0, 4) + "..." + account.substring(account.length - 4) : null;
    return (React__default['default'].createElement("div", null, account ? (React__default['default'].createElement(Button, { size: "sm", variant: "tertiary", onClick: function () {
            onPresentAccountModal();
        } }, accountEllipsis)) : (React__default['default'].createElement(Button, { size: "sm", onClick: function () {
            onPresentConnectModal();
        } }, "Connect"))));
};

var Icon = function (props) {
    var theme = styled.useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React__default['default'].createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: primaryColor }),
        React__default['default'].createElement("mask", { id: "A", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "32", height: "32" },
            React__default['default'].createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: "#c4c4c4" })),
        React__default['default'].createElement("g", { mask: "url(#A)" },
            React__default['default'].createElement("path", { d: "M25.128 16.436c0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641V15h18.461v1.436zm2.205 13.806c0-3.815-5.074-6.908-11.333-6.908S4.667 26.426 4.667 30.242V32h22.667v-1.759z", fill: secondaryColor }),
            React__default['default'].createElement("path", { fillRule: "evenodd", d: "M10.234 5.601C9.942 4.264 10.96 3 12.328 3c1.184 0 2.143.959 2.143 2.143v3.873l1.427-.067c.589 0 1.166.034 1.724.098V5.143c0-1.184.959-2.143 2.143-2.143 1.368 0 2.386 1.264 2.093 2.601l-.931 4.258c2.529 1.006 4.201 2.749 4.201 4.731 0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641c0-2.053 1.794-3.849 4.476-4.836l-.908-4.153z", fill: secondaryColor }),
            React__default['default'].createElement("ellipse", { cx: "12.308", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }),
            React__default['default'].createElement("ellipse", { cx: "19.385", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }))));
};

var StyledAvatar = styled__default['default'].div(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  margin-left: 8px;\n  position: relative;\n\n  img {\n    border-radius: 50%;\n  }\n"], ["\n  margin-left: 8px;\n  position: relative;\n\n  img {\n    border-radius: 50%;\n  }\n"])));
var Pip = styled__default['default'].div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  pointer-events: none;\n  height: 8px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 8px;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  pointer-events: none;\n  height: 8px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.failure;
});
var Avatar = function (_a) {
    var profile = _a.profile;
    var _b = profile.username, username = _b === void 0 ? "Bunny" : _b, image = profile.image, profileLink = profile.profileLink, noProfileLink = profile.noProfileLink, _c = profile.showPip, showPip = _c === void 0 ? false : _c;
    var link = profile.username ? profileLink : noProfileLink;
    var isExternal = link.startsWith("http");
    var ariaLabel = "Link to profile";
    var icon = image ? (React__default['default'].createElement("img", { src: image, alt: "profile avatar", height: "32px", width: "32px" })) : (React__default['default'].createElement(Icon, { width: "32px", height: "32px" }));
    if (isExternal) {
        return (React__default['default'].createElement(StyledAvatar, { title: username },
            React__default['default'].createElement("a", { href: link, "aria-label": ariaLabel }, icon),
            showPip && React__default['default'].createElement(Pip, null)));
    }
    return (React__default['default'].createElement(StyledAvatar, { title: username },
        React__default['default'].createElement(reactRouterDom.Link, { to: link, "aria-label": ariaLabel }, icon),
        showPip && React__default['default'].createElement(Pip, null)));
};
var templateObject_1$4, templateObject_2$1;

var Wrapper = styled__default['default'].div(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n"], ["\n  position: relative;\n  width: 100%;\n"])));
var StyledNav = styled__default['default'].nav(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? 0 : "-" + MENU_HEIGHT + "px");
}, MENU_HEIGHT, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var BodyWrapper = styled__default['default'].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n"], ["\n  position: relative;\n  display: flex;\n"])));
var Inner = styled__default['default'].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  ", " {\n    margin-left: ", ";\n  }\n"], ["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  ", " {\n    margin-left: ", ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? MENU_HEIGHT + "px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
});
var MobileOnlyOverlay = styled__default['default'](Overlay)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"], ["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Menu = function (_a) {
    var _b;
    var account = _a.account, login = _a.login, logout = _a.logout, isDark = _a.isDark, toggleTheme = _a.toggleTheme, langs = _a.langs, setLang = _a.setLang, currentLang = _a.currentLang, cakePriceUsd = _a.cakePriceUsd, links = _a.links, priceLink = _a.priceLink, profile = _a.profile, children = _a.children;
    var isXl = useMatchBreakpoints().isXl;
    var isMobile = isXl === false;
    var _c = React.useState(!isMobile), isPushed = _c[0], setIsPushed = _c[1];
    var _d = React.useState(true), showMenu = _d[0], setShowMenu = _d[1];
    var refPrevOffset = React.useRef(window.pageYOffset);
    React.useEffect(function () {
        var handleScroll = function () {
            var currentOffset = window.pageYOffset;
            var isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
            var isTopOfPage = currentOffset === 0;
            // Always show the menu when user reach the top
            if (isTopOfPage) {
                setShowMenu(true);
            }
            // Avoid triggering anything at the bottom because of layout shift
            else if (!isBottomOfPage) {
                if (currentOffset < refPrevOffset.current) {
                    // Has scroll up
                    setShowMenu(true);
                }
                else {
                    // Has scroll down
                    setShowMenu(false);
                }
            }
            refPrevOffset.current = currentOffset;
        };
        var throttledHandleScroll = throttle__default['default'](handleScroll, 200);
        window.addEventListener("scroll", throttledHandleScroll);
        return function () {
            window.removeEventListener("scroll", throttledHandleScroll);
        };
    }, []);
    // Find the home link if provided
    var homeLink = links.find(function (link) { return link.label === "Home"; });
    return (React__default['default'].createElement(Wrapper, null,
        React__default['default'].createElement(StyledNav, { showMenu: showMenu },
            React__default['default'].createElement(Logo, { isPushed: isPushed, togglePush: function () { return setIsPushed(function (prevState) { return !prevState; }); }, isDark: isDark, href: (_b = homeLink === null || homeLink === void 0 ? void 0 : homeLink.href) !== null && _b !== void 0 ? _b : "/" }),
            React__default['default'].createElement(Flex, null,
                React__default['default'].createElement(UserBlock, { account: account, login: login, logout: logout }),
                profile && React__default['default'].createElement(Avatar, { profile: profile }))),
        React__default['default'].createElement(BodyWrapper, null,
            React__default['default'].createElement(Panel, { isPushed: isPushed, isMobile: isMobile, showMenu: showMenu, isDark: isDark, toggleTheme: toggleTheme, langs: langs, setLang: setLang, currentLang: currentLang, cakePriceUsd: cakePriceUsd, pushNav: setIsPushed, links: links, priceLink: priceLink }),
            React__default['default'].createElement(Inner, { isPushed: isPushed, showMenu: showMenu }, children),
            React__default['default'].createElement(MobileOnlyOverlay, { show: isPushed, onClick: function () { return setIsPushed(false); }, role: "presentation" }))));
};
var templateObject_1$3, templateObject_2, templateObject_3, templateObject_4, templateObject_5;

var ToastAction = function (_a) {
    var action = _a.action;
    if (action.url.startsWith("http")) {
        return (React__default['default'].createElement(Button, __assign({ as: "a", size: "sm", href: action.url }, getExternalLinkProps()), action.text));
    }
    return (React__default['default'].createElement(Button, { as: reactRouterDom.Link, size: "sm", to: action.url }, action.text));
};

var types = {
    SUCCESS: "success",
    DANGER: "danger",
    WARNING: "warning",
    INFO: "info",
};

var _a$1;
var alertTypeMap = (_a$1 = {},
    _a$1[types.INFO] = variants.INFO,
    _a$1[types.SUCCESS] = variants.SUCCESS,
    _a$1[types.DANGER] = variants.DANGER,
    _a$1[types.WARNING] = variants.WARNING,
    _a$1);
var StyledToast = styled__default['default'].div(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"], ["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Toast = function (_a) {
    var toast = _a.toast, onRemove = _a.onRemove, style = _a.style, ttl = _a.ttl, props = __rest(_a, ["toast", "onRemove", "style", "ttl"]);
    var timer = React.useRef();
    var ref = React.useRef(null);
    var removeHandler = React.useRef(onRemove);
    var id = toast.id, title = toast.title, description = toast.description, type = toast.type, action = toast.action;
    var handleRemove = React.useCallback(function () { return removeHandler.current(id); }, [id, removeHandler]);
    var handleMouseEnter = function () {
        clearTimeout(timer.current);
    };
    var handleMouseLeave = function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
    };
    React.useEffect(function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
        return function () {
            clearTimeout(timer.current);
        };
    }, [timer, ttl, handleRemove]);
    return (React__default['default'].createElement(reactTransitionGroup.CSSTransition, __assign({ nodeRef: ref, timeout: 250, style: style }, props),
        React__default['default'].createElement(StyledToast, { ref: ref, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
            React__default['default'].createElement(Alert, { title: title, variant: alertTypeMap[type], onClick: handleRemove }, action ? (React__default['default'].createElement(React__default['default'].Fragment, null,
                React__default['default'].createElement(Text, { as: "p", mb: "8px" }, description),
                React__default['default'].createElement(ToastAction, { action: action }))) : (description)))));
};
var templateObject_1$2;

var ZINDEX = 1000;
var TOP_POSITION = 80; // Initial position from the top
var StyledToastContainer = styled__default['default'].div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"], ["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"])));
var ToastContainer = function (_a) {
    var toasts = _a.toasts, onRemove = _a.onRemove, _b = _a.ttl, ttl = _b === void 0 ? 6000 : _b, _c = _a.stackSpacing, stackSpacing = _c === void 0 ? 24 : _c;
    return (React__default['default'].createElement(StyledToastContainer, null,
        React__default['default'].createElement(reactTransitionGroup.TransitionGroup, null, toasts.map(function (toast, index) {
            var zIndex = (ZINDEX - index).toString();
            var top = TOP_POSITION + index * stackSpacing;
            return (React__default['default'].createElement(Toast, { key: toast.id, toast: toast, onRemove: onRemove, ttl: ttl, style: { top: top + "px", zIndex: zIndex } }));
        }))));
};
var templateObject_1$1;

var ResetCSS = styled.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n"], ["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
});
var templateObject_1;

var baseColors = {
    failure: "#ED4B9E",
    primary: "#009933",
    primaryBright: "#009933",
    primaryDark: "#009933",
    secondary: "#7645D9",
    success: "#31D0AA",
    warning: "#FFB237",
};
var brandColors = {
    binance: "#F0B90B",
};
var lightColors = __assign(__assign(__assign({}, baseColors), brandColors), { background: "#FAF9FA", backgroundDisabled: "#E9EAEB", contrast: "#191326", invertedContrast: "#FFFFFF", input: "#eeeaf4", tertiary: "#EFF4F5", text: "#452A7A", textDisabled: "#BDC2C4", textSubtle: "#8f80ba", borderColor: "#E9EAEB", card: "#FFFFFF", gradients: {
        bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
    } });
var darkColors = __assign(__assign(__assign({}, baseColors), brandColors), { secondary: "#9A6AFF", background: "#343135", backgroundDisabled: "#3c3742", contrast: "#FFFFFF", invertedContrast: "#191326", input: "#483f5a", primaryDark: "#0098A1", tertiary: "#353547", text: "#EAE2FC", textDisabled: "#666171", textSubtle: "#c9c4d4", borderColor: "#524B63", card: "#27262c", gradients: {
        bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    } });

var light$6 = {
    background: lightColors.card,
};
var dark$6 = {
    background: darkColors.card,
};

var _a, _b;
var PRIMARY = variants$1.PRIMARY, SECONDARY = variants$1.SECONDARY, TERTIARY = variants$1.TERTIARY, TEXT = variants$1.TEXT, DANGER = variants$1.DANGER, SUBTLE = variants$1.SUBTLE, SUCCESS = variants$1.SUCCESS;
var light$5 = (_a = {},
    _a[PRIMARY] = {
        background: lightColors.primary,
        backgroundActive: lightColors.primaryDark,
        backgroundHover: lightColors.primaryBright,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
        boxShadowActive: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
        color: "#FFFFFF",
    },
    _a[SECONDARY] = {
        background: "transparent",
        backgroundActive: "transparent",
        backgroundHover: "transparent",
        border: "2px solid " + lightColors.primary,
        borderColorHover: lightColors.primaryBright,
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    _a[TERTIARY] = {
        background: lightColors.tertiary,
        backgroundActive: lightColors.tertiary,
        backgroundHover: lightColors.tertiary,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    _a[TEXT] = {
        background: "transparent",
        backgroundActive: "transparent",
        backgroundHover: lightColors.tertiary,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    _a[DANGER] = {
        background: lightColors.failure,
        backgroundActive: "#D43285",
        backgroundHover: "#FF65B8",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    _a[SUBTLE] = {
        background: lightColors.textSubtle,
        backgroundActive: lightColors.textSubtle + "D9",
        backgroundHover: lightColors.textSubtle + "B3",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    _a[SUCCESS] = {
        background: lightColors.success,
        backgroundActive: lightColors.success + "D9",
        backgroundHover: lightColors.success + "B3",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    _a);
var dark$5 = (_b = {},
    _b[PRIMARY] = __assign({}, light$5.primary),
    _b[SECONDARY] = __assign({}, light$5.secondary),
    _b[TERTIARY] = __assign(__assign({}, light$5.tertiary), { background: darkColors.tertiary, backgroundActive: darkColors.tertiary, backgroundHover: darkColors.tertiary, color: darkColors.primary }),
    _b[TEXT] = __assign(__assign({}, light$5.text), { backgroundHover: darkColors.tertiary }),
    _b[DANGER] = __assign({}, light$5.danger),
    _b[SUBTLE] = __assign({}, light$5.subtle),
    _b[SUCCESS] = __assign({}, light$5.success),
    _b);

var light$4 = {
    background: lightColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
};
var dark$4 = {
    background: darkColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
};

var light$3 = {
    handleBackground: lightColors.card,
};
var dark$3 = {
    handleBackground: darkColors.card,
};

var light$2 = {
    handleBackground: lightColors.card,
};
var dark$2 = {
    handleBackground: darkColors.card,
};

var light$1 = {
    background: lightColors.card,
    hover: "#EEEAF4",
};
var dark$1 = {
    background: darkColors.card,
    hover: "#473d5d",
};

var light = {
    background: lightColors.card,
};
var dark = {
    background: darkColors.card,
};

var darkTheme = __assign(__assign({}, base), { isDark: true, alert: dark$6, button: dark$5, colors: darkColors, card: dark$4, toggle: dark$2, nav: dark$1, modal: dark, radio: dark$3 });

var lightTheme = __assign(__assign({}, base), { isDark: false, alert: light$6, button: light$5, colors: lightColors, card: light$4, toggle: light$2, nav: light$1, modal: light, radio: light$3 });

exports.AddIcon = Icon$11;
exports.Alert = Alert;
exports.ArrowBackIcon = Icon$10;
exports.ArrowDownIcon = Icon$$;
exports.ArrowDropDownIcon = Icon$_;
exports.ArrowDropUpIcon = Icon$Z;
exports.ArrowForwardIcon = Icon$Y;
exports.AutoRenewIcon = Icon$X;
exports.BackgroundImage = BackgroundImage;
exports.BaseLayout = GridLayout$1;
exports.BinanceIcon = Icon$W;
exports.BlockIcon = Icon$13;
exports.Breadcrumbs = Breadcrumbs;
exports.BunnyPlaceholderIcon = Icon$V;
exports.Button = Button;
exports.ButtonMenu = ButtonMenu;
exports.ButtonMenuItem = ButtonMenuItem;
exports.CalculateIcon = Icon$T;
exports.Card = Card;
exports.CardBody = CardBody;
exports.CardFooter = CardFooter;
exports.CardHeader = CardHeader;
exports.CardRibbon = CardRibbon;
exports.CardViewIcon = Icon$U;
exports.CardsLayout = GridLayout;
exports.Checkbox = Checkbox;
exports.CheckmarkCircleIcon = Icon$15;
exports.CheckmarkIcon = Icon$S;
exports.ChevronDownIcon = Icon$R;
exports.ChevronLeftIcon = Icon$Q;
exports.ChevronRightIcon = Icon$P;
exports.ChevronUpIcon = Icon$O;
exports.CloseIcon = Icon$N;
exports.CogIcon = Icon$M;
exports.CommunityIcon = Icon$L;
exports.CopyIcon = Icon$K;
exports.Dropdown = Dropdown;
exports.ErrorIcon = Icon$14;
exports.Flex = Flex;
exports.Heading = Heading;
exports.HelpIcon = Icon$J;
exports.IconButton = IconButton;
exports.Image = Image;
exports.InfoIcon = Icon$12;
exports.Input = Input$1;
exports.Link = Link;
exports.LinkExternal = LinkExternal;
exports.ListViewIcon = Icon$I;
exports.LogoIcon = Icon$H;
exports.LogoRoundIcon = Icon$G;
exports.Menu = Menu;
exports.MinusIcon = Icon$F;
exports.Modal = Modal;
exports.ModalProvider = ModalProvider;
exports.NestIcon = Icon$q;
exports.OpenNewIcon = Icon$E;
exports.PancakeRoundIcon = Icon$C;
exports.PancakesIcon = Icon$D;
exports.PrizeIcon = Icon$B;
exports.Progress = Progress;
exports.ProgressBunny = Icon$y;
exports.Radio = Radio;
exports.RemoveIcon = Icon$A;
exports.ResetCSS = ResetCSS;
exports.SearchIcon = Icon$u;
exports.Skeleton = Skeleton;
exports.Spinner = Spinner;
exports.Svg = Svg;
exports.SwapVertIcon = Icon$t;
exports.SyncAltIcon = Icon$s;
exports.Tag = Tag;
exports.Text = Text;
exports.Ticket = Icon$w;
exports.TicketRound = Icon$v;
exports.ToastContainer = ToastContainer;
exports.Toggle = Toggle;
exports.VerifiedIcon = Icon$z;
exports.WarningIcon = Icon$r;
exports.Won = Icon$x;
exports.alertVariants = variants;
exports.byTextAscending = byTextAscending;
exports.byTextDescending = byTextDescending;
exports.dark = darkTheme;
exports.darkColors = darkColors;
exports.light = lightTheme;
exports.lightColors = lightColors;
exports.makeRender = makeRender;
exports.menuConfig = links;
exports.toastTypes = types;
exports.useMatchBreakpoints = useMatchBreakpoints;
exports.useModal = useModal;
exports.useParticleBurst = useParticleBurst;
exports.useTable = useTable;
exports.useWalletModal = useWalletModal;
