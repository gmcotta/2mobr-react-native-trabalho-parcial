import {StyleSheet} from 'react-native';
import {getScreenHeight} from '../../utils/getScreenHeight';

const screenHeight = getScreenHeight();

export const headerStyles = StyleSheet.create({
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

export const aboutMeStyles = StyleSheet.create({
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

export const experiencesStyles = StyleSheet.create({
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

export const hobbiesStyles = StyleSheet.create({
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
