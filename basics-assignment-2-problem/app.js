const app = Vue.createApp({
    data() {
        return {
            input1: ''
        };
    },
    methods: {
        displayAlert() {
            alert('I pressed the button!');
        },
        setOutput(event) {
            this.input1 = event.target.value;
        }
    }
});

app.mount('#assignment');