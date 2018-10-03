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

## Properties

| Prop                    | Description                                                                                                                                                                                                                                                                                                             | Required        |
| ---------------------   | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| **`onDragEnd`**         | fix it                                                                                                                                                                                                                                                                                                                  |                |
| **`onDragStart`**       | fix it                                                                                                                                                                                                                                                                                                                  |                |
| **`renderCard`**        | fix it                                                                                                                                                                                                                                                                                                                  |                |
| **`columns`**           | fix it                                                                                                                                                                                                                                                                                                                  |                |
| **`columnStyle`**       | fix it                                                                                                                                                                                                                                                                                                                  |                |
| **`columnHeaderStyle`** | fix it                                                                                                                                                                                                                                                                                                                  |                |
| **`columnTitleStyle`**  | fix it                                                                                                                                                                                                                                                                                                                  |                |
| **`cardWrapperStyle`**  | fix it                                                                                                                                                                                                                                                                                                                  |                |


## 🤝 &nbsp; Contributions

Every kind of contribution is welcome. You can ping me at [Twitter](https://twitter.com/lucasbesen) aswell