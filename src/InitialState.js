const InitialState = {
    tasks: {
        'task-1': {id: 'task-1', content: 'Cook chicken legs'},
        'task-2': {id: 'task-2', content: 'Clean kitchen'},
        'task-3': {id: 'task-3', content: 'Do dnd Aplication'},
        'task-4': {id: 'task-4', content: 'Watch "Blade Runner"'},
        'task-5': {id: 'task-5', content: 'Aplication'},
        'task-6': {id: 'task-6', content: '"Blade Runner"'},
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
        }
    },
    /* order columns */
    columnOrder: ['column-1', 'column-2']
}

export default InitialState;