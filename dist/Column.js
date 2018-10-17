"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var react_beautiful_dnd_1 = require("react-beautiful-dnd");
var List_1 = require("./List");
var Title = styled('h4')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 10px;\n  transition: background-color ease 0.2s;\n  flex-grow: 1;\n  user-select: none;\n  position: relative;\n  &:focus {\n    outline: 2px solid purple;\n    outline-offset: 2px;\n  }\n  font-size: 14px;\n  font-weight: 600;\n  font-family: 'Open Sans', sans-serif;\n  color: #515c6a;\n"], ["\n  padding: 10px;\n  transition: background-color ease 0.2s;\n  flex-grow: 1;\n  user-select: none;\n  position: relative;\n  &:focus {\n    outline: 2px solid purple;\n    outline-offset: 2px;\n  }\n  font-size: 14px;\n  font-weight: 600;\n  font-family: 'Open Sans', sans-serif;\n  color: #515c6a;\n"])));
var Container = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: 10px;\n  display: flex;\n  flex-direction: column;\n  height: 300px;\n  margin-bottom: 10px;\n  width: 270px;\n"], ["\n  margin: 10px;\n  display: flex;\n  flex-direction: column;\n  height: 300px;\n  margin-bottom: 10px;\n  width: 270px;\n"])));
var Header = styled('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 2px;\n  border-left: 1px solid rgba(96, 115, 137, 0.12);\n  border-right: 1px solid rgba(96, 115, 137, 0.12);\n  border-top: 1px solid rgba(96, 115, 137, 0.12);\n  background-color: 'rgba(96, 115, 137, 0.04)';\n  transition: background-color 0.1s ease;\n  &:hover {\n    background-color: rgba(96, 115, 137, 0.04);\n  }\n  height: 50px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 2px;\n  border-left: 1px solid rgba(96, 115, 137, 0.12);\n  border-right: 1px solid rgba(96, 115, 137, 0.12);\n  border-top: 1px solid rgba(96, 115, 137, 0.12);\n  background-color: 'rgba(96, 115, 137, 0.04)';\n  transition: background-color 0.1s ease;\n  &:hover {\n    background-color: rgba(96, 115, 137, 0.04);\n  }\n  height: 50px;\n"])));
var Wrapper = styled('div')(templateObject_4 || (templateObject_4 = __makeTemplateObject([""], [""])));
var Column = /** @class */ (function (_super) {
    __extends(Column, _super);
    function Column() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Column.prototype.render = function () {
        var _a = this.props, index = _a.index, column = _a.column, renderCard = _a.renderCard, columnWrapperStyle = _a.columnWrapperStyle, columnStyle = _a.columnStyle, columnTitleStyle = _a.columnTitleStyle, columnHeaderStyle = _a.columnHeaderStyle, cardWrapperStyle = _a.cardWrapperStyle;
        return (React.createElement(react_beautiful_dnd_1.Draggable, { draggableId: column.id, index: index, isDragDisabled: true }, function (provided, snapshot) { return (React.createElement(Wrapper, __assign({ innerRef: provided.innerRef }, provided.draggableProps),
            React.createElement(Container, { style: columnWrapperStyle },
                React.createElement(Header, { style: columnHeaderStyle, isDragging: snapshot.isDragging },
                    React.createElement(Title, __assign({ style: columnTitleStyle, isDragging: snapshot.isDragging }, provided.dragHandleProps), column.title)),
                React.createElement(List_1.default, { key: index, columnStyle: columnStyle, listId: column.id, column: column, renderCard: renderCard, cardWrapperStyle: cardWrapperStyle })))); }));
    };
    return Column;
}(React.Component));
exports.default = Column;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=Column.js.map