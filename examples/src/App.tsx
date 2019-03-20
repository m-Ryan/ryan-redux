import React, { Component } from 'react';
import { Table, Button } from 'antd';
import 'antd/dist/antd.css';
import { Book } from './model/books';
import { connect } from 'ryan-redux';
import { booksModel } from './model';

interface Props {
	books: Book[];
}

interface State {
	countId: number;
}

@connect(({ books }: { books: typeof booksModel.state }) => ({ books }))
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
