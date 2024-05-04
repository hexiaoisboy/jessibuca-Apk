<template>
	<div id="app">
		<keep-alive>
			<router-view />
		</keep-alive>
	</div>
</template>

<script>
	export default {
		name: 'App'
	};
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		width: 100%;
		height: 100%;
		overflow: hidden;
		background: #7ec8ec;
	}
	.flex {
		display: flex;
		align-content: center;
		justify-content: center;
		align-items: center;
	}
</style>
