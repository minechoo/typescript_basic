//기본 타입
let test: string = 'hello';
let num: number = 0;
let isFemale: boolean = true;

//참조형
let like: string[] = ['game', 'music', 'movie'];
let dislike: Array<string> = ['study', 'homework', 'exercise'];
let odd: number[] = [1, 3, 5];
let even: Array<number> = [2, 4, 6];
let abc: boolean[] = [true, false];
let bbc: Array<boolean> = [true, false];
//tuple : 배열에 들어가는 자료형이 다를때 배열의 순서마다 타입지정
let arr1: [number, string] = [3, '3'];

type Score = 'A' | 'B' | 'C' | 'D' | 'E';

//객체 타입지정
//interface : 객체처럼 자료의 구조가 복잡한 경우 직접 커스터마이징된 타입을 생성
interface Student {
	name: string;
	age: number;
	readonly isFemale: boolean; //해당 property는 읽기 전용, 변경 불가능
	address?: string; //해당 타입의 property는 optional 하게 적용
	[grade: number]: Score; //property 값을 산정할 수 없을때 대괄호로 묶어서 타입지정 가능
}
//Student라는 커스텀 인터페이스 타입이 지정된 객체
let student1: Student = {
	name: 'David',
	age: 20,
	isFemale: false,
	//address: 'Seoul',
	1: 'C',
};

student1.name = 'andy';

let student2: Student = {
	name: 'Emily',
	age: 30,
	isFemale: true,
	address: 'Busan',
	2: 'B',
};
student2[2] = 'A';
