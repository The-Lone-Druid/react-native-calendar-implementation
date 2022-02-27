import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Button, Card, Colors, Modal, Paragraph, Portal, Title } from 'react-native-paper';
import { Agenda } from 'react-native-calendars';
import NewSchedule from '../components/NewSchedule';

const Calendar = ({ navigation }: any) => {
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

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          icon={'plus-circle-outline'}
          color={Colors.black}
          mode={'contained'}
          style={{ marginRight: 20 }}
          onPress={() => {
            showModal();
          }}
        >
          Add new
        </Button>
      ),
    });
  }, [navigation]);

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
      {visible && (
        <NewSchedule
          visible={visible}
          showModal={showModal}
          hideModal={hideModal}
        />
      )}
    </View>
  )
}

export default Calendar

const styles = StyleSheet.create({});
