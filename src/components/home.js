// Home

export default {
    setup() {
    },
    template: `
     <div class="flex justify-center md:justify-end">
    <a href="#" class="btn text-primary border-primary md:border-3 md:rounded-full px-3 py-1 hover:bg-primary hover:text-white">Log in</a>
    <a href="#" class="btn text-primary ml-2 border-primary md:border-3 rounded-full px-3 py-1 hover:bg-primary hover:text-white">Sign up</a>
  </div>

  <header>
    <h2 class="text-gray-700 text-6xl font-semibold">Recipes</h2>
    <h3 class="text-2xl font-semibold">For Ninjas</h3>
  </header>

  <div>
    <h4 class="font-bold pb-2 mt-12 border-b border-gray-200">Latest Recipes</h4>

    <div class="mt-8 grid lg:grid-cols-3 gap-10">
      <!-- cards go here -->
      <div class="card hover:shadow-lg"> 
        <img src="../assets/img/stew.jpg" alt="stew" class="h-32 sm:h-48 w-full object-cover">
        <div class="m-4">
          <span class="font-bold">5 Bean Chili Stew</span>
          <span class="block text-gray-500 text-sm">Recipe by Mario</span>
        </div>
        <div class="badge">
          <svg class="mr-1 inline-block w-5" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
        </svg>
          <span>25 mins</span>
        </div>
      </div>
      <div class="card hover:shadow-lg"> 
        <img src="../assets/img/noodles.jpg" alt="noodles" class="h-32 sm:h-48 w-full object-cover">
        <div class="m-4">
          <span class="font-bold">Veg Noodles</span>
          <span class="block text-gray-500 text-sm">Recipe by Mario</span>
        </div>
        <div class="badge">
          <svg class="mr-1 inline-block w-5" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
        </svg>
          <span>25 mins</span>
        </div>
      </div>
      <div class="card"> 
        <img src="../assets/img/curry.jpg" alt="curry" class="h-32 sm:h-48 w-full object-cover">
        <div class="m-4">
          <span class="font-bold">Tofu Curry</span>
          <span class="block text-gray-500 text-sm">Recipe by Mario</span>
        </div>
        <div class="badge">
          <svg class="mr-1 inline-block w-5" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
        </svg>
          <span>25 mins</span>
        </div>
      </div>
    </div>

    <h4 class="font-bold pb-2 mt-12 border-b border-gray-200">Most Popular</h4>

    <div class="mt-8">
      <!-- cards go here -->
    </div>
  </div>

  <div class="mt-12 flex justify-center">
    <div class="btn bg-secondary-100 text-secondary-200 hover:shadow-inner">Load more</div>
  </div> 
  `}