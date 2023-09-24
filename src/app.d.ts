// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
	type Menu = {
		text: string;
		href: string;
		startWith: boolean;
	}
	type ListFooterProp = {
		text: string;
		href?: string;
	}
}

export {};
