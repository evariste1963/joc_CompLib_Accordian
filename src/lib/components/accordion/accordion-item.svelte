<script>
	export let prop = 'default-prop';

	export let items
	
</script>

<h1>accordion item</h1>
<h2>{prop}</h2>


{#each items as item}

<h3>{item.title}</h3>
<p>{item.content}</p>

{/each}



<style> 


</style>