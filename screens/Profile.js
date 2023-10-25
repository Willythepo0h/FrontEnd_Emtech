import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {Pressable, Dimensions, TouchableOpacity, View, Text, Image, StyleSheet, TextInput, Animated, Keyboard, KeyboardAvoidingView} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
    const screenWidth = Dimensions.get('window').width;
    const imageContainerSize = screenWidth * 0.2
    const navigation = useNavigation();

    const handleGoBackPress = () => {
        navigation.navigate('Homepage');
      };

    return(
        <View style={styles.Container}>
            <View style={styles.Header}>
                <Pressable style={styles.BackContainer} onPress={handleGoBackPress}>
                    <Image style={styles.Back_Button} source={require('./../assets/angle-left.png')}/>
                </Pressable>
                <Text style={styles.Title}>Student Profile</Text>
                <View style={styles.Divider}/>
                <View style={[styles.Image_Container, { width: imageContainerSize, height: imageContainerSize }]}>
                    <Image style={styles.Image} source={require('./../assets/profile_pic.png')}/>
                </View>
                <Text style={styles.Info}>Sucgang, John Willard S.</Text>
                <Text style={styles.Info}>First Semester - 2023 | BSCPE</Text>
                <Text style={styles.Info}>4th Year Student</Text>
            </View>

            <View style={styles.Info_Container}>
                <View style={styles.Upper_Content}>
                    <View style={styles.Label_Container}>
                        <Text style={styles.Label}>Settings</Text>
                        <View style={styles.Label_Divider}/>
                    </View>
                    <View style={styles.Info_Content}>
                        <Image style={styles.Info_Logo} source={require('./../assets/circle-user.png')}/>
                        <Text style={styles.Info_Text}>Profile</Text>
                    </View>
                    <View style={styles.Info_Content}>
                        <Image style={styles.Info_Logo} source={require('./../assets/shield-keyhole.png')}/>
                        <Text style={styles.Info_Text}>Security</Text>
                    </View>
                    <View style={styles.Info_Content}>
                    <Image style={styles.Info_Logo} source={require('./../assets/moon.png')}/>
                        <Text style={styles.Info_Text}>Darkmode</Text>
                    </View>
                </View>

                <View style={styles.Lower_Content}>
                    <View style={styles.Label_Container}>
                        <Text style={styles.Label}>Others</Text>
                        <View style={styles.Label_Divider}/>
                    </View>
                    <View style={styles.Info_Content}>
                        <Image style={styles.Info_Logo} source={require('./../assets/circle-user.png')}/>
                        <Text style={styles.Info_Text}>Help & Support</Text>
                    </View>
                    <View style={styles.Info_Content}>
                        <Image style={styles.Info_Logo} source={require('./../assets/shield-keyhole.png')}/>
                        <Text style={styles.Info_Text}>FAQ's</Text>
                    </View>
                </View>
            </View>
            <View style={styles.Button_Container}>
                <View/>
            </View>
        </View>
    );
}

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create ({
    Container: {
        flex: 10,
    },
    Header: {
        height: hp(35),
        backgroundColor: '#FFCA10',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    BackContainer: {
        position: 'absolute',
        top: 50,
        left: 0,
        paddingHorizontal: 20,
    },
    Back_Button: {
        height: hp(3.5),
        width: wp(3.5),
    },
    Title: {
        fontFamily: 'monospace',
        fontSize: hp(3),
        paddingHorizontal: 20,
        paddingTop: 40
    },
    Image_Container: {
        borderRadius: 100,
        overflow: 'hidden'
    },
    Image: {
        flex: 1,
        width: undefined,
        height: undefined
    },
    Divider: {
        height: 1.5,
        width: '80%',
        backgroundColor: 'black',
        alignSelf: 'center',
        marginVertical: 10,
    },
    Label_Divider: {
        height: 1.5,
        flex: 1,
        backgroundColor: 'black',
        marginLeft: 10
    },
    Info: {
        fontSize: hp(2)
    },
    Info_Container: {
        height: hp(50),
        marginHorizontal: 20
    },
    Label: {
        fontFamily: 'Inter',
        fontSize: hp(2.5),
        paddingRight: 10
    },
    Label_Container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    Upper_Content: {
        height: hp(18),
        marginTop: 20,
    },
    Lower_Content: {
        height: hp(20),
    },
    Info_Content: {
        flexDirection: 'row',
        gap: 5,
        paddingTop: 10
    },
    Info_Text: {
        fontSize: hp(2)
    },
    Info_Logo: {
        height: hp(3),
        width: wp(10),
        resizeMode: 'contain'
    }
})

export default Profile;