const app = Vue.createApp({
    data() {
        return{
            courseGoalA: 'Learn Vue!',
            courseGoalB: 'Learn React!',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal() {
            const randomNum = Math.random();
            if (randomNum < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');