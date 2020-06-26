import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  handleChangeText = (text) => {
    this.setState({ text });
  };

  handleSubmitEditing = () => {
    const { onSubmit } = this.props;
    const { text } = this.state;

    if (!text) return;

    onSubmit(text);
    this.setState({ text: "" });
  };

  render() {
    const { placeholder, handleUpdateLocation } = this.props;
    const { text } = this.state;

    return (
      <View style={styles.container}>
        <TextInput
          placeholder={placeholder}
          value={text}
          onSubmitEditing={this.handleSubmitEditing}
          placeholderTextColor="white"
          autoCorrect={false}
          style={styles.textInput}
          clearButtonMode="always"
          underlineColorAndroid="transparent"
          onChangeText={this.handleChangeText}
          onSubmit={handleUpdateLocation}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    marginTop: 20,
    marginHorizontal: 40,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#666",
  },
  textInput: {
    flex: 1,
    color: "white",
  },
});
