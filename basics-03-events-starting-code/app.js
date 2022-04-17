const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  methods: {
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
      event.preventDefault();
      alert('Submitted!');
    },
}
});

app.mount('#events');
