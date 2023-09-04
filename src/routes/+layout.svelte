<script lang='ts'>
	import '../app.css';
	import Header from '$lib/modules/Shared/components/Header.svelte';
	import { QueryClientProvider } from '@tanstack/svelte-query';

	import type { LayoutData } from './$types';
	import Footer from '$lib/modules/Shared/components/Footer.svelte';

	export let data: LayoutData;
</script>

<QueryClientProvider client={data.queryClient}>
	<Header />
	<slot />
	<Footer />
</QueryClientProvider>

<style lang='postcss'>
    :global(*) {
        &::-webkit-scrollbar {
            width: 0;
            height: 0;
        }
    }
</style>
