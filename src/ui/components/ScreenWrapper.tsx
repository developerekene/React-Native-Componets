/* eslint-disable react-native/no-inline-styles */
import {
  ActivityIndicator,
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface ScreenWrapperType {
  leftItem?: React.ReactNode;
  rightItem?: React.ReactNode;
  footer?: React.ReactNode;
  headerBody: React.ReactNode;
  showLoading?: boolean | undefined;
  showToast?: boolean;
  headerText?: string;
  footerString?: string;
  wrapperBg?: string;
  showTopButton?: boolean | undefined;
  showBottomButton?: boolean | undefined;
  textOneBgColor?: string;
  textTwoBgColor?: string;
  textOneTextColor?: string;
  textTwoTextColor?: string;
  textOneTextSize?: number;
  textTwoTextSize?: number;
  onPressFirstButton?: () => void;
  onPressSecondButton?: () => void;
  buttonOneText?: string;
  buttonTwoText?: string;
  showModal?: boolean | undefined;
  toastColor?: boolean | undefined;
  toastError?: string;
  closeButton?: () => void;
  closeModal?: () => void;
  buttonTwoIcon?: React.ReactNode;
  buttonOneIcon?: React.ReactNode;
  modalItem?: React.ReactNode;
  buttonOneDisabled?: boolean;
  buttonTwoDisabled?: boolean;
  baseModal?: boolean | undefined;
  primaryColor?: string;
  secondaryColor?: string;
}

const ScreenWrapper: React.FunctionComponent<ScreenWrapperType> = ({
  showToast,
  leftItem,
  rightItem,
  headerBody,
  wrapperBg,
  showTopButton,
  showBottomButton,
  textOneBgColor,
  textTwoBgColor,
  onPressFirstButton,
  onPressSecondButton,
  textOneTextColor,
  textTwoTextColor,
  textOneTextSize,
  textTwoTextSize,
  buttonOneText,
  buttonTwoText,
  showModal,
  toastColor,
  toastError,
  closeButton,
  buttonOneDisabled,
  buttonTwoDisabled,
  baseModal,
  modalItem,
  closeModal,
  primaryColor,
  secondaryColor,
}) => {
  const width = Dimensions.get('screen').width;
  const height = Dimensions.get('screen').height;

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: wrapperBg}]}>
      {showToast ? (
        <View
          style={[styles.toast, {backgroundColor: primaryColor, width: width}]}>
          <View style={styles.innerStyleView}>
            <Ionicons
              size={30}
              color={toastColor ? '#ffffff' : 'yellow'}
              name="alert-circle"
            />
            <Text
              style={[
                styles.toastErr,
                {
                  color: toastColor ? '#ffffff' : 'yellow',
                },
              ]}>
              {toastError}
            </Text>
          </View>
          <Pressable onPress={closeButton}>
            <Ionicons
              size={30}
              color={toastColor ? '#ffffff' : 'yellow'}
              name="trash"
            />
          </Pressable>
        </View>
      ) : null}
      {showModal ? (
        <View
          style={[
            styles.modal,
            {
              height: height,
              width: width,
            },
          ]}>
          <ActivityIndicator size="small" color={primaryColor} />
        </View>
      ) : null}

      <View style={styles.header}>
        <View style={styles.topHeader}>
          {leftItem}
          {rightItem}
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={[styles.headerBody, {height: height / 1.5}]}>
          {headerBody}
        </ScrollView>
      </View>
      <View style={styles.footer}>
        {showTopButton ? (
          <>
            <Pressable
              disabled={buttonOneDisabled}
              onPress={onPressFirstButton}
              style={[
                styles.pressOneConn,
                {
                  backgroundColor:
                    buttonOneDisabled === true ? '#152233' : textOneBgColor,
                },
              ]}>
              <Text
                style={[
                  styles.buttonOne,
                  {
                    color: textOneTextColor,
                    fontSize: textOneTextSize,
                  },
                ]}>
                {buttonOneText}
              </Text>
            </Pressable>
          </>
        ) : null}
        {showBottomButton ? (
          <>
            <Pressable
              disabled={buttonTwoDisabled}
              onPress={onPressSecondButton}
              style={[
                styles.pressOneConn,
                {
                  backgroundColor:
                    buttonTwoDisabled === true ? '#152233' : textTwoBgColor,
                },
              ]}>
              <Text
                style={[
                  styles.buttonTwo,
                  {
                    color: textTwoTextColor,
                    fontSize: textTwoTextSize,
                  },
                ]}>
                {buttonTwoText}
              </Text>
            </Pressable>
          </>
        ) : null}
      </View>
      {baseModal ? (
        <View
          style={[
            styles.baseModal,
            {
              width: width,
              height: height / 1.8,
            },
          ]}>
          <Pressable onPress={closeModal}>
            <Ionicons
              name="close-circle-sharp"
              size={45}
              color={primaryColor}
            />
          </Pressable>
          <View
            style={[styles.baseModalInner, {backgroundColor: secondaryColor}]}>
            <ScrollView>{modalItem}</ScrollView>
          </View>
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  header: {
    width: '100%',
  },
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footer: {
    paddingBottom: 10,
  },
  scrollView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  pressOneConn: {
    alignItems: 'center',
    height: 60,
    justifyContent: 'center',
    marginBottom: 10,
    borderRadius: 40,
    // flexDirection: "row"
  },
  modal: {
    position: 'absolute',
    backgroundColor: '#00000080',
    alignItems: 'center',
    justifyContent: 'center',
  },
  toast: {
    position: 'absolute',
    top: 50,
    alignSelf: 'center',
    height: 80,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 1,
  },
  innerStyleView: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerInner: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: "blue",
  },
  baseModal: {
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginBottom: 40,
  },
  baseModalInner: {
    width: '100%',
    padding: 20,
    height: '100%',
    marginTop: 20,
  },
  buttonOne: {
    fontWeight: '200',
  },
  buttonTwo: {
    fontWeight: '200',
  },
  headerBody: {
    marginBottom: 50,
  },
  toastErr: {
    marginLeft: 25,
    fontWeight: '600',
  },
});
