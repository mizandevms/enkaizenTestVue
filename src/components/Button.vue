<template>
    <div class="">
       <router-link :to="action" class="inline-flex items-center justify-center gap-x-1 px-4 py-2 border border-transparent text-base font-medium rounded-md text-gray-50 bg-cyan-800 hover:bg-opacity-70 cursor-pointer">
            {{name}}
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
            </svg>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
   name:String,   
   action:Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
