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
