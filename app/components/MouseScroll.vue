<template>
  <div class="mouse"></div>
</template>

<style scoped>
  .mouse {
	width: 30px;
	height: 50px;
	border: 3px solid var(--secondary-color);
	border-radius: 60px;
	position: relative;
	&::before {
		content: '';
		width: 12px;
		height: 12px;
		position: absolute;
		top: 10px;
		left: 50%;
		transform: translateX(-50%);
		background-color: var(--secondary-color);
		border-radius: 50%;
		opacity: 1;
		animation: wheel 2s infinite;
		-webkit-animation: wheel 2s infinite;
	}
}

@keyframes wheel {
	to {
		opacity: 0;
		top: 60px;
	}
}

@-webkit-keyframes wheel {
	to {
		opacity: 0;
		top: 60px;
	}
}
</style>