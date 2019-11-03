import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
/**
 * Appregistry는 모든 리액트 네이티브 앱을 실행함에 있어서 자바스크립트 진입점입니다.
 */
AppRegistry.registerComponent(appName, () => App);
