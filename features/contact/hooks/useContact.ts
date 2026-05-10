import { startTransition, useActionState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { ContactFormData, contactSchema } from "../schema/contactSchema";
import { contact } from "../actions/contact";

export default function useContact() {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const [state, sendEmail, isPending] = useActionState(contact, null);

    useEffect(() => {
        if (!state) return;

        if (state.status === "success") {
            toast.success(state.message);
            reset();
        }
        if (state.status === "error") toast.error(state.error);
    }, [state, reset]);


    const onSubmit: SubmitHandler<ContactFormData> = (data) => {
        console.log(data);

        startTransition(() => sendEmail(data));
    }

    return { register, errors, handleSubmit, onSubmit, isPending };
}
