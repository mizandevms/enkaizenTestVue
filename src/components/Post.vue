<template>
    <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div class="flex-shrink-0">
            <img class="h-48 w-full object-cover" :src="post.images[0].link" :alt="post.title" />
        </div>
        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
                <a class="block mt-2">
                    <p class="text-xl font-semibold text-gray-900">
                        {{ post.title }}
                    </p>
                    <p class="mt-3 text-base text-gray-500">
                        {{ post.description }}
                    </p>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	components: {
		
	},
    props:{
        post:Object
    },
	setup() {
		return {
		
		}
	},
}
</script>

<style scoped></style>
