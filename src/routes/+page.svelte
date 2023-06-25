<script>
// from: https://joyofcode.xyz/make-a-svelte-component-library \\

	import { Accordion, AccordionItem } from '$lib/components/accordion/accordion';

	export let data;
	let { items } = data;
</script>

<h1>It all starts here!</h1>

<div class="home-page">
	<h2>Items List</h2>
	<br />

	<!--
	{#each items as item}
		<h2>{item.title}</h2>
		<h3>{item.content}</h3>
	{/each}
	-->
</div>

<Accordion prop="acc1_prop" />
<AccordionItem {items} />
