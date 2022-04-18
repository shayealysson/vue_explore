const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullName: ''
    };
  },
  watch: {
    name(value) {
      console.log('Running again...');
      if (value == '')
        this.fullName = '';
      else
        this.fullName = value + ' ' + 'III';
    }
  },
  computed: {
    /*
    fullName(){
      console.log('Running again...');
      if (this.name == '')
        return '';
      else
        return this.name + ' ' + 'III';
    },*/
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput(){
      this.name = '';
    },
    outputFullName(){
      console.log('Running again...');
      if (this.name == '')
        return '';
      else
        return this.name + ' ' + 'III';
    }
  }
});

app.mount('#events');
