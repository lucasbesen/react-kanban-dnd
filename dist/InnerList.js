"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_beautiful_dnd_1 = require("react-beautiful-dnd");
var idx_1 = require("idx");
var Card_1 = require("./Card");
var InnerList = /** @class */ (function (_super) {
    __extends(InnerList, _super);
    function InnerList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InnerList.prototype.render = function () {
        var _this = this;
        var _a = this.props, column = _a.column, cardWrapperStyle = _a.cardWrapperStyle;
        return idx_1.default(column, function (_) { return _.rows[0]; })
            ? column.rows.map(function (row, index) { return (React.createElement(react_beautiful_dnd_1.Draggable, { key: row.id, draggableId: row.id, index: index }, function (dragProvided, dragSnapshot) { return (React.createElement(Card_1.default, { key: index, row: row, isDragging: dragSnapshot.isDragging, provided: dragProvided, renderCard: _this.props.renderCard, cardWrapperStyle: cardWrapperStyle })); })); })
            : [];
    };
    return InnerList;
}(React.Component));
exports.default = InnerList;
//# sourceMappingURL=InnerList.js.map