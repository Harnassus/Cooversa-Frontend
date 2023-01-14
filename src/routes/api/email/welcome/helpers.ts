import sendgrid from '@sendgrid/mail';
import type {MailDataRequired} from '@sendgrid/helpers/classes/mail';
import {PRIVATE_SENDGRID_API_KEY} from "$env/static/private";

sendgrid.setApiKey(PRIVATE_SENDGRID_API_KEY);

export async function sendWelcomeEmail(email: string, name: string) {
    try {
        const templateId = 'd-82008c977789427ab374033661d83610';
        const msg: MailDataRequired = {
            to: email,
            from: {
                email: 'apply@cooversa.com',
                name: 'Cooversa',
            },
            templateId,
            dynamicTemplateData: {
                name,
            }
        }

        await sendgrid.send(msg);
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export async function sendSlackEmail(email: string, name: string) {
    try {
        const templateId = 'd-4f1bb1a680a941a7b9414224952e2d6a';
        const msg: MailDataRequired = {
            to: email,
            from: {
                email: 'no-reply@cooversa.com',
                name: 'Cooversa',
            },
            templateId,
            dynamicTemplateData: {
                first_name: name,
            }
        }

        await sendgrid.send(msg);
    } catch (error) {
        console.log(error);
        throw error;
    }
}