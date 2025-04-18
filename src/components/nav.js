// Nav

import {ref} from 'vue'
export default {
  setup() {

    // Goal of Function: Simple toggle menu in case
    
    const active = ref(true)
    function toggleMenu(){
      active.value = !active.value
    }

    return {active, toggleMenu}
  },
  template: `
  <div class="md:col-span-1 md:flex md:justify-end">
    <nav class="text-right">
      <div class="flex justify-between items-center">
        <h1 class="font-bold uppercase p-4 border-b border-gray-100">
          <a href="/" class="hover:text-gray-700">Food Ninja</a>
        </h1>
        <div class="px-4 cursor-pointer md:hidden" @click="toggleMenu()">
          <svg class="w-6 h-6"  fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </div>
      </div>
      <ul class="text-sm mt-6 hidden md:block">
        <li class="text-gray-700 font-bold py-1">
          <a href="#" class="block px-4 flex justify-end border-r-4 border-primary">
            <span>Home</span>
            <svg class="w-5 ml-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
          </a>
        </li>
        <li class="py-1">
          <a href="#" class="block px-4 flex justify-end border-r-4 border-white">
            <span>About</span>
            <svg class="w-5 ml-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
          </a>
        </li>
        <li class="py-1">
          <a href="#" class="block px-4 flex justify-end border-r-4 border-white">
            <span>Contact</span>
            <svg class="w-5 ml-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          </a>
        </li>
      </ul>
    </nav>
  </div>
  `
}
