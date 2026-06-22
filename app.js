// Database terpusat
const dlcDatabase = [
    { id: 1, title: "Actions & Stuff", category: "Textures", author: "Overille Studios", fileSize: "25.92 MB", version: "1.26.23+", extension: "mcpack", uploader: "Owner Utama" }
    // Tambahkan list lainnya di sini...
];

const apiKey = "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";

async function generateAiSummary(item) {
    const aiBox = document.getElementById('modal-ai-info');
    aiBox.innerHTML = "Menganalisis konten...";

    try {
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${apiKey}` },
            body: JSON.stringify({
                model: "llama3-8b-8192",
                messages: [{ role: "user", content: `Ringkasan untuk ${item.title} kategori ${item.category}.` }]
            })
        });
        const data = await response.json();
        aiBox.innerText = data.choices[0].message.content;
    } catch (err) {
        aiBox.innerText = "Error: API Key mungkin tidak valid.";
    }
}

// Fungsi render dan logika modal ditaruh di sini
