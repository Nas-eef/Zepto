import React, { useState } from 'react';
import { View, Text, Button, Modal } from 'react-native';
import { useCart } from '../Components/context/CartContext';

const Popup = () => {
    const {cartItems}= useCart()
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
  
    return (
      <View>
        {cartItems.length > 0 && (
          <Button title="Open Popup" onPress={toggleModal} />
        )}
        <Modal visible={isModalVisible} animationType="slide">
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ backgroundColor: 'black', padding: 20 }}>
              <Text>This is a Popup!</Text>
              <Button title="Close" onPress={toggleModal} />
            </View>
          </View>
        </Modal>
      </View>
    );
  };

export default Popup
