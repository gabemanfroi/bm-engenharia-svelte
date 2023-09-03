<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
	import { browser } from '$app/environment';

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				enabled: browser
			}
		}
	});
</script>

<QueryClientProvider client={queryClient}>
	<Header />
	<slot />
</QueryClientProvider>

<style lang="postcss">
	:global(*) {
		&::-webkit-scrollbar {
			width: 0;
		}
	}
</style>
