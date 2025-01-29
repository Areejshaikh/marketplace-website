"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { client } from "@/sanity/lib/client"



const formSchema = z.object({
    firstName: z.string().min(1).max(50),
    email: z.string().email()
})

type FormType = z.infer<typeof formSchema>

const ContactForm = () => {

    const form = useForm<FormType>({
        resolver: zodResolver(formSchema),
    })

    async function onSubmit(values: FormType) {

        await client.create({
            _type: "contactForm",
            name: values.firstName,
            email: values.email
        })
    }
  


    return (
        <div className="max-w-md mx-auto my-24">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>First Name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="First Name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />


                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    )
}

export default ContactForm