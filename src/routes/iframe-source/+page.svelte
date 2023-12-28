<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	let html: string;
	let css: string;
	let js: string;

	if (browser) {
		html = localStorage.getItem('html') || '';
		css = localStorage.getItem('css') || '';
		js = localStorage.getItem('js') || '';

		onMount(() => {
			eval(js);
		});
	}
</script>

{#if html !== undefined}
	<div>{html}</div>
{/if}
