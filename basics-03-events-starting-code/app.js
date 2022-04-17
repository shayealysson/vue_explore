const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increaseCounter(num) {
        return this.counter+= num;
    },
    decreaseCounter(num) {
      return this.counter-= num;
  }
}
});

app.mount('#events');
