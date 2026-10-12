// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'CombatLib',
			tableOfContents: false,
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{ label: 'Introduction to Combat',
					badge: 'Beginner Series',
					collapsed: true,
					items: [
					{ label: 'The Basics of Combat', slug: 'combatintro/rundown' },
					{ label: 'Weight Classes', slug: 'combatintro/weightclasses' },
					{ label: 'How Fighting Works', slug: 'combatintro/fighting' },
					{ label: 'How To Get Started', slug: 'combatintro/gettingstarted' }
				]},
				{ label: 'To Make A Plant',
					 badge: 'Beginner Series',
					 collapsed: true,
					 items: [
					{
						label: 'Preface',
						collapsed: true,
						items: [
							{ label: 'What We Assume', slug: 'planttut/preface/assumptions' },
						],
					},
					{
						label: 'Design',
						collapsed: true,
						items: [
							{ label: 'Components', slug: 'planttut/design/components' },
							{ label: 'CAD 1,', slug: 'planttut/design/cad1'},
							{ label: 'CAD 2', slug: 'planttut/design/cad2'},
							{ label: 'CAD 3', slug: 'planttut/design/cad3'},
						],
					},
					{
						label: 'Printing',
						collapsed: true,
						items: [
							{ label: 'Filament', slug: 'planttut/printing/filament'},
							{ label: 'Printing', slug: 'planttut/printing/printing'},
						],
					},
					{
						label: 'Assembly',
						collapsed: true,
						items: [
							{ label: 'Assembly', slug: 'planttut/assembly/assembling' },
							{ label: 'Wiring Your Bot', slug: 'planttut/assembly/wiringharness'},
						],
					},
					{
						label: 'Testing',
						collapsed: true,
						items:[
							{ label: 'Safety', slug: 'planttut/testing/safety'},
							{ label: 'Setting Failsafe', slug: 'planttut/testing/failsafe'},
						],
					},
					{
						label: 'Competition Prep',
						collapsed: true, 
						items: [
							{ label: 'Printing Spares', slug: 'planttut/compprep/spares'},
							{ label: 'Registering Your Bot', slug: 'planttut/compprep/registration' }
						],
					},
				],

				},
				{ label: 'Components', items: [
					{ label: 'Drive Motors', slug: 'components/drivemotors' },
					{ label: 'Weapon Motors', slug: 'components/weaponmotors' },
					{ label: 'Servos', slug: 'components/servos' },
					{ label: 'ESCs', slug: 'components/escs' },
					{ label: 'Robot Power', slug: 'components/powersystem'},
					{ label: 'Tx/Rx', slug: 'components/txrx' }
				]

				}
			],	
		}),
		mdx(),
	],
});
