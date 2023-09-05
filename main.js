const recipe = ['pie', 'cake', 'sandwitch'];
const movieData = [
    { title: 'One piece', grade: 15, genre: 'advanture', isSubtitle: true, vid: 'url' },
    { title: 'flower', grade: 17, genre: 'drama', isSubtitle: true, vid: 'url' },
    { title: 'tree', grade: 12, genre: 'fiction', isSubtitle: true, vid: 'url' },
];
const createList = (data) => {
    console.log(data);
};
createList(movieData);
createList(recipe);
createList('abc');
createList(2);
