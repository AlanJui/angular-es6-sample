import Person from '../model/Person';

export default class PersonService {

	/*
	  The below annotation will be processes by ngAnnotate, which
	  will annotate the constructor after compiling for minification.
	*/

	constructor($q) {
		'ngInject';

		this._$q = $q;
	}

	getPerson(paraName) {
		let name = paraName || 'World';

		return this._$q.when(new Person(name));
	}
}