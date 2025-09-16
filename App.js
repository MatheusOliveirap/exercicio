import { StyleSheet, Text, View } from "react-native";

export default function App() {
	return (
		<View style={style.container}>
			<Text style={style.container} >titulo 1</Text>
			<Text style={style.text}>
				It is a long established fact that a reader will be distracted by the
				readable content of a page when looking at its layout. The point of
				using Lorem Ipsum is that it has a more-or-less normal distribution of
				letters, as opposed to using 'Content here, content here', making it
				look like readable English.
			</Text>
			<Text style={style.container}>titulo 2</Text>
			<Text style={style.text}>
				It is a long established fact that a reader will be distracted by the
				readable content of a page when looking at its layout. The point of
				using Lorem Ipsum is that it has a more-or-less normal distribution of
				letters, as opposed to using 'Content here, content here', making it
				look like readable English.
			</Text>
			<Text style={style.container}>titulo 3</Text>
			<Text style={style.text}>
				It is a long established fact that a reader will be distracted by the
				readable content of a page when looking at its layout. The point of
				using Lorem Ipsum is that it has a more-or-less normal distribution of
				letters, as opposed to using 'Content here, content here', making it
				look like readable English.
			</Text>
			<Text style={style.container}>titulo 4</Text>
			<Text style={style.text}>
				It is a long established fact that a reader will be distracted by the
				readable content of a page when looking at its layout. The point of
				using Lorem Ipsum is that it has a more-or-less normal distribution of
				letters, as opposed to using 'Content here, content here', making it
				look like readable English.
			</Text>
		</View>
	);
}

const style = StyleSheet.create({
	container: {
    fontSize: 32,
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
  text: {
 fontSize: 18,
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
  }
});
