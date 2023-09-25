// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import {ComponentType} from "svelte";
import {TAB_NAME} from "$lib/constants/string";

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
	type PropertyProp = {
		key: string;
		icon: ComponentType;
		href?: string;
		value: string;
	}
	type TabButton = {
		text: string;
		key: TAB_NAME;
	}
}

export {};
