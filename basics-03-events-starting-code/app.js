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
    setName(event){
      this.name = event.target.value;
    },
}
});

app.mount('#events');
