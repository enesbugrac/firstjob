import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView
} from "react-native";
import { Block, Checkbox, Text } from "galio-framework";
import { Images } from "./constants";
import ArButton from "./compo/Button";
import ArIcon from "./compo/Icon";
import ArInput from "./compo/Input";
import {auth,createUserProfileDocument} from '../../firebase/firebase.utils'

const { width, height } = Dimensions.get("screen");

const Register = () => {
  const [userCredentials,setCredentials] = React.useState({email:'',password:'',displayName:''})
  const {displayName,email,password} = userCredentials;
  const handleSubmit = async event =>{
      event.preventDefault();
      try {
        
          const {user} = await auth.createUserWithEmailAndPassword(email,password);
          await createUserProfileDocument(user,{displayName,email});
          setCredentials({
              displayName : '',
              email : '',
              password:'',
          });

      } catch (error) {
          console.log(error);
      }
  }
  const handleChange = event =>{
      const { text } = event.nativeEvent;
      const type  = event.type;
      console.log(type)
      console.log(userCredentials)
      setCredentials({...userCredentials,[type] : text})
  }
  return(
      <Block flex middle>
        <StatusBar hidden />
        <ImageBackground
          source={Images.RegisterBackground}
          style={{ width, height, zIndex: 1 }}
        >
          <Block flex middle>
            <Block style={styles.registerContainer}>

              <Block flex>
                <Block flex={0.17} middle>
                  <Text color="#8898AA" size={12}>
                    Sign Up With Your Email
                  </Text>
                </Block>
                <Block flex center>
                  <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior="padding"
                    enabled
                  >
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <ArInput
                        borderless
                        name='displayName'
                        value={displayName}
                        onChange={event => {event.type='displayName' ;handleChange(event)}}
                        iconContent={
                          <ArIcon
                            size={16}
                            name="hat-3"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <ArInput
                        borderless
                        placeholder={email}
                        name="email"
                        value={email}

                        onChange={event => {event.type='email' ;handleChange(event)}}
                        
                        iconContent={
                          <ArIcon
                            size={16}
                            name="ic_mail_24px"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>
                    <Block width={width * 0.8}>
                      <ArInput
                        password
                        borderless
                        name='password'
                        value={password}
                        placeholder={password}
                        onChange={event => {event.type='password' ;handleChange(event)}}
                        iconContent={
                          <ArIcon
                            size={16}
                            name="padlock-unlocked"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                      <Block row style={styles.passwordCheck}>
                        <Text size={12} >
                          password strength:
                        </Text>
                        <Text bold size={12} >
                          {" "}
                          strong
                        </Text>
                      </Block>
                    </Block>
                    <Block row width={width * 0.75}>
                      <Checkbox
                        checkboxStyle={{
                          borderWidth: 3
                        }}
                        label="I agree with the"
                      />
                      <ArButton
                        style={{ width: 100 , marginLeft:5,color:'transparent'}}
                        textStyle={{
                          fontSize: 14
                        }}
                      >
                        Privacy Policy
                      </ArButton>
                    </Block>
                    <Block middle>
                      <ArButton style={styles.createButton} onPress={handleSubmit}>
                        <Text bold size={14}>
                          CREATE ACCOUNT
                        </Text>
                      </ArButton>
                    </Block>
                  </KeyboardAvoidingView>
                </Block>
              </Block>
            </Block>
          </Block>
        </ImageBackground>
      </Block>
    );
}

const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.9,
    height: height * 0.78,
    backgroundColor: "#F4F5F7",
    borderRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden"
  },
  socialConnect: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#8898AA"
  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1
  },
  socialTextButtons: {
    fontWeight: "800",
    fontSize: 14
  },
  inputIcons: {
    marginRight: 12
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25
  }
});

export default Register;
