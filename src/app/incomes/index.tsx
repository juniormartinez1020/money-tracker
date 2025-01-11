import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function IncomesScreen() {
    return (
        <View>
            <Stack.Screen
            options={{
                title: 'Incomes',
                headerRight: () => (
                    <Link href={{ pathname: '/incomes/new' }} asChild>
                        <AntDesign name="plus" size={24} color="black" />
                    </Link>
               )
            }}
            />
            <Text>incomes</Text>
        </View>
    )
}