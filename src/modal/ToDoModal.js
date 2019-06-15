export const CONTROL_BUTTON_ENUM = { ALL: 0, DONE: 1, ACTIVE: 2, TOGGLE: 3}

export function toDoModal(name, active, id) {
    return {
        "name": name,
        "active": active,
        "id": id
    }
}