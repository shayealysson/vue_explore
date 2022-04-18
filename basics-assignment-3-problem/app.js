const app = Vue.createApp({
    data() {
      return {
        number: 0,
        validNumber: '',
      };
    },
    watch: {
    
    },
    computed: {
    },
    methods: {
      add(num) {
        console.log('Adding value: '+num);
        this.number += num;
        console.log('Total number: '+this.number);
      },
    }
  });
  
  app.mount('#assignment');
  