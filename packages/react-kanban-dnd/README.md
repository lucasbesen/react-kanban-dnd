<p align="center">
  <img src="https://cdn-std.dprcdn.net/files/acc_687327/AmwiMZ">
</p>

<p align="center">
  <img src="https://badgen.net/npm/v/react-kanban-dnd">
  <img src="https://badgen.net/badge/license/MIT/blue">
</p>

## :hammer: &nbsp; Install and Usage

**Live demo**: click [here](https://codesandbox.io/s/3262ywolp1)

First, you need to install **react-kanban-dnd** on your project:

```sh
yarn add react-kanban-dnd
```

Then import it inside your project:

```js
import ReactKanban from 'react-kanban-dnd';

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

That's it. Now, kanban should appear on your project.

<p align="center">
  <img src="https://cdn-std.dprcdn.net/files/acc_687326/2Nx9nO">
</p>

## :gear: &nbsp; Properties

| Prop                    | Description                                                                                                                                                                                                                                                                                                             | Required       |
| ---------------------   | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| **`onDragEnd`**         | Function that will be called when drag ends                                                                                                                                                                                                                                                                             |     false      |
| **`onDragStart`**       | Function that will be called when drag starts                                                                                                                                                                                                                                                                           |     false      |
| **`renderCard`**        | Function that will render your card. Receives a row as a parameter                                                                                                                                                                                                                                                       |     true       |
| **`columns`**           | Array that will be used to render your kanban. Check the patterns [here](#pushpin--column-array-pattern)                                                                                                                                                                                                                                                  |     true       |
| **`columnStyle`**       | Optional styling for the column                                                                                                                                                                                                                                                                                         |     false      |
| **`columnHeaderStyle`** | Optional styling for the column header                                                                                                                                                                                                                                                                                  |     false      |
| **`columnTitleStyle`**  | Optional styling for the column title                                                                                                                                                                                                                                                                                   |     false      |
| **`cardWrapperStyle`**  | Optional styling for the card wrapper                                                                                                                                                                                                                                                                                   |     false      |

## :pushpin: &nbsp; Columns array pattern

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

**Note:** Both **columnId** and **rowId** should be a **string**.

## :bulb: &nbsp; Example

```js
import ReactKanban from 'react-kanban-dnd';

export default class MyKanban extends React.Component {
  renderCard = row => (
    <Wrapper>
      <TextWrapper>
        <Label>Name:</Label>
        <Value>{row.name}</Value>
      </TextWrapper>
      <TextWrapper>
        <Label>Age:</Label>
        <Value>{row.age}</Value>
      </TextWrapper>
    </Wrapper>
  );

  render() {
    const columns = [
      {
        id: 'column1',
        title: 'Column 1',
        rows: [
          {
            id: 'row1',
            name: 'User one',
            age: 21,
          },
        ],
      },
      {
        id: 'column2',
        title: 'Column 2',
        rows: [
          {
            id: 'row2',
            name: 'User two',
            age: 23,
          },
          {
            id: 'row3',
            name: 'User three',
            age: 30,
          },
        ],
      },
      {
        id: 'column3',
        title: 'Column 3',
        rows: [
          {
            id: 'row4',
            name: 'User four',
            age: 25,
          },
        ],
      },
    ];

    return (
      <ReactKanban
        renderCard={this.renderCard}
        columns={columns}
      />
    );
  }
}
```

## 🤝 &nbsp; Contributions

Start cloning the repository:
```sh
git@github.com:lucasbesen/react-kanban-dnd.git
```

Install dependencies:
```sh
yarn
```

Then run docz;
```sh
yarn docz:dev
```

Finally go to http://localhost:3000/docs-react-kanban

Every kind of contribution is welcome. You can ping me at [Twitter](https://twitter.com/lucasbesen) as well.

## 💪🏻 &nbsp; Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars3.githubusercontent.com/u/13984388?v=4" width="60px;"/><br /><sub><b>Lucas Besen</b></sub>](https://twitter.com/lucasbesen)<br />[🐛](https://github.com/lucasbesen/react-kanban-dnd/issues?q=author%3Alucasbesen "Bug reports") [💻](https://github.com/lucasbesen/react-kanban-dnd/commits?author=lucasbesen "Code") [📖](https://github.com/lucasbesen/react-kanban-dnd/commits?author=lucasbesen "Documentation") [💡](#example-lucasbesen "Examples") [👀](#review-lucasbesen "Reviewed Pull Requests") | [<img src="https://avatars3.githubusercontent.com/u/4183877?v=4" width="60px;"/><br /><sub><b>Caio Flores</b></sub>](https://github.com/caioflores)<br />[💻](https://github.com/lucasbesen/react-kanban-dnd/commits?author=caioflores "Code") [📖](https://github.com/lucasbesen/react-kanban-dnd/commits?author=caioflores "Documentation") | [<img src="https://avatars3.githubusercontent.com/u/12630335?v=4" width="60px;"/><br /><sub><b>Isac</b></sub>](https://medium.com/@isacjunior)<br />[💻](https://github.com/lucasbesen/react-kanban-dnd/commits?author=isacjunior "Code") | [<img src="https://avatars0.githubusercontent.com/u/17767789?v=4" width="60px;"/><br /><sub><b>Nfinger</b></sub>](https://github.com/Nfinger)<br />[💻](https://github.com/lucasbesen/react-kanban-dnd/commits?author=Nfinger "Code") | [<img src="https://avatars2.githubusercontent.com/u/5461649?v=4" width="60px;"/><br /><sub><b>Austin Turner</b></sub>](https://github.com/paustint)<br />[📖](https://github.com/lucasbesen/react-kanban-dnd/commits?author=paustint "Documentation") | [<img src="https://avatars2.githubusercontent.com/u/8737187?v=4" width="60px;"/><br /><sub><b>Marcus Koh</b></sub>](http://www.kohchihao.com)<br />[🐛](https://github.com/lucasbesen/react-kanban-dnd/issues?q=author%3Akohchihao "Bug reports") | [<img src="https://avatars3.githubusercontent.com/u/28123879?v=4" width="60px;"/><br /><sub><b>Gabriel F. Luchtenberg</b></sub>](https://github.com/GLuchtenberg)<br />[💻](https://github.com/lucasbesen/react-kanban-dnd/commits?author=GLuchtenberg "Code") |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->
