import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Card, Modal, Paragraph, Portal, Title } from 'react-native-paper';
import { Agenda } from 'react-native-calendars';

const Calendar = () => {
  const [items, setItems]: any = useState({
    '2021-02-01': [
      {
        name: 'Hello there buddy',
        content: 'This is a very content for the paragraph or any other area bruh!'
      },
      {
        name: 'This is another schedule on a same day',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque officiis suscipit vel. Alias rem hic a distinctio neque ab placeat sequi sit.'
      }
    ],
  });
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(() => true);
  }

  const hideModal = () => {
    setVisible(() => false);
  }
  const containerStyle = {backgroundColor: 'white', padding: 20, borderRadius: 10};

  const renderItem = (item: any) => {
    return (
      <TouchableOpacity>
        <Card style={{ marginTop: 30, marginRight: 20 }}>
          <Card.Content>
            <Title>{item.name}</Title>
            <Paragraph>{item.content}</Paragraph>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    )
  }

  return (
    <View style={{flex: 1}}>
      <Agenda
        items={items}
        selected={'2021-02-01'}
        renderItem={renderItem}
      />
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text>Can add new schedules from here.</Text>
        </Modal>
      </Portal>
    </View>
  )
}

export default Calendar

const styles = StyleSheet.create({});
