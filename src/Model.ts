export default abstract class ReduxModel<S> {
	abstract nameSpace: string;

	abstract state: S;

	setState(state: S) {
		return state;
	}
}
