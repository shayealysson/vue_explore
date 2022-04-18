const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  watch: {
    //will not be executed on initaialized, only when depency data is updated
    /*
    name(value) {
      console.log('Running again...');
      if (value == '')
        this.fullName = '';
      else
        this.fullName = value + ' ' + 'III';
    }*/
    counter(value) {
      console.log('Running counter watcher...');
      if(value > 15) {
        this.counter = 0;
      }
    }

  },
  computed: {
    //will be executed once on initialize
    fullName(){
      console.log('Running again...');
      if (this.name == '')
        return '';
      else
        return this.name + ' ' + 'III';
    },
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      console.log('Running add method...');
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
