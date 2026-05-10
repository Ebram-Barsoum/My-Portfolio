"use client";

import type { JSX } from "react";
import { IoSendOutline } from "react-icons/io5";

import useContact from "../hooks/useContact";

import Input from "@/shared/ui/Input";
import Button from "@/shared/ui/Button";
import { buttonsConfig } from "@/shared/config/buttons";

import Grid from "@/shared/ui/Grid";

export function ContactForm(): JSX.Element {
    const {
        register,
        handleSubmit,
        onSubmit,
        errors,
        isPending
    } = useContact();

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="slide-up flex flex-col gap-4 p-6 bg-surface-container-lowest rounded-lg border-t-3 border-t-primary"
        >
            <Grid className="gap-4 sm:grid-cols-2">
                <Input
                    label="Name"
                    id="name"
                    placeholder="Enter Your Name"
                    {...register("name")}
                    error={errors.name?.message}
                    disabled={isPending}
                />
                <Input
                    label="Email"
                    id="email"
                    placeholder="Enter Your Email"
                    {...register("email")}
                    error={errors.email?.message}
                    disabled={isPending}
                />
            </Grid>

            <Input
                label="Subject"
                id="subject"
                placeholder="Enter the Subject"
                {...register("subject")}
                error={errors.subject?.message}
                disabled={isPending}
            />

            <Input
                id="message"
                label="Message"
                textarea
                placeholder="Enter Your Message"
                {...register("message")}
                error={errors.message?.message}
                disabled={isPending}
                className="h-60! resize-none"
            />

            <Button
                variant="primary"
                type="submit"
                config={buttonsConfig}
                label="Send"
                title="Send"
                className="self-end px-6 py-2 rounded-sm font-mono text-sm font-bold text-on-primary"
                disabled={isPending}
            >
                Send
                <IoSendOutline />
            </Button>
        </form>
    )
}
