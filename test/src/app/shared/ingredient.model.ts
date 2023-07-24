export class Ingredient {

    // 인수 이름으로 지정한 이름을 가진 속성을 자동으로 제공해줌.
    // 이 생성자에서 받은 값을 새로 생성된 속성에 자동으로 할당함.
    constructor(public name: string, public amount: number) {

    }

}