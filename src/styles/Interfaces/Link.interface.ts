import { Identifier } from "typescript";

export interface LinkProps {
    size? : 'default' | 'download';
    bgColor?: 'default' | 'download';
    href: string;
}