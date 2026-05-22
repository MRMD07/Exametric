export default async function getAI(context: any[], id: number = 1, subject: string = "") {
    try {
        const response = await fetch('https://olympiad-oracle-backend-pwg031w7l-mrmd07s-projects.vercel.app/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },

            // IMPORTANT: send full context
            body: JSON.stringify({ message: context, bot_id: id, subject: id == 2 ? subject: null })
        });
        const data = await response.json();
        if (data.reply) {
            return data.reply;
        } else {
            return data.error || 'No reply from AI';
        }
    } catch (error) {
        return 'Error communicating with AI';
    }
}