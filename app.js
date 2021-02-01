const app = Vue.createApp({
    data() {
        return {
            detailsAreVisible : false,
            friends : [{id : 'Dhara', name : 'Dhara Patel', phone : 1234567890, email : 'dhara123@gmail.com'},{id : 'Krunali' , name : 'Krunali Panchal' , phone : 2345678901, email : 'krunali456@gmail.com'} ],
        };
    },
    methods : {
        toggleSDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        } 
    }
});

app.component('friend-contact' , {
    template: `   
    <li>
          <h2>{{ friend.name }}</h2>
          <button v-on:click="toggleDetails()">{{ detailsVisible ? 'Hide' : 'Show' }} Details</button>
          <ul v-if ="detailsVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }} </li>
          </ul>
        </li>
    
    `,
    data() {
        return { detailsVisible : false,
                  friend : {id : 'Dhara', name : 'Dhara Patel', phone : 1234567890, email : 'dhara123@gmail.com'}      
        };
    },
    methods: {
        toggleDetails() {
            this.detailsVisible = !this.detailsVisible;
        }
    }
});

app.mount('#app');