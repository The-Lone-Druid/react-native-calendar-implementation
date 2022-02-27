import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Colors, Modal, Portal, TextInput, Title } from 'react-native-paper'
import { Formik } from 'formik';

const NewSchedule = ({ visible, hideModal }: any) => {
    const containerStyle = { backgroundColor: 'white', padding: 20, borderRadius: 10, marginHorizontal: 20 };

    return (
        <Portal>
            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                <Formik
                    initialValues={{
                        scheduleTitle: '',
                        scheduleDesc: '',
                        scheduleTime: '',
                        scheduleDate: ''
                    }}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {(formikProps) => (
                        <View>
                            <View style={{marginBottom: 20}}>
                                <Title>Add a new Schedule</Title>
                            </View>
                            {/* Schedule title input */}
                            <TextInput
                                label="Schedule Title"
                                value={formikProps.values.scheduleTitle}
                                placeholder="Schedule Title"
                                onChangeText={formikProps.handleChange('scheduleTitle')}
                                autoComplete
                                mode="outlined"
                            />
                            {/* Schedule Description input */}
                            <TextInput
                                style={{marginTop: 10}}
                                label="Description"
                                value={formikProps.values.scheduleDesc}
                                placeholder="Description"
                                onChangeText={formikProps.handleChange('scheduleDesc')}
                                autoComplete
                                mode="outlined"
                            />
                            {/* Schedule Time input */}
                            <TextInput
                                style={{marginTop: 10}}
                                label="Schedule Time"
                                value={formikProps.values.scheduleTime}
                                placeholder="Schedule Time"
                                onChangeText={formikProps.handleChange('scheduleTime')}
                                autoComplete
                                mode="outlined"
                            />
                            {/* Schedule Date input */}
                            <TextInput
                                style={{marginTop: 10}}
                                label="Schedule Date"
                                value={formikProps.values.scheduleDate}
                                placeholder="Schedule Date"
                                onChangeText={formikProps.handleChange('scheduleDate')}
                                autoComplete
                                mode="outlined"
                            />
                            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
                                <Button
                                    color={Colors.red600}
                                    mode="contained"
                                    style={{ margin: 10, marginTop: 15, marginBottom: 0 }}
                                    onPress={hideModal}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    color={Colors.blue600}
                                    mode="contained"
                                    onPress={formikProps.handleSubmit}
                                    style={{ margin: 10, marginTop: 15, marginBottom: 0 }}
                                >
                                    Add
                                </Button>
                            </View>
                        </View>
                    )}
                </Formik>
            </Modal>
        </Portal>
    )
}

export default NewSchedule

const styles = StyleSheet.create({})