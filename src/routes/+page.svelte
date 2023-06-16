<script>
	import { Accordion, AccordionItem } from '../lib/components/accordion/accordion';

	export let data;
	console.log(data);
	
</script>

<h1>It all starts here!</h1>

<div class="home-page">
	<h1>Items List</h1>

	{#each data.items as item}
		<h2>{item.title}</h2>
		<h3>{item.content}</h3>
	{/each}
</div>

<Accordion prop="acc1_prop" />
<AccordionItem />
