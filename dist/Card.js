"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var Container = styled_components_1.default('a')(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var Content = styled_components_1.default('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  box-shadow: ", ";\n  flex-grow: 1;\n  flex-basis: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 8px;\n"], ["\n  box-shadow: ",
    ";\n  flex-grow: 1;\n  flex-basis: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 8px;\n"])), function (_a) {
    var isDragging = _a.isDragging;
    return isDragging ? '2px 2px 1px rgba(0,0,0,0.2)' : 'none';
});
var Card = function (_a) {
    var isDragging = _a.isDragging, provided = _a.provided, renderCard = _a.renderCard, row = _a.row, cardWrapperStyle = _a.cardWrapperStyle;
    return (React.createElement(Container, __assign({ innerRef: provided.innerRef }, provided.draggableProps, provided.dragHandleProps),
        React.createElement(Content, { style: cardWrapperStyle, isDragging: isDragging }, renderCard(row))));
};
exports.default = Card;
var templateObject_1, templateObject_2;
//# sourceMappingURL=Card.js.map