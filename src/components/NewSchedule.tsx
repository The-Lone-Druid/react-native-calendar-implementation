import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Colors, Modal, Portal, TextInput, Title } from 'react-native-paper'
import { Formik } from 'formik';
import DateTimePicker from '@react-native-community/datetimepicker';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const NewSchedule = ({ visible, hideModal }: any) => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode]: any = useState('date');
    const [show, setShow] = useState(false);
    const [formDate, setFormDate] = useState('');
    const [formTime, setTime] = useState('');

    const onChange = (event: any, selectedDate: any) => {
        setShow(Platform.OS === 'ios');
        setDate(selectedDate);
        setFormDate(selectedDate);
        console.log(formDate);
        console.log(event);
    };

    const showMode = (currentMode: any) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

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
                            <View style={{ marginBottom: 20 }}>
                                <Title>Add a new Schedule</Title>
                            </View>
                            {/* Schedule title input */}
                            <TextInput
                                style={{
                                    marginTop: 10,
                                    backgroundColor: 'white',
                                }}
                                label="Schedule Title"
                                value={formikProps.values.scheduleTitle}
                                placeholder="Schedule Title"
                                onChangeText={formikProps.handleChange('scheduleTitle')}
                                autoComplete
                                mode="outlined"
                            />
                            {/* Schedule Description input */}
                            <TextInput
                                style={{
                                    marginTop: 10,
                                    backgroundColor: 'white',
                                }}
                                label="Description"
                                value={formikProps.values.scheduleDesc}
                                placeholder="Description"
                                onChangeText={formikProps.handleChange('scheduleDesc')}
                                autoComplete
                                mode="outlined"
                            />
                            {/* Schedule Time input */}
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginTop: 10,
                            }}>
                                <TextInput
                                    style={{
                                        backgroundColor: 'white',
                                        marginRight: 10,
                                        width: '85%'
                                    }}
                                    label="Schedule Time"
                                    value={formikProps.values.scheduleTime}
                                    placeholder="Schedule Time"
                                    onChangeText={formikProps.handleChange('scheduleTime')}
                                    autoComplete
                                    mode="outlined"
                                    disabled
                                />
                                <TouchableOpacity
                                    onPress={showTimepicker}
                                >
                                    <AntDesign name="clockcircleo" size={24} color="black" />
                                </TouchableOpacity>
                            </View>
                            {/* Schedule Date input */}
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginTop: 10,
                            }}>
                                <TextInput
                                    style={{
                                        backgroundColor: 'white',
                                        marginRight: 10,
                                        width: '85%'
                                    }}
                                    label="Schedule Date"
                                    value={formikProps.values.scheduleDate}
                                    placeholder="Schedule Date"
                                    onChangeText={formikProps.handleChange('scheduleDate')}
                                    autoComplete
                                    mode="outlined"
                                    disabled
                                />
                                <TouchableOpacity
                                    onPress={showDatepicker}
                                >
                                    <MaterialIcons name="date-range" size={26} color="black" />
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
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
                                    style={{ margin: 10, marginTop: 15, marginBottom: 0, marginRight: 0 }}
                                >
                                    Add
                                </Button>
                            </View>
                        </View>
                    )}
                </Formik>
                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={false}
                        display="default"
                        onChange={onChange}
                    />
                )}
            </Modal>
        </Portal>
    )
}

export default NewSchedule

const styles = StyleSheet.create({})