<p align="center">
  <img src="https://lh4.googleusercontent.com/PJYIdIDdaYwmuZPnl2-ZHUu6bF4BT8OzjJadD5tW_TsMXfv0Jsh0CCeS2jVR5WDLPn9zOF5KdKuQNhNRATvN=w2880-h1510">
</p>

## :hammer: &nbsp; Install and Usage

First, you need to install **react-kanban** on your project

```sh
yarn add react-kanban
```

Then import **react-kanban** inside your project:

```js
import ReactKanban from 'react-kanban';

export default class MyKanban extends React.Component {
  render() {
    return (
      <ReactKanban
        onDragEnd={this.onDragEnd}
        onDragStart={this.onDragStart}
        renderCard={this.renderCard}
        columns={columns}
        columnStyle={style.columnStyle}
        columnHeaderStyle={style.columnHeaderStyle}
        columnTitleStyle={style.columnTitleStyle}
        cardWrapperStyle={style.cardWrapperStyle}
      />
    );
  }
}
```

That's it. Now, kanban should appears on your project

<p align="center">
  <img src="https://lh4.googleusercontent.com/aqcQ1VC5whZfGh7tmP2xyWgN2QGvowRtVeDmfMUiLAZgFRaoxpBWLRtDoYJuMWut58PNZOV0an1MqSKjDVeZ=w2880-h1510-rw">
</p>

## :gear: &nbsp; Properties

| Prop                    | Description                                                                                                                                                                                                                                                                                                             | Required       |
| ---------------------   | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| **`onDragEnd`**         | Function that will be called when drag ends                                                                                                                                                                                                                                                                             |     false      |
| **`onDragStart`**       | Function that will be called when drag starts                                                                                                                                                                                                                                                                           |     false      |
| **`renderCard`**        | Function that will render your card. Receives an row as parameter                                                                                                                                                                                                                                                       |     true       |
| **`columns`**           | Array that will be used to render your kanban. Check the patterns [here](#pushpin--column-array-pattern)                                                                                                                                                                                                                                                  |     true       |
| **`columnStyle`**       | Optional styling for the column                                                                                                                                                                                                                                                                                         |     false      |
| **`columnHeaderStyle`** | Optional styling for the column header                                                                                                                                                                                                                                                                                  |     false      |
| **`columnTitleStyle`**  | Optional styling for the column title                                                                                                                                                                                                                                                                                   |     false      |
| **`cardWrapperStyle`**  | Optional styling for the card wrapper                                                                                                                                                                                                                                                                                   |     false      |

## :pushpin: &nbsp; Column array pattern

Your column array should be something like this:

```js
const columns = [
  {
    id: 'columnId',
    title: 'Column Title',
    rows: [
      {
        id: 'rowId',
        ...yourPropsHere, // Those props can be used on renderCard
      },
    ],
  },
];
```

**Note:** Both **columnId** and **rowId** should be a **string**


## 🤝 &nbsp; Contributions

Every kind of contribution is welcome. You can ping me at [Twitter](https://twitter.com/lucasbesen) aswell