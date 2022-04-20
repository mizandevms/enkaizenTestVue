<template>
	<div class="container mx-auto p-6">
		<div class="relative bg-gray-50 rounded-md py-16 px-6">
			<div class="relative max-w-7xl mx-auto">
				<div class="">
					<div class="flex justify-between items-center">
						<h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">From the blog</h2>
						<Button name="Create Blog" :action="{name: 'CreateBlog'}" />
					</div>
					<p class="mt-3 text-xl text-gray-500 sm:mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.</p>
				</div>
				<div v-if="posts.length" class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
					<div v-for="post in posts" :key="post.title">
						<Post :post="post" />
					</div>
				</div>
				<div v-else class="mt-12 e">
					<div class="border border-red-300 rounded-md p-6 flex justify-center items-center max-w-5xl mx-auto bg-red-200">
						<span class="space-x-2 flex justify-center items-center text-red-600">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
							</svg>
							No Post available. Please create blog</span
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Button from "../components/Button.vue"
import Post from "../components/Post.vue"
import {computed} from "vue"
import {useStore} from "vuex"
export default {
	components: {
		Button,
		Post,
	},
	setup() {
		const store = useStore()
		const posts = computed(() => {
			console.log(store.state.posts)
			return store.state.posts
		})
		return {
			posts,
		}
	},
}
</script>

<style scoped></style>
