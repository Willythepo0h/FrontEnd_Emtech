import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Modal, TouchableOpacity, View, Text, Image, StyleSheet, TextInput, Animated, Keyboard, KeyboardAvoidingView} from 'react-native';
import { HomeOutlined } from '@ant-design/icons';
import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';

const Homepage = () => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    const handleProfile = () => {
        navigation.navigate('Profile');
    };

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    const handleLogOut = () => {
        navigation.navigate('Login');
    };

    return(
        <View style={styles.Container}>
            <View style={styles.Header}>
                    <Image source={require('./../assets/Logo.png')} style={styles.Logo}/>
                    <Image source={require('./../assets/cname.png')} style={styles.Company_Name}/>
            </View>
            <View style={styles.Content_Container}>
                    <TextInput style={styles.Search_Bar}
                    placeholder='Search Item...'/>
                <View style={styles.Content}/>
            </View>

            <View style={styles.Navigation}>
                <View style={styles.Icon_Container}>
                    <TouchableOpacity onPress={handleProfile}>
                        <Image source={require('./../assets/profile_nobg.gif')} style={styles.Icons}/>
                    </TouchableOpacity>
                    <Text>Profile</Text>
                </View>
                <View style={styles.Icon_Container}>
                    <TouchableOpacity><Image source={require('./../assets/Home_nobg.gif')} style={styles.Icons}/></TouchableOpacity>
                    <Text>Home</Text>
                </View>
                <View style={styles.Icon_Container}>
                    <TouchableOpacity onPress={toggleModal}>
                        <Image source={require('./../assets/Logout_nobg.gif')} style={styles.Logout}/>
                    </TouchableOpacity>
                    <Text>LogOut</Text>
                </View>
            </View>

            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="fade">
                <View style={styles.ModalContainer}>
                    <View style={styles.ModalContent}>
                        <Text style={styles.ModalText}>
                            Log Out Account?
                        </Text>
                        <TouchableOpacity onPress= {() =>{toggleModal(), handleLogOut()}}>
                            <Text style={styles.ModalText}>Yes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress= {toggleModal}>
                            <Text style={styles.ModalText}>No</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create ({
    Container: {
        flex: 1
    },
    Content_Container: {
        marginHorizontal: 20,
    },
    Header: {
        height: hp(10),
        width: '100%',
        marginTop: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFCA10'
    },
    Logo: {
        height: hp(8),
        width: wp(17),
        resizeMode: 'contain',
    },
    Company_Name: {
        height: hp(10),
        width: wp(73),
        resizeMode: 'contain',
    },
    Search_Bar: {
        marginTop: 5,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 40,
        height: hp(6),
        color: 'gray',
        fontSize: hp(2.5),
        padding: 10,
    },
    Title: {
        backgroundColor: 'pink',
        marginVertical: 3,
        fontSize: hp(2.5),
        fontFamily: 'monospace',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Content: {
        flex: 2,
        position: 'absolute',
        backgroundColor: 'tomato',
        height: '100%'
    },
    Navigation: {
        width: '100%',
        height: hp(10),
        backgroundColor: '#FFCA10',
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        bottom: 0,
    },
    Icons: {
        height: hp(7),
        width: wp(15),
        resizeMode: 'contain',
    },
    Logout: {
        height: hp(6),
        width: wp(15),
        resizeMode: 'contain',
        paddingBottom: 5,
    },
    Icon_Container: {
        alignItems: 'center',
        justifyContent: 'center'
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

export default Homepage;