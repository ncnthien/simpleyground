<script lang="ts">
	import { browser } from '$app/environment';
	let current: Window;
	if (browser) {
		current = window;
	}
</script>

{#if current}
	<iframe src={`${current.location.href}iframe-source`} title="pleyground"></iframe>
{:else}
	<div></div>
{/if}
