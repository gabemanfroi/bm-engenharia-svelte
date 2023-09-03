<script>
	import SvelteMarkdown from 'svelte-markdown';

	export let project;
</script>

<div class='h-full project-description-container list-disc' id='project-description-container'>
	<SvelteMarkdown source={`${project.attributes.description}`} />
</div>

<style>

    :global(#project-description-container) {
        & h1 {
            font-size: theme('fontSize.3xl');
            margin-bottom: 1rem;
            text-transform: uppercase;
        }
    }

    :global(#project-description-container) {
        & h2 {
            font-size: theme('fontSize.2xl');
            margin-bottom: 0.5rem;
        }
    }

    :global(#project-description-container) {
        & h3 {
            font-size: theme('fontSize.xl');

        }
    }

    :global(#project-description-container) {
        & p {
            margin-bottom: 0.2rem;

        }
    }

    :global(#project-description-container) {
        & ul {
            list-style: disc inside !important;
            font-size: theme('fontSize.sm');
        }
    }

</style>
