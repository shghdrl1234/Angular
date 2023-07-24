// 단일 Recipe에 대한 정의.
export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;

    // 인스턴스가 생성되면서 실행되는 것들.
    constructor(name: string, desc: string, imagePath: string) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
}