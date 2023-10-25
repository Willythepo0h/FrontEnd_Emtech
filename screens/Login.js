import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {TouchableOpacity, View, Text, Image, StyleSheet, TextInput, Animated, Keyboard, KeyboardAvoidingView} from 'react-native';
import { useState, useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import Custom_Button from '../Components/Custom_Button';
import Sign_Up from './Sign_Up';

const Login = () => {
    const navigation = useNavigation();
    const [studentNumber, setStudentNumber] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [isStudentNumberFocused, setIsStudentNumberFocused] = useState(false);
    const [isUsernameFocused, setIsUsernameFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);

    const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

    const fadeAnim = useRef(new Animated.Value(0)).current;

    // Function to handle changes in Student Number input
    const handleStudentNumberChange = (text) => {
        setStudentNumber(text);
    };

    // Function to handle changes in Username input
    const handleUsernameChange = (text) => {
        setUsername(text);
    };

    // Function to handle changes in Password input
    const handlePasswordChange = (text) => {
        setPassword(text);
    };

    // Function to display user input in the console
    const handleSignIn = () => {
        console.log('Student Number:', studentNumber);
        console.log('Username:', username);
        console.log('Password:', password);
        navigation.navigate('Homepage');
    };

    const handleSignUpPress = () => {
        navigation.navigate('Sign_Up');
      };
    
    const handleForgotPasswordPress = () => {
        navigation.navigate('Forgot_Password')
    };

    const handleStudentNumberFocus = () => {
        setIsStudentNumberFocused(true);
      };
    
    const handleUsernameFocus = () => {
        setIsUsernameFocused(true);
      };
    
    const handlePasswordFocus = () => {
        setIsPasswordFocused(true);
      };

    const handleStudentNumberBlur = () => {
        setIsStudentNumberFocused(false);
      };
    
    const handleUsernameBlur = () => {
        setIsUsernameFocused(false);
      };
    
    const handlePasswordBlur = () => {
        setIsPasswordFocused(false);
      };

    useEffect(() => {
    Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2500,
        useNativeDriver: true,
    }).start();

    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
        setIsKeyboardVisible(true);
    });
    
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
        setIsKeyboardVisible(false);
    });
    
    return () => {
        keyboardDidShowListener.remove();
        keyboardDidHideListener.remove();
    };
    }, []);
    
    return(
        <Animated.View style={{flex:'1',opacity: fadeAnim}}>
            <View style={styles.Container}>
                <View style={styles.Header}>
                    <Image source={require('./../assets/cname.png')} style={styles.Company_Logo}/>
                    <Image source={require('./../assets/TIP_Logo.png')} style={styles.TIP_Logo}/>
                </View>

                <View style={styles.Divider}/>
                
                <View style={styles.Login_Container}>
                    <Text style={styles.Login_Label}>Student Number</Text>
                    <TextInput style={styles.Info_Container}
                    placeholder={isStudentNumberFocused ? '' : 'Student Number'}
                    onFocus={handleStudentNumberFocus}
                    onBlur={handleStudentNumberBlur}
                    onChangeText={handleStudentNumberChange}
                    keyboardType='numeric'/>

                    <Text style={styles.Login_Label}>Username</Text>
                    <TextInput style={styles.Info_Container}
                    placeholder={isUsernameFocused ? '' : 'Username'}
                    onFocus={handleUsernameFocus}
                    onBlur={handleUsernameBlur}
                    onChangeText={handleUsernameChange}/>
                    
                    <Text style={styles.Login_Label}>Password</Text>
                    <TextInput style={styles.Info_Container}
                    placeholder={isPasswordFocused ? '' : 'Password'}
                    onFocus={handlePasswordFocus}
                    onBlur={handlePasswordBlur}
                    onChangeText={handlePasswordChange}
                    secureTextEntry={true}/>

                    <View style={styles.Bottom}>
                        <View style={styles.Left_Container}>
                            <Text style={styles.Normal}>Don't have an account yet?   
                                <TouchableOpacity onPress={handleSignUpPress}>
                                    <Text style={styles.Styled_Text}>Sign Up</Text>
                                </TouchableOpacity>
                            </Text>
                        </View>
                        <View style={styles.Right_Container}>
                        <TouchableOpacity onPress={handleForgotPasswordPress}><Text style={styles.Styled_Text2}>Forgot Password?</Text></TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.Button_Container}>
                    {!isKeyboardVisible && <Custom_Button title='Sign In' onPress={handleSignIn} />}
                </View>
            </View>
        </Animated.View>
    );
}

const styles = StyleSheet.create ({
    Container: {
        flex: 6,
        paddingVertical: hp(5),
    },
    Header: {
        height: hp(10),
        backgroundColor: '#FFCA10',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    Company_Logo: {
        height: hp(12),
        width: wp(64),
        resizeMode: 'contain'
    },
    TIP_Logo: {
        height: hp(8),
        width: wp(17),
        resizeMode: 'contain'
    },
    Divider: {
        height: 1,
        width: '90%',
        backgroundColor: 'black',
        alignSelf: 'center',
        marginVertical: 10,
    },
    Login_Container: {
        flex: 2,
        marginTop: 25,
        paddingVertical: 20,
        flexDirection: 'column',
        alignItems: 'center'
    },
    Info_Container: {
        height: hp(7),
        width: '90%',
        borderWidth: 1,
        borderRadius: 30,
        alignSelf: 'center',
        borderColor: 'gray',
        marginBottom: 10,
        padding: 14,
        color: 'gray',
        fontSize: hp(2)
    },
    Login_Label: {
        color: 'black',
        fontSize: hp(2.5),
        fontFamily: 'monospace',
        fontStyle: 'normal',
        width: '90%',
        alignSelf: 'center'
    },
    Bottom: {
        height: hp(10),
        width: '90%',
        alignSelf: 'center',
        //backgroundColor: 'orange',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    Left_Container: {
        width: wp(30),
    },
    Right_Container: {
        width: wp(40),
    },
    Normal: {
        fontSize: hp(2),
        textAlign: 'justify'
    },
    Styled_Text: {
        fontSize: hp(2),
        textDecorationLine: 'underline',
        fontWeight: 'bold'
    },
    Styled_Text2: {
        fontSize: hp(2),
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        position: 'absolute',
        right: 0
    },
    Button_Container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }
})

export default Login;