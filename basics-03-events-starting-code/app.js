const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increaseCounter() {
        return this.counter++;
    },
    decreaseCounter() {
      return this.counter--;
  }
}
});

app.mount('#events');
