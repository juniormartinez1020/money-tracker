import { Stack } from "expo-router";
import { Button,  View } from "react-native";
import { FormProvider, useForm } from "react-hook-form"
import CustomTextInput from "~/components/CustomTextInput";



export default function NewIncomeScreen() {

    const methods = useForm({
        defaultValues: {
            nameTracker: '',
            exceptedAmount: '',
            category: ''
        }
    })


      const { control, handleSubmit } = methods 

      const onSubmit = (data: any) => console.log(data)

    
    return (
        <View className="flex-1 bg-slate-50 p-4">
            <Stack.Screen options={{ title: 'New Income Source'}} />
            <FormProvider {...methods}>
            <View className="gap-4">
                  <CustomTextInput
                    control={control}
                    name="name"
                    label="NameTracker" 
                    placeholder="Enter income source"
                    />

              
                <CustomTextInput 
                control={control}
                name="Excepted amount"
                label="Excepted amount" 
                placeholder="Enter amount"
                keyboardType="numeric"
                />
                <CustomTextInput 
                control={control}
                name="Category"
                label="Category" 
                placeholder="enter category" 
                />
            </View>
                {/* touchable button */}
               <Button 
               title="Create Income" 
               className='mt-auto'
               onPress={handleSubmit(onSubmit)}
                />
            </FormProvider>


            </View>
    )
}