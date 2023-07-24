// 3. @angular/core로 부터 Component를 사용하겠다 명시함.
import { Component } from "@angular/core";

// 2. Component 데코레이터를 통해 Angular가 이 Component를 인식하게 해줄 것임.
@Component({
// 4. Component를 구성하기 위해 JS 객체를 전달해야한다.
    // 5. selector에 이 component를 사용할 수 있도록 selector를 넣는다.
    // 이 때, 고유한 selector가 있는지, 기존 HTML 엘리먼트를 덮어쓰지 않는지 확인한다.
    selector: 'app-header',
    // 6. 외부에서 가지고올 template의 경로를 지정해준다.
    templateUrl: 'header.component.html'
})

// 1. 컴포넌트는 단순히 TS 클래스이다.
export class HeaderComponent {

}