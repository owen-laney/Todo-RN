import React from 'react';
import { View, Text, StyleSheet, Pressable, Alert, Image } from 'react-native';
import { router, Router } from 'expo-router';

const DayCard = ({ name, img }) => {
  return (
    <Pressable className='flex-col gap-0 mb-4 bg-white rounded-xl p-4 h-16' onPress={() => router.push(`../app/index`)}>
        <Image source={img} className='h-56 mb-2 max-w-full rounded-2xl'></Image>
        <Text className='text-lg font-medium'>{name} DayCard</Text>
    </Pressable>
  );
};

export default DayCard;