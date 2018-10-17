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
var react_1 = require("react");
var react_beautiful_dnd_1 = require("react-beautiful-dnd");
var styled_components_1 = require("styled-components");
var Column_1 = require("./Column");
var Container = styled_components_1.default('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  min-width: 100vw;\n  display: inline-flex;\n"], ["\n  min-width: 100vw;\n  display: inline-flex;\n"])));
var ReactKanban = /** @class */ (function (_super) {
    __extends(ReactKanban, _super);
    function ReactKanban() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            columns: _this.props.columns || [],
        };
        _this.handleDrag = function (result) {
            var columns = _this.state.columns;
            var onDragEnd = _this.props.onDragEnd;
            var destination = result.destination;
            // Dropped nowhere
            if (!result.destination)
                return;
            // Didn't move anywhere - can bail early
            if (result.source.droppableId === destination.droppableId &&
                result.source.index === destination.index)
                return;
            // TODO: Make this immutable
            var removedRow = null;
            columns.map(function (column) {
                var rows = column.rows.filter(function (row) {
                    if (row.id === result.draggableId) {
                        removedRow = row;
                        return false;
                    }
                    return true;
                });
                column.rows = rows;
            });
            columns.map(function (column) {
                if (column.id === destination.droppableId && removedRow) {
                    column.rows.push(removedRow);
                }
            });
            _this.setState({ columns: columns });
            var dropReason = __assign({ reason: 'DROP' }, result);
            return onDragEnd(dropReason, null);
        };
        return _this;
    }
    ReactKanban.prototype.render = function () {
        var _a = this.props, onDragStart = _a.onDragStart, renderCard = _a.renderCard, columnWrapperStyle = _a.columnWrapperStyle, columnHeaderStyle = _a.columnHeaderStyle, columnStyle = _a.columnStyle, columnTitleStyle = _a.columnTitleStyle, cardWrapperStyle = _a.cardWrapperStyle;
        var columns = this.state.columns;
        return (react_1.default.createElement(react_beautiful_dnd_1.DragDropContext, { onDragStart: onDragStart, onDragEnd: this.handleDrag },
            react_1.default.createElement(react_beautiful_dnd_1.Droppable, { droppableId: "board", isDropDisabled: true }, function (provided) { return (react_1.default.createElement(Container, __assign({ innerRef: provided.innerRef }, provided.droppableProps), columns.map(function (column, index) { return (react_1.default.createElement(Column_1.default, { key: index, index: index, column: column, renderCard: renderCard, columnHeaderStyle: columnHeaderStyle, columnTitleStyle: columnTitleStyle, columnStyle: columnStyle, columnWrapperStyle: columnWrapperStyle, cardWrapperStyle: cardWrapperStyle })); }))); })));
    };
    return ReactKanban;
}(react_1.default.Component));
exports.default = ReactKanban;
var templateObject_1;
//# sourceMappingURL=ReactKanban.js.map