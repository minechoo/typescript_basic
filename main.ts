//함수의 return값에 타입을 지전하면 비효울적인 이유
//1. 이미 리턴된 값이기 때문에 타입오류가 뜨더라도 할 수 있는 작업이 없음
//2. 에러자체가 호출단에서 발생하는게 아닌 함수정의단에서 리턴되는 시접에 발생하기때문에 호출시 오류파악이 힘듬

//공통된 함수의 구조는 동일한 인터페이스 적용가능

interface Calc {
	(n1: number, n2: number): any;
}
const plus: Calc = (n1, n2) => {
	return n1 + n2;
};

const minus: Calc = (n1, n2) => {
	return n1 - n2;
};

const multiply: Calc = (n1, n2) => {
	return n1 * n2;
};

const divide: Calc = (n1, n2) => {
	return n1 / n2;
};

const result: number = plus(3, 4);
console.log(result);

const info = (num: number | string) => {
	console.log(`${num}번째 방문자입니다`);
};
info('3');

const test = (n1: number, n2: number, n3?: number) => {
	// | falsy한 값이 들어오면 어떤것이든 대체값 적용
	// ?? null, undefined이 들어왔을때에만 대체값 적용
	// 잘못된값이 들어오는게 아닌 아예 들어오는 값이 없을때 대체값을 넣을떄에는 ?? 연산자 활용
	const result = n1 + n2 + (n3 ?? 5);
	return result;
};

//test(1, 2);
console.log(test(1, 2, null));
