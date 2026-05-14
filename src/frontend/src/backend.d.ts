import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface EmailSignup {
    source: string;
    email: string;
    timestamp: bigint;
}
export interface AddEmailResult {
    ok: boolean;
    message: string;
}
export interface backendInterface {
    addEmail(email: string, source: string): Promise<AddEmailResult>;
    getEmailCount(): Promise<bigint>;
    getEmails(): Promise<Array<EmailSignup>>;
}
