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
var react_beautiful_dnd_1 = require("react-beautiful-dnd");
var InnerList_1 = require("./InnerList");
var Wrapper = styled('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: 'rgba(96, 115, 137, 0.04)';\n  display: flex;\n  flex-direction: column;\n  opacity: ", ";\n  padding: 10px;\n  border-radius: 2px;\n  border-left: 1px solid rgba(96, 115, 137, 0.12);\n  border-right: 1px solid rgba(96, 115, 137, 0.12);\n  border-bottom: 1px solid rgba(96, 115, 137, 0.12);\n  padding-bottom: 0;\n  transition: background-color 0.1s ease, opacity 0.1s ease;\n  user-select: none;\n"], ["\n  background-color: 'rgba(96, 115, 137, 0.04)';\n  display: flex;\n  flex-direction: column;\n  opacity: ",
    ";\n  padding: 10px;\n  border-radius: 2px;\n  border-left: 1px solid rgba(96, 115, 137, 0.12);\n  border-right: 1px solid rgba(96, 115, 137, 0.12);\n  border-bottom: 1px solid rgba(96, 115, 137, 0.12);\n  padding-bottom: 0;\n  transition: background-color 0.1s ease, opacity 0.1s ease;\n  user-select: none;\n"])), function (_a) {
    var isDropDisabled = _a.isDropDisabled;
    return isDropDisabled ? 0.5 : 'inherit';
});
var DropZone = styled('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  min-height: 250px;\n  margin-bottom: 10px;\n"], ["\n  min-height: 250px;\n  margin-bottom: 10px;\n"])));
var List = function (_a) {
    var isDropDisabled = _a.isDropDisabled, listId = _a.listId, column = _a.column, renderCard = _a.renderCard, columnStyle = _a.columnStyle, cardWrapperStyle = _a.cardWrapperStyle;
    return (React.createElement(react_beautiful_dnd_1.Droppable, { droppableId: listId || 'LIST', isDropDisabled: isDropDisabled }, function (dropProvided, dropSnapshot) { return (React.createElement(Wrapper, __assign({ style: columnStyle, isDraggingOver: dropSnapshot.isDraggingOver, isDropDisabled: isDropDisabled }, dropProvided.droppableProps),
        React.createElement(DropZone, { innerRef: dropProvided.innerRef },
            React.createElement(InnerList_1.default, { column: column, renderCard: renderCard, cardWrapperStyle: cardWrapperStyle }),
            dropProvided.placeholder))); }));
};
exports.default = List;
var templateObject_1, templateObject_2;
//# sourceMappingURL=List.js.map