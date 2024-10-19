import { Image, StyleSheet, Button, View } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import React, { useState } from 'react';
import { ScrollView, Text } from 'react-native';

export default function HomeScreen() {
  const [Value, setValue] = useState('');

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }
    >
      <View style={styles.centeredText}>
        <Text style={styles.textValue}>{Value}</Text>
      </View>
      <View style={styles.centeredScrollView}>
        <ScrollView horizontal={true} contentContainerStyle={styles.scrollViewContent}>
          {Array.from({ length: 10 }, (_, i) => (
            <CustomButton key={i} label={String(i)} onPress={() => setValue(Value + String(i))} />
          ))}
        </ScrollView>
      </View>

      <View style={styles.centeredScrollView}>
        <ScrollView horizontal={true} contentContainerStyle={styles.scrollViewContent}>
          <CustomButton label="+" onPress={() => setValue(Value + "+")} />
          <CustomButton label="-" onPress={() => setValue(Value + "-")} />
          <CustomButton label="/" onPress={() => setValue(Value + "/")} />
          <CustomButton label="*" onPress={() => setValue(Value + "*")} />
          <CustomButton label="←" onPress={() => setValue(String(Value.slice(0, -1)))} />
        </ScrollView>
      </View>

      <CustomButton
        label="Calculate"
        onPress={() => {
          try {
            setValue(String(eval(Value)));
          } catch {
            setValue("error");
            setTimeout(() => {
              setValue("");
            }, 1000);
          }
        }}
      />
    </ParallaxScrollView>
  );
}

const CustomButton = ({ label, onPress }) => {
  return <Button title={label} onPress={onPress} />;
};

const styles = StyleSheet.create({
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  centeredText: {
    alignItems: 'center', // Center horizontally
    marginVertical: 20, // Optional margin for spacing
  },
  centeredScrollView: {
    alignItems: 'center',
    marginVertical: 10,
  },
  scrollViewContent: {
    alignItems: 'center',
  },
});
