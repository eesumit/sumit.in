import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {to,subject,html} = body;
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'yessumitsingh007@gmail.com',
            subject: subject,
            html: `<p>${html} <br/>mail received from ${to}</p>`
        });
        
        return Response.json({success:"mail was sent."});
    } catch (error) {
        console.log("error in sending mail", error);

        return Response.json({ error });
    }
}
