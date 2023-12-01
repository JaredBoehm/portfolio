export default class UID {
    private ids: Set<string>
    constructor() {
        this.ids = new Set()
    }
    new(): string {
        let id = Math.random().toString(36).slice(2)
        try {
            this.ids.add(id)
            return id
        } catch (e) {
            return this.new()
        }
    }
}