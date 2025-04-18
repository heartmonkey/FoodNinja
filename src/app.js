// App

import Nav from './components/nav.js'
import Home from './components/home.js'

export default {
  setup() {
  },
  template:  `
    <div class="grid md:grid-cols-3">
      <div class="md:col-span-1 md:flex md:justify-end">
        ${Nav.template}
      </div>
      
      <main class="px-16 py-16 bg-gray-100 col-span-2 ">
        ${Home.template}
      </main>
          
    </div>
  `
}


  
