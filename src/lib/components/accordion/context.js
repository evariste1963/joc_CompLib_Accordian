import { writable } from 'svelte/store'
import { setContext, getContext } from 'svelte'

export function setAccordionOptions({ colapse }) {
	const activeComponentId = writable(null)
	setContext('collapse', colapse)
	setContext('active', activeComponentId)
}

export function getAccordionOptions() {
	const colapse = getContext('collapse')
	const activeComponentId = getContext('active')
	return { colapse, activeComponentId }
}