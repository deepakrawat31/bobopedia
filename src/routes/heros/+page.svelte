<script lang="ts">
	import type { LayoutData } from '../$types';
	import { IconArrowUpRight } from '@tabler/icons-svelte';
	type Heros = {
		id: number;
		name: string;
		primary_attr: string;
		attack_type: string;
		roles: string[];
		icon: string;
		base_health_regen: number;
		base_mana_regen: number;
		base_armor: number;
		base_attack_min: number;
		base_attack_max: number;
		base_str: number;
		base_agi: number;
		base_int: number;
		str_gain: number;
		agi_gain: number;
		int_gain: number;
		attack_range: number;
		attack_rate: number;
		move_speed: number;
		localized_name: string;
	}[];
	export let data: LayoutData;

	const heros: Heros = data.heros;
</script>

<svelte:head>
	<title>Bobopedia | Heros</title>
</svelte:head>

<main class="min-h-[calc(100dvh-56px)] p-4 lg:p-8 flex">
	<section
		class="bg-amber-400 rounded-lg flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 text-zinc-900 font-semibold p-2"
	>
		{#each heros as hero}
			<div
				class="bg-amber-200 hover:bg-amber-400 transition-colors ring-2 ring-zinc-900 rounded text-zinc-900 font-semibold p-2 flex flex-col justify-between gap-2 lg:gap-4 group"
			>
				<span class="flex items-center justify-between gap-2">
					<span class="flex flex-col gap-2 font-bold uppercase">
						<h3 class="lg:text-xl">
							{hero.localized_name}
						</h3>
						<span class=""
							>{#if hero.primary_attr === 'str'}
								strength
							{:else if hero.primary_attr === 'agi'}
								agility
							{:else if hero.primary_attr === 'int'}
								intelligence
							{:else}
								universal
							{/if}
						</span>
					</span>
					<span>
						<img
							src={`https://cdn.cloudflare.steamstatic.com${hero.icon}`}
							alt={hero.localized_name}
						/>
					</span>
				</span>
				<a
					href={`/heros/${hero.id}`}
					class="self-end p-1 lg:p-2 bg-amber-400 rounded-full hover:scale-105 transition-transform ease-in-out group-hover:bg-amber-200 ring-2 ring-zinc-900"
				>
					<IconArrowUpRight />
				</a>
			</div>
		{/each}
	</section>
</main>
