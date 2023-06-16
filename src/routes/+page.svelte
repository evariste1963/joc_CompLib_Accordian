<script>
	import { Accordion, AccordionItem } from '../lib/components/accordion/accordion';

	export let data;
	console.log(data);
	//create items in a json file somewhere//
	/*const items = [
		{ title: 'item 1', content: 'content 1' },
		{ title: 'item 2', content: 'content 2' },
		{ title: 'item 3', content: 'content 3' },
		{ title: 'item 4', content: 'content 4' }
	];*/
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
