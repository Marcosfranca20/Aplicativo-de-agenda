import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList } from 'react-native';

interface Task {
  title: string;
  description: string;
  date: string;
}

const App = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = () => {
    const newTask = { title, description, date };
    setTasks([...tasks, newTask]);
    setTitle('');
    setDescription('');
    setDate('');
  };

  const renderTaskItem = ({ item }: { item: Task }) => {
    return (
      <View style={styles.taskItem}>
        <Text style={styles.taskTitle}>{item.title}</Text>
        <Text style={styles.taskDescription}>{item.description}</Text>
        <Text style={styles.taskDate}>{item.date}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          placeholder="Título da tarefa"
        />
        <TextInput
          style={styles.input}
          value={description}
          onChangeText={setDescription}
          placeholder="Descrição da tarefa"
        />
        <TextInput
          style={styles.input}
          value={date}
          onChangeText={setDate}
          placeholder="Data de conclusão da tarefa"
        />
        <Button title="Adicionar Tarefa" onPress={handleAddTask} />
      </View>
      <FlatList
        data={tasks.sort((a, b) => a.date.localeCompare(b.date))}
        renderItem={renderTaskItem}
        keyExtractor={(item) => item.date}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  form: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
  },
  taskItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  taskDescription: {
    fontSize: 16,
    marginBottom: 5,
  },
  taskDate: {
    fontSize: 14,
    color: '#999',
  },
});

export default App;
