import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next";
import type { NextAuthOptions } from "next-auth";
import { getServerSession } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import {db} from "@/app/api/graphql/db";
import {PrismaAdapter} from "@next-auth/prisma-adapter";

const clientId = process.env.GITHUB_ID;

if (!clientId && process.env.NODE_ENV !== "development") {
    throw new Error(
        `Please define the GITHUB_ID environment variable inside .env.local`
    );
}

const clientSecret = process.env.GITHUB_SECRET;

if (!clientSecret && process.env.NODE_ENV !== "development") {
    throw new Error(
        `Please define the GITHUB_SECRET environment variable inside .env.local`
    );
}

export const config = {
    debug: process.env.NODE_ENV === "development",
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID || '',
            clientSecret: process.env.GITHUB_SECRET || '',
        }),
    ],
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    adapter: PrismaAdapter(db as any),
} satisfies NextAuthOptions;

export function auth(...args: [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]] | [NextApiRequest, NextApiResponse] | []) {
    return getServerSession(...args, config);
}
