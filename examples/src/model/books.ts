import { ReduxModel } from 'ryan-redux';

export interface Book {
	id: number;
	name: string;
	price: number;
}

export default class Books extends ReduxModel<Book[]> {
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
