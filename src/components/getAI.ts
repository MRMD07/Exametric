export default async function getAI(context: any[]) {
    try {
        const response = await fetch('https://olympiad-oracle-backend-pwg031w7l-mrmd07s-projects.vercel.app/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },

            // IMPORTANT: send full context
            body: JSON.stringify({ message: context })
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