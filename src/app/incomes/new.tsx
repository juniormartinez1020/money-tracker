import { Stack } from "expo-router";
import { Button,  View } from "react-native";
import { FormProvider, useForm } from "react-hook-form"
import CustomTextInput from "~/components/CustomTextInput";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from 'zod'

import {Picker} from '@react-native-picker/picker';
import CustomPicker from "~/components/CustomPicker";

const incomeSourceSchema = z.object({
    nameTracker: z.string().min(1, 'name track is required'),
    exceptedAmount: z.coerce.number().min(1, 'excepted amount is required'),
    category: z.string().min(1, 'category is required')
})

type IncomeSource = z.infer<typeof incomeSourceSchema>

export default function NewIncomeScreen() {

    const methods = useForm<IncomeSource>({
        resolver: zodResolver(incomeSourceSchema),
        defaultValues: {
            category: 'Active'
        }
    })


      const { control, handleSubmit } = methods 

      const onSubmit = (data: IncomeSource) => {
        console.log(data)
      }

    
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
              
                <CustomPicker
                control={control}
                name="category"
                label="category"
                items={[{
                    label: 'Active',
                    value: 'active'
                }, {
                    label: 'Passive',
                    value: 'passive'
                }, {
                    label: 'Portfolio',
                    value: 'portfolio'
                }]}
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