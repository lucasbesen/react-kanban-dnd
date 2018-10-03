<p align="center">
  <img src="https://lh3.googleusercontent.com/ZCfEPmHJ61C-pPz8jXvB6l6O_nw57a83lHSIkChluRCshPjt8KJcXQgZOBeTmPJk9-UHKVa1p5IlqBF538tp=w2880-h1510">
</p>

## :hammer: Install and Usage

First, you will need to install **react-kanban** on your project

```sh
yarn add react-kanban
```

Then import **react-kanban** inside your project:

```js
import ReactKanban from 'react-loadable';

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

That's it. Now **react-kanban** should appears on your project :v:

## 🤝 Contributions

Every kind of contribution is welcome and you can ping me at [Twitter](https://twitter.com/lucasbesen) aswell