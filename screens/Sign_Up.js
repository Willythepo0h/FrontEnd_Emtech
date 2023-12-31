import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {Modal, TouchableOpacity, View, Text, Image, StyleSheet, TextInput, Keyboard, KeyboardAvoidingView, Animated, Dimensions} from 'react-native';
import Custom_Button from '../Components/Custom_Button';
import { useState, useRef, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const Sign_Up = () => {
    const navigation = useNavigation();
    const [isEmailFocused, setisEmailFocused] = useState(false);
    const [isUsernameFocused, setIsUsernameFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);
    const [isRePasswordFocused, setIsRePasswordFocused] = useState(false);
    const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const windowHeight = Dimensions.get('window').height;

// Initialize the animated value for translateY
    const translateY = new Animated.Value(windowHeight);
    //const fadeAnim = useRef(new Animated.Value(0)).current;

    const handleGoBackPress = () => {
        navigation.navigate('Login');
      };

    const handleSignUpPress = () => {
        navigation.navigate('Login');
    }

    const handleEmailFocus = () => {
        setisEmailFocused(true);
      };
    
    const handleUsernameFocus = () => {
        setIsUsernameFocused(true);
      };
    
    const handlePasswordFocus = () => {
        setIsPasswordFocused(true);
      };

    const handleRePasswordFocus = () => {
        setIsRePasswordFocused(true);
      };

    const handleEmailBlur = () => {
        setisEmailFocused(false);
      };
    
    const handleUsernameBlur = () => {
        setIsUsernameFocused(false);
      };
    
    const handlePasswordBlur = () => {
        setIsPasswordFocused(false);
      };
    
    const handleRePasswordBlur = () => {
        setIsRePasswordFocused(false);
      };

    const handleSubmit = () => {
        setShowConfirmationModal(true);
    };
    
    useEffect(() => {
        Animated.timing(translateY, {
            toValue: 1,
            duration: 1000, // Adjust the duration as needed
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
            <View style={styles.Container}>
                <View style={styles.Header}>
                    <Text style={styles.Title_Style}>Create Account</Text>
                    <Text style={styles.Instruction_Style}>Sign Up valid T.I.P. Email and Password to proceed...</Text>
                </View>

                <View style={styles.Divider}/>

                <View style={styles.SignUp_Container}>
                    <Text style={styles.Login_Label}>Email</Text>
                    <TextInput style={styles.Info_Container}
                    placeholder={isEmailFocused ? '' : 'T.I.P. Email'}
                    onFocus={handleEmailFocus}
                    onBlur={handleEmailBlur}/>

                    <Text style={styles.Login_Label}>Username</Text>
                    <TextInput style={styles.Info_Container}
                    placeholder={isUsernameFocused ? '' : 'Username'}
                    onFocus={handleUsernameFocus}
                    onBlur={handleUsernameBlur}/>
                    
                    <Text style={styles.Login_Label}>Password</Text>
                    <TextInput style={styles.Info_Container}
                    placeholder={isPasswordFocused ? '' : 'Password'}
                    onFocus={handlePasswordFocus}
                    onBlur={handlePasswordBlur}
                    secureTextEntry={true}/>

                    <Text style={styles.Login_Label}>Re-type Password</Text>
                    <TextInput style={styles.Info_Container}
                    placeholder={isRePasswordFocused ? '' : 'Re-type Password'}
                    onFocus={handleRePasswordFocus}
                    onBlur={handleRePasswordBlur}
                    secureTextEntry={true}/>
                </View>

                <View style={styles.Button_Container}>
                    {!isKeyboardVisible && <Custom_Button title='Sign Up' onPress={handleSubmit}/>}
                    {!isKeyboardVisible && <Custom_Button title='Go Back' onPress={handleGoBackPress} />}
                </View>

                <Modal
                visible={showConfirmationModal}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setShowConfirmationModal(false)}>
                <View style={styles.ModalContainer}>
                    <View style={styles.ModalContent}>
                        <Text style={styles.ModalText}>
                            Account created, proceed to Login.
                        </Text>
                        <TouchableOpacity onPress={() => {setShowConfirmationModal(false), handleSignUpPress()}}>
                            <Text style={styles.ModalText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 6,
        paddingVertical: hp(5),
    },
    Header: {
        height: hp(10),
        backgroundColor: '#FFCA10',
    },
    Title_Style: {
        height: hp(4),
        width:'90%',
        color: 'black',
        fontSize: hp(3),
        fontFamily: 'monospace',
        alignSelf: 'center',
    },
    Instruction_Style: {
        height: hp(6),
        width: '90%',
        fontSize: hp(2),
        fontFamily: 'monospace',
        alignSelf: 'center',
        textAlign: 'justify',
    },
    Divider: {
        height: 1,
        width: '90%',
        backgroundColor: 'black',
        alignSelf: 'center',
        marginVertical: 10,
    },
    SignUp_Container: {
        flex: 2,
        marginTop: 25,
        paddingVertical: 20,
    },
    Login_Label: {
        color: 'black',
        fontSize: hp(2.5),
        fontFamily: 'monospace',
        fontStyle: 'normal',
        width: '90%',
        alignSelf: 'center'
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
        fontSize: 16,
    },
    Button_Container: {
        flex: 1,
        gap: 10,
        justifyContent: 'center',
        alignContent: 'center',
    },
    ModalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ModalContent: {
        backgroundColor: '#FFCA10',
        padding: 10,
        borderRadius: 10,
        width: wp(70),
        alignItems: 'center',
    },
    ModalText: {
        textAlign: 'center',
        fontSize: hp(2)
    }
})

export default Sign_Up;