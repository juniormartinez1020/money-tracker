import { Picker } from "@react-native-picker/picker"
import { Control, useController } from "react-hook-form"
import { Text, View } from "react-native"



type CustomTextInputProps = {
    label: string
    control: Control<any>
    name: string
    items: { label: string, value: string }[]
}


export default function CustomPicker({ label, control, 
    name, items }: CustomTextInputProps) {


   const { 
    field: { value, onChange, onBlur }, 
    fieldState: { error } 
} = useController({ control, name })

   return (
       <View>
           <Text className="mb-1 text-sm text-slate-500">{label}</Text>
           <Picker
               selectedValue={value}
               onValueChange={(itemValue) => onChange(itemValue)}
               onBlur={onBlur}
               >
               {items.map((item) => (
                <Picker.Item 
                key={item.value}
                label={item.label}
                />
               ))}
           </Picker>
           {/* enter error msj here */}
           {error && <Text className="mt-1 text-sm text-red-400">
               {error.message}
           </Text>}
       </View>
   ) 
}
