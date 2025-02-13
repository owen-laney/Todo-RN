import { Text, View, ScrollView } from "react-native";
import React from 'react';
import { verifyInstallation } from 'nativewind';
import DayCard from '../components/DayCard';


export default function Index() {
  verifyInstallation();
  return (
    <ScrollView className="px-5 bg-stone-100" >
      <Text className="font-bold text-4xl bg-gray-200" style={{ fontFamily: 'Lora' }}>Tuesday</Text>
      <Text>February 13, 2025</Text>
      <Text className="text-green-500">hey, edit app/index.tsx to edit this screen.</Text>
      <DayCard name={'hey'} img={'hey'}/>
    </ScrollView>
  );
}
