import { Stack } from "expo-router";
import { Button, Text, TextInput, TextInputProps, TouchableOpacity, View } from "react-native";


type CustomTextInputProps = TextInputProps & {
    label: string
}


function CustomInput({ label, className, ...props }: CustomTextInputProps) {
   return (
    <View>
                    <Text className="mb-1 text-sm text-slate-500">{label}</Text>
                    <TextInput
                    className={`rounded-lg border border-gray-200 bg-slate-100 p-3 
                        ${className}`}
                   {...props}
                    />
                    {/* enter error msj here */}
                    <Text className="mt-1 text-sm text-red-400">
                        error msj will go here
                    </Text>
                </View>
   ) 
}

export default function NewIncomeScreen() {
    return (
        <View className="flex-1 bg-slate-50 p-4">
            <Stack.Screen options={{ title: 'New Income Source'}} />

            <View className="gap-4">
                <CustomInput 
                label="NameTracker" 
                placeholder="Enter income source"
                />
                <CustomInput 
                label="Excepted amount" 
                placeholder="Enter amount"
                keyboardType="numeric"
                />
                <CustomInput label="Category" placeholder="enter category" />
            </View>


                {/* touchable button */}
               <Button title="Create Income" className='mt-auto' />
            </View>
    )
}