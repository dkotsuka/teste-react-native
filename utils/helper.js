export function createId() {
	return (new Date()).getTime().toString(16).slice(2)
}
