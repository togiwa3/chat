import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
        state: () => ({
            todos: [
                {
                    content: 'test1', createdTime: '2021-12-12 18:00', status: 'ToDo'
                },
                {
                    content: 'test2', createdTime: '2021-12-12 19:00', status: 'Doing'
                },
                {
                    content: 'test3', createdTime: '2021-12-12 20:00', status: 'Done'
                },
                {
                    content: 'test4', createdTime: '2021-12-12 21:00', status: 'Done'
                }
            ]
        }),
        mutations: {
            addTask: function(state, selectedTask) {
                // addボタンを押下した時の現在時刻を取得
                var date = new Date();
                var formatedDate = date.toLocaleString();

                state.todos.unshift({
                    content: selectedTask.content,
                    createdTime: formatedDate,
                    status: 'ToDo'
                })
            },
            deleteTask: function(state, selectedTask) {
                for(var i = 0; i <= state.todos.length; i++) {
                    // 削除対象のタスク
                    const task = state.todos[i];
                    if (task.content == selectedTask.content && task.createdTime == selectedTask.createdTime) {
                        if (confirm("削除しますか？")){
                            state.todos.splice(i,1);
                            return;
                        }
                        return;
                    }
                }
            }
        }
    })
}

export default createStore;