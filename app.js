const app = Vue.createApp({
    data() {
        return{
            courseGoal: 'Finish the course and learn vue!',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal() {
            const randomNum = Math.random();
            if (randomNum < 0.5) {
                return 'Learn Vue!';
            } else {
                return 'Learn React too!';
            }
        }
    }
});

app.mount('#user-goal');