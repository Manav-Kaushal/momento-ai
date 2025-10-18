import { Image } from "react-native";
import { Text, YStack } from "tamagui";

export default function Logo({ hasText = false }: { hasText?: boolean }) {
  return (
    <YStack gap="$3" mb="$4" style={{ alignItems: "center" }}>
      <Image
        source={require("../assets/images/icon.png")}
        style={{ width: 64, height: 64 }}
        resizeMode="contain"
      />
      {hasText && (
        <Text fontSize="$7" fontWeight="700" color="$color">
          Journal.ai
        </Text>
      )}
    </YStack>
  );
}
