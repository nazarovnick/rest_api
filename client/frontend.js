import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

const App = {
    data() {
        return {
            form: {
                name: '',
                value: ''
            },
            contacts: [
                { id:1, name: 'Nick', value: '+7-921-100-20-30', marked: false }
            ]
        }
    },
    computed: {
      canCreate() {
          return this.form.value.trim() && this.form.name.trim()
      }
    },
    methods: {
         createContact() {
             const {...contact} = this.form
             this.contacts.push({...contact, id: Date.now(), marked: false})
             this.form.name = this.form.value = ''
         },
        markContact(id) {
            const contact = this.contacts.find(c => c.id === id)
            contact.marked = true
        },
        removeContact(id) {
            this.contacts = this.contacts.filter(c => c.id !== id)
        }
    }
}

createApp(App).mount('#app')