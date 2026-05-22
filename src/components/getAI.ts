export default async function getAI(context: any[]) {
    try {
        const response = await fetch('https://olympiad-oracle-backend-pwg031w7l-mrmd07s-projects.vercel.app/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },

            // IMPORTANT: send full context
            body: JSON.stringify({ message: context })
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching AI response:', error);
        throw error;
    }
}