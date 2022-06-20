import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';


export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task
    const data ={
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    }
    setTasks( oldState => [...oldState, data])
  }

  function handleToggleTaskDone(id: number) {
    //TODO - toggle task done if exists
   
    setTasks( tasks.map( item => {
      if(item.id === id)
        item.done = !item.done;
      return item;
    }))
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    setTasks( old => old.filter(
      task => task.id !== id
    ))
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})