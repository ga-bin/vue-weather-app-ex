import { createStore } from 'vuex';

// store 만들기
export default createStore({
    state: {
        // 데이터 저장
        count: 0,
        // 날씨 데이터 상태변수
        weatherData : {
            icon: 'icon',
            temp: 0,
            text: 'text',
            location: 'location',
            city: 'Seoul',
        },
        toggle: false, // true일 때 about을 보여주기
    },
    mutations: {
        // 데이터 변경 함수
        addCount(state, payload) {
            state.count += payload;
        },
        updateWeather(state, payload) {
                state.weatherData.icon = payload.weather[0].icon;
                state.weatherData.temp = payload.main.temp;
                state.weatherData.text = payload.weather[0].description;
                state.weatherData.location = payload.sys.country;
                state.weatherData.city = payload.name;
        },
        onSearchCity(state, payload) {
            state.weatherData.city = payload;       
        },
        toggleButton(state) {
            state.toggle = !state.toggle;
        }
    },
    actions: {
        // 날씨 데이터 가져오기
        getWeather(context) {
            const API_KEY = import.meta.env.VITE_API_KEY;
            const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${context.state.weatherData.city}&appid=${API_KEY}`
            fetch(API_URL)
                .then(res => res.json())
                .then(data => {
                // mutation 함수로 날씨 정보 업데이트
                context.commit('updateWeather', data);

                    console.log(data);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }
})