import z from "zod";

const contactSchema = z.object({
    name: z.string()
        .nonempty("Name is required")
        .min(10, "Name must be at least 10 characters")
        .max(50, "Name must be at most 50 characters"),
    email: z.string()
        .nonempty("Email is required")
        .email("Invalid email"),
    subject: z.string()
        .nonempty("Subject is required")
        .min(10, "Subject must be at least 10 characters")
        .max(50, "Subject must be at most 50 characters"),
    message: z.string()
        .nonempty("Message is required")
        .min(10, "Message must be at least 10 characters")
        .max(600, "Message must be at most 600 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export { contactSchema, type ContactFormData };
