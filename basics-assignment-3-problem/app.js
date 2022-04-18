const app = Vue.createApp({
    data() {
      return {
        number: 0,
      };
    },
    watch: {
        number() {
            console.log('Running number watcher...');
            setTimeout(()=>{
                this.number = 0;
                console.log('RESETTING NUMBER: '+ this.number);
            }, 5000);
        }
    },
    computed: {
        validateNumber(){
            console.log("Validating Number ...");
            if (this.number < 37) {
                return "Not there yet";
            } else if (this.number == 37) {
                return 37;
            } else {
                return "Too much!";
            }
        }
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
  