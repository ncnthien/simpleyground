<script lang="ts">
	import { browser } from '$app/environment';
	import { html, css, js } from '$lib/store';
	import { onDestroy } from 'svelte';

	let current: Window;
	let iframe: HTMLIFrameElement;
	$: src = current?.location?.href + 'iframe-source';

	if (browser) {
		current = window;
	}

	function refresh() {
		if (iframe) {
			iframe.src = '';
			iframe.src = src;
		}
	}

	const unsubscribeHtml = html.subscribe(refresh);
	const unsubscribeCss = css.subscribe(refresh);
	const unsusbcribeJs = js.subscribe(refresh);

	onDestroy(() => {
		unsubscribeHtml();
		unsubscribeCss();
		unsusbcribeJs();
	});
</script>

{#if current}
	<iframe bind:this={iframe} {src} title="pleyground"></iframe>
{:else}
	<div></div>
{/if}
