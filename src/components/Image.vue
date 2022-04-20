<template>
	<div class="space-y-2">
		<div class="space-y-2 relative border border-gray-500 rounded-lg py-2 px-4">
			<div id="avatar" class="relative z-0 flex items-center space-x-6">
				<div class="shrink-0">
					<img v-if="image.link" class="h-20 w-20 object-contain rounded-full" :src="image.link" alt="Current profile photo" />
					<img v-else class="h-20 w-20 object-cover rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" alt="Current profile photo" />
				</div>
				<label class="block">
					<span class="sr-only">Choose profile photo</span>
					<input accept="image/png, image/jpeg ,image/jpg" @change="setImage($event.target.files[0])" type="file" class="block text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-50 file:text-gray-500 hover:file:bg-gray-100 outline-none focus:outline-none h-full w-full" />
				</label>
			</div>
			<span v-if="eligible" @click="$emit('deleteImage', index)" class="text-red-700 font-bold absolute -top-2 right-0 p-1 z-10 cursor-pointer"
				><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg
			></span>
		</div>
	</div>
</template>

<script>
export default {
	components: {},
	props: {
		image: {
			type: Object,
			required: true,
		},
		index: {
			type: Number,
			required: true,
		},
		eligible: Boolean,
	},
	setup(props, {emit}) {
		function setImage(file) {
			const data = {
				file,
				index: props.index,
				link: props.image.link,
			}
			emit("setImage", data)
		}

		return {
			setImage,
		}
	},
}
</script>
