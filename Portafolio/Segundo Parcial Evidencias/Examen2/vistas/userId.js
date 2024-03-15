import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const url = "https://jsonplaceholder.typicode.com/todos";

export default function userId() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    fetchTodoList();
  }, []);

  const fetchTodoList = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Error al obtener datos');
      }
      const data = await response.json();
      setTodoList(data);
    } catch (error) {
      console.error('Error : ', error.message);
    }
  };

  const mostrarElementos = () => {
    return todoList.map(todo => `${todo.id} - userId: ${todo.userId}`).join('\n');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Todos los Elementos (ID y userId)</Text>
      <Text>{mostrarElementos()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
