<template>
	<!-- step 1 -->
	<div class="space-y-2">
		<div class="space-y-2">
			<div class="flex flex-col justify-start space-y-2">
				<label for="title" class="text-cyan-600 font-medium flex justify-start items-center space-x-2"
					>Title
					<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
						<path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
					</svg>
				</label>
				<input required="required" class="py-1 px-2 border border-gray-200 rounded-md focus:outline-none focus:ring-transparent" id="title" placeholder="Title" v-model="form.title" />
				<span v-if="msg.title == true" class="text-xs text-red-700 text-center w-full py-2">Title can not be empty</span>
			</div>
			<div class="flex flex-col justify-start space-y-2">
				<div class="flex justify-between items-center">
					<label for="description" class="text-cyan-600 font-medium flex justify-start items-center space-x-1"
						>Description

						<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
						</svg>
					</label>
					<span class="font-light text-xs">({{ desCount }}/100)</span>
				</div>
				<textarea required="required" class="py-1 px-2 border border-gray-200 rounded-md focus:outline-none focus:ring-transparent" name="description" id="description" cols="30" rows="5" v-model="form.description" placeholder="Description must be greater than 100 characters"></textarea>
				<span v-if="msg.description == true" class="text-xs text-red-700 text-center w-full py-2">Description must be greater than 100 characters</span>
			</div>
		</div>

		<a class="text-xs font-bold uppercase px-5 py-2 shadow-lg rounded block leading-normal w-max mx-auto cursor-pointer" @click="next()" v-bind:class="{'text-gray-50 bg-cyan-700': openTab !== 2, 'text-white bg-cyan-700': openTab === 2}"> next </a>
	</div>
</template>

<script>
import {ref, reactive, watchEffect} from "vue"

// import router-link from "vue-router-link"

export default {
	components: {},
	props: {
		openTab: Number,
		form: Object,
	},
	setup(props, {emit}) {
		const form = props.form
		const msg = reactive({
			title: false,
			description: false,
		})
		const desCount = ref(0)
		watchEffect(() => {
			desCount.value = form.description.length
		})
		function next() {
			if (form.title == null) {
				msg.title = true
			} else if (form.description == "" || form.description.length < 100) {
				msg.description = true
			} else {
				emit("toggleTabs", 2)
			}
		}
		return {
			form,
			msg,
			desCount,
			next,
		}
	},
}
</script>
