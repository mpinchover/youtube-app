import {
  View,
  StyleSheet,
  Dimensions,
  // Text,
  Button,
  ScrollView,
  TouchableOpacity,
  Touchable,
} from 'react-native'
import { ListItem, Text } from '@rneui/themed'
import { Image } from 'expo-image'
import { AntDesign } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import Carousel from 'react-native-reanimated-carousel'
import { MaterialIcons } from '@expo/vector-icons'
import { Divider } from '@rneui/base'
import { LinearGradient } from 'expo-linear-gradient'
import { FontAwesome5 } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const youtubeItems = [{}, {}, {}]

const YoutubeItem = ({ title }) => {
  return (
    <TouchableOpacity style={styles.youtubeItem}>
      <AntDesign
        style={{ marginRight: 5 }}
        name='youtube'
        size={24}
        color='red'
      />
      <Text style={{ fontSize: 14, color: '#565657' }}>{title}</Text>
    </TouchableOpacity>
  )
}

interface Props {
  item: any
}

const renderButtons = ({ next }) => {
  return (
    <View style={[styles.buttonGroup]}>
      <TouchableOpacity
        onPress={next}
        style={[styles.button, { borderWidth: 1, borderColor: 'grey' }]}
      >
        <FontAwesome name='remove' size={16} color='grey' />
        {/* <Text style={{ color: 'grey' }}>No</Text> */}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={next}
        style={[styles.button, { borderWidth: 1, borderColor: 'green' }]}
      >
        <Entypo name='check' size={16} color='green' />
        {/* <Text style={{ color: 'green' }}>Yes</Text> */}
      </TouchableOpacity>
    </View>
  )
}

const InfoHeader = () => {
  return (
    <View style={styles.infoHeader}>
      <View style={{ flexDirection: 'row', gap: 8 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
          <MaterialIcons name='cake' size={16} color='#565657' />
          <Text>29</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
          <Entypo name='location-pin' size={16} color='#565657' />
          <Text>Brooklyn, New York</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', gap: 2 }}>
        <Text style={{ fontSize: 14, fontWeight: '500' }}>
          Engineering manager
        </Text>
        <Text style={{ fontSize: 14, fontWeight: '500' }}>@</Text>
        <Text style={{ fontSize: 14, fontWeight: '500' }}>Meta</Text>
      </View>
    </View>
  )
}

const ProfileDrugs = () => {
  return (
    <View style={styles.similarVideos}>
      <Text style={[styles.profileHeader, { marginBottom: 10 }]}>Drugs</Text>
      <View style={[styles.drugs]}>
        <FontAwesome5 name='canadian-maple-leaf' size={24} color='#565657' />
        <MaterialCommunityIcons name='mushroom' size={24} color='#565657' />
        <Entypo name='500px-with-circle' size={24} color='#565657' />
        <Entypo name='documents' size={24} color='#565657' />
        <FontAwesome name='coffee' size={24} color='#565657' />
        <FontAwesome5 name='beer' size={24} color='#565657' />
      </View>
    </View>
  )
}

const ProfilePreview = ({ navigation, next, images, previewMode = false }) => {
  return (
    <View style={{ position: 'relative' }}>
      <ScrollView style={styles.container}>
        <View style={styles.profileImages}>
          <Carousel
            panGestureHandlerProps={{
              activeOffsetX: [-10, 10],
            }}
            loop
            height={Dimensions.get('window').height * 0.5}
            width={Dimensions.get('window').width}
            // width
            data={images}
            // mode={"parallax"}
            renderItem={({ item }: Props) => {
              return (
                <Image
                  contentFit='cover'
                  style={styles.image}
                  source={item.uri}
                />
              )
            }}
          />
        </View>
        <View>
          <InfoHeader />
          <Divider />

          <View style={styles.similarVideos}>
            <Text style={styles.profileHeader}>Videos</Text>
            {youtubeItems.map((e, i) => {
              return (
                <ListItem
                  // bottomDivider={i < youtubeItems.length - 1}
                  key={i}
                  containerStyle={{ padding: 0, paddingVertical: 10 }}
                >
                  <YoutubeItem title='Why grass is green and larn is white ' />
                </ListItem>
              )
            })}
          </View>
        </View>
        <Divider />

        <ProfileDrugs />

        <View style={{ height: 150, backgroundColor: 'white' }}></View>
      </ScrollView>
      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(255, 255, 255, .1)', 'rgba(255, 255, 255, 1)']}
        style={styles.background}
        pointerEvents={'none'}
      />
      {!previewMode && renderButtons({ next })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    // top: 0,
    height: 150,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 50,
    // paddingVertical: 10,
    // paddingHorizontal: 20,
    justifyContent: 'center',
    columnGap: 4,
    backgroundColor: 'white',
    width: 70,
    height: 70,
  },
  buttonGroup: {
    columnGap: 20,
    position: 'absolute',
    bottom: '6%',
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    flexDirection: 'row',
    // backgroundColor:"transparent"
  },
  youtubeItem: {
    marginBottom: 2,
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  nameAgeContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    bottom: 10,
    left: 10,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    padding: 5,
  },
  name: {
    fontSize: 14,
    fontWeight: '500',
  },
  age: {
    fontSize: 14,
  },
  profileImages: {
    // marginBottom: 10,
  },
  image: {
    flex: 1,
  },
  infoHeader: {
    paddingHorizontal: 10,
    // flexDirection: 'row',
    gap: 10,
    marginVertical: 15,
    justifyContent: 'center',
  },
  location: {
    fontSize: 16,
    fontWeight: '700',
  },
  profileHeader: {
    fontSize: 14,
    fontWeight: '700',
    paddingHorizontal: 10,
    color: '#565657',
  },
  similarVideos: {
    marginVertical: 15,
  },
  drugs: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    gap: 20,
  },
})

export default ProfilePreview
