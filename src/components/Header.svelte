<script lang="ts">
	import { page } from '$app/stores';
	import { IconAsterisk } from '@tabler/icons-svelte';

	const pages: {
		name: string;
		link: string;
	}[] = [
		{
			name: 'bobopedia',
			link: '/'
		},
		{
			name: 'heros',
			link: '/heros'
		},
		{
			name: 'promatches',
			link: '/promatches'
		}
	];

	let scrollY: number;
	let screenW: number;
</script>

<svelte:window bind:scrollY bind:innerWidth={screenW} />

<header
	class={`p-4 sticky top-0 z-20 font-semibold uppercase transition-colors ease-in ${scrollY > 20 ? 'bg-amber-400 text-zinc-900' : ''}`}
>
	{#if screenW > 768}
		<nav class="flex items-center justify-between gap-4">
			<div class="flex items-center gap-2 md:gap-4">
				{#each pages as item, i}
					<a
						href={item.link}
						class={`${$page.url.pathname === item.link ? 'underline underline-offset-2' : ''}`}
						>{item.name}</a
					>
					{#if i < 2}
						<span><IconAsterisk size={18} stroke={4} /></span>
					{/if}
				{/each}
			</div>
			<div class="">
				<a href="/login">login/register</a>
			</div>
		</nav>
	{:else}
		<nav class="flex items-center justify-end">
			<span><IconAsterisk stroke={4} /></span>
		</nav>
	{/if}
</header>
