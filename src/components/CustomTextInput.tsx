import { Control, useController } from "react-hook-form"
import { Text, TextInput, TextInputProps, View } from "react-native"



type CustomTextInputProps = TextInputProps & {
    label: string
    control: Control<any>
    name: string
}



export default function CustomTextInput({ label, control, 
    name, className, ...props }: CustomTextInputProps) {


   const { 
    field: { value, onChange, onBlur }, 
    fieldState: { error } 
} = useController({ control, name, rules: { required: 'this field is required' } })

   return (
       <View>
           <Text className="mb-1 text-sm text-slate-500">{label}</Text>
           <TextInput
               value={value}
               onChange={onChange}
               onBlur={onBlur}
               className={`rounded-lg border border-gray-200 bg-slate-100 p-3 
                        ${className}`}
               {...props}
           />
           {/* enter error msj here */}
           {error && <Text className="mt-1 text-sm text-red-400">
               {error.message}
           </Text>}
       </View>
   ) 
}
