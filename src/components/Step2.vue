<template>
	<!-- step 2 -->
	<div class="space-y-2">
		<div class="space-y-2">
			<div v-for="(image, index) in form.images" :key="index">
				<Image :image="image" :index="index" :eligible="eligible(image)" @setImage="setImages" @deleteImage="deleteImage" />
			</div>

			<div class="w-full text-center">
				<span v-if="msg.img == true" class="text-xs text-red-700 text-center w-full py-2">Insert a photo</span>
			</div>
		</div>
		<a class="text-xs font-bold uppercase px-5 py-2 shadow-lg rounded block leading-normal w-max mx-auto cursor-pointer" v-on:click="finale()" v-bind:class="{'text-gray-50 bg-cyan-700': openTab !== 3, 'text-white bg-cyan-700': openTab === 3}"> Preview </a>
	</div>
</template>

<script>
import {ref, reactive, watchEffect} from "vue"
import Image from "./Image"

// import router-link from "vue-router-link"

export default {
	components: {
		Image,
	},
	props: {
		openTab: Number,
		form: Object,
	},
	setup(props, {emit}) {
		const form = props.form

		const msg = reactive({
			img: false,
		})
		function finale() {
			if (form.images[0].link == null) {
				msg.img = true
			} else {
				emit("toggleTabs", 3)
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
			let {file, index, link} = data
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
			console.log(form)
		}
		return {
			form,
			submit,
			msg,
			finale,
			setImages,
			imagesLink,
			deleteImage,
			eligible,
		}
	},
}
</script>
