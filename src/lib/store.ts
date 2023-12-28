import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const html = writable('');
export const css = writable('');
export const js = writable('');

if (browser) {
	html.set(localStorage.getItem('html') || '');
	css.set(localStorage.getItem('css') || '');
	js.set(localStorage.getItem('js') || '');

	html.subscribe((value) => {
		localStorage.setItem('html', value);
	});
	css.subscribe((value) => {
		localStorage.setItem('css', value);
	});
	js.subscribe((value) => {
		localStorage.setItem('js', value);
	});
}
