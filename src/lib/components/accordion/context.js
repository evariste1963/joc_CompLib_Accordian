import { writable } from 'svelte/store'
import { setContext, getContext } from 'svelte'

export function setAccordionOptions({ colapse }) {
	const activeComponentId = writable(null)
	setContext('colapse', colapse)
	setContext('active', activeComponentId)
}

export function getAccordionOptions() {
	const colapse = getContext('colapse')
	const activeComponentId = getContext('active')
	return { colapse, activeComponentId }
}