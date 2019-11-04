import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
/**
 * Appregistry는 모든 리액트 네이티브 앱을 실행함에 있어서 자바스크립트 진입점입니다.
 * 자바스크립트 콘솔(개발자 메뉴에서 사용 가능)을 사용하면 앱을 디버깅하고 필요한 정보를 기록하는데 유용
 */
AppRegistry.registerComponent(appName, () => App);
