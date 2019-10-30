import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Header from "./app/components/Header";
import Subtitle from "./app/components/Subtitle";
import Input from "./app/components/Input";
import Listitem from "./app/components/Listitem";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          title: "맛있는 밥먹기"
        },
        {
          title: "재미있는 수업듣기"
        }
      ]
    };
  }

  _makeTodoItem = ({ item, index }) => {
    return <Listitem name={item.title} />;
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headercenter}>
          <Header />
        </View>
        <View style={styles.subtitleposi}>
          <Subtitle title="To Do" />
          <Input />
        </View>
        <View style={styles.subtitleposi}>
          <Subtitle title="To Do List" />
          <Listitem name="Daily Commit" />
          <Listitem name="Exercise" />
          <Listitem name={this.state.todos[0].title} />

          <FlatList
            data={this.state.todos}
            renderItem={this._makeTodoItem}
            keyExtractor={(item, index) => {
              return `${index}`;
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#43C6AC"
  },
  headercenter: {
    alignItems: "center"
  },
  subtitleposi: {
    marginLeft: 50
  }
});
