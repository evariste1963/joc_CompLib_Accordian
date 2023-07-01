<script>
	
	import { slide } from 'svelte/transition';
	import { getAccordionOptions } from './context'

	export let open = false; 
	
	const componentId = crypto.randomUUID();
	// const colapse = getContext('colapse');
	// const activeComponentId = getContext('active');

	const {colapse, activeComponentId} = getAccordionOptions()

	function setActive() {
		toggleOpen();
		$activeComponentId = componentId;
	}

	function toggleOpen() {
		open = !open;
		//$activeComponentId = null;
	}

	function handleClick() {
		// I prefer my own functionality here --> toggle open/close whether colapse or not
		colapse ? (isOpen ? (isOpen = false) : setActive()) : toggleOpen();
	}

	$: open && colapse && setActive();
	$: isActive = $activeComponentId === componentId;
	$: isOpen = colapse ? isActive : open;
</script>

<div class="accordion-item" >
	<button on:click={handleClick} class="accordion-toggle">
		<div class="accordion-title" class:open={isOpen}>
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
		rotate: -180deg;
		font-size: 1.5rem;
		transition: all 0.6s ease;
	}

	.open {
		rotate: 0deg;
	}

	:where(.accordion-caret, .accordion-title).open
	 {
		font-size: 102%;
		font-weight: 600;
		background: linear-gradient( rgb(246, 247, 248) 40%, rgb(20, 25, 182) 100%);
		background-clip: text;
   		-webkit-background-clip: text;
  		-webkit-text-fill-color: transparent;
		
	}

	.accordion-toggle {
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding: var(--accordion-padding, 1rem);
		color: var(--accordion-color, inherit);
		font: inherit;
		font-weight: 200;
		border: none;
		background: none;
		cursor: pointer;
		border-radius: var(--accordion-radius, 4px);
		transition: background-color 0.3s ease;
	}
	.accordion-toggle:hover {
		/*background-color: var(--accordion-hover, hsl(220 20% 20%));*/
		background: var( --accordion-hover-linear-gradient, linear-gradient(rgba(246, 247, 248, 0.3) 5%, rgba(50, 20, 182, 0.3) 100%))
	}

	.accordion-content {
		font-size: 1.25rem;
		padding: var(--accordion-content-padding, 1rem);
		color:var(--accordion-content-color, rgb(240, 225, 212))
	}
</style>
