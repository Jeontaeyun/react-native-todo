# React Native To do list 예제

## 프로젝트 목적

 해당 프로젝트는 안드로이드와 IOS를 지원하는 크로스 플랫폼 프레임 워크 리액트 네이티브를 학습하기 위한 프로젝트입니다.  
 해당 프로젝트는 **"리액트 네이티브 인 액션"**을 보며 학습한 것으로 해당 예제를 참조하며 추가로 새로운 기능을 넣는 방식을 취하고 있습니다.

## 프로젝트 설명

 해당 프로젝트는 다음과 같은 폴더 구조를 가지고 있습니다. 

 구분 | 설명
 --- | -------------------------------------------------------------------------------------
 ios | IOS 플랫폼 용 코드와 의존성 라이브러리들이 있습니다.
 android | 안드로이드 플랫폼 용 코드와 의존성 라이브러리들이 있습니다. 
 src | 리액트 컴포넌트를 넣는 부분입니다. **components - container - screeen**의 구성으로 개발을 진행할 것입니다.
 app.json | 리액트 네이티브 앱의 이름 및 정보를 넣는 부분입니다.
 index.js | 리액트 네이티브의 진입점입니다. 리액트 네이티브 어플리케이션을 실행하면 해당 부분에서 시작합니다.

 해당 프로젝트의 src 아래 하위 디렉토리는 다음과 폴더 구조를 가지고 있습니다.

  구분 | 설명
 --- | -------------------------------------------------------------------------------------
 components | 하나의 기능을 하기 위한 컴포넌트를 구현합니다.
 container | 컴포넌트를 조합해 하나의 논리적 기능을 수행하는 컨테이너를 완성합니다.
 screeen | 컨테이너를 조합해 하나의 화면을 구성하는 것을 보여줍니다. 어플리케이션의 전체적 동작을 나타냅니다.
