import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Colors, Modal, Portal, TextInput, Title } from 'react-native-paper'
import { Formik } from 'formik';
import DateTimePicker from '@react-native-community/datetimepicker';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const NewSchedule = ({ visible, hideModal, items, setItems }: any) => {
    const [show, setShow] = useState(false);
    const [mode, setMode]: any = useState('date');
    const [formDate, setFormDate]: any = useState();
    const [formTime, setFormTime]: any = useState();

    const onChange = (event: any, selectedDate: any) => {
        if (mode === 'date') {
            setShow(false);
            if (selectedDate !== undefined) {
                let currentDate = `${selectedDate.getFullYear()}-${(selectedDate.getMonth() + 1) < 10 ? '0' + (selectedDate.getMonth() + 1) : selectedDate.getMonth() + 1}-${selectedDate.getDate() < 10 ? '0' + selectedDate.getDate() : selectedDate.getDate()}`;
                setFormDate(currentDate);
            } else {
                setFormDate('');
            }
        } else if (mode === 'time') {
            setShow(false);
            if (selectedDate !== undefined) {
                let currentTime = `${selectedDate.getHours() < 10 ? '0' + selectedDate.getHours() : selectedDate.getHours()}:${selectedDate.getMinutes() < 10 ? '0' + selectedDate.getMinutes() : selectedDate.getMinutes()}`;
                setFormTime(currentTime);
            } else {
                setFormTime('');
            }
        }
    };

    const showMode = (pickerMode: any) => {
        setShow(true);
        setMode(pickerMode);
    };

    const containerStyle = { backgroundColor: 'white', padding: 20, borderRadius: 10, marginHorizontal: 20 };

    return (
        <Portal>
            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                <Formik
                    initialValues={{
                        scheduleTitle: '',
                        scheduleDesc: '',
                    }}
                    onSubmit={(values) => {
                        setItems((prevItems: any) => {
                            return {
                                ...prevItems,
                                [formDate.toString()]: [
                                    {
                                        name: values.scheduleTitle,
                                        content: values.scheduleDesc,
                                        date: formDate,
                                    }
                                ]
                            }
                        })
                        console.log(items);
                        hideModal();
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
                                label="Title"
                                value={formikProps.values.scheduleTitle}
                                placeholder="Title"
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
                                    label="Schedule"
                                    value={formDate}
                                    placeholder="Schedule"
                                    autoComplete
                                    mode="outlined"
                                    disabled
                                />
                                <TouchableOpacity
                                    onPress={() => showMode('date')}
                                >
                                    <MaterialIcons name="date-range" size={26} color={Colors.blue500} />
                                </TouchableOpacity>
                            </View>
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
                                    value={formTime}
                                    placeholder="Schedule Time"
                                    autoComplete
                                    mode="outlined"
                                    disabled
                                />
                                <TouchableOpacity
                                    onPress={() => showMode('time')}
                                >
                                    <AntDesign name="clockcircleo" size={24} color={Colors.blue500} />
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
                        value={new Date()}
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