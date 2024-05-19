import React, {useRef} from 'react';
import {
  Image,
  Linking,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';

import {experiencesData, hobbiesData} from './content';
import {
  aboutMeStyles,
  experiencesStyles,
  headerStyles,
  hobbiesStyles,
} from './styles';
import {getScreenHeight} from '../../utils/getScreenHeight';

export function Home(): React.JSX.Element {
  const scrollViewRef = useRef<ScrollView>(null);

  const handleNavigateToAbout = () => {
    scrollViewRef.current?.scrollTo({y: getScreenHeight(), animated: true});
  };

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        ref={scrollViewRef}>
        <View style={headerStyles.container}>
          <Text style={headerStyles.hiText}>Olá, eu sou</Text>
          <Text style={headerStyles.name}>Gustavo</Text>
          <Text style={headerStyles.role}>Desenvolvedor front-end</Text>
          <Image
            style={headerStyles.image}
            source={{
              uri: 'https://avatars.githubusercontent.com/u/46160812?v=4',
            }}
          />
          <View style={headerStyles.buttonContainer}>
            <Pressable
              style={headerStyles.contactButton}
              onPress={() => Linking.openURL('mailto:gmcotta34@gmail.com')}>
              <Text style={headerStyles.contactButtonText}>
                Entre em contato
              </Text>
            </Pressable>
            <Pressable
              style={headerStyles.aboutMeButton}
              onPress={handleNavigateToAbout}>
              <Text style={headerStyles.aboutMeButtonText}>Sobre mim</Text>
            </Pressable>
          </View>
        </View>
        <View style={aboutMeStyles.container}>
          <Text style={aboutMeStyles.title}>Sobre mim</Text>
          <Text style={aboutMeStyles.name}>Eu sou Gustavo Matias</Text>
          <Text style={aboutMeStyles.name}>Desenvolvedor front-end</Text>
          <Text style={aboutMeStyles.address}>Guarulhos, SP</Text>
          <Text style={aboutMeStyles.text}>
            Atuo na área de tecnologia da informação desde 2019, e como
            desenvolvedor front-end desde 2020, com foco em ReactJS.
          </Text>
          <Text style={aboutMeStyles.socialMediaText}>Minhas redes:</Text>
          <View style={aboutMeStyles.buttonContainer}>
            <Pressable
              style={aboutMeStyles.button}
              onPress={() =>
                Linking.openURL('https://www.linkedin.com/in/gustavomatias/')
              }>
              <Text style={aboutMeStyles.buttonText}>Linkedin</Text>
            </Pressable>
            <Pressable
              style={aboutMeStyles.button}
              onPress={() => Linking.openURL('https://github.com/gmcotta')}>
              <Text style={aboutMeStyles.buttonText}>Github</Text>
            </Pressable>
          </View>
        </View>
        <View style={experiencesStyles.container}>
          <Text style={experiencesStyles.title}>Experiências</Text>
          {experiencesData.map((item, index) => (
            <View key={index} style={experiencesStyles.listItem}>
              <View style={experiencesStyles.listBulletItem} />
              <View>
                <Text style={experiencesStyles.listItemCompany}>
                  {item.company}
                </Text>
                <Text style={experiencesStyles.listItemRolePeriod}>
                  {item.role}
                </Text>
                <Text style={experiencesStyles.listItemRolePeriod}>
                  {item.period}
                </Text>
              </View>
            </View>
          ))}
        </View>
        <View style={hobbiesStyles.container}>
          <Text style={hobbiesStyles.title}>Hobbies</Text>
          {hobbiesData.map((item, index) => (
            <View key={index} style={hobbiesStyles.listItem}>
              <View style={hobbiesStyles.listBulletItem} />
              <View>
                <Text style={hobbiesStyles.listItemText}>{item}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
