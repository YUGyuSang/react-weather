import './App.css';
import { useEffect } from 'react';

// 1. 앱이 실행되자마자 현재위치기반의 날씨가 보인다.
// 2. 날씨정보에는 도시, 섭씨 화씨 날씨상태
// 3. 5개의 버튼이 있다 (1개는 현재 위치 4개는 다른 도시)
// 4. 도시버튼을 클릭 할 때 마다 도시별 날씨가 나온다.
// 5. 현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나온다.
// 6. 데이터를 들고오는 동안 로딩 스피너가 돈다.
function App() {
  const getCurrentLocation =()=>{
    navigator.geolocation.getCurrentPosition((position)=>{ // 익명 함수를 주어 만들었다.
      let lat = position.coords.latitude 
      let lon = position.coords.longitude

      console.log("현재 위치 -","위도:",lat,"경도:",lon);
    });
  }

  useEffect(()=>{
    getCurrentLocation() // 실행되자마다 현재위치 정보를 가져와야하기 때문에 useEffect에 적용한다.
  },[])

  return (
    <div>
      
    </div>
  );
}

export default App;
