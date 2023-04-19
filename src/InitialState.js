const InitialState = {
    tasks: {
        'task-1': {id: 'task-1', content: 'Cook chicken legs'},
        'task-2': {id: 'task-2', content: 'Clean kitchen'},
        'task-3': {id: 'task-3', content: 'Do dnd Aplication'},
        'task-4': {id: 'task-4', content: 'Watch "Blade Runner"'},
        'task-5': {id: 'task-5', content: 'Add styles'},
        'task-6': {id: 'task-6', content: 'Add save-state function'},
        'task-7': {id: 'task-7', content: 'Add third column'},
        'task-8': {id: 'task-8', content: 'Download movie'}
    },
    /* for store columns */
    /* column id I use like key */
    /* taskIDs for indicate ownership any task and we will know order of tasks */
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To do',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
        },
        'column-2': {
            id: 'column-2',
            title: 'In Progress',
            taskIds: ['task-5', 'task-6']
        },
        'column-3': {
            id: 'column-3',
            title: 'Done',
            taskIds: ['task-7', 'task-8']
        }
    },
    /* order columns */
    columnOrder: ['column-1', 'column-2', 'column-3']
}

export default InitialState;