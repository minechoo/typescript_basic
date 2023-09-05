type Grade = 12 | 15 | 17;
type Genre = 'drama' | 'advanture' | 'fiction';

interface Movie {
	title: string;
	grade: Grade;
	genre: Genre;
	isSubtitle: boolean;
	vid?: string;
}

const recipe: string[] = ['pie', 'cake', 'sandwitch'];

const movieData: Movie[] = [
	{ title: 'One piece', grade: 15, genre: 'advanture', isSubtitle: true, vid: 'url' },
	{ title: 'flower', grade: 17, genre: 'drama', isSubtitle: true, vid: 'url' },
	{ title: 'tree', grade: 12, genre: 'fiction', isSubtitle: true, vid: 'url' },
];
const createList = <type>(data: type[] | type) => {
	console.log(data);
};
createList<Movie>(movieData);
createList<string>(recipe);
createList('abc');
createList(2);
