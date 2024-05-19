import React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export function Home(): React.JSX.Element {
  let screenHeight = Dimensions.get('window').height;

  const experiencesData = [
    {
      company: 'FIAP',
      role: 'Desenvolvedor front-end',
      period: '2022 (atual)',
    },
    {
      company: 'Avanade',
      role: 'Desenvolvedor front-end',
      period: '2020-2022',
    },
    {
      company: 'i9XP',
      role: 'Analista QA',
      period: '2020',
    },
    {
      company: 'Cognizant',
      role: 'Analista de testes',
      period: '2019-2020',
    },
  ];

  const hobbiesData = [
    'Shows',
    'Séries e filmes',
    'Animes e mangás',
    'Cozinhar',
    'Tocar guitarra',
  ];

  const headerStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: screenHeight,
      backgroundColor: '#3a3a3a',
    },
    hiText: {
      fontSize: 12,
      color: '#fff',
    },
    name: {
      fontSize: 64,
      lineHeight: 64,
      fontWeight: 'bold',
      color: '#e04141',
    },
    role: {
      fontSize: 16,
      color: '#fff',
    },
    image: {
      width: 120,
      height: 120,
      borderRadius: 60,
      marginTop: 20,
    },
    buttonContainer: {
      flexDirection: 'row',
      gap: 20,
      marginTop: 40,
    },
    contactButton: {
      backgroundColor: '#e04141',
      width: 120,
      height: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    contactButtonText: {
      color: '#fff',
      fontSize: 12,
      fontWeight: 'bold',
    },
    aboutMeButton: {
      backgroundColor: 'transparent',
      width: 120,
      height: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    aboutMeButtonText: {
      color: '#fff',
      fontSize: 12,
      fontWeight: 'bold',
    },
  });

  const aboutMeStyles = StyleSheet.create({
    container: {
      flex: 1,
      height: screenHeight,
      backgroundColor: '#fff',
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#e04141',
      marginTop: 80,
      marginBottom: 20,
    },
    name: {
      fontSize: 20,
    },
    address: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 32,
    },
    text: {
      fontSize: 14,
      marginTop: 32,
    },
    socialMediaText: {
      fontSize: 16,
      marginTop: 32,
    },
    buttonContainer: {
      flexDirection: 'row',
      gap: 20,
      marginTop: 40,
    },
    button: {
      backgroundColor: '#e04141',
      width: 120,
      height: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 12,
      fontWeight: 'bold',
    },
  });

  const experiencesStyles = StyleSheet.create({
    container: {
      flex: 1,
      height: screenHeight,
      backgroundColor: '#e04141',
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff',
      marginTop: 80,
      marginBottom: 20,
    },
    listItem: {
      display: 'flex',
      flexDirection: 'row',
      gap: 8,
      paddingVertical: 12,
    },
    listBulletItem: {
      width: 8,
      height: 8,
      backgroundColor: '#fff',
      borderRadius: 4,
      marginTop: 13,
    },
    listItemCompany: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#fff',
    },
    listItemRolePeriod: {
      fontSize: 16,
      color: '#fff',
    },
  });

  const hobbiesStyles = StyleSheet.create({
    container: {
      flex: 1,
      height: screenHeight,
      backgroundColor: '#ebebf5',
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#e04141',
      marginTop: 80,
      marginBottom: 20,
    },
    listItem: {
      display: 'flex',
      flexDirection: 'row',
      gap: 8,
      paddingVertical: 12,
    },
    listBulletItem: {
      width: 8,
      height: 8,
      backgroundColor: '#000',
      borderRadius: 4,
      marginTop: 13,
    },
    listItemText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#000',
    },
  });

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
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
            <Pressable style={headerStyles.contactButton}>
              <Text style={headerStyles.contactButtonText}>
                Entre em contato
              </Text>
            </Pressable>
            <Pressable style={headerStyles.aboutMeButton}>
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
            <Pressable style={aboutMeStyles.button}>
              <Text style={aboutMeStyles.buttonText}>Linkedin</Text>
            </Pressable>
            <Pressable style={aboutMeStyles.button}>
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
