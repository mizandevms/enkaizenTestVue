<template>
	<div>
		<Header />
		<div class="container mx-auto">
			<router-view />
		</div>
		<Footer />
	</div>
</template>

<script>
import Header from "./partials/Header"
import Footer from "./partials/Footer"
export default {
	components: {
		Header,
		Footer,
	},
	setup() {
		return {}
	},
}
</script>
