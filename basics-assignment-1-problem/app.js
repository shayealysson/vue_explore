const app = Vue.createApp({
    data() {
        return{
            name: 'Shaye Alysson',
            age: 24,
            imageLink: 'https://drive.google.com/uc?export=view&id=1jqXvKcUZ1rU3pL1KUp4FIDcz4QX2NmpN',
            inputName: null
        };
    },
    methods: {
        ageInFiveYears() {
            return this.age + 5;
        },
        randomNumber() {
            return Math.floor(Math.random() * 2);
        },
        changeDisplayName() {
            if (this.inputName != "")
                this.name = this.inputName;
            return this.name;
        }
    }
});

app.mount('#assignment');