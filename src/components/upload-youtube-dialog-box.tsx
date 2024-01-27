import { Input, Button } from "@rneui/themed";
import { Text, View, ActivityIndicator } from "react-native";
import { useState } from "react";

const UploadYoutubeDialogBox = ({
  setYoutubeUploadError,
  handleUploadYoutubeUrl,
  youtubeUploadError,
  isUploadingYoutubeUrl,
}) => {
  const [youtubeUrl, setYoutubeUrl] = useState("");
  if (isUploadingYoutubeUrl) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator />
        <Text style={{ marginTop: 10 }}>Uploading...</Text>
      </View>
    );
  }
  return (
    <View>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "700",
          // marginBottom: 10,
        }}
      >
        Paste a youtube video url to upload
      </Text>
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        value={youtubeUrl}
        onChangeText={(text) => {
          setYoutubeUploadError("");
          setYoutubeUrl(text);
        }}
        inputStyle={{
          fontSize: 14,
        }}
        containerStyle={{
          width: "auto",
          margin: 0,
          padding: 0,
          paddingHorizontal: 0,
        }}
        style={{
          margin: 0,
          padding: 0,
          paddingHorizontal: 0,
        }}
        placeholder="https://www.youtube.com/..."
      />
      {/* <Text>Hello from Overlay!</Text> */}
      <Text style={{ color: "red" }}>{youtubeUploadError}</Text>
      <Button
        style={{ marginTop: 10 }}
        onPress={() => handleUploadYoutubeUrl(youtubeUrl)}
        title="Upload"
      ></Button>
    </View>
  );
};

export default UploadYoutubeDialogBox;
