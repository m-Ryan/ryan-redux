# ryan-redux

---

Install
---

```
npm install --save-dev ryan-redux

```

```
yarn add --dev ryan-redux

```


### 基于 react-redux 封装的模型，简单易用
[example](https://github.com/m-Ryan/RyanCMS/ryan-redux/example)

Usage 

---

## 建立一个 model
## model/books.ts
```js
import { ReduxModel } from 'ryan-redux';

export interface Book {
	id: number;
	name: string;
	price: number;
}

class Books extends ReduxModel<Book[]> {
	nameSpace = 'books';

	state: Book[] = [];

	add(payload: Book) {
		this.state.push(payload);
		this.setState([ ...this.state ]);
	}

	del(id: number) {
		this.setState(this.state.filter((item) => item.id !== id));
	}

	getNewBook() {
		return this.state[this.state.length - 1];
	}
}

export default new Books();

```

## 统一在这里导出
## model/index.ts

```js
import books from './books';

export const model = { books };

```
## 生成 store
## store.ts

```js
import { model } from './model';
import { createStore } from './ryan-redux';

export const store = createStore(model);
```

## 注入进 props
## index.tsx

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './store';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from './ryan-redux';

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Route component={App} />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
```

## 具体使用
## App.tsx

```js
import React, { Component } from 'react';
import { Table, Button } from 'antd';
import 'antd/dist/antd.css';
import booksModel, { Book } from './model/books';
import { model } from './model';
import { connect } from 'ryan-redux';

interface Props {
	books: Book[];
}

interface State {
	countId: number;
}

@connect(({ books }: typeof model) => ({ books }))
export default class App extends Component<Props, State> {
	state: State = {
		countId: 1
	};
	addBook = async () => {
		const count = this.state.countId;
		let book = {
			id: count,
			name: `book${count}`,
			price: Math.round(Math.random() * 1000)
		};
		booksModel.add(book);
		this.setState({
			countId: count + 1
		});
	};

	delBook = (id: number) => {
		booksModel.del(id);
	};

	render() {
		const { books } = this.props;
		const columns = [
			{
				title: '书名',
				dataIndex: 'name',
				render: (text: string) => <a href="javascript:;">{text}</a>
			},
			{
				title: 'id',
				dataIndex: 'id'
			},
			{
				title: '价格',
				dataIndex: 'price'
			},
			{
				title: '操作',
				render: (text: string, record: Book) => (
					<span onClick={() => this.delBook(record.id)}>
						<a href="javascript:;">Delete</a>
					</span>
				)
			}
		];
		return (
			<div>
				<Table rowKey={(record) => record.id.toString()} columns={columns} dataSource={books} />
				<p>
					<Button type="primary" onClick={this.addBook}>
						添加
					</Button>
				</p>
			</div>
		);
	}
}

```
