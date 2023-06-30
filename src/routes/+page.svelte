<script>
	// from: https://joyofcode.xyz/make-a-svelte-component-library \\

	import { Accordion, AccordionItem } from '$lib/components/accordion/accordion';

	export let data;
	let { items } = data;
</script>

<Accordion colapse --accordion-width="60ch">
	{#each items as item, i}
		<!-- <AccordionItem open={i === 0}> -->
			<AccordionItem open={false}>
			<svelte:fragment slot="title">{item.title}</svelte:fragment>
			<svelte:fragment slot="content">{@html item.details}</svelte:fragment>
		</AccordionItem>
	{/each}
</Accordion>
