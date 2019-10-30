import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.headercontainer}>
      <Text style={styles.headertext}>MyTodoApp</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    headercontainer: {
        margintop: 50,
        marginBottom: 50,
    },
    headertext:{
        fontSize: 25,
        fontWeight: 'bold',
    },
  });