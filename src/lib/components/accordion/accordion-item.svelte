<script>
	import { getContext } from 'svelte';
	import { slide } from 'svelte/transition';

	export let open;

	const componentId = crypto.randomUUID();
	const colapse = getContext('colapse');
	const activeComponentId = getContext('active');

	function setActive() {
		toggleOpen();
		$activeComponentId = componentId;
	}

	function toggleOpen() {
		open = !open;
		//$activeComponentId = null;
	}

	function handleClick() {
		// I prefer the functionality below
		colapse ? (isOpen ? (isOpen = false) : setActive()) : toggleOpen();
	}

	$: open && colapse && setActive();
	$: isActive = $activeComponentId === componentId;
	$: isOpen = colapse ? isActive : open;
</script>

<div class="accordion-item">
	<button on:click={handleClick} class="accordion-toggle">
		<div class="accordion-title">
			<slot name="title" />
		</div>
		<div class="accordion-caret" class:open={isOpen}>ʌ</div>
	</button>
	{#if isOpen}
		<div transition:slide|local class="accordion-content">
			<slot name="content" />
		</div>
	{/if}
</div>

<style>
	.accordion-caret {
		font-size: 1.5rem;
		transition: all 0.5s ease;
	}

	.open {
		rotate: -180deg;
	}

	.accordion-caret.open {
		color: rgb(52, 224, 14);
	}

	.accordion-toggle {
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding: var(--accordion-padding, 1rem);
		color: var(--accordion-color, inherit);
		font: inherit;
		font-weight: 600;
		border: none;
		background: none;
		cursor: pointer;
		border-radius: var(--accordion-radius, 4px);
		transition: background-color 0.1s ease;
	}
	.accordion-toggle:hover {
		background-color: var(--accordion-hover, hsl(220 20% 20%));
	}

	.accordion-content {
		padding: var(--accordion-content-padding, 1rem);
	}
</style>
