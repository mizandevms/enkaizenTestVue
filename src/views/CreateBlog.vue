<template>
	<section class="container mx-auto">
		<div class="flex flex-wrap py-12 px-6">
			<form @submit.prevent="submit" class="w-full">
				<div class="relative flex flex-col min-w-0 break-words max-w-md mx-auto bg-gray-100 border border-gray-200 w-full shadow-lg rounded-md">
					<div class="p-4">
						<h2 class="font-semibold text-xl text-cyan-700">Create a new blog</h2>
					</div>
					<div class="px-4 pb-6 flex-auto">
						<div class="tab-content tab-space">
							<!-- step 1 -->
							<div v-bind:class="{hidden: openTab !== 1, block: openTab === 1}" class="space-y-2">
								<Step1 :form="form" :openTab="openTab" @toggleTabs="toggleTabs" />
							</div>
							<!-- step 2 -->
							<div v-bind:class="{hidden: openTab !== 2, block: openTab === 2}" class="space-y-2">
								<Step2 :form="form"  :openTab="openTab" @toggleTabs="toggleTabs" />
							</div>
							<!-- step 3-->
							<div v-bind:class="{hidden: openTab !== 3, block: openTab === 3}" class="space-y-2">
								<div class="space-y-2 flex flex-col justify-start">
									<span class="text-cyan-700"><strong class="text-gray-700 font-bold">Name:</strong> {{ form.title }}</span>
									<span class="text-cyan-700"><strong class="text-gray-700 font-bold">Description:</strong> {{ form.description }}</span>
									<span class="text-cyan-700"><strong class="text-gray-700 font-bold">Images:</strong> </span>

									<div class="grid grid-cols-5 justify-center items-center gap-x-2">
										<div v-for="(image, index) in form.images" :key="index">
											<div v-if="image.link">
												<img class="h-24 w-24 object-contain rounded-full" :src="image.link" alt="Current profile photo" />
											</div>
										</div>
									</div>
								</div>

								<div class="w-full flex justify-center">
									<button @click="submit" type="submit" class="justify-self-end h-auto w-full sm:w-max px-4 py-2 bg-cyan-700 text-gray-50 rounded-md">Submit</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	</section>
</template>

<script>
import {ref, reactive, watchEffect} from "vue"
import Step1 from "../components/Step1"
import Step2 from "../components/Step2"
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'

// import router-link from "vue-router-link"

export default {
	components: {
		Step1,
		Step2
	},
	setup() {
		const openTab = ref(1)
		const store=useStore()
		const router=useRouter()
		function toggleTabs(tabNumber) {
			openTab.value = tabNumber
		}

		const form = reactive({
			title: null,
			description: "",
			images: [
				{
					link: null,
					image: null,
				},
			],
		})

		const msg = reactive({
			title: false,
			description: false,
			img: false,
		})
		const desCount = ref(0)
		watchEffect(() => {
			desCount.value = form.description.length
		})

		function next() {
			if (form.title == null) {
				msg.title = true
			} else if (form.description == "" || form.description.length < 2) {
				msg.description = true
			} else {
				toggleTabs(2)
				// console.log("clicked")
			}
		}
		function finale() {
			if (form.images[0].link == null) {
				msg.img = true
			} else {
				toggleTabs(3)
				// console.log("clicked")
			}
		}
		///images
		const imagesLink = reactive([])
		// const images = reactive([])

		function eligible(image) {
			return form.images.length > 1 && image.link != null
		}

		function add() {
			form.images.push({
				link: null,
				image: null,
			})
		}

		function isValid(file) {
			const types = ["jpeg", "jpg", "png"]
			let ext = file.name.split(".")[file.name.split(".").length - 1]
			return types.includes(ext)
		}

		function setImages(data) {
			let {file,index,link}=data
			if (isValid(file)) {
				form.images[index].image = file
				const reader = new FileReader()
				reader.onload = (e) => {
					form.images[index].link = e.target.result
					// console.log(form.images.length)
					if (!link && form.images.length < 5) {
						add()
					}
				}
				reader.readAsDataURL(file)
			}
		}
		function deleteImage(index) {
			// console.log(form.images.length, form.images[index].link)
			form.images.splice(index, 1)
			if (form.images.length == 4 && form.images[form.images.length - 1].link != null) {
				// console.log("1111111111111111")

				add()
			}
			// console.log(form.images.length)
		}

		function submit() {
			store.commit('add',form)
			router.push({name:'home'})
		}
		return {
			openTab,
			toggleTabs,
			form,
			submit,
			msg,
			next,
			finale,
			desCount,
			setImages,
			imagesLink,
			deleteImage,
			eligible,
		}
	},
}
</script>
