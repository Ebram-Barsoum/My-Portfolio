"use server";

import { ContactFormData, contactSchema } from "../schema/contactSchema";
import { ContactState } from "../types/contact";
import sendEmail from "../utils/sendEmail";

export async function contact(
    _: ContactState,
    data: ContactFormData,
): Promise<ContactState> {
    const { success, error } = contactSchema.safeParse(data);

    if (!success) {
        return {
            status: "error",
            error: error.message,
        };
    }

    try {
        await sendEmail(data);

        return {
            status: "success",
            message: "Message sent successfully",
        };
    } catch (error: unknown) {
        console.log(error);

        return {
            status: "error",
            error: "Something went wrong, please try again!",
        };
    }
}
