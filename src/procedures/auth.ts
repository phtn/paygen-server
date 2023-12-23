import {procedure} from "@trpc";
import {TEmailAndPassword} from "@resource/auth";
import {compile} from "@elysiajs/trpc";

export const UserEmailPass = procedure.input(compile(TEmailAndPassword))