import { JSX } from 'react'
import { ContactFormData } from '../schema/contactSchema'
import { Body, Container, Head, Hr, Html, Link, Preview, Text } from 'react-email';

export default function EmailTemplate({ name, email, subject, message }: ContactFormData): JSX.Element {
    return (
        <Html>
            <Head />
            <Preview>New message from {name} via your portfolio</Preview>
            <Body style={{ background: "#f4f4f5", fontFamily: "sans-serif" }}>
                <Container style={{ background: "#fff", margin: "40px auto", padding: "32px", maxWidth: "560px" }}>
                    <Text style={{ fontSize: "18px", fontWeight: 600, margin: "0 0 24px" }}>
                        New message from your portfolio
                    </Text>
                    <Hr />
                    <Text style={{ fontSize: "13px", color: "#71717a", margin: "16px 0 4px" }}>NAME</Text>
                    <Text style={{ fontSize: "15px", margin: "0 0 16px" }}>{name}</Text>
                    <Text style={{ fontSize: "13px", color: "#71717a", margin: "0 0 4px" }}>EMAIL</Text>
                    <Link href={`mailto:${email}`} style={{ fontSize: "15px", color: "#4f7fff" }}>{email}</Link>
                    <Text style={{ fontSize: "13px", color: "#71717a", margin: "16px 0 4px" }}>SUBJECT</Text>
                    <Text style={{ fontSize: "15px", margin: "0 0 16px" }}>{subject}</Text>
                    <Hr />
                    <Text style={{ fontSize: "13px", color: "#71717a", margin: "16px 0 4px" }}>MESSAGE</Text>
                    <Text style={{ fontSize: "15px", lineHeight: "1.7", margin: "0" }}>{message}</Text>
                    <Hr style={{ margin: "24px 0" }} />
                    <Link href={`mailto:${email}`} style={{
                        background: "#1a1a2e", color: "#fff", padding: "10px 20px",
                        borderRadius: "6px", fontSize: "13px", textDecoration: "none"
                    }}>
                        Reply to {name}
                    </Link>
                </Container>
            </Body>
        </Html>
    );
}
