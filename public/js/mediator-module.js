class EventBus {
    constructor() {
        this.bus = document.createElement("div");
    }

    on(event, callback) {
        this.bus.addEventListener(event, callback);
    }

    off(event, callback) {
        this.bus.removeEventListener(event, callback);
    }

    emit(event, detail = {}) {
        this.bus.dispatchEvent(new CustomEvent(event, { detail }));
    }
};

export default new EventBus();
