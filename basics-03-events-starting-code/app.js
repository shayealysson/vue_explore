const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    increaseCounter(num) {
      return this.counter+= num;
    },
    decreaseCounter(num) {
      return this.counter-= num;
    },
    setName(event, lastName){
      this.name = event.target.value + ' ' + lastName;
    },
    submitForm(event) {
      alert('Submitted!');
    },
}
});

app.mount('#events');
