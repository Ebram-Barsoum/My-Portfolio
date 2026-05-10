type SucessState = {
    status: "success";
    message: string;
}

type ErrorState = {
    status: "error";
    error: string;
}

export type ContactState = ErrorState | SucessState | null;
