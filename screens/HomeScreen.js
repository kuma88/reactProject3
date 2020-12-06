import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import {Text,Card,CardItem,Left,Thumbnail,Body,Button,Icon,Accordion,} from "native-base";

const dataArray = [
  {
    title: "Why 5 December?",
    content: "The date of 5 December was chosen because it corresponds with the official birthday of the late H.M. King Bhumibol Adulyadej, King of Thailand, who was one of the main proponents of this initiative.",
  },
  {
    title: "Did you know?",
    content: "Soil is a living resource, home to more than 25% of our planet's biodiversity",
  },
  {
    title: "Keep soil alive campaign",
    content: "Keep soil alive, protect soil biodiversity aims to raise awareness of the importance of sustaining healthy ecosystems and human well-being. By encouraging people around the world to engage in proactively improving soil health, the campaign also aims to fight soil biodiversity loss. If we do not act soon, the fertility of soil will continue to be adversely affected at an alarming rate, threatening global food supplies and food safety.",
  },
];

function HomeMainScreen() {
  return (
    <View style={{ padding: 10 }}>
      <Text style={styles.titleText}>World Soil Day 2020</Text>
      <Card style={styles.card}>
        <CardItem>
          <Body>
            <Text style={styles.cardTitle}>Welcome</Text>
            <Text>
            Plants nurture a whole world of creatures in the soil, that in return feed and protect the plants. 
            This diverse community of living organisms keeps the soil healthy and fertile. This vast world constitutes soil biodiversity and determines the main biogeochemical processes that make life possible on Earth.
            </Text>
          </Body>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{
              uri:
                "https://www.un.org/sites/un2.un.org/files/styles/large-article-image-style-16-9/public/logo-world-soil-day-square-en.jpg?itok=d8gLcVBD",
            }}
            style={{ height: 200, width: null, flex: 1 }}
          />
          {/* <Image
          source={{ uri: 'asset:/wsd.jpeg' }}
          style={{ width: 40, height: 40 }}
          /> */}
          
        </CardItem>
      </Card>

      <Accordion style={styles.accordion} dataArray={dataArray} expanded={0} />
    </View>
  );
}



const Stack = createStackNavigator();

export default function HomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeMainScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
