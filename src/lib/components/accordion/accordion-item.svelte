<script>
	export let prop = 'default-prop';

	export let items;
</script>

<h2>accordion item</h2>
<h4>{prop}</h4>
<br />
{#each items as item}
	<h3>{item.title}</h3>
	<p>{item.content}</p>
{/each}

<style>
</style>
