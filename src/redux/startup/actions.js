const INITIATED = 'startup/initiated'
const COMPLETED = 'startup/completed'

export const Types = {
    INITIATED,
    COMPLETED
}

export default {
    startup: () => ({ type: INITIATED }),
    setupCompleted: () => ({ type: COMPLETED })
}